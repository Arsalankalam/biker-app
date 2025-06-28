export default function BannerHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 text-center"
      style={{ backgroundImage: "url('/studio-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-block bg-white text-black font-bold px-4 py-1 mb-4">LOGO</span>
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. <br />
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
        </h2>
      </div>
    </section>
  );
}