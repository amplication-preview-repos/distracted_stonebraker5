import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventConsumerService } from "./eventconsumer.service";
import { HandlePostEventDto } from "../eventConsumer/HandlePostEventDto";

@swagger.ApiTags("eventConsumers")
@common.Controller("eventConsumers")
export class EventConsumerController {
  constructor(protected readonly service: EventConsumerService) {}

  @common.Post("/handle-post-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandlePostEvent(
    @common.Body()
    body: HandlePostEventDto
  ): Promise<string> {
        return this.service.HandlePostEvent(body);
      }
}
