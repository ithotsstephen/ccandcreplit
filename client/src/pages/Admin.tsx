import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";

export default function Admin() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect to home if not authenticated or not admin
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      toast({
        title: "Unauthorized",
        description: "You need admin privileges to access this page.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return;
    }
  }, [isAuthenticated, isLoading, user, toast]);

  // Fetch data
  const { data: services = [] } = useQuery({
    queryKey: ["/api/services"],
    enabled: isAuthenticated,
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ["/api/testimonials"],
    enabled: isAuthenticated,
  });

  const { data: faqs = [] } = useQuery({
    queryKey: ["/api/faqs"],
    enabled: isAuthenticated,
  });

  const { data: contactSubmissions = [] } = useQuery({
    queryKey: ["/api/admin/contact-submissions"],
    enabled: isAuthenticated,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user?.isAdmin) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Admin Access Required</h1>
          <p className="text-muted-foreground mb-6">You need admin privileges to access this page.</p>
          <a href="/api/login" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Login as Admin
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-foreground">CC&C Solutions - Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome, {user.firstName || user.email}</span>
              <a href="/api/logout" className="text-sm text-muted-foreground hover:text-foreground">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="services" className="text-xs sm:text-sm">Services</TabsTrigger>
            <TabsTrigger value="testimonials" className="text-xs sm:text-sm hidden sm:flex">Testimonials</TabsTrigger>
            <TabsTrigger value="faqs" className="text-xs sm:text-sm">FAQs</TabsTrigger>
            <TabsTrigger value="contacts" className="text-xs sm:text-sm">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{services.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{testimonials.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{faqs.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contactSubmissions.length}</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Services Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service: any) => (
                    <div key={service.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.category}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${service.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {service.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Testimonials Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testimonials.map((testimonial: any) => (
                    <div key={testimonial.id} className="p-4 border border-border rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold">{testimonial.author}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faqs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>FAQs Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq: any) => (
                    <div key={faq.id} className="p-4 border border-border rounded-lg">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{faq.answer}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                        <span className="text-muted-foreground">Category: {faq.category}</span>
                        <span className={`px-2 py-1 rounded self-start ${faq.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {faq.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactSubmissions.length > 0 ? (
                    contactSubmissions.map((contact: any) => (
                      <div key={contact.id} className="p-4 border border-border rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                          <div className="flex-1">
                            <h3 className="font-semibold">{contact.firstName} {contact.lastName}</h3>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            {contact.company && <p className="text-sm text-muted-foreground">{contact.company}</p>}
                          </div>
                          <span className="text-xs text-muted-foreground self-start">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm mb-2">{contact.message}</p>
                        {contact.service && (
                          <p className="text-xs text-muted-foreground">Service Interest: {contact.service}</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-8">No contact submissions yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
