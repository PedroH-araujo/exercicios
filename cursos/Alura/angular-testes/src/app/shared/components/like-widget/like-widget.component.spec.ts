import { LikeWidgetModule } from './like-widget.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents()

    fixture = TestBed.createComponent(LikeWidgetComponent)
  })

  it('Should create component', () => {
    const instance = fixture.componentInstance
    expect(instance).toBeTruthy()
  })

  it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance
    fixture.detectChanges() // FAZ PASSAR PELO onInit
    expect(component.id).toBeTruthy()
  })

  it('Should NOT generate ID when id input property is present', () => {
    const component = fixture.componentInstance
    const someId = 'someId'
    component.id = someId
    fixture.detectChanges()
    expect(component.id).toBe(someId)
  })
})
