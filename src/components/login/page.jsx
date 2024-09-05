/**
 * v0 by Vercel.
 * @see https://v0.dev/t/a5MX0Lu2QZH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link
          href="#"
          className="inline-flex items-center gap-2 font-medium"
          prefetch={false}
        >
          <BookIcon className="w-5 h-5" />
          <span>BSIT</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Workspace
          </Button>
          <Button variant="ghost" size="sm">
            Settings
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <Card>
          <CardHeader>
            <CardTitle>Create New Projects</CardTitle>
            <CardDescription>Add new projects related to BSIT</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="Enter project name" />
              </div>
              <Button type="submit" className="w-full">
                Create Project
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Manage Projects</CardTitle>
            <CardDescription>View and manage BSIT projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">BSIT Graduation Event</h3>
                  <Button variant="outline" size="sm">
                    Add Attendees
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Attendee Avatar"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-muted-foreground text-sm">
                        25, 2023-05-15, New York
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Attendee Avatar"
                      />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Ahn</p>
                      <p className="text-muted-foreground text-sm">
                        22, 2023-08-23, Los Angeles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">BSIT Career Fair</h3>
                  <Button variant="outline" size="sm">
                    Add Attendees
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Attendee Avatar"
                      />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sarah Mayer</p>
                      <p className="text-muted-foreground text-sm">
                        28, 2022-11-07, Chicago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
