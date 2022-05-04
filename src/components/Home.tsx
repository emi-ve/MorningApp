import React, { useState } from 'react';

import { AddMorningForm } from './morningForm/AddMorningForm'

import GratefulLog from './gratefulLog/GratefulLog'


import Header from './header/Header'


const initialTodos: Todo[] = [

    {
        text: 'Walk the dog',
    },
    {
        text: 'Write app',
    },
];

function Home() {
    const [todos, setTodos] = useState(initialTodos);


    return (
        <div>
            <Header />

            <AddMorningForm />
            <GratefulLog />


        </div>)
}
export default Home;