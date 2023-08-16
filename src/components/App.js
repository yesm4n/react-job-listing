import background from './images/bg-header-desktop.svg';
import insure from './images/insure.svg';
import account from './images/account.svg';
import faceit from './images/faceit.svg';
import photosnap from './images/photosnap.svg';
import myhome from './images/myhome.svg';
import shortly from './images/shortly.svg';
import manage from './images/manage.svg';
import loopstudios from './images/loop-studios.svg';
import eyecamco from './images/eyecam-co.svg';
import airfilter from './images/the-air-filter-company.svg';
import iconremove from './images/icon-remove.svg';
import { data } from './Data';
import { useState } from 'react';

const images = [
  photosnap,
  manage,
  account,
  myhome,
  loopstudios,
  faceit,
  shortly,
  insure,
  eyecamco,
  airfilter,
];

export default function App() {
  const [role, setRole] = useState('');
  const [level, setLevel] = useState([]);
  const [language, setLanguage] = useState([]);
  const [tools, setTools] = useState([]);

  return (
    <>
      <section className="section">
        <img className="bg-img" src={background} alt="Background header" />
        <Output iconremove={iconremove} />
      </section>
      <div className="container">
        <div className="hero">
          {data.map(companyData => (
            <Company key={companyData.id} data={companyData} images={images} />
          ))}
        </div>
      </div>
    </>
  );
}

function Company({ data, images }) {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    new: isNew,
    position,
    postedAt,
    role,
    tools,
  } = data;

  return (
    <>
      <div className={isNew && featured ? `card card-active` : `card `}>
        <img className="img" src={images[id - 1]} alt="Account" />
        <div>
          <div className="card-info__header">
            <h6 className="card-header"> {company} </h6>
            <span className={isNew ? 'new component' : ''}>
              {isNew ? 'New!' : ''}
            </span>
            <span className={featured ? 'featured component' : ''}>
              {featured ? 'Featured' : ''}
            </span>
          </div>
          <h4 className="position-header"> {position} </h4>
          <div className="card-info__info">
            <span> {postedAt} </span>
            <span> {contract} </span>
            <span> {location} </span>
          </div>
        </div>
        <div className="card-title">
          <Skills data={data} />
        </div>
      </div>
    </>
  );
}

function Skills({ data }) {
  const { role, level, languages, tools } = data;

  return (
    <>
      <span className="skills">{role}</span>
      <span className="skills">{level}</span>
      {languages.map((lang, i) => (
        <span className="skills" key={i}>
          {lang}
        </span>
      ))}
      {tools.map((tool, i) => (
        <span className="skills" key={i}>
          {tool}
        </span>
      ))}
    </>
  );
}

function Output({ iconremove }) {
  return (
    <>
      <div className="card box">
        <div className="icon-text">
          <span className="skills">INSERT ITEM HERE</span>
          <img className="icon" src={iconremove} alt="Remove icon" />
        </div>
      </div>
    </>
  );
}
