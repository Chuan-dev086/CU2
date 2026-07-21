import BasketballPlayer from "./BasketballPlayer";

function BasketballTeam({
  team_name="Unnamed Team Name",
  team_star_player="Unnamed Star Player",
  team_manager ="Unnamed Manager",
  players =["Unnamed players"],
}) {
  return (
    <div>
      <h2 style={{ color: "black" }}>Team:{team_name}</h2>
      <h2 style={{ color: "red" }}>
        Star Player:
        {team_star_player}
      </h2>
      <h2 style={{ color: "blueviolet" }}>Manager:{team_manager}</h2>
      {/*.map is for you to iterate through every elemnt in the array*/}
      {players.map((player, index) => (
        <BasketballPlayer key={index} player_name={player} />
      ))}
      {/* In the instance above we iterate through players  */}
      {/* reference from show basketball team to see the players ,it should be in the form of array  */}
      {/* because it is an array we use .map() to prase through each element */}
      {/* each item in the array will be used as 'player' in the map() function */}
      {/* we also inculde index as the key because we are displaying multiple BasketballPlayer component */}
      {/* Then, we use 'player' to assign to BasketballPlayer's player_name prop,so it can display the player-name in the basketball player team  */}
    </div>
  );
}



export default BasketballTeam;
