import Form from "react-bootstrap/Form"



export const EditTitle = (props) => {

    return (
        <Form.Group>
            <Form.Label><h2>note Title</h2></Form.Label>
            <Form.Control
                type="text"
                onChange={props.onChange}
                defaultValue={props.defaultValue()}
            ></Form.Control>
        </Form.Group>
    )


}