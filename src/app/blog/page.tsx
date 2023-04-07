const blogPosts = [
  {
    publishedAt: '2022-02-10',
    title: 'How to Make your Dashboards Accessible',
    summary: 'Enabling vision/neuro diverse stakeholders to gain your insights',
    href: 'https://rashmidsouza.hashnode.dev/how-to-make-your-dashboards-accessible'
  },
  {
    publishedAt: '2022-09-27',
    title: 'Baklava or Not Baklava',
    summary: 'Food Image Classification using Keras and Tensorflow',
    href: 'https://rashmidsouza.hashnode.dev/baklava-or-not-baklava'
  },
];

const Blog = () => (
  <section>
  <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
  {blogPosts.map((post) => (
      <a
        key={post.href}
        className="flex flex-col space-y-1 mb-4"
        href={post.href}
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
