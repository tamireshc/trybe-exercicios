import { NextFunction, Request, Response } from 'express';
import IPayment from '../Interfaces/IPayment';
import TransferService from '../Services/TransderService';
import PaymentStatus from '../utils/PaymentStatus';

class TransferController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: TransferService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new TransferService();
  }

  public async create() {
    const payment: IPayment = {
      payByPerson: this.req.body.payByPerson,
      payToPerson: this.req.body.payToPerson,
      amount: this.req.body.amount,
      key: this.req.body.key,
    };

    try {
      const newPayment = await this.service.transfer(payment);
      return this.res.status(201).json(newPayment);
    } catch (error) {
      this.next(error);
    }
  }

  public findAllPayments = async (
    req: Request,
    res: Response,
  ) => {
    try {
      const allPayments = await this.service.findAllPayments();
      return res.status(200).json(allPayments);
    } catch (error) {
      this.next(error);
    }
  };

  public findPaymentByKey = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const payments = await this.service.findPaymentByKey(id);
      if (!payments) {
        return res.status(404).json({ message: 'not found' });
      }
      return res.status(200).json(payments);
    } catch (error) {
      this.next(error);
    }
  };

  public reversalRequest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const undoPayment = await this.service.undoTransfer(
        id,
        { ...body, status: PaymentStatus.reversed },
      );
      return res.status(201).json(undoPayment);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };
}

export default TransferController;
