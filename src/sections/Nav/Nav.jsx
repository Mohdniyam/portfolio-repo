import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function MobileNavbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-fgm-black/95 text-white flex justify-center items-center pt-[calc(0.75rem+env(safe-area-inset-top))] pb-3 px-3 sm:px-6 md:px-12 shadow-md backdrop-blur-xl transition-transform duration-300 z-50
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      // style={{ border: "2px solid red" }}
    >
      <div
        style={{
          padding: "10px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        className="w-full max-w-3xl flex justify-between px-2"
      >
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer p-2 rounded-md hover:bg-white/5"
          aria-label="Go to hero"
        >
          <FaUser className="text-xl" />
        </Link>
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer p-2 rounded-md hover:bg-white/5"
          aria-label="Go to home"
        >
          <FaHome className="text-xl" />
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer p-2 rounded-md hover:bg-white/5"
          aria-label="Go to projects"
        >
          <FaFolderOpen className="text-xl" />
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer p-2 rounded-md hover:bg-white/5"
          aria-label="Go to skills"
        >
          <FaTools className="text-xl" />
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer p-2 rounded-md hover:bg-white/5"
          aria-label="Go to experience"
        >
          <FaBriefcase className="text-xl" />
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer p-2 rounded-md hover:bg-white/5"
          aria-label="Go to contact"
        >
          <FaEnvelope className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
