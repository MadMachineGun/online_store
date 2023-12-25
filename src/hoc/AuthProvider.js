import {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext(null);

export default function AuthProvider ({children}) {
    const [token, setToken] = useState('');

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, []);

    const signIn = (newToken, callback = () => {}) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        callback();
    };

    const signOut = (callback = () => {}) => {
        localStorage.removeItem('token');
        setToken(null);
        callback();
    };

    const value = {token, signIn, signOut};

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}