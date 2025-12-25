import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleUserRegister, handleUpdateProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPass = e.target.conPass.value;
    console.log(name, photo, email, password, conPass);

    // == password validation ==
    if (password !== conPass) {
      setErrorMessage("password didnot match");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("password must be 6 characters or more");
      return;
    }

    const hasUppercase = /[A-Z]/;
    if (!hasUppercase.test(password)) {
      setErrorMessage("give at least one uppercase");
      return;
    }

    const hasLowercase = /[a-z]/;
    if (!hasLowercase.test(password)) {
      setErrorMessage("give at least one lowercase");
      return;
    }

    const hasNumber = /[0-9]/;
    if (!hasNumber.test(password)) {
      setErrorMessage("give at least one number");
      return;
    }

    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
    if (!hasSymbol.test(password)) {
      setErrorMessage("give at least one symbol");
      return;
    }

    // == reset state stauts ==
    setErrorMessage("");

    try {
      // 1️⃣ Register the user
      await handleUserRegister(email, password);
      // 2️⃣ Update the profile
      await handleUpdateProfile(name, photo);
      // 3️⃣ Show a single success toast
      toast.success("registration and profile update done");
      // 4️⃣ Reset form
      e.target.reset();
      // 5️⃣ Navigate after everything is done
      navigate("/", { replace: true });
    } catch {
      // Handle any error from register or profile update
      setErrorMessage("failed to register and profile update");
    }

    // ========================================================================
    // ================ firebase auth new method problem=======================
    // ========================================================================
    // try {
    //   await handleUserRegister(email, password);
    //   toast.success("user register done");
    // } catch {
    //   setErrorMessage("user registation failed");
    //   return;
    // }

    // try {
    //   await handleUpdateProfile(name, photo);
    //   toast.success("profile updated");
    //   navigate("/", { replace: true });
    // } catch {
    //   setErrorMessage("profile not updated");
    //   return;
    // }
    // // finally reset form
    // e.target.reset();

    // ========================================================================
    // ==================== firebase auth old method ==========================
    // ========================================================================
    // handleUserRegister(email, password)
    //   .then(() => {
    //     // no need to manually setUser() state here
    //     toast.success("user register done");
    //     // === RESET FORM FIELDS ===
    //     e.target.reset();
    //     // === firebase function update profile ===
    //     handleUpdateProfile(name, photo)
    //       .then(() => {
    //         toast.success("profile updated");
    //       })
    //       .catch(() => {
    //         toast.error("profile not updated");
    //       });
    //   })
    //   .catch(() => {
    //     setErrorMessage("unable to register");
    //   });
    // .......................................................................
    // ........................................................................
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleRegisterForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Email"
          />

          <label className="label">Photo</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo Url"
          />

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

          <label className="label">Confirm Password</label>
          <input
            name="conPass"
            type="password"
            className="input"
            placeholder="Confirm Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      {errorMessage && (
        <p className="text-lg font-medium text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Register;
