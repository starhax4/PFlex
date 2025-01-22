import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { PersonInfo } from "@/types/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



export default function ThemeForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonInfo>();
  const onSubmit: SubmitHandler<PersonInfo> = (data: PersonInfo): void => {
    console.log(data);

  };
  console.log(errors);
 

  // const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <Card className="w-[500px] bg-secondary">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Build your website with a few simple steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Name</Label>
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
                        <SelectItem value="photographer">Photographer</SelectItem>
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
              
            </div>
            <div className="mt-6 flex justify-between">
              <Button onClick={() => window.history.back()} variant="outline">
                Back
              </Button>
              <Button type="submit">Next</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
