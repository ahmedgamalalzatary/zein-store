import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'تكييف وتبريد',
    description: 'توريد وتركيب وصيانة أحدث أنظمة التكييف والتبريد بأفضل الأسعار وبضمان شامل من زين التنموية.',
    image: '/ac1.jpeg',
    link: '#contact'
  },
  {
    id: 2,
    title: 'مقاولات وإنشاءات',
    description: 'خدمات المقاولات العامة والإنشاء والصيانة للمباني والمنشآت التجارية والسكنية بأعلى معايير الجودة.',
    image: '/service2.jpeg',
    link: '#contact'
  },
  {
    id: 3,
    title: 'أجهزة منزلية',
    description: 'توفير مجموعة متنوعة من الأجهزة المنزلية الحديثة من أفضل العلامات التجارية العالمية بأسعار منافسة.',
    image: '/kitchen1.jpeg',
    link: '#products'
  },
  {
    id: 4,
    title: 'العدد والأدوات',
    description: 'توفير أحدث العدد والأدوات للمختصين والهواة، ذات جودة عالية موثوقة لإنجاز أعمالكم باحترافية.',
    image: '/toolset1.jpeg',
    link: '#products'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">خدماتنا</h2>
          <div className="w-20 h-1 bg-zain-orange mx-auto mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات والمنتجات لتلبية احتياجاتكم بأعلى معايير الجودة وبأسعار منافسة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden zain-card-hover transition-transform">
              <div className="relative h-[200px] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild variant="ghost" className="text-zain-red hover:text-zain-red/90 hover:bg-gray-100">
                  <Link href={service.link}>
                    اطلب الخدمة
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 inline">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-zain-orange hover:bg-zain-orange/90 text-white" asChild>
            <Link href="#contact">
              تواصل معنا للمزيد من الخدمات
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
