import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  console.log(username);
  return (
    <>
      <div>
        <h1>Header</h1>
        <h1>Profile</h1>
        <h2>{username}</h2>
        <h1>Footer</h1>
      </div>
      <div></div>
    </>
  );
}

export default Profile;
