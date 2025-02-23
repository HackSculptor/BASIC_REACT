export default function Button(props) {
    return (
        <div>
            <button 
                class="text-6xl font-bold p-4 rounded-lg border-4"
                style={{ backgroundColor: props.color }} 
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    );
}
