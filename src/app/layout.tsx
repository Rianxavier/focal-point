import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TaskProvider } from "@/context/task-provider";

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          {children}
          {/* {modal} */}
        </TaskProvider>
      </body>
    </html>
  );
}
