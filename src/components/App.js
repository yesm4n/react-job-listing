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
  return (
    <>
      <section className="section">
        <img className="bg-img" src={background} alt="Background header" />
        <Cardbox />
      </section>
      <div className="container">
        <div className="hero">
          {data.map((companyData, index) => (
            <Company
              data={companyData}
              key={companyData.id}
              image={images[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Cardbox() {
  return (
    <div className="card box">
      <div className="icon-text">
        <span className="skills">Frontend</span>
        <img className="icon" src={iconremove} alt="Remove icon" />
      </div>
    </div>
  );
}

function Company({ data, image }) {
  const {
    // id,
    // logo,
    company,
    contract,
    featured,
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
      <div className={isNew && featured ? `card card-active` : `card`}>
        <img className="img" src={image} alt="Account" />
        <div>
          <div className="card-info__header">
            <h6 className="card-header">{company}</h6>
            <span className={isNew ? 'new component' : ''}>
              {isNew ? 'New!' : ''}
            </span>
            <span className={featured ? 'featured component' : ''}>
              {featured ? 'Featured' : ''}
            </span>
          </div>
          <h4 className="position-header">{position}</h4>
          <div className="card-info__info">
            <span>{postedAt}</span>
            <span> {contract} </span>
            <span> {location} </span>
          </div>
        </div>
        <div className="card-title">
          <span className="skills">{role}</span>
          <span className="skills">{level}</span>
          {languages.map(n => (
            <span className="skills" key={n}>
              {n}
            </span>
          ))}
          {tools.map(n => (
            <span className={tools ? 'skills' : ''} key={n}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
