import NavBar from "./components/landing-page/navBar";

function App() {
  return (
    <div className="bg-[#1E1E2F]  min-h-screen m-0 font-sans">
      <div className="relative h-screen w-full bg-[#1E1E2F]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
