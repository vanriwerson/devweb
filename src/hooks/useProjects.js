import { useEffect, useState } from "react"
import api from "../services/api"
import favoriteProjects from "../utils/favoriteProjects";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const params = {
          direction: 'desc',
          pinned: true,
          per_page: 100,
        }
        
        const { data } = await api.get('/users/vanriwerson/repos', { params });
        const filteredProjects = data.reduce((acc, project) => {
          const favoriteProject = favoriteProjects.find((favorite) => favorite.id === project.id);

          if (favoriteProject) {
            return [...acc, {
              ...project,
              title: favoriteProject.title,
              thumb: favoriteProject.thumb,
            }];
          }

          return acc;
        }, []);
        console.log(filteredProjects);
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Erro ao buscar os projetos do GitHub:', error);
      }
    }

    getProjects();
  }, []);

  return [projects];
}

export default useProjects;
