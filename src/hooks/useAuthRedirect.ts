import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import { addNewUserToDB } from "@/lib/db/users";

export const useAuthRedirect = () => {
  const { user, isNewUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    async function fetNewUser() {
      const isNew = await isNewUser();
      if (isNew) {
        navigate("/dashboard/sites/new");
        addNewUserToDB();
      }
    }
    fetNewUser();
  }, [user, navigate, isNewUser]);
};
