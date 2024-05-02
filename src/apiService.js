import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzRlYThhNjY4NTQ1MGI5MDhhMjIxMGYxMGQwODQyNyIsInN1YiI6IjY2MzA3ZjA1ZTFhZDc5MDEyYjA4MGY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YiG7nwpcJUYSbhwXf2eWwwNzQU94Z0Qw7XdyKd--8Bk";

const apiService = {
  get: async (url) => {
    try {
      // console.log("In api service" + " " + url)
      const response = await axios.get(baseURL + url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });
      //console.log("In api service" + " " + response.headers)
      return response.data;
    } catch (error) {}
  },
};

export default apiService;
