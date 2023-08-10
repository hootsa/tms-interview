import navigations from "@/constants/navigations";
import Image from "../Image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="dark:bg-slate-800 border-b dark:border-slate-600">
      <nav className="container flex flex-col align items-center py-6 ">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image className="h-8 w-40" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="pt-8 flex lg:gap-x-12 gap-x-4">
          {navigations.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-lg font-semibold leading-8 dark:text-slate-50 dark:hover:text-slate-400 transition"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
