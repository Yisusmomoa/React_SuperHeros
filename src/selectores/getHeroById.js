import { heroes } from "../data/heroe"

export const getHeroById=(id='')=>{
    return heroes.find(heroe => heroe.id=== id);
}