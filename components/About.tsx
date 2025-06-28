// components/About.tsx
const About = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Our Community</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nisl vel erat gravida tincidunt. 
            Join a brotherhood that rides together, learns together, and explores the world on two wheels.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/about.jpg"
            alt="About us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
