export default function Output({
  iconremove,
  role,
  level,
  language,
  tools,
  handleClear,
}) {
  function handleOuput(skills, skillType) {
    return skills.map((skill, i) => (
      <div className="icon-text" key={i}>
        <span className="skills">{skill}</span>
        <img
          className="icon"
          src={iconremove}
          alt="Remove icon"
          onClick={() => handleClear(skillType)}
        />
      </div>
    ));
  }

  return (
    <>
      {(role.length !== 0 ||
        level.length !== 0 ||
        language.length !== 0 ||
        tools.length !== 0) && (
        <div className="card box">
          {handleOuput(role, 'role')}
          {handleOuput(level, 'level')}
          {handleOuput(language, 'language')}
          {handleOuput(tools, 'tools')}
        </div>
      )}
    </>
  );
}
