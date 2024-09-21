import { TaskProvider } from "@/context/task-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
