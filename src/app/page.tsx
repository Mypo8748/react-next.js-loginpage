"use client";

import { useState } from "react";

type Login = {
  id: number;
  username: string;
  password: string;
};

export default function Home() {
  const [inputUser, setInputUser] = useState<string>("");
  const [inputPassword, setPassword] = useState<string>("");

  async function userAdd(username: string, password: string) {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  }

  return (
    <>
      <form action="">
        <div className="w-[100%] flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center gap-4 w-52">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border"
              onChange={(e) => setInputUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="p-2 border rounded-lg "
              onClick={() => userAdd(inputUser, inputPassword)}
            >
              {" "}
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
