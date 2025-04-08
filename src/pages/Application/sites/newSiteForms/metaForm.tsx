import { SubmitHandler, useForm } from "react-hook-form";
import { MetaData } from "@/types/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";
import { useState } from "react";
import { addMetaData } from "@/lib/db/sites";
import { uploadImage } from "@/lib/storage";
import { Loader2 } from "lucide-react";

export default function MetaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MetaData>();

  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<MetaData> = async (
    data: MetaData,
  ): Promise<void> => {
    try {
      setIsLoading(true);
      const metaData = {
        title: data.title,
        description: data.description,
        iconUrl: image ?? "",
      };
      await addMetaData(metaData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    navigate("/dashboard/sites/");
  };

  console.log(errors);

  const onImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (event.target.files && event.target.files[0]) {
      setIsLoading(true);
      const imageUrl = await uploadImage(event.target.files[0]);
      setImage(imageUrl ?? null);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="flex w-[500px] justify-around bg-secondary py-6 md:w-[1000px]">
        <div className="flex flex-col items-center justify-center sm:hidden md:flex">
          <img
            src="/assets/search-ill-1.svg"
            alt="design_svg"
            width={300}
            className="mb-2"
          />
          <p className="mt-2 w-[300px] text-center">
            Enhance your site's SEO with a custom title, description, and icon
            for better visibility
          </p>
        </div>
        <div>
          <CardHeader>
            <CardTitle>Create Search Friendly Portfolio</CardTitle>
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
                    // {...register("iconURL", { required: false })}
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
                {/* <Button type="submit">Continue</Button> */}
                <Button type="submit" disabled={isLoading} className="">
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      loading...
                    </div>
                  ) : (
                    "Next"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
