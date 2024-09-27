import React, {useEffect, useState} from 'react';
import {Post} from "../types/post";
import {fetchPost} from "../api/post";

export const paginationComponent: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchPost(page, 10);
            if (data) {
                setPosts(data.content);
                setTotalPages(data.totalPages);
            }
        };
        loadPosts();
    }, [page]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage)
        }
    };

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
                    Previous
                </button>
                <span>{page + 1} / {totalPages}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1}>
                    Next
                </button>
            </div>

        </div>
    );
}

export default paginationComponent;
