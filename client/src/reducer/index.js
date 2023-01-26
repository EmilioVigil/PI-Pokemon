// Initial state
const initialState = {
    pokemones : [],
    allPokemones : [] ,
    detailPokemon : {},
    allTypes : []
}


const reducer = ( state=initialState , action )=>{
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemones: action.payload,
                allPokemones : action.payload
            }
        case "FILTER_POKEMON_TYPE":
            const allPokemones = state.allPokemones;   //Tengo a todos los pokemones
            const typeFilter = action.payload ==='all' ? allPokemones : allPokemones.filter( el => el.tipos.includes(action.payload) )
            return{
                ...state,
                pokemones : typeFilter
            }
        
        case "FILTER_CREATED":
            const pokemones= state.allPokemones;    
            const createdFilter = action.payload === 'created' ? pokemones.filter( el => el.createDb) : pokemones.filter( el => !el.createDb)
            return{
                ...state,
                pokemones : action.payload === 'all' ? state.allPokemones : createdFilter
            }
            
        case "GET_POKEMON_NAME":
            return {
                ...state,
                pokemones : action.payload
            }

        case "ORDER_NAME":
            let sortOrderName = action.payload === "asc" ? 
                state.pokemones.sort( (a , b) =>{
                    if( a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if( a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                    return 0;
                }) : state.pokemones.sort( (a , b)=>{
                    if( a.name.toLowerCase() > b.name.toLowerCase() ) return 1;
                    if( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
                    return 0;
                })
            return{
                ...state,
                pokemones : sortOrderName
            }

        case "ORDER_ATTACK":
            let sortOrderAttack = action.payload === '+attack' ?
                state.pokemones.sort ( (a , b)=>{
                    return b.attack - a.attack
                }) : state.pokemones.sort( (a ,b)=>{
                    return a.attack - b.attack
                })
            
                return{
                    ...state,
                    pokemones : sortOrderAttack
                }
        
        case "GET_DETAIL_POKEMON" :
                return {
                ...state,
                detailPokemon : action.payload
            }
        case "CLEAR_DETAIL":
            return {
                ...state,
                detailPokemon : {}
            }
        
        case "POST_POKEMON":
            return{
                ...state
            }

        case "GET_TYPES":
        return{
            ...state,
            allTypes : action.payload
        }

        default:
            return state
    }
}



export default reducer;