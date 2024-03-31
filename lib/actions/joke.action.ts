"use server";
import Joke from "../models/joke.model";
import { connectToDB } from "../mongoose";

export async function FetchJoke() {
  try {
    connectToDB();
    const jokes = await Joke.find();
    return jokes;
  } catch (error: any) {
    console.error("Error fetching joke:", error);
    throw error;
  }
}
export async function createJoke({ content }: { content: string }) {
  try {
    connectToDB();
    const newJoke = new Joke({
      content: content,
    });

    const createJoke = await newJoke.save();
    return createJoke;
  } catch (error: any) {
    console.error("Error creating joke:", error);
    throw error;
  }
}
