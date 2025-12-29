import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <h1 className="text-2xl font-medium text-center mt-3">User Profile Data</h1>
        <figure className="px-10 pt-10">
          <img src={user?.photoURL} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
