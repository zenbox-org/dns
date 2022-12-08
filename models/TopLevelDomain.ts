import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { Id } from '../../generic/models/Id'

/**
 * No validation, since tlds are added quite often
 */
export const TopLevelDomainSchema = z.string().min(1)

export const TopLevelDomainsSchema = z.array(TopLevelDomainSchema)
  .superRefine(getDuplicatesRefinement('TopLevelDomain', getTopLevelDomainUid))

export const TopLevelDomainUidSchema = TopLevelDomainSchema

export type TopLevelDomain = z.infer<typeof TopLevelDomainSchema>

export type TopLevelDomainUid = z.infer<typeof TopLevelDomainUidSchema>

export function validateTopLevelDomain(tld: TopLevelDomain): TopLevelDomain {
  return TopLevelDomainSchema.parse(tld)
}

export function validateTopLevelDomains(tlds: TopLevelDomain[]): TopLevelDomain[] {
  return TopLevelDomainsSchema.parse(tlds)
}

export function getTopLevelDomainUid(tldUid: TopLevelDomainUid) {
  return tldUid
}
