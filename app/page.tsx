import BlogCard, {BlogCardProps} from "@/components/custom/blogCard";

export default function Home() {
    const recentBlogPosts: BlogCardProps[] = [
        {
            title: "UX review presentations",
            description:
                "How do you create compelling presentations that wow your colleagues and impress your managers?",
            coverImage: "/plan-1.jpg",
            publishedAt: "2021-10-01",

            tags: ["design", "research", "presentation"],
            href: '#'
        },
        {
            title: "Migrating to Linear 101",
            description:
                "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
            coverImage: "/plan-1.jpg",
            publishedAt: "2021-10-02",
            tags: ["design", "research"],
            href: '#'
        },
        {
            title: "My Third Blog Post",
            description: "This is my third blog post",
            coverImage: "/plan-1.jpg",
            publishedAt: "2021-10-03",
            tags: ["third", "post"],
            href: '#'
        },
        {
            title: "My Fourth Blog Post",
            description:
                "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
            coverImage: "/plan-1.jpg",
            publishedAt: "2021-10-04",
            tags: ["fourth", "post"],
            href: '#'
        },
    ];
  return (
      <main className="">
        <section>
          <div className="container">
            <div className="w-full grid grid-cols-3 md:grid-cols-2 mp:grid-cols-1">
              {recentBlogPosts.map((post: BlogCardProps) => (
                  <BlogCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
