
import Link from 'next/link';
import Todaynews from "../components/Todaynewblog"
import Crypto from "../components/Fiiance"

const API_URL = 'https://mindpuzzlers.com/wp-json/wp/v2/posts';

// Fetch all posts
async function fetchAllPosts() {
  const res = await fetch(API_URL);
  const posts = await res.json();
  return posts;
}





export default async function RegionPage() {
  // Fetch all posts
  const posts = await fetchAllPosts();

  // Filter posts based on the region

  return (
    <div>
      <Todaynews  posts={posts} />
      <Crypto  posts={posts} />
    </div>
  );
}
