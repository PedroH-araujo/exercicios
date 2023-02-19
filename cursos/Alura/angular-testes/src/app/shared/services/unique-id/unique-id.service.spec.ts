import { UniqueServiceId } from './unique-id.service';

describe(UniqueServiceId.name, () => {

  let service: UniqueServiceId = null
  beforeEach(() => {
    service = new UniqueServiceId()
  })

  it(`#${UniqueServiceId.prototype.generateUniqueIdWhithPrefix.name}
  should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWhithPrefix('app')
    expect(id.startsWith('app-')).toBeTrue()
  })

  it(`#${UniqueServiceId.prototype.generateUniqueIdWhithPrefix.name}
  should not generate duplicate IDs when called multiple times`, () => {
    const idArray = []
    for (let index = 0; index <= 50; index++) {
      const id = service.generateUniqueIdWhithPrefix('app')
      idArray.push(id)
      expect(idArray[index]).not.toBe(idArray[index + 1])
    }
  })

  it(`#${UniqueServiceId.prototype.getNumberOfGeneratedUniqueIds.name}
  should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWhithPrefix('app')
    service.generateUniqueIdWhithPrefix('app')
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  })

  it(`#${UniqueServiceId.prototype.generateUniqueIdWhithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '']
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWhithPrefix(emptyValue)).toThrow()
    })
  })

})


