import React from "react";

function About() {
    return (
<div className="container">
        <div className="row">
            <div className="col-md-8">
                <h2 className="navbar-brand mb-0 col-sm-12 col-md-4 col-xl-3 text-center">About Me</h2>
                <hr size="30"></hr>
                <img className="aboutMe" src="../../images/johnnyandkayla.jpg" style="width:200px;height:200px;"
                    alt="Johnny and his daughter Kayla"></img>
                A tenacious programming professional with experience in front and back end development eager to apply
                technical know-how and be an invaluable member of a team. I am committed to tracking and eliminating
                bugs hindering user experiences. My first code was when I was 11 and I honestly think I invented pop
                ups, ask me how 💻. I am also experienced in Forex market analyst with strong leadership skills and a
                demonstrated history of working in business and the hospital and healthcare industry. Skilled in Meta
                Trader 4, ThinkOrSwim, Microsoft Office, sales, LCLS, Epic, OnBase, management, and healthcare. Strong
                research professional with a focus in computer programming and currency trading under the tutelage of
                experienced traders.
                <hr></hr>

                <div id="connections">
                    <a target="_blank" href="https://www.linkedin.com/in/johnny-lieu/"><img className="card-img card-size"
                            src="../../images/linkedin.png" style="width: 100px; height: 100px;" alt="linkedin logo"></img></a>
                    <a target="_blank" href="https://github.com/johnnylieu"><img className="card-img card-size"
                            src="../../images/github.png" style="width: 100px; height: 100px;" alt="github logo"></img></a>
                    <a target="_blank"
                        href="https://drive.google.com/file/d/1ovwfK0FISGjnHeOMs4JoYiWwF7gylku8/view?usp=sharing"><img
                            className="card-img card-size" src="../../images/resume.png" style="width: 100px; height: 100px;"
                            alt="resume logo"></img></a>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default About;