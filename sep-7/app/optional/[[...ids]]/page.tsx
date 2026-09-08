const Page = async ({ params }: any) => {
  const { ids } = await params;

  return (
    <div>
      <h1>Optional Catch All</h1>

      <p>IDs:optional {JSON.stringify(ids)}</p>
    </div>
  );
};

export default Page;