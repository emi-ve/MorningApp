import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


type CounterState = {
    response: string;
};

export const AddMorningForm: React.FC = () => {



    const [term, setTerm] = useState('');
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        // Do something 
        console.log(term);
        console.log(setTerm);

        const show = document.getElementById('app');
        if (show) {
            // inside of this if branch, show can only be `HTMLElement`
            show.innerHTML = term;
        } else {
            console.error("no element found with id 'row'");
        }
    }

    // test

    let form = document.getElementById('app')
    return (
        <div className="taskListForm">
            <div className="w-25 ml-0 mx-auto text-center">
                <Form className="mb-3 px-30" onSubmit={submitForm}>
                    <Form.Group className="mb-3 px-30" controlId="formBasicEmail">
                        <Form.Label>What are you grateful for today? </Form.Label>
                        <Form.Control type="text" placeholder="I am grateful today because..."
                            onChange={(e) => setTerm(e.target.value)} />
                    </Form.Group>

                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div id="app"></div>


        </div>
    );
};