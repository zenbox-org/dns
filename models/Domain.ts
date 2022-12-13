import isValidDomain from 'is-valid-domain'
import { z } from 'zod'

export const DomainSchema = z.string().min(1).refine(isValidDomain)

export type Domain = z.infer<typeof DomainSchema>

export function validateDomain(domain: Domain) {
  return DomainSchema.parse(domain)
}

export function getDomainUid(domain: Domain) {
  return domain
}
