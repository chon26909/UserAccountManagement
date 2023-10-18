import { useQuery } from "@tanstack/react-query";
import { getUserPostList } from "../../service/userService";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const { userId } = useParams();

  // Queries
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["user-posts"],
    queryFn: () => getUserPostList(userId || ""),
  });

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data?.data.posts.map((post, index) => {
        return <div key={index}> {post.title}</div>;
      })}
    </div>
  );
};

export default UserPosts;
