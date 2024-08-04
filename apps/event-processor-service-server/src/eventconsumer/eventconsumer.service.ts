import { Injectable } from "@nestjs/common";
import { HandlePostEventDto } from "../eventConsumer/HandlePostEventDto";

@Injectable()
export class EventConsumerService {
  constructor() {}
  async HandlePostEvent(args: HandlePostEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
