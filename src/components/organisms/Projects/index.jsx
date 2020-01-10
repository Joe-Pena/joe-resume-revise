import React from 'react';
import './Projects.scss';
import { Showcase } from '../index';
import AFV from '../../../images/afv.jpg';
import Buvie from '../../../images/buvie.png';
import StudPoker from '../../../images/studpoker.png';
import CityMain from '../../../images/citymain.png';
import PetDrop from '../../../images/petdrop.png';
import MouseAI from '../../../images/mouseai.png';

const Projects = () => (
  <div id="projects" className="projects">
    <h1>PROJECTS</h1>
    <Showcase
      project="AMERICA'S FUNNIEST VIDEOS"
      className="afv"
      image={AFV}
      stack={[
        'React',
        'Gatsby',
        'Sass',
        'GraphQL',
        'React Router',
        'ReachEngine',
        'DatoCMS',
      ]}
      liveLink={'https://afv.com'}
    >
      The new official site for AFV!
    </Showcase>
    <Showcase
      project="BUVIE"
      className="buvie"
      image={Buvie}
      stack={[
        'React',
        'Redux',
        'ReactRouter',
        'ReduxForm',
        'ReactNative',
        'NodeJS',
        'MongoDB',
        'StylesComponents',
        'WebSocket.io',
        'Google OAuth',
        'Mocha',
        'Chai',
        'Google Geolocation',
        'Netlify',
        'Heroku',
      ]}
      liveLink="https://buvie.netlify.com/"
      gitHubLink="https://github.com/Joe-Pena/buvie-client"
    >
      Find friends with the same taste in movies as you do, then go watch movies
      together!
    </Showcase>
    <Showcase
      project="STUD POKER"
      className="stud-poker"
      image={StudPoker}
      stack={[
        'React',
        'Redux',
        'ReactRouter',
        'ReduxForm',
        'NodeJS',
        'MongoDB',
        'Netlify',
        'Heroku',
      ]}
      liveLink="https://studpoker.netlify.com/"
      gitHubLink="https://github.com/Joe-Pena/joe-stud-poker-client"
    >
      A game of single hand stud poker.
    </Showcase>
    <Showcase
      project="CITYMAIN"
      className="city-main"
      image={CityMain}
      stack={[
        'React',
        'Redux',
        'ReactRouter',
        'ReduxForm',
        'NodeJS',
        'MongoDB',
        'Netlify',
        'Heroku',
      ]}
      liveLink="https://citymain.netlify.com/"
      gitHubLink="https://github.com/Joe-Pena/timothy-joe-citymain-front-end"
    >
      Learn all the capital cities in the world! Powered by a spaced repetition
      algorithm.
    </Showcase>
    <Showcase
      project="PET-DROP"
      className="pet-drop"
      image={PetDrop}
      stack={['React', 'NodeJS', 'MongoDB', 'Netlify', 'Heroku']}
      liveLink="https://petdrop.netlify.com/"
      gitHubLink="https://github.com/thinkful-ei24/petful-client-chelsea-joe"
    >
      A simple app that shows you a list of cats and dogs up for adoption all
      around the USA.
    </Showcase>
    <Showcase
      project="MouseAI"
      className="mouse-ai"
      image={MouseAI}
      stack={['Python', 'Pytorch', 'TensorFlow', 'Kivy', 'Keras']}
      gitHubLink="https://github.com/Joe-Pena/AI-Mouse"
    >
      An artificially intelligent mouse that can traverse mazes that you create!
    </Showcase>
  </div>
);

export default Projects;
