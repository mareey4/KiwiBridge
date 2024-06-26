"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NzHerald from "./nzHerald";
import NewsHub from "./newsHub";
import Stuff from "./stuff";
import OneNews from "./oneNews";
import BasicMenu from "./dropdown";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
            <Tab label="NZ Herald" {...a11yProps(0)} />
            <Tab label="News Hub" {...a11yProps(1)} />
            <Tab label="Stuff" {...a11yProps(2)} />
            <Tab label="1News" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <BasicMenu />
      <CustomTabPanel value={value} index={0}>
        <NzHerald />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <NewsHub />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Stuff />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <OneNews />
      </CustomTabPanel>
    </Box>
  );
}
