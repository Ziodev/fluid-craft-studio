import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Package, Truck, MapPin } from "lucide-react";

const orders = [
  {
    id: "#PCPS-39546",
    customer: "HCPS-39546",
    date: "27/07/2025 10:03",
    status: "In-transit",
    statusColor: "blue",
    carrier: "Fedex",
    carrierIcon: "📦",
    tracking: "USPS000779867",
    destination: "Law",
    priority: "Ver detalles",
    actions: "Reactivar"
  },
  {
    id: "#PCPS-39547",
    customer: "HCPS-39547",
    date: "27/07/2025 10:03",
    status: "Failed delivery",
    statusColor: "red",
    carrier: "Local",
    carrierIcon: "🏪",
    tracking: "LOC280Z8814F",
    destination: "Urgent",
    priority: "Ver detalles",
    actions: "Reactivar"
  },
  {
    id: "#PCPS-39548",
    customer: "HCPS-39548",
    date: "27/07/2025 10:03",
    status: "In-transit",
    statusColor: "blue",
    carrier: "Usos",
    carrierIcon: "🚛",
    tracking: "USPS000582786",
    destination: "Normal",
    priority: "Ver detalles",
    actions: "Reactivar"
  },
  {
    id: "#PCPS-39549",
    customer: "HCPS-39549",
    date: "27/07/2025 10:03",
    status: "Returned",
    statusColor: "orange",
    carrier: "Usos",
    carrierIcon: "🚛",
    tracking: "USPS000744024B",
    destination: "High",
    priority: "Ver detalles",
    actions: "Reactivar"
  },
  {
    id: "#PCPS-39550",
    customer: "HCPS-39550",
    date: "27/07/2025 10:03",
    status: "Returned",
    statusColor: "orange",
    carrier: "DHL",
    carrierIcon: "✈️",
    tracking: "DHL7AC2BCR959",
    destination: "Law",
    priority: "Ver detalles",
    actions: "Reactivar"
  }
];

const statusColors = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  red: "bg-red-100 text-red-700 border-red-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  green: "bg-green-100 text-green-700 border-green-200"
};

export const RecentOrders = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold">Órdenes Recientes</CardTitle>
              <p className="text-sm text-muted-foreground">Gestiona y monitorea tus envíos</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/50">
                <TableHead className="font-semibold text-muted-foreground">Orden</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Cliente</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Estado</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Transportista</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Tracking</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Prioridad</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Acciones</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow 
                  key={order.id} 
                  className="group hover:bg-muted/30 transition-colors border-b border-border/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TableCell className="font-medium text-primary">
                    {order.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-muted text-xs">
                          {order.customer.slice(-2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`${statusColors[order.statusColor as keyof typeof statusColors]} font-medium`}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{order.carrierIcon}</span>
                      <span className="font-medium text-sm">{order.carrier}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-sm">{order.tracking}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{order.destination}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      {order.priority}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};