import {FC} from "react";
import {GroupModel} from "@/entities/Group";
import {Group, Header} from "@vkontakte/vkui";
import GroupItem from "@/entities/GroupItem/ui/GroupItem.tsx";

interface Props {
    groups: GroupModel[]
}

const GroupList: FC<Props> = ({groups}) => {
    return (
        <Group header={<Header mode={"secondary"}>Группы</Header>}>
            {groups.map(group =>
                <GroupItem group={group} key={group.id}/>
            )}
        </Group>
    );
};

export default GroupList;