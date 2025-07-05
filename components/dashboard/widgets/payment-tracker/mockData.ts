import { Payment } from './types';

export const mockPayments: Payment[] = [
  {
    id: 'PAY-001',
    client: 'Dr. Kwame Nkrumah',
    amount: 'GHS 45,000',
    dueDate: '2024-02-15',
    status: 'paid',
    type: 'invoice',
    invoiceNumber: 'INV-2024-001',
    description: 'East Legon Villa Construction',
    lastReminder: '2024-02-10'
  },
  {
    id: 'PAY-002',
    client: 'Mrs. Ama Asante',
    amount: 'GHS 28,500',
    dueDate: '2024-02-20',
    status: 'pending',
    type: 'rent',
    invoiceNumber: 'INV-2024-002',
    description: 'Kumasi Apartment Monthly Rent',
    lastReminder: '2024-02-12'
  },
  {
    id: 'PAY-003',
    client: 'Mr. John Mensah',
    amount: 'GHS 65,000',
    dueDate: '2024-02-05',
    status: 'overdue',
    type: 'service',
    invoiceNumber: 'INV-2024-003',
    description: 'Tema Commercial Electrical Work',
    lastReminder: '2024-02-08'
  },
  {
    id: 'PAY-004',
    client: 'Ms. Grace Osei',
    amount: 'GHS 38,000',
    dueDate: '2024-02-25',
    status: 'pending',
    type: 'deposit',
    invoiceNumber: 'INV-2024-004',
    description: 'Accra Residential Security Deposit',
    lastReminder: '2024-02-15'
  },
  {
    id: 'PAY-005',
    client: 'Mr. David Addo',
    amount: 'GHS 52,000',
    dueDate: '2024-02-10',
    status: 'overdue',
    type: 'maintenance',
    invoiceNumber: 'INV-2024-005',
    description: 'West Hills Estate Repairs',
    lastReminder: '2024-02-12'
  },
  {
    id: 'PAY-006',
    client: 'Mrs. Sarah Kufuor',
    amount: 'GHS 89,000',
    dueDate: '2024-02-28',
    status: 'pending',
    type: 'invoice',
    invoiceNumber: 'INV-2024-006',
    description: 'Labone Luxury Interior Design',
    lastReminder: '2024-02-18'
  },
  {
    id: 'PAY-007',
    client: 'Mr. Emmanuel Owusu',
    amount: 'GHS 22,800',
    dueDate: '2024-02-01',
    status: 'overdue',
    type: 'rent',
    invoiceNumber: 'INV-2024-007',
    description: 'Spintex Road Office Rent',
    lastReminder: '2024-02-05'
  },
  {
    id: 'PAY-008',
    client: 'Ms. Comfort Agyeman',
    amount: 'GHS 15,500',
    dueDate: '2024-02-30',
    status: 'pending',
    type: 'service',
    invoiceNumber: 'INV-2024-008',
    description: 'Airport Residential Plumbing',
    lastReminder: '2024-02-20'
  }
]; 