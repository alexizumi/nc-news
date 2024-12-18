import React from 'react';
import { Card, CardTitle } from 'reactstrap';

export default function CommentsList({ comments }) {
    return (
        <ul>
            <div>Comments</div>
            {comments.map((comment) => {
                return (
                    <Card>
                        <CardTitle>
                            {comment.body}
                        </CardTitle>
                    </Card>
                )
            })}
        </ul>
    )
}
