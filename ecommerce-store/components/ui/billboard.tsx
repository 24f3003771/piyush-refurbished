import { Billboard as BillboardType } from '@/types';
import { ShieldCheck, Cpu, BatteryCharging, FileText, CheckCircle2 } from 'lucide-react';

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-2xl overflow-hidden'>
      <div
        style={{ backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.72)), url(${data?.imageUrl})` }}
        className='rounded-3xl relative aspect-[16/9] md:aspect-[2.6/1] overflow-hidden bg-cover bg-center text-white shadow-2xl border border-neutral-800'
      >
        <div className='h-full w-full flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-16 gap-y-4 md:gap-y-5'>
          <div className='inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm'>
            <CheckCircle2 size={14} className="text-emerald-400" />
            India&apos;s #1 Certified Refurbished Laptops &bull; Grade A+ Pristine
          </div>
          
          <h1 className='font-black text-2xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight tracking-tight text-white drop-shadow-md'>
            {data?.label || "Certified Refurbished Laptops & MacBooks — Save Up To 60%"}
          </h1>

          <p className='text-sm sm:text-base text-neutral-300 max-w-2xl hidden sm:block leading-relaxed'>
            Rigorous 45-point QC inspection by certified engineers, 1-Year Pan-India replacement warranty, 18% GST input tax credit for businesses, and genuine OEM chargers included.
          </p>

          <div className='flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-neutral-300'>
            <div className='flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded-lg border border-neutral-700/60 shadow-sm'>
              <ShieldCheck size={14} className='text-emerald-400' /> 1-Year Pan-India Warranty
            </div>
            <div className='flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded-lg border border-neutral-700/60 shadow-sm'>
              <FileText size={14} className='text-emerald-400' /> GST Business Invoices (Save 18%)
            </div>
            <div className='flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded-lg border border-neutral-700/60 shadow-sm'>
              <BatteryCharging size={14} className='text-emerald-400' /> 85%+ Battery Health Guaranteed
            </div>
            <div className='flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded-lg border border-neutral-700/60 shadow-sm'>
              <Cpu size={14} className='text-emerald-400' /> No-Cost EMI Starting ₹2,499/mo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
