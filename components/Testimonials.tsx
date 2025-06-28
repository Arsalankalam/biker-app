// components/Testimonials.tsx
const testimonials = [
  {
    name: "Aman R.",
    message: "Riding with this community has changed my life. Every ride is a new story!",
    image: "/users/user1.jpg"
  },
  {
    name: "Sneha P.",
    message: "Amazing organization and unforgettable journeys!",
    image: "/users/user2.jpg"
  },
  {
    name: "Ravi K.",
    message: "The best place for bike enthusiasts to connect and ride together.",
    image: "/users/user3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Rider Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-blue-500 p-6 rounded-xl shadow-lg">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mb-4" />
              <p className="italic">{t.message}</p>
              <p className="mt-4 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
