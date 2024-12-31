// /src/context/User.jsx

import { createContext, useState } from "react";

export const UserContext = createContext();

const defaultUser = {
  username: "Guest",
  name: "guest",
  avatar_url: "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};