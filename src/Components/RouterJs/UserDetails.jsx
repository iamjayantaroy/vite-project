import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Details about User {userId}</div>;
};

export default UserDetails;
