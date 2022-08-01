import React, {useMemo} from 'react';
import { useParams,Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectores/getHeroById';

const HeroScreen = () => {
    const {heroeId}=useParams(); //
    console.log(heroeId)
    //const heroe=getHeroById(heroeId);

    const heroe=useMemo(() => getHeroById(heroeId), [heroeId]) //cada vez que la dependencia, el heroeId cambie se vuelve a ejecutar
    
    const navigate=useNavigate();
    if(!heroe)
        return <Navigate to='/'></Navigate>
    
    const imgPath=`/assets/${heroeId}.jpg`
    function handleReturn() {

        navigate(-1);

        // const publisher=heroe.publisher.split(' ');
        // const url=`/${publisher[0]}`
        // navigate(url);
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={imgPath} alt={heroe.superhero} className='img-thumbnail'/>
            </div>
            <div className='col-8'>
                <h3>{heroe.superhero}</h3>
                <ul className='list-group '> 
                    <li className='list-group-item'><b>Alter ego: </b>{heroe.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{heroe.publisher}</li>
                    <li className='list-group-item'><b>First Appearance: </b>{heroe.first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{heroe.characters}</p>

                <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    );
}

export default HeroScreen;
