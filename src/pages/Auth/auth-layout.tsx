import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout() {
  return (
    <div>
      <main className="flex dark:bg-[#1E1E2F] dark:text-white">
        <div className="mx-auto md:w-1/2">
          <Outlet />
        </div>
        <div className="hidden md:block md:w-[60%]">
          <img
            src="/images/auth-side.png"
            alt="side_imge"
            className="h-screen w-full object-cover"
          />
        </div>
      </main>
      <Toaster />
    </div>
  );
}
