import { Link, useHistory } from "react-router-dom";
export const P1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => history.push("/P1/detailA");
  return (
    <div>
      <h1>P1ページです</h1>
      <Link to={{ pathname: "/P1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/P1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
