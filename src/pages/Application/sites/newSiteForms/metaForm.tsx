import { SubmitHandler, useForm } from "react-hook-form";
import { MetaData } from "@/types/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function MetaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MetaData>();
  const onSubmit: SubmitHandler<MetaData> = (data: MetaData): void => {
    console.log(data);
    console.log(image);
    navigate("/dashboard/sites/");
  };
  console.log(errors);
  const navigate = useNavigate();

  const [image, setImage] = useState<string | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="flex w-[500px] justify-around bg-secondary py-6 md:w-[1000px]">
        <div className="flex items-center justify-center sm:hidden md:flex">
          <img
            src="/assets/search-ill-1.svg"
            alt="design_svg"
            width={300}
            className="mb-2"
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle>Create Search Friendly Portfolio</CardTitle>
            {/* <CardDescription>
            Fill in the details that will help your site rank higher in search
            results
          </CardDescription> */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Site Title</Label>
                  <Input
                    id="title"
                    placeholder="Name of your Site"
                    {...register("title", { required: false })}
                  />
                  {errors.title && (
                    <span className="text-sm text-destructive">
                      title is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Sub Domain">Meta Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Your Site SEO Description"
                    {...register("description", {
                      required: false,
                      maxLength: 200,
                    })}
                  />
                  {errors.description && (
                    <span className="text-sm text-destructive">
                      description is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="imageUrl">Site Top Icon</Label>
                  <Input
                    id="imageUrl"
                    type="file"
                    {...register("iconURL", { required: false })}
                    onChange={onImageChange}
                  />
                  <span className="ml-1 text-xs text-muted-foreground">
                    An Optional SVG Icon for your site tab
                  </span>
                  {errors.iconURL && (
                    <span className="text-sm text-destructive">
                      Image is required
                    </span>
                  )}
                  <div className="flex h-24 justify-center rounded-sm bg-card">
                    {image ? (
                      ""
                    ) : (
                      <p className="my-auto text-sm text-muted-foreground">
                        Image Preview
                      </p>
                    )}

                    {image && (
                      <img
                        src={image}
                        alt="user"
                        className="object-scale-down"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
