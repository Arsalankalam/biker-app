// components/Hero.tsx
const HeroSection = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 items-center bg-white text-black">
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
        sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-gray-300 px-4 py-2 rounded w-full text-black"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <input type="checkbox" className="accent-blue-600" />
        <label>No credit card required!</label>
      </div>
    </div>
    <div>
      <img src="/hero.jpg" width={600} height={400} alt="Biker" className="rounded-md" />
    </div>
  </section>
);

export default HeroSection;
