// components/BlogCards.tsx
const blogs = [
  {
    title: "Riding Through the Western Ghats",
    excerpt: "Explore our latest ride through the lush greenery of the Western Ghats...",
    image: "/blogs/ghats.jpg"
  },
  {
    title: "Desert Storm Adventure Ride",
    excerpt: "Experience the thrill of riding through the golden dunes of Rajasthan.",
    image: "/blogs/desert.jpg"
  },
  {
    title: "Coastal Cruising in South India",
    excerpt: "A relaxing journey along India's beautiful coastlines and beach roads.",
    image: "/blogs/coastal.jpg"
  },
];

const BlogCards = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Ride Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
