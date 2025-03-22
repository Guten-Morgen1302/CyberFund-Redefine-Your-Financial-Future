import React from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { NeonButton } from "./ui/neon-button";

export function Footer() {
  return (
    <footer className="border-t border-cyber-blue/20 bg-cyber-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-3">
                <div className="absolute inset-0 bg-cyber-pink rounded-lg opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-orbitron text-2xl font-bold text-cyber-pink">
                    N
                  </span>
                </div>
              </div>
              <h2 className="font-orbitron text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-white">
                NeoFin<span className="text-cyber-pink">.</span>
              </h2>
            </div>
            <p className="text-cyber-text-dim mb-4">
              Empowering women entrepreneurs with AI-driven financial tools and
              education.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center border border-cyber-blue/30 hover:bg-cyber-blue/10 transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center border border-cyber-blue/30 hover:bg-cyber-blue/10 transition-colors"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-cyber-dark flex items-center justify-center border border-cyber-blue/30 hover:bg-cyber-blue/10 transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-lg mb-4">Platform</h3>
            <ul className="space-y-2 text-cyber-text-dim">
              <li>
                <Link href="/dashboard">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/credit">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Credit Evaluation
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/funding">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Funding Marketplace
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/learn">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Financial Education
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Community
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-cyber-text-dim">
              <li>
                <Link href="/success-stories">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Success Stories
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Blog
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Events
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/funding-guide">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Guide to Funding
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/templates">
                  <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                    Financial Templates
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-lg mb-4">Subscribe</h3>
            <p className="text-cyber-text-dim mb-3">
              Stay updated with our latest funding opportunities and financial
              tips.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-cyber-dark border border-cyber-text-dim/20 rounded-l-md focus:outline-none focus:border-cyber-blue/50 transition-colors"
              />
              <NeonButton color="pink" className="rounded-l-none py-2">
                Join
              </NeonButton>
            </div>
          </div>
        </div>

        <div className="border-t border-cyber-blue/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cyber-text-dim mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NeoFin. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cyber-text-dim">
            <Link href="/privacy">
              <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                Privacy Policy
              </div>
            </Link>
            <Link href="/terms">
              <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                Terms of Service
              </div>
            </Link>
            <Link href="/contact">
              <div className="hover:text-cyber-blue transition-colors cursor-pointer">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
