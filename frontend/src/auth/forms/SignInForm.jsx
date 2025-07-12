import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().min({ message: "Invalid email address, " }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

const SignInForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMeassage] = useState(null); // show for error

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      setLoading(true);
      setErrorMeassage(null);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        toast({ title: "Sign in Failed! Please try again sir." });
        return setErrorMeassage(data.mesage);
      }
      setLoading(false);
      if (res.ok) {
        toast({ title: "Sign in Successful! Enjoy It" });
        navigate("/");
      }
    } catch (error) {
      setErrorMeassage(error.message);

      setLoading(false);
      toast({ title: "Something went Wrong!" });
    }

    console.log(values);
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left side*/}
        <div className="flex-1">
          <Link
            to={"/"}
            className="font-bold text-2xl sm:text-4xl flex flex-wrap"
          >
            <span className="text-slate-500">News</span>
            <span className="text-slate-900">Portal</span>
            <span className="text-slate-500">Vkumar</span>
          </Link>
          <h4 className="text-[24px] md:text-[30px] font-bold  leadiing-[140%] tracking-tighter pt-5 sm:pt-4">
            Sign in Your Account
          </h4>
          <p className="text-slate-500 text-[14px] font-medium leading-[140%] md:text-[16px] md:font-normal mt-2">
            Welcome Back, Please provide your details
          </p>
        </div>
        {/*Right side */}
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-blue-500 w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  <span>Sign In</span>
                )}
              </Button>
            </form>
          </Form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign up
            </Link>
          </div>

          {errorMessage && <p className="mt-5 text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
