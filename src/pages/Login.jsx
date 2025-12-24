import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { handleGoogleUserSignIn, handleUserLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // Capture the form element to use inside the promise
    const form = e.target;

    // == reset state status ===
    setErrorMessage("");

    // === firebase log in ===
    handleUserLogin(email, password)
      .then((result) => {
        // no need to manually setUser() state here
        toast.success(result.user.email);
        // === RESET FORM FIELDS ===
        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleUserSignInClick = () => {
    handleGoogleUserSignIn()
      .then((result) => {
        // no need to manually setUser() state here
        toast.success(result.user.email);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <form onSubmit={handleLoginForm}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        {errorMessage && (
          <p className="text-lg font-medium text-red-500">{errorMessage}</p>
        )}

        <div className="flex items-center gap-2 mt-4">
          <h1>Don't have an account?</h1>
          <Link to="/register" className="btn btn-sm btn-primary">
            Register Now
          </Link>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handleGoogleUserSignInClick}
            className="btn btn-warning"
          >
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
