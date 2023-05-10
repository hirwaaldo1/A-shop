import Meta from "@/components/meta";
import { LeftSide } from "@/components/sections/pages/register";
import { TextField, Button } from "@/components/ui";
import Link from "next/link";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: {
    register: UseFormRegister<FieldValues>;
    handleSubmit: any;
    formState: { errors: any };
  } = useForm();
  return (
    <>
      <Meta title="Sign Up" />
      <div className="flex justify-center items-center bg-primary">
        <div className="flex w-full max-w-screen-2xl h-screen">
          <div className="flex-1 hidden md:block">
            <LeftSide />
          </div>
          <div className="w-[40rem] mx-auto md:m-0 bg-secondary flex justify-center items-center text-black">
            <div className="text-left w-10/12 md:w-7/12 relative">
              <h1 className="text-[100px] font-semibold block md:hidden">A</h1>
              <h2 className="font-semibold text-xl mb-2">Create an Account</h2>
              <p className="mb-7 text-tertiary text-sm">
                Hello there, Let’s start your journey with us.
              </p>
              <form
                onSubmit={handleSubmit((data: {}) => console.log(data))}
                className="flex flex-col gap-1.5"
              >
                <TextField
                  name="name"
                  placeholder="Your Name"
                  type="name"
                  register={register}
                  errors={errors.name?.message}
                />
                <TextField
                  name="email"
                  placeholder="Email or phone number"
                  type="email"
                  register={register}
                  errors={errors.email?.message}
                />
                <TextField
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  register={register}
                  errors={errors.password?.message}
                />
                <Button>Sign up</Button>
              </form>
              <hr className="my-9" />
              <p className="text-center text-sm text-tertiary">
                Already have an account?{" "}
                <b className="font-semibold text-primary cursor-pointer active:underline">
                  <Link href="/">Login now </Link>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
