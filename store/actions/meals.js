export const TOGGlE_FAVOURITE = "TOGGlE_FAVOURITE"
export const SET_FILTERS = "SET_FILTERS"

export const toggleFavourite=(id)=>{
    return {
        type:TOGGlE_FAVOURITE,
        mealId:id
    }
}

export const setFilters = (filterSettings)=>{
    return {
        type:SET_FILTERS,
        filters:filterSettings
}
}