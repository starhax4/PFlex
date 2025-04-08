import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function TemplateCard({
  id,
  title,
  description,
  img,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  img: string;
  tags: string[];
}) {
  return (
    <Card
      className="flex w-[300px] flex-col gap-2 bg-sidebar hover:scale-105 hover:bg-sidebar-accent"
      id={id}
    >
      <div className="flex w-full justify-center">
        <img
          src={img}
          alt="template-screenshot"
          width={300}
          height={200}
          className="h-48 w-[19rem] rounded-t object-cover"
          loading="eager"
        />
      </div>
      <CardContent className="flex flex-col pb-2">
        <h1 className="my-1 text-lg font-bold">{title}</h1>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex w-[45%] flex-wrap gap-2 text-base text-muted-foreground">
          {tags.map((tag, i) => {
            return (
              <span className="" id={id + "-t-" + i}>
                {tag}
              </span>
            );
          })}
        </div>
        <Button>Use Template</Button>
      </CardFooter>
    </Card>
  );
}
