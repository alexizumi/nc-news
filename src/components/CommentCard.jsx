import React from 'react'
import { Card, ListGroup } from 'reactstrap'
import DateConverter from '../utils/DateConverter'

export default function
    ({ comment }) {

    return (
        <div>
            <Card>
                <ListGroup variant="flush" className="text-secondary mb-4" style={{ fontSize: "0.75rem" }}>
                    {comment.body}
                    <br />
                    <br />
                    Created by {comment.author} at {DateConverter(comment.created_at)}
                </ListGroup>
            </Card>
        </div>
    )
}
