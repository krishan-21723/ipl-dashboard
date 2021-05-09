import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallcard';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

import './HomePage.scss';
import { TeamPage } from './TeamPage';
import { TeamTile } from '../components/TeamTile';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();
                setTeams(data);
            };
            fetchAllTeams();
        }, []
    )

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashbard</h1>
            </div>
            <div className="team-grid">
                {teams.map(team => <TeamTile teamName={team.teamName}></TeamTile>)}
            </div>
        </div>
    );
}
