"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const Signout = () => {
  return (
    <Button type="button" onClick={() => signOut()} variant={"destructive"}>
      Signout
    </Button>
  );
};

export default Signout;
