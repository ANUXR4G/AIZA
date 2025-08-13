"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <nav className="lg:backdrop-blur-2xl text-TextColor py-4 px-6 mx-auto flex items-center justify-between relative lg:border border-[#fcfcfa]/20 lg:rounded-xl lg:bg-TextColor/5 lg:max-w-[910px] bg-[#0a0416] lg:bg-[#fcfcfa]/5">
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/logo Main.png"
                    alt="AIZA Video Editing Logo"
                    width={48}
                    height={48}
                    priority
                    className="w-16 lg:w-18"
                />
            </Link>

            {/* Contact Button */}
            <Link
                href="https://wa.me/8801749735127"
                className="bg-mainColor hover:bg-mainColor/90 text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-lg"
            >
                Contact Us
            </Link>
        </nav>
    );
};

export default Navbar;
