import { Separator } from "@radix-ui/react-separator";
import { NavUser } from "./nav-user";
import { SidebarTrigger } from "./ui/sidebar";
import { useAuth } from "@/context/authContext";
import * as React from "react";
import { Input } from "./ui/input";
import { Bell, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function TopBar() {
  const { user } = useAuth();

  const User = {
    name: user?.displayName ?? "Anonymous",
    email: user?.email ?? "example@email.com",
    avatar: user?.photoURL ?? "/default-avatar.jpg",
  };

  return (
    <header className="flex h-16 shrink-0 items-center border-b transition-all duration-200 ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-14">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold transition-opacity group-has-[[data-collapsible=icon]]/sidebar-wrapper:text-base">
            Dashboard
          </h1>
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 md:justify-between">
          <div className="relative hidden md:block md:w-[55%]">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-xl pl-8 focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex mr-2">
              <Link to="dashboard/sites/new">
                <span>Create New Site</span>
                <Plus className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Link
                to="dashboard/notifications"
                className="rounded-full p-2 hover:bg-sidebar-accent"
              >
                <Bell className="h-5 w-5" />
              </Link>
              
              <NavUser user={User} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
