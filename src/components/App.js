import { useState } from 'react';
import { data } from './Data';
import Output from './Output';
import Company from './Company';
// Images
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
  const [role, setRole] = useState([]);
  const [level, setLevel] = useState([]);
  const [language, setLanguage] = useState([]);
  const [tools, setTools] = useState([]);
  console.log(tools);

  function handleSetRole(newRole) {
    if (role.includes(newRole)) return;
    setRole([...role, newRole]);
  }

  function handleSetLevel(newLvl) {
    if (level.includes(newLvl)) return;
    setLevel([...level, newLvl]);
  }

  function handleSetLanguage(newLang) {
    if (language.includes(newLang)) return;
    setLanguage([...language, newLang]);
  }

  function handleSetTools(newTool) {
    if (tools.includes(newTool)) return;
    setTools([...tools, newTool]);
  }

  function handleClear(skillType) {
    switch (skillType) {
      case 'role':
        setRole([]);
        break;
      case 'level':
        setLevel([]);
        break;
      case 'language':
        setLanguage([]);
        break;
      case 'tools':
        setTools([]);
        break;

      default:
        break;
    }
  }

  const selectedCriteria = {
    role: role,
    level: level,
    language: language,
    tools: tools,
  };

  return (
    <>
      <section className="section">
        <img className="bg-img" src={background} alt="Background header" />
        <Output
          iconremove={iconremove}
          role={role}
          level={level}
          language={language}
          tools={tools}
          handleClear={handleClear}
        />
      </section>
      <div className="container">
        <div className="hero">
          {data.map(companyData => {
            const { role, level, languages, tools } = companyData;

            const shouldDisplay =
              (selectedCriteria.role.length === 0 ||
                role.includes(selectedCriteria.role)) &&
              (selectedCriteria.level.length === 0 ||
                level.includes(selectedCriteria.level)) &&
              (selectedCriteria.language.length === 0 ||
                languages.some(lang =>
                  selectedCriteria.language.includes(lang)
                )) &&
              (selectedCriteria.tools.length === 0 ||
                tools.some(tool => selectedCriteria.tools.includes(tool)));

            if (shouldDisplay) {
              return (
                <Company
                  key={companyData.id}
                  data={companyData}
                  images={images}
                  handleSetRole={handleSetRole}
                  handleSetLevel={handleSetLevel}
                  handleSetLanguage={handleSetLanguage}
                  handleSetTools={handleSetTools}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </>
  );
}
