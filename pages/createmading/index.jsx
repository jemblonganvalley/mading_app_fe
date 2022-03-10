import moment from "moment"


const CreateMading = ()=>{
    return (
        <div>
            <h1>create mading</h1>
            <button onClick={()=>{
                document.cookie = `_madingapp=asdfsadf;expires=Thu, 01 Jan 1970 00:00:01 GMT`
                window.location.href = "/"
            }}>logout</button>
        </div>
    )
}

export default CreateMading