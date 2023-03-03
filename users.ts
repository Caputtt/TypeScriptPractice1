export interface UsersId {
    userid: string
}

export interface UsersName {
    name: string
}

export interface UsersGender {
    gender: string
}

export interface UsersArray extends UsersId, UsersName, UsersGender {
}

export const usersArray: UsersArray[] = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        gender: 'man'
    },

    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        gender: 'woman'
    }
];