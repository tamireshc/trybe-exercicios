// src/Services/KeyService.ts

import Key from '../Domain/Key/Key';
import KeyFactory from '../Domain/Key/KeyFactory';
import IKey from '../Interfaces/IKey';
import KeyODM from '../Models/KeyODM';

class KeyService {
  private createKeyDomain(key: IKey | null): Key | null {
    if (key) {
      return new Key(
        key.value,
        key.owner,
        key.type,
        key.id,
      );
    }
    return null;
  }

  public async register(key: IKey) {
    const typedKey = KeyFactory.create(key);
    // Saving example
    // const newkey: IKey = {
    //   value: typedKey.value,
    //   owner: key.owner,
    //   type: typedKey.type,
    //   id: '633ec9fa3df977e30e993492',
    // };
    const keyODM = new KeyODM();
    const newKey = await keyODM.create(typedKey);
    return this.createKeyDomain(newKey);
  }

  public getAllKeysByOwer = async (owner: string): Promise<object[] | null> => {
    const keyODM = new KeyODM();
    const keys = await keyODM.getAllKeysByOwer(owner);
    if (!keys[0]) {
      return null;
    }
    return keys;
  };
}

export default KeyService;