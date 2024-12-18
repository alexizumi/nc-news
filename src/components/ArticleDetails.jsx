import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { getArticleDetails, getCommentsByArticle } from '../api/api';
import CommentsList from './CommentsList';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';

export default function ArticleDetails() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        getArticleDetails(article_id)
            .then((article) => {
                setArticle(article);
            })
        getCommentsByArticle(article_id)
            .then((comments) => {
                setComments(comments);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(true);
            })
    }, []);

    if (isLoading) return <Loading />;

    if (error) return <ErrorComponent message={error.message} />;

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
                    <CardText
                        className="text-secondary mb-4"
                        style={{ fontSize: "0.75rem" }}
                    >
                        {article[0].comment_count} Comments
                    </CardText>
                    <CommentsList comments={comments} />
                </CardBody>
            </Card>
        </>
    )
}
