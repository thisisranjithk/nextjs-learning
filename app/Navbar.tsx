"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data } = useSession();

  if (status === "loading") return null;

  return (
    <header className="flex justify-between p-5 bg-slate-400">
      <span>
        <Link href="/">Next.js</Link>
      </span>
      <nav>
        <ul className="flex gap-5">
          <li>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Logout</Link>
            )}
          </li>
          <li>
            <Link href="users">Users</Link>
          </li>
          <li>
            <Link href="products">Products</Link>
          </li>
          <li>
            {status === "authenticated" && (
              <div className="flex gap-2">
                {data.user?.name}
                <img
                  src={data.user?.image!}
                  alt="profile-img"
                  className="h-6 w-6 rounded-full bg-red-400"
                />
              </div>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
