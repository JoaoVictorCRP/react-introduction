import { useEffect, useRef, useState } from "react";

function ComponentA() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    };

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = 'yellow';
        inputRef3.current.style.backgroundColor = '';
    };

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = "yellow";
    };

    useEffect(() => {
        console.log('Componente re-renderizado!')
    });


    return(
        <div>
            <button onClick={handleClick1}>Botão 1</button>
            <input ref={inputRef1}/> { /* O atributo ref irá apontar uma referência (useRef) para o elemento HTML*/}

            <button onClick={handleClick2}>Botão 2</button>
            <input ref={inputRef2}/>
  

            <button onClick={handleClick3}>Botão 3</button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default ComponentA;