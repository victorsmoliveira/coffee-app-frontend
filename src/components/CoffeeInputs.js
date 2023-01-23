import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CoffeeInputs(props) {
    const [numPeople, setNumPeople] = useState();
    const [numRepeaters, setNumRepeaters] = useState();

    return (
        <>
            <div className='block p-5 pt-5 pb-3 rounded-lg shadow-md bg-white max-w-lg'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.calculateCoffeeFunction(numPeople, numRepeaters)
                    }}
                    id="editcoffeeinputs"
                    className="w-full max-w-sm"
                >
                    <div className="md:flex md:items-center mb-7">
                        <div className="md:w-1/2">
                            <label
                                className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                for="name"
                            >
                                Quantidade de pessoas
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="name"
                                type="number"
                                value={numPeople}
                                onChange={(e) => {
                                    setNumPeople(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/2">
                            <label
                                className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                for="role"
                            >
                                Quantos vão repetir?
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="role"
                                type="number"
                                value={numRepeaters}
                                onChange={(e) => {
                                    setNumRepeaters(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </form>

                <div className='flex justify-center py-3 space-x-2'>
                    <button form='editcoffeeinputs' className="
                    bg-amber-800
                    hover:bg-amber-900
                    text-white
                    font-bold
                    rounded
                    px-8
                    py-2"
                    >
                        Calcular
                    </button>

                    {/* <button onClick={(e) => {
                        setNumPeople(null)
                        setNumRepeaters(null)
                    }} className="
                    bg-slate-800
                    hover:bg-slate-900
                    text-white
                    font-bold
                    rounded
                    px-8
                    py-2"
                    >
                        Limpar
                    </button> */}
                </div>

            </div>
        </>
    );
}

export default CoffeeInputs;
