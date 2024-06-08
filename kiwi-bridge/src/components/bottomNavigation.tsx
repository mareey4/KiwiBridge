"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ContactSupport, Newspaper, Person, QuestionAnswer } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LabelBottomNavigation() {
  const pathname = usePathname();
  
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "600px",
        }}
        value={pathname}
        
      >
        <Link href="/help" passHref>
          <BottomNavigationAction
            label="Need Help?"
            value="/help"
            icon={<ContactSupport />}
            sx={{ color: pathname === '/help' ? 'primary.main' : 'text.secondary' }}
            title="Need Help?"

          />
        </Link>
        <Link href="/connections" passHref>
          <BottomNavigationAction
            label="Connections"
            value="/connections"
            icon={<QuestionAnswer />}
            sx={{ color: pathname === '/connections' ? 'primary.main' : 'text.secondary' }}
          />
        </Link>
        <Link href="/resource" passHref>
          <BottomNavigationAction
            label="Resource"
            value="/resource"
            icon={<Newspaper />}
            sx={{ color: pathname === '/resource' ? 'primary.main' : 'text.secondary' }}
          />
        </Link>
        <Link href="/profile" passHref>
          <BottomNavigationAction
            label="Profile"
            value="Profile"
            icon={<Person />}
            sx={{ color: pathname === '/profile' ? 'primary.main' : 'text.secondary' }}
          />   
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
