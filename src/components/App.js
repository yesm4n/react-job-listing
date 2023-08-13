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
  const [selectListing, setSelectListing] = useState([]);

  function handleSetSelectListing(newList) {
    if (selectListing.includes(newList)) return;

    setSelectListing([...selectListing, newList]);
  }

  return (
    <>
      <section className="section">
        <img className="bg-img" src={background} alt="Background header" />
        <Cardbox
          selectListing={selectListing}
          setSelectListing={setSelectListing}
        />
      </section>
      <div className="container">
        <div className="hero">
          {data.map((companyData, index) => (
            <Company
              data={companyData}
              key={companyData.id}
              image={images[index]}
              selectListing={selectListing}
              handleSetSelectListing={handleSetSelectListing}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Company({ data, image, handleSetSelectListing }) {
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
      <div className={isNew && featured ? `card card-active` : `card `}>
        <img className="img" src={image} alt="Account" />
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
          <Skills
            role={role}
            languages={languages}
            level={level}
            handleSetSelectListing={handleSetSelectListing}
          />
          <Tools
            tools={tools}
            handleSetSelectListing={handleSetSelectListing}
          />
        </div>
      </div>
    </>
  );
}

function Skills({ role, languages, level, handleSetSelectListing }) {
  return (
    <>
      <span className="skills" onClick={() => handleSetSelectListing(role)}>
        {role}
      </span>
      <span className="skills" onClick={() => handleSetSelectListing(level)}>
        {level}
      </span>
      {languages.map((lang, i) => (
        <span
          className="skills"
          key={i}
          onClick={() => handleSetSelectListing(lang)}
        >
          {lang}
        </span>
      ))}
    </>
  );
}

function Tools({ tools, handleSetSelectListing }) {
  return (
    <>
      {tools.map(skillTools => (
        <span
          className={tools ? 'skills' : ''}
          key={skillTools}
          onClick={() => handleSetSelectListing(skillTools)}
        >
          {skillTools}
        </span>
      ))}
    </>
  );
}

function Cardbox({ selectListing, setSelectListing }) {
  console.log(selectListing);

  function handleClear(item) {
    const updatedList = selectListing.filter(
      selectedItem => selectedItem !== item
    );
    setSelectListing(updatedList);
  }

  return (
    <>
      <div className={selectListing.length === 0 ? '' : 'card box'}>
        {selectListing.length > 0 &&
          selectListing.map((item, index) => (
            <div className="icon-text" key={index}>
              <span className="skills">{item}</span>
              <img
                className="icon"
                src={iconremove}
                alt="Remove icon"
                onClick={() => handleClear(item)}
              />
            </div>
          ))}
      </div>
    </>
  );
}
