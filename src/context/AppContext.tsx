"use client";

import React from "react";
import { Contact, Home, Projector, User } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface AppContextType {
  navPages: {
    page: string;
    url: string;
    icon: React.JSX.Element;
  }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navPages = [
    {
      page: "Home",
      url: "/",
      icon: <Home size={18} />,
    },
    {
      page: "About",
      url: "#",
      icon: <User size={18} />,
    },
    {
      page: "Projects",
      url: "#",
      icon: <Projector size={18} />,
    },
    {
      page: "Contact",
      url: "#",
      icon: <Contact size={18} />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPages,
        isOpen,
        setIsOpen,
        dropdownRef,
        open,
        setOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return context;
};
