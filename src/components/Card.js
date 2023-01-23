import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Card(props) {
    return (
        <>
            <div className='block p-3 rounded-lg shadow-md bg-white max-w-lg space-y-2'>

                <div className='flex justify-center text-3xl'>
                    {props.title}
                </div>

                <div className='flex justify-center text-5xl'>
                    {props.number}
                </div>

            </div>
        </>
    );
}

export default Card;
