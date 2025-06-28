// components/Navbar.tsx
const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 text-black">
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
    <div className="text-xl font-bold">LOGO</div>
    <div className="flex space-x-24 text-sm text-gray-700">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <button className="border border-gray-400 px-4 py-1 rounded text-sm">Sign In</button>
  </nav>
    </header>
  );
};

export default Navbar;
