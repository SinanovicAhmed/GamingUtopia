import { IRedditPosts } from "@/app/interfaces/Games";
import React from "react";
import SanitizeHTML from "./SanitizeHTML";

const getReddit = async (id: number) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${id}/reddit?key=${process.env.RAWR_API_KEY}&page_size=80`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Reddit = async ({ id }: { id: number }) => {
  const response = await getReddit(id);
  const redditPosts: IRedditPosts[] = response.results;

  return (
    <div className="width-full flex gap-3 flex-wrap">
      {redditPosts?.map((post) =>
        post.text != "" ? (
          <div key={post.id} className="w-full py-3">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 font-bold hover:underline"
            >
              {post.name} <span className="text-white font-normal text-xs">by {post.username}</span>
            </a>
            <SanitizeHTML text={post.text} />
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Reddit;
