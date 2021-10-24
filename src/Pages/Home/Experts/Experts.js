import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        id: 1,
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        id: 2,
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        id: 3,
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        id: 4,
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]

const Experts = () => {
    return (
        <div className='container'>
            <h3 className='text-primary my-5'>Experts</h3>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;