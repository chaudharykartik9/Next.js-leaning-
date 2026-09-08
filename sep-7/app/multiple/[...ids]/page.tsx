const Page = async ({ params }: any) => {
  const { ids } = await params;

  return (
    <div>
      <h1>Multiple IDs</h1>

      <p>First ID: {ids[0]}</p>
      <p>Second ID: {ids[1]}</p>
      <p>Third ID: {ids[2]}</p>
    </div>
  );
};

export default Page;