import client from "./client";

const getComments = () => client.get("/comments");

export default {
  getComments
};
