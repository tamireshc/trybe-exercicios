// src/Models/PaymentODM.ts

import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
  isValidObjectId,
} from 'mongoose';
import IPayment from '../Interfaces/IPayment';

class PaymentODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<IPayment>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
      status: { type: Number },
    });
    this.model = models.Payment || model('Payment', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  public async create(payment: IPayment): Promise<IPayment> {
    return this.model.create({ ...payment });
  }

  public findAllPayments = async (): Promise<IPayment[]> => {
    const allPayments = this.model.find();
    return allPayments;
  };

  public findPaymentByKey = async (key: string): Promise<IPayment[]> => {
    const payments = await this.model.find({ key });
    return payments;
  };

  public async update(
    id: string,
    obj: Partial<IPayment>,
  ): Promise<IPayment | null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id'); // funcao nativa do mongoose

    return this.model.findByIdAndUpdate( // funcao que porcura e atualiza no mongoose
      { _id: id },
      { ...obj } as UpdateQuery<IPayment>,
      { new: true }, // diz pra retornar o objeto modificado
    );
  }
}

export default PaymentODM;