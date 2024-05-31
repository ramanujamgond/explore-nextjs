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

const SinglePostPage = async ({ params }) => {

    const { slug } = params;

    // const postData = await getPostData(slug);

    const postData = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-street-by-palais-garnier-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{postData?.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://images.pexels.com/photos/19562913/pexels-photo-19562913/free-photo-of-scenic-view-of-a-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={50} height={50} />
                    {/* React suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. */}
                    {postData && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={postData.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>30.05.2024</span>
                    </div>
                </div>
                <p className={styles.content}>{postData?.body}</p>
            </div>
        </div>
    )
}
export default SinglePostPage;