import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthForm() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Magic Link</CardTitle>
          <CardDescription>Click the link in your email to log in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm">
        <CardContent className="text-center space-y-2">
          <CardDescription>Don't have an account?</CardDescription>
          <Link className="btn btn-sm w-full" href="#">
            Sign up
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

