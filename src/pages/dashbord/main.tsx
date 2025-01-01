import { useAuth } from "@/context/authContext";

const Main = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div>
        <h1>WellCome {user?.displayName}</h1>
      </div>
    </div>
  );
};

export default Main;
