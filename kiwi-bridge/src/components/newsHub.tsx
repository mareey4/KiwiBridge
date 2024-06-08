import Image from "next/image";
import newsHub from "../../public/newsHub1.jpeg";
import { Paper } from "@mui/material";

export default function NewsHub() {
  interface Item {
    id: number;
    content: string;
  }
  const itemElements: Item[] = [
    {
      id: 1,
      content: "lorem",
    },
    { id: 2, content: "lorem" },
    { id: 3, content: "lorem" },
    {
      id: 4,
      content: "lorem",
    },
    { id: 5, content: "lorem" },
  ];
  return (
    <div>
      <ul>
        {itemElements.map((item) => (
          <>
            <Paper elevation={3}>
              <Image
                src={newsHub.src}
                width={200}
                height={150}
                alt="Picture of a world"
              />
            </Paper>
          </>
        ))}
      </ul>
    </div>
  );
}
