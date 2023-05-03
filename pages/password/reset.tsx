import { LeftSide } from "@/components/sections/pages/register";
import { TextField, Button } from "@/components/ui";

export default function Reset() {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="flex w-full max-w-screen-2xl h-screen">
        <div className="flex-1 hidden md:block">
          <LeftSide />
        </div>
        <div className="w-[40rem] mx-auto md:m-0 bg-secondary flex justify-center items-center text-black">
          <div className="text-left w-10/12 md:w-7/12 relative">
            <h1 className="text-[100px] font-semibold block md:hidden">A</h1>
            <h2 className="font-semibold text-xl mb-2">Reset your password</h2>
            <p className="mb-7 text-tertiary text-sm">
              The verfication email will be sent to the mailbox please check it.
            </p>
            <TextField
              name="password"
              placeholder="New Password"
              type="password"
            />
            <TextField
              name="password"
              placeholder="Confirm Password"
              type="password"
            />
            <Button>Reset Password</Button>
            <hr className="my-9" />
            <p className="text-center text-sm text-tertiary">
              Return to{" "}
              <b className="font-semibold text-primary cursor-pointer active:underline">
                Login
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
