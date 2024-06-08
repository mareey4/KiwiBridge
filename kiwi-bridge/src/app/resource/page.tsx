import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Paper, Typography } from "@mui/material";
import BasicTabs from "@/components/tabs";
import LabelBottomNavigation from "@/components/bottomNavigation";

export default function BoxBasic() {
  return (
    <Box component="section">
      <Container fixed sx={{ paddingTop: "30px" }}>
        <Typography variant="h3" component="h4">
          RESOURCE
        </Typography>
        <BasicTabs></BasicTabs>
        <LabelBottomNavigation>{}</LabelBottomNavigation>
      </Container>
    </Box>
  );
}
