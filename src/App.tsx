import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auxilliary from "./components/Auxilliary";
import Game from "./pages/Game";
import Header from "./components/Header";
import Help from "./pages/Help";
import Info from "./components/Info";
import Settings from "./pages/Settings";
import Statistics from "./components/Statistics";
import { ThemeContext } from "./context/ThemeContext";
import Fade from "./transitions/Fade";

function App() {
  // State
  const [screen, setScreen] = useState("Help");
  const [reSpin, setReSpin] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Context
  const themeContext = useContext(ThemeContext);

  // Re-render globe
  useEffect(() => {
    if (screen === "Game") setReSpin(true);
  }, [screen]);
  useEffect(() => {
    if (reSpin) setTimeout(() => setReSpin(false), 1);
  }, [reSpin]);

  // const pickScreen = () => {
  //   if (screen === "Help") {
  //     return (
  //       <Auxilliary screen={screen} setScreen={setScreen}>
  //         <Help />
  //       </Auxilliary>
  //     );
  //   } else if (screen === "Info") {
  //     return (
  //       <Auxilliary screen={screen} setScreen={setScreen}>
  //         <Info setScreen={setScreen} />
  //       </Auxilliary>
  //     );
  //   } else if (screen === "Settings") {
  //     return (
  //       <Auxilliary screen={screen} setScreen={setScreen}>
  //         <Settings />
  //       </Auxilliary>
  //     );
  //   } else {
  //     return <Game reSpin={reSpin} setShowStats={setShowStats} />;
  //   }
  // };

  const dark = themeContext.theme.nightMode ? "dark" : "";

  return (
    <div
      className={`max-w-xs sm:max-w-md md:max-w-2xl mx-auto 
      z-20 absolute top-0 bottom-0 left-0 right-0 block ${dark}`}
    >
      <Header setReSpin={setReSpin} setShowStats={setShowStats} />

      <Fade
        show={showStats}
        background="border-4 border-sky-300 dark:border-slate-700 bg-sky-100 
        dark:bg-slate-900 drop-shadow-xl 
      absolute z-10 top-32 w-full sm:w-fit inset-x-0 mx-auto py-6 px-6 rounded-md 
      space-y-2"
      >
        <Statistics setShowStats={setShowStats} />
      </Fade>
      <Routes>
        <Route path="/" element={<Help />} />
        <Route
          path="/game"
          element={<Game reSpin={reSpin} setShowStats={setShowStats} />}
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
