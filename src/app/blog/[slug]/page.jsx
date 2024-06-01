import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

// FETCH DATA WITH AN fetch API
// const getPostData = async (slug) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//     if (!response.ok) {
//         throw new Error("Something went wrong");
//     }

//     return response.json();
// }

const getPostData = async (slug) => {
    const response = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    return response.json();
}

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const postData = await getPost(slug);
    return {
        title: postData.title,
        description: postData.desc,
    }
}

const SinglePostPage = async ({ params }) => {

    const { slug } = params;

    const postData = await getPostData(slug);

    // FETCH DATA WITHOUT API
    // const postData = await getPost(slug);

    return (
        <div className={styles.container}>
            {postData.img && (
                <div className={styles.imgContainer}>
                    <Image src={postData.img} alt="" fill className={styles.img} />
                </div>
            )}

            <div className={styles.textContainer}>
                <h1 className={styles.title}>{postData?.title}</h1>
                <div className={styles.detail}>
                    {/* React suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. */}
                    {postData && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={postData.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{postData.createdAt.toString().slice(4, 16)}</span>
                    </div>
                </div>
                <p className={styles.content}>{postData?.desc}</p>
            </div>
        </div>
    )
}
export default SinglePostPage;