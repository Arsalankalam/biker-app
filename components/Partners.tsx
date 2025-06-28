// components/Partners.tsx
const logos = [
  "/brands/royal-enfield.png",
  "/brands/yamaha.png",
  "/brands/ktm.png",
  "/brands/harley.png",
  "/brands/helmet.png",
  "/brands/revolt.png"
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-8">Our Trusted Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-12 hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
