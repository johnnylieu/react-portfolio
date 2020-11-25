import React from "react";

function Portfolio() {
    return (
<div class="container">
        <div class="row">
            <div class="col-md-8 card">
                <h2>Portfolio</h2>
                <hr></hr>

                <div class="row portfolio">
                    <div class="col-md-4 col-sm-4">
                        <div class="card">
                            <a target="_blank" href="https://johnnylieu.github.io/Local_Coffee_Shop_Locator/"><img class="card-img card-size" src="coffeeshoplocator.jpg"
                                alt="cup of coffee"></img></a>
                            <div class="card-title">
                                <h3 class="WG"> <a target="_blank" href="https://johnnylieu.github.io/localCoffeeShops.github.io/" style="color: black">Local Coffee Shop Locator</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                        <div class="card">
                            <a target="_blank" href="https://johnnylieu.github.io/Code_Quiz_HW/"><img class="card-img card-size" src="codequiz.jpg"
                                alt="question mark representing a quiz"></img></a>
                            <div class="card-title">
                                <h3 class="WG"> <a target="_blank" href="https://johnnylieu.github.io/Code_Quiz_HW/" style="color: black">Code Quiz</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row portfolio">
                    <div class="col-md-4 col-sm-4">
                        <div class="card">
                            <a target="_blank" href="https://johnnylieu.github.io/Weather_Dashboard/"><img class="card-img card-size" src="weatherdashboard.jpg"
                                alt="weather icon"></img></a>
                            <div class="card-title">
                                <h3 class="WG"><a target="_blank" href="https://johnnylieu.github.io/Weather_Dashboard/" style="color: black">Weather Dashboard</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                        <div class="card">
                            <a target="_blank" href="https://cobra-arcade.herokuapp.com/"><img class="card-img card-size" src="cobra.png"
                                alt="weather icon"></img></a>
                            <div class="card-title">
                                <h3 class="WG"><a target="_blank" href="https://cobra-arcade.herokuapp.com/" style="color: black">Cobra Aracde</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row portfolio">
                    <div class="col-md-4 col-sm-4">
                        <div class="card" style="height:100%">
                            <img class="card-img card-size" src="wordpress.jpg" style="height: 100%;"
                                alt="man with ipad"></img>
                            <div class="card-title">
                                <h3 class="WG">Word Guess</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img card-size" src="RPGgame.jpg"
                                alt="dj system"></img>
                            <div class="card-title">
                                <h3 class="WG">RPG Game</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row portfolio">
                    <div class="col-md-4 col-sm-4">
                        <div class="card">
                            <img class="card-img card-size" src="triviagame.jpg"
                                alt="ipods on desk"></img>
                            <div class="card-title">
                                <h3 class="WG">Trivia Game</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="card">
                            <img class="card-img card-size" src="infowidget.jpg"
                                alt="stack of ipods"></img>
                            <div class="card-title">
                                <h3 class="WG">Info Widget</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
  }
  
  export default Portfolio;