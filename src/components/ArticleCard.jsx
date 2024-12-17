import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
const BANNER = "https://i.imgur.com/CaKdFMq.jpg";

export default function ArticleCard({ article }) {
    return (
        <>
            <Card>
                <CardImg top width="100%" src={article.article_img_url} alt="banner" />
                <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                        {article.title}
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
                        Created by: {article.author} on {article.created_at}

                    </CardText>
                    <Button color="primary" className="font-weight-bold">
                        <i className="fa-regular fa-pen-to-square"></i>
                    </Button>
                    <> </>
                    <Button color="danger" className="font-weight-bold">
                        <i className="fa-regular fa-trash-can"></i>
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}
