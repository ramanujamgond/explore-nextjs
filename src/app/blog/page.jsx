import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

// FETCH DATA WITH AN fetch API
// const getData = async () => {
//     // by default the nextjs force the cache to better loading of the page
//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" });
//     // if you want to disable the cache then pass the no-store option in the cache;
//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
//     // disable caching is only used where data on the page is not updating regularly as in blog post
//     // revalidate can be used to fetch the data from the server on some regular interval of time in the bellow case it is 1 hour

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });
//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }

// const BlogPage = ({ params, searchParams }) => {
const BlogPage = async () => {
    // console.log("parmas", params);
    // console.log("searchParams", searchParams);

    // const posts = await getData();

    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}
export default BlogPage;