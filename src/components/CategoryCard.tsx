import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  color?: string;
}

const CategoryCard = ({ name, icon: Icon, count, color = "primary" }: CategoryCardProps) => {
  return (
    <Link to={`/tools?category=${name.toLowerCase()}`}>
      <div className="glass-card hover-glow rounded-xl p-6 text-center group cursor-pointer">
        <div className="relative inline-block mb-4">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
            <Icon className={`h-8 w-8 text-${color} group-hover:text-${color}-glow transition-colors`} />
          </div>
          <div className={`absolute inset-0 rounded-2xl bg-${color}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
        </div>
        
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          {count} tools
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
