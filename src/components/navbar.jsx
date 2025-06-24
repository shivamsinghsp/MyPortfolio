const Navbar = () => (
  <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
      <ul className="hidden md:flex gap-6 text-gray-700">
        {["Home", "Work", "About", "Contact"].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="block md:hidden text-gray-700">
        <svg /* burger icon */ />
      </button>
    </div>
  </nav>
);

export default Navbar;
