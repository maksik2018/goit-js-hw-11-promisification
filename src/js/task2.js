// Подзадание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback -
//     функцию callback,
//     а принимала всего два параметра allUsers и username и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
    
        const updatedUsers = allUsers.map(user =>
            user.name === username ? { ...user, active: !user.active } : user
        );

        return Promise.resolve(updatedUsers);
    
};
// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);






// const toggleUserState = (allUsers, username, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === username ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

// Currently the function works like this
// toggleUserState(users, 'Mango', console.table);
// toggleUserState(users, 'Ajax', console.table);












