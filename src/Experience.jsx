import { portfolioConfig } from "./config";

export default function Experience({ bg, col }) {
  function WorkDivs({ id, position, date, company }) {
    return (
      <>
        <div
          className="project-cards"
          id={`pc${id}`}
          onMouseEnter={() => ChnageBGFG(id, true)}
          onMouseLeave={() => ChnageBGFG(id, false)}
          onTouchStart={() => ChnageBGFG(id, true)}
          onTouchEnd={() => ChnageBGFG(id, false)}
        >
          <h1 id={`project-cards-h2${id}`}>
            {position} <span>&nbsp; {date}</span>
          </h1>
          <div className="type-of-project" id={"types" + id}>
            <span>{company}</span>
          </div>
        </div>
      </>
    );
  }

  function ChnageBGFG(id, bool) {
    document.querySelector(`#pc${id}`).style.backgroundColor = bool
      ? col
      : "transparent";
    document.querySelector(`#pc${id}`).style.color = bool ? bg : col;
  }

  return (
    <div
      className="projects"
      id="pro"
      style={{ backgroundColor: bg, color: col }}
    >
      <section>
        <h1>Work Experience &nbsp; </h1>
        <h1>Work Experience &nbsp; </h1>
        <h1>Work Experience &nbsp; </h1>
      </section>

      <div className="project_container">
        {portfolioConfig.experience.map((element, id) => {
          return (
            <WorkDivs
              key={id}
              id={id}
              date={element[0]}
              position={element[1]}
              company={element[2]}
            />
          );
        })}
      </div>
    </div>
  );
}
