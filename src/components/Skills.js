export default function Skills({
  data,
  handleSetRole,
  handleSetLevel,
  handleSetLanguage,
  handleSetTools,
}) {
  const { role, level, languages, tools } = data;

  return (
    <>
      <span className="skills" onClick={() => handleSetRole(role)}>
        {role}
      </span>
      <span className="skills" onClick={() => handleSetLevel(level)}>
        {level}
      </span>
      {languages.map((lang, i) => (
        <span
          className="skills"
          key={i}
          onClick={() => handleSetLanguage(lang)}
        >
          {lang}
        </span>
      ))}
      {tools.map((tool, i) => (
        <span className="skills" key={i} onClick={() => handleSetTools(tool)}>
          {tool}
        </span>
      ))}
    </>
  );
}
