const API_URL = 'https://mindpuzzlers.com/wp-json/wp/v2/posts';

// Fetch post by ID
async function fetchPostById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const post = await res.json();
  return post;
}

export default async function PostPage({ params }) {

  const { id } = params;

  // Fetch the specific post by ID
  const post = await fetchPostById(id);
console.log(post)
  return (
    <div style={{display:"flex",justifyContent:"center",padding:"20px",flexDirection:"column"}}>
      <h1 className="Miantitle"  >{post.title.rendered}+ {"tite"}</h1>
      {/* <img src={post.jetpack_featured_media_url} /> */}
      <div className="CONTENT" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

