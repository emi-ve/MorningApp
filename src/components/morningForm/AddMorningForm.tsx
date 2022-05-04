import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const AddMorningForm: React.FC = () => {

  

    const [term, setTerm] = useState('');
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        // Do something 
        console.log(term);
       
        
    }

    return (
        <div className="taskListForm">
            <div className="w-25 ml-0 mx-auto text-center">
                <Form className="mb-3 px-30" onSubmit={submitForm}>
                    <Form.Group className="mb-3 px-30" controlId="formBasicEmail">
                        <Form.Label>What are you grateful for today? </Form.Label>
                        <Form.Control type="text" placeholder="I am grateful today because..." value={term}
                            onChange={(e) => setTerm(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div id="app">{term}</div>

        </div>
    );
};