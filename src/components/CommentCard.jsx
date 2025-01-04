// /src/components/CommentCard.jsx

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'reactstrap';
import { deleteComment } from '../api/api';
import { UserContext } from '../context/User';
import DateConverter from '../utils/DateConverter';
import CommentForm from './CommentForm';

export default function CommentCard({ comment, article_id, onDelete, onEdit }) {
    const { user } = useContext(UserContext);
    const [isEditing, setEditing] = useState(false);

    const handleEditComplete = (updatedComment) => {
        setEditing(false);
        onEdit(updatedComment);
        console.log("Updated Comment:", updatedComment);
    };

    const handleDeleteComment = (commentId) => {
        deleteComment(commentId)
            .then(() => {
                onDelete(commentId);
            })
            .catch(error => {
                console.error('Error deleting comment:', error);
            });
    };

    const viewTemplate = (
        <div>
            <Card>
                <ListGroup variant="flush" className="text-secondary mb-4" style={{ fontSize: "0.75rem" }}>
                    {comment.body}
                    <br />
                    <br />
                    Created by {comment.author} at {DateConverter(comment.created_at)}
                    <br />
                    <br />
                    {comment.author === user.username ?
                        <div className="button-container">
                            <Link onClick={() => setEditing(true)}>
                                <i className="fa-regular fa-pen-to-square" alt='Edit comment'></i>
                            </Link>
                            <Link onClick={() => handleDeleteComment(comment.comment_id)}>
                                <i className="fa-regular fa-trash-can" alt="delete comment"></i>
                            </Link></div>
                        : null}
                </ListGroup>
            </Card>
        </div>
    );

    return (
        <>
            {isEditing ? (
                <CommentForm
                    articleId={article_id}
                    initialComment={comment.body}
                    onEditComplete={handleEditComplete}
                />)
                : viewTemplate}
        </>
    )
}