import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="text-center space-y-6 relative z-10 px-4 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button variant="hero" size="lg" className="gap-2" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" className="gap-2" asChild>
            <Link to="/tools">
              <Search className="h-5 w-5" />
              Browse Tools
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
