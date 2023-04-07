import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BeautifulSlider from '../BeautifulSlider/BeautifulSlider';
import FormInput from '../FormInput/FormInput';

function CoffeeInputs(props) {
    const [numPeople, setNumPeople] = useState(1);
    const [numRepeaters, setNumRepeaters] = useState(0);

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
                        onChange={(e) => {
                            setNumPeople(e.target.value);
                        }}
                        min="1"
                        max="10"
                        step="1"
                    />
                    <BeautifulSlider
                        label="Quantos vão repetir?"
                        id="role"
                        value={numRepeaters}
                        onChange={(e) => {
                            setNumRepeaters(e.target.value);
                        }}
                        min="0"
                        max="10"
                        step="1"
                    />
                </form>

                <div className='flex justify-center py-3 space-x-2'>
                    <button form='editcoffeeinputs' className="
                    bg-light-brown
                    hover:bg-dark-brown
                    text-white
                    font-bold
                    rounded
                    px-8
                    py-2"
                    >
                        Calcular
                    </button>
                </div>

            </div>
        </>
    );
}

export default CoffeeInputs;
