import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    title: 'مكيف سبليت انفيرتر',
    price: 1999,
    oldPrice: 2399,
    rating: 4.9,
    reviewCount: 32,
    description: 'مكيف سبليت انفيرتر 18000 وحدة موفر للطاقة بتصميم عصري مع ضمان ممتد من زين التنموية.',
    image: '/ac1.jpeg'
  },
  {
    id: 2,
    title: 'طقم عدة متكامل',
    price: 599,
    oldPrice: 699,
    rating: 4.8,
    reviewCount: 47,
    description: 'طقم عدة متكامل يحتوي على أكثر من 120 قطعة متنوعة للمختصين والهواة مع حقيبة حمل قوية.',
    image: '/toolset1.jpeg'
  },
  {
    id: 3,
    title: 'أجهزة المطبخ المتكاملة',
    price: 1299,
    oldPrice: 1599,
    rating: 4.7,
    reviewCount: 28,
    description: 'مجموعة متكاملة من أجهزة المطبخ الحديثة عالية الجودة والكفاءة لتسهيل الحياة اليومية.',
    image: '/kitchen1.jpeg'
  },
  {
    id: 4,
    title: 'مكيف شباك',
    price: 899,
    oldPrice: 1099,
    rating: 4.5,
    reviewCount: 19,
    description: 'مكيف شباك قوي بتبريد سريع وبكفاءة عالية، مناسب للمساحات الصغيرة والمتوسطة.',
    image: '/service3.jpeg'
  }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">منتجاتنا</h2>
          <div className="w-20 h-1 bg-zain-red mx-auto mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            نقدم لكم مجموعة متنوعة من المنتجات عالية الجودة بأفضل الأسعار مع خدمة التوصيل والتركيب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden zain-card-hover">
              <div className="relative h-[200px] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {product.oldPrice > product.price && (
                  <div className="absolute top-2 right-2 bg-zain-red text-white px-2 py-1 rounded-md text-sm font-medium">
                    خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 mr-1">{product.rating} ({product.reviewCount})</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-zain-red">{product.price} ر.س</span>
                    {product.oldPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through mr-2">{product.oldPrice} ر.س</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-zain-red hover:bg-zain-red/90 text-white w-full">
                  أضف إلى السلة
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-zain-red text-zain-red hover:bg-zain-red hover:text-white">
            عرض المزيد من المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
}
