import React from 'react'
import { Card, CardText } from 'reactstrap'

export default function
    ({ comment }) {
    return (
        <div>
            <Card>
                <CardText className="text-secondary mb-4"
                    style={{ fontSize: "1rem" }}>
                    {comment.body}
                </CardText>
                <CardText
                    className="text-secondary mb-4"
                    style={{ fontSize: "0.75rem" }}
                >
                    Created by {comment.author} at {comment.created_at}
                </CardText>
            </Card>
        </div>
    )
}
