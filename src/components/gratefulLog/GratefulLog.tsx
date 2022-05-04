import Table from 'react-bootstrap/Table';
import MorningFormItem from '../gratefulLog/GratefulLog';

const GratefulLog = () => {
    return (
        <div className="tlog">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Grateful Log</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Today I am grateful for the sunrise because it means a new day brings new opportunities</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>I am grateful that I can exercise today because it means I am healthy</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}
export default GratefulLog;