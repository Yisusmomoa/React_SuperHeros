import React from 'react';
import HeroList from '../hero/heroList';

const DcScreen = () => {
    return (
        <div>
            <h1>DcScreen</h1>
            <hr/>
            <HeroList publisher='DC Comics'/>
        </div>
    );
}

export default DcScreen;
