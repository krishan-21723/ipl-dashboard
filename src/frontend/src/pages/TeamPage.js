import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from './MatchDetailCard';
import { MatchSmallCard } from './MatchSmallcard';

export const TeamPage = () => {

    const[team, setTeam] = useState({matches: []});
    

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8080/team/Delhi Capitals');
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        }, []
    )


    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>


            <MatchDetailCard match = {team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchSmallCard match = {match}/>)}
        </div>
    );
}
