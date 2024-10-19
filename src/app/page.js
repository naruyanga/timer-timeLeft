"use client";

import { useState } from "react";
import { useEffect } from "react";

const Page = () => {
  const [time, setTime] = useState(0);

  const addTime = () => {
    setTime((prev) => prev + 1);
  };

  const add15 = () => {
    setTime((prev) => prev + 15);
  };
  const minius15 = () => {
    setTime((prev) => prev - 15);
  };

  const sec = time % 60;
  const minute = Math.floor(time / 60);
  const formatTime = (time) => {
    if (time <= 9) return `0${time}`;
    return time;
  };

  useEffect(() => {
    const interval = setInterval(addTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
        backgroundColor: "black",
      }}
    >
      <div style={{ fontSize: "30px" }}>Timer</div>
      <div
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          border: "solid 2px grey",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        {formatTime(minute)} : {formatTime(sec)}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => add15()}>+15 sec</button>
        <button onClick={() => minius15()}>-15 sec</button>
      </div>
    </div>
  );
};
// export const Page = () => {
//   const [time, setTime] = useState(60);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         height: "100vh",
//         alignItems: "center",
//         backgroundColor: "black",
//       }}
//     >
//       <div style={{ fontSize: "45px", fontWeight: "bold", color: "white" }}>
//         {" "}
//         time left: {time}
//       </div>
//     </div>
//   );
// };
export default Page;
