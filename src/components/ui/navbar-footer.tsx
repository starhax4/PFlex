import { Settings } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./sidebar";

const NavFooter = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to="/dashboard/settings">
            <Settings />
            <span>Settings</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
