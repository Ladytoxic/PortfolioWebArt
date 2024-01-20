import './Footer.css';
import { LinkedinBoxFill, GithubFill, Envelope} from 'akar-icons';

const Footer = () => {
    return (
        <footer>
            <div className='footer-social'>
                <a className='footer-link-social' href="https://github.com/Ladytoxic" target='_blank'>
                    <GithubFill strokeWidth={2.5} size={20} />
                </a>
                <a className='footer-link-social' href="https://www.linkedin.com/in/almendra-romina/" target='_blank'>
                    <LinkedinBoxFill strokeWidth={2.5} size={20} />
                </a>
                <a className='footer-link-social' href="mailto:almendraromina1@gmail.com" target='_blank'>
                    <Envelope strokeWidth={2.5} size={23} />
                </a>
            </div>
        </footer>
    )
}

export default Footer
