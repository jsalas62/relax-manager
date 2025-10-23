import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Package, AlertCircle } from "lucide-react";

const inventory = [
  {
    id: 1,
    name: "Aceite de Lavanda",
    category: "Aceites Esenciales",
    stock: 24,
    minStock: 10,
    unit: "unidades",
    price: "$15",
  },
  {
    id: 2,
    name: "Toallas de Algodón",
    category: "Textiles",
    stock: 45,
    minStock: 30,
    unit: "unidades",
    price: "$8",
  },
  {
    id: 3,
    name: "Crema de Masaje",
    category: "Productos",
    stock: 8,
    minStock: 15,
    unit: "unidades",
    price: "$20",
  },
  {
    id: 4,
    name: "Piedras Volcánicas",
    category: "Equipamiento",
    stock: 12,
    minStock: 5,
    unit: "sets",
    price: "$45",
  },
  {
    id: 5,
    name: "Aceite de Eucalipto",
    category: "Aceites Esenciales",
    stock: 18,
    minStock: 10,
    unit: "unidades",
    price: "$18",
  },
  {
    id: 6,
    name: "Velas Aromáticas",
    category: "Ambientación",
    stock: 5,
    minStock: 20,
    unit: "unidades",
    price: "$12",
  },
];

export default function Inventario() {
  const lowStock = inventory.filter((item) => item.stock < item.minStock);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Inventario
          </h1>
          <p className="text-muted-foreground mt-2">
            Control de productos y suministros
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Agregar Producto
        </Button>
      </div>

      {/* Low Stock Alert */}
      {lowStock.length > 0 && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Productos con Stock Bajo ({lowStock.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStock.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-background"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Stock actual: {item.stock} {item.unit}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Reponer
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Inventory Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {inventory.map((item) => {
          const isLowStock = item.stock < item.minStock;
          const stockPercentage = (item.stock / item.minStock) * 100;

          return (
            <Card
              key={item.id}
              className={`border-border/50 transition-all hover:shadow-lg ${
                isLowStock ? "border-destructive/30" : "hover:border-primary/30"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Stock Actual</span>
                    <Badge
                      variant={isLowStock ? "destructive" : "default"}
                      className={!isLowStock ? "bg-green-100 text-green-800" : ""}
                    >
                      {item.stock} {item.unit}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Stock Mínimo</span>
                    <span className="font-medium">
                      {item.minStock} {item.unit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Precio Unitario</span>
                    <span className="font-medium text-primary">{item.price}</span>
                  </div>
                </div>

                {/* Stock Level Indicator */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Nivel de Stock</span>
                    <span>{Math.min(stockPercentage, 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        isLowStock ? "bg-destructive" : "bg-primary"
                      }`}
                      style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Editar
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Reponer
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
