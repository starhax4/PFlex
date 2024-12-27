import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { useAuth } from "@/context/authContext";
import { toast } from "sonner";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

import { useNavigate } from "react-router";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  useAuthRedirect();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { registerUser, googleLogin, clearError, error } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const password = watch("password");

  useEffect(() => {
    clearError();
    return () => clearError();
  }, [clearError]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setIsLoading(true);
      clearError();
      const success = await registerUser(data.email, data.password);
      if (success) {
        toast("User Signed Up Successfully");
        navigate("/dashbord");
      }
    } catch (error) {
      toast.error("An error occur while Signing-up", {
        description: String(error),
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // setIsLoading(true);
      await googleLogin();
      toast("User Signed Up Successfully");
    } catch (error) {
      console.error(error);
      toast("Error Signing Up");
    }
  };

  return (
    <div className="mx-auto flex justify-center text-white">
      <div className="mt-16 flex flex-col">
        <Link to="/">
          <img src="/images/PFlex.svg" alt="logo" className="mb-4 w-20" />
        </Link>
        <h2 className="font-space-grotesk text-2xl font-bold leading-[72px] text-white md:text-4xl">
          Create an Account
        </h2>
        <div className="mt-1 flex gap-1">
          <span className="font-['Inter'] text-xs font-medium text-[#b0b3c6]">
            already have an account?{" "}
          </span>
          <span className="font-['Inter'] text-xs font-medium text-primary-foreground underline">
            <Link to="/login" className="text-primary">
              Login
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
          <p className="text-center font-['Inter'] text-xs font-normal leading-none text-[#b0b3c6]">
            or continue with
          </p>
          <div className="h-[0px] w-[109px] border border-slate-500"></div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-4"
          >
            <div className="flex gap-5">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  className={`w-40 ${errors.firstName ? "border-red-500" : ""}`}
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  className={`w-40 ${errors.lastName ? "border-red-500" : ""}`}
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

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

            <div className="relative">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                  className={
                    errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeIcon className="h-4 w-4" />
                  ) : (
                    <EyeOffIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </Button>
            {/* {error && <p className="mt-2 text-sm text-red-500">{error}</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
