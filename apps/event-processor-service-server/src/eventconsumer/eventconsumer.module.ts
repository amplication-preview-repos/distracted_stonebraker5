import { Module } from "@nestjs/common";
import { EventConsumerService } from "./eventconsumer.service";
import { EventConsumerController } from "./eventconsumer.controller";
import { EventConsumerResolver } from "./eventconsumer.resolver";

@Module({
  controllers: [EventConsumerController],
  providers: [EventConsumerService, EventConsumerResolver],
  exports: [EventConsumerService],
})
export class EventConsumerModule {}
