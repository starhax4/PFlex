import { BrowserRouter, Routes, Route } from "react-router";

import AuthLayout from "./pages/Auth/auth-layout";
import { NotFoundPage } from "./pages";
import Home from "./pages/landing-page/home-page";
import SignUpForm from "./pages/Auth/signup-form";
import LoginForm from "./pages/Auth/login-form";
import { ProtectedRoute } from "./pages/Auth/Protected-routes";
import Layout from "./pages/dashbord/layout";
import Page from "./pages/dashbord/page";
import ResetPassword from "./pages/Auth/reset-password";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Page />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
