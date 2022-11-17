enum PaymentStatus {
  pending = 1,
  concluded,
  reversed,
}

const newTransfer: PaymentStatus = PaymentStatus.pending; // referenciamos um enum usando EnumName.Value
console.log(newTransfer); 