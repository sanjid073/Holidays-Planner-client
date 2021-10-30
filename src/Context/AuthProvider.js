import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';
import useOffers from '../Hooks/useOffers';




export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const firebaseContext = UseFirebase();
    const {offers, setOffers} = useOffers()
    
    const data = {firebaseContext, offers, setOffers};
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;