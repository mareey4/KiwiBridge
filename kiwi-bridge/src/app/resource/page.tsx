import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Pagination, Paper, Typography } from "@mui/material";
import BasicTabs from "@/components/tabs";
import LabelBottomNavigation from "@/components/bottomNavigation";

export default function BoxBasic() {
  return (
    <Box component="section">
      <Container fixed sx={{ paddingTop: "30px" }}>
        <Typography variant="h5" component="h4">
          RESOURCE
        </Typography>
        <BasicTabs></BasicTabs>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Pagination count={4} shape="rounded" />
        </div>

        <LabelBottomNavigation>{}</LabelBottomNavigation>
      </Container>
    </Box>
  );
}
