const API_URL = 'https://mindpuzzlers.com/wp-json/wp/v2/posts';

// Fetch post by ID
async function fetchPostById(id) {
    console.log(id,"id")

  const res = await fetch(`${API_URL}/${id}`);

  const post = await res.json();
  console.log(post)
  return post;
}

export default async function PostPage({ params }) {
       console.log(params)
  const { id } = params;
  console.log(id,"id")

  // Fetch the specific post by ID
  const post = await fetchPostById(id);
console.log(id,"id")
  return (
    <div style={{display:"flex",justifyContent:"center",padding:"20px",flexDirection:"column"}}>
      <h1 className="Miantitle"  >{post.title.rendered}+ {"tite"}</h1>
      {/* <img src={post.jetpack_featured_media_url} /> */}
      <div className="CONTENT" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
