import fs from "fs";
let _heal = JSON.parse(fs.readFileSync('./database/user/heal.json'));
let _potion = JSON.parse(fs.readFileSync('./database/user/potion.json'));

//━━━━━━━━━━━━━━━[ ENERGI/NYAWA ]━━━━━━━━━━━━━━━━━//
		const addHeal = (sender) => {
        	const obj = {id: sender, heal : 0}
            _heal.push(obj)
            fs.writeFileSync('./database/user/heal.json', JSON.stringify(_heal))
        }

        const addHealUser = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
                if (_heal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _heal[position].heal += amount
                fs.writeFileSync('./database/user/heal.json', JSON.stringify(_heal))
            }
        }
		
		const checkHealuser = (sender) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
                if (_heal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _heal[position].heal
            }
        }
		
		const confirmHEAL = (sender, amount) => {
             let position = false
            Object.keys(_heal).forEach((i) => {
                if (_heal[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _heal[position].heal -= amount
                fs.writeFileSync('./database/user/heal.json', JSON.stringify(_heal))
            }
        }
        
//━━━━━━━━━━━━━━━[ POTION/RAMUAN ]━━━━━━━━━━━━━━━━━//
		const addPotion = (sender) => {
        	const obj = {id: sender, potion : 0}
            _potion.push(obj)
            fs.writeFileSync('./database/user/potion.json', JSON.stringify(_potion))
        }

        const addPotionUser = (sender, amount) => {
        	let position = false
            Object.keys(_potion).forEach((i) => {
                if (_potion[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _potion[position].potion += amount
                fs.writeFileSync('./database/user/potion.json', JSON.stringify(_potion))
            }
        }
		
		const checkPotionuser = (sender) => {
        	let position = false
            Object.keys(_potion).forEach((i) => {
                if (_potion[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _potion[position].potion
            }
        }
         
         const confirmPOTION = (sender, amount) => {
             let position = false
            Object.keys(_potion).forEach((i) => {
                if (_potion[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _potion[position].potion -= amount
                fs.writeFileSync('./database/user/potion.json', JSON.stringify(_potion))
            }
        }
        
export { addHeal };
export { addHealUser };
export { checkHealuser };
export { confirmHEAL };
export { addPotion };
export { addPotionUser };
export { checkPotionuser };
export { confirmPOTION };
export default {
	addHeal,
	addHealUser,
	checkHealuser,
	confirmHEAL,
	addPotion,
	addPotionUser,
	checkPotionuser,
	confirmPOTION
};