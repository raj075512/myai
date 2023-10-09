import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import React from "react";

interface Props {}

const dashboard = (props: Props) => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="p-10 mx-auto max-w-7xl">
          <div className=" flex justify-center color-black p-5 font-medium text-3xl ">
            <h1 className="mx-3">DashBoard</h1>
            <UserButton />
          </div>
          <div className=" flex items-center justify-between">
            <Button className="bg-green-500 " size="sm">
              go back
            </Button>
            <Button variant="outline">create new</Button>
          </div>
        </div>
    
        <Separator />
 
        <div className=" text-center ">
            <h2> you  have no text  yet ..</h2>
          
        </div>

      </div>
    </div>
  );
};

export default dashboard;
