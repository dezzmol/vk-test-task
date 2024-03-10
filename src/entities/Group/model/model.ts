import {User} from "@/entities/User";

export interface Group {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: User[]
}

export interface GetGroupsResponse {
    result: 1 | 0,
    data?: Group[]
}