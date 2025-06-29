// components/Navbar.tsx
const Navbar = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 fixed top-0 w-full z-50 text-black">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="text-xl font-bold">LOGO</div>
    <div className="hidden md:flex space-x-6">
      <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
    </div>
    <div className="md:hidden">
          {/* Mobile menu button */}
          <button id="menu-button" className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
    <button className="border border-gray-400 px-4 py-1 rounded text-sm">Sign In</button>
  </nav>
    </header>
  );
};

export default Navbar;

