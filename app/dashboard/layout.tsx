import { getServerSession } from "next-auth";
import { Sidebar } from "../components/dashboard/sidebar/SideBar";
import "../globals.css";
import authOptions from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { Role } from "@/models/User";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/login")
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={session.user.role as Role} />
      <main className="flex-1 overflow-y-hidden p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}