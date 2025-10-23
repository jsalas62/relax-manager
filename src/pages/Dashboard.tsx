import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Lun", ingresos: 1200 },
  { name: "Mar", ingresos: 1800 },
  { name: "Mié", ingresos: 1600 },
  { name: "Jue", ingresos: 2200 },
  { name: "Vie", ingresos: 2800 },
  { name: "Sáb", ingresos: 3200 },
  { name: "Dom", ingresos: 2600 },
];

const topServices = [
  { name: "Masaje Relajante", sessions: 45, revenue: "$2,250" },
  { name: "Aromaterapia", sessions: 32, revenue: "$1,920" },
  { name: "Masaje Deportivo", sessions: 28, revenue: "$1,680" },
  { name: "Reflexología", sessions: 24, revenue: "$1,440" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Resumen general de tu negocio de spa y terapias
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Ingresos del Día"
          value="$3,245"
          icon={DollarSign}
          trend="+12.5% vs ayer"
          trendUp={true}
        />
        <StatCard
          title="Citas Programadas"
          value="24"
          icon={Calendar}
          trend="8 pendientes hoy"
        />
        <StatCard
          title="Terapeutas Activos"
          value="12"
          icon={Users}
          trend="2 disponibles ahora"
          trendUp={true}
        />
        <StatCard
          title="Servicios Realizados"
          value="156"
          icon={TrendingUp}
          trend="+8.2% esta semana"
          trendUp={true}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Revenue Chart */}
        <Card className="lg:col-span-4 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Ingresos de la Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="ingresos"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorIngresos)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Services */}
        <Card className="lg:col-span-3 border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Servicios Más Solicitados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{service.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {service.sessions} sesiones
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{service.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
