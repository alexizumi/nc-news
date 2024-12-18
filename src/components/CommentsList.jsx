import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardTitle } from 'reactstrap';
import { getCommentsByArticle } from '../api/api';
import CommentCard from './CommentCard';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';

export default function CommentsList() {
    const { article_id } = useParams();
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        getCommentsByArticle(article_id)
            .then((comments) => {
                setComments(comments);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError('Error fetching comments');
            })
    }, []);

    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent message={error} />;
    return (

        <ul>
            <CardTitle className="h4 mb-2 pt-2 font-weight-bold text-secondary">Comments</CardTitle>
            {comments.map((comment) => {
                return (
                    <CommentCard comment={comment} key={comment.comment_id} />
                )
            })}
        </ul>

    )
}
