import React from 'react';


const PokeSelector = (props) => {

    // const options = console.log(props.monsters);

    if (props.monsters.length == 0 ){

        return null;

    }
        const options = props.monsters.map(monster =>{
            return <option value={monster.url}> {monster.name}</option>
        })

        function handleChange(event){
            props.onMonsterSelected(event.target.value);
        }

        return (
            <select id="monsta-selecta" onChange={handleChange} defaultValue="default">
                <option disabled value="default">Choose a Monster...</option>
                {options}
            </select>
        )

}
export default PokeSelector;
