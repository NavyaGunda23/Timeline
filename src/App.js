import React, {  useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import "./App.css"
import Timeline from "./Timeline";

const App = () => {



  return (
    <div style={{ width: "90%", height: "max-content",margin:"auto" }} >
      <Timeline />
     {/* <Chrono
     enableOutline
          items={dataSample}
          mode="HORIZONTAL"
        
          cardWidth="100%"
          cardHeight={400}
          contentDetailsHeight={100}
          parseDetailsAsHTML
          hideControls={true}
          slideShow={true}
          slideItemDuration={100}
      //  slideShowType="reveal"
          theme={{
            primary: '#FFFFFF',
            
          }}
         
          // itemWidth={"300"}
       
          fontSizes={{
            cardSubtitle: '1rem',
            cardText: '1rem',
            cardTitle: '1.5rem',
            title: '1rem',
          }}
          classNames={{
            card: 'my-card',
            cardMedia: 'my-card-media',
            cardSubTitle: 'my-card-subtitle',
            cardText: 'my-card-text',
            cardTitle: 'my-card-title',
            controls: 'my-controls',
            title: 'my-title',
          }}
         
        >
          {dataSample.map((data,index) => (
            <div className="card-layout" >
              <div>
                <img src={data.porjectImage} className="project-image" alt="Project" />
              </div>
              <div>
                <h2 className="projectTitle">{data.projectName}</h2>
                <p className="projectDesc">{data.Projectdescription}</p>
                <div className="project-button">
                  <a onClick={() => handleLearn(data.projectDetailsURL)}>Learn More</a>
                  <hr />
                </div>
              </div>
            </div>
          ))}
        </Chrono> */}

      
    </div>
  );
};

export default App;
