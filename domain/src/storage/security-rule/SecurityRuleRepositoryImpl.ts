import { SecurityRuleRepository } from '../../domain/security-rule/repositories/SecurityRuleRepository.js'
import { SecurityRule } from '../../domain/security-rule/core/SecurityRule.js'
import mongoose, { Model } from 'mongoose'
import { ExceedingRule } from '../../domain/security-rule/core/ExceedingRule.js'
import { IntrusionRule } from '../../domain/security-rule/core/IntrusionRule.js'
import { DeviceTypeConverter } from '../../utils/DeviceTypeConverter'
import { AnomalyType } from '../../domain/anomaly/core/impl/enum/AnomalyType'

export class SecurityRuleRepositoryImpl implements SecurityRuleRepository {
  exceedingRuleModel: Model<ExceedingRule>
  intrusionRuleModel: Model<IntrusionRule>

  constructor(exceedingRuleModel: Model<ExceedingRule>, intrusionRuleModel: Model<IntrusionRule>) {
    this.exceedingRuleModel = exceedingRuleModel
    this.intrusionRuleModel = intrusionRuleModel
  }

  async getExceedingRules(): Promise<ExceedingRule[]> {
    return this.exceedingRuleModel.find().orFail()
  }

  async getIntrusionRules(): Promise<IntrusionRule[]> {
    return this.intrusionRuleModel.find().orFail()
  }

  async getSecurityRuleById(securityRuleId: string): Promise<SecurityRule> {
    const exceedingRule = await this.exceedingRuleModel.findById(securityRuleId)
    if (exceedingRule) {
      return exceedingRule
    }
    const intrusionRule = await this.intrusionRuleModel.findById(securityRuleId)
    if (intrusionRule) {
      return intrusionRule
    }
    throw new Error('Security rule not found')
  }

  async insertExceedingSecurityRule(exceedingRule: ExceedingRule): Promise<void> {
    await this.exceedingRuleModel.create({
      _id: exceedingRule.securityRuleId,
      deviceId: {
        type: DeviceTypeConverter.convertToString(exceedingRule.deviceId.type),
        code: exceedingRule.deviceId.code
      },
      creatorId: exceedingRule.creatorId,
      contactsToNotify: exceedingRule.contactsToNotify,
      description: exceedingRule.description,
      from: exceedingRule.from,
      to: exceedingRule.to,
      measure: exceedingRule.measure
    })
  }

  async insertIntrusionSecurityRule(intrusionRule: IntrusionRule): Promise<void> {
    await this.intrusionRuleModel.create({
      _id: intrusionRule.securityRuleId,
      deviceId: {
        type: intrusionRule.deviceId.type,
        code: intrusionRule.deviceId.code
      },
      creatorId: intrusionRule.creatorId,
      contactsToNotify: intrusionRule.contactsToNotify,
      description: intrusionRule.description,
      intrusionObject: intrusionRule.objectClass,
      from: intrusionRule.from,
      to: intrusionRule.to
    })
  }

  async updateExceedingSecurityRule(exceedingRule: ExceedingRule): Promise<void> {
    await this.exceedingRuleModel.findByIdAndUpdate(exceedingRule.securityRuleId, {
      deviceId: {
        type: exceedingRule.deviceId.type,
        code: exceedingRule.deviceId.code
      },
      contactsToNotify: exceedingRule.contactsToNotify,
      description: exceedingRule.description,
      from: exceedingRule.from,
      to: exceedingRule.to,
      measure: exceedingRule.measure
    })
  }

  async updateIntrusionSecurityRule(intrusionRule: IntrusionRule): Promise<void> {
    await this.intrusionRuleModel.findByIdAndUpdate(intrusionRule.securityRuleId, {
      deviceId: {
        type: intrusionRule.deviceId.type,
        code: intrusionRule.deviceId.code
      },
      contactsToNotify: intrusionRule.contactsToNotify,
      description: intrusionRule.description,
      intrusionObject: intrusionRule.objectClass,
      from: intrusionRule.from,
      to: intrusionRule.to
    })
  }

  async deleteSecurityRule(securityRuleId: string, type: AnomalyType): Promise<void> {
    switch (type) {
      case AnomalyType.EXCEEDING:
        await this.exceedingRuleModel.deleteOne({ _id: new mongoose.Types.ObjectId(securityRuleId) })
        break
      case AnomalyType.INTRUSION:
        await this.intrusionRuleModel.deleteOne({ _id: new mongoose.Types.ObjectId(securityRuleId) })
        break
    }
  }
}
