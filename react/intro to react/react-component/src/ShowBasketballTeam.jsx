import BasketballTeam from "./props-lesson/BasketballTeam";

function ShowBasketballTeam() {
  // using spread operator with props 
    const newBasketballTeam ={ 
      team_name:"Golden State Worriorrs",
      team_star_players:"Stephen Curry",
      team_manager:"Mike Dunleavy Jr.",
      players:["Draymond Green","Brandin Podziemski","Al Horford","Malevy Leons","Jimmy Butler"],
    }
  return (
    <div> 
      <BasketballTeam{...newBasketballTeam}/>
      <BasketballTeam
        team_name="Los Angelas Lakers"
        team_star_player="LeBron James"
        team_manager="Rob Pelinka"
        players={[
          "Lebron James",
          "Luka Doncic",
          "Jake Laravia",
          "Bronny James",
        ]}
      />
      <BasketballTeam
        team_name="New York Knicks"
        team_star_player="Jalen Brunson"
        team_manager="Gersson Rosas"
        players={[
          "Jalen Brunson",
          "Mikal Bridge",
          "OG Annuonobby",
          "Karl Anthony-Towns",
        ]}
      />
      <BasketballTeam
        team_name="Boston Celtics"
        team_star_player="Jayson Tatum"
        team_manager="Martin O'Neill"
        players={[
          "Jayson Tatum",
          "Paul George",
          "Derrick White",
          "Mitchell Robinson",
        ]}
      />
    </div>
  );
}

export default ShowBasketballTeam;
