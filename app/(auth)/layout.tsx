import type { Metadata } from "next";
import "../globals.css";

import {
  ClerkProvider,
  SignedIn,
  UserButton
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Enma - Store auth",
  description: "Enma Ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
