



export const EditTitle = (props) => {

    return (
        <div>
            <label>note Title</label>
            <input
                type={"text"}
                onChange={props.onChange}
                defaultValue={props.defaultValue()}
            ></input>
        </div>
    )


}