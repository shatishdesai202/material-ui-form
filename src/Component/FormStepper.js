import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Badge from "@mui/material/Badge";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#d23733",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#f1152a",
  }),
  "& .QontoStepIcon-circle": {
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  const circleStyle = {
    width: 14,
    borderRadius: "50%",
    height: 14,
  };
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {props.icon === 1 ? (
        <div
          className=".QontoStepIcon-circle"
          style={{ ...circleStyle, background: "#8B0000" }}
        />
      ) : props.icon === 2 ? (
        <div
          className="QontoStepIcon-circle"
          style={{ background: "#f11821" }}
        />
      ) : (
        <div
          className="QontoStepIcon-circle"
          style={{ background: "lightgrey" }}
        />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["Share Location", "Clock In", "Working On", "Clock Out"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: -5,
  },
}));

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-alternativeLabel .MuiStepLabel-label": {
    marginTop: 0,
    fontSize: "10px",
  },
}));

export default function FormStepper() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <StyledBadge badgeContent={3} color="error">
          <InfoOutlinedIcon color="error" />
        </StyledBadge>

        <SettingsIcon
          sx={{
            color: "white",
            backgroundColor: "#0f79fc",
            borderRadius: "2px",
          }}
          color="primary"
        />
      </Box>

      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StyledStepLabel StepIconComponent={QontoStepIcon}>
              {label}
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider />
    </Stack>
  );
}
