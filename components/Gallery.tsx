// components/Gallery.tsx
const galleryImages = [
  "/gallery/ride1.jpg",
  "/gallery/ride2.jpg",
  "/gallery/ride3.jpg",
  "/gallery/ride4.jpg",
  "/gallery/ride5.jpg",
  "/gallery/ride6.jpg"
];

const Gallery = () => {
  return (
    <div className="bg-[#f4f8ff] py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-wide text-gray-500">No limits</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Lorem Ipsum Dolor Sit Amet</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow transition">
            Loerum Ipsum →
          </button>
        </div>

        {/* Right Side Gallery */}
        <div className="grid grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative h-32 sm:h-40 lg:h-48 w-full overflow-hidden rounded-md">
              <img
                src={img}
                alt={`Gallrery image ${i + 1}`}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
