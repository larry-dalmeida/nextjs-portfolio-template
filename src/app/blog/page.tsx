import blogPosts from "./posts.json";

const Blog = () => (
  <section>
  <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
  {blogPosts.map((post) => (
      <a
        key={post.href}
        className="flex flex-col space-y-1 mb-4"
        href={post.href}
        target="_blank"
      >
        <div className="w-full flex flex-col">
          <p>{post.title}</p>
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">
            {post.summary}
          </p>
        </div>
      </a>
    ))}
</section>
);

export default Blog;
