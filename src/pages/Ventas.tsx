import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, DollarSign, TrendingUp, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { StatCard } from "@/components/StatCard";

const ventaSchema = z.object({
  servicio: z.string().min(1, "Seleccione un servicio"),
  cliente: z.string().min(1, "Ingrese el nombre del cliente").max(100),
  terapeuta: z.string().min(1, "Seleccione un terapeuta"),
  metodoPago: z.string().min(1, "Seleccione un método de pago"),
  monto: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Ingrese un monto válido"),
});

type VentaForm = z.infer<typeof ventaSchema>;

const Ventas = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [ventas, setVentas] = useState([
    { id: 1, fecha: "2024-01-15", cliente: "María González", servicio: "Masaje Relajante", terapeuta: "Ana Martínez", monto: 850, metodoPago: "Efectivo", estado: "Completada" },
    { id: 2, fecha: "2024-01-15", cliente: "Carlos López", servicio: "Terapia Deep Tissue", terapeuta: "Luis Ramírez", monto: 1200, metodoPago: "Tarjeta", estado: "Completada" },
    { id: 3, fecha: "2024-01-14", cliente: "Laura Pérez", servicio: "Masaje con Piedras", terapeuta: "Carmen Torres", monto: 1500, metodoPago: "Transferencia", estado: "Completada" },
    { id: 4, fecha: "2024-01-14", cliente: "José Hernández", servicio: "Reflexología", terapeuta: "Ana Martínez", monto: 700, metodoPago: "Efectivo", estado: "Completada" },
  ]);

  const form = useForm<VentaForm>({
    resolver: zodResolver(ventaSchema),
    defaultValues: {
      servicio: "",
      cliente: "",
      terapeuta: "",
      metodoPago: "",
      monto: "",
    },
  });

  const servicios = [
    { id: "1", nombre: "Masaje Relajante", precio: "850" },
    { id: "2", nombre: "Terapia Deep Tissue", precio: "1200" },
    { id: "3", nombre: "Masaje con Piedras", precio: "1500" },
    { id: "4", nombre: "Reflexología", precio: "700" },
    { id: "5", nombre: "Masaje Tailandés", precio: "1100" },
  ];

  const terapeutas = ["Ana Martínez", "Luis Ramírez", "Carmen Torres", "Miguel Sánchez"];
  const metodosPago = ["Efectivo", "Tarjeta", "Transferencia"];

  const onSubmit = (data: VentaForm) => {
    const nuevaVenta = {
      id: ventas.length + 1,
      fecha: new Date().toISOString().split('T')[0],
      cliente: data.cliente,
      servicio: servicios.find(s => s.id === data.servicio)?.nombre || "",
      terapeuta: data.terapeuta,
      monto: Number(data.monto),
      metodoPago: data.metodoPago,
      estado: "Completada",
    };

    setVentas([nuevaVenta, ...ventas]);
    toast({
      title: "Venta registrada",
      description: "La venta se ha registrado exitosamente.",
    });
    setOpen(false);
    form.reset();
  };

  const totalVentas = ventas.reduce((sum, venta) => sum + venta.monto, 0);
  const ventasHoy = ventas.filter(v => v.fecha === new Date().toISOString().split('T')[0]).length;
  const promedioVenta = totalVentas / ventas.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ventas</h1>
          <p className="text-muted-foreground mt-1">Gestiona y registra todas las ventas</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Nueva Venta
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Registrar Nueva Venta</DialogTitle>
              <DialogDescription>
                Complete el formulario para registrar una nueva venta
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="servicio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          const servicio = servicios.find(s => s.id === value);
                          if (servicio) {
                            form.setValue("monto", servicio.precio);
                          }
                        }} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {servicios.map((servicio) => (
                            <SelectItem key={servicio.id} value={servicio.id}>
                              {servicio.nombre} - ${servicio.precio}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cliente"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cliente</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre del cliente" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terapeuta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Terapeuta</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un terapeuta" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {terapeutas.map((terapeuta) => (
                            <SelectItem key={terapeuta} value={terapeuta}>
                              {terapeuta}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="metodoPago"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Método de Pago</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un método" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {metodosPago.map((metodo) => (
                            <SelectItem key={metodo} value={metodo}>
                              {metodo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="monto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monto</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0.00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                    Cancelar
                  </Button>
                  <Button type="submit" className="flex-1">Registrar Venta</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Total Ventas"
          value={`$${totalVentas.toLocaleString()}`}
          trend="Total acumulado"
          icon={DollarSign}
        />
        <StatCard
          title="Ventas Hoy"
          value={ventasHoy.toString()}
          trend="Servicios vendidos"
          icon={TrendingUp}
        />
        <StatCard
          title="Promedio por Venta"
          value={`$${Math.round(promedioVenta).toLocaleString()}`}
          trend="Ticket promedio"
          icon={Users}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Ventas</CardTitle>
          <CardDescription>Registro completo de todas las transacciones</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Servicio</TableHead>
                <TableHead>Terapeuta</TableHead>
                <TableHead>Método de Pago</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ventas.map((venta) => (
                <TableRow key={venta.id}>
                  <TableCell>{venta.fecha}</TableCell>
                  <TableCell className="font-medium">{venta.cliente}</TableCell>
                  <TableCell>{venta.servicio}</TableCell>
                  <TableCell>{venta.terapeuta}</TableCell>
                  <TableCell>{venta.metodoPago}</TableCell>
                  <TableCell className="font-semibold">${venta.monto.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="default">{venta.estado}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ventas;
