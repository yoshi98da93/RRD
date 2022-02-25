import { useLocation, useHistory } from "react-router-dom";

export const P1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();

  const onClickBack = () => history.push("/P1");
  return (
    <div>
      <h1>P1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
