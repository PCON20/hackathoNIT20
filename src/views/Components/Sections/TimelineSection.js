import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CloseIcon from '@material-ui/icons/Close';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TimelineSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Timeline</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            
              <div style={{backgroundColor:"#3333331c", width:'100%'}}>
              {/* <div style={{marginTop:'90px', marginBottom:'50px', textAlign:'center'}}>
                  <h1>Achievements</h1>
              </div> */}
            <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2019"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              <h3 className="vertical-timeline-element-title">NIT CONCLAVE</h3>
              <h4 className="vertical-timeline-element-subtitle">Rourkela</h4>
              <p>
              NIT Conclave is  a three day extravaganza which includes competitions such as Hackathon, Coding Contests, Startup Hunt, Quizzes, Institute Presentation,etc for the participating NITs.
    
    NIT Jamshedpur secured 5th position last year and aim to excel more in the  years to come.
    
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="March 2019"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              <h3 className="vertical-timeline-element-title">Smart India Hackathon : Software</h3>
              <h4 className="vertical-timeline-element-subtitle">Bhubaneswar</h4>
              <p>
              SIH is a nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives and is the country’s largest open innovation model wherein more than 2 lakh ideas compete against each other.
    
    Team BYTEBUCKET-1111 from NIT Jamshedpur, stood “National Champions”, where they developed a solution for the Road and Highway Ministry Of India. The winners were awarded with a huge cash prize and a golden opportunity to work with the Government of India.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="November 2018"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              <h3 className="vertical-timeline-element-title">Axis Bank Hackathon</h3>
              <h4 className="vertical-timeline-element-subtitle"> </h4>
              <p>
              A hackathon is conducted by Axis Bank every year to help people provide ideas on improvement of the banking system. 
    
    Team ILLUMINATI from NIT Jamshedpur secured 5th rank nationwide where they designed a signature forgery detection system and OCR- alternative model for image to text conversion.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2017"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              <h3 className="vertical-timeline-element-title">ACM ICPC </h3>
              <h4 className="vertical-timeline-element-subtitle"> </h4>
              <p>
              TEAM -  AVILU
              Secured – 48th rank in IIT-KGP REGIONALS and 58th rank in KOLKATA-KANPUR Zone.
    
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2017"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              <h3 className="vertical-timeline-element-title">ACM ICPC</h3>
              <h4 className="vertical-timeline-element-subtitle"> </h4>
              <p>
              TEAM - 3 TORTOISES
    Secured 18th rank in GWALIOR REGIONALS and 29th rank in AMIRITAPURI REGIONALS.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2015"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              <h3 className="vertical-timeline-element-title">ACM ICPC</h3>
              <h4 className="vertical-timeline-element-subtitle">Kolkata</h4>
              <p>
              Students of NIT Jamshedpur(Batch 2k13) secured 7th rank in ACM-ICPC REGIONALS, KOLKATA region.The seniors were Shubham Vishwakarma, Shubham Singh and Shubhendu Shisir.
    Kolkata Region Rank-19
    Amiritapuri Region Rank-49
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<CloseIcon />}
            />
          </VerticalTimeline>     
          </div> 
        
            
            
            
            
            
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
