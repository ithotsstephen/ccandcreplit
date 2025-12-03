import { Card, CardContent } from "@/components/ui/card";
import { useStaticOrQuery, staticData } from "@/lib/staticData";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: blogPosts = [], isLoading } = useStaticOrQuery<BlogPost[]>(
    ['/api/blog-posts', 'published'],
    staticData.getBlogPosts
  );

  // Default blog posts if API returns empty
  const defaultBlogPosts = [
    {
      id: '1',
      title: 'The Future of Enterprise Architecture in Digital Transformation',
      excerpt: 'Exploring how modern EA practices are evolving to meet the demands of rapid digital change...',
      category: 'Enterprise Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      publishedAt: '2024-03-15',
      slug: 'future-enterprise-architecture-digital-transformation'
    },
    {
      id: '2',
      title: 'Maximizing BIAN Value: From Reference to Implementation',
      excerpt: 'Best practices for taking BIAN from a reference architecture to detailed design and development...',
      category: 'BIAN Implementation',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      publishedAt: '2024-02-28',
      slug: 'maximizing-bian-value-reference-implementation'
    },
    {
      id: '3',
      title: 'Building World-Class Architecture Teams',
      excerpt: 'How to develop and retain top architecture talent in your organization through strategic training...',
      category: 'Skills Development',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      publishedAt: '2024-02-10',
      slug: 'building-world-class-architecture-teams'
    }
  ];

  const displayBlogPosts = blogPosts.length > 0 ? blogPosts : defaultBlogPosts;

  if (isLoading) {
    return (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-muted-foreground/20 rounded w-96 mx-auto mb-6"></div>
              <div className="h-6 bg-muted-foreground/20 rounded w-[500px] mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Latest Insights</h2>
          <p className="text-xl text-muted-foreground">Stay ahead with our expert perspectives on digital transformation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBlogPosts.map((post) => (
            <Card key={post.id} className="service-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {post.imageUrl && (
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">{post.category || 'Insights'}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-accent font-semibold hover:underline"
                    data-testid={`button-read-more-${post.slug}`}
                  >
                    Read More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
