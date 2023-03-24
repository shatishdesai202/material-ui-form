import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
//import { createStyles, makeStyles } from "@mui/material/styles/";

const initTime = { min: 5, sec: 0 };

export default function RefreshRow() {
  const [time, setTime] = useState(initTime);
  useEffect(() => {
    setTimeout(() => {
      if (time.min == 0 && time.sec == 0) {
        window.location.reload();
      } else if (time.sec === 0) {
        setTime({ min: time.min - 1, sec: 59 });
      } else {
        setTime({ ...time, sec: time.sec - 1 });
      }
    }, 1000);
  }, [time]);

  return (
    <Box
      display="flex"
      padding={1}
      margin={1}
      mt={2}
      boxShadow={2}
      justifyContent="center"
      alignItems="center"
    >
      <Typography>
        After{" "}
        <Box
          component={"span"}
          borderRadius={2}
          sx={{ backgroundColor: "red", p: 0.5 }}
        >
          <Typography
            component={"span"}
            color={"white"}
          >{`${time.min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}:${time.sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}`}</Typography>
        </Box>{" "}
        This Page Will Be Refreshed
      </Typography>
    </Box>
  );
}
