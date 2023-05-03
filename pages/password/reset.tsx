import { LeftSide } from "@/components/sections/pages/register";
import { TextField, Button } from "@/components/ui";
import Head from "next/head";
import Link from "next/link";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

export default function Reset() {
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
      <Head>
        <title>Password - Reset</title>
      </Head>
      <div className="flex justify-center items-center bg-primary">
        <div className="flex w-full max-w-screen-2xl h-screen">
          <div className="flex-1 hidden md:block">
            <LeftSide />
          </div>
          <div className="w-[40rem] mx-auto md:m-0 bg-secondary flex justify-center items-center text-black">
            <div className="text-left w-10/12 md:w-7/12 relative">
              <h1 className="text-[100px] font-semibold block md:hidden">A</h1>
              <h2 className="font-semibold text-xl mb-2">
                Reset your password
              </h2>
              <p className="mb-7 text-tertiary text-sm">
                The verfication email will be sent to the mailbox please check
                it.
              </p>
              <form
                onSubmit={handleSubmit((data: {}) => console.log(data))}
                className="flex flex-col gap-5"
              >
                <div>
                  <TextField
                    name="password"
                    placeholder="New Password"
                    type="password"
                    register={register}
                  />
                  <span role="alert" className="span--error">
                    {errors.password?.message}
                  </span>
                </div>
                <div>
                  <TextField
                    name="confirm-password"
                    placeholder="Confirm Password"
                    type="password"
                    register={register}
                  />
                </div>
                <Button>Reset Password</Button>
              </form>
              <hr className="my-9" />
              <p className="text-center text-sm text-tertiary">
                Return to{" "}
                <b className="font-semibold text-primary cursor-pointer active:underline">
                  <Link href="/">Login</Link>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
