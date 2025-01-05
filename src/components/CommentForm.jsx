// /src/components/CommentForm.jsx
import { useContext, useEffect, useState } from 'react';
import { Alert, Button, Form } from "react-bootstrap";
import { postNewComment } from '../api/api';
import { UserContext } from '../context/User';

const CommentForm = ({ articleId, initialComment = '', onEditComplete, onCommentAdded }) => {
    const { user } = useContext(UserContext);
    const [comment, setComment] = useState(initialComment);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setComment(initialComment);
    }, [initialComment]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;
        setIsSubmitting(true);
        setError(null);

        postNewComment(articleId, user.username, comment.trim())
            .then(newComment => {
                setComment('');
                if (onEditComplete) {
                    onEditComplete(newComment);
                }
                if (onCommentAdded) {
                    onCommentAdded(newComment);
                }
            })
            .catch(err => {
                setError('Error submitting your comment. Please try again');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleCancel = () => {
        if (onEditComplete) {
            onEditComplete();
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3 mt-4" style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
            <h5 className="mb-3">Leave a Comment</h5>
            <Form.Group controlId="commentTextarea" className="mb-3">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your comment here..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={isSubmitting}
                    isInvalid={!!error}
                />
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </Form.Group>
            <Button
                variant="secondary"
                onClick={handleCancel}
                disabled={isSubmitting}
            >
                Cancel
            </Button>
            <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting || !comment.trim()}
                className="w-100"
            >
                {isSubmitting ? "Submitting..." : "Submit Comment"}
            </Button>
            {error && (
                <Alert variant="danger" className="mt-3">
                    {error}
                </Alert>
            )}
        </Form>
    );
};

export default CommentForm;