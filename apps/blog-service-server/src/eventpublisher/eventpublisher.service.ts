import { Injectable } from "@nestjs/common";
import { CreatePostEventDto } from "../eventPublisher/CreatePostEventDto";

@Injectable()
export class EventPublisherService {
  constructor() {}
  async CreatePostEvent(args: CreatePostEventDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
