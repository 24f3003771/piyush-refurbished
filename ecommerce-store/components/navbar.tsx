import Link from "next/link";
import { Laptop, ShieldCheck, PhoneCall, FileText } from "lucide-react";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
      {/* Top Indian Announcement Bar */}
      <div className="bg-neutral-900 text-neutral-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="bg-gradient-to-r from-orange-500 via-white to-emerald-500 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-sm shadow-sm uppercase tracking-wider">
              🇮🇳 PAN-INDIA
            </span>
            <span className="font-medium text-[11px] sm:text-xs">
              Free Express Delivery Across 19,000+ Pincodes • 1-Year Pan-India Warranty • 7-Day Replacement
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-neutral-300">
            <span className="flex items-center gap-1 hover:text-white transition">
              <FileText size={13} className="text-emerald-400" /> GST Invoice Available
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <ShieldCheck size={13} className="text-emerald-400" /> 100% Quality Tested
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <PhoneCall size={13} className="text-emerald-400" /> Helpline: +91 98765 43210
            </span>
          </div>
        </div>
      </div>

      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-18 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-x-2.5 group">
            <div className="bg-neutral-900 text-white p-2.5 rounded-xl group-hover:bg-emerald-600 transition-colors shadow-md">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-xl tracking-tight text-neutral-900 flex items-center gap-1.5">
                PIYUSH <span className="text-emerald-600 font-black">REFURBISHED</span>
              </p>
              <p className="text-[10px] tracking-widest text-neutral-500 uppercase font-bold">India&apos;s Trusted Certified Laptop Store</p>
            </div>
          </Link>

          <MainNav data={categories} />

          <div className="flex items-center gap-4">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </header>
  );
};
 
export default Navbar;
