import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center h-20 justify-between">
          <div className="hidden md:flex flex-1 items-center space-x-12">
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 uppercase"
            >
              About
            </Link>
            <Link
              href="/classes"
              className="text-gray-700 hover:text-gray-900 uppercase"
            >
              Classes
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <Link
              href="/"
              className="text-xl font-bold"
              style={{ color: "#5178A3" }}
            >
              Hannah Meg Yoga
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-end space-x-12">
            <Link
              href="/events"
              className="text-gray-700 hover:text-gray-900 uppercase"
            >
              Events & Workshops
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 uppercase"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden text-gray-700 hover:text-gray-900">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
