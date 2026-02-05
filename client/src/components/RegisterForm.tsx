import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Replace with your actual Formspree form ID
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgolwowl";

export default function RegisterForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    region: '',
    message: '',
  });

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          company: data.company,
          region: data.region,
          message: data.message,
          _replyto: data.email,
          _subject: `New Registration Form Submission from ${data.firstName} ${data.lastName}`,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(error.error || 'Form submission failed');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        region: '',
        message: '',
      });
    },
    onError: (error) => {
      let errorMessage = error?.message || "Please try again later or contact us directly.";
      if (error.message.includes("Failed to fetch")) {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.message.includes("invalid email")) {
        errorMessage = "Please enter a valid email address.";
      }
      toast({
        title: "Error Sending Message",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "First Name, Last Name, Email, and Message are required.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-2xl shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="firstName">First Name *</label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Enter your first name"
                    data-testid="input-first-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="lastName">Last Name *</label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Enter your last name"
                    data-testid="input-last-name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="email">Email Address *</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email address"
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="company">Company</label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Enter your company name"
                    data-testid="input-company"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="region">Region</label>
                <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
                  <SelectTrigger data-testid="select-region">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="australia-nz">Australia & New Zealand</SelectItem>
                    <SelectItem value="singapore-sea">Singapore & South East Asia</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="uk-europe">UK & Europe</SelectItem>
                    <SelectItem value="usa-americas">USA & Americas</SelectItem>
                    <SelectItem value="middle-east">Middle East</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="message">Message *</label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements and how we can help..."
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 text-lg font-semibold hover:bg-accent/90"
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
