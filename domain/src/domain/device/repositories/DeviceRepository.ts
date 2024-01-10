import { Device } from '../core/Device.js'
import { DeviceId } from '../core/DeviceId.js'
import { Sensor } from '../core/Sensor.js'
import { Camera } from '../core/Camera.js'

export interface DeviceRepository {
  getCameras(): Promise<Camera[]>

  getSensors(): Promise<Sensor[]>

  getDeviceById(deviceId: DeviceId): Promise<Camera | Sensor>

  insertDevice(device: Device): Promise<void>

  updateDevice(device: Device): Promise<void>

  deleteDevice(deviceId: DeviceId): Promise<void>
}
