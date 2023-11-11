export interface MovieObject {
    title:string,
    poster_path:string,
    release_date:string,
    vote_average:number,
    id?:number
}

export interface PageEvent {
    first?: number|undefined,
    rows?: number|undefined,
    page?: number|undefined,
    pageCount?: number|undefined
}

export interface movieDetailsData{
    backdrop_path:string,
    genres:genre[],
    original_title:string,
    overview:string,
    poster_path:string,
    release_date:string,
    runtime:number,
    vote_average:number,
    tagline:string


}


export interface genre{
    id:number,
    name:string
}

export interface keyword{
    id:number,
    name:string
}


export interface castActor{
    name:string,
    original_name:string,
    character:string,
    profile_path:string
}