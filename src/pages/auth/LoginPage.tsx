import { login } from "../../service/authService";

export const LoginPage = () => {
  const handleLogin = async () => {
    const res = await login({ username: "kminchelle", password: "0lelplR" });

    if (res) {
      console.log("res", res);

      sessionStorage.setItem("token", res.token);
    }
  };

  handleLogin();

  return <div>login</div>;
};

export default LoginPage;
