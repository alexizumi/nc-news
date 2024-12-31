import React, { useEffect, useState } from 'react';
import { Button, CardLink } from 'reactstrap';
import { patchVotesByArticle } from '../api/api';
import ErrorComponent from './ErrorComponent';

export default function Votes({ article_id, votes }) {
    const [votesCount, setVotesCount] = useState(0)
    const [error, setError] = useState(null);
    const [hasVoted, setHasVoted] = useState(null)

    useEffect(() => {
        setVotesCount(votes);
    }, [votes, article_id]);

    const handleVotes = (value) => {
        const incVotes = { inc_votes: value };

        setVotesCount((currentVotesCount) => currentVotesCount + value);
        patchVotesByArticle(article_id, incVotes)
            .then((response) => {
                return response;
            }).catch((error) => {
                setVotesCount((currentVotesCount) => currentVotesCount - value)
                setError("Your vote was not successful. Please try again")
            })
    }
    if (error) return <ErrorComponent message={error} />;
    return (
        <>
            <CardLink onClick={() => handleVotes(1)}>
                <Button>
                    <i className="fa-regular fa-thumbs-up"></i>
                </Button>
            </CardLink>
            <CardLink onClick={() => handleVotes(-1)}>
                <Button>
                    <i className="fa-regular fa-thumbs-down"></i>
                </Button>
                {error ? <p>{error}</p> : null}
            </CardLink>
            <CardLink
                className="text-secondary mb-4"
                style={{ fontSize: "0.75rem" }}
            >
                {votesCount} Votes
            </CardLink>
        </>
    )
}
