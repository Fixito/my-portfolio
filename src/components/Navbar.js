import { ArrowRightIcon } from '@heroicons/react/solid';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import React from 'react';

function Navbar() {
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
    <header className='bg-gray-800 md:sticky top-0 z-20'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Thomas ROBERT
          </a>
        </div>
        <nav className='md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a
            href='#projects'
            className='mr-5 hover:text-white'
            onClick={handleClick}>
            Mes projets
          </a>
          <a
            href='#skills'
            className='mr-5 hover:text-white'
            onClick={handleClick}>
            Mes compétences
          </a>
          <a href='./CV.pdf' className='mr-5 hover:text-white' download>
            CV
          </a>
        </nav>
        <div className='inline-flex items-center'>
          <a
            href='https://github.com/Fixito'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-800 border-0 py-1 px-2 focus:outline hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
            <AiFillGithub className='w-5 h-5 ml-1' />
          </a>
          <a
            href='https://www.linkedin.com/in/thomasrobert1/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-800 border-0 py-1 px-2 focus:outline hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
            <AiFillLinkedin className='w-5 h-5 ml-1' />
          </a>
          <a
            href='#contact'
            className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
            onClick={handleClick}>
            Me contacter
            <ArrowRightIcon className='w-4 h-4 ml-1' />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
