const Register = () => {
  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPass = e.target.conPass.value;
    console.log(name, photo, email, password, conPass);
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
    </div>
  );
};

export default Register;
