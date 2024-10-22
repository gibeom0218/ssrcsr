import api from "./base";

const getMoviesData = async () => {
  try {
    const response = await api.get(`/api/watchit/movies/`);
    return response.data;
  } catch (error) {
    console.error("Error getting movies:", error);
    throw error;
  }
};

export default getMoviesData;
