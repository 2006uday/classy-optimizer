import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  gradient?: boolean;
}

export function StatsCard({ title, value, change, icon: Icon, gradient = false }: StatsCardProps) {
  return (
    <Card className={`transition-smooth hover:shadow-medium ${gradient ? 'bg-gradient-primary text-white' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={`text-sm font-medium ${gradient ? 'text-white/90' : 'text-muted-foreground'}`}>
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${gradient ? 'text-white/80' : 'text-muted-foreground'}`} />
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${gradient ? 'text-white' : 'text-foreground'}`}>
          {value}
        </div>
        {change && (
          <p className={`text-xs ${gradient ? 'text-white/75' : 'text-muted-foreground'} mt-1`}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}