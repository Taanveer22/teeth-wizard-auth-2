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
  const [loading, setLoading] = useState(true);

  // function 01
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleUserSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // function 02
  const handleUserRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // function 03
  const handleUserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // function 04
  const handleUserLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // function 05
  const handleUpdateProfile = (userName, userPhoto) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };
  // === AuthContext data passed by value ====
  const authInfo = {
    user,
    loading,
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
      console.log(currentUser);
      // after load user set loading state false
      setLoading(false);
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
