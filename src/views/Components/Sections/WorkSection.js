import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                  <Button color="primary">Send Message</Button>
                </GridItem>
                
              </GridContainer>
             
            </GridContainer>
            <br/>
            <br/>
             
          </form>
        </GridItem>
      </GridContainer>
             <GridContainer>
               <GridItem xs={12} sm={12} md={12} >
                <h2 className={classes.title}>Reach Us & Reach To Us</h2>
                </GridItem>
                <GridItem xs={12} sm={12} md={7} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14713.854165155839!2d86.13722808724975!3d22.785281670710386!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                1s0x0%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20technology%20Jamshedpur!5e0!3m2!1sen!2sin!4v1572978867318!5m2!1sen!2sin" 
                width="100%" height="350" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>

                </GridItem>
                <GridItem xs={12} sm={12} md={5} >
                Person to contact : Details
                </GridItem>
              </GridContainer>
    </div>
  );
}
