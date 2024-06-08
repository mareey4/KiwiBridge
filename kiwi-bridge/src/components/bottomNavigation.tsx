"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  ContactSupport,
  Contacts,
  Newspaper,
  Person,
  QuestionAnswer,
} from "@mui/icons-material";
import { Paper } from "@mui/material";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: "fixed" }}>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "600px",
          zIndex: 1000,
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Need Help?"
          value="Need Help?"
          icon={<ContactSupport />}
        />
        <BottomNavigationAction
          label="Connections"
          value="Connections"
          icon={<QuestionAnswer />}
        />
        <BottomNavigationAction
          label="Resources"
          value="Resources"
          icon={<Newspaper />}
        />
        <BottomNavigationAction
          label="Profile"
          value="Profile"
          icon={<Person />}
        />
      </BottomNavigation>
    </Paper>
  );
}
