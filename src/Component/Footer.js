import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      bottom={0}
      position="fixed"
      display={"flex"}
      style={{ backgroundColor: "#fafafa" }}
      width="100%"
      justifyContent={"flex-end"}
    >
      <Box display="flex" sx={{ p: 3 }}>
        <Typography color={"#929292"}>Create Support Ticket</Typography>
        <Typography color={"#929292"} sx={{ ml: 2, mr: 2 }}>
          Chat Support
        </Typography>
        <Typography color={"#929292"}>V0.0.118</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
