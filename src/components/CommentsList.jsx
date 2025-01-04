import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardTitle } from 'reactstrap';
import { getCommentsByArticle } from '../api/api';
import CommentCard from './CommentCard';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';

export default function CommentsList({ initialComments, onCommentDelete, onCommentEdit }) {
    const { article_id } = useParams();
    const [comments, setComments] = useState(initialComments || [])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        getCommentsByArticle(article_id)
            .then((fetchedComments) => {
                setComments(fetchedComments);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError('Error fetching comments');
            })
    }, [article_id, initialComments]);

    const handleLocalCommentDelete = (commentId) => {
        setComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== commentId)
        );
        onCommentDelete(commentId);
    };

    const handleLocalCommentEdit = (updatedComment) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.comment_id === updatedComment.comment_id ? updatedComment : comment
            )
        );
        onCommentEdit(updatedComment);
    };

    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent message={error} />;

    return (
        <ul>
            <CardTitle className="h4 mb-2 pt-2 font-weight-bold text-secondary">Comments</CardTitle>
            {comments.map((comment) => {
                return (
                    <CommentCard
                        comment={comment}
                        key={comment.comment_id}
                        article_id={article_id}
                        onDelete={handleLocalCommentDelete}
                        onEdit={handleLocalCommentEdit}
                    />
                )
            })}
        </ul>

    )
}
