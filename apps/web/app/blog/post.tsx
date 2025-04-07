export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <a href="#" key={post.id}>
      <article className="flex max-w-xl flex-col items-start justify-between hover:bg-accent rounded-md p-4">
        <div className="flex items-center gap-x-4 text-xs text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          {post.category}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold">
            <span className="absolute inset-0" />
            {post.title}
          </h3>
          <p className="mt-4 line-clamp-3 text-sm/6 ">{post.content}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="text-sm/6">
            <p className="font-semibold">
              <span className="absolute inset-0" />
              {post.author}
            </p>
          </div>
        </div>
      </article>
    </a>
  );
}
