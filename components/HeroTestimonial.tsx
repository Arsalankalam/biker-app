// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 bg-white text-black">
      <h2 className="text-2xl font-bold">LOREM IPSUM DOLOR SIT AMET</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus...
      </p>

      <div className="relative mt-8 inline-block">
        <Image
          src="/biker-group.jpg"
          alt="Bikes"
          width={800}
          height={400}
          className="rounded shadow"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-white p-4 shadow-lg w-64 text-left">
          <h4 className="font-semibold">Artist & Investor</h4>
          <p className="text-sm text-gray-600">
            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor...
          </p>
          <a href="#" className="text-blue-600 font-medium text-sm mt-2 inline-block">
            Read Full Story →
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4">
        <div className="flex justify-center gap-2">
          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
          <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}