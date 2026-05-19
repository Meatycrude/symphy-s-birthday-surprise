// 🌸 Local placeholder images live in src/assets/photos and src/assets/memories.
// REPLACE these imports with your real photos, Feli — just drop your files into
// those folders (any format: .jpg, .png, .webp, .svg) and update the imports below.

import symphy1 from "@/assets/photos/symphy-1.svg";
import symphy2 from "@/assets/photos/symphy-2.svg";
import symphy3 from "@/assets/photos/symphy-3.svg";
import symphy4 from "@/assets/photos/symphy-4.svg";
import symphy5 from "@/assets/photos/symphy-5.svg";
import symphy6 from "@/assets/photos/symphy-6.svg";

import memory1 from "@/assets/memories/memory-1.svg";
import memory2 from "@/assets/memories/memory-2.svg";
import memory3 from "@/assets/memories/memory-3.svg";
import memory4 from "@/assets/memories/memory-4.svg";
import memory5 from "@/assets/memories/memory-5.svg";
import memory6 from "@/assets/memories/memory-6.svg";

export const symphyPhotos = [symphy1, symphy2, symphy3, symphy4, symphy5, symphy6];

export const memories = [
  { src: memory1, date: "Our First Date", caption: "The night I knew you were different. Coffee turned into hours." },
  { src: memory2, date: "Sunset Walks",   caption: "Every sunset felt softer with your hand in mine." },
  { src: memory3, date: "That Little Trip", caption: "Lost together, found each other a little more." },
  { src: memory4, date: "Lazy Sundays",   caption: "Just us, coffee, and slow mornings — heaven." },
  { src: memory5, date: "Dancing in the Kitchen", caption: "Burnt toast and your laughter — best soundtrack ever." },
  { src: memory6, date: "The Promise",    caption: "I promised you forever, and I meant every word." },
];

// 🎵 REPLACE with your chosen birthday song — drop the file into src/assets/
// and `import song from "@/assets/your-song.mp3"`, then export it here.
export const birthdaySong = "https://cdn.pixabay.com/download/audio/2022/10/14/audio_3f8e2eb37a.mp3?filename=happy-birthday-15780.mp3";
