import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/authContext";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email) {
      try {
        await resetPassword(email);
        toast.success("Password reset link sent to your email", {
          description: "Please check your inbox and spam folder",
          duration: 5000,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: string | any) {
        toast.error("Failed to send reset link", {
          description: error?.message || "Please try again later",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1E1E2F] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 sm:space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
          <img
            src="/images/PFlex.svg"
            alt="logo"
            className="mb-2 h-10 w-auto sm:mb-4 sm:h-12"
          />
          <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Forgot Password
          </h1>
          <p className="px-2 text-center text-sm text-muted-foreground">
            Enter your email to receive a password reset link
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                className="w-full"
                disabled={isLoading}
                autoComplete="email"
              />
            </div>
            <Button className="mt-2 w-full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default ResetPassword;
