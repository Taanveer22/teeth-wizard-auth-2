import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// == auth context should be outside component ==
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleUserSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleUserLogout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    handleGoogleUserSignIn,
    handleUserRegister,
    handleUserLogin,
    handleUserLogout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // If currentUser exists, it sets user
      //  if not exists, it sets null
      setUser(currentUser);
      console.log("Current User in AuthProvider :", currentUser);
    });

    return () => {
      unSubscribe();
    };
    // no need dependency array here
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
