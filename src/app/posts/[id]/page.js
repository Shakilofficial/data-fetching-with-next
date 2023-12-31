const DetailPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);
  return (
    <div>
      <h2>Post Detail Page</h2>
    </div>
  );
};

export default DetailPage;
