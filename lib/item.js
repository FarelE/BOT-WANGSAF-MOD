import fs from "fs";
const _ikan = JSON.parse(fs.readFileSync('./database/user/item/ikan.json'))
const _kepiting = JSON.parse(fs.readFileSync('./database/user/item/kepiting.json'))
const _udang = JSON.parse(fs.readFileSync('./database/user/item/udang.json'))
const _kayu = JSON.parse(fs.readFileSync('./database/user/item/kayu.json'))
const _bibit = JSON.parse(fs.readFileSync('./database/user/item/bibit.json'))
const _sampah = JSON.parse(fs.readFileSync('./database/user/item/sampah.json'))
const _besi = JSON.parse(fs.readFileSync('./database/user/item/besi.json'))
const _emas = JSON.parse(fs.readFileSync('./database/user/item/emas.json'))
const _batu = JSON.parse(fs.readFileSync('./database/user/item/batu.json'))
const _tiketp = JSON.parse(fs.readFileSync('./database/user/item/tiket-pet.json'))

//━━━━━━━━━━━━━━━[ IKAN ]━━━━━━━━━━━━━━━━━//
const addIkan = (sender) => {
        	const obj = {id: sender, ikan : 0}
            _ikan.push(obj)
            fs.writeFileSync('./database/user/item/ikan.json', JSON.stringify(_ikan))
        }

        const addIkanUser = (sender, amount) => {
        	let position = false
            Object.keys(_ikan).forEach((i) => {
                if (_ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ikan[position].ikan += amount
                fs.writeFileSync('./database/user/item/ikan.json', JSON.stringify(_ikan))
            }
        }
		
		const checkIkanUser = (sender) => {
        	let position = false
            Object.keys(_ikan).forEach((i) => {
                if (_ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _ikan[position].ikan
            }
        }
         
         const confirmIkan = (sender, amount) => {
             let position = false
            Object.keys(_ikan).forEach((i) => {
                if (_ikan[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ikan[position].ikan -= amount
                fs.writeFileSync('./database/user/item/ikan.json', JSON.stringify(_ikan))
            }
        }
        
//━━━━━━━━━━━━━━━[ KEPITING ]━━━━━━━━━━━━━━━━━//
const addKepiting = (sender) => {
        	const obj = {id: sender, kepiting : 0}
            _kepiting.push(obj)
            fs.writeFileSync('./database/user/item/kepiting.json', JSON.stringify(_kepiting))
        }

        const addKepitingUser = (sender, amount) => {
        	let position = false
            Object.keys(_kepiting).forEach((i) => {
                if (_kepiting[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kepiting[position].kepiting += amount
                fs.writeFileSync('./database/user/item/kepiting.json', JSON.stringify(_kepiting))
            }
        }
		
		const checkKepitingUser = (sender) => {
        	let position = false
            Object.keys(_kepiting).forEach((i) => {
                if (_kepiting[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kepiting[position].kepiting
            }
        }
         
         const confirmKepiting = (sender, amount) => {
             let position = false
            Object.keys(_kepiting).forEach((i) => {
                if (_kepiting[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kepiting[position].kepiting -= amount
                fs.writeFileSync('./database/user/item/kepiting.json', JSON.stringify(_kepiting))
            }
        }
        
//━━━━━━━━━━━━━━━[ UDANG ]━━━━━━━━━━━━━━━━━//
const addUdang = (sender) => {
        	const obj = {id: sender, udang : 0}
            _udang.push(obj)
            fs.writeFileSync('./database/user/item/udang.json', JSON.stringify(_udang))
        }

        const addUdangUser = (sender, amount) => {
        	let position = false
            Object.keys(_udang).forEach((i) => {
                if (_udang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _udang[position].udang += amount
                fs.writeFileSync('./database/user/item/udang.json', JSON.stringify(_udang))
            }
        }
		
		const checkUdangUser = (sender) => {
        	let position = false
            Object.keys(_udang).forEach((i) => {
                if (_udang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _udang[position].udang
            }
        }
         
         const confirmUdang = (sender, amount) => {
             let position = false
            Object.keys(_udang).forEach((i) => {
                if (_udang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _udang[position].udang -= amount
                fs.writeFileSync('./database/user/item/udang.json', JSON.stringify(_udang))
            }
        }
        
//━━━━━━━━━━━━━━━[ KAYU ]━━━━━━━━━━━━━━━━━//
const addKayu = (sender) => {
        	const obj = {id: sender, kayu : 0}
            _kayu.push(obj)
            fs.writeFileSync('./database/user/item/kayu.json', JSON.stringify(_kayu))
        }

        const addKayuUser = (sender, amount) => {
        	let position = false
            Object.keys(_kayu).forEach((i) => {
                if (_kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kayu[position].kayu += amount
                fs.writeFileSync('./database/user/item/kayu.json', JSON.stringify(_kayu))
            }
        }
		
		const checkKayuUser = (sender) => {
        	let position = false
            Object.keys(_kayu).forEach((i) => {
                if (_kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kayu[position].kayu
            }
        }
         
         const confirmKayu = (sender, amount) => {
             let position = false
            Object.keys(_kayu).forEach((i) => {
                if (_kayu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kayu[position].kayu -= amount
                fs.writeFileSync('./database/user/item/kayu.json', JSON.stringify(_kayu))
            }
        }
        
//━━━━━━━━━━━━━━━[ BIBIT ]━━━━━━━━━━━━━━━━━//
const addBibit = (sender) => {
        	const obj = {id: sender, bibit : 0}
            _bibit.push(obj)
            fs.writeFileSync('./database/user/item/bibit.json', JSON.stringify(_bibit))
        }

        const addBibitUser = (sender, amount) => {
        	let position = false
            Object.keys(_bibit).forEach((i) => {
                if (_bibit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bibit[position].bibit += amount
                fs.writeFileSync('./database/user/item/bibit.json', JSON.stringify(_bibit))
            }
        }
		
		const checkBibitUser = (sender) => {
        	let position = false
            Object.keys(_bibit).forEach((i) => {
                if (_bibit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bibit[position].bibit
            }
        }
         
         const confirmBibit = (sender, amount) => {
             let position = false
            Object.keys(_bibit).forEach((i) => {
                if (_bibit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bubit[position].bibit -= amount
                fs.writeFileSync('./database/user/item/bibit.json', JSON.stringify(_bibit))
            }
        }
        
//━━━━━━━━━━━━━━━[ SAMPAH ]━━━━━━━━━━━━━━━━━//
        const addSampah = (sender) => {
        	const obj = {id: sender, sampah : 0}
            _sampah.push(obj)
            fs.writeFileSync('./database/user/item/sampah.json', JSON.stringify(_sampah))
        }

        const addSampahUser = (sender, amount) => {
        	let position = false
            Object.keys(_sampah).forEach((i) => {
                if (_sampah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _sampah[position].sampah += amount
                fs.writeFileSync('./database/user/item/sampah.json', JSON.stringify(_sampah))
            }
        }
		
		const checkSampahUser = (sender) => {
        	let position = false
            Object.keys(_sampah).forEach((i) => {
                if (_sampah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _sampah[position].sampah
            }
        }
         
         const confirmSampah = (sender, amount) => {
             let position = false
            Object.keys(_sampah).forEach((i) => {
                if (_sampah[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _sampah[position].sampah -= amount
                fs.writeFileSync('./database/user/item/sampah.json', JSON.stringify(_sampah))
            }
        }
        
//━━━━━━━━━━━━━━━[ BESI ]━━━━━━━━━━━━━━━━━//
        const addBesi = (sender) => {
        	const obj = {id: sender, besi : 0}
            _besi.push(obj)
            fs.writeFileSync('./database/user/item/besi.json', JSON.stringify(_besi))
        }

        const addBesiUser = (sender, amount) => {
        	let position = false
            Object.keys(_besi).forEach((i) => {
                if (_besi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _besi[position].besi += amount
                fs.writeFileSync('./database/user/item/besi.json', JSON.stringify(_besi))
            }
        }
		
		const checkBesiUser = (sender) => {
        	let position = false
            Object.keys(_besi).forEach((i) => {
                if (_besi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _besi[position].besi
            }
        }
         
         const confirmBesi = (sender, amount) => {
             let position = false
            Object.keys(_besi).forEach((i) => {
                if (_besi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _besi[position].besi -= amount
                fs.writeFileSync('./database/user/item/besi.json', JSON.stringify(_besi))
            }
        }

//━━━━━━━━━━━━━━━[ EMAS ]━━━━━━━━━━━━━━━━━//
        const addEmas = (sender) => {
        	const obj = {id: sender, emas : 0}
            _emas.push(obj)
            fs.writeFileSync('./database/user/item/emas.json', JSON.stringify(_emas))
        }

        const addEmasUser = (sender, amount) => {
        	let position = false
            Object.keys(_emas).forEach((i) => {
                if (_emas[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _emas[position].emas += amount
                fs.writeFileSync('./database/user/item/emas.json', JSON.stringify(_emas))
            }
        }
		
		const checkEmasUser = (sender) => {
        	let position = false
            Object.keys(_emas).forEach((i) => {
                if (_emas[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _emas[position].emas
            }
        }
         
         const confirmEmas = (sender, amount) => {
             let position = false
            Object.keys(_emas).forEach((i) => {
                if (_emas[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _emas[position].emas -= amount
                fs.writeFileSync('./database/user/item/emas.json', JSON.stringify(_emas))
            }
        }
        
//━━━━━━━━━━━━━━━[ BATU ]━━━━━━━━━━━━━━━━━//
        const addBatu = (sender) => {
        	const obj = {id: sender, batu : 0}
            _batu.push(obj)
            fs.writeFileSync('./database/user/item/batu.json', JSON.stringify(_batu))
        }

        const addBatuUser = (sender, amount) => {
        	let position = false
            Object.keys(_batu).forEach((i) => {
                if (_batu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _batu[position].batu += amount
                fs.writeFileSync('./database/user/item/batu.json', JSON.stringify(_batu))
            }
        }
		
		const checkBatuUser = (sender) => {
        	let position = false
            Object.keys(_batu).forEach((i) => {
                if (_batu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _batu[position].batu
            }
        }
         
         const confirmBatu = (sender, amount) => {
             let position = false
            Object.keys(_batu).forEach((i) => {
                if (_batu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _batu[position].batu -= amount
                fs.writeFileSync('./database/user/item/batu.json', JSON.stringify(_batu))
            }
        }
//━━━━━━━━━━━━━━━[ TIKET PET ]━━━━━━━━━━━━━━━━━//
        const addTiketPet = (sender) => {
        	const obj = {id: sender, tiketp : 0}
            _tiketp.push(obj)
            fs.writeFileSync('./database/user/item/tiket-pet.json', JSON.stringify(_tiketp))
        }

        const addTiketPetUser = (sender, amount) => {
        	let position = false
            Object.keys(_tiketp).forEach((i) => {
                if (_tiketp[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _tiketp[position].tiketp += amount
                fs.writeFileSync('./database/user/item/tiket-pet.json', JSON.stringify(_tiketp))
            }
        }
		
		const checkTiketPetUser = (sender) => {
        	let position = false
            Object.keys(_tiketp).forEach((i) => {
                if (_tiketp[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _tiketp[position].tiketp
            }
        }
         
         const confirmTiketPet = (sender, amount) => {
             let position = false
            Object.keys(_tiketp).forEach((i) => {
                if (_tiketp[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _tiketp[position].tiketp -= amount
                fs.writeFileSync('./database/user/item/tiket-pet.json', JSON.stringify(_tiketp))
            }
        }

export { addIkan };
export { addIkanUser };
export { checkIkanUser };
export { confirmIkan };
export { addKepiting };
export { addKepitingUser };
export { checkKepitingUser };
export { confirmKepiting };
export { addUdang };
export { addUdangUser };
export { checkUdangUser };
export { confirmUdang };
export { addBibit };
export { addBibitUser };
export { checkBibitUser };
export { confirmBibit };
export { addKayu };
export { addKayuUser };
export { checkKayuUser };
export { confirmKayu };
export { addSampah };
export { addSampahUser };
export { checkSampahUser };
export { confirmSampah };
export { addBesi };
export { addBesiUser };
export { checkBesiUser };
export { confirmBesi };
export { addEmas };
export { addEmasUser };
export { checkEmasUser };
export { confirmEmas };
export { addBatu };
export { addBatuUser };
export { checkBatuUser };
export { confirmBatu };
export { addTiketPet };
export { addTiketPetUser };
export { checkTiketPetUser };
export { confirmTiketPet };
export default {
	addIkan,
	addIkanUser,
	checkIkanUser,
	confirmIkan,
	addKepiting,
	addKepitingUser,
	checkKepitingUser,
	confirmKepiting,
	addUdang,
	addUdangUser,
	checkUdangUser,
	confirmUdang,
	addKayu,
	addKayuUser,
	checkKayuUser,
	confirmKayu,
	addBibit,
	addBibitUser,
	checkBibitUser,
	confirmBibit,
	addSampah,
	addSampahUser,
	checkSampahUser,
	confirmSampah,
	addBesi,
	addBesiUser,
	checkBesiUser,
	confirmBesi,
	addEmas,
	addEmasUser,
	checkEmasUser,
	confirmEmas,
	addBatu,
	addBatuUser,
	checkBatuUser,
	confirmBatu,
	addTiketPet,
	addTiketPetUser,
	checkTiketPetUser,
	confirmTiketPet
};
