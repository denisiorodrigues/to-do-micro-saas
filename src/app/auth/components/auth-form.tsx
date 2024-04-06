'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import { redirect } from "next/dist/server/api-utils"

export function AuthForm() {

  const form = useForm()
  const handleSubmit  = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false})
      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login.'
      })
    } catch (error){
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.'
      })
    }
  })

  return (
    <div className="flex flex-col gap-4 items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Magic Link</CardTitle>
          <CardDescription>Click the link in your email to log in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" {... form.register('email')}/>
            </div>
            <Button className="w-full" type="submit">
              Send Magic Link
            </Button>
          </form>
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

