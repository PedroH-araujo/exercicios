import { UniqueIDService } from './unique-id.service';

describe('UniqueIDService', () => {
  it('generateUniqueIdWhithPrefix should generate id when called with prefix', () => {
    const service = new UniqueIDService()
    const id = service.generateUniqueIdWhithPrefix('app')
    expect(id).toContain('app-')
  })

})


