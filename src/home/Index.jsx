import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Praktikum PWEB</h1>
            <p>Gregorius Rio Triaji Pamungkas, M Adhy Hudan, M Akbar Noersal, Rahfil Farhan</p>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}

export { Home };