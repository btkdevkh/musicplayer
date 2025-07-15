import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { error, login } = useLogin();

  const [dataInput, setDataInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (dataInput.email === "") return;
    if (dataInput.password === "") return;

    login(dataInput.email, dataInput.password);
  };

  return (
    <div className="main-bg">
      <form onSubmit={handleSubmit}>
        <h4>
          <i className="fas fa-guitar fa-lg"></i>{" "}
          <i className="fas fa-user-circle fa-lg"></i>
        </h4>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dataInput.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={dataInput.password}
          onChange={handleChange}
        />
        <input type="submit" value="SUBMIT" />

        <br />
        {error && error}

        <Link
          to={"/"}
          style={{
            color: "#20232a",
          }}
        >
          <i className="fas fa-home"></i>
        </Link>
      </form>
    </div>
  );
};

export default Login;
