import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";


const App = () => {
  const items = [
    {
      title: "January 2020",
      cardTitle: "Card 1",
      cardSubtitle: "Subtitle 1",
      cardDetailedText: "Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2"
    },
    {
      title: "February 2020",
      cardTitle: "Card 2",
      cardSubtitle: "Subtitle 2",
      cardDetailedText: "Detailed text 2Detailed text 2Detailed text 2Detailed text 2Detailed text 2"
    },
    {
      title: "March 2020",
      cardTitle: "Card 3",
      cardSubtitle: "Subtitle 3",
      cardDetailedText: "Detailed text 3"
    }
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // useEffect(() => {
  //   console.log("Setting up interval for slideshow");
  //   const intervalId = setInterval(() => {
  //     console.log("Changing active item index");
  //     setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  //   }, 4500); // 4.5 seconds

  //   return () => {
  //     console.log("Clearing interval");
  //     clearInterval(intervalId); // Cleanup interval on component unmount
  //   };
  // }, [items.length]);

  return (
    <div style={{ width: "100%", height: "500px" }}>
     <Chrono
          items={items}
          mode="HORIZONTAL"
        
          cardWidth="100%"
          cardHeight={300}
          contentDetailsHeight={100}
          fontSizes={{
            title: "1rem"
          }}
          slideShow
          hideControls={true}
        />
    </div>
  );
};

export default App;
