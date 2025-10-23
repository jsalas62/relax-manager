import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, DollarSign, Users, Calendar } from "lucide-react";

const payroll = [
  {
    id: 1,
    worker: "María González",
    position: "Terapeuta Senior",
    baseSalary: "$2,500",
    commissions: "$420",
    bonuses: "$200",
    deductions: "$320",
    netSalary: "$2,800",
    status: "Procesado",
  },
  {
    id: 2,
    worker: "Carlos Ruiz",
    position: "Fisioterapeuta",
    baseSalary: "$2,800",
    commissions: "$456",
    bonuses: "$150",
    deductions: "$380",
    netSalary: "$3,026",
    status: "Procesado",
  },
  {
    id: 3,
    worker: "Ana Martínez",
    position: "Terapeuta",
    baseSalary: "$2,200",
    commissions: "$420",
    bonuses: "$100",
    deductions: "$280",
    netSalary: "$2,440",
    status: "Pendiente",
  },
  {
    id: 4,
    worker: "Jorge López",
    position: "Terapeuta",
    baseSalary: "$2,200",
    commissions: "$384",
    bonuses: "$100",
    deductions: "$270",
    netSalary: "$2,414",
    status: "Pendiente",
  },
];

export default function Planilla() {
  const totalPayroll = payroll.reduce(
    (sum, p) => sum + parseFloat(p.netSalary.replace("$", "").replace(",", "")),
    0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Planilla
          </h1>
          <p className="text-muted-foreground mt-2">
            Gestión de nómina y pagos al personal
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Download className="h-4 w-4 mr-2" />
          Exportar Planilla
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Planilla
            </CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              ${totalPayroll.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Junio 2025</p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Personal Activo
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{payroll.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Trabajadores</p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Período de Pago
            </CardTitle>
            <Calendar className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1-30 Jun</div>
            <p className="text-sm text-muted-foreground mt-1">Pago: 5 de Julio</p>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Detalle de Planilla - Junio 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Trabajador
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Salario Base
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Comisiones
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Bonos
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Deducciones
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Neto
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {payroll.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-foreground">{item.worker}</p>
                        <p className="text-sm text-muted-foreground">{item.position}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-foreground">
                      {item.baseSalary}
                    </td>
                    <td className="py-4 px-4 text-right text-green-600 font-medium">
                      +{item.commissions}
                    </td>
                    <td className="py-4 px-4 text-right text-green-600 font-medium">
                      +{item.bonuses}
                    </td>
                    <td className="py-4 px-4 text-right text-destructive font-medium">
                      -{item.deductions}
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-primary text-lg">
                      {item.netSalary}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Badge
                        variant={item.status === "Procesado" ? "default" : "secondary"}
                        className={
                          item.status === "Procesado"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
