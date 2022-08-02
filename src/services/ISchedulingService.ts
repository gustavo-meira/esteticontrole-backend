import { SchedulingType } from '../types/SchedulingType';

interface ISchedulingService {
  create(scheduling: SchedulingType): Promise<string>;
}

export { ISchedulingService };
