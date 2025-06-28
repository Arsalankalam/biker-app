// components/Events.tsx
const Events = () => {
  return (
    <section
      className="py-24 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('/event-bg.jpg')" }}
    >
      <div className=" bg-opacity-60 py-16 px-6 rounded">
        <h2 className="text-4xl font-bold mb-4">Upcoming Mega Ride: The Himalayan Expedition</h2>
        <p className="mb-6">An unforgettable adventure through the peaks and valleys – limited slots only!</p>
        <button className="bg-gray-50 hover:bg-gray-300 px-6 py-3 rounded text-black">Reserve Your Spot</button>
      </div>
    </section>
  );
};

export default Events;
