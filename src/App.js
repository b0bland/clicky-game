import React, { Component } from "react";
import PokeballsCard from "./components/PokeballsCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokeballs from "./pokeballs.json";

class App extends Component {
  state = {
    pokeballs
  };

  

  render() {
    return (
      <Wrapper>
        <Title>Pokeballs List</Title>
        {this.state.pokeballs.map(pokeballs => (
          <PokeballsCard
            // removepokeballs={this.removepokeballs}
            id={pokeballs.id}
            key={pokeballs.id}
            name={pokeballs.name}
            image={pokeballs.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
