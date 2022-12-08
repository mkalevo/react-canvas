import { useState, useEffect, useRef } from "react";
import React from "react";

//täyte aluksi background color
//luo liikkuma-alue ja maala se halutun väriseksi
//Luo pallo
//Opetelle liikuttamaan palloa (näppäimistö, kosketusnäyttö, hiiri)
//rajaa pallon liike alueen sisälle

// https://www.youtube.com/watch?v=K8HICLm-Jj0
//luodaan tyyppi joka annetaan objektille canvas
type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & { draw: (context: CanvasRenderingContext2D) => void };
//ylemmän draw:n avulla voidaan lisätä piirrettäviä alueita?

const Canvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const movementArea: string[] = [
    ["black", "black", "black", "black", "black"],
    ["black", "grey", "grey", "black", "black"],
    ["black", "black", "grey", "black", "black"],
    ["black", "black", "grey", "grey", "black"],
    ["black", "black", "grey", "black", "black"],
    ["black", "grey", "grey", "black", "black"],
    ["black", "black", "grey", "black", "black"],
    ["black", "black", "grey", "grey", "black"],
    ["black", "black", "grey", "black", "black"],
    ["black", "grey", "grey", "black", "black"],
    ["black", "black", "black", "black", "black"]
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) throw new Error("Could not get canvas");
    const context = canvas.getContext("2d");
    if (context == null) throw new Error("Could not get context");

    context.fillStyle = "#000000";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    movementArea.map((row) => row.map((grid: string[]) => 
    console.log(grid)
    if(grid = "black"){
      console.log("GridisBlack")
    } else{
      console.log("Greeen as grid")
    }
    ));

    draw(context);
  }, [draw]);

  return <canvas width={props.width} height={props.height} ref={canvasRef} />;
};

export default Canvas;
