import axios from "axios";

const Page = async ({ params }: any) => {
  const { blogid } = await params;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogid}`);
  const data = res.data ;


  return <div>
    data {data.title}
    data {data.body}
  </div>;
};

export default Page;