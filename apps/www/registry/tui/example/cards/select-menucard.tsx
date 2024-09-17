"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/tui/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Label } from "@/registry/tui/ui/label"

const frameworks: any = [
  {
    value: "next.js",
    label: "Next.js",
    imagePath: "/avatars/01.png",
    status: false,
    secondaryText: "@next"
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    imagePath: "/avatars/02.png",
    status: true,
    secondaryText: "@svelte"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    imagePath: "/avatars/03.png",
    status: true,
    secondaryText: "@nuxt"
  },
  {
    value: "remix",
    label: "Remix",
    imagePath: "/avatars/04.png",
    status: false,
    secondaryText: "@remix"
  },
  {
    value: "astro",
    label: "Astro",
    imagePath: "/avatars/05.png",
    status: true,
    secondaryText: "@astro"
  },
]

export function SelectMenu() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Select Menu Variants</CardTitle>
        <CardDescription>
          List of possible variants of Select Menu
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="menu-1">Simple Select Menu</Label>
          <Select defaultValue={frameworks[0]?.value}>
            <SelectTrigger id={`menu-1`} aria-label="simple menu">
              <SelectValue placeholder="Select ..." />
            </SelectTrigger>
            <SelectContent>
              {frameworks.map((framework: any, idx: number) =>
                <SelectItem key={idx} value={framework.value} menuData={framework}>{framework.label}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardContent className="grid gap-4">
        <Label htmlFor="menu-2">Simple Select Menu with Check Icon on Right</Label>
        <div className="grid gap-2">
          <Select defaultValue={frameworks[0]?.value}>
            <SelectTrigger id={`menu-2`} aria-label="simple menu">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent >
              {frameworks.map((framework: any, idx: number) =>
                <SelectItem key={idx} value={framework.value} menuData={framework} alignIcon="right">{framework.label}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardContent className="grid gap-4">
        <Label htmlFor="menu-3">Select Menu with Image Avatar</Label>
        <div className="grid gap-2">
          <Select defaultValue={frameworks[0]?.value}>
            <SelectTrigger id={`menu-3`} aria-label="simple menu">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent >
              {frameworks.map((framework: any, idx: number) =>
                <SelectItem key={idx} value={framework.value} menuData={framework} avatarActive>{framework.label}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardContent className="grid gap-4">
        <Label htmlFor="menu-4">Select Menu with Status Indicator</Label>
        <div className="grid gap-2">
          <Select defaultValue={frameworks[0]?.value}>
            <SelectTrigger id={`menu-4`} aria-label="simple menu">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent >
              {frameworks.map((framework: any, idx: number) =>
                <SelectItem key={idx} value={framework.value} menuData={framework} statusIndicator>{framework.label}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardContent className="grid gap-4">
        <Label htmlFor="menu-5">Select Menu with Secondary Text</Label>
        <div className="grid gap-2">
          <Select defaultValue={frameworks[0]?.value}>
            <SelectTrigger id={`menu-5`} aria-label="simple menu">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent >
              {frameworks.map((framework: any, idx: number) =>
                <SelectItem key={idx} value={framework.value} menuData={framework} secondaryActive>{framework.label}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
