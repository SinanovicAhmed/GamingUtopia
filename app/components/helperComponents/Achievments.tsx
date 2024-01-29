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
    <div className="flex flex-wrap gap-3 justify-between transition-all">
      {achievments?.results.map((achievment) => (
        <div className="group w-20 overflow-clip" key={achievment.id}>
          <div className="w-20 h-20 relative">
            <Image src={achievment.image} alt="achievment logo" fill sizes="80px" />
          </div>
          <h2 className="truncate text-sm text-white">{achievment.name}</h2>
          <p className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto text-[10px] text-gray-500 transition-all">
            {achievment.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievments;
