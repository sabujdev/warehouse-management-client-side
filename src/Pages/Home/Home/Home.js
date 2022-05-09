import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Team from "../Team/Team";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("ourTeam.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <div id="team" className="container">
        <div className="row">
          <h1 className="text-primary text-center mt-5">Our Incensory Team</h1>
          <div className="product_container">
            {teams.map((team) => (
              <Team key={team.id} team={team}></Team>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
