import BasketballTeam from "./props-lesson/BasketballTeam";

function ShowBasketballTeam() {
  return (
    <div>
      <BasketballTeam
        team_name="Los Angelas Lakers"
        team_star_player="LeBron James"
        team_manager="Rob Pelinka"
      />
      <BasketballTeam
        team_name="New York Knicks"
        team_star_player="Jalen Brunson"
        team_manager="Doc Rivers"
      />
    </div>
  );
}

export default ShowBasketballTeam;
