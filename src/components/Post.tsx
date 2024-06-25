import React, { useState, useEffect } from "react";
import IPost from "../interfaces/IPost";
import userFetch from "../utils/userFetch";
// interface GreetingProps {
//   name: string;
// }
type Props = {
  postid: number;
};

const Post: React.FC<any> = (props: Props) => {
  const [post, setPost] = useState<IPost>();
  const url = "https://jsonplaceholder.typicode.com/posts/" + props.postid;
  useEffect(() => {
    const post = userFetch(url);
    console.log(post);
    // fetch(url)
    //   // r = response
    //   .then((r) => r.json())
    //   .then((data) => setPost(data));
  }, [url]);
  // props.postid
  return <h1>Hello! {post?.title}</h1>;
};

export default Post;
