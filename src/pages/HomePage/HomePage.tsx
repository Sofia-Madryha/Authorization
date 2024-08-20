import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const logOut = () => {
    cookies.remove("token");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div>HomePage</div>
      <button onClick={logOut}>log out</button>
    </div>
  );
};

export default HomePage;
