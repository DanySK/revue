import { Anomaly } from '@common/domain/core'
import { KafkaMessage } from 'kafkajs'
import KafkaConsumer from '@common/infrastructure/events/KafkaConsumer.js'
import KafkaProducer from '@common/infrastructure/events/KafkaProducer.js'
import { KafkaOptions } from '@common/infrastructure/events/KafkaOptions'
import { AnomalyPresenter } from '@presentation/AnomalyPresenter.js'
import { Notification } from '@/domain/core/Notification'

export class KafkaNotificationEventsHub {
  private readonly anomaliesConsumer: KafkaConsumer
  private readonly notificationProducer: KafkaProducer

  constructor(kafkaOptions: KafkaOptions) {
    this.anomaliesConsumer = new KafkaConsumer(kafkaOptions)
    this.notificationProducer = new KafkaProducer(kafkaOptions)
  }

  subscribeToAnomalies(handler: (_anomaly: Anomaly) => void): void {
    this.anomaliesConsumer
      .startConsuming(['anomalies'], false, (message: KafkaMessage): void => {
        if (message.value) {
          try {
            const anomaly: Anomaly = AnomalyPresenter.asDomainEvent(message.value)
            handler(anomaly)
          } catch (e) {
            console.log('Error parsing anomaly, message ignored because is not compliant to the schema')
          }
        }
      })
      .then((): void => console.log('Consumer started'))
  }

  publishNotification(notification: Notification) {
    this.notificationProducer.produce('notifications', notification)
  }
}
