import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../firebase/firebase.config";
// == auth context should be outside component ==
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
    handleGoogleUserSignIn,
    handleUserRegister,
    handleUserLogin,
    handleUserLogout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
