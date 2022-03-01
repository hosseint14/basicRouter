import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="/welcome/new-user">new user</Link>
    </section>
  );
};

export default Welcome;
