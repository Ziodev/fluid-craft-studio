import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const performanceData = [
  {
    title: "Rendimiento de Entrega",
    metrics: [
      { label: "Entregas exitosas a tiempo", value: "0%", trend: "neutral" },
      { label: "Tiempo promedio procesamiento", value: "0h", trend: "neutral" },
      { label: "Tiempo promedio de entrega", value: "0 días", trend: "neutral" }
    ]
  },
  {
    title: "Análisis por Transportista",
    carriers: [
      { name: "Amazon", percentage: "0%", trend: "neutral", icon: "📦" },
      { name: "DHL", percentage: "0%", trend: "neutral", icon: "✈️" },
      { name: "Fedex", percentage: "33.33%", trend: "positive", icon: "🚚" },
      { name: "Local", percentage: "0%", trend: "neutral", icon: "🏪" },
      { name: "Ups", percentage: "0%", trend: "neutral", icon: "🚛" },
      { name: "Usos", percentage: "0%", trend: "neutral", icon: "📮" }
    ]
  },
  {
    title: "Alertas Activas",
    alerts: [
      { message: "No hay alertas activas", type: "info" }
    ]
  }
];

const advancedMetrics = [
  {
    title: "Métricas Avanzadas",
    data: [
      { label: "% Entregas a tiempo", value: "0%", change: "0" },
      { label: "Tiempo promedio procesamiento", value: "0h", change: "0h" },
      { label: "Órdenes retrasadas", value: "0", change: "0" },
      { label: "Entregas fallidas", value: "1", change: "+1" }
    ]
  },
  {
    title: "Comparativa entre Plataformas",
    platforms: [
      { name: "Shopify", percentage: "7.69%", orders: "26 órdenes" }
    ]
  }
];

export const PerformanceChart = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case "negative":
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "positive":
        return "text-green-600 bg-green-50 border-green-200";
      case "negative":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Performance Metrics */}
      <Card className="animate-slide-up">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            📊 Rendimiento de Entrega
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {performanceData[0].metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <span className="text-sm text-muted-foreground">{metric.label}</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getTrendColor(metric.trend)}>
                  {metric.value}
                </Badge>
                {getTrendIcon(metric.trend)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Carrier Analysis */}
      <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            🚚 Análisis por Transportista
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {performanceData[1].carriers.map((carrier, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-lg">{carrier.icon}</span>
                <span className="font-medium text-sm">{carrier.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={`${getTrendColor(carrier.trend)} group-hover:scale-105 transition-transform`}
                >
                  {carrier.percentage}
                </Badge>
                {getTrendIcon(carrier.trend)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Advanced Metrics */}
      <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            📈 Métricas Avanzadas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {advancedMetrics[0].data.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <span className="text-sm text-muted-foreground">{metric.label}</span>
              <div className="text-right">
                <div className="font-semibold text-sm">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.change}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Platform Comparison */}
      <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            🏪 Comparativa entre Plataformas
          </CardTitle>
        </CardHeader>
        <CardContent>
          {advancedMetrics[1].platforms.map((platform, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
              <div>
                <div className="font-semibold text-primary">{platform.name}</div>
                <div className="text-sm text-muted-foreground">{platform.orders}</div>
              </div>
              <Badge className="bg-primary text-primary-foreground">
                {platform.percentage}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};