import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const GameDetail = () => {
  const history = useHistory();
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetail
  );
  // Handler
  const exitGameDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  return (
    <>
      {!isLoading && (
        <StyledCardShadow className="shadow" onClick={exitGameDetailHandler}>
          <StyledDetail>
            <StyledStats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatform>
                  {game.platforms.map((data) => {
                    return <h3 key={data.platform.id}>{data.platform.name}</h3>;
                  })}
                </StyledPlatform>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img src={game.background_image} alt={game.name} />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description}</p>
            </StyledDescription>
            <StyledGallery>
              {screenshots.results.map((screenshot) => {
                return (
                  <img
                    key={screenshot.id}
                    src={screenshot.image}
                    alt={game.name}
                  />
                );
              })}
            </StyledGallery>
          </StyledDetail>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  color: black;
  position: absolute;
  left: 10%;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 60vh;
    object-fit: cover; */
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0;
`;

const StyledGallery = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
