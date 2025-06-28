// components/BikeShowcase.tsx
const bikes = [
  "/bike1.jpg",
  "/bike2.jpg",
  "/bike3.jpg"
]

const BikeShowcase = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 bg-white text-black">
    <div className="space-y-6">
      <p className="text-sm text-blue-600 font-medium">Lorem ipsum dolor sit</p>
      <h2 className="text-2xl font-bold uppercase">LOREM IPSUM DOLOR SIT AMET</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam.
      </p>
      <div className="space-y-9">
        {bikes.map((img, i) => (
          <div key={i} className="flex gap-4 items-start">
            <img src={img} alt="Thumb" width={90} height={90} className="" />
            <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laudantium quaerat ipsam.</p>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-7 mt-4">
        <button className="bg-blue-600 text-white px-11 py-1">Lorem Ipsum</button>
        <p>📞 123456789</p>
      </div>
    </div>
    <div>
      <img src="/bikes.jpg" alt="Bikes" width={600} height={600} className="" />
    </div>
  </section>
);
};

export default BikeShowcase;
