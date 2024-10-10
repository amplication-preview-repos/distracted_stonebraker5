import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventPublisherService } from "./eventpublisher.service";
import { CreatePostEventDto } from "../eventPublisher/CreatePostEventDto";

@swagger.ApiTags("eventPublishers")
@common.Controller("eventPublishers")
export class EventPublisherController {
  constructor(protected readonly service: EventPublisherService) {}

  @common.Post("/post-event")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePostEvent(
    @common.Body()
    body: CreatePostEventDto
  ): Promise<string> {
        return this.service.CreatePostEvent(body);
      }
}
