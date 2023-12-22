import React from 'react';
import '../css/contact.css'
import {Input} from "../../../components/inputs/js/input";
import {TextArea} from "../../../components/inputs/js/textarea";
import {ButtonPrimary} from "../../../components/buttons/js/button";
import img from '../../../images/logo_entity.png'

export const Contact = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        alert(`Mensaje enviado numero: ${count}`);
    });

    return (
        <>
            <div className='container-fluid'>
                <div className='text-center my-4'>
                    <img src={img} alt=''/>
                </div>
                <h1 className='text-center'>Contactanos</h1>
                <form onSubmit={() => setCount(count + 1)}>
                    <div className='my-3'>
                        <Input id='correo' title='Correo electronico' type='email'
                               placeholder='Ingresar el correo electronico' required={true}
                               messageerror='name@example.com'></Input>
                    </div>
                    <div className='my-3'>
                        <TextArea id='contenido' title='Mensaje' type='text' s
                                  placeholder='Ingresar el correo electronico' required={true}
                                  messageerror='name@example.com' rows='6'></TextArea>
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