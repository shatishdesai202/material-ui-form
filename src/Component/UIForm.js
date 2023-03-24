import { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function UIForm() {
  const [formData, setFormData] = useState({
    branchCode: "Branch Code",
    brand: "Select...",
    salesType: "Select...",
    productType: "Select...",
  });

  const BootstrapInput = styled(InputBase)(({ theme, ...props }) => {
    return {
      "label + &": {
        marginTop: theme.spacing(0.5),
      },
      ".MuiInputBase-input": {
        color: props.defaultValue === "Branch Code" ? "#dadada" : "#828282",
        fontWeight: 500,
      },
      "& .MuiInputBase-input": {
        borderRadius: 7,
        position: "relative",
        backgroundColor: props.disabled
          ? "#f5f5f5"
          : theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
          borderRadius: 4,
          borderColor: "red",
          boxShadow: "0 0 0 0.2rem rgba(255, 99, 71, 0.5)",
        },
      },
    };
  });

  return (
    <Stack sx={{ pt: 2 }}>
      <Typography
        fontWeight={800}
        color={"error"}
        alignItems={"center"}
        justifyContent="center"
        display="flex"
        fontSize={20}
      >
        Enter Clock In Information
      </Typography>
      <Grid container sx={{ pb: 2 }}>
        <Grid xs={6} sx={{ pr: 1 }}>
          <InputLabel>
            <b>Branch Code</b>
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            defaultValue="Branch Code"
            value={formData.branchCode}
            onChange={(e) =>
              setFormData({ ...formData, branchCode: e.target.value })
            }
            input={<BootstrapInput />}
          >
            <MenuItem disabled value={"Branch Code"}>
              Branch Code
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </Grid>
        <Grid xs={6} sx={{ pr: 1 }}>
          <InputLabel>
            <b> Branch : </b>
          </InputLabel>
          <BootstrapInput
            placeholder="store name"
            disabled
            fullWidth
            id="demo-customized-textbox"
          />
        </Grid>
      </Grid>

      <InputLabel fontWeight="bold">
        <b> Brand </b>{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>*</span>
      </InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        IconComponent={KeyboardArrowDownIcon}
        defaultValue="Select..."
        input={<BootstrapInput />}
        value={formData.brand}
        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
      >
        <MenuItem disabled value={"Select..."}>
          Select...
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>

      <InputLabel fontWeight="bold">
        <b> Sales Type</b>{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>*</span>{" "}
      </InputLabel>
      <Select
        labelId="demo-customized-select-label"
        IconComponent={KeyboardArrowDownIcon}
        id="demo-customized-select"
        defaultValue="Select..."
        input={<BootstrapInput />}
        value={formData.salesType}
        onChange={(e) =>
          setFormData({ ...formData, salesType: e.target.value })
        }
      >
        <MenuItem disabled value={"Select..."}>
          Select...
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>

      <InputLabel>
        <b>Product Type</b>{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>*</span>{" "}
      </InputLabel>
      <Select
        placeholder="Select..."
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        defaultValue="Select..."
        input={<BootstrapInput placeholder="Select..." />}
        IconComponent={KeyboardArrowDownIcon}
        variant="outlined"
        value={formData.productType}
        onChange={(e) =>
          setFormData({ ...formData, salesType: e.target.value })
        }
      >
        <MenuItem disabled value={"Select..."}>
          Select...
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>
    </Stack>
  );
}
