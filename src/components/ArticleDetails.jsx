import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle } from "reactstrap";
import { getArticleDetails, getCommentsByArticle } from '../api/api';
import CommentsList from './CommentsList';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';
import Votes from './Votes';

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
                    {article[0].comment_count > 0 ? (
                        <CommentsList comments={comments} />
                    ) : null}

                </CardBody>
            </Card >
        </>
    )
}
