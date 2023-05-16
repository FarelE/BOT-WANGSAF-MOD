import fs from "fs";
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));

const adduang = (sender) => {
    const obj = { id: sender, uang: 0 };
    uang.push(obj);
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang));
};
const adduangUser = (sender, amount) => {
    let position = false;
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i;
        }
    });
    if (position !== false) {
        uang[position].uang += amount;
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang));
    }
};
const checkuangUser = (sender) => {
    let position = false;
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i;
        }
    });
    if (position !== false) {
        return uang[position].uang;
    }
};
const confirmuang = (sender, amount) => {
    let position = false;
    Object.keys(uang).forEach((i) => {
        if (uang[i].id == sender) {
            position = i;
        }
    });
    if (position !== false) {
        uang[position].uang -= amount;
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang));
    }
};

export { adduang };
export { adduangUser };
export { checkuangUser };
export { confirmuang };
export default {
    adduang,
    adduangUser,
    checkuangUser,
    confirmuang
};
