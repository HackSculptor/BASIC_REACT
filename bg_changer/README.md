# introduction

in this project we learn about usestate and props and function calling and used tailwind here


# steps 

1) i have created a button component differently here 

```

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


```

here proper use of components can be seen and little use of props can also be seen 

2) in app.jsx we have created a state to change and  manipulate the background color

in starting it looks

```

  let [color,setColor]=useState('olive');

```

then create a function that have to be inputed inside the onClick handler of buttons 

```

 function change(newcolor){
    setColor(newcolor)
    console.log(newcolor)
  }

```

3) now proper return statement i have given to make this background changer works 


```

<>
      <div className="container">
        <div className="container-2 display" class="flex justify-center items-center h-screen gap-2" style={{ backgroundColor: color }}>
          <Button onClick={()=> change('red')} color="red" label="red"/>
          <Button  onClick={()=> change('blue')} color="blue" label="blue"/>
          <Button  onClick={()=> change('green')} color="green" label="green"/>

        </div>
      </div>

</>

```

# conclusion 

in this project 

mainly we learn how to implement the components and make use of props and how state can be used with props to make ui functional 