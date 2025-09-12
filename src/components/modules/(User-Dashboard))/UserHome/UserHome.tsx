"use client";
import React from "react";
// import CustomModal from "./CustomModal";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserHome = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <Button variant="outline">Button</Button>

      {/* Header Section */}
      <div className="text-center space-y-4">
        <span className="px-4 py-1 text-sm bg-gray-900 rounded-full inline-block">
          Now available: shadcn CLI 3.0 and MCP Server →
        </span>
        <h1 className="text-4xl font-bold">
          The Foundation for your Design System
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          A set of beautifully designed components that you can customize,
          extend, and build on. Start here then make it your own. Open Source.
          Open Code.
        </p>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-black rounded-md font-medium">
            Get Started
          </button>
          <button className="px-4 py-2 border border-gray-700 rounded-md font-medium">
            View Components
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mt-12 text-gray-400 text-sm">
        <button className="text-white">Examples</button>
        <button>Dashboard</button>
        <button>Tasks</button>
        <button>Playground</button>
        <button>Authentication</button>
      </div>

      {/* Dashboard Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Total Revenue */}
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-sm text-gray-400">Total Revenue</p>
          <h2 className="text-2xl font-bold">$15,231.89</h2>
          <p className="text-green-400 text-sm">+20.1% from last month</p>
          <div className="mt-4 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            {/* Placeholder for chart */}
            <span className="text-gray-500">[Chart]</span>
          </div>
        </div>

        {/* Subscriptions */}
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-sm text-gray-400">Subscriptions</p>
          <h2 className="text-2xl font-bold">+2,350</h2>
          <p className="text-green-400 text-sm">+180.1% from last month</p>
          <div className="mt-4 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">[Chart]</span>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-sm text-gray-400 mb-2">June 2025</p>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d} className="text-gray-500">
                {d}
              </span>
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <button
                key={i}
                className={`rounded-md py-1 ${
                  i + 1 === 13
                    ? "bg-white text-black font-semibold"
                    : "hover:bg-gray-800"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Move Goal */}
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-sm text-gray-400">Move Goal</p>
          <div className="flex items-center space-x-2 mt-2">
            <Flame className="text-orange-400" />
            <span className="text-3xl font-bold">350</span>
            <span className="text-gray-400">CALORIES/DAY</span>
          </div>
          <div className="mt-4 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">[Chart]</span>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-white text-black rounded-md font-medium">
            Set Goal
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Upgrade subscription */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="font-semibold">Upgrade your subscription</h3>
          <p className="text-gray-400 text-sm mt-2">
            You are currently on the free plan. Upgrade to the pro plan to get
            access to all features.
          </p>
        </div>

        {/* Create an account */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="font-semibold">Create an account</h3>
          <p className="text-gray-400 text-sm mt-2">
            Enter your email below to create your account
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-sm text-white"
            />
            <button className="px-4 py-2 bg-white text-black rounded-r-md text-sm font-medium">
              Sign Up
            </button>
          </div>
        </div>

        {/* Exercise Minutes */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="font-semibold">Exercise Minutes</h3>
          <p className="text-gray-400 text-sm mt-2">
            Your exercise minutes are ahead of where you normally are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
