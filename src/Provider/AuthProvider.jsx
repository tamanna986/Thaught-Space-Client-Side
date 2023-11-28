import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// sign in with google

const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth , googleProvider)
}



 // observe user

     useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
    setUser(currentUser)
    setLoading(false);
    console.log('setted user is' , currentUser)
     })
     return () =>{
        unSubscribe();
     }

},[])

    // log out
    const logOut = () =>{
        
        return signOut(auth)
      }

    //   update user profile 
      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const authInfo ={
      user,
      loading,
      createUser,
      updateUserProfile,
      signIn,
      signInWithGoogle,
      logOut

    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;