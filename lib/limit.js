import fs from "fs";
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));

const addlimit = (sender) => {
    const obj = { id: sender, limit: 0 };
    limit.push(obj);
    fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
};
const addlimitUser = (sender, amount) => {
    let position = false;
    Object.keys(limit).forEach((i) => {
        if (limit[i].id === sender) {
            position = i;
        }
    });
    if (position !== false) {
        limit[position].limit += amount;
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
    }
};
const checklimitUser = (sender) => {
    let position = false;
    Object.keys(limit).forEach((i) => {
        if (limit[i].id === sender) {
            position = i;
        }
    });
    if (position !== false) {
        return limit[position].limit;
    }
};

export { addlimit };
export { addlimitUser };
export { checklimitUser };
export default {
    addlimit,
    addlimitUser,
    checklimitUser
};
