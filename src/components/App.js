import { useState } from 'react';
import { data } from './Data';
import Output from './Output';
import Company from './Company';
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

  function handleClear(skillType, skill) {
    switch (skillType) {
      case 'role':
        setRole(role.filter(existingRole => existingRole !== skill));
        break;
      case 'level':
        setLevel(level.filter(existingLevel => existingLevel !== skill));
        break;
      case 'language':
        setLanguage(language.filter(existingLang => existingLang !== skill));
        break;
      case 'tools':
        setTools(tools.filter(existingTool => existingTool !== skill));
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
        <div className="bg-img"></div>
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
            const {
              role: companyRole,
              level: companyLevel,
              languages,
              tools,
            } = companyData;

            const criteriaRole =
              selectedCriteria.role.length === 0 ||
              companyRole.includes(selectedCriteria.role);

            const criteriaLevel =
              selectedCriteria.level.length === 0 ||
              companyLevel.includes(selectedCriteria.level);

            const criteriaLanguages =
              selectedCriteria.language.length === 0 ||
              selectedCriteria.language.every(lang => languages.includes(lang));

            const criteriaTools =
              selectedCriteria.tools.length === 0 ||
              selectedCriteria.tools.every(tool => tools.includes(tool));

            const shouldDisplay =
              criteriaRole &&
              criteriaLevel &&
              criteriaLanguages &&
              criteriaTools;

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
