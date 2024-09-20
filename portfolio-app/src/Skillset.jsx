import React from "react";
import { Container } from "react-bootstrap";

export default function Skillset() {
  const skillSets = [
    {
      name: 'skill_left',
      skills: [
        { lang: 'React', skill: 9 },
        { lang: 'Mongo', skill: 8 },
        { lang: 'NodeJs', skill: 9 },
        { lang: 'Express', skill: 9 },
      ]
    },
    {
      name: 'skill_right',
      skills: [
        { lang: 'Java', skill: 9 },
        { lang: 'Python', skill: 7 },
        { lang: 'C++', skill: 8 },
        { lang: 'DSA', skill: 8 },
      ]
    }
  ];

  return (
    <Container id="Skills" className="mb-5">
      <h1 className="Contact-heading">SkillSet</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {skillSets.map((set, setIndex) => (
          <div className={set.name} key={setIndex}>
            {set.skills.map((s, skillIndex) => (
              <div className="d-flex justify-content-between align-items-center skill" key={skillIndex}>
                <div className="skill-heading">{s.lang}</div>
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
