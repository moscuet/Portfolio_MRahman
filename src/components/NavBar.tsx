"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveTab(currentPath);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  useEffect(() => {
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
    const handleClick = (event: MouseEvent) => {
      if (isNavOpen) {
        setTimeout(() => {
          toggleNav();
        }, 150);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isNavOpen]);

  return (
    <>
      <div
        style={{ height: "100px" }}
        className="fixed top-0 left-0 right-0 z-30 flex flex-row justify-between items-center w-full pr-4 bg-gray-100 text-gray-900"
      >
        <Box
          className="flex items-center"
          sx={{
            overflow: "hidden",
            height: "100px",
            width: "200px",
          }}
        >
          <Link href="/" passHref>
            <Box
              sx={{
                width: "200px",
                height: "100px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Image
                src="/assets/brand_logo.svg"
                alt="Logo"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Link>
        </Box>
        <div className="flex items-center">
          <nav className=" text-indigo-500 hidden md:flex mr-4">
            <a
              href="/"
              className={
                "nav-link" + (activeTab === "/" ? " text-indigo-700" : "")
              }
            >
              PORTFOLIO
            </a>
            <a
              href="/about"
              className={
                "nav-link" + (activeTab === "/about" ? " text-indigo-700" : "")
              }
            >
              ABOUT
            </a>
            <a
              href="/contact"
              className={
                "nav-link" +
                (activeTab === "/contact" ? " text-indigo-700" : "")
              }
            >
              CONTACT
            </a>
          </nav>

          {isMobile && (
            <Button onClick={() => setIsNavOpen(!isNavOpen)} className="ml-4">
              <FaBars size={24} color="#6366F1" />
            </Button>
          )}
        </div>
      </div>

      {isNavOpen && (
        <div className="mobile-nav fixed inset-y-0 right-0 z-30 bg-gray-100 p-8 flex flex-col w-[150px]">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-indigo-500 self-end"
          >
            <FaTimes size={24} />
          </button>
          <nav className="mt-4 flex flex-col">
            <a
              href="/"
              style={{ color: "rgb(31, 41, 55)" }}
              className="nav-link mb-2 hover:text-indigo-600"
            >
              PORTFOLIO
            </a>
            <a
              href="/about"
              style={{ color: "rgb(31, 41, 55)" }}
              className="nav-link mb-2 hover:text-indigo-600"
            >
              ABOUT
            </a>
            <a
              href="/contact"
              style={{ color: "rgb(31, 41, 55)" }}
              className="nav-link mb-2 hover:text-indigo-600"
            >
              CONTACTS
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
