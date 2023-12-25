import React, {useState, useEffect} from 'react';
import '../css/contact.css';
import {Input} from "../../../components/inputs/js/input";
import {TextArea} from "../../../components/inputs/js/textarea";
import {ButtonPrimary} from "../../../components/buttons/js/button";
import img from '../../../images/logo_entity.png';

export const Contact = () => {
    const [email = '', setEmail] = useState();
    const [menssage = '', setMessage] = useState();
    const [flagSend, setSendMessage] = useState(false);


    useEffect(() => {
        if (flagSend) {
            alert('Se envio correctamente en mensaje de contacto del usuairo: ', email, ' y el mensaje: ', menssage);
            setSendMessage(false);
        }
    }, [flagSend, email, menssage]);

    function submitSendMessage() {
        setSendMessage(true);
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='text-center my-4'>
                    <img src={img} alt=''/>
                </div>
                <h1 className='text-center'>Contactanos</h1>
                <form onSubmit={submitSendMessage}>
                    <div className='my-3'>
                        <Input id='correo'
                               name='correo'
                               title='Correo electronico'
                               type='email'
                               placeholder='Ingresar el correo electronico'
                               required={true}
                               messageerror='name@example.com'
                               onChange={e => setEmail(e.target.value)}></Input>
                    </div>
                    <div className='my-3'>
                        <TextArea id='contenido'
                                  title='Mensaje'
                                  type='text' s
                                  placeholder='Ingresar el correo electronico'
                                  required={true}
                                  messageerror='name@example.com'
                                  rows='6'
                                  onChange={e => setMessage(e.target.value)}></TextArea>
                    </div>
                    <div className='text-center my-3'>
                        <ButtonPrimary className='btn btn-primary' type='submit'
                                       name='Enviar'>Search</ButtonPrimary>
                    </div>
                </form>
            </div>
        </>
    )
};