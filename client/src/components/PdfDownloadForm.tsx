import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import PrivacyPolicyDialog from "@/components/PrivacyPolicyDialog";
import TermsConditionsDialog from "@/components/TermsConditionsDialog";
import { useToast } from "@/hooks/use-toast";
import { COUNTRIES } from "@/data/countries";

type PdfDownloadFormProps = {
  resourceTitle: string;
  sectionTitle?: string;
  pdfUrl: string;
  pdfFileName: string;
  formspreeEndpoint: string;
};

export default function PdfDownloadForm({
  resourceTitle,
  sectionTitle = "Download Workshop Overview",
  pdfUrl,
  pdfFileName,
  formspreeEndpoint,
}: PdfDownloadFormProps) {
  const { toast } = useToast();
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    terms: false,
    marketing: false,
  });

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfFileName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.terms) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields marked with * are required.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone) {
      const phoneDigitsOnly = formData.phone.replace(/[^0-9]/g, "");
      if (phoneDigitsOnly.length < 7) {
        toast({
          title: "Invalid Phone Number",
          description: "Please enter a valid phone number with at least 7 digits.",
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company,
          country: formData.country || "Not specified",
          marketingOptIn: formData.marketing ? "Yes" : "No",
          resource: resourceTitle,
          downloadType: "PDF",
          pdfFileName,
          _replyto: formData.email,
          _subject: `PDF Download: ${resourceTitle} — ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: "Form submission failed" }));
        throw new Error(error.error || "Form submission failed");
      }

      setDownloadReady(true);
      triggerDownload();

      toast({
        title: "Download started",
        description: `Thank you. Your ${resourceTitle} PDF download should begin shortly.`,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again later.";
      toast({
        title: "Unable to process request",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to receive the {resourceTitle} PDF.
          </p>
        </div>

        <Card className="premium-card rounded-2xl shadow-xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="pdf-firstName">
                    First Name *
                  </label>
                  <Input
                    id="pdf-firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="pdf-lastName">
                    Last Name *
                  </label>
                  <Input
                    id="pdf-lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="pdf-email">
                  Email Address *
                </label>
                <Input
                  id="pdf-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="pdf-phone">
                    Phone Number
                  </label>
                  <Input
                    id="pdf-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const filtered = e.target.value.replace(/[^0-9()\-\s+]/g, "");
                      if (filtered.length <= 20) {
                        setFormData({ ...formData, phone: filtered });
                      }
                    }}
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="pdf-company">
                    Company Name *
                  </label>
                  <Input
                    id="pdf-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="pdf-country">
                  Country
                </label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger id="pdf-country">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="pdf-terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) => setFormData({ ...formData, terms: checked === true })}
                  required
                />
                <label htmlFor="pdf-terms" className="text-sm text-card-foreground cursor-pointer">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setTermsDialogOpen(true);
                    }}
                    className="text-primary hover:underline"
                  >
                    terms &amp; conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setPrivacyDialogOpen(true);
                    }}
                    className="text-primary hover:underline"
                  >
                    privacy policy
                  </button>{" "}
                  *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="pdf-marketing"
                  checked={formData.marketing}
                  onCheckedChange={(checked) => setFormData({ ...formData, marketing: checked === true })}
                />
                <label htmlFor="pdf-marketing" className="text-sm text-card-foreground cursor-pointer">
                  I&apos;d like to receive exclusive offers, promotions, and updates
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1 premium-button py-4 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Download"}
                </Button>
                {downloadReady && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 py-4 text-lg font-semibold"
                    onClick={triggerDownload}
                  >
                    <i className="fas fa-download mr-2"></i>
                    Download Again
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <PrivacyPolicyDialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen} />
      <TermsConditionsDialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen} />
    </section>
  );
}
