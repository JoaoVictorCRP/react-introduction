// onChange = event gandler user primary with form elements
//            such as <input>, <textarea>, <select>, <radio>.
//            It triggers a function every time the value of the input changes

import React, { useState } from "react";

function Container() {
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [payment, setPayment] = useState<string>("N/A");
    const [shipping, setShipping] = useState<string>("retirar");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(event.target.value)
    }

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value)
    }

    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPayment(event.target.value)
    }

    const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShipping(event.target.value)
    }


    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p> {name ? `Olá, ${name}! Como vai você?`: "Qual seu nome?"}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantidade de pedidos: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Insira as intruções de entrega."></textarea>
            <p>Instruções de Entrega: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="N/A" defaultChecked>Selecione uma opção</option>
                <option value="credito">Cartão de Crédito</option>
                <option value="debito">Cartão de Débito</option>
                <option value="pix">Pix</option>
                <option value="gpay">Google Pay</option>
            </select>
            <p>Método de pagamento: {payment}</p>

            <label>
                <input type="radio" value="retirar" checked={shipping==='retirar'} onChange={handleShippingChange}/>
                Retirar na loja      
            </label>
            <label>
                <input type="radio" value="entregar" checked={shipping==='entregar'} onChange={handleShippingChange}/>
                Entregar no endereço
            </label>

            <p>Opção de entrega: {
                shipping==='entregar'? 
                    'Entregar no endereço (Prazo: 7 dias úteis).' : 
                    'Retirar na loja (Prazo: 1 dia útil).'
                }
            </p>
        </div>
    );
}

export default Container;