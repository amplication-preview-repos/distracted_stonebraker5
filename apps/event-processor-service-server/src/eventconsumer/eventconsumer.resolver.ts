import * as graphql from "@nestjs/graphql";
import { HandlePostEventDto } from "../eventConsumer/HandlePostEventDto";
import { EventConsumerService } from "./eventconsumer.service";

export class EventConsumerResolver {
  constructor(protected readonly service: EventConsumerService) {}

  @graphql.Mutation(() => String)
  async HandlePostEvent(
    @graphql.Args()
    args: HandlePostEventDto
  ): Promise<string> {
    return this.service.HandlePostEvent(args);
  }
}
