import React, { Component } from "react";
import PokeballsCard from "./components/PokeballsCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokeballs from "./pokeballs.json";
import shuffle from "shuffle-array";

class App extends Component {
  state = {
    pokeballs,
    score: 0,
    highScore: 0,
    userClicked: [],
    message: "Click a Pokeball to begin!"
  };

  buttonClick = (id) => {
    var clickedBall = this.state.userClicked;

    if (clickedBall === null) {
      clickedBall = [...clickedBall, id];
      this.setState({
        score: 1,
        userClicked: clickedBall,
        message: "Click another ball!"
      })
    }
    else if (clickedBall.includes(id)) {
      clickedBall = [];
      this.setState({
        score: 0,
        userClicked: clickedBall,
        message: "You lost! Try again!"
      })
    }
    else {
      clickedBall.push(id)
      this.setState({
        score: this.state.score + 1
      })
      if (clickedBall.length === 9) {
        clickedBall = [];
        this.setState({
          score: 0,
          highScore: 9,
          userClicked: clickedBall,
          message: "You win! Click a ball to play again!"
        })
      }
      else if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.score + 1,
          message: "Click another ball!"
        })
      }
      else {
        this.setState({
          message: "Click another ball!"
        })
      }
    }
    this.cardShuffle();
  }

  cardShuffle = () => {
    shuffle(this.state.pokeballs);
    this.setState({ pokeballs })
  }

  render() {
    return (
      <Wrapper>
        <Title 
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        {this.state.pokeballs.map(pokeballs => (
          <PokeballsCard
            id={pokeballs.id}
            key={pokeballs.id}
            name={pokeballs.name}
            image={pokeballs.image}
            buttonClick={this.buttonClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
