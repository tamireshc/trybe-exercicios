// src/Services/TransferService.ts

import Payment from '../Domain/Payment';
import IPayment from '../Interfaces/IPayment';
import PaymentODM from '../Models/PaymentODM';

const InvalidKeySentence = 'Invalid Key!';

class TransferService {
  private isValidKey(key: string): boolean {
    const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    return cpfRegex.test(key);
  }

  private createPaymentDomain(payment: IPayment | null): Payment | null {
    if (payment) {
      return new Payment(
        payment.payByPerson,
        payment.payToPerson,
        payment.amount,
        payment.key,
        payment.id,
      );
    }
    return null;
  }

  public async transfer(payment: IPayment) {
    if (!this.isValidKey(payment.key)) throw new Error(InvalidKeySentence);
    // Criar instância da Model de Payment usando Mongoose
    const paymentODM = new PaymentODM();
    // Inserir os dados no banco
    const newPayment = await paymentODM.create(payment);
    // Retornar os dados com o id
    return this.createPaymentDomain(newPayment);
  }

  public findAllPayments = (): Promise<IPayment[]> => {
    const paymentODM = new PaymentODM();
    const allPayments = paymentODM.findAllPayments();
    return allPayments;
  };

  public findPaymentByKey = async (key: string): Promise<IPayment[] | null> => {
    if (!this.isValidKey(key)) throw new Error(InvalidKeySentence);
    const paymentODM = new PaymentODM();
    const payments = await paymentODM.findPaymentByKey(key);
    if (!payments[0]) {
      return null;
    }
    return payments;
  };

  public async undoTransfer(id: string, payment: IPayment) {
    if (!this.isValidKey(payment.key)) throw new Error(InvalidKeySentence);
    const paymentODM = new PaymentODM();
    return paymentODM.update(id, payment);
  }
}

export default TransferService;