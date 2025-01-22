import { SubmitHandler, useForm } from "react-hook-form";
import { NewSiteInfo } from "@/types/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export default function SiteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewSiteInfo>();
  const onSubmit: SubmitHandler<NewSiteInfo> = (data: NewSiteInfo): void => {
    console.log(data);
    navigate("/dashboard/sites/new/2");
  };
  console.log(errors);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <Card className="flex w-[500px] justify-around bg-secondary py-6 md:w-[1000px]">
        <div className="flex items-center justify-center sm:hidden md:flex">
          <img
            src="/assets/design-ill-1.svg"
            alt="design_svg"
            width={300}
            className="mb-2"
          />
        </div>
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle>Create Site</CardTitle>
            <CardDescription>
              Build your website with a few simple steps
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Site Title</Label>
                  <Input
                    id="title"
                    placeholder="Name of your Site"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span className="text-sm text-destructive">
                      title is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Site Tagline</Label>
                  <Input
                    id="tagline"
                    placeholder="Catchy Tagline for your Site"
                    {...register("tagline", { required: false })}
                  />
                  {errors.tagline && (
                    <span className="text-sm text-destructive">
                      tagline is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Sub Domain">Sub Domain</Label>
                  <div className="flex gap-1">
                    <Input
                      id="Subdomain"
                      placeholder="Your Unique Sub-domain"
                      {...register("subdomain", { required: true })}
                    />
                    <Input
                      className="w-48"
                      placeholder=".pflex.hamzaislam.tech"
                      disabled
                    />
                  </div>
                  {errors.subdomain && (
                    <span className="text-sm text-destructive">
                      Required! Domain is already taken , try some unique one
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  className="invisible"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                <Button type="submit">Next</Button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
