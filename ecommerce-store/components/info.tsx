"use client";

import { ShoppingCart, ShieldCheck, BatteryCharging, CheckCircle, Truck, RotateCcw, Award, FileText, CreditCard, Zap } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const numPrice = parseFloat(data?.price || "0");
  const originalMsrp = Math.round(numPrice * 1.55);
  const savings = originalMsrp - numPrice;
  const emiPerMonth = Math.round(numPrice / 12);

  const formattedSavings = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(savings);

  const formattedMsrp = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(originalMsrp);

  const formattedEmi = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(emiPerMonth);

  return (
    <div className="space-y-6">
      {/* Category and Condition Badge */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-sm">
          <Award size={13} /> Certified Grade A+
        </span>
        <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded-md">
          {data.category?.name || "Refurbished Laptop"}
        </span>
        <span className="text-emerald-700 text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1 border border-emerald-200/50">
          <CheckCircle size={13} /> Ready for Dispatch in 24 Hrs
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
        {data.name}
      </h1>

      {/* Pricing and EMI block */}
      <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/70 p-5 rounded-2xl border border-neutral-200/90 space-y-3">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            <Currency value={data?.price} />
          </span>
          <span className="text-sm sm:text-base text-neutral-400 line-through font-semibold">
            MRP {formattedMsrp}
          </span>
          <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-sm">
            Save {formattedSavings} (35% OFF)
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-neutral-200/80 text-xs text-neutral-700">
          <div className="flex items-center gap-1.5 font-bold text-neutral-900">
            <CreditCard size={15} className="text-emerald-600" />
            <span>No-Cost EMI from <span className="text-emerald-700">{formattedEmi}/month</span></span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-100/70 px-2.5 py-1 rounded-md">
            <FileText size={13} /> GST Invoice (Save Up To 18% on Business Expense)
          </div>
        </div>
      </div>

      {/* Hardware Specifications */}
      <div className="space-y-3">
        <h3 className="font-extrabold text-sm text-neutral-900 uppercase tracking-wider">Hardware Configuration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <span className="text-neutral-500 font-medium">Memory & Storage:</span>
            <span className="font-bold text-neutral-900">{data?.size?.value || "16GB RAM | 512GB SSD"}</span>
          </div>
          <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <span className="text-neutral-500 font-medium">Finish & Color:</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-900">{data?.color?.name || "Space Gray"}</span>
              <div
                className="h-4 w-4 rounded-full border border-neutral-400 shadow-inner"
                style={{ backgroundColor: data?.color?.value || "#4B4846" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indian Quality & Warranty Guarantee */}
      <div className="bg-white rounded-2xl p-4 border border-neutral-200 space-y-2.5 text-xs text-neutral-700 shadow-sm">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" />
          <span><strong>1-Year Pan-India Warranty:</strong> Doorstep pickup & replacement across 19,000+ pincodes.</span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <BatteryCharging className="text-emerald-600 w-4 h-4 flex-shrink-0" />
          <span><strong>85%+ Battery Health Guaranteed:</strong> Original OEM battery tested for heavy workflows.</span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <RotateCcw className="text-emerald-600 w-4 h-4 flex-shrink-0" />
          <span><strong>7-Day Replacement Policy:</strong> Zero questions asked replacement in case of defects.</span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <Truck className="text-emerald-600 w-4 h-4 flex-shrink-0" />
          <span><strong>Free Insured Shipping:</strong> Delivered via BlueDart / Delhivery Express.</span>
        </div>
      </div>

      {/* Add To Cart CTA & Payment Badges */}
      <div className="space-y-3 pt-2">
        <Button
          onClick={onAddToCart}
          className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-x-2.5 shadow-lg hover:shadow-emerald-600/30 transition-all text-base"
        >
          <ShoppingCart size={20} />
          Buy Now / Add To Cart &bull; <Currency value={data?.price} />
        </Button>

        <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
          <Zap size={14} className="text-amber-500" />
          <span>Supports UPI (GPay, PhonePe, Paytm), NetBanking, Credit/Debit Cards & Cardless EMI</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
