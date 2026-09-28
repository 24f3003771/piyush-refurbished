import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import { ShieldCheck, CheckCircle2, BatteryCharging, Truck, RefreshCw, Award, Cpu, Wrench, FileText, CreditCard, MapPin } from 'lucide-react';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('224ce266-415e-4a3b-b813-12809a93b8de');

  return (
    <div className='bg-neutral-50/60'>
      <Container>
        <div className='space-y-12 pb-16'>
          {/* Main Indian Tech Hero Billboard */}
          <Billboard data={billboard} />

          {/* 4-Pillar Quality & Indian Guarantee Bar */}
          <div className='px-4 sm:px-6 lg:px-8 -mt-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-sm'>
              <div className='flex items-start gap-3'>
                <div className='p-2.5 bg-emerald-50 text-emerald-600 rounded-xl'>
                  <ShieldCheck className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-bold text-sm text-neutral-900'>1-Year Pan-India Warranty</h4>
                  <p className='text-xs text-neutral-500 mt-0.5'>Doorstep repair & pickup across 19,000+ pin codes.</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='p-2.5 bg-blue-50 text-blue-600 rounded-xl'>
                  <FileText className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-bold text-sm text-neutral-900'>18% GST Input Credit</h4>
                  <p className='text-xs text-neutral-500 mt-0.5'>Official GST invoice for corporate & tax expense claims.</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='p-2.5 bg-amber-50 text-amber-600 rounded-xl'>
                  <CreditCard className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-bold text-sm text-neutral-900'>UPI & No-Cost EMI</h4>
                  <p className='text-xs text-neutral-500 mt-0.5'>Zero-interest EMI on major banks, GPay, PhonePe & Cards.</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='p-2.5 bg-purple-50 text-purple-600 rounded-xl'>
                  <Truck className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-bold text-sm text-neutral-900'>BlueDart Express Delivery</h4>
                  <p className='text-xs text-neutral-500 mt-0.5'>Tamper-proof insured express dispatch in 24-48 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Refurbished Laptops Section */}
          <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-2'>
              <div>
                <span className='text-xs uppercase tracking-wider font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md'>
                  🇮🇳 Best Refurbished Deals in India
                </span>
                <h2 className='text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-2'>
                  Featured Certified Laptops & MacBooks
                </h2>
                <p className='text-sm text-neutral-500 mt-1'>
                  Tested on 45 hardware checkpoints &bull; 100% Genuine OEM components &bull; Pre-installed genuine Windows/macOS.
                </p>
              </div>
              <span className='text-xs font-semibold text-neutral-700 bg-neutral-200/70 px-3 py-1.5 rounded-lg'>
                Showing {products.length} In-Stock Laptops
              </span>
            </div>

            <ProductList title='' items={products} />
          </div>

          {/* Express Delivery City Network */}
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='flex items-center gap-3.5'>
                <div className='p-3 bg-emerald-100 text-emerald-800 rounded-2xl'>
                  <MapPin className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='font-extrabold text-base text-neutral-900'>Express Doorstep Delivery Across Major Tech Hubs</h4>
                  <p className='text-xs text-neutral-500 mt-0.5'>Same-day or next-day delivery available in top metro areas.</p>
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-700'>
                <span className='bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200'>Bengaluru</span>
                <span className='bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200'>Delhi NCR</span>
                <span className='bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200'>Mumbai</span>
                <span className='bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200'>Hyderabad</span>
                <span className='bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200'>Pune</span>
                <span className='bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200'>Chennai</span>
                <span className='bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200 font-bold'>+19,000 Pincodes</span>
              </div>
            </div>
          </div>

          {/* Why Buy Refurbished Banner */}
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-700 relative overflow-hidden'>
              <div className='max-w-3xl space-y-4 relative z-10'>
                <span className='inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-950/90 border border-emerald-500/40 px-3 py-1 rounded-full'>
                  <Award size={14} /> Certified Refurbishment Protocol
                </span>
                <h3 className='text-2xl sm:text-4xl font-black tracking-tight'>
                  Get Pro Apple & ThinkPad Hardware at 40% - 60% Less.
                </h3>
                <p className='text-sm sm:text-base text-neutral-300 leading-relaxed'>
                  Don&apos;t compromise on cheap plastic budget laptops when you can own flagship enterprise-grade aluminum MacBooks, ThinkPads, and Dell XPS machines with complete 1-Year Pan-India Warranty and full GST input claims.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-bold'>
                  <div className='flex items-center gap-2.5 bg-neutral-800/90 p-3.5 rounded-xl border border-neutral-700'>
                    <Wrench className='text-emerald-400 w-5 h-5 flex-shrink-0' />
                    <span>Ultrasonic Sanitization</span>
                  </div>
                  <div className='flex items-center gap-2.5 bg-neutral-800/90 p-3.5 rounded-xl border border-neutral-700'>
                    <Cpu className='text-emerald-400 w-5 h-5 flex-shrink-0' />
                    <span>Arctic MX Thermal Repaste</span>
                  </div>
                  <div className='flex items-center gap-2.5 bg-neutral-800/90 p-3.5 rounded-xl border border-neutral-700'>
                    <RefreshCw className='text-emerald-400 w-5 h-5 flex-shrink-0' />
                    <span>Genuine OS & Drivers Setup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
