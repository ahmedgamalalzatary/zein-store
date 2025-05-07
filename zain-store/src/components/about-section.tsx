import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">عن زين التنموية</h2>
          <div className="w-20 h-1 bg-zain-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            شريكك الأمثل في مجال التجارة والمقاولات. نقدم أفضل الخدمات والمنتجات بأعلى مستويات الجودة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">نحن نسعى للتميز</h3>
            <p className="text-gray-600 mb-6">
              نحن في زين التنموية نعمل دائمًا على تطوير أعمالنا وتقديم أفضل الخدمات والمنتجات لعملائنا.
              نمتلك خبرة تمتد لأكثر من 15 عامًا في مجال التجارة والمقاولات والصيانة.
            </p>
            <p className="text-gray-600 mb-6">
              تأسست شركة زين التنموية على أيدي نخبة من المهندسين والفنيين المحترفين في مجالات متنوعة،
              ونفخر اليوم بأن نكون من رواد مجال الخدمات والمنتجات في المملكة العربية السعودية،
              ونساهم بفعالية في تحقيق رؤية المملكة 2030.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-zain-red">
                <h4 className="font-semibold text-gray-800 mb-2">الجودة</h4>
                <p className="text-gray-600 text-sm">نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-zain-orange">
                <h4 className="font-semibold text-gray-800 mb-2">الاحترافية</h4>
                <p className="text-gray-600 text-sm">فريقنا من المحترفين ذوي الخبرة يضمن تقديم أفضل النتائج</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-zain-orange">
                <h4 className="font-semibold text-gray-800 mb-2">خدمة العملاء</h4>
                <p className="text-gray-600 text-sm">نضع رضا العملاء في مقدمة أولوياتنا ونسعى لتجاوز توقعاتهم</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-zain-red">
                <h4 className="font-semibold text-gray-800 mb-2">موثوقية</h4>
                <p className="text-gray-600 text-sm">يمكنك الاعتماد علينا لتنفيذ مشاريعك بدقة وفي الوقت المحدد</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-[500px] w-full">
              <Image
                src="/service1.jpeg"
                alt="عن زين التنموية"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
