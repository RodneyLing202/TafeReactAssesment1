


export const Editbody = (props) => {

    return (
        <div> 
            <label>note body</label>
            <textarea
                onChange={props.onChange}
                defaultValue={props.defaultValue()}
            ></textarea>
        </div>
    )


}