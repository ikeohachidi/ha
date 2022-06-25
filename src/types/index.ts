export enum Status {
	ALIVE = 'Alive',
	DEAD = 'DEAD'
}

export enum Species {
	HUMAN = 'Human',
	ALIEN = 'Alien'
}

export enum Gender {
	MALE = 'Male',
	FEMALE = 'Female'
}

export type UrlString = string;

export interface UrlMeta {
	name: string,
	url: UrlString
}

export interface RequestInfo {
	count: number,
	pages: number,
	next?: string,
	prev?: string
}

export interface ApiResponse<T> {
	info: RequestInfo,
	results: T
}

export interface Character {
	name: string,
	status: Status,
	species: Species,
	gender: Gender,
	episode: UrlString[],
	origin: UrlMeta,
	location: UrlMeta,
	image: string,
	url: UrlString
}

export interface Episode {
	id: number,
	name: string,
	air_date: string,
	episode: string,
	characters: UrlString[],
	url: string,
	created: string
}