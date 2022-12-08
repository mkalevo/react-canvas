import react from "react";
import Canvas from "./Canvas";
import Header from "./Header";

const App = () => {
  const drawArt = (context: CanvasRenderingContext2D) => {
    context.fillStyle = "green";
    context.fillRect(0, 0, 100, 120);
    context.strokeRect(100, 120, 50, 50);
  };

  return (
    <div className="App">
      <Header />
      <Canvas draw={drawArt} width={window.innerWidth} height={400} />
    </div>
  );
};

export default App;
