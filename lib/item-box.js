import fs from "fs";

const _boxS = JSON.parse(fs.readFileSync('./database/user/item/box-sedang.json'))
const _boxE = JSON.parse(fs.readFileSync('./database/user/item/box-elit.json'))
const _boxL = JSON.parse(fs.readFileSync('./database/user/item/box-langka.json'))

const addBoxS = (sender) => {
        	const obj = {id: sender, boxS : 0}
            _boxS.push(obj)
            fs.writeFileSync('./database/user/item/box-sedang.json', JSON.stringify(_boxS))
        }

        const addBoxSUser = (sender, amount) => {
        	let position = false
            Object.keys(_boxS).forEach((i) => {
                if (_boxS[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _boxS[position].boxS += amount
                fs.writeFileSync('./database/user/item/box-sedang.json', JSON.stringify(_boxS))
            }
        }
		
		const checkBoxSUser = (sender) => {
        	let position = false
            Object.keys(_boxS).forEach((i) => {
                if (_boxS[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _boxS[position].boxS
            }
        }
         
         const confirmBoxS = (sender, amount) => {
             let position = false
            Object.keys(_boxS).forEach((i) => {
                if (_boxS[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _boxS[position].boxS -= amount
                fs.writeFileSync('./database/user/item/box-sedang.json', JSON.stringify(_boxS))
            }
        }
        
const addBoxE = (sender) => {
        	const obj = {id: sender, boxE : 0}
            _boxE.push(obj)
            fs.writeFileSync('./database/user/item/box-elit.json', JSON.stringify(_boxE))
        }

        const addBoxEUser = (sender, amount) => {
        	let position = false
            Object.keys(_boxE).forEach((i) => {
                if (_boxE[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _boxE[position].boxE += amount
                fs.writeFileSync('./database/user/item/box-elit.json', JSON.stringify(_boxE))
            }
        }
		
		const checkBoxEUser = (sender) => {
        	let position = false
            Object.keys(_boxE).forEach((i) => {
                if (_boxE[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _boxE[position].boxE
            }
        }
         
         const confirmBoxE = (sender, amount) => {
             let position = false
            Object.keys(_boxE).forEach((i) => {
                if (_boxE[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _boxE[position].boxE -= amount
                fs.writeFileSync('./database/user/item/box-elit.json', JSON.stringify(_boxE))
            }
        }
        
const addBoxL = (sender) => {
        	const obj = {id: sender, boxL : 0}
            _boxL.push(obj)
            fs.writeFileSync('./database/user/item/box-langka.json', JSON.stringify(_boxL))
        }

        const addBoxLUser = (sender, amount) => {
        	let position = false
            Object.keys(_boxL).forEach((i) => {
                if (_boxL[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _boxL[position].boxL += amount
                fs.writeFileSync('./database/user/item/box-langka.json', JSON.stringify(_boxL))
            }
        }
		
		const checkBoxLUser = (sender) => {
        	let position = false
            Object.keys(_boxL).forEach((i) => {
                if (_boxL[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _boxL[position].boxL
            }
        }
         
         const confirmBoxL = (sender, amount) => {
             let position = false
            Object.keys(_boxL).forEach((i) => {
                if (_boxL[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _boxL[position].boxL -= amount
                fs.writeFileSync('./database/user/item/box-langka.json', JSON.stringify(_boxL))
            }
        }
        
export { addBoxS };
export { addBoxSUser };
export { checkBoxSUser };
export { confirmBoxS };
export { addBoxE };
export { addBoxEUser };
export { checkBoxEUser };
export { confirmBoxE };
export { addBoxL };
export { addBoxLUser };
export { checkBoxLUser };
export { confirmBoxL };
export default {
	addBoxS,
	addBoxSUser,
	checkBoxSUser,
	confirmBoxS,
	addBoxE,
	addBoxEUser,
	checkBoxEUser,
	confirmBoxE,
	addBoxL,
	addBoxLUser,
	checkBoxLUser,
	confirmBoxL
};
