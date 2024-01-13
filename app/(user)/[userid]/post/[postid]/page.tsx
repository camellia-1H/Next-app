"use client";
import { axiosInstance } from "@/lib/utils";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const initPost = {
  id: "",
  authorId: "",
  content: "",
  createAt: Date.prototype,
  published: false,
  thumbnail: "",
  title: "",
  updateAt: Date.prototype,
};
export default function PostDetailPage({
  params,
}: {
  params: { userid: string; postid: string };
}) {
  const router = useRouter();
  const [postData, setPostData] = useState<Post>(initPost);
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

  useEffect(() => {
    const getData = async () => {
      const post: Post = await getPostDetail();
      setPostData(post);
    };
    getData();
  }, [params]);
  console.log(postData);

  return (
    <div className="h-full w-6/12 flex flex-col items-center">
      <div>
        <button onClick={() => router.back()}>trở về</button>
        <h1> Đây là post detail page {params.postid}</h1>
      </div>
      <div className="mt-24">
        <div>
          <button>Edit</button>
          <button className="ml-3">Delete</button>
        </div>
        <div className="px-32 py-20 border-gray-700 border-2">
          <h1>{postData.title}</h1>
          <div className="w-full">
            <Image
              src={postData.thumbnail}
              alt="anh post"
              width={300}
              height={500}
            />
          </div>
        </div>
        <div>
          <Link href={`/${params.userid}`}>
            <div>Author {postData.authorId}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
