"use server";

import axios from "axios";
const api = process.env.GITHUB_API_URL;

export async function fetchProjects() {
  try {
    const response = await axios.get(`${api}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}