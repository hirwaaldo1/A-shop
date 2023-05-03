import { LeftSide } from "@/components/sections/pages/register";
import { TextField, Button } from "@/components/ui";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Password - Forgot</title>
      </Head>
      <div className="flex justify-center items-center bg-primary">
        <div className="flex w-full max-w-screen-2xl h-screen">
          <div className="flex-1 hidden md:block">
            <LeftSide />
          </div>
          <div className="w-[40rem] mx-auto md:m-0 bg-secondary flex justify-center items-center text-black">
            <div className="w-10/12 md:w-7/12 relative text-center">
              <Image
                className="mx-auto mb-7"
                src="/assets/locker.png"
                alt="Locker"
                width={50}
                height={50}
              />
              <h2 className="font-semibold text-xl mb-2">
                Trouble Logging in ?
              </h2>
              <p className="mb-7 text-tertiary text-sm">
                Every things is ok just you need to put your email and follow
                roles
              </p>
              <TextField
                name="email"
                placeholder="Email or phone number"
                type="email"
              />
              <Button>Reset Password</Button>
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
