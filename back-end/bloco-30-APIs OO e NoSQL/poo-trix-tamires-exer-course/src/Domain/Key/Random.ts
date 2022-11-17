import IKey from '../../Interfaces/IKey';
import IValid from '../../Interfaces/IValid';
import KeyTypes from '../../utils/KeyTypes';

class RandomKey implements IKey, IValid {
  id?: string | undefined;
  value: string;
  owner: string;
  type: string;

  constructor(value: string, owner: string) {
    if (!this.isValid(value)) throw new Error('Invalid Key');
    this.value = value;
    this.owner = owner;
    this.type = KeyTypes.RANDON;
  }

  isValid(value: string): boolean {
    const regex = /^\w{8}-\w{4}-\w{4}-\w{4}-\d{12}/;
    return regex.test(value);
  }
}

export default RandomKey;