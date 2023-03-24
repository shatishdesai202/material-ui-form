import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      borderRadius={4}
      component="div"
      display="flex"
      justifyContent="space-between"
      padding={"20px"}
      alignItems="center"
      style={{ background: "#cc424a" }}
    >
      <Box display="block">
        <Box component="span">
          <Typography color={"#ffffff"}>User Dashboard / Attandance</Typography>
        </Box>
        <Box>
          <Typography fontWeight={700} textAlign="start" color={"#ffffff"}>
            Attandance
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography fontWeight={700} color={"#ffffff"}>
          Set Password
        </Typography>
        <Box component="span" padding="0 20px">
          <Typography fontWeight={700} color={"#ffffff"}>
            LOGOUT
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ border: 1, borderColor: "white", margin: "0 20px" }}
        />
        <Box component="span">
          <Typography
            fontWeight={700}
            display="flex"
            sx={{ pr: 1 }}
            color={"#ffffff"}
          >
            Hi, Mark
          </Typography>
        </Box>
        <SettingsIcon style={{ color: "white", paddingLeft: "2px" }} />
      </Box>
    </Box>
  );
}
