"use client";
// src/hooks/useTheme.ts
import { useEffect } from "react";

const useTheme = () => {
  useEffect(() => {
    const toggleButton = document.getElementById("theme-toggle");

    if (toggleButton === null) {
      return;
    }

    const handleToggle = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };

    toggleButton.addEventListener("click", handleToggle);

    // Load the saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    return () => {
      toggleButton.removeEventListener("click", handleToggle);
    };
  }, []);
};

export default useTheme;
