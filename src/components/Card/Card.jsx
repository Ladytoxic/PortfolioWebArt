import './Card.css';
import { GithubFill, Globe } from 'akar-icons';

const Card = ({ data }) => {
    return (
        <div className='card'>
            <span className='decor'></span>
            {data.duration && (
                <span className='badge'>{data.duration}</span>
            )}
            <h3 className='text-important'>{data.title || data.company}</h3>
            <p>{data.description}</p>
            {data.imageSrc && (
                <img className='card-img' src={data.imageSrc} alt={`imagen ${data.title}`} />
            )}
            <div className='list-badge'>
                {data.badges && data.badges.map((badge, index) => (
                    <span key={index} className='badge code'>
                        {badge}
                    </span>
                ))}
            </div>
            <div className='card-list-links'>
                {data.githubLink && (
                    <a className='card-link' href={data.githubLink} target='_blank'>
                        <GithubFill strokeWidth={2.5} size={24} /> Ver código fuente
                    </a>
                )}
                {data.websiteLink && (
                    <a className='card-link' href={data.websiteLink} target='_blank'>
                        <Globe strokeWidth={2} size={24} /> Ir al sitio web
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card
