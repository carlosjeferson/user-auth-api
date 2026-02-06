export declare function loginService(email: string, password: string): Promise<{
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}>;
