import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password2"
          placeholder="Confirm"
          name="password2"
          autoComplete="off"
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
