"use client";

import React, { useState, useEffect } from "react";
import { FetchJoke } from "@/lib/actions/joke.action";
import { VoteJoke } from "@/lib/actions/vote.action";
import { getCookie } from "cookies-next";

const JokeDisplay = () => {
  const [jokes, setJokes] = useState<{ _id: string; content: string }[]>([]);
  const [jokeIndex, setJokeIndex] = useState(0);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const fetchedJokes = await FetchJoke();
      setJokes(JSON.parse(JSON.stringify(fetchedJokes)));
      console.log("Fetched Jokes:", fetchedJokes);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  const handleLike = async (joke: string) => {
    const consentCookie = await getCookie("userCookie");
    setJokeIndex(jokeIndex + 1);
    if (consentCookie) {
      VoteJoke({ joke, type: "like", cookie: consentCookie });
    }
  };

  const handleDislike = async (joke: string) => {
    const consentCookie = await getCookie("userCookie");
    setJokeIndex(jokeIndex + 1);
    if (consentCookie) {
      VoteJoke({ joke, type: "dislike", cookie: consentCookie });
    }
  };

  // const createJoke1 = () => {
  //   const jokeContent = `I told my wife she was drawing her eyebrows too high. She looked surprised.`;

  //   createJoke({ content: jokeContent });
  // };

  return (
    <div className="flex pl-[360px] pr-[360px] pt-[86px] pb-[120px] bg-white text-black flex-col">
      <div className="text-xl">
        {jokes && jokeIndex < jokes.length
          ? `${jokes[jokeIndex]?.content}`
          : "That's all the jokes for today! Come back another day!"}
      </div>

      <div className="w-full flex justify-center pt-[50px] pb-[50px]">
        <div className="h-[1px] w-[80%]  bg-[#d5d5d5]"></div>
      </div>
      <div className="w-full justify-center flex">
        {jokes && jokeIndex < jokes.length ? (
          <div className="flex flex-row justify-between w-[80%]">
            <button
              className="bg-[#2c7edb] w-[220px] h-[60px] text-white"
              onClick={() => handleLike(jokes[jokeIndex]?._id)}
            >
              This is Funny!
            </button>
            <button
              className="bg-[#29b363] w-[220px] h-[60px] text-white"
              onClick={() => handleDislike(jokes[jokeIndex]?._id)}
            >
              This is not funny.
            </button>
          </div>
        ) : (
          <div className="flex flex-row justify-between w-[80%]">
            <button className="bg-[#2c7edb] w-[220px] h-[60px] text-white">
              This is Funny!
            </button>
            <button className="bg-[#29b363] w-[220px] h-[60px] text-white">
              This is not funny.
            </button>
          </div>
        )}
        {/* <button
            className="bg-[#29b363] w-[320px] h-[60px] text-white"
            onClick={() => createJoke1()}
          >
            Add Joke
          </button> */}
      </div>
    </div>
  );
};

export default JokeDisplay;
