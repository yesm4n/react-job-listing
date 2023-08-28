import Skills from './Skills';

export default function Company({
  data,
  handleSetRole,
  handleSetLevel,
  handleSetLanguage,
  handleSetTools,
}) {
  const {
    company,
    contract,
    featured,
    location,
    logo,
    new: isNew,
    position,
    postedAt,
  } = data;

  return (
    <>
      <div className={isNew && featured ? `card card-active` : `card `}>
        <img className="img" src={logo} alt={company} />
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
            data={data}
            handleSetRole={handleSetRole}
            handleSetLevel={handleSetLevel}
            handleSetLanguage={handleSetLanguage}
            handleSetTools={handleSetTools}
          />
        </div>
      </div>
    </>
  );
}
