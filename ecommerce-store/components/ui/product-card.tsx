"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart, ShieldCheck, CheckCircle2, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
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
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-2xl border border-neutral-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 p-3.5 flex flex-col justify-between"
    >
      <div>
        {/* Image & Badges */}
        <div className="aspect-[4/3] rounded-xl bg-neutral-100 relative overflow-hidden flex items-center justify-center p-2">
          {data.images?.[0]?.url && (
            <Image
              src={data.images[0].url}
              alt={data.name || "Refurbished Laptop"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
            />
          )}

          {/* Top Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 size={11} /> Grade A+ Pristine
            </span>
          </div>

          <div className="absolute top-2 right-2 z-10">
            <span className="bg-neutral-900/85 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-neutral-700/50 shadow-sm">
              Save {formattedSavings}
            </span>
          </div>

          {/* Hover Actions */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute w-full px-6 bottom-3 z-20">
            <div className="flex gap-x-4 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={18} className="text-neutral-700" />}
                className="bg-white/90 hover:bg-white shadow-lg hover:scale-110 transition"
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={18} className="text-neutral-700" />}
                className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:scale-110 transition"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="pt-3 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
            <span>{data.category?.name || "Refurbished Laptop"}</span>
            <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[11px] font-semibold">
              <ShieldCheck size={12} /> 1-Yr Warranty
            </span>
          </div>

          <h3 className="font-bold text-sm sm:text-base text-neutral-900 line-clamp-2 group-hover:text-emerald-700 transition leading-snug">
            {data.name}
          </h3>

          {/* Spec Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {data.size?.value && (
              <span className="text-[11px] bg-neutral-100 text-neutral-700 font-medium px-2 py-0.5 rounded-md border border-neutral-200">
                {data.size.value}
              </span>
            )}
            {data.color?.name && (
              <span className="text-[11px] bg-neutral-100 text-neutral-700 font-medium px-2 py-0.5 rounded-md border border-neutral-200">
                {data.color.name}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing, EMI & Footer */}
      <div className="pt-3 mt-2 border-t border-neutral-100 space-y-1.5">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[11px] text-neutral-400 line-through font-medium">
              MRP {formattedMsrp}
            </div>
            <div className="text-lg font-extrabold text-neutral-900">
              <Currency value={data?.price} />
            </div>
          </div>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100/70 px-2 py-1 rounded-md">
            Ready to Ship
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-neutral-600 font-medium bg-neutral-50 px-2 py-1 rounded-md border border-neutral-200/60">
          <CreditCard size={12} className="text-emerald-600 flex-shrink-0" />
          <span>No-Cost EMI from <strong className="text-neutral-900">{formattedEmi}/mo</strong></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
