import { BrowserRouter, Routes, Route } from "react-router";

import AuthLayout from "./pages/Auth/auth-layout";
import { NotFoundPage } from "./pages";
import Home from "./pages/landing-page/home-page";
import SignUpForm from "./pages/Auth/signup-form";
import LoginForm from "./pages/Auth/login-form";
import { ProtectedRoute } from "./pages/Auth/Protected-routes";
import ResetPassword from "./pages/Auth/reset-password";
import DashboardLayout from "./pages/dashbord/layout";
import Main from "./pages/dashbord/main";

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
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard">
            <Route index element={<Main />} />
            <Route path="templates" element={<div><h1>Templates</h1></div>} />
            <Route path="sites" element={<div><h1>sites</h1></div>} />
            <Route path="settings" element={<div><h1>Settings</h1></div>} />
            <Route path="notifications" element={<div><h1>Notifications</h1></div>} />
          </Route>
          
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
