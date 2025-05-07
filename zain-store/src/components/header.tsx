import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/zain-logo.png"
              alt="زين التنموية"
              width={120}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-1 space-x-reverse">
          <Button variant="ghost" asChild>
            <Link href="#about" className="text-gray-800 hover:text-zain-red transition-colors px-3">
              عن الشركة
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#services" className="text-gray-800 hover:text-zain-red transition-colors px-3">
              خدماتنا
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#products" className="text-gray-800 hover:text-zain-red transition-colors px-3">
              منتجاتنا
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact" className="text-gray-800 hover:text-zain-red transition-colors px-3">
              تواصل معنا
            </Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="bg-zain-red hover:bg-zain-red/90 text-white" size="sm">
            <Link href="#contact">
              تواصل معنا
            </Link>
          </Button>

          <div className="block md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
