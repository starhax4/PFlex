import { Link } from "react-router";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <nav className="flex w-[80vw] p-6 container justify-between mx-auto items-center  text-white">
      <a href="/">
        <img src="/src/assets/PFlex.svg" alt="pflex-logo" />
      </a>
      <div className="flex pl-52">
        <ul className="flex content-between gap-11 text-xl font-semibold">
          <Link className="hover:text-primary" to="/">Home</Link>
          <Link className="hover:text-primary" to="/#featuresOne">Features</Link>
          <Link className="hover:text-primary" to="/#templates">templates</Link>
          <Link className="hover:text-primary" to="/#pricing">Pricing</Link>
        </ul>
      </div>
      <div className="flex gap-4">
        <Button asChild variant={"outline"} className="text-white bg-transparent border-slate-200 font-medium">
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link to="/sign-up">SignUp</Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;