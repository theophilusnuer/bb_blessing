import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll to add background transparency
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault(); // Prevent default anchor behavior
        setIsOpen(false); // Close the dropdown if it's open
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div
            className={`fixed left-0 w-full z-50 px-4 sm:px-20 flex justify-between h-16 transition-colors duration-300 ${scrolled ? 'backdrop-filter backdrop-blur-lg' : 'bg-transparent'
                }`}
        >
            {/* Logo and Hamburger menu for small screens */}
            <div className="flex flex-row items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-6 h-6 flex items-center mr-4 justify-center mt-2 sm:hidden"
                >
                    <FaBars className="w-full h-full" />
                </button>
                <a href="/#">
                <img src={logo} alt="Logo" className="h-10 sm:h-14 md:h-12 lg:h-16" />
                </a>
            </div>

            {/* Navigation items for larger screens */}
            <ul className="hidden sm:flex flex-row space-x-4 md:space-x-8 lg:space-x-12 text-sm md:text-base lg:text-lg xl:text-xl pt-2 md:pt-3">
                <li>
                    <a href="/#" className="cursor-pointer font-normal text-xl hover:underline underline-offset-8">Home</a>
                </li>
                <li>
                    <a href="/#what-we-do" onClick={(e) => handleLinkClick(e, 'what-we-do')} className="cursor-pointer font-normal text-xl hover:underline underline-offset-8">What we do</a>
                </li>
                <li>
                    <a href="/#how-we-do-it" className="cursor-pointer font-normal text-xl hover:underline underline-offset-8">How we do it</a>
                </li>
                <li>
                    <a href="/#contact" className="cursor-pointer font-normal text-xl hover:underline underline-offset-8">Contact</a>
                </li>
            </ul>

            {/* Get Quote button */}
            <a
                href='/#get-a-quote'
                className="bg-[#E82C45] border border-[#E82C45] rounded-2xl h-7 md:h-8 lg:h-9 mt-4 sm:mt-1 w-24 md:w-32 lg:w-44 text-sm md:text-base lg:text-xl font-normal hover:bg-transparent inline-flex items-center justify-center"
            >
                Get Quote
            </a>

            {/* Dropdown menu for small screens */}
            {isOpen && (
                <div className="sm:hidden absolute top-16 left-0 w-full bg-black">
                    <ul className="flex flex-col items-center space-y-4 py-4 font-normal text-white">
                        <li>
                            <a href="/#" onClick={() => setIsOpen(false)}>Home</a>
                        </li>
                        <li>
                            <a href="/#what-we-do" onClick={() => setIsOpen(false)}>What we do</a>
                        </li>
                        <li>
                            <a href="/#how-we-do-it" onClick={() => setIsOpen(false)}>How we do it</a>
                        </li>
                        <li>
                            <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
