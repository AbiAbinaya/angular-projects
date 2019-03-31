import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEditorComponent } from './first-editor.component';

describe('FirsteditorComponent', () => {
  let component: FirstEditorComponent;
  let fixture: ComponentFixture<FirstEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
