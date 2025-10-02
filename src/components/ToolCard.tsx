import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  website: string;
  icon: string;
  stars?: number;
}

const ToolCard = ({ name, description, category, website, icon, stars }: ToolCardProps) => {
  return (
    <div className="glass-card hover-glow rounded-xl p-6 group">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl">
            {icon}
          </div>
          <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            {stars && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{stars}k</span>
              </div>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {category}
            </span>
            
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-primary hover:text-primary-glow"
              asChild
            >
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
