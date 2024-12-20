import { HashLink as Link } from "react-router-hash-link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container relative mx-auto w-[80vw] px-4 md:px-6">
      <div className="flex items-center justify-between py-4 text-white">
        <a href="/">
          <img
            src="/images/PFlex.svg"
            alt="pflex-logo"
            className="w-24 md:w-auto"
          />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden pl-0 md:flex lg:pl-52">
          <ul className="flex content-between gap-4 text-lg font-medium lg:gap-11 lg:text-xl">
            <Link className="hover:text-primary" to="#hero">
              Home
            </Link>
            <Link className="hover:text-primary" to="#features">
              Features
            </Link>
            <Link className="hover:text-primary" to="/#templates">
              templates
            </Link>
            <Link className="hover:text-primary" to="/#pricing">
              Pricing
            </Link>
          </ul>
        </div>

        <div className="hidden gap-4 md:flex">
          <Button
            asChild
            variant={"outline"}
            className="border-slate-200 bg-transparent font-medium text-white"
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/sign-up">SignUp</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-gray-800 bg-[#1E1E2F] py-4 md:hidden">
          <ul
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center gap-4 px-4 text-lg font-semibold text-white"
          >
            <li>
              <Link className="hover:text-primary" to="#hero ">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="#features">
                Features
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/#templates">
                templates
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/#pricing">
                Pricing
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-4 px-4">
            <Button
              asChild
              variant={"outline"}
              className="w-full border-slate-200 bg-transparent font-medium text-white"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/sign-up">SignUp</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
