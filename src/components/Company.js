import Skills from './Skills';

export default function Company({
  data,
  images,
  handleSetRole,
  handleSetLevel,
  handleSetLanguage,
  handleSetTools,
}) {
  const {
    company,
    contract,
    featured,
    id,
    location,
    new: isNew,
    position,
    postedAt,
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
