import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          autoComplete="off"
          value={formValues.password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Register
        </button>
        <Link className="link mt-5" to="/auth/login">
          Already regitered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
