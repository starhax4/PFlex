import { Outlet } from "react-router";

const layout = () => {
  return (
    <>
      <div>Nav</div>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default layout;
