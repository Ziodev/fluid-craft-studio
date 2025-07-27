import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Building2,
  Truck,
  ShoppingCart,
  Package,
  Import,
  Settings,
  Zap,
  Puzzle,
  ChevronRight
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: MessageSquare, label: "Comunicación" },
  { icon: Users, label: "Contactos" },
  { icon: Building2, label: "Empresas" },
  { icon: Truck, label: "Telegramo" },
];

const commerceItems = [
  { icon: ShoppingCart, label: "Clientes" },
  { icon: Package, label: "Órdenes" },
  { icon: Import, label: "Inventario" },
  { icon: Truck, label: "Logística", active: true },
];

const systemItems = [
  { icon: Zap, label: "Automatizaciones" },
  { icon: Puzzle, label: "Integraciones" },
];

export const Sidebar = () => {
  return (
    <Card className="w-64 h-screen rounded-none border-r bg-card/50 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <span className="text-white font-bold text-sm">OWL</span>
          </div>
          <div>
            <h2 className="font-semibold text-card-foreground">OWL</h2>
            <p className="text-xs text-muted-foreground">Commerce</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        {/* Communication Section */}
        <div className="space-y-1">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-3">
            Comunicación
          </h3>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 h-10 ${
                item.active 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-card-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
              {item.active && <ChevronRight className="w-4 h-4 ml-auto" />}
            </Button>
          ))}
        </div>

        {/* Commerce Section */}
        <div className="space-y-1">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-3">
            Commerce
          </h3>
          {commerceItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 h-10 ${
                item.active 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-card-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
              {item.active && <ChevronRight className="w-4 h-4 ml-auto" />}
            </Button>
          ))}
        </div>

        {/* System Section */}
        <div className="space-y-1">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-3">
            Sistema
          </h3>
          {systemItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-3 h-10 text-muted-foreground hover:text-card-foreground hover:bg-muted/50"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3 h-10 text-muted-foreground hover:text-card-foreground">
          <Settings className="w-4 h-4" />
          <span className="font-medium">Configuración</span>
        </Button>
      </div>
    </Card>
  );
};