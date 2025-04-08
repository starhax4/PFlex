import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Edit,
  Folder,
  Forward,
  Globe,
  MoreHorizontal,
  Settings2,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function SiteCard({
  id,
  title,
  published = false,
  img,
  siteUrl,
  updatedAt,
}: {
  id: string;
  title: string;
  published: boolean;
  img?: string;
  siteUrl?: string;
  updatedAt: string;
}) {
  const [open, setOpen] = useState(false);

  const getUpdatedTime = (dateString: string): string => {
    const diffInSeconds = Math.floor(
      (new Date().getTime() - new Date(dateString).getTime()) / 1000,
    );
    const days = Math.floor(diffInSeconds / (3600 * 24));
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const updatedDate = `${days}d ${hours}h ${minutes}m ago`;
    return updatedDate;
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const clickedOutside =
        document.getElementById("menuRef") &&
        !document.getElementById("menuRef")?.contains(event.target as Node);
      if (clickedOutside) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleView = (siteId: string) => {
    console.log("menu button clicked!, Site ID : ", siteId);
  };

  return (
    <Card
      className="flex w-[350px] flex-col gap-2 bg-sidebar hover:bg-sidebar-accent"
      id={id}
    >
      <div className="flex w-full justify-center">
        {img ? (
          <img
            src={img}
            alt="template-screenshot"
            width={400}
            height={200}
            className="h-48 w-[25rem] rounded-t object-cover"
            loading="eager"
          />
        ) : (
          <div className="flex h-48 w-[25rem] items-center justify-center rounded bg-secondary text-lg font-bold">
            <h1 className="">{title}</h1>
          </div>
        )}
      </div>
      <CardContent className="flex items-center justify-between pb-2">
        <div className="flex flex-col">
          <h1 className="my-1 text-lg font-bold">{title}</h1>
          <p className="text-sm text-secondary-foreground">
            Last Updated : {getUpdatedTime(updatedAt)}
          </p>
        </div>
        <div className="relative rounded-sm hover:bg-accent">
          <MoreHorizontal onClick={() => setOpen(true)} />

          <span className="sr-only">More</span>

          <dialog
            id="menuRef"
            className="absolute bottom-[-1rem] left-[-10rem] w-48 rounded-lg border border-border bg-background transition-colors dark:text-white"
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className="flex w-48 flex-col items-center gap-1 px-2 py-2">
              <div
                className="flex w-44 items-center gap-4 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-accent"
                onClick={() => handleView(id)}
              >
                <Folder size={18} className="text-muted-foreground" />
                <span>View Site</span>
              </div>
              <div
                className="flex w-44 items-center gap-4 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-accent"
                onClick={() => handleView(id)}
              >
                <Forward size={18} className="text-muted-foreground" />
                <span>Share Site</span>
              </div>
              <div
                className="flex w-44 items-center gap-4 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-accent"
                onClick={() => handleView(id)}
              >
                <Edit size={18} className="text-muted-foreground" />
                <span>Edit Site</span>
              </div>
              <div
                className="flex w-44 items-center gap-4 rounded-md px-4 py-1 hover:cursor-pointer hover:bg-accent"
                onClick={() => handleView(id)}
              >
                <Settings2 size={18} className="text-muted-foreground" />
                <span>Site Setting</span>
              </div>
            </div>
          </dialog>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          {published ? (
            <div className="flex gap-2">
              <Globe /> Published
            </div>
          ) : (
            <div className="flex gap-2">
              <Globe /> Not Published
            </div>
          )}
        </div>
        <div className="flex flex-col-reverse items-end justify-center gap-4">
          <div>
            {published ? (
              <Button asChild>
                <Link to={siteUrl ?? ""} target="_blank">
                  <span>Preview Site</span>
                </Link>
              </Button>
            ) : (
              <Button>Open in Editor </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
