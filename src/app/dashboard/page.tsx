import React from "react";
import StatCard from "../ui/dashboard/StatCard";
import { inter } from "../ui/fonts";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <main>
      <h1 className={`${inter.className}`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">  
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>Chart</div>
        <div>Chart</div>
      </div>
    </main>
  );
}
