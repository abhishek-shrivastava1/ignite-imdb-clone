import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentPopularGames } from "./actions/GamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentPopularGames());
  }, []);
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
