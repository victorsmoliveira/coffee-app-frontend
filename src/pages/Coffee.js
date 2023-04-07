import '../index.css';
import { useState } from 'react';
import CoffeeInputs from '../components/CoffeeInputs/CoffeeInputs';
import Card from '../components/Card/Card';
import logo from '../images/coffee_mug_logo.png';

function Coffee() {
    const [measures, setMeasures] = useState({})

    function halfRound(n) {
        return Math.round(n * 2) / 2
    }

    function calcMeasures(numPeople, numRepeaters) {
        const waterLevelCalc = Math.max(
            8,
            Math.floor((Number(numPeople) + Number(numRepeaters) * 0.4) * 2.5)
        );

        const coffeeSpoonsCalc = halfRound(waterLevelCalc / 2.5)

        setMeasures(
            {
                coffeeSpoons: coffeeSpoonsCalc,
                waterLevel: waterLevelCalc
            }
        )
    }

    return (
        <>
            <div className="flex-1">
                <div
                    className="bg-gradient-to-r from-dark-brown to-light-brown  text-white text-4xl font-bold py-4 px-6"
                >
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="Logo" className="h-12 mt-[-10px]" />
                        <span>Café Matemático</span>
                    </div>
                </div>

                <div className="flex-1 px-3 py-8">
                    <div className='flex justify-center px-6 pb-8 mt-4'>
                        <CoffeeInputs calculateCoffeeFunction={calcMeasures} />
                    </div>

                    <div className='flex flex-wrap justify-center'>
                        <div className="flex justify-center px-6 py-6" >
                            <Card title="Scoops de café" number={measures.coffeeSpoons ?? "..."} />
                        </div>

                        <div className="flex justify-center px-6 py-6" >
                            <Card title="Nível da água" number={measures.waterLevel ?? "..."} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coffee;
