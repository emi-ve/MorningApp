import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MorningForm = () => {
    return (
        <div className="taskListForm">
            <div className="w-25 ml-0 mx-auto text-center">
                <Form className="mb-3 px-30">
                    <Form.Group className="mb-3 px-30" controlId="formBasicEmail">
                        <Form.Label>What are you grateful for today?</Form.Label>
                        <Form.Control type="text" placeholder="I am grateful today because..." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div >
        </div>

    )
}
export default MorningForm;