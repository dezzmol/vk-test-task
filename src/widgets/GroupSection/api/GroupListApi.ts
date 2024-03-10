import { GetGroupsResponse } from "../model/GetGroupResponse.ts"
import groups from "../mock/groups.json"

export const mockGetGroupsResponse: () => GetGroupsResponse = () => {
    // Генерируем рандомное значение для result, которое будет либо 0, либо 1
    const randomResult = Math.random() < 0.5 ? 0 : 1;

    return {
        result: randomResult,
        data: randomResult === 1 ? groups : [] // Если result равен 0, возвращаем пустой массив данных
    };
};

export const fetchGroups = (): Promise<GetGroupsResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockGetGroupsResponse());
        }, 1000);
    });
};