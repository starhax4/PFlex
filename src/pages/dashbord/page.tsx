import { useAuth } from "@/context/authContext";

const Page = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <div>WellCome {user?.displayName ? user.displayName : user?.email} !</div>
      <div>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Page;
