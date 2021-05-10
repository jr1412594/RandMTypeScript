
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location
    location: Location
    image: string;
    episodes: string[];
    url: string;
    created: string
}

export interface Location {
    name: string;
    url: string;
}