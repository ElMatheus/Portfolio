"use server";

import axios from "axios";

export async function fetchProjects(repo: string) {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${repo}+user:ElMatheus`);
    return response.data;
  } catch (error) {
    console.error(`Não foi possível buscar o repositório ${repo}:`);
    return [];
  }
}