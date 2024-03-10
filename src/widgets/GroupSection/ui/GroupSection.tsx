import {FilterGroup} from "@/features/FilterGroup";
import {GroupList} from "@/features/GroupList";
import {useEffect, useState} from "react";
import {GroupModel} from "@/entities/Group";
import {fetchGroups} from "../api/GroupListApi.ts";
import {GroupType, useFilterGroups} from "@/features/FilterGroup/lib/useFilterGroup/useFilterGroup.ts";
import {SimpleCell} from "@vkontakte/vkui";

const GroupSection = () => {
    const [groups, setGroups] = useState<GroupModel[]>([])
    const [havingFriends, setHavingFriends] = useState<boolean>(false)
    const [groupType, setGroupType] = useState<GroupType>("all")
    const [groupColor, setGroupColor] = useState<string | undefined>(undefined) // Тут храним выбранный цвет в фильтре
    const filteredGroups = useFilterGroups(groups, groupType, havingFriends, groupColor);
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        fetchGroups().then(response => {
            if (response.result === 1 && response.data) {
                setGroups(response.data);
            } else {
                setIsError(true)
            }
        });
    }, []);

    return (
        <div>
            <FilterGroup
                groups={filteredGroups}
                havingFriends={havingFriends}
                setHavingFriends={setHavingFriends}
                groupType={groupType}
                setGroupType={setGroupType}
                groupColor={groupColor}
                setGroupColor={setGroupColor}
            />
            <GroupList
                groups={filteredGroups}
            />
            {isError &&
                <SimpleCell>
                    Ошибка загрузки данных
                </SimpleCell>
            }
        </div>
    );
};

export default GroupSection;