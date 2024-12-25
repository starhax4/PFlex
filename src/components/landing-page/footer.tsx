import { HashLink as Link } from "react-router-hash-link";
import AnimationWrapper from "../ui/animation-wrapper";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8">
      <AnimationWrapper>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <Link to="/">
                <img
                  src="/images/PFlex.svg"
                  alt="pflex_logo"
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-center font-['Inter'] text-sm text-gray-400">
                Create and customize your portfolio with ease
              </p>
            </div>

            <nav className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
                {["Home", "Features", "Templates", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                      className="transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a
                  href="https://github.com/starhax4/PFlex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/hamzislam01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p className="font-['Inter'] text-sm text-gray-400">
              © {new Date().getFullYear()} PFlex. All rights reserved.
            </p>
          </div>
        </div>
      </AnimationWrapper>
    </footer>
  );
};

export default Footer;
