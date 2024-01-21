import Navbar from '../components/Navbar/Navbar';
import Welcome from '../components/Welcome/Welcome';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

const HomePage = () => {

  const experiencia = [
    {
      "id": 1,
      "status": "Actualmente",
      "company": "Lady Toxic",
      "duration": "Actualidad",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quidem quos veniam, in nulla, impedit eum voluptas perspiciatis, voluptate natus dolor eos. Reprehenderit, dolorem? Voluptas recusandae repudiandae laborum nobis rerum."
    },
    {
      "id": 2,
      "status": "Junio 2022 - Marzo 2023",
      "company": "Alexeo's Catering",
      "duration": "Junio 2022 - Marzo 2023",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quidem quos veniam, in nulla, impedit eum voluptas perspiciatis, voluptate natus dolor eos. Reprehenderit, dolorem? Voluptas recusandae repudiandae laborum nobis rerum."
    }
  ]
  

  const proyectos = [
    {
      "id": 1,
      "title": "La Zorreria Web",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quidem quos veniam, in nulla, impedit eum voluptas perspiciatis, voluptate natus dolor eos. Reprehenderit, dolorem? Voluptas recusandae repudiandae laborum nobis rerum.",
      "badges": ["React", "Axios"],
      "githubLink": "https://github.com/Ladytoxic",
      "websiteLink": "https://github.com/Ladytoxic",
      "imageSrc": "./lazorreria.png"
    },
    {
      "id": 2,
      "title": "My Tinerary",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quidem quos veniam, in nulla, impedit eum voluptas perspiciatis, voluptate natus dolor eos. Reprehenderit, dolorem? Voluptas recusandae repudiandae laborum nobis rerum.",
      "badges": ["Node", "Express.js", "React", "MongoDB"],
      "githubLink": "https://github.com/Ladytoxic",
      "websiteLink": "https://github.com/Ladytoxic",
      "imageSrc": "./my-tinerary.png"
    },
    {
      "id": 3,
      "title": "Integración de Mercadopago",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quidem quos veniam, in nulla, impedit eum voluptas perspiciatis, voluptate natus dolor eos. Reprehenderit, dolorem? Voluptas recusandae repudiandae laborum nobis rerum.",
      "badges": ["Node", "Express.js", "Mercadopago CheckOut Pro"],
      "githubLink": "https://github.com/Ladytoxic",
      "websiteLink": null,
      "imageSrc": null
    },
    {
      "id": 4,
      "title": "Amazing Events",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quidem quos veniam, in nulla, impedit eum voluptas perspiciatis, voluptate natus dolor eos. Reprehenderit, dolorem? Voluptas recusandae repudiandae laborum nobis rerum.",
      "badges": ["Vue3", "Vue-Router", "Fetch"],
      "githubLink": "https://github.com/Ladytoxic",
      "websiteLink": "https://github.com/Ladytoxic",
      "imageSrc": "./Amazing_Events_vue.png"
    }
  ]
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='hero'>
          <Welcome />
        </section>
        <section className='box-section' id='experiencia'>
          <h2 className='title-section title-sub'>
            Experiencia Laboral</h2>
          {experiencia.map((cardData) => (
            <Card key={cardData.id} data={cardData} />
          ))}
        </section>
        <section className='box-section' id='proyectos'>
          <h2 className='title-section title-sub'>
            Proyectos</h2>
          {proyectos.map((cardData) => (
            <Card key={cardData.id} data={cardData} />
          ))}
        </section>
        <section id='sobre-mi'>
          <h2 className='title-section'>
            Sobre mi</h2>
          <div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis rem aliquid asperiores quo reprehenderit possimus molestias aliquam. Laudantium, aut assumenda. Nihil reiciendis error deleniti, laborum corporis nobis porro voluptate?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo et cupiditate illo consectetur voluptatum at blanditiis facilis earum id officia possimus fuga, quas unde, ipsa eius ea quisquam repellendus.
            </p>
          </div>
        </section>
        <section id='contacto' className='contact'>
          <h2 className='title-section'>
            Contacto</h2>
          <form className='form-contacto'>
            <input type="text" placeholder='Nombre' />
            <input type="email" name="mail" id="email" placeholder='Email' />
            <input className='messager' type="text" placeholder='Mensaje' />
            <input type="submit" value="Enviar" />
          </form>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
