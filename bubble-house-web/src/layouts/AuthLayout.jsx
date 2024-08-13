import { Outlet } from "react-router-dom";
import Logo from "@/components/icons/Logo";

export default function AuthLayout() {
    return (
        <div className="bg-primaryColor min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-[450px] px-4 lg:px-0 my-5">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <div className="mt-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
