import React from "react";
import { useState } from "react";
import './TermsAndCondition.css';


function TermsAndCondition(props){
    var TAC=props.TAC

    // const {LastUpdateddate,description}=TAC;
    return(
        <div className="ConditionsContainer">
        <div className="Home">
        <a href="Home" style={{marginRight:"10px"}}><h5>Home</h5></a>  
       <a href="services" ><h5>Customer Services</h5></a>
       <a href="Terms&Conditions"><h5>Terms & Conditions</h5></a>
       </div>
       <div className="terms">

            <h1 className="condition"><i>Terms & Conditions</i></h1>
            <div className="date">
                <p>LAST UPDATED: August 05, 2023</p>
            </div>
            <div className="TermsandConditions">
            <p>
                These Terms & Conditions govern your access to and use of the Total Wine & More website and webpages, mobile site and/or app (the "Sites"). 
                The Sites are operated by Retail Services & Systems, Inc. for certain affiliates that operate under the Total Wine & More brands and associated brands in various states (hereafter, "Total Wine"). 
                When using the Sites, please be sure to use the "My Location" button at top righthand corner of the landing page, 
                which will allow you to obtain Store details by state as well as the products sold in those states.
                </p>

            </div> 
            <div>
                <p>
                These Terms & Conditions apply to all persons who visit any of the Sites ("Visitors"), regardless of a Visitor’s purpose, use, or amount of use. 
                In these Terms, "you" and "your" refer to each Visitor and his or her agents (unless the context requires otherwise), 
                and "we", "us" and "our" refer collectively to Total Wine.
                </p>
            </div> 
            <div>
                <p>
                Accessing the Sites, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms & Conditions,
                our Privacy Policy, and any additional terms and conditions that are referenced herein or that otherwise may apply to specific sections of the Site, or to 
                products and services that we make available to you through the Site (all of which are deemed part of these Terms & Conditions). These Terms & Conditions are
                in addition to any other terms and conditions that may apply to purchases you make in-Store (as opposed to online) at a retail location.
                </p>
            </div>          
            <div>
                <p>
                We reserve the right to change these Terms & Conditions or to impose new terms and conditions on use of the Site, 
                from time to time, in which case we will post the revised Terms & Conditions on this website and update the "Last Updated"
                date to reflect the date of the changes. By continuing to use the Sites after we post any such changes or notify you of any material changes,
                you accept the Terms & Conditions, as modified.
                </p>
            </div>
            <div>
                <p>
                We also reserve the right to deny access to the Site or any features of the Site to anyone who violates these Terms & Conditions or who, in our sole judgment, 
                interferes with the ability of others to enjoy our Sites or infringes the rights of others.
                </p>
            </div>
            <div>
           <p>
            PLEASE READ THESE TERMS CAREFULLY. THESE TERMS INCLUDE AN AGREEMENT TO MANDATORY AND BINDING ARBITRATION, 
            WHICH MEANS THAT YOU AGREE TO SUBMIT ANY DISPUTE RELATED TO YOUR USE OF ANY OF THE SITES TO BINDING INDIVIDUAL
            ARBITRATION RATHER THAN PROCEED IN COURT. THE DISPUTES/ARBITRATION PROVISION ALSO INCLUDES A CLASS ACTION WAIVER,
            WHICH MEANS THAT YOU AGREE TO PROCEED WITH ANY DISPUTE INDIVIDUALLY AND NOT AS PART OF A CLASS ACTION. THIS AGREEMENT ALSO INCLUDES A JURY WAIVER. 
            DO NOT ACCESS OR USE ANY OF THE SITES IF YOU DO NOT AGREE TO THESE TERMS IN THEIR ENTIRETY.
            </p>
            </div>
            <div>
                <p>
                THE SITES ARE ONLY INTENDED FOR VIEWING IN THE UNITED STATES IF YOU ARE 21 YEARS OF AGE OR OLDER. 
                If you do not meet these requirements, you are not authorized by us to use or view any of the Sites.
                </p>
            </div>
        </div>
       </div>
    )
}
export default TermsAndCondition;