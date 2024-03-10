import {GroupModel} from "@/entities/Group";

export interface GetGroupsResponse {
    result: 1 | 0,
    data?: GroupModel[]
}