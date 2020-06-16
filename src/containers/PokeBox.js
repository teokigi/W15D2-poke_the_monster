import React, {Component} from 'react';
import PokeDetails from '../components/PokeDetails.js';
import PokeSelector from '../components/PokeSelector.js';

class PokeBox extends Component{

    constructor(props) {
   super(props);
   this.state = {
     monsters: [],
     selectedMonster: ''
   };
   this.handleMonsterSelected = this.handleMonsterSelected.bind(this);
 }

    componentDidMount() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  fetch(url)
    .then(res => res.json())
    .then(monsters => this.setState({ monsters: monsters.results }))
    .catch(err => console.error);
}

    handleMonsterSelected(url){
        fetch(url)
          .then(res => res.json())
          .then(monster => this.setState({ selectedMonster: monster}))
          .catch(err => console.error);
    }


    render(){

        return (
            <div className="screenBox">
                <PokeSelector monsters={this.state.monsters} onMonsterSelected={this.handleMonsterSelected}/>
                <div>
                     <PokeDetails monster={this.state.selectedMonster} />
                </div>
            </div>
        );
    }
}

export default PokeBox;
