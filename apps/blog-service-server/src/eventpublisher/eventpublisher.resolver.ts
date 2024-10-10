import * as graphql from "@nestjs/graphql";
import { CreatePostEventDto } from "../eventPublisher/CreatePostEventDto";
import { EventPublisherService } from "./eventpublisher.service";

export class EventPublisherResolver {
  constructor(protected readonly service: EventPublisherService) {}

  @graphql.Mutation(() => String)
  async CreatePostEvent(
    @graphql.Args()
    args: CreatePostEventDto
  ): Promise<string> {
    return this.service.CreatePostEvent(args);
  }
}
