import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { IoSunny, IoMoon } from "react-icons/io5";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isDarkmode, setDarkMode] = useState(true);
  return (
    <div className={`${isDarkmode && "dark"} flex flex-col min-h-screen`}>
      <button
        className="bg-slate-100 dark:bg-slate-700 fixed z-10 top-0 right-0 m-4 border border-slate-400 rounded-md p-2 group"
        onClick={() => setDarkMode(!isDarkmode)}
      >
        {isDarkmode ? (
          <IoSunny className="text-slate-100 text-lg group-hover:animate-spin group-hover:text-amber-500" />
        ) : (
          <IoMoon className="text-slate-800 text-lg" />
        )}
      </button>
      <Header />
      <div className="dark:bg-slate-800">
        <main className="flex-grow flex flex-col  container mx-auto p-8 pb-28">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
