import { Button, ListGroup } from "react-bootstrap";
import {TiDelete} from "react-icons/ti"

const AppointmentInfo=({appointment})=>{
    return (
        <>
        <ListGroup.Item>
                    <p><small>Date:{appointment.aptDate}</small></p>
                    <p><strong>First Name:</strong>{appointment.firstname}</p>
                    <p><strong>Last Name:</strong>{appointment.lastname}</p>
                    <p><strong>Notes:</strong>{appointment.aptNotes}</p>
                    <Button onClicksize="small" variant="danger"><TiDelete/> Delete</Button>
                  </ListGroup.Item>
        </>
    )
}
export default AppointmentInfo;