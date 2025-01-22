import { AppSidebar } from "@/components/app-sidebar";
import TopBar from "@/components/app-topbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex h-screen flex-col">
        <div className="sticky top-0 z-40 bg-background">
          <TopBar />
        </div>
        <main className="flex-1 overflow-y-auto">
          <div className="container h-full py-4 mx-auto">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
