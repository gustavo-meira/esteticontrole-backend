type SchedulingType = {
  id?: string;
  date: Date;
  duration: number;
  paid: boolean;
  note?: string | null;
  userId: string;
  clientId: string;
  productId: string;
};

export { SchedulingType };
