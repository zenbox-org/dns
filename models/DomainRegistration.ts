import { z } from 'zod'
import { DomainSchema } from './Domain'

export const DomainRegistrationSchema = z.object({
  domain: DomainSchema,
  expiryDate: z.date(),
})

export const DomainRegistrationUidSchema = DomainRegistrationSchema.pick({
  domain: true,
  expiryDate: true,
})

export type DomainRegistration = z.infer<typeof DomainRegistrationSchema>

export type DomainRegistrationUid = z.infer<typeof DomainRegistrationUidSchema>

export function validateDomainRegistration(registration: DomainRegistration) {
  return DomainRegistrationSchema.parse(registration)
}

export function getDomainRegistrationUid(registrationUid: DomainRegistrationUid) {
  return DomainRegistrationUidSchema.parse(registrationUid)
}
