// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#0D1321] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Logo */}
        <div className="mb-6">
          <div className="bg-white px-3 py-1 inline-block text-black font-bold">LOGO</div>
        </div>

        {/* Footer Columns */}
        {[1, 2, 3, 4].map((col) => (
          <div key={col} className="mb-6">
            <h4 className="font-bold mb-2">Lorem Ipsum</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              {[...Array(4)].map((_, i) => (
                <li key={i}>Lorem ipsum</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
