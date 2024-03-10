import { GroupModel } from "@/entities/Group";

export const getAllGroupsColors = (Group: GroupModel[]) => {
    const colors = new Set<string>();
    for (let i = 0; i < Group.length; i++) {
        if (Group[i].avatar_color) {
            colors.add(Group[i].avatar_color!);
        }
    }

    return Array.from(colors);
}