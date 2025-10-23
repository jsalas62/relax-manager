import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Trabajadores from "./pages/Trabajadores";
import Servicios from "./pages/Servicios";
import Reportes from "./pages/Reportes";
import Inventario from "./pages/Inventario";
import Comisiones from "./pages/Comisiones";
import Planilla from "./pages/Planilla";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trabajadores" element={<Trabajadores />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/comisiones" element={<Comisiones />} />
            <Route path="/planilla" element={<Planilla />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
