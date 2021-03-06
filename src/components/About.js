import React from 'react';

function About() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 72
    });
  };

  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Salut, je suis Thomas.&nbsp;
            <br className='hidden lg:inline-block' />
            J'aime construire de superbes applications
          </h1>
          <p className='mb-8 leading-relaxed'>
            Depuis que j'ai commencé mon parcours de développeur web en 2020, je
            cherche à collaborer avec des entreprises et des personnes
            talentueuses pour créer des produits numériques destinés à la fois
            aux entreprises et aux consommateurs. Je suis naturellement curieux
            et je travaille constamment à améliorer mes compétences.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
              onClick={handleClick}>
              Travailler avec moi
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
              onClick={handleClick}>
              Voir mes projets
            </a>
          </div>
        </div>
        <div className='lg:max-w-md lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object*cover object-center rounded'
            src='./thomas.jpg'
            alt='hero'
          />
        </div>
      </div>
    </section>
  );
}

export default About;
