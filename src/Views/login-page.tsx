import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback } from "src/components/ui/avatar"
import { Button } from "src/components/ui/button"
import { Checkbox } from "src/components/ui/checkbox"
import { Input } from "src/components/ui/input"
import { Label } from "src/components/ui/label"
import logo from 'src/images/logo.png';
import logo2 from 'src/Views/Social_icon.png';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <div className="flex w-full max-w-5xl justify-between">
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32">
          </div>
        </div>
        <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-sm">
          <div className="space-y-2">
            <div className="flex flex-col item-center">
            <h1 className="mt-4 text-4xl font-bold text-[#00A3E0]">SUDAN</h1>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Log in to your account</h2>
            <p className="text-sm text-muted-foreground">
              Welcome back! Please enter your details.
            </p>
          </div>
          <form className="space-y-4" action="/dashboard">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember
                </label>
              </div>
              <a
                href="Signup"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password
              </a>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500">
              Sign in
            </Button>
            <Button
              variant="outline"
              className="w-full"
              type="button"
              
            >
            </Button>
          </form>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <a href="Signup" className="font-medium text-blue-600 hover:text-blue-500">
             Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}