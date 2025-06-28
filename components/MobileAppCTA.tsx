// components/MobileAppCTA.tsx
const MobileAppCTA = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
          <p className="mb-4 text-gray-700">
            Manage your rides, join events, and connect with fellow bikers—all from your phone.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Get the App
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/app-preview.png" alt="Mobile App Preview" className="max-w-xs mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default MobileAppCTA;
