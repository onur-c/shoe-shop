import Header from "@/components/Header";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 ">
      <Header />
      <div className="flex flex-1 ">
        <Sidebar />
        <Products />
      </div>
    </main>
  );
}
