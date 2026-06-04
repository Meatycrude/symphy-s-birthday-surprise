// 🌸 Local placeholder images live in src/assets/photos and src/assets/memories.
// REPLACE these imports with your real photos, Feli — just drop your files into
// those folders (any format: .jpg, .png, .webp, .svg) and update the imports below.

import symphy1 from "@/assets/photos/h1.jpg";
import symphy2 from "@/assets/photos/h2.jpg";
import symphy3 from "@/assets/photos/h3.jpg";
import symphy4 from "@/assets/photos/h4.jpg";
import symphy5 from "@/assets/photos/h5.jpg";
import symphy6 from "@/assets/photos/h6.jpg";

import memory1 from "@/assets/memories/h1.jpg";
import memory2 from "@/assets/memories/h10.jpg";
import memory3 from "@/assets/memories/h4.jpg";
import memory4 from "@/assets/memories/h8.jpg";
import memory5 from "@/assets/memories/h7.jpg";
import memory6 from "@/assets/memories/h3.jpg";

export const symphyPhotos = [symphy1, symphy2, symphy3, symphy4, symphy5, symphy6];

export const memories = [
  {
    src: memory1,
    date: "a Year Ago",
    caption: "",
  },
  {
    src: memory2,
    date: "Dinner with friends",
    caption: "",
  },
  {
    src: memory3,
    date: "That Little Trip",
    caption: "",
  },
  { src: memory5, date: "Friend Time", caption: "" },
  {
    src: memory4,
    date: "chilled late night",
    caption: "",
  },
  { src: memory6, date: "The Promise", caption: "" },
];

// 🎵 REPLACE with your chosen birthday song — drop the file into src/assets/
// and `import song from "@/assets/your-song.mp3"`, then export it here.
export const birthdaySong =
  "https://cdn.pixabay.com/download/audio/2022/10/14/audio_3f8e2eb37a.mp3?filename=happy-birthday-15780.mp3";
