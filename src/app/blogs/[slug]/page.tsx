// src/app/blog/[slug]/page.tsx
import { useRouter } from 'next/router';

// Sample blog data (replace with actual API call)
const blogs = [
  {
    id: 1,
    title: "Documents required for car rental",
    date: "2025-12-29",
    author: "Olivia D.",
    content: "Here is some detailed content for the blog post about documents required for car rental...",
    image: "/img/blog/03.jpg",
  },
  {
    id: 2,
    title: "Rental cost of sport and other cars",
    date: "2025-12-27",
    author: "Martin C.",
    content: "Here is some detailed content for the blog post about rental cost of sports and other cars...",
    image: "/img/blog/04.jpg",
  },
  // Add more blog data as needed
];

interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
}

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <section className="blog-detail section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-detail-item">
              <div className="img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="content">
                <div className="meta">
                  <span>{new Date(blog.date).toLocaleDateString()}</span> | <span>{blog.author}</span>
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
