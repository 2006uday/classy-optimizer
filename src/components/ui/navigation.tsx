import { useState } from "react";
import { Calendar, Settings, Users, BookOpen, BarChart3, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { icon: Calendar, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "Timetables", href: "/timetables" },
  { icon: Users, label: "Faculty", href: "/faculty" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-card border-b shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Smart Scheduler
              </h1>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-smooth",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Settings className="h-4 w-4 mr-2" />
              Admin Panel
            </Button>
            
            <div className="md:hidden ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-base font-medium transition-smooth",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}