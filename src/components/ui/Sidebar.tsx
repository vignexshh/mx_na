"use client";

import React from 'react';
import Link from 'next/link';
import { Home, ShoppingCart, Package, Users2, LineChart, Settings, Package2, Menu } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { href: "#", icon: Home, label: "Dashboard" },
  { href: "/dashboard/accounts", icon: ShoppingCart, label: "Orders" },
  { href: "#", icon: Package, label: "Products" },
  { href: "#", icon: Users2, label: "Customers" },
  { href: "#", icon: LineChart, label: "Analytics" },
  { href: "#", icon: Settings, label: "Settings" },
  { href: "#", icon: Settings, label: "EDit Profile" },
];

const SidebarItem = ({ href, icon: Icon, label }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Link
        href={href}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
        <Icon className="h-5 w-5" />
        <span className="sr-only">{label}</span>
      </Link>
    </TooltipTrigger>
    <TooltipContent side="right">{label}</TooltipContent>
  </Tooltip>
);

const Sidebar = () => {
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-secondary sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <SidebarItem href="#" icon={Settings} label="Settings" />
        </nav>
      </aside>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="fixed top-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground sm:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <nav className="flex flex-col items-start gap-4 px-4 py-4">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center gap-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  );
};

export default Sidebar;