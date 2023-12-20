import { SecurityRule } from '../core/SecurityRule.js'

export interface SecurityRuleRepository {
  getSecurityRules(): Set<SecurityRule>

  insertSecurityRule(securityRule: SecurityRule): void

  deleteSecurityRule(securityRule: SecurityRule): void
}
