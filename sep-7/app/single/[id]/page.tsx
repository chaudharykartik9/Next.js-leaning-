
const Page = async ({ params }: any) => {
  const { id } = await params;

  return (
    <div>
      <h1>Single ID</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default Page;