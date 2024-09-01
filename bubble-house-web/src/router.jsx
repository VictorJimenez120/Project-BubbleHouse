import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import DashboardSecondView from "./views/DashboardSecondView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/home" element={<DashboardView />} />
                    <Route path="/home-secondary" element={<DashboardSecondView />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/" element={<LoginView />} index />
                    <Route path="/auth/register" element={<RegisterView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

