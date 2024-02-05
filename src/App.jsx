import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-700">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
