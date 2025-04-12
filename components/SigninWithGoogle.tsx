"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SigninWithGoogle = () => {
  return (
    <Button
      type="button"
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
    >
      Signin With Google
    </Button>
  );
};

export default SigninWithGoogle;
