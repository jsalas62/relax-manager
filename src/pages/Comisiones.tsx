import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";

const commissions = [
  {
    id: 1,
    worker: "María González",
    period: "Junio 2025",
    sessions: 42,
    revenue: "$2,100",
    commission: "$420",
    rate: 20,
    status: "Pagado",
  },
  {
    id: 2,
    worker: "Carlos Ruiz",
    period: "Junio 2025",
    sessions: 38,
    revenue: "$2,280",
    commission: "$456",
    rate: 20,
    status: "Pagado",
  },
  {
    id: 3,
    worker: "Ana Martínez",
    period: "Junio 2025",
    sessions: 35,
    revenue: "$2,100",
    commission: "$420",
    rate: 20,
    status: "Pendiente",
  },
  {
    id: 4,
    worker: "Jorge López",
    period: "Junio 2025",
    sessions: 32,
    revenue: "$1,920",
    commission: "$384",
    rate: 20,
    status: "Pendiente",
  },
];

export default function Comisiones() {
  const totalCommissions = commissions.reduce(
    (sum, c) => sum + parseFloat(c.commission.replace("$", "").replace(",", "")),
    0
  );
  const pendingCommissions = commissions
    .filter((c) => c.status === "Pendiente")
    .reduce(
      (sum, c) => sum + parseFloat(c.commission.replace("$", "").replace(",", "")),
      0
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Comisiones
        </h1>
        <p className="text-muted-foreground mt-2">
          Seguimiento de comisiones del personal
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Comisiones
            </CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              ${totalCommissions.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Período actual</p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pendientes de Pago
            </CardTitle>
            <Calendar className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-destructive">
              ${pendingCommissions.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {commissions.filter((c) => c.status === "Pendiente").length} trabajadores
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tasa Promedio
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">20%</div>
            <p className="text-sm text-muted-foreground mt-1">Sobre ingresos generados</p>
          </CardContent>
        </Card>
      </div>

      {/* Commissions Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Detalle de Comisiones - Junio 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {commissions.map((commission) => (
              <div
                key={commission.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {commission.worker
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{commission.worker}</p>
                      <p className="text-sm text-muted-foreground">
                        {commission.sessions} sesiones realizadas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Ingresos</p>
                    <p className="font-semibold text-foreground">{commission.revenue}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Tasa</p>
                    <p className="font-semibold text-primary">{commission.rate}%</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Comisión</p>
                    <p className="text-xl font-bold text-primary">{commission.commission}</p>
                  </div>

                  <Badge
                    variant={commission.status === "Pagado" ? "default" : "secondary"}
                    className={
                      commission.status === "Pagado"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {commission.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
