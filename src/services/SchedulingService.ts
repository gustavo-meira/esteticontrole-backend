import { IUUIDProvider } from '../providers/interfaces/IUUIDProvider';
import { ISchedulingRepository } from '../repositories/ISchedulingRepository';
import { SchedulingType } from '../types/SchedulingType';
import { ISchedulingService } from './ISchedulingService';

class SchedulingService implements ISchedulingService {
  private schedulingRepository: ISchedulingRepository;
  private uuidProvider: IUUIDProvider;

  constructor(
    schedulingRepository: ISchedulingRepository,
    uuidProvider: IUUIDProvider,
  ) {
    this.schedulingRepository = schedulingRepository;
    this.uuidProvider = uuidProvider;
  }

  async create(scheduling: SchedulingType): Promise<string> {
    const id = this.uuidProvider.generate();
    const date = new Date(scheduling.date);

    const schedulingCreated = await this.schedulingRepository.create({ ...scheduling, id, date });

    return schedulingCreated.id as string;
  }
}

export { SchedulingService };
