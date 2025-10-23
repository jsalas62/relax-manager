import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Sparkles,
  FileText,
  Package,
  DollarSign,
  Receipt,
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
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Trabajadores", url: "/trabajadores", icon: Users },
  { title: "Servicios", url: "/servicios", icon: Sparkles },
  { title: "Reportes", url: "/reportes", icon: FileText },
  { title: "Inventario", url: "/inventario", icon: Package },
  { title: "Comisiones", url: "/comisiones", icon: DollarSign },
  { title: "Planilla", url: "/planilla", icon: Receipt },
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
                          ? "bg-sidebar-accent text-sidebar-primary font-medium"
                          : "hover:bg-sidebar-accent/50"
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
