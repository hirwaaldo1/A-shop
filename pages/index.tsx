import { LeftSide } from "@/components/sections/pages/register";
import { TextField, Switch, Button } from "@/components/ui";

export default function Home() {
  return (
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
            <TextField
              name="email"
              placeholder="Email or phone number"
              type="email"
            />
            <TextField
              name="password"
              placeholder="Enter password"
              type="password"
            />
            <div className="flex justify-between mb-8">
              <div className="flex items-center gap-2">
                <Switch />
                <span className="text-sm text-primary">Remember me</span>
              </div>
              <span className="text-sm text-primary">Forgot password?</span>
            </div>
            <Button>Login</Button>
            <hr className="my-9" />
            <p className="text-center text-sm text-tertiary">
              Don’t have an account?{" "}
              <b className="font-semibold text-primary">Get Started</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
