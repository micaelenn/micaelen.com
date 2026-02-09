// formatDateToEnGB.spec.ts
import { formatDateToEnGB, getMainPath } from './string'

describe('helpers/string.ts', () => {
  it("should return the date on 'DD Mon YYYY' format", () => {
    const result = formatDateToEnGB('2025-11-09T00:00:00.000Z')
    expect(result).toMatch(/^\d{2}\s[A-Za-z]{3}\s\d{4}$/)
    expect(result).toBe('09 Nov 2025')
  })
})