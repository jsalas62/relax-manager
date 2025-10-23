import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Mail, Phone, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const workers = [
  {
    id: 1,
    name: "María González",
    role: "Terapeuta Senior",
    specialty: "Masaje Sueco",
    rating: 4.9,
    sessions: 234,
    status: "Disponible",
    email: "maria@spa.com",
    phone: "+34 612 345 678",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Fisioterapeuta",
    specialty: "Masaje Deportivo",
    rating: 4.8,
    sessions: 198,
    status: "Ocupado",
    email: "carlos@spa.com",
    phone: "+34 623 456 789",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Terapeuta",
    specialty: "Aromaterapia",
    rating: 5.0,
    sessions: 156,
    status: "Disponible",
    email: "ana@spa.com",
    phone: "+34 634 567 890",
  },
  {
    id: 4,
    name: "Jorge López",
    role: "Terapeuta",
    specialty: "Reflexología",
    rating: 4.7,
    sessions: 142,
    status: "Disponible",
    email: "jorge@spa.com",
    phone: "+34 645 678 901",
  },
];

export default function Trabajadores() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Trabajadores
          </h1>
          <p className="text-muted-foreground mt-2">
            Gestiona tu equipo de terapeutas y especialistas
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <UserPlus className="h-4 w-4 mr-2" />
          Nuevo Trabajador
        </Button>
      </div>

      {/* Workers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workers.map((worker) => (
          <Card
            key={worker.id}
            className="border-border/50 transition-all hover:shadow-lg hover:border-primary/30"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {worker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{worker.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{worker.role}</p>
                  </div>
                </div>
                <Badge
                  variant={worker.status === "Disponible" ? "default" : "secondary"}
                  className={
                    worker.status === "Disponible"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : ""
                  }
                >
                  {worker.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Especialidad</span>
                  <span className="font-medium text-foreground">{worker.specialty}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sesiones</span>
                  <span className="font-medium text-foreground">{worker.sessions}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Valoración</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">{worker.rating}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{worker.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{worker.phone}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Ver Detalles
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
