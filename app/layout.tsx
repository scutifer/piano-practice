import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Piano Practice · LCM Grade 5",description:"Scale shapes, fingerings and fresh sight-reading practice for LCM Grade 5.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
