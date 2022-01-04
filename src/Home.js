/*"StAuth10244: I Hetal P1tel, 000821900 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."*/
/* Ref for content:https://www.workflowmax.com/blog/6-things-that-arent-on-your-daily-to-do-list-but-should-be*/
import React, { Component } from 'react';
import h  from './home2.png';
import './Home.css';

class Home extends Component {
    render() {
        return <div>
            <br/>           
          <div className="image_div">
                <img className="image" src={h} />
         </div>
            <br /><br />
            <p>
                To-do lists are like the bumpers on a bowling alley lane they keep you in the lines and on track during the workday. However, not all to-do lists are created equal.</p>


            To-do lists that are too simplistic can slow you down and waste time. Look at the example below:
            <ul>
                <li>Email</li>
                <li>Write blog post</li>
                <li>Call Brian</li>
                <li>Edit new articles</li>
            </ul>
            <hr /><p>
                
            At first look, it seems fine tasks for the day written out. However, the items are both vague and simplistic.
            <br/><br/>
            When looking at this, you may ask yourself: What articles am I going to edit? How many do I have time for? How long will it take me to write that blog post?
            What is it about?
                Will I only check email once today? What am I talking to Brian about?    </p>

            <strong>Time to Do, Do, Do</strong><br/><br/>

            With these tips, your to-do list will be more effective, making you productive and efficient with your time.
            Take control of your day once and for all with a to-do list you can count on.
            </div>


    }
}

export { Home };