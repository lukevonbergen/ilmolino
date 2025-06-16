export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Il Molino. All rights reserved.
        </p>
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-gray-900 transition">Home</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#menu" className="hover:text-gray-900 transition">Menu</a>
          <a href="#gallery" className="hover:text-gray-900 transition">Gallery</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
}