"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav
      className="mx-6 flex items-center space-x-2 sm:space-x-4 lg:space-x-6 overflow-x-auto py-1"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-xs sm:text-sm font-semibold transition-all px-3 py-1.5 rounded-lg whitespace-nowrap',
            route.active 
              ? 'bg-emerald-600 text-white shadow-sm' 
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;
