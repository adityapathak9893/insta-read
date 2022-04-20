import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { FC } from "react";
import { useActionDispatch, useStateSelector } from "./hooks";
import "./index.css";

export const NavigationBar: FC = () => {
  const textStyle = {
    fontWeight: 500,
    fontSize: 19,
    fontStyle: "normal",
    fontFamily: "SFProDisplay",
    letterSpacing: "normal",
    lineHeight: 1.21,
    color: "#8c92ac",
    textTransform: "none",
  };
  const { setTabValue } = useActionDispatch();
  const { tabSelected } = useStateSelector();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div id="NavigationBar">
      <div id="NavContainer">
        <div id="TitleContainer">
          <img
            src="https://instaread.co/images/instaread_logo_grey.svg"
            alt="Instaread Logo"
          />
        </div>
        <div id="TabsContainer">
          <Tabs
            value={tabSelected}
            onChange={handleChange}
            aria-label="navigation tabs"
            TabIndicatorProps={{
              style: { background: "none", color: "#009aeb" },
            }}
          >
            <Tab sx={textStyle} label="Discover" />
            <Tab sx={textStyle} label="Search" />
            <Tab sx={textStyle} label="Try Instaread" />
            <Tab sx={textStyle} label="Login" />
          </Tabs>
        </div>
      </div>
    </div>
  );
};
