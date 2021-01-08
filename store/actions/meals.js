export const TOGGlE_FAVOURITE = "TOGGlE_FAVOURITE"

export const toggleFavourite=(id)=>{
    return {
        type:TOGGlE_FAVOURITE,
        mealId:id
    }
}