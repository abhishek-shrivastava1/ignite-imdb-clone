import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fetchGameDetailsById,
  fetchGameScreenshotsById,
} from "../actions/GameDetailsAction";
import { useDispatch } from "react-redux";

const GameCard = ({ id, name, releaseDate, backgroundImage }) => {
  const dispatch = useDispatch();
  // Handler
  const fetchGameDetailsHandler = () => {
    dispatch(fetchGameDetailsById(id));
    dispatch(fetchGameScreenshotsById(id));
  };
  return (
    <StyledCard onClick={fetchGameDetailsHandler}>
      <h3>{name}</h3>
      <p>{releaseDate}</p>
      <img src={backgroundImage} alt={name} />
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  text-align: center;
  border-radius: 1rem;
  /* padding: 1rem; */
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default GameCard;
