import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { flushSync } from "react-dom";
export const AuthContext = createContext(null);
const googleProvider =new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [cards, setCards] = useState();
    const googleUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const facebookUser = () => {
        setLoading (true);
        return signInWithPopup(auth, facebookProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)  
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    const login =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }
    useEffect (()=>{
        fetch("/luxury_data.json")
        .then(res => res.json())
        .then(data=> setCards(data))
    }, []);

    const updateUserProfile=(name, image) => {
        return updateProfile(auth.currentUser, {
             displayName: name, 
             photoURL: image
           })
     }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user on the state", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [reload])

    const authInfo = {
        user,
        createUser,
        logOut,
        login,
        loading,
        googleUser,
        facebookUser,
        cards,
        updateUserProfile,
        setReload
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
