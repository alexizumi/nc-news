// /src/components/LoginUser.jsx

import { useContext, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from "../context/User";

const LoginUser = () => {
    const { user, setUser } = useContext(UserContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const users = [
        {
            "username": "Guest",
            "name": "guest",
            "avatar_url": "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg"
        },
        {
            "username": "tickle122",
            "name": "Tom Tickle",
            "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
        },
        {
            "username": "grumpy19",
            "name": "Paul Grump",
            "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
        },
        {
            "username": "happyamy2016",
            "name": "Amy Happy",
            "avatar_url": "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
        },
        {
            "username": "cooljmessy",
            "name": "Peter Messy",
            "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002"
        },
        {
            "username": "weegembump",
            "name": "Gemma Bump",
            "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553"
        },
        {
            "username": "jessjelly",
            "name": "Jess Jelly",
            "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
        }
    ]

    const loginUser = () => {
        const nextIndex = (currentIndex + 1) % users.length;
        setCurrentIndex(nextIndex);
        setUser(users[nextIndex]);
    };

    return (
        <>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: {user.username}
                </Navbar.Text>
            </Navbar.Collapse>
            <Nav.Link>
                <button onClick={loginUser} className={`button__${user.username}`}>
                    Login
                </button>
            </Nav.Link>
        </>
    );
};

export default LoginUser;