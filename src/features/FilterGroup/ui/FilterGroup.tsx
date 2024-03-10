import {Checkbox, FormItem, Group, Header, NativeSelect} from "@vkontakte/vkui";
import {FC, useEffect, useState} from "react";
import {GroupType} from "../lib/useFilterGroup/useFilterGroup.ts";
import { GroupModel } from "@/entities/Group";
import {getAllGroupsColors} from "@/features/FilterGroup/lib/getAllGroupsColors/getAllGroupsColors.ts";

interface Props {
    groups: GroupModel[]
    havingFriends: boolean
    setHavingFriends: React.Dispatch<React.SetStateAction<boolean>>
    groupType: GroupType
    setGroupType: React.Dispatch<React.SetStateAction<GroupType>>
    groupColor: string | undefined
    setGroupColor: React.Dispatch<React.SetStateAction<string | undefined>>
}

const FilterGroup: FC<Props> = (
    {
        groups,
        groupColor,
        setGroupColor,
        setGroupType,
        groupType,
        setHavingFriends,
        havingFriends
    }) => {
    const [colors, setColors] = useState<string[]>([]) // Тут храним массив цветов

    useEffect(() => {
        if (colors.length === 0) { //Если массив цветов не загружен, загружаем его цветами из групп
            setColors(getAllGroupsColors(groups))
        }
    }, [groups]);

    return (
        <Group header={<Header mode={"secondary"}>Фильтры</Header>}>
            <FormItem
                top={"Выберите тип группы"}
            >
                <NativeSelect
                    value={groupType}
                    onChange={(event) => setGroupType(event.target.value as GroupType)}
                >
                    <option value={"all"}>Все</option>
                    <option value={"open"}>Открытые</option>
                    <option value={"closed"}>Закрытые</option>
                </NativeSelect>
            </FormItem>
            <FormItem
                top={"Выберите цвет аватарки"}
            >
                <NativeSelect
                    value={groupColor}
                    onChange={(event) => setGroupColor(event.target.value)}
                >
                    <option value={"undefined"}>Не выбрано</option>
                    {colors.map(color =>
                        <option value={color} key={color}>{color}</option>
                    )}
                </NativeSelect>
            </FormItem>
            <FormItem>
                <Checkbox
                    checked={havingFriends}
                    onChange={event => setHavingFriends(event.target.checked)}
                >
                    Есть друзья в группе
                </Checkbox>
            </FormItem>
        </Group>
    );
};

export default FilterGroup;