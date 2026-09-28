import Link from "next/link";
import { Laptop, ShieldCheck, Award, HeartHandshake, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 mb-10 border-b border-neutral-800 text-xs font-semibold text-neutral-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0" />
            <span>1-Year Pan-India Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0" />
            <span>GST Input Tax Invoice (18%)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0" />
            <span>45-Point QC Tested</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0" />
            <span>BlueDart Insured Shipping</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 text-white p-2 rounded-xl">
                <Laptop className="w-5 h-5" />
              </div>
              <p className="font-extrabold text-lg text-white tracking-tight">
                PIYUSH <span className="text-emerald-400 font-bold">REFURBISHED</span>
              </p>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              India&apos;s leading platform for certified pre-owned Apple MacBooks, Lenovo ThinkPads, and Dell XPS laptops. Grade A+ refurbished machines backed by 1-Year Pan-India Warranty.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck size={16} /> 100% Genuine OEM Hardware
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Refurbished Categories</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/" className="hover:text-white transition">Apple MacBooks (M1 / M2 / M3)</Link></li>
              <li><Link href="/" className="hover:text-white transition">Lenovo ThinkPad X1 & T-Series</Link></li>
              <li><Link href="/" className="hover:text-white transition">Dell XPS & Latitude Laptops</Link></li>
              <li><Link href="/" className="hover:text-white transition">RTX Gaming Laptops (Asus / Legion)</Link></li>
              <li><Link href="/" className="hover:text-white transition">Coding & Student Laptops Under ₹35K</Link></li>
            </ul>
          </div>

          {/* Indian Quality Standards */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quality & Warranty</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5"><Award size={13} className="text-emerald-400" /> Grade A+ Pristine Cosmetics</li>
              <li className="flex items-center gap-1.5"><Award size={13} className="text-emerald-400" /> 85%+ Battery Health Certified</li>
              <li className="flex items-center gap-1.5"><Award size={13} className="text-emerald-400" /> 1-Year Doorstep Warranty</li>
              <li className="flex items-center gap-1.5"><Award size={13} className="text-emerald-400" /> 7-Day Easy Replacement</li>
              <li className="flex items-center gap-1.5"><Award size={13} className="text-emerald-400" /> Pre-loaded Windows 11 Pro</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">India Support & Sales</h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-emerald-400" /> +91 98765 43210 (Mon - Sat)
              </p>
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-emerald-400" /> support@piyushrefurbished.in
              </p>
              <p className="flex items-start gap-2 text-neutral-400">
                <MapPin size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" /> 
                Technology Hub, Nehru Place & Koramangala Bengaluru, India
              </p>
            </div>
            <div className="pt-2 text-xs text-neutral-400 flex items-center gap-1.5">
              <HeartHandshake className="text-emerald-400 w-4 h-4" /> Save E-Waste &bull; Make in India Support
            </div>
          </div>
        </div>

        {/* Bottom Payment Badges & Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Piyush Refurbished Store India. GST Registered. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-400">
            <span className="bg-neutral-800 px-2 py-1 rounded">UPI (GPay / PhonePe)</span>
            <span className="bg-neutral-800 px-2 py-1 rounded">RuPay / Visa / Master</span>
            <span className="bg-neutral-800 px-2 py-1 rounded">No-Cost EMI</span>
            <span className="bg-neutral-800 px-2 py-1 rounded">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
