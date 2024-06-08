import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Pagination, Paper, Typography } from "@mui/material";
import LabelBottomNavigation from "@/components/bottomNavigation";
import SearchBar from "@/components/searchBar";
import Filter from '@/components/filter'

export default function BoxBasic() {
  return (
    <Box component="section">
      <Container fixed sx={{ paddingTop: "30px" }}>
        <Typography variant="h5" component="h4">
          NEED HELP?
        </Typography>
        <SearchBar></SearchBar>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
        </div>
          <Filter></Filter>
        <LabelBottomNavigation>{}</LabelBottomNavigation>
      </Container>
    </Box>
  );
}
