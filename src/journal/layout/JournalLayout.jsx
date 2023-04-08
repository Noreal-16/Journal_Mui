import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBarComponent, SidebarComponent } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBarComponent drawerWidth={drawerWidth} />
      <SidebarComponent drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
