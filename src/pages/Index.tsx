import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import { Code2, Palette, Briefcase, Video, Shield, Settings } from "lucide-react";
import { tools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredTools = tools.filter((tool) => tool.featured);
  
  const categories = [
    { name: "Development", icon: Code2, count: 6 },
    { name: "Design", icon: Palette, count: 4 },
    { name: "Productivity", icon: Briefcase, count: 3 },
    { name: "Media", icon: Video, count: 3 },
    { name: "Security", icon: Shield, count: 3 },
    { name: "System", icon: Settings, count: 3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Featured Tools Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Popular open source tools trusted by millions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-slide-up">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/tools">View All Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Browse by <span className="gradient-text">Category</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Find the perfect tool for your needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slide-up">
              {categories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Go <span className="gradient-text">Open Source</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join millions of users worldwide who have discovered the power and freedom of open source software
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/tools">Explore Tools</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Code2 className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold gradient-text">FOSShub</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover the power of open source software
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Navigation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link to="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/tools?category=development" className="hover:text-primary transition-colors">Development</Link></li>
                  <li><Link to="/tools?category=design" className="hover:text-primary transition-colors">Design</Link></li>
                  <li><Link to="/tools?category=productivity" className="hover:text-primary transition-colors">Productivity</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://opensource.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Open Source Initiative</a></li>
                  <li><a href="https://www.gnu.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GNU Project</a></li>
                  <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
              <p>© 2025 FOSShub. Celebrating open source software and the community behind it.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
