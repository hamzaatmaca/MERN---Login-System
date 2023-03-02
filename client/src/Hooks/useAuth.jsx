import jwt_decode from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("ai.token");

  if (token) {
    var decoded = jwt_decode(token);

    return { loginStatus: true, userInfo: decoded };
  } else {
    return false;
  }
};

export default useAuth;
