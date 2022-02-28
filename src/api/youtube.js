import axios from "axios";

const KEY = "AIzaSyAzpEZkt-sZxlZOHo676C9KLWpZgOw47X0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
