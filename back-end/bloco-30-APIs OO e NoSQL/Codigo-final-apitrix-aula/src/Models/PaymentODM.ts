import { Schema } from 'mongoose';
import IPayment from '../Interfaces/IPayment';
import AbstractODM from './AbstractODM';

class PaymentODM extends AbstractODM<IPayment> {
  constructor() {
    const schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
      status: { type: Number },
    });
    super(schema, 'Payment');
  }
}

export default PaymentODM;