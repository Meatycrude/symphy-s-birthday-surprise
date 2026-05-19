// 🌸 Local placeholder images live in src/assets/photos and src/assets/memories.
// REPLACE these imports with your real photos, Feli — just drop your files into
// those folders (any format: .jpg, .png, .webp, .svg) and update the imports below.

import symphy1 from "@/assets/photos/m1.jpg";
import symphy2 from "@/assets/photos/m2.jpg";
import symphy3 from "@/assets/photos/m3.jpg";
import symphy4 from "@/assets/photos/m4.jpg";
import symphy5 from "@/assets/photos/m5.jpg";
import symphy6 from "@/assets/photos/m6.jpg";

import memory1 from "@/assets/memories/m7.jpg";
import memory2 from "@/assets/memories/m8.jpeg";
import memory3 from "@/assets/memories/m9.jpeg";
import memory4 from "@/assets/memories/m10.jpeg";
import memory5 from "@/assets/memories/m11.jpeg";
import memory6 from "@/assets/memories/m12.jpeg";

export const symphyPhotos = [symphy1, symphy2, symphy3, symphy4, symphy5, symphy6];

export const memories = [
  {
    src: memory1,
    date: "Our First Date",
    caption: "The night I knew you were different. Coffee turned into hours.",
  },
  {
    src: memory2,
    date: "Sunset Walks",
    caption: "Every sunset felt softer with your hand in mine.",
  },
  {
    src: memory3,
    date: "That Little Trip",
    caption: "Lost together, found each other a little more.",
  },
  { src: memory4, date: "Lazy Sundays", caption: "Just us, coffee, and slow mornings — heaven." },
  {
    src: memory5,
    date: "Dancing in the Kitchen",
    caption: "Burnt toast and your laughter — best soundtrack ever.",
  },
  { src: memory6, date: "The Promise", caption: "I promised you forever, and I meant every word." },
];

// 🎵 REPLACE with your chosen birthday song — drop the file into src/assets/
// and `import song from "@/assets/your-song.mp3"`, then export it here.
export const birthdaySong =
  "https://cdn.pixabay.com/download/audio/2022/10/14/audio_3f8e2eb37a.mp3?filename=happy-birthday-15780.mp3";
