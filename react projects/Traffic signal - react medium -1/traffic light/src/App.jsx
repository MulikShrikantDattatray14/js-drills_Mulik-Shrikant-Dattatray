import React, { useState, useEffect } from "react";


const StraightLine = () => (
  <div style={{ border: '3px solid black', margin: '20px 0' , width :"100vw" }}></div>
);


const TrafficSignal = () => {
  const [redLight, setRedLight] = useState(false);
  const [yellowLight, setYellowLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  const [countdown, setCountdown] = useState(0);
  const [timerStage, setTimerStage] = useState(1);


  const startCountdown = (duration) => {
    setCountdown(duration);
    let currentCountdown = duration;

    const updateCountdown = () => {
      if (currentCountdown === 1) {
        handleStageTransition();
      } else {
        setCountdown(currentCountdown - 1);
        currentCountdown--;
        setTimeout(updateCountdown, 1000);
      }
    };

    setTimeout(updateCountdown, 1000);
  };



  const handleStageTransition = () => {
    switch (timerStage) {
      case 1:
        setTimerStage(2);
        break;
      case 2:
        setTimerStage(3);
        break;
      case 3:
        setTimerStage(1);
        break;
      default:
        break;
    }
  };

  const updateLights = () => {
    switch (timerStage) {
      case 1:
        setRedLight(true);
        setYellowLight(false);
        setGreenLight(false);
        startCountdown(5);
        break;
      case 2:
        setRedLight(false);
        setYellowLight(true);
        setGreenLight(false);
        startCountdown(3);
        break;
      case 3:
        setRedLight(false);
        setYellowLight(false);
        setGreenLight(true);
        startCountdown(2);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    updateLights();
  }, [timerStage]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "50px",
        height: "100vh",
      }}
    >
      <h1>Traffic Lights</h1>
      <StraightLine />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "40px",
          borderRadius: "10px",
          flexDirection: "column",
          background: "black",
          height: "30vh",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: redLight ? "red" : "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {redLight && countdown}
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: greenLight ? "green" : "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {greenLight && countdown}
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: yellowLight ? "yellow" : "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {yellowLight && countdown}
        </div>
      </div>
      <h2>{countdown} Seconds</h2>
    </div>
  );
};

export default TrafficSignal;
