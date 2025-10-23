import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Clock, DollarSign } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Masaje Relajante",
    description: "Masaje suave para reducir estrés y tensión muscular",
    duration: "60 min",
    price: "$50",
    category: "Masajes",
    popularity: "Alta",
  },
  {
    id: 2,
    name: "Masaje Deportivo",
    description: "Tratamiento profundo para atletas y recuperación muscular",
    duration: "90 min",
    price: "$70",
    category: "Masajes",
    popularity: "Media",
  },
  {
    id: 3,
    name: "Aromaterapia",
    description: "Terapia con aceites esenciales para bienestar integral",
    duration: "60 min",
    price: "$60",
    category: "Terapias",
    popularity: "Alta",
  },
  {
    id: 4,
    name: "Reflexología",
    description: "Estimulación de puntos reflejos en pies y manos",
    duration: "45 min",
    price: "$45",
    category: "Terapias",
    popularity: "Media",
  },
  {
    id: 5,
    name: "Masaje con Piedras Calientes",
    description: "Terapia relajante con piedras volcánicas calientes",
    duration: "75 min",
    price: "$80",
    category: "Masajes",
    popularity: "Alta",
  },
  {
    id: 6,
    name: "Masaje Tailandés",
    description: "Técnica tradicional con estiramientos y presión",
    duration: "90 min",
    price: "$75",
    category: "Masajes",
    popularity: "Media",
  },
];

export default function Servicios() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Servicios
          </h1>
          <p className="text-muted-foreground mt-2">
            Administra el catálogo de servicios y tratamientos
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Servicio
        </Button>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border-border/50 transition-all hover:shadow-lg hover:border-primary/30"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <Badge
                  variant={service.popularity === "Alta" ? "default" : "secondary"}
                  className={
                    service.popularity === "Alta"
                      ? "bg-primary/20 text-primary hover:bg-primary/20"
                      : ""
                  }
                >
                  {service.popularity}
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit">
                {service.category}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Duración</p>
                    <p className="font-medium text-foreground">{service.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Precio</p>
                    <p className="font-medium text-primary text-lg">{service.price}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <Button variant="outline" className="flex-1">
                  Editar
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  Reservar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
