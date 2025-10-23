import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Sparkles,
  FileText,
  Package,
  DollarSign,
  Receipt,
  ShoppingCart,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, color: "hsl(var(--page-dashboard))" },
  { title: "Trabajadores", url: "/trabajadores", icon: Users, color: "hsl(var(--page-trabajadores))" },
  { title: "Servicios", url: "/servicios", icon: Sparkles, color: "hsl(var(--page-servicios))" },
  { title: "Ventas", url: "/ventas", icon: ShoppingCart, color: "hsl(var(--page-ventas))" },
  { title: "Reportes", url: "/reportes", icon: FileText, color: "hsl(var(--page-reportes))" },
  { title: "Inventario", url: "/inventario", icon: Package, color: "hsl(var(--page-inventario))" },
  { title: "Comisiones", url: "/comisiones", icon: DollarSign, color: "hsl(var(--page-comisiones))" },
  { title: "Planilla", url: "/planilla", icon: Receipt, color: "hsl(var(--page-planilla))" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-3 py-4">
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-sidebar-foreground">Spa Manager</h2>
                  <p className="text-xs text-muted-foreground">Gestión integral</p>
                </div>
              </div>
            )}
            <SidebarTrigger className="ml-auto" />
          </div>

          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Menú Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium"
                          : "hover:bg-sidebar-accent/50"
                      }
                      style={({ isActive }) =>
                        isActive
                          ? {
                              backgroundColor: `${item.color}15`,
                              color: item.color,
                              borderLeft: `3px solid ${item.color}`,
                            }
                          : {}
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
