export type PaymentStatus = 'pending' | 'held' | 'released' | 'refunded';
export type EscrowStatus = 'active' | 'released' | 'refunded';

export interface InstallmentPlan {
  id: string;
  installments: number;
  monthlyAmount: number;
  totalAmount: number;
  interestRate?: number;
}

export interface Payment {
  id: string;
  requestId: string;
  amount: number;
  status: PaymentStatus;
  escrowStatus: EscrowStatus;
  paymentMethod: string;
  createdAt: string;
  releasedAt?: string;
  installmentPlan?: InstallmentPlan;
  isInstallment?: boolean;
}
