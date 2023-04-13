import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BeautifulSlider from '../BeautifulSlider/BeautifulSlider';
import FormInput from '../FormInput/FormInput';

function CoffeeInputs(props) {
    const [numPeople, setNumPeople] = useState(1);
    const [numRepeaters, setNumRepeaters] = useState(0);

    const handleNumPeopleChange = (e) => {
        setNumPeople(e.target.value);
        if (numRepeaters > e.target.value) {
            setNumRepeaters(e.target.value);
        }
        props.calculateCoffeeFunction(e.target.value, numRepeaters);
    };

    const handleNumRepeatersChange = (e) => {
        if (e.target.value <= numPeople) {
            setNumRepeaters(e.target.value);
            props.calculateCoffeeFunction(numPeople, e.target.value);
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
