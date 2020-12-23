// Redux
import { useSelector } from "react-redux";
// Router
import { useHistory } from "react-router-dom";
// Styles and animations
import { motion } from "framer-motion";
import styled from "styled-components";
// Utils
import { getResizedImageUrl } from "../utils/CommonUtils";
// Images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import gameepad from "../img/gamepad.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  // function
  const getPlatformImage = (platform) => {
    switch (platform) {
      case "Xbox Series S/X":
        return xbox;
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gameepad;
    }
  };
  // stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} alt="full start" />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt="empty start" />);
      }
    }
    return stars;
  };
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
          <StyledDetail layoutId={pathId}>
            <StyledStats>
              <div className="rating">
                <motion.h3 layoutId={`h3 ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatform>
                  {game.platforms.map((data) => {
                    return (
                      <img
                        alt={data.platform.name}
                        key={data.platform.id}
                        src={getPlatformImage(data.platform.name)}
                      />
                    );
                  })}
                </StyledPlatform>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                src={getResizedImageUrl(game.background_image, 1280)}
                alt={game.name}
                layoutId={`imageId ${pathId}`}
              />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description}</p>
            </StyledDescription>
            <StyledGallery>
              {screenshots.results.map((screenshot) => {
                return (
                  <img
                    key={screenshot.id}
                    src={getResizedImageUrl(screenshot.image, 1280)}
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
  z-index: 5;
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
  z-index: 10;
  left: 10%;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    margin-left: 3rem;
    width: 2.5rem;
    height: 2.5rem;
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
