import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { useAuth } from "@/context/authContext";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router";
import { LoginCredentials } from "@/types/auth";
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

const LoginForm = () => {
  useAuthRedirect();
  const [showPassword, setShowPassword] = useState(false);
  const { login, googleLogin, loading, error } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    try {
      const success = await login(data.email, data.password);
      if (success) {
        toast.success("Successfully logged in!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("An error occur while Signing-up", {
        description: String(error),
      });
      // Error is handled by auth context
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast("User Signed In Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast("Error Signing Up");
    }
  };

  return (
    <div className="mx-auto flex justify-center ">
      <div className="mt-16 flex flex-col">
        <Link to="/">
          <img src="/images/PFlex.svg" alt="logo" className="mb-4 w-20" />
        </Link>
        <h2 className="font-space-grotesk text-2xl font-bold leading-[72px]  md:text-4xl">
          Welcome back!
        </h2>
        <div className="mt-1 flex gap-1">
          <span className="font-['Inter'] text-xs font-medium ">
            don't have an account?{" "}
          </span>
          <span className="font-['Inter'] text-xs font-medium text-primary-foreground underline">
            <Link to="/sign-up" className="text-primary">
              Sign Up
            </Link>
          </span>
        </div>
        <div className="mt-6 flex gap-4">
          <Button
            asChild
            variant={"outline"}
            className="mt-4 bg-transparent px-8"
            onClick={handleGoogleLogin}
          >
            <div>
              <div className="flex items-center justify-center pr-2">
                <img
                  src="/icons/google.svg"
                  alt="google-icon"
                  className="mr-2 w-6"
                />
                Google
              </div>
            </div>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="mt-4 bg-transparent px-8"
          >
            <Link to="/sign-up">
              <div className="flex items-center justify-center pr-2">
                <img
                  src="/icons/facebook-logo.svg"
                  alt="facebook-icon"
                  className="mr-2 w-6"
                />
                Facebook
              </div>
            </Link>
          </Button>
        </div>
        <div className="mt-9 flex items-center justify-center gap-1">
          <div className="h-[0px] w-[109px] border border-slate-500"></div>
          <p className="text-center font-['Inter'] text-xs font-normal leading-none">
            or continue with
          </p>
          <div className="h-[0px] w-[109px] border border-slate-500"></div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-4"
          >
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="m@example.com"
              className={errors.email ? "border-red-500" : ""}
              disabled={loading}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}

            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  disabled={loading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon className="h-4 w-4" />
                  ) : (
                    <EyeOffIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Link
              to="/forgot-password"
              className="flex justify-end text-xs  hover:text-primary"
            >
              Forgot Password?
            </Link>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
