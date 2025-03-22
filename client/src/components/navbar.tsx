import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { UserAvatar } from "./user-avatar";
import { NeonButton } from "./ui/neon-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
  username?: string;
  avatarSrc?: string;
}

export function Navbar({
  isLoggedIn = false,
  username = "",
  avatarSrc = "",
}: NavbarProps) {
  const [location] = useLocation();

  return (
    <nav className="fixed w-full bg-cyber-black bg-opacity-90 backdrop-blur-md z-50 border-b border-cyber-blue border-opacity-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <div className="relative h-10 w-10 mr-3">
                  <div className="absolute inset-0 bg-cyber-pink rounded-lg opacity-50 animate-pulse-slow shadow-lg shadow-cyber-pink/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-orbitron text-2xl font-bold text-white">
                      N
                    </span>
                  </div>
                </div>
                <h1 className="font-orbitron text-2xl font-bold">
                  <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]">
                    CyberFund
                  </span>
                  <span className="text-cyber-pink drop-shadow-[0_0_5px_rgba(255,51,153,0.7)]">
                    .
                  </span>
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <NavLinks active={location} />
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <div className="relative px-3 py-1 overflow-hidden neo-border rounded-md bg-cyber-dark hover:bg-opacity-80 transition cursor-pointer">
                    <span className="relative z-10 font-orbitron text-sm">
                      Dashboard
                    </span>
                  </div>
                </Link>
                <Link href="/profile">
                  <div className="cursor-pointer">
                    <UserAvatar
                      src={avatarSrc || undefined}
                      fallback={username.charAt(0)}
                      glowEffect
                      glowColor="pink"
                    />
                  </div>
                </Link>
              </>
            ) : (
              <NeonButton variant="outline" size="sm" color="pink">
                Connect
              </NeonButton>
            )}

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-cyber-text-dim"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-cyber-dark border-cyber-blue/20">
                <div className="flex flex-col gap-4 pt-8">
                  <MobileNavLinks active={location} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ active }: { active: string }) {
  return (
    <>
      <Link href="/dashboard">
        <div
          className={`font-rajdhani cursor-pointer ${active === "/dashboard" ? "text-cyber-blue" : "text-cyber-text hover:text-cyber-blue transition-colors"}`}
        >
          Dashboard
        </div>
      </Link>
      <Link href="/funding">
        <div
          className={`font-rajdhani cursor-pointer ${active === "/funding" ? "text-cyber-blue" : "text-cyber-text hover:text-cyber-blue transition-colors"}`}
        >
          Funding
        </div>
      </Link>
      <Link href="/learn">
        <div
          className={`font-rajdhani cursor-pointer ${active === "/learn" ? "text-cyber-blue" : "text-cyber-text hover:text-cyber-blue transition-colors"}`}
        >
          Learn
        </div>
      </Link>
      <Link href="/community">
        <div
          className={`font-rajdhani cursor-pointer ${active === "/community" ? "text-cyber-blue" : "text-cyber-text hover:text-cyber-blue transition-colors"}`}
        >
          Community
        </div>
      </Link>
    </>
  );
}

function MobileNavLinks({ active }: { active: string }) {
  return (
    <>
      <Link href="/dashboard">
        <div
          className={`font-rajdhani text-lg py-2 border-b border-cyber-blue/10 cursor-pointer ${active === "/dashboard" ? "text-cyber-blue" : "text-cyber-text"}`}
        >
          Dashboard
        </div>
      </Link>
      <Link href="/funding">
        <div
          className={`font-rajdhani text-lg py-2 border-b border-cyber-blue/10 cursor-pointer ${active === "/funding" ? "text-cyber-blue" : "text-cyber-text"}`}
        >
          Funding
        </div>
      </Link>
      <Link href="/learn">
        <div
          className={`font-rajdhani text-lg py-2 border-b border-cyber-blue/10 cursor-pointer ${active === "/learn" ? "text-cyber-blue" : "text-cyber-text"}`}
        >
          Learn
        </div>
      </Link>
      <Link href="/community">
        <div
          className={`font-rajdhani text-lg py-2 border-b border-cyber-blue/10 cursor-pointer ${active === "/community" ? "text-cyber-blue" : "text-cyber-text"}`}
        >
          Community
        </div>
      </Link>
      <Link href="/profile">
        <div
          className={`font-rajdhani text-lg py-2 border-b border-cyber-blue/10 cursor-pointer ${active === "/profile" ? "text-cyber-blue" : "text-cyber-text"}`}
        >
          Profile
        </div>
      </Link>
    </>
  );
}
