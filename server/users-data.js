const users = [];

function AddUser(id, name, room) {
    name = name.trim();
    room = room.trim();

    const userAlreadyExists = users.find(user => user.room === room && user.name === name)
    if (userAlreadyExists) {
        return {error: "username is already taken"};
    }

    const userToAdd = {id, name, room}; 
    users.push(userToAdd);
    return { user: userToAdd };
}

function RemoveUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index != -1) {
        return users.splice(index, 1)[0];
    }
}

function GetUserById(id) {
    return users.find(user => user.id === id);
}

function GetUsersByRoom(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    AddUser,
    RemoveUser,
    GetUserById,
    GetUsersByRoom
}