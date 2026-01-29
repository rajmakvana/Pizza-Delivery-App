import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        console.log(storedUser);
        if (storedUser) {
            // setUser(() => JSON.parse(storedUser));
        }
    }, []);

  const AuthUser = async (userData) => {
    console.log(userData.user.name)
    localStorage.setItem("user", userData.user.name);
    localStorage.setItem("token" , userData.token);
    setUser(userData.user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return <AuthContext.Provider value={{AuthUser , user , logout}}>
        {children}
    </AuthContext.Provider>;
};
