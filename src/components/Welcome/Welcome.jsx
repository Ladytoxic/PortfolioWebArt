import React from './Welcome.css';
import ListSocial from '../ListSocial/ListSocial';

const Welcome = () => {
    return (
        <>
            <div className='profile'>
                <img className='image-profile' src="https://avatars.githubusercontent.com/u/80841079?v=4" alt="Imagen de perfil" />
                <h1 className='title'>Hi👋🏼, Soy Almendra</h1>
                <h2>
                    <span className='text-important'>
                        Desarrolladora Front-End Jr & Ilustradora.
                    </span>
                    <br />
                    De Buenos Aires, Argentina
                </h2>
                <ListSocial />
            </div>
        </>
    )
}

export default Welcome;
