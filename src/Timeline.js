import { useEffect } from "react";
import { Chrono } from "react-chrono";
import {useCallback} from "react"
const Timeline = () =>{

    useEffect(() => {
        setTimeout(() => {
            const listItems = document.querySelectorAll('.timeline-controls li');
            if(listItems.length > 0){
                const button = listItems[4].querySelector('button');
                if(button){
                    button.click();
                }
            }
        },500)
      }, []);

      useEffect(() => {
        setInterval(() => {
            const listItems = document.querySelectorAll('.timeline-controls li');
            if(listItems.length > 0){
                const button = listItems[4].querySelector('button');
                if(button){
                    button.click();
                }
            }
        },25500)
      },[])
 
    const dataSample = [
        {
          title: '2001',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name1",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2002',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name2",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2003',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name3",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2004',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name4",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2005',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name5",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2006',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name6",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2007',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name7",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2008',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name8",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        }, {
          title: '2009',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name9",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        },
        {
          title: '2010',
          porjectImage:"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
          projectName:"Project Name10",
          Projectdescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
           projectDetailsURL:"https://navyagunda.wixstudio.io/didar/projects/project-name1"
        }
      ]
    
      const handleLearn = (url) => {
        window.open(url,'_blank');
      }



      
    return(
          <Chrono
          items={dataSample}
          mode="HORIZONTAL"
          cardHeight={400}
          cardWidth="100%"
          mediaHeight={300}
          contentDetailsHeight={100}
          parseDetailsAsHTML
          slideShow
          slideItemDuration={2550}
        //   itemWidth={300}
          slideShowType="reveal"
        //   onItemSelected={(selected) => setItemSelected(selected.index)}
          timelinePointDimension={20}
         
        //   onScrollEnd={handleLoadMore}
        //   disableInteraction
          // cardPositionHorizontal="TOP"
        //   parseDetailsAsHTML
          buttonTexts={{
            first: 'Jump to First',
            last: 'Jump to Last',
            next: 'Next',
            previous: 'Previous',
          }}
          enableDarkToggle
          mediaSettings={{
            imageFit: 'cover',
          }}
          theme={{
            primary: '#FFFFFF',
            
          }}
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
    )
}
export default Timeline