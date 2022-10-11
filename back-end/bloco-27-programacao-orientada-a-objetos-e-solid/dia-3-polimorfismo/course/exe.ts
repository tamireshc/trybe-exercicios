abstract class Character {
  abstract talk(): void
  abstract specialMove(): void
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super()
  }

  talk(): void {
    console.log(`the ${this._name} character say oi`)
  }
  specialMove(): void {
    console.log(`the ${this._name} do ${this._specialMoveName}`)
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super()
  }
  talk(): void {
    console.log(`the ${this._name} character say oi`)
  }
  specialMove(): void {
    console.log(`the ${this._name} do ${this._specialMoveName}`)
  }
}

const creteCaracter = (character: Character) => {
  character.specialMove()
  character.talk()
}

const character1 = new MeleeCharacter('mario', 'estrelinha')
const character2 = new LongRangeCharacter('ryu', 'roriugen.')

creteCaracter(character1)
creteCaracter(character2)

interface ICharacter {
  name: string;
  specialMove: string;
}

interface DbCharacter extends ICharacter {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character: ICharacter): Promise<DbCharacter>
  getAll(): Promise<DbCharacter[]>
  update(id: number, character: ICharacter): Promise<DbCharacter>
  delete(id: number): void
}

class localDbModel implements IModel {
  create = async (character: ICharacter) => {
    const id = db[db.length - 1].id + 1
    db.push({ id, ...character })
    return { id, ...character }
  }

  getAll = async () => {
    return db
  }

  update = async (id: number, character: ICharacter) => {
    const characterDb = db.filter((item) => item.id = id)
    const index = db.indexOf(characterDb[0])
    db[index] = { id, ...character }
    return { id, ...character }
  }

  delete(id: number): void {
    const characterDb = db.filter((item) => item.id = id)
    const index = db.indexOf(characterDb[0])
    db.splice(index, 1);
  }
}

class CharacterService {
  constructor(public model: IModel) {
  }
  create = async (character: ICharacter): Promise<DbCharacter> => {
    const newCharacter = await this.model.create(character)
    return newCharacter
  }
  getAll = async (): Promise<DbCharacter[]> => {
    const result = await this.model.getAll()
    return result
  }

  update = async (id: number, character: ICharacter): Promise<ICharacter> => {
    const characterAtt = await this.model.update(id, character)
    return characterAtt
  }

  delete = async (id: number): Promise<void> => {
    this.model.delete(id)
  }
}

class MockedDbModel {

}