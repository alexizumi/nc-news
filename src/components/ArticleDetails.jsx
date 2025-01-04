import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle } from "reactstrap";
import { getArticleDetails, getCommentsByArticle } from '../api/api';
import { UserContext } from '../context/User';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';
import Votes from './Votes';

export default function ArticleDetails() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        getArticleDetails(article_id)
            .then((article) => {
                setArticle(article);
                if (article.comment_count > 0) {
                    getCommentsByArticle(article_id)
                        .then((comments) => {
                            setComments(comments);
                        })
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError('Error fetching articles or comments');
            })
    }, []);

    const handleCommentAdded = (newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]);
    };

    const handleCommentDelete = (commentId) => {
        setComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== commentId)
        );
    };

    const handleCommentEdit = (updatedComment) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.comment_id === updatedComment.comment_id ? updatedComment : comment
            )
        );
    };

    if (isLoading) return <Loading />;

    if (error) return <ErrorComponent message={error} />;

    return (
        <>
            <Card>
                <CardImg top width="100%" src={article[0].article_img_url} alt="banner" />
                <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                        {article[0].title}
                    </CardTitle>

                    <CardText
                        className="text-secondary mb-4"
                        style={{ fontSize: "0.75rem" }}
                    >
                        Created by: {article[0].author} on {article[0].created_at}
                    </CardText>
                    <CardText
                        className="text-secondary mb-4"
                        style={{ fontSize: "1rem" }}
                    >
                        {article[0].body}
                    </CardText>
                </CardBody>
                <CardBody>
                    <Votes article_id={article_id} votes={article[0].votes} />
                    <CardLink className="text-secondary mb-4"
                        style={{ fontSize: "0.75rem" }}>
                        {article[0].comment_count} Comments
                    </CardLink>
                    <CommentForm articleId={article_id} onCommentAdded={handleCommentAdded} />
                    {article[0].comment_count > 0 ? (
                        <CommentsList
                            initialComments={comments}
                            onCommentDelete={handleCommentDelete}
                            onCommentEdit={handleCommentEdit}
                        />
                    ) : null}

                </CardBody>
            </Card >
        </>
    )
}
