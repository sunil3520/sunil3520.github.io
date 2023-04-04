import React from "react";

const Stats = () => {
  return (
    <div style={{ backgroundColor: "rgb(198, 213, 206)" }}>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/sunil3520">
          <img
            id="github-streak-stats"
            alt=""
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=sunil3520"
          />
        </a>
      </div>

      <div
        style={{
          width: "60%",
          padding: "15px",
          height: "auto",
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/sunil3520">
          <img
            id="github-top-langs"
            alt=""
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sunil3520" //launguages
          />
        </a>
        <a href="https://github.com/sunil3520">
          <img
            id="github-stats-card"
            alt=""
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=sunil3520&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
