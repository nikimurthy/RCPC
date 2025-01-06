interface DropdownProp {
    name: string;
    content: string;
}

function Dropdown(props: DropdownProp) {
    return (
    <div className = "dropdown">
        <div className ="card card-button btn btn-primary bg-gray" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <div className="card-body d-flex justify-content-between">
                <span className = "txt-Merri txt-dblue dropText">{props.name}</span>
                <span className = "txt-Merri txt-dblue dropText carrot"> ⌄ </span>  
            </div>
        </div>

        <div className="collapse" id="collapseExample">
            <div className="card card-body txt-Merri text-center">
                {props.content}
            </div>
        </div>
    </div>
    );
}

export default Dropdown;
