import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
      </div>
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex flex-col space-y-4 text-center">
          <div>
            <img
              src="/assets/home-empty-state.png"
              alt="empty home"
              width={430}
              height={320}
              loading="eager"
            />
          </div>
          <div>
            <h2 className="my-4 text-2xl font-bold">
              Have’t published your portfolio yet
            </h2>
            <p className="font-medium text-muted-foreground">
              Create your portfolio to showcase your professional journey
            </p>
            <p className="font-medium text-muted-foreground">
              and share your amazing work with the world.
            </p>
          </div>
          <div className="mt-4">
            <Button
              onClick={() => {
                navigate("/dashboard/sites");
              }}
            >
              Get started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
