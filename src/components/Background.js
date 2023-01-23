/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';

export default function Background(props) {
    return (
        <>
            <div className="bg-gray-300 min-h-screen px-3 py-8">
                {props.children}
            </div>
        </>
    );
}
