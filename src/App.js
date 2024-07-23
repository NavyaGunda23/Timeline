import React, {  useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import "./App.css"


const App = () => {



  const dataSample = [
    {
      title: '2001',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2002',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2003',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2004',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2005',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2006',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2007',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2008',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    }, {
      title: '2009',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    },
    {
      title: '2010',
      porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      projectName:"Project Name",
      Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
       projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
    }
  ]


  const [currentItemIndex, setCurrentItemIndex] = useState(0);

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % dataSample.length);
    }, 1000); // 4.5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [dataSample.length]);

useEffect(() =>{
  console.log("currentItemIndex",currentItemIndex)
},[currentItemIndex])
 
const handleLearn = (url) => {
  window.parent.location.href = url;
 
}

  return (
    <div style={{ width: "90%", height: "max-content",margin:"auto" }} >
     <Chrono
     enableOutline
          items={dataSample}
          mode="HORIZONTAL"
        
          cardWidth="100%"
          cardHeight={400}
          contentDetailsHeight={100}
          parseDetailsAsHTML
          hideControls={true}
          slideShow
       
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
        </Chrono>

      
    </div>
  );
};

export default App;
