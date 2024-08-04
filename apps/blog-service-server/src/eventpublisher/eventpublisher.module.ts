import { Module } from "@nestjs/common";
import { EventPublisherService } from "./eventpublisher.service";
import { EventPublisherController } from "./eventpublisher.controller";
import { EventPublisherResolver } from "./eventpublisher.resolver";

@Module({
  controllers: [EventPublisherController],
  providers: [EventPublisherService, EventPublisherResolver],
  exports: [EventPublisherService],
})
export class EventPublisherModule {}
