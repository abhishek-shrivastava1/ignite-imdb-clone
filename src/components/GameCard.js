import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchGameDetailsById } from "../actions/GameDetailsAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const GameCard = ({ id, name, releaseDate, backgroundImage }) => {
  const dispatch = useDispatch();
  // Handler
  const fetchGameDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchGameDetailsById(id));
  };
  return (
    <StyledCard onClick={fetchGameDetailsHandler}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{releaseDate}</p>
        <img src={backgroundImage} alt={name} />
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  text-align: center;
  border-radius: 1rem;
  /* padding: 1rem; */
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default GameCard;
