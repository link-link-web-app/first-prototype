import AxiosFunc from "./client/axios";

// export class with functions
export default {
  fetchPosts() {
    return AxiosFunc().get("posts");
  },
  addPost(params) {
    return AxiosFunc().post("posts/new", params);
  },
  updatePost(params) {
    return AxiosFunc().put("posts/" + params.id, params);
  },
  getPost(params) {
    return AxiosFunc().get("post/" + params.id);
  },
  deletePost(id) {
    return AxiosFunc().delete("posts/" + id);
  }
};
