import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "OSA — The Intelligence Experience", description: "An interactive cinematic journey through AI, the power of knowledge, and the future of human agency.", applicationName: "OSA Intelligence Experience", themeColor: "#080B13" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
