"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

import { useState } from "react";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";

const UserHeader = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Bata</div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <Input placeholder="Search for products..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => setIsLoginOpen(true)}>
            <User className="h-5 w-5 mr-2" /> Login
          </Button>
          <Button variant="ghost">
            <Heart className="h-5 w-5 mr-2" /> Wishlist
          </Button>
          <Button variant="ghost" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="h-5 w-5 mr-2" /> Cart (0)
          </Button>
        </div>
      </div>
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
      <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </header>
  );
};

export default UserHeader;
