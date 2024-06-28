import React from "react";
import IPost from "../interfaces/IPost";
import userFetch from "../utils/userFetch";
// interface GreetingProps {
//   name: string;
// }
type Props = {
  postid: number;
};

const Post: React.FC<any> = (props: Props) => {
  // avec useEffect à chaque chargement de props.postid
  // const [post, setPost] = useState<IPost>();
  // useEffect(() => {
  //   const post = userFetch(url);
  //   console.log(post);
  // fetch(url)
  //   // r = response
  //   .then((r) => r.json())
  //   .then((data) => setPost(data));
  // }, [url]);
  // props.postid

  // avec notre use hook
  const url = "https://jsonplaceholder.typicode.com/posts/" + props.postid;

  const postUseFetch: IPost | null = userFetch(url);
  console.log(postUseFetch);
  return <h3>"valeur=" {postUseFetch?.title}</h3>;
};

export default Post;
