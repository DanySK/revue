import { Exceeding } from '../Exceeding.js'
import { DeviceId } from '../../../device/core/DeviceId.js'
import { Measure } from '../../../device/core/impl/enum/Measure.js'

export class ExceedingImpl implements Exceeding {
  private _anomalyId: string
  private _deviceId: DeviceId
  private _timestamp: Date
  private _value: number
  private _measure: Measure

  constructor(
    anomalyId: string,
    deviceId: DeviceId,
    timestamp: Date,
    value: number,
    measure: Measure
  ) {
    this._anomalyId = anomalyId
    this._deviceId = deviceId
    this._timestamp = timestamp
    this._value = value
    this._measure = measure
  }

  get anomalyId(): string {
    return this._anomalyId
  }

  set anomalyId(anomalyId: string) {
    this._anomalyId = anomalyId
  }

  get deviceId(): DeviceId {
    return this._deviceId
  }

  set deviceId(deviceId: DeviceId) {
    this._deviceId = deviceId
  }

  get timestamp(): Date {
    return this._timestamp
  }

  set timestamp(timestamp: Date) {
    this._timestamp = timestamp
  }

  get value(): number {
    return this._value
  }

  set value(value: number) {
    this._value = value
  }

  get measure(): Measure {
    return this._measure
  }

  set measure(measure: Measure) {
    this._measure = measure
  }
}
