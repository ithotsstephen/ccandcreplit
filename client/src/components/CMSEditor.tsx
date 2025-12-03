import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import type { Content, Service, CaseStudy, Testimonial, FAQ, ContactSubmission } from "@shared/schema";


export default function CMSEditor() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("content");

  // Content Management
  const { data: contentItems = [], isLoading: contentLoading, error: contentError } = useQuery<Content[]>({
    queryKey: ['/api/content'],
  });

  useEffect(() => {
    if (contentError && isUnauthorizedError(contentError as Error)) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [contentError, toast]);

  // Services Management
  const { data: services = [], isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Case Studies Management
  const { data: caseStudies = [], isLoading: caseStudiesLoading } = useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });

  // Testimonials Management
  const { data: testimonials = [], isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // FAQs Management
  const { data: faqs = [], isLoading: faqsLoading } = useQuery<FAQ[]>({
    queryKey: ['/api/faqs'],
  });

  // Contact Submissions
  const { data: contactSubmissions = [], isLoading: contactLoading, error: contactError } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/admin/contact-submissions'],
  });

  useEffect(() => {
    if (contactError && isUnauthorizedError(contactError as Error)) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [contactError, toast]);

  // Content Creation
  const createContentMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/admin/content', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/content'] });
      toast({
        title: "Content Created",
        description: "Content has been created successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create content.",
        variant: "destructive",
      });
    }
  });

  // Service Creation
  const createServiceMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/admin/services', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/services'] });
      toast({
        title: "Service Created",
        description: "Service has been created successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create service.",
        variant: "destructive",
      });
    }
  });

  // Case Study Creation
  const createCaseStudyMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/admin/case-studies', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/case-studies'] });
      toast({
        title: "Case Study Created",
        description: "Case study has been created successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create case study.",
        variant: "destructive",
      });
    }
  });

  // Testimonial Creation
  const createTestimonialMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/admin/testimonials', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      toast({
        title: "Testimonial Created",
        description: "Testimonial has been created successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create testimonial.",
        variant: "destructive",
      });
    }
  });

  // FAQ Creation
  const createFAQMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/admin/faqs', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/faqs'] });
      toast({
        title: "FAQ Created",
        description: "FAQ has been created successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create FAQ.",
        variant: "destructive",
      });
    }
  });

  const [newContent, setNewContent] = useState({
    type: '',
    title: '',
    content: '',
    metadata: {}
  });

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    category: 'training',
    industry: '',
    icon: ''
  });

  const [newCaseStudy, setNewCaseStudy] = useState({
    title: '',
    description: '',
    client: '',
    industry: '',
    imageUrl: '',
    content: ''
  });

  const [newTestimonial, setNewTestimonial] = useState({
    content: '',
    author: '',
    role: '',
    company: '',
    rating: 5
  });

  const [newFAQ, setNewFAQ] = useState({
    question: '',
    answer: '',
    category: '',
    order: 0
  });

  const handleCreateContent = () => {
    if (!newContent.type || !newContent.title || !newContent.content) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    createContentMutation.mutate(newContent);
    setNewContent({ type: '', title: '', content: '', metadata: {} });
  };

  const handleCreateService = () => {
    if (!newService.name || !newService.description) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    createServiceMutation.mutate(newService);
    setNewService({ name: '', description: '', category: 'training', industry: '', icon: '' });
  };

  const handleCreateCaseStudy = () => {
    if (!newCaseStudy.title || !newCaseStudy.description) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    createCaseStudyMutation.mutate(newCaseStudy);
    setNewCaseStudy({ title: '', description: '', client: '', industry: '', imageUrl: '', content: '' });
  };

  const handleCreateTestimonial = () => {
    if (!newTestimonial.content || !newTestimonial.author) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    createTestimonialMutation.mutate(newTestimonial);
    setNewTestimonial({ content: '', author: '', role: '', company: '', rating: 5 });
  };

  const handleCreateFAQ = () => {
    if (!newFAQ.question || !newFAQ.answer) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    createFAQMutation.mutate(newFAQ);
    setNewFAQ({ question: '', answer: '', category: '', order: 0 });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Content Management System</h1>
        <p className="text-muted-foreground">Manage all website content, services, and user interactions</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-6 w-full" data-testid="tabs-cms">
          <TabsTrigger value="content" data-testid="tab-content">Content</TabsTrigger>
          <TabsTrigger value="services" data-testid="tab-services">Services</TabsTrigger>
          <TabsTrigger value="case-studies" data-testid="tab-case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="testimonials" data-testid="tab-testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="faqs" data-testid="tab-faqs">FAQs</TabsTrigger>
          <TabsTrigger value="contacts" data-testid="tab-contacts">Contacts</TabsTrigger>
        </TabsList>

        {/* Content Management */}
        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={newContent.type} onValueChange={(value) => setNewContent({...newContent, type: value})}>
                <SelectTrigger data-testid="select-content-type">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hero">Hero Section</SelectItem>
                  <SelectItem value="about">About Section</SelectItem>
                  <SelectItem value="mission">Mission Statement</SelectItem>
                  <SelectItem value="values">Company Values</SelectItem>
                  <SelectItem value="announcement">Announcement</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Content title"
                value={newContent.title}
                onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                data-testid="input-content-title"
              />
              <Textarea
                placeholder="Content body"
                value={newContent.content}
                onChange={(e) => setNewContent({...newContent, content: e.target.value})}
                rows={6}
                data-testid="textarea-content-body"
              />
              <Button 
                onClick={handleCreateContent}
                disabled={createContentMutation.isPending}
                data-testid="button-create-content"
              >
                {createContentMutation.isPending ? "Creating..." : "Create Content"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Content ({contentItems.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {contentLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : contentItems.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No content items found.</p>
              ) : (
                <div className="space-y-4">
                  {contentItems.map((item) => (
                    <div key={item.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch checked={item.isActive || false} disabled />
                          <span className="text-sm text-muted-foreground">
                            {item.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.content ? item.content.substring(0, 200) + '...' : 'No content'}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Last updated: {item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'Unknown'}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Management */}
        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Service name"
                value={newService.name}
                onChange={(e) => setNewService({...newService, name: e.target.value})}
                data-testid="input-service-name"
              />
              <Textarea
                placeholder="Service description"
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
                rows={4}
                data-testid="textarea-service-description"
              />
              <Select value={newService.category} onValueChange={(value) => setNewService({...newService, category: value})}>
                <SelectTrigger data-testid="select-service-category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
              {newService.category === 'consulting' && (
                <Input
                  placeholder="Industry (for consulting services)"
                  value={newService.industry}
                  onChange={(e) => setNewService({...newService, industry: e.target.value})}
                  data-testid="input-service-industry"
                />
              )}
              <Input
                placeholder="Icon class (e.g., fas fa-graduation-cap)"
                value={newService.icon}
                onChange={(e) => setNewService({...newService, icon: e.target.value})}
                data-testid="input-service-icon"
              />
              <Button 
                onClick={handleCreateService}
                disabled={createServiceMutation.isPending}
                data-testid="button-create-service"
              >
                {createServiceMutation.isPending ? "Creating..." : "Create Service"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Services ({services.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {servicesLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : services.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No services found.</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{service.name}</h3>
                        <Badge variant={service.category === 'training' ? 'default' : 'secondary'}>
                          {service.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                      {service.industry && (
                        <Badge variant="outline" className="mr-2">{service.industry}</Badge>
                      )}
                      {service.icon && (
                        <span className="text-xs text-muted-foreground">Icon: {service.icon}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Case Studies Management */}
        <TabsContent value="case-studies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Case Study</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Case study title"
                value={newCaseStudy.title}
                onChange={(e) => setNewCaseStudy({...newCaseStudy, title: e.target.value})}
                data-testid="input-case-study-title"
              />
              <Textarea
                placeholder="Case study description"
                value={newCaseStudy.description}
                onChange={(e) => setNewCaseStudy({...newCaseStudy, description: e.target.value})}
                rows={4}
                data-testid="textarea-case-study-description"
              />
              <Input
                placeholder="Client name"
                value={newCaseStudy.client}
                onChange={(e) => setNewCaseStudy({...newCaseStudy, client: e.target.value})}
                data-testid="input-case-study-client"
              />
              <Input
                placeholder="Industry"
                value={newCaseStudy.industry}
                onChange={(e) => setNewCaseStudy({...newCaseStudy, industry: e.target.value})}
                data-testid="input-case-study-industry"
              />
              <Input
                placeholder="Image URL"
                value={newCaseStudy.imageUrl}
                onChange={(e) => setNewCaseStudy({...newCaseStudy, imageUrl: e.target.value})}
                data-testid="input-case-study-image"
              />
              <Textarea
                placeholder="Detailed case study content"
                value={newCaseStudy.content}
                onChange={(e) => setNewCaseStudy({...newCaseStudy, content: e.target.value})}
                rows={6}
                data-testid="textarea-case-study-content"
              />
              <Button 
                onClick={handleCreateCaseStudy}
                disabled={createCaseStudyMutation.isPending}
                data-testid="button-create-case-study"
              >
                {createCaseStudyMutation.isPending ? "Creating..." : "Create Case Study"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Case Studies ({caseStudies.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {caseStudiesLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : caseStudies.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No case studies found.</p>
              ) : (
                <div className="space-y-4">
                  {caseStudies.map((study) => (
                    <div key={study.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{study.title}</h3>
                        <div className="flex space-x-2">
                          {study.industry && <Badge variant="outline">{study.industry}</Badge>}
                          {study.client && <Badge variant="secondary">{study.client}</Badge>}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{study.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testimonials Management */}
        <TabsContent value="testimonials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Testimonial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Testimonial content"
                value={newTestimonial.content}
                onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
                rows={4}
                data-testid="textarea-testimonial-content"
              />
              <Input
                placeholder="Author name"
                value={newTestimonial.author}
                onChange={(e) => setNewTestimonial({...newTestimonial, author: e.target.value})}
                data-testid="input-testimonial-author"
              />
              <Input
                placeholder="Author role"
                value={newTestimonial.role}
                onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                data-testid="input-testimonial-role"
              />
              <Input
                placeholder="Company"
                value={newTestimonial.company}
                onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})}
                data-testid="input-testimonial-company"
              />
              <Select value={newTestimonial.rating.toString()} onValueChange={(value) => setNewTestimonial({...newTestimonial, rating: parseInt(value)})}>
                <SelectTrigger data-testid="select-testimonial-rating">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={handleCreateTestimonial}
                disabled={createTestimonialMutation.isPending}
                data-testid="button-create-testimonial"
              >
                {createTestimonialMutation.isPending ? "Creating..." : "Create Testimonial"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Testimonials ({testimonials.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {testimonialsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : testimonials.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No testimonials found.</p>
              ) : (
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{testimonial.author}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm italic">"{testimonial.content}"</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQs Management */}
        <TabsContent value="faqs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Question"
                value={newFAQ.question}
                onChange={(e) => setNewFAQ({...newFAQ, question: e.target.value})}
                data-testid="input-faq-question"
              />
              <Textarea
                placeholder="Answer"
                value={newFAQ.answer}
                onChange={(e) => setNewFAQ({...newFAQ, answer: e.target.value})}
                rows={4}
                data-testid="textarea-faq-answer"
              />
              <Input
                placeholder="Category (optional)"
                value={newFAQ.category}
                onChange={(e) => setNewFAQ({...newFAQ, category: e.target.value})}
                data-testid="input-faq-category"
              />
              <Input
                type="number"
                placeholder="Display order"
                value={newFAQ.order}
                onChange={(e) => setNewFAQ({...newFAQ, order: parseInt(e.target.value) || 0})}
                data-testid="input-faq-order"
              />
              <Button 
                onClick={handleCreateFAQ}
                disabled={createFAQMutation.isPending}
                data-testid="button-create-faq"
              >
                {createFAQMutation.isPending ? "Creating..." : "Create FAQ"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing FAQs ({faqs.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {faqsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : faqs.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No FAQs found.</p>
              ) : (
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{faq.question}</h3>
                        <div className="flex space-x-2">
                          {faq.category && <Badge variant="outline">{faq.category}</Badge>}
                          <Badge variant="secondary">Order: {faq.order}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Submissions */}
        <TabsContent value="contacts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Submissions ({contactSubmissions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {contactLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              ) : contactSubmissions.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No contact submissions found.</p>
              ) : (
                <div className="space-y-4">
                  {contactSubmissions.map((submission) => (
                    <div key={submission.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">
                            {submission.firstName} {submission.lastName}
                          </h3>
                          <p className="text-sm text-muted-foreground">{submission.email}</p>
                          {submission.company && (
                            <p className="text-sm text-muted-foreground">{submission.company}</p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          {submission.region && <Badge variant="outline">{submission.region}</Badge>}
                          {submission.service && <Badge variant="secondary">{submission.service}</Badge>}
                          <Badge variant={submission.isProcessed ? "default" : "destructive"}>
                            {submission.isProcessed ? "Processed" : "New"}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{submission.message}</p>
                      <p className="text-xs text-muted-foreground">
                        Submitted: {submission.createdAt ? new Date(submission.createdAt).toLocaleString() : 'Unknown'}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
