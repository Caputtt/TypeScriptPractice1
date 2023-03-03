import {UsersName, UsersGender, UsersArray, usersArray} from "./users";
import {UsersAge, UsersPosition, usersInfoArray} from "./userInfo";

interface UsersFinal extends UsersName, UsersPosition,UsersAge, UsersGender {
}

function getUsersJobPositions(usersArray: UsersArray[]) {
    const UsersJobPositions:UsersFinal[] = [];
    usersArray.forEach(
        function (v,i) {
            const newUserJobPosition:UsersFinal = {
                name: v.name,
                position: usersInfoArray[i].organization.position,
                age: usersInfoArray[i].age,
                gender: v.gender
            }
            UsersJobPositions.unshift(newUserJobPosition);
        }
    );
    return UsersJobPositions;
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);