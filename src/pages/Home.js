// React
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { fetchGames } from "../actions/GamesAction";
// Router
import { useLocation } from "react-router-dom";
// Components
import GameCard from "../components/GameCard";
import GameDetail from "../components/GameDetail";
// Styles and animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../styles/Animation";

const Home = () => {
  // location information
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];
  // Effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { popular, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList variants={fadeIn} animate="show" initial="hidden">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length !== 0 && (
          <>
            <h2>Searched Games</h2>
            <StyledGames>
              {searched.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  releaseDate={game.released}
                  backgroundImage={game.background_image}
                />
              ))}
            </StyledGames>
          </>
        )}
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
      </AnimateSharedLayout>
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
