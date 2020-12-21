import { useDispatch, useSelector } from "react-redux";
import { fetchGameDetailsById } from "../actions/GameDetailsAction";
import { useEffect } from "react";

const GameDetail = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGameDetailsById(id));
  }, [dispatch, id]);
  const gameDetail = useSelector((state) => state.gameDetail.game);
  return (
    <div>
      Game detail
      <pre>{JSON.stringify(gameDetail, 0, 2)}</pre>
    </div>
  );
};

export default GameDetail;
