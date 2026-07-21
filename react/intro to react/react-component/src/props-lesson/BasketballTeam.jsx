function BasketballTeam({team_name , team_star_player , team_manager}){ 
    return( 
        <div> 
            <h2>Team:{team_name}</h2>
            <h2>Star Player:
                {team_star_player}</h2>
            <h2>Manager:{team_manager}</h2>
        </div>
    )
}  

export default BasketballTeam