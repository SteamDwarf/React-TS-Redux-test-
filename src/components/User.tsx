import React, {FC} from 'react';

interface IUserAdress {
    street: string,
    city: string,
    zipcode: string
}

interface IUserProps {
    name: string,
    email: string,
    phone: string
}

const User:FC<IUserProps> = ({name, email, phone}) => {
    return (
        <div>
            {name} - {email} - {phone}
        </div>
    );
}

export default User;
