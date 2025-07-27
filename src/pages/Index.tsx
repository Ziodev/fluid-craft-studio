import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { RecentOrders } from "@/components/RecentOrders";
import { PerformanceChart } from "@/components/PerformanceChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Package,
  Search,
  Truck,
  MapPin,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Activity
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        
        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-card-foreground">Dashboard de Logística</h1>
                  <p className="text-muted-foreground">Gestión inteligente de envíos y seguimiento de órdenes</p>
                </div>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
              ✨ Actualizar
            </Button>
          </div>

          {/* Filters */}
          <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Rango de fecha:</span>
                  <Select defaultValue="30days">
                    <SelectTrigger className="w-40 h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30days">Últimos 30 días</SelectItem>
                      <SelectItem value="7days">Últimos 7 días</SelectItem>
                      <SelectItem value="today">Hoy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Estado:</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40 h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="pending">Pendiente</SelectItem>
                      <SelectItem value="shipped">Enviado</SelectItem>
                      <SelectItem value="delivered">Entregado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Transportista:</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40 h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los transportistas</SelectItem>
                      <SelectItem value="fedex">FedEx</SelectItem>
                      <SelectItem value="ups">UPS</SelectItem>
                      <SelectItem value="dhl">DHL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Prioridad:</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40 h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las prioridades</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="low">Baja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <MetricCard
                title="Pendientes de envío"
                value="26"
                icon={Package}
                color="blue"
                description="Órdenes listas para procesar"
                change="+5 desde ayer"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <MetricCard
                title="Tracking"
                value="0"
                icon={Search}
                color="orange"
                description="Envíos en seguimiento"
                change="Sin cambios"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <MetricCard
                title="In tracking"
                value="26"
                icon={TrendingUp}
                color="green"
                description="En tránsito"
                change="+3 nuevos"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <MetricCard
                title="Intención"
                value="6"
                icon={MapPin}
                color="purple"
                description="Destinos activos"
                change="2 destinos nuevos"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <MetricCard
                title="Con tracking"
                value="26"
                icon={CheckCircle2}
                color="green"
                description="Seguimiento activo"
                change="100% cobertura"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <MetricCard
                title="En tránsito"
                value="6"
                icon={Truck}
                color="blue"
                description="Vehículos en ruta"
                change="+1 vehículo"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <MetricCard
                title="Con incidencia"
                value="0"
                icon={AlertTriangle}
                color="red"
                description="Requieren atención"
                change="Sin incidencias"
              />
            </div>
          </div>

          {/* Performance Charts */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <PerformanceChart />
          </div>

          {/* Recent Orders */}
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;