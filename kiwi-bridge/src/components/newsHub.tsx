import * as React from 'react';
import Image from 'next/image';
import newsHub from '../../public/newsHub1.jpeg';
import { Paper, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export default function NewsHub() {
  interface Item {
    id: number;
    content: string;
  }

  const itemElements: Item[] = [
    { id: 1, content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, content: 'Consectetur adipiscing elit.' },
    { id: 3, content: 'Integer nec odio.' },
    { id: 4, content: 'Praesent libero.' },
    { id: 5, content: 'Sed cursus ante dapibus diam.' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={2}>
        {itemElements.map((item) => (
          <Item key={item.id} elevation={3}>
            <Image
              src={newsHub.src}
              width={150}
              height={100}
              alt="Picture of a world"
              style={{ marginRight: 16 }}
            />
            <span>{item.content}</span>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
