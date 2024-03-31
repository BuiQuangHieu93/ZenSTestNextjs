"use server";
import Vote from "../models/vote.model";
import { connectToDB } from "../mongoose";

export async function VoteJoke({
  joke,
  type,
  cookie,
}: {
  joke: string;
  type: string;
  cookie: string;
}) {
  try {
    await connectToDB();

    console.log(`Received ${type} vote for joke: ${joke}`);

    const newVote = new Vote({
      joke,
      type,
      userCookie: cookie,
    });

    const createdVote = await newVote.save();
    return createdVote;
  } catch (error) {
    console.error("Error voting for joke:", error);
    throw error;
  }
}
