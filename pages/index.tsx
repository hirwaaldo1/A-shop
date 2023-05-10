import Meta from "@/components/meta";
import { LeftSide } from "@/components/sections/pages/register";
import { TextField, Switch, Button } from "@/components/ui";
import Link from "next/link";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

export default function Home() {
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
      <Meta title="Login" />
      <div className="flex justify-center items-center bg-primary">
        <div className="flex w-full max-w-screen-2xl h-screen">
          <div className="flex-1 hidden md:block">
            <LeftSide />
          </div>
          <div className="w-[40rem] bg-secondary flex justify-center items-center text-black">
            <div className="text-left w-10/12 md:w-7/12 relative">
              <h1 className="text-[100px] font-semibold block md:hidden">A</h1>
              <h2 className="font-semibold text-xl mb-7">
                Nice to see you again!
              </h2>
              <form
                onSubmit={handleSubmit((data: {}) => console.log(data))}
                className="flex flex-col gap-5"
              >
                <div>
                  <TextField
                    name="email"
                    placeholder="Email or phone number"
                    type="email"
                    register={register}
                    errors={errors.email?.message}
                  />
                </div>
                <div>
                  <TextField
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    register={register}
                    errors={errors.password?.message}
                  />
                  <span role="alert" className="span--error">
                    {errors.password?.message}
                  </span>
                </div>
                <div className="flex justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-sm text-primary">Remember me</span>
                  </div>
                  <span className="text-sm text-primary cursor-pointer active:underline">
                    <Link href="/password/forgot">Forgot password?</Link>
                  </span>
                </div>
                <Button>Login</Button>
              </form>
              <hr className="my-9" />
              <p className="text-center text-sm text-tertiary">
                Don’t have an account?{" "}
                <b className="font-semibold text-primary cursor-pointer active:underline">
                  <Link href="/signup">Get Started</Link>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
