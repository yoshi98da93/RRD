import { Link } from "react-router-dom";

export const P2 = () => {
  return (
    <div>
      <h1>P2ページです</h1>
      <Link to="/P2/999">URL Parameter</Link>
      <br />
      <Link to="/P2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
