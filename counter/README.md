# introduction

you will learn about the main concepts of react fundamentals in this project 

1) flow of files 

2) how app and index manages 

3) how package.json imp 


4) how useState hook used to manage memory 


# the counter 

1) first remove all not usable things 
   still not deleted the app.css and index.css 
   as tailwind is not this project 

2)  secondly we start creating a div for a counter
    and its buttons to increment and decrement the 
    variable 


    ```
    
    let [counter,SetCounter]=useState(0);

    function increment(){
        SetCounter(counter+1);
        if(counter>100){
            SetCounter(0)
        }
    }

    function decrement(){
        SetCounter(counter-1)
        if(counter<0){
            SetCounter(0)
        }
    }

    return(

        <button onClick={increment}>increment</button>

        <button onClick={decrement}>decrement</button>
    )

    ```

# conclusion 

in this project we studied the flow of files and using hooks and how it uses state 

