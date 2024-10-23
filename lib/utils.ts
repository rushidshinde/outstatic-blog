import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${
      process.env?.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }${path}`;
}


export function canonicalUrL(url:string, path:string){
  if(url === "") {
    return absoluteUrl(path)
  } else {
    return url
  }
}