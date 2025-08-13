import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function DashboardLayout({ title, children }: Props) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="grow flex flex-col">
        <Navbar title={title} />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
