"use client";

import React, { useState } from "react";
import Image from "next/image";


// Teacher type definition
type Teacher = {
  name: string;
  title: string;
  message: string;
  image: string;
};

const teachers: Teacher[] = [
  {
    name: "Ameen Alam",
    title: "Dean of Faculty",
    message: `"Meet our Dean of Faculty, Ameen Alam. A guiding light, so wise and true, 🌟\nWith every word, our dreams renew. 🌱\nCreated by Rimsha Ansari"`,
    image: "/images/a.jpg",
  },
  {
    name: "Daniyal Nagori",
    title: "CEO",
    message: `"A visionary who leads the way, 🚀\nTurning night into brightest day. ☀️\nCreated by Rimsha Ansari"`,
    image: "/images/b.jpg",
  },
  {
    name: "Zia Khan",
    title: "Leader & Guider",
    message: `"A pioneer, a shining star, ✨\nBringing IT’s future near, not far. 💻\nCreated by Rimsha Ansari"`,
    image: "/images/c.jpg",
  },
  {
    name: "Mubashir Ali",
    title: "Lead Teacher",
    message: `"🔹 Sir Mubashir guides with wisdom, making every lesson shine,\nWith every word, he helps us climb.\n\n🔹 Not just a teacher, but a friend,\nHis guidance and warmth will never end.\n\nCreated by Rimsha Ansari"`,
    image: "/images/d.jpg",
  }
,  
  {
    name: "Naeem Hussain",
    title: "Lead Teacher",
    message: `"A beacon of knowledge, guiding the way, 🧭\nNaeem Hussain leads us, come what may. 🌈\nCreated by Rimsha Ansari"`,
    image: "/images/e.jpg",
  },
  {
    name: "Amjad Ali",
    title: "Assistant Teacher",
    message: `"Amjad Ali, inspiring with every word, 📖\nGuiding us with wisdom, never unheard. 🙏\nCreated by Rimsha Ansari"`,
    image: "/images/f.jpg",
  },
  {
    name: "Muhammad Imran",
    title: "Assistant Teacher",
    message: `"Muhammad Imran, a mentor so true, 💼\nTeaching us lessons in all we do. 📘\nCreated by Rimsha Ansari"`,
    image: "/images/g.jpg",
  },
  {
    name: "Abdullah Arain",
    title: "Assistant Teacher",
    message: `"Abdullah Arain, a mentor so wise, 🤔\nWith every lesson, he opens our eyes. 👀\nCreated by Rimsha Ansari"`,
    image: "/images/h.jpg",
  },
  {
    name: "Abdul Sami",
    title: "Assistant Teacher",
    message: `"Abdul Sami, a guide with a heart so kind, 💖\nLeading us forward with a brilliant mind. 🧠\nCreated by Rimsha Ansari"`,
    image: "/images/i.jpg",
  },
  {
    name: "Nida Rizwan",
    title: "Assistant Teacher",
    message: `"Nida Rizwan, with passion and grace, 💃\nA leader whose wisdom lights up the place. ✨\nCreated by Rimsha Ansari"`,
    image: "/images/j.jpg",
  },
  {
    name: "Ayesha Siddiqua",
    title: "Assistant Teacher",
    message: `"Ayesha Siddiqua, with knowledge so deep, 🔍\nIn her lessons, we find a path to keep. 🛤️\nCreated by Rimsha Ansari"`,
    image: "/images/k.jpg",
  },
];

export default function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-pink-400 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-8 sm:text-3xl">📜 Gratitude to Our Amazing Teachers! 📜</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className=" from-blue-400 to-pink-700 p-6 rounded-2xl shadow-lg text-black max-w-xs mx-auto cursor-pointer transition-transform transform hover:scale-105 border-4 border-white "
            onClick={() => setSelectedTeacher(teacher)}
          >
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">{teacher.name}</h2>
            <p className="text-md mt-2">{teacher.title}</p>
          </div>
        ))}
      </div>
      {selectedTeacher && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className=" border-4 border-white bg-gradient-to-r from-cyan-500 to-pink-500 p-8 rounded-lg text-black max-w-lg text-justify relative transition-all duration-300 transform scale-110">
            <button
              className="absolute top-2 right-4 text-xl font-bold text-black"
              onClick={() => setSelectedTeacher(null)}
            >
              ✖
            </button>
            <Image
              src={selectedTeacher?.image ?? ""}
              alt={selectedTeacher?.name ?? ""}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold">{selectedTeacher?.name}</h2>
            <p className="text-xl font-semibold mb-6">{selectedTeacher?.title}</p>
            <p className="text-lg whitespace-pre-line">{selectedTeacher?.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
