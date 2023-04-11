import blogPosts from "./posts.json";

const Blog = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
    <ol>
      {blogPosts.map((post) => (
        <li key={post.href}>
          <a
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
        </li>
      ))}
    </ol>
  </section>
);

export default Blog;
