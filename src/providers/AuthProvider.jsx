import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// == auth context should be outside component ==
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // function 01
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleUserSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // function 02
  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // function 03
  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // function 04
  const handleUserLogout = () => {
    return signOut(auth);
  };
  // function 05
  const handleUpdateProfile = (userName, userPhoto) => {
    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };

  const authInfo = {
    user,
    handleGoogleUserSignIn,
    handleUserRegister,
    handleUserLogin,
    handleUserLogout,
    handleUpdateProfile,
  };

  // function 06
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
