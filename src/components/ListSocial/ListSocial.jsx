import './ListSocial.css';
import { LinkedinBoxFill, GithubFill, Mention, Envelope } from 'akar-icons';


const ListSocial = () => {
    return (
        <>
            <ul className='list-social'>
                <li className='link-social'>
                    <a href="https://github.com/Ladytoxic" target='_blank'>
                        <GithubFill strokeWidth={2.5} size={20} />
                        Github
                    </a>
                </li>
                <li className='link-social'>
                    <a href="https://www.linkedin.com/in/almendra-romina/" target='_blank'>
                        < LinkedinBoxFill strokeWidth={2.5} size={20} />
                        LinkedIn
                    </a>
                </li>
                <li className='link-social'>
                    <a href="mailto:almendraromina1@gmail.com" target='_blank'>
                        < Envelope strokeWidth={2.5} size={23} />
                        Almendraromina1@gmail.com
                    </a>
                </li>
            </ul>
        </>
    )
}

export default ListSocial
