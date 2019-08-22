import React from 'react';
import './Tech.scss';
import ReactTooltip from 'react-tooltip';
import {
  AngularIcon,
  AWSIcon,
  BabelIcon,
  BashIcon,
  BootStrapIcon,
  ChaiIcon,
  CSSIcon,
  Djangoicon,
  DockerIcon,
  ExpressIcon,
  GatsbyIcon,
  GitIcon,
  GitHubIcon,
  GraphQLIcon,
  HerokuIcon,
  HTMLIcon,
  JavaIcon,
  JavascriptIcon,
  JekyllIcon,
  JestIcon,
  JQueryIcon,
  JSONIcon,
  KnexIcon,
  LinuxIcon,
  MochaIcon,
  MongoDBIcon,
  NetlifyIcon,
  NodeJSIcon,
  NPMIcon,
  PassportIcon,
  PostgreSQLIcon,
  PythonIcon,
  RailsIcon,
  ReactRouterIcon,
  ReactIcon,
  ReduxIcon,
  RubyIcon,
  SassIcon,
  SequelizeIcon,
  ServerlessIcon,
  ShopifyIcon,
  TravisCIIcon,
  VSCodeIcon,
} from '../../../assets/icons';

const Tech = () => (
  <div className="tech">
    <div className="tech-waka">
      <h1>RECENT ACTIVITY</h1>
      <figure>
        <embed src="https://wakatime.com/share/@JoePena/6bb2b331-bd6a-4c1b-abc0-e0c89dd6ba78.svg"></embed>
      </figure>
    </div>
    <div className="tech-stack">
      <h1>TECHNOLOGY STACK</h1>
      <div className="tech-stack-list">
        <ReactTooltip
          className="tooltip"
          place="top"
          type="info"
          effect="float"
        />
        <AngularIcon className="tech-stack-icon" data-tip="Angular" />
        <AWSIcon className="tech-stack-icon" data-tip="Amazon Web Services" />
        <BabelIcon className="tech-stack-icon" data-tip="Babel" />
        <BashIcon className="tech-stack-icon" data-tip="Bash Shell" />
        <BootStrapIcon className="tech-stack-icon" data-tip="Bootstrap" />
        <ChaiIcon className="tech-stack-icon" data-tip="Chai" />
        <CSSIcon className="tech-stack-icon" data-tip="CSS 3" />
        <Djangoicon className="tech-stack-icon" data-tip="Django" />
        <DockerIcon className="tech-stack-icon" data-tip="Docker" />
        <ExpressIcon className="tech-stack-icon" data-tip="Express" />
        <GatsbyIcon className="tech-stack-icon" data-tip="Gatsby" />
        <GitIcon className="tech-stack-icon" data-tip="Git" />
        <GitHubIcon className="tech-stack-icon" data-tip="GitHub" />
        <GraphQLIcon className="tech-stack-icon" data-tip="GraphQL" />
        <HerokuIcon className="tech-stack-icon" data-tip="Heroku" />
        <HTMLIcon className="tech-stack-icon" data-tip="HTML 5" />
        <JavaIcon className="tech-stack-icon" data-tip="Java" />
        <JavascriptIcon className="tech-stack-icon" data-tip="Javascript" />
        <JekyllIcon className="tech-stack-icon" data-tip="Jekyll" />
        <JestIcon className="tech-stack-icon" data-tip="Jest" />
        <JQueryIcon className="tech-stack-icon" data-tip="JQuery" />
        <JSONIcon className="tech-stack-icon" data-tip="JSON" />
        <KnexIcon className="tech-stack-icon" data-tip="Knex" />
        <LinuxIcon className="tech-stack-icon" data-tip="Linux" />
        <MochaIcon className="tech-stack-icon" data-tip="Mocha" />
        <MongoDBIcon className="tech-stack-icon" data-tip="MongoDB" />
        <NetlifyIcon className="tech-stack-icon" data-tip="Netlify" />
        <NodeJSIcon className="tech-stack-icon" data-tip="NodeJS" />
        <NPMIcon className="tech-stack-icon" data-tip="NPM" />
        <PassportIcon className="tech-stack-icon" data-tip="Passport" />
        <PostgreSQLIcon className="tech-stack-icon" data-tip="PostgreSQL" />
        <PythonIcon className="tech-stack-icon" data-tip="Python" />
        <RailsIcon className="tech-stack-icon" data-tip="Rails" />
        <ReactRouterIcon className="tech-stack-icon" data-tip="React Router" />
        <ReactIcon className="tech-stack-icon" data-tip="React.js" />
        <ReduxIcon className="tech-stack-icon" data-tip="Redux" />
        <RubyIcon className="tech-stack-icon" data-tip="Ruby" />
        <SassIcon className="tech-stack-icon" data-tip="Sass" />
        <SequelizeIcon className="tech-stack-icon" data-tip="Sequelize" />
        <ServerlessIcon className="tech-stack-icon" data-tip="Serverless" />
        <ShopifyIcon className="tech-stack-icon" data-tip="Shopify" />
        <TravisCIIcon className="tech-stack-icon" data-tip="TravisCI" />
        <VSCodeIcon className="tech-stack-icon" data-tip="Visual Studio Code" />
      </div>
    </div>
  </div>
);

export default Tech;
