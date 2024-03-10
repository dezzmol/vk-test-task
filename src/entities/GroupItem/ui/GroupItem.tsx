import {GroupModel} from "@/entities/Group";
import {FC, useState} from "react";
import {MiniInfoCell, SimpleCell, Tappable, Title} from "@vkontakte/vkui";
import {Icon24Followers} from '@vkontakte/icons';
import {GroupColor} from "@/shared/ui";
import {num_word} from "@/shared/lib";

interface Props {
    group: GroupModel
}

const GroupItem: FC<Props> = ({group}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <SimpleCell>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "20px"}}>
                <div>
                    <GroupColor color={group.avatar_color}/>
                </div>
                <div style={{}}>
                    <Title
                        level={"2"}
                    >{group.name}</Title>
                    <MiniInfoCell
                        before={<Icon24Followers/>}
                    >
                        <div>{group.closed ? "Закрытая" : "Открытая"}</div>
                        {group.members_count}
                        {num_word(group.members_count, [" Подписчик", " Подписчика", " Подписчиков"])}
                        {group.friends && <Tappable
                            hasHover={false}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {`${group.friends.length}
                                Друзей`}
                        </Tappable>}
                    </MiniInfoCell>
                </div>
            </div>
            {isOpen && group.friends && group.friends.map((friend, index) =>
                <SimpleCell key={index}>{friend.first_name} {friend.last_name}</SimpleCell>
            )}
        </SimpleCell>
    );
};

export default GroupItem;