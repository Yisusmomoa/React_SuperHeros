import React,{useMemo} from 'react';
import { getHeroByPublisher } from '../../selectores/getHeroByPublisher';
import HeroCard from './heroCard';

const HeroList = ({publisher}) => {
    //const heroes=getHeroByPublisher(publisher);
    const heroes=useMemo(() => getHeroByPublisher(publisher), [publisher])
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3' >
            {
                heroes.map(heroe=>(
                <HeroCard key={heroe.id}
                    {...heroe}
                >
                </HeroCard>
                )) 
            }
        </div>
    );
}

export default HeroList;
