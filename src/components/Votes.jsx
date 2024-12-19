import React, { useEffect, useState } from 'react';
import { Button, CardLink } from 'reactstrap';
import { patchVotesByArticle } from '../api/api';

export default function Votes({ article_id, votes }) {
    const [votesCount, setVotesCount] = useState(0)

    useEffect(() => {
        console.log(votes, article_id, 'Votes and ID')
        setVotesCount(votes);
    }, [votes, article_id]);

    const handleVotes = (value) => {
        const incVotes = { inc_votes: value };
        console.log('incVotes = ', incVotes, 'article_id = ', article_id)
        setVotesCount((currentVotesCount) => currentVotesCount + value);
        console.log(article_id, '<<< article_id in handleVotes')
        patchVotesByArticle(article_id, incVotes)
            .then((response) => {
                return response;
            })
    }
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
