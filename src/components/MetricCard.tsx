import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  color: "blue" | "green" | "orange" | "red" | "purple";
  description?: string;
}

const colorClasses = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-700"
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-700"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    icon: "text-orange-600",
    badge: "bg-orange-100 text-orange-700"
  },
  red: {
    bg: "bg-gradient-to-br from-red-50 to-red-100",
    icon: "text-red-600",
    badge: "bg-red-100 text-red-700"
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    icon: "text-purple-600",
    badge: "bg-purple-100 text-purple-700"
  }
};

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon, 
  color,
  description 
}: MetricCardProps) => {
  const colors = colorClasses[color];
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-gradient-to-br from-card to-card/80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${colors.icon}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">{title}</p>
                {description && (
                  <p className="text-xs text-muted-foreground/70">{description}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-3xl font-bold text-card-foreground tracking-tight">
                {value}
              </p>
              
              {change && (
                <Badge 
                  variant="secondary" 
                  className={`${colors.badge} text-xs font-medium`}
                >
                  {change}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};