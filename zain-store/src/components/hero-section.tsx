import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative">
      {/* خلفية القسم الرئيسي */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.jpeg)',
          filter: 'brightness(40%)',
        }}
      ></div>

      {/* محتوى القسم الرئيسي */}
      <div className="container mx-auto relative z-10 px-4 py-16 md:py-32">
        <div className="max-w-3xl ml-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 zain-text-shadow">
            زين التنموية
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 zain-text-shadow">
            الشريك الأمثل للتطوير والمستقبل
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl">
            نحن زين التنموية مؤسسة سعودية 100% اتخذت مقرها الرسمي في المنطقة الشرقية.
            نعمل في مجال التجارة والمقاولات، الصيانة والتشغيل، وتسعى لتحقيق أعلى مستويات الجودة.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button className="bg-zain-red hover:bg-zain-red/90 text-white" size="lg" asChild>
              <Link href="#products">
                تصفح منتجاتنا
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zain-red" size="lg" asChild>
              <Link href="#contact">
                تواصل معنا
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-start">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">+15</span>
              <span className="text-white/80">سنوات خبرة</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">+500</span>
              <span className="text-white/80">مشروع منجز</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">+50</span>
              <span className="text-white/80">عميل</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-white/80">رضا العملاء</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
