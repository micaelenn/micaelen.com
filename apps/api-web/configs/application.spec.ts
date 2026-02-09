import { App } from "@/configs/application";

describe("Application", () => {
  const variables = App.variables

  // test if all environment variables exist
  it("should ensure all environment variables exist and not empty on .env file", () => {
    Object.entries(variables).forEach(([name, value]) => {
      expect(value).not.toBeUndefined()
      expect(value).not.toBe('')
    })
  })

  // test if private keys are exposed on the file
  it('should esure all environment variables are inside .env and not exposed on the file', async () => {
    jest.resetModules()
    const envHelper = await import('../utils/helpers/env')
    const spy = jest.spyOn(envHelper, 'fromEnv')
    await import('../configs/application')
    variables
    const totalVariables = Object.keys(variables).length
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(totalVariables)
  })
})