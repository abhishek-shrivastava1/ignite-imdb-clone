// Styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Actions
import { fetchGameDetailsById } from "../actions/GameDetailsAction";
// Redux
import { useDispatch } from "react-redux";
// Router
import { Link } from "react-router-dom";
// Utils
import { getResizedImageUrl } from "../utils/CommonUtils";
import { popUp } from "../styles/Animation";

const GameCard = ({ id, name, releaseDate, backgroundImage }) => {
  const dispatch = useDispatch();
  // Handler
  const fetchGameDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchGameDetailsById(id));
  };
  return (
    <StyledCard
      layoutId={id.toString()}
      onClick={fetchGameDetailsHandler}
      variants={popUp}
      animate="show"
      initial="hidden"
    >
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`h3 ${id.toString()}`}>{name}</motion.h3>
        <p>{releaseDate}</p>
        <motion.img
          layoutId={`imageId ${id.toString()}`}
          src={getResizedImageUrl(backgroundImage, 640)}
          alt={name}
        />
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
