import {GroupModel} from "@/entities/Group";
import {useMemo} from "react";

export type GroupType = "all" | "closed" | "opened"

const useFilterGroupByType = (Groups: GroupModel[], groupType: GroupType) => {
    const filteredGroups = useMemo(() => {
        if (Groups) {
            if (groupType === "all") {
                return Groups
            }
            if (groupType === "closed") {
                return Groups.filter((group) => group.closed)
            }
            if (groupType === "opened") {
                return Groups.filter((group) => !group.closed)
            }
        }
        return Groups
    }, [Groups, groupType])

    return filteredGroups;
}


const useFilterByHavingFriendInGroup = (Groups: GroupModel[], havingFriend: boolean) => {
    const filteredGroups = useMemo(() => {
        if (Groups) {
            if (havingFriend) {
                return Groups.filter((group) => group.friends)
            }
            if (!havingFriend) {
                return Groups
            }
        }
        return Groups
    }, [Groups, havingFriend])

    return filteredGroups;
}

const useFilterGroupsByGroupColor = (Groups: GroupModel[], color: string | undefined) => {
    const filteredGroups = useMemo(() => {
        if (color !== "undefined" && color) {
            return Groups.filter((group) => group.avatar_color === color)
        }
        return Groups
    }, [Groups, color])

    return filteredGroups
}

export const useFilterGroups = (
    Groups: GroupModel[],
    groupType: GroupType,
    havingFriend: boolean,
    color: string | undefined
) => {
    const filteredGroupsByType = useFilterGroupByType(Groups, groupType);

    const filterByHavingFriendInGroup = useFilterByHavingFriendInGroup(filteredGroupsByType, havingFriend);

    const filterGroupsByGroupColor = useFilterGroupsByGroupColor(filterByHavingFriendInGroup, color);

    return filterGroupsByGroupColor
}