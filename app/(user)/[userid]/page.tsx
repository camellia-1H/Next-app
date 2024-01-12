import { axiosInstance } from "@/lib/utils";

const ProFilePage = async ({ params }: { params: { userid: string } }) => {
  const data = await axiosInstance.get(`api/${params.userid}`);
  // console.log(data.data);

  return (
    <div className="h-full flex items-center justify-center">
      <h1> Đây là profile page cua {params.userid}</h1>
    </div>
  );
};

export default ProFilePage;
