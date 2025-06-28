import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-100" >
      <div>
        <h2 className="text-lg text-blue-600 font-semibold mb-1">LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">DIGNISSIM TELLUS.</h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. 
          Dolor aliquet est tortor tincidunt ultricies feugiat mauris.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Loerum Ipsum →</button>
        <div className="bg-white rounded-lg shadow-md p-4 mt-6 border-l-4 border-blue-600 relative">
          <span className="absolute top-2 right-2 text-red-600">📌</span>
          <h4 className="font-bold text-gray-800 mb-2">Lorem ipsum dolor sit</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper. Egestas
            congue mattis ut placerat vitae amet suspendisse fermentum velit.
          </p>
        </div>
      </div>
      <Image
        src="/scooter.jpg"
        alt="Scooter Deal"
        width={500}
        height={400}
        className="rounded-lg"
      />
    </section>
  );
}