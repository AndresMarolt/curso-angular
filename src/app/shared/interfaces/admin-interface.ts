export interface AdminInterface {
    email: string,
    password: string
}

export interface LoginSuccessful {
    token: string;
}

export interface SingleUserResponse {
    data: AdminInterface;
    support: {
        url: string;
        text: string;
    }
}