import Link from "next/link";

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-center mt-8">
        Total Posts:{posts.length}{" "}
      </h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="card w-[70%] mx-auto bg-gray-100 shadow-xl my-5"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes: {post.likesCount}</p>
            <div className="card-actions justify-center">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-sm text-white btn-accent text-center">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostPage;
