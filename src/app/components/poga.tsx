"use client";

import React from "react";
import useTheme from "../hooks/stuff";

const ThemeToggle: React.FC = () => {
  useTheme();

  return <button id="theme-toggle">Toggle Dark Mode</button>;
};

export default ThemeToggle;
