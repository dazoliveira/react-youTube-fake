import axios from "axios";

export default axios.create({
  baseURL: "https://www.googlepapis.com/youtube/v3",
  paramns: {
    part: "snippet",
    maxResults: 5,
    key: "[API KEY]"
  }
});
