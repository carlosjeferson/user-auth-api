import { Prisma } from '@prisma/client';
export declare function createUserService({ email, name, password }: Prisma.UserCreateInput): Promise<{
    email: string;
    name: string;
    id: string;
}>;
export declare function getUserService(id: string): Promise<{
    email: string;
    name: string;
    id: string;
}>;
interface GetUsersQuery {
    page?: string | number;
    limit?: string | number;
    order?: string;
    sort?: 'asc' | 'desc';
    email?: string;
    name?: string;
}
export declare function getUsersService(query: GetUsersQuery): Promise<{
    data: {
        email: string;
        name: string;
        id: string;
    }[];
    meta: {
        page: number;
        limit: number;
        total: number;
    };
}>;
export declare function getMeService(userId: string): Promise<{
    email: string;
    name: string;
    id: string;
    role: import(".prisma/client").$Enums.Role;
}>;
export declare function updateUserService(id: string, data: Prisma.UserUpdateInput): Promise<{
    email: string;
    name: string;
    id: string;
}>;
export declare function deleteUserService(id: string): Promise<void>;
export {};
