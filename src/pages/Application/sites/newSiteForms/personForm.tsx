import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { PersonInfo } from "@/types/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function PersonForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonInfo>();
  const onSubmit: SubmitHandler<PersonInfo> = (data: PersonInfo): void => {
    console.log(data);
    console.log(image);
    navigate("/dashboard/sites/new/3");
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
      <Card className="flex w-[500px] justify-around bg-secondary md:w-[1000px]">
        <div className="hidden items-center justify-center md:flex">
          <img
            src="/assets/design-ill-2.svg"
            alt="design_svg"
            width={300}
            className="mb-2"
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
            {/* <CardDescription>
            Build your website with a few simple steps
          </CardDescription> */}
          </CardHeader>
          <CardContent className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-sm text-destructive">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="profession">Profession</Label>
                  <Controller
                    name="profession"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="profession">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="photographer">
                            Photographer
                          </SelectItem>
                          <SelectItem value="digital-marketer">
                            Digital Marketer
                          </SelectItem>
                          <SelectItem value="seo-expert">SEO Expert</SelectItem>
                          <SelectItem value="video-editor">
                            Video Editor
                          </SelectItem>
                          <SelectItem value="e-commerce">
                            E-Commerce Expert
                          </SelectItem>
                          <SelectItem value="sm-manager">
                            Social Media Manager
                          </SelectItem>
                          <SelectItem value="bussiness">Bussiness</SelectItem>
                          <SelectItem value="digital-services">
                            Digital Services
                          </SelectItem>
                          <SelectItem value="professional-services">
                            Professional Services
                          </SelectItem>
                          <SelectItem value="other">Other / site</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.profession && (
                    <span className="text-sm text-destructive">
                      Profession is required
                    </span>
                  )}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Sub Domain">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Your Bio"
                    {...register("bio", { required: true, maxLength: 200 })}
                  />
                  {errors.bio && (
                    <span className="text-sm text-destructive">
                      Bio is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="imageUrl">Picture</Label>
                  <Input
                    id="imageUrl"
                    type="file"
                    {...register("imageURL", { required: false })}
                    onChange={onImageChange}
                  />
                  <span className="ml-1 text-xs text-muted-foreground">
                    An Optional Photo for your Portfolio Site
                  </span>
                  {errors.imageURL && (
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
              <div className="mt-4 flex justify-between">
                <Button onClick={() => window.history.back()} variant="outline">
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
