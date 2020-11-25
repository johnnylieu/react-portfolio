import React from "react";

function Contact() {
    return (

        <div id="connections">
        <a target="_blank" href="https://www.linkedin.com/in/johnny-lieu/"><img className="card-img card-size"
                src="linkedin.png" style="width: 100px; height: 100px;" alt="linkedin logo"></img></a>
        <a target="_blank" href="https://github.com/johnnylieu"><img className="card-img card-size"
                src="github.png" style="width: 100px; height: 100px;" alt="github logo"></img></a>
        <a target="_blank"
            href="https://drive.google.com/file/d/1ovwfK0FISGjnHeOMs4JoYiWwF7gylku8/view?usp=sharing"><img
                className="card-img card-size" src="resume.png" style="width: 100px; height: 100px;"
                alt="resume logo"></img></a>
    </div>
    );
  }
  
  export default Contact;