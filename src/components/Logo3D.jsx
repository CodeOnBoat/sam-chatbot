import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export const Logo3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/spQ4uyjcmb8OClmm/scene.splinecode");
    }
  }, [canvasRef]);

  return (
    <div className="" style={{ height: "20em", width: "20em" }}>
      <canvas id="canvas3d" ref={canvasRef}></canvas>
    </div>
  );
};
