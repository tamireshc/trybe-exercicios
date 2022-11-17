import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import IKey from '../Interfaces/IKey';

class KeyODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<IKey>;

  constructor() {
    this.schema = new Schema<IKey>({
      value: { type: String, required: true },
      owner: { type: String, required: true },
      type: { type: String, required: true },

    });
    this.model = models.Key || model('Key', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  public create = async (key: IKey): Promise<IKey> => {
    const result = await this.model.create(key);
    return result;
  };

  public getAllKeysByOwer = async (owner: string): Promise<object[] | []> => {
    const keys = await this.model.find({ owner }, { value: 1, _id: 0 });
    return keys;
  };
}

export default KeyODM;