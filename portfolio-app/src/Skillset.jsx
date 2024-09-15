import React from "react";
import { Container } from "react-bootstrap";

export default function Skillset() {
  const skillSets = [
    {
      name: 'skill_left',
      skills: [
        { lang: 'React', skill: 9 },
        { lang: 'Mongo', skill: 7 },
        { lang: 'Node Js', skill: 8 },
        { lang: 'HTML', skill: 6 },
      ]
    },
    {
      name: 'skill_right',
      skills: [
        { lang: 'Java', skill: 9 },
        { lang: 'Python', skill: 7 },
        { lang: 'C++', skill: 8 },
        { lang: 'CSS', skill: 6 },
      ]
    }
  ];

  return (
    <Container>
      <h1 className="Contact-heading">SkillSet</h1>
      <div className="d-flex justify-content-around">
        {skillSets.map((set, setIndex) => (
          <div className={set.name} key={setIndex}>
            {set.skills.map((s, skillIndex) => (
              <div className="d-flex justify-content-between align-items-center skill" key={skillIndex}>
                <div>{s.lang}</div>
                <div className="d-flex justify-content-evenly align-items-center">
                  {Array.from({ length: 10 }, (_, i) => (
                    i < s.skill ? (
                      <div className="skilled-num" key={i} />
                    ) : (
                      <div className="num" key={i} />
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}
