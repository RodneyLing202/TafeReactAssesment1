import Form from "react-bootstrap/Form"



export const Editbody = (props) => {

    return (
        <Form.Group>
            <Form.Label>note Body</Form.Label>
            <Form.Control
            type = "textarea"
                onChange={props.onChange}
                defaultValue={props.defaultValue()}
            ></Form.Control>
        </Form.Group>
    )


}