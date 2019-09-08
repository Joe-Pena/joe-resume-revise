import React from 'react';
import './Showcase.scss';

const Showcase = ({
  project,
  image,
  children,
  liveLink,
  gitHubLink,
  stack,
  className,
}) => (
  <div className={'showcase ' + className}>
    <h2>{project}</h2>
    <p>{children}</p>
    {image ? <img src={image} alt="project" /> : null}
    <div className="showcase-last-row">
      <div className="tech-list">
        {stack.map((tech, index) => {
          if (index === 0) {
            return <span>{tech}&nbsp;|</span>;
          } else if (index === stack.length - 1) {
            return <span>&nbsp;{tech}</span>;
          } else {
            return <span>&nbsp;{tech}&nbsp;|</span>;
          }
        })}
      </div>
      <div className="link-buttons">
        {liveLink ? (
          <a
            href={liveLink}
            className={'live-btn-' + className}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>VIEW LIVE SITE</button>
          </a>
        ) : null}
        {gitHubLink ? (
          <a
            href={gitHubLink}
            className={'github-btn-' + className}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>VIEW GITHUB</button>
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

export default Showcase;
