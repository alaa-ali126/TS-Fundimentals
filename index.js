"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterAdmins = (users) => {
    const filteredAdmins = users.filter((user) => user.isAdmin);
    console.log(filteredAdmins);
    return filteredAdmins;
};
//# sourceMappingURL=index.js.map