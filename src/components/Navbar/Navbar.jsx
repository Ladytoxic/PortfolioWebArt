import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='list'>
                    <li className='item'>
                        <a className='link' href="/#experiencia">Experiencia</a>
                    </li>
                    <li className='item'>
                        <a className='link' href="/#proyectos">Proyectos</a>
                    </li>
                    <li className='item'>
                        <a className='link' href="/#sobre-mi">Sobre mi</a>
                    </li>
                    <li className='item'>
                        <a className='link' href="/#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
