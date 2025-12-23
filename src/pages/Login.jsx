import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { handleGoogleUserSignIn } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handleGoogleUserSignInClick = () => {
    handleGoogleUserSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
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
