import axios from "axios";
const token = import.meta.env.VITE_GITHUB_TOKEN;

export async function fetchProjects(repo: string) {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${repo}+user:ElMatheus+fork:true`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Não foi possível buscar o repositório ${repo}:`);
    return [];
  }
}

export async function fetchTecnologiesProject(project: string) {
  try {
    const response = await axios.get(`https://api.github.com/repos/ElMatheus/${project}/languages`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return Object.keys(response.data);
  } catch (error) {
    console.error(`Não foi possível buscar as tecnologias do repositório ${project}:`);
    return [];
  }
}