import { SubmitHandler, useForm } from "react-hook-form";
import { debounce } from "lodash";
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
import { addNewSite, isSubdomainUnique } from "@/lib/db/sites";
import { useState } from "react";

export default function SiteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewSiteInfo>();

  const [subdomainError, setSubdomainError] = useState(false);

  const onSubmit: SubmitHandler<NewSiteInfo> = async (
    data: NewSiteInfo,
  ): Promise<void> => {
    const isUnique = await isSubdomainUnique(data.subdomain);
    if (isUnique === true) {
      navigate("/dashboard/sites/new/2");

      try {
        await addNewSite({ ...data, published: false });
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setSubdomainError(true);
    }
  };

  const handleSubdomain = debounce(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const isUnique = await isSubdomainUnique(event.target.value);
      if (isUnique === false) {
        setSubdomainError(true);
      } else {
        setSubdomainError(false);
      }
    },
    500, // Debounce delay in milliseconds
  );
  console.log(errors);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <Card className="flex w-[500px] justify-around bg-secondary py-6 md:w-[1000px]">
        <div className="flex flex-col items-center justify-center sm:hidden md:flex">
          <img
            src="/assets/design-ill-1.svg"
            alt="design_svg"
            width={300}
            className="mb-2"
          />
          <p className="mt-2 w-[300px] text-center">
            Design your portfolio sites with ease
          </p>
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
                      onChange={handleSubdomain}
                    />

                    <Input
                      className="w-48"
                      placeholder=".pflex.hamzaislam.tech"
                      disabled
                    />
                  </div>

                  {subdomainError ? (
                    <span className="text-sm text-destructive">
                      <strong> X </strong> Domain is already taken , try some
                      unique one
                    </span>
                  ) : (
                    ""
                  )}

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
