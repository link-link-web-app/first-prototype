import AxiosFunc from "./client/axios";

// export class with functions
export default {
  // get request
  fetchPosts() {
    return AxiosFunc().get("posts");
  },

  // post request (/posts)
  addPost(params) {
    return AxiosFunc().post("posts", params);
  },

  // put request
  updatePost(params) {
    return AxiosFunc().put("posts/" + params.id, params);
  },

  // get single post
  getPost(params) {
    return AxiosFunc().get("post/" + params.id);
  },

  // delete request
  deletePost(id) {
    return AxiosFunc().delete("posts/" + id);
  }
};
