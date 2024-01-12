import { axiosInstance } from "@/lib/utils";
import { Post } from "@prisma/client";
import Image from "next/image";

export default async function PostDetailPage({
  params,
}: {
  params: { userid: string; postid: string };
}) {
  const getPostDetail = async () => {
    try {
      const response = await axiosInstance.get(
        `api/${params.userid}/post/${params.postid}`
      );
      return response.data;
    } catch (error) {
      console.log("logi nug");
    }
  };

  const post: Post = await getPostDetail();

  return (
    <div className="h-full w-6/12 flex flex-col items-center">
      <h1> Đây là post detail page {params.postid}</h1>
      <div className="mt-24">
        <div className="px-32 py-20 border-gray-700 border-2">
          <h1>{post.title}</h1>
          <div className="w-full">
            <Image
              src={post.thumbnail}
              alt="anh post"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
