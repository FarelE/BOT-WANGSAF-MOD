import fs from "fs";
const _pedang = JSON.parse(fs.readFileSync('./database/user/tools/pedang.json'))
const _beliung = JSON.parse(fs.readFileSync('./database/user/tools/beliung.json'))
const _kapak = JSON.parse(fs.readFileSync('./database/user/tools/kapak.json'))
const _pancing = JSON.parse(fs.readFileSync('./database/user/tools/pancing.json'))

//━━━━━━━━━━━━━━━[ PEDANG ]━━━━━━━━━━━━━━━━━//
const addPedang = (sender) => {
        	const obj = {id: sender, pedang : 0}
            _pedang.push(obj)
            fs.writeFileSync('./database/user/tools/pedang.json', JSON.stringify(_pedang))
        }

        const addPedangUser = (sender, amount) => {
        	let position = false
            Object.keys(_pedang).forEach((i) => {
                if (_pedang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pedang[position].pedang += amount
                fs.writeFileSync('./database/user/tools/pedang.json', JSON.stringify(_pedang))
            }
        }
		
		const checkPedangUser = (sender) => {
        	let position = false
            Object.keys(_pedang).forEach((i) => {
                if (_pedang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pedang[position].pedang
            }
        }
         
         const confirmPedang = (sender, amount) => {
             let position = false
            Object.keys(_pedang).forEach((i) => {
                if (_pedang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pedang[position].pedang -= amount
                fs.writeFileSync('./database/user/tools/pedang.json', JSON.stringify(_pedang))
            }
        }
        
//━━━━━━━━━━━━━━━[ BELIUNG ]━━━━━━━━━━━━━━━━━//
const addBeliung = (sender) => {
        	const obj = {id: sender, beliung : 0}
            _beliung.push(obj)
            fs.writeFileSync('./database/user/tools/beliung.json', JSON.stringify(_beliung))
        }

        const addBeliungUser = (sender, amount) => {
        	let position = false
            Object.keys(_beliung).forEach((i) => {
                if (_beliung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _beliung[position].beliung += amount
                fs.writeFileSync('./database/user/tools/beliung.json', JSON.stringify(_beliung))
            }
        }
		
		const checkBeliungUser = (sender) => {
        	let position = false
            Object.keys(_beliung).forEach((i) => {
                if (_beliung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _beliung[position].beliung
            }
        }
         
         const confirmBeliung = (sender, amount) => {
             let position = false
            Object.keys(_beliung).forEach((i) => {
                if (_beliung[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _beliung[position].beliung -= amount
                fs.writeFileSync('./database/user/tools/beliung.json', JSON.stringify(_beliung))
            }
        }
        
//━━━━━━━━━━━━━━━[ KAPAK ]━━━━━━━━━━━━━━━━━//
const addKapak = (sender) => {
        	const obj = {id: sender, kapak : 0}
            _kapak.push(obj)
            fs.writeFileSync('./database/user/tools/kapak.json', JSON.stringify(_kapak))
        }

        const addKapakUser = (sender, amount) => {
        	let position = false
            Object.keys(_kapak).forEach((i) => {
                if (_kapak[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kapak[position].kapak += amount
                fs.writeFileSync('./database/user/tools/kapak.json', JSON.stringify(_kapak))
            }
        }
		
		const checkKapakUser = (sender) => {
        	let position = false
            Object.keys(_kapak).forEach((i) => {
                if (_kapak[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kapak[position].kapak
            }
        }
         
         const confirmKapak = (sender, amount) => {
             let position = false
            Object.keys(_kapak).forEach((i) => {
                if (_kapak[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kapak[position].kapak -= amount
                fs.writeFileSync('./database/user/tools/kapak.json', JSON.stringify(_kapak))
            }
        }
        
//━━━━━━━━━━━━━━━[ PANCING ]━━━━━━━━━━━━━━━━━//
const addPancing = (sender) => {
        	const obj = {id: sender, pancing : 0}
            _pancing.push(obj)
            fs.writeFileSync('./database/user/tools/pancing.json', JSON.stringify(_pancing))
        }

        const addPancingUser = (sender, amount) => {
        	let position = false
            Object.keys(_pancing).forEach((i) => {
                if (_pancing[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pancing[position].pancing += amount
                fs.writeFileSync('./database/user/tools/pancing.json', JSON.stringify(_pancing))
            }
        }
		
		const checkPancingUser = (sender) => {
        	let position = false
            Object.keys(_pancing).forEach((i) => {
                if (_pancing[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pancing[position].pancing
            }
        }
         
         const confirmPancing = (sender, amount) => {
             let position = false
            Object.keys(_pancing).forEach((i) => {
                if (_pancing[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pancing[position].pancing -= amount
                fs.writeFileSync('./database/user/tools/pancing.json', JSON.stringify(_pancing))
            }
        }
        
export { addPedang };
export { addPedangUser };
export { checkPedangUser };
export { confirmPedang };
export { addBeliung };
export { addBeliungUser };
export { checkBeliungUser };
export { confirmBeliung };
export { addKapak };
export { addKapakUser };
export { checkKapakUser };
export { confirmKapak };
export { addPancing };
export { addPancingUser };
export { checkPancingUser };
export { confirmPancing };
export default {
	addPedang,
	addPedangUser,
	checkPedangUser,
	confirmPedang,
	addBeliung,
	addBeliungUser,
	checkBeliungUser,
	confirmBeliung,
	addKapak,
	addKapakUser,
	checkKapakUser,
	confirmKapak,
	addPancing,
	addPancingUser,
	checkPancingUser,
	confirmPancing
};
