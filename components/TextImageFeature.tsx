// components/TextImageFeature.js
import Image from "next/image";

export default function TextImageFeature() {
  return (
    <section className="py-12 px-6 flex flex-col md:flex-row items-center bg-white gap-12">
      <Image src="/biker-road.jpg" alt="Biker road" width={500} height={400} className="rounded shadow" />
      <div>
        <p className="text-sm text-blue-600 font-medium">Lorem ipsum</p>
        <h2 className="text-2xl font-bold mb-4 text-blue-900 uppercase">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
        </h2>
        <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-6">
          <p>Lorem Ipsum</p><p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p><p>Lorem Ipsum</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
          Lorem Ipsum →
        </button>
      </div>
    </section>
  );
}