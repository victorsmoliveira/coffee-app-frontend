import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BeautifulSlider from '../BeautifulSlider/BeautifulSlider';
import FormInput from '../FormInput/FormInput';

function CoffeeInputs(props) {
    const [numPeople, setNumPeople] = useState(1);
    const [numRepeaters, setNumRepeaters] = useState(0);

    const handleNumPeopleChange = (e) => {
        const newNumPeople = parseInt(e.target.value);
        setNumPeople(newNumPeople);

        if (numRepeaters > newNumPeople) {
            setNumRepeaters(newNumPeople);
        }
        props.calculateCoffeeFunction(newNumPeople, numRepeaters);
    };

    const handleNumRepeatersChange = (e) => {
        const newNumRepeaters = parseInt(e.target.value);

        console.log(e.target.value)

        if (newNumRepeaters <= numPeople) {
            console.log("newNumRepeaters", newNumRepeaters)
            console.log("numPeople", numPeople)
            if (newNumRepeaters <= numPeople) {
                console.log("what")
            }
            setNumRepeaters(newNumRepeaters);
            props.calculateCoffeeFunction(numPeople, newNumRepeaters);
        }
    };

    return (
        <>
            <div className="block p-5 pt-5 pb-3 rounded-lg shadow-md bg-white max-w-lg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.calculateCoffeeFunction(numPeople, numRepeaters);
                    }}
                    id="editcoffeeinputs"
                    className="w-full max-w-sm"
                >
                    <BeautifulSlider
                        label="Quantos vão beber?"
                        id="name"
                        value={numPeople}
                        onChange={handleNumPeopleChange}
                        min="1"
                        max="10"
                        step="1"
                    />
                    <BeautifulSlider
                        label="Quantos vão repetir?"
                        id="role"
                        value={numRepeaters}
                        onChange={handleNumRepeatersChange}
                        min="0"
                        max="10"
                        step="1"
                    />
                </form>
            </div>
        </>
    );
}

export default CoffeeInputs;
