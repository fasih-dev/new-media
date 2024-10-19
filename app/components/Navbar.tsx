import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full text-white z-20 backdrop-blur-md bg-black bg-opacity-70 lg:flex  hidden">
            <div className="container mx-auto flex justify-between items-center py-4">
                {/* Left - Logo */}
                <Link href="/" className="text-2xl font-bold flex items-center space-x-4">
                    <img src="/logo.png" alt="Logo" className="w-20" /> {/* Use your actual logo */}
                    <img src="/logo2.webp" alt="logo 2" className="w-20" />
                </Link>

                {/* Right - Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/about" className="hover:bg-red-500 py-4 px-4 hover:font-bold font-bold">About Us</Link>
                    <Link href="/services" className="hover:bg-red-500 py-4 px-4 hover:font-bold font-bold">Digital Marketing Services</Link>
                    <Link href="/recent-websites" className="hover:bg-red-500 py-4 px-4 hover:font-bold font-bold">Recent Websites</Link>
                    <Link href="/seo-results" className="hover:bg-red-500 py-4 px-4 hover:font-bold font-bold">SEO Results</Link>
                    <Link href="/case-studies" className="hover:bg-red-500 py-4 px-4 hover:font-bold font-bold">Case Studies</Link>
                    <Link href="/contact" className=" font-bold px-4 py-2  border border-white text-white hover:bg-red-600 hover:text-white transition">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu (Hamburger Icon) */}
                <div className="md:hidden">
                    <button id="menu-btn" className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            <div id="menu" className="hidden md:hidden mt-4 space-y-4 bg-black bg-opacity-75 p-4 rounded-lg">
                <div className="hover:bg-red-500 hover:text-white p-2 rounded">
                    <Link href="/about" className="block text-white">About Us</Link>
                </div>
                <div className="hover:bg-red-500 hover:text-white p-2 rounded">
                    <Link href="/services" className="block text-white">Digital Marketing Services</Link>
                </div>
                <div className="hover:bg-red-500 hover:text-white p-2 rounded">
                    <Link href="/recent-websites" className="block text-white">Recent Websites</Link>
                </div>
                <div className="hover:bg-red-500 hover:text-white p-2 rounded">
                    <Link href="/seo-results" className="block text-white">SEO Results</Link>
                </div>
                <div className="hover:bg-red-500 hover:text-white p-2 rounded">
                    <Link href="/case-studies" className="block text-white">Case Studies</Link>
                </div>
                <div className="border border-white p-2 rounded">
                    <Link href="/contact" className="block text-white bg-transparent">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
