import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import DateConverter from '../utils/DateConverter';

export default function ArticleCard({ article }) {
    return (
        <>
            <li className='articles-grid'>
                <Card>
                    <Link to={`/articles/${article.article_id}`}>
                        <CardImg top width="100%" src={article.article_img_url} alt="banner" />
                    </Link>
                    <CardBody>
                        <CardTitle className="h5 mb-2 pt-2 font-weight-bold text-secondary">
                            <Link to={`/articles/${article.article_id}`}>
                                {article.title}
                            </Link>
                        </CardTitle>
                        <CardSubtitle
                            className="text-secondary mb-3 font-weight-light text-uppercase"
                            style={{ fontSize: "0.8rem" }}
                        >
                            Topic: {article.topic}
                        </CardSubtitle>
                        <CardText
                            className="text-secondary mb-4"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Created by: {article.author} on {DateConverter(article.created_at)}

                        </CardText>
                        <Link to={`/articles/${article.article_id}`}>
                            <i className="fa-regular fa-eye"></i>
                        </Link>
                        <> </>
                        <Link>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                        <> </>
                        <Link>
                            <i className="fa-regular fa-trash-can" alt="delete article"></i>
                        </Link>
                    </CardBody>
                </Card>
            </li>

        </>
    )
}
