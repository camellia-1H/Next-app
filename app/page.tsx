import {
  SignInButton,
  SignUpButton,
  UserButton,
  auth,
  currentUser,
  useAuth,
} from "@clerk/nextjs";
import Link from "next/link";
import { axiosInstance } from "@/lib/utils";
import { Post } from "@prisma/client";

export default async function Home() {
  // const { userId } = auth();

  const fetchAllUsers = async () => {
    try {
      const response = await axiosInstance.get("api/posts");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const data: Post[] = await fetchAllUsers();

  return (
    <div className="flex">
      <div className="flex flex-col">
        <h1> DDaya laf Home /</h1>
        {data?.map((post: Post) => {
          return (
            <div key={post.id}>
              <Link
                href={`${post.authorId}/post/${post.id}`}
                title="Link to profile detail page"
              >
                {post.content}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
