import { IAchievments } from "@/app/interfaces/Games";
import React from "react";
import Image from "next/image";

const getAchievments = async (id: number) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${id}/achievements?key=${process.env.RAWR_API_KEY}&page_size=80`
    );
    const data: IAchievments = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Achievments = async ({ id }: { id: number }) => {
  const achievments = await getAchievments(id);

  return (
    <div className="flex flex-wrap gap-3 justify-between">
      {achievments?.results.map((achievment) => (
        <div className="w-20 overflow-clip" key={achievment.id}>
          <div className="w-20 h-20 relative">
            <Image
              src={achievment.image}
              alt="achievment logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h2 className="truncate text-sm text-white">{achievment.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Achievments;
