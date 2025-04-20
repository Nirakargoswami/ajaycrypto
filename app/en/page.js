export const dynamic = "force-static";

async function fetchEnglishPosts() {
  const res = await fetch("https://mindpuzzlers.com/wp-json/wp/v2/posts?categories=19");
  return res.json();
}

export default async function EnglishHome() {
  const posts = await fetchEnglishPosts();

  return (
    <div>
      <h1>English News</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/News/${post.id}`}>{post.title.rendered}</a>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
