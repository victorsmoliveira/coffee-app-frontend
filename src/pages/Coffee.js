import '../index.css';
import { useState } from 'react';
import CoffeeInputs from '../components/CoffeeInputs';
import Card from '../components/Card';

function Coffee() {
    const [measures, setMeasures] = useState({})

    function calculateSpoons(numPeople, numRepeaters) {
        const coffeeSpoonsCalc = Number(numPeople) + Number(numRepeaters) * 0.3
        const waterLevelCalc = coffeeSpoonsCalc * 2.5;

        setMeasures(
            {
                coffeeSpoons: coffeeSpoonsCalc,
                waterLevel: waterLevelCalc
            }
        )
    }

    return (
        <>
            <div className="">
                <div className='flex justify-center px-6 pb-8'>
                    <CoffeeInputs calculateCoffeeFunction={calculateSpoons} />
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
        </>
    );
}

export default Coffee;
