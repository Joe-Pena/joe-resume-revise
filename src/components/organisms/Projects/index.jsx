import React from 'react';
import './Projects.scss';
import { Showcase } from '../index';
import AFV from '../../../images/afv.png';
import Buvie from '../../../images/buvie.png';
import StudPoker from '../../../images/studpoker.png';
import CityMain from '../../../images/citymain.png';
import PetDrop from '../../../images/petdrop.png';
import MouseAI from '../../../images/mouseai.png';
import Particles from 'react-particles-js';

// prettier-ignore
const cityMainParticles = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#20f3a2"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#20f3a2",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 80
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  // "config_demo": {
  //   "hide_card": true,
  //   "background_color": "#b94409",
  //   "background_image": "",
  //   "background_position": "50% 50%",
  //   "background_repeat": "no-repeat",
  //   "background_size": "cover"
  // }
}

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
    >
      An ongoing project set to go live later in 2019, the one and only AFV
      website completely redesigned!
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
      particles={true}
      particleOptions={cityMainParticles}
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
      A simple app that shows you a list of cats and dogs up for adoption all
      around the USA.
    </Showcase>
  </div>
);

export default Projects;
