import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchGames } from "../actions/GamesAction";
import GameCard from "../components/GameCard";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/GameDetail";

const Home = () => {
  // location information
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];
  // Effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { popular, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcomingGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            releaseDate={game.released}
            backgroundImage={game.background_image}
          />
        ))}
      </StyledGames>

      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            releaseDate={game.released}
            backgroundImage={game.background_image}
          />
        ))}
      </StyledGames>

      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            releaseDate={game.released}
            backgroundImage={game.background_image}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
