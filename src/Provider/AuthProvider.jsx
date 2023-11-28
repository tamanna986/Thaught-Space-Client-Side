import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);
 

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


    const authInfo ={
      user,
      loading,
      createUser
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;