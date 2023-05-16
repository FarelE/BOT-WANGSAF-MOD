import fs from "fs";

const _petkucing = JSON.parse(fs.readFileSync('./database/user/pet/pet-kucing.json'))
const _petserigala = JSON.parse(fs.readFileSync('./database/user/pet/pet-serigala.json'))
const _petanjing = JSON.parse(fs.readFileSync('./database/user/pet/pet-anjing.json'))
const _nyawapet = JSON.parse(fs.readFileSync('./database/user/pet/nyawa-pet.json'))

const addPetK = (sender) => {
        	const obj = {id: sender, petkucing : 0}
            _petkucing.push(obj)
            fs.writeFileSync('./database/user/pet/pet-kucing.json', JSON.stringify(_petkucing))
        }

        const addPetKUser = (sender, amount) => {
        	let position = false
            Object.keys(_petkucing).forEach((i) => {
                if (_petkucing[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _petkucing[position].petkucing += amount
                fs.writeFileSync('./database/user/pet/pet-kucing.json', JSON.stringify(_petkucing))
            }
        }
		
		const checkPetKUser = (sender) => {
        	let position = false
            Object.keys(_petkucing).forEach((i) => {
                if (_petkucing[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _petkucing[position].petkucing
            }
        }
         
         const confirmPetK = (sender, amount) => {
             let position = false
            Object.keys(_petkucing).forEach((i) => {
                if (_petkucing[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _petkucing[position].petkucing -= amount
                fs.writeFileSync('./database/user/pet/pet-kucing.json', JSON.stringify(_petkucing))
            }
        }
        
const addPetS = (sender) => {
        	const obj = {id: sender, petserigala : 0}
            _petserigala.push(obj)
            fs.writeFileSync('./database/user/pet/pet-serigala.json', JSON.stringify(_petserigala))
        }

        const addPetSUser = (sender, amount) => {
        	let position = false
            Object.keys(_petserigala).forEach((i) => {
                if (_petserigala[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _petserigala[position].petserigala += amount
                fs.writeFileSync('./database/user/pet/pet-serigala.json', JSON.stringify(_petserigala))
            }
        }
		
		const checkPetSUser = (sender) => {
        	let position = false
            Object.keys(_petserigala).forEach((i) => {
                if (_petserigala[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _petserigala[position].petserigala
            }
        }
         
         const confirmPetS = (sender, amount) => {
             let position = false
            Object.keys(_petserigala).forEach((i) => {
                if (_petserigala[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _petserigala[position].petserigala -= amount
                fs.writeFileSync('./database/user/pet/pet-serigala.json', JSON.stringify(_petserigala))
            }
        }
        
const addPetA = (sender) => {
        	const obj = {id: sender, petanjing : 0}
            _petanjing.push(obj)
            fs.writeFileSync('./database/user/pet/pet-anjing.json', JSON.stringify(_petanjing))
        }

        const addPetAUser = (sender, amount) => {
        	let position = false
            Object.keys(_petanjing).forEach((i) => {
                if (_petanjing[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _petanjing[position].petanjing += amount
                fs.writeFileSync('./database/user/pet/pet-anjing.json', JSON.stringify(_petanjing))
            }
        }
		
		const checkPetAUser = (sender) => {
        	let position = false
            Object.keys(_petanjing).forEach((i) => {
                if (_petanjing[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _petanjing[position].petanjing
            }
        }
         
         const confirmPetA = (sender, amount) => {
             let position = false
            Object.keys(_petanjing).forEach((i) => {
                if (_petanjing[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _petanjing[position].petanjing -= amount
                fs.writeFileSync('./database/user/pet/pet-anjing.json', JSON.stringify(_petanjing))
            }
        }
        
const addNyawaPet = (sender) => {
        	const obj = {id: sender, nyawapet : 0}
            _nyawapet.push(obj)
            fs.writeFileSync('./database/user/pet/nyawa-pet.json', JSON.stringify(_nyawapet))
        }

        const addNyawaPetUser = (sender, amount) => {
        	let position = false
            Object.keys(_nyawapet).forEach((i) => {
                if (_nyawapet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _nyawapet[position].nyawapet += amount
                fs.writeFileSync('./database/user/pet/nyawa-pet.json', JSON.stringify(_nyawapet))
            }
        }
		
		const checkNyawaPetUser = (sender) => {
        	let position = false
            Object.keys(_nyawapet).forEach((i) => {
                if (_nyawapet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _nyawapet[position].nyawapet
            }
        }
         
         const confirmNyawaPet = (sender, amount) => {
             let position = false
            Object.keys(_nyawapet).forEach((i) => {
                if (_nyawapet[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _nyawapet[position].nyawapet -= amount
                fs.writeFileSync('./database/user/pet/nyawa-pet.json', JSON.stringify(_nyawapet))
            }
        }
        
export { addPetK };
export { addPetKUser };
export { checkPetKUser };
export { confirmPetK };
export { addPetS };
export { addPetSUser };
export { checkPetSUser };
export { confirmPetS };
export { addPetA };
export { addPetAUser };
export { checkPetAUser };
export { confirmPetA };
export { addNyawaPet };
export { addNyawaPetUser };
export { checkNyawaPetUser };
export { confirmNyawaPet };
export default {
	addPetK,
	addPetKUser,
	checkPetKUser,
	confirmPetK,
	addPetS,
	addPetSUser,
	checkPetSUser,
	confirmPetS,
	addPetA,
	addPetAUser,
	checkPetAUser,
	confirmPetA,
	addNyawaPet,
	addNyawaPetUser,
	checkNyawaPetUser,
	confirmNyawaPet
};
