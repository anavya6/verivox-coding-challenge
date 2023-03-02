import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Item Grid with no value set', () => {
    it('should not contain grid', () => {
      const el: NodeList = fixture.nativeElement.querySelectorAll('.item');
      expect(el.length).toEqual(0)
    })
  })

  describe('Item Grid with value set', () => {
    beforeEach(() => {
      component.item = {
        "id": "00ce6690-a971-4451-b2ef-c7cae005b9e4",
        "index": 1,
        "title": "brass",
        "rating": 2,
        "image": "brass-2.png",
        "isEdible": false,
        "price": 608,
        "tags": [
          "valuable",
          "favorite"
        ],
        "description": "Nullam porttitor lacus at turpis."
      }
      fixture.detectChanges();
    });

    it('should have index', () => {
      const el: HTMLElement = fixture.nativeElement.querySelector('.index-section');
      expect(el.textContent).toContain("1");
    });

    it('should have image', () => {
      const el: HTMLImageElement = fixture.nativeElement.querySelector('#img');
      expect(el.src).toContain("brass-2.png");
    });

    it('should have title', () => {
      const el: HTMLElement = fixture.nativeElement.querySelector('#title');
      expect(el.textContent).toContain("brass");
    });

    it('should have tags', () => {
      const el: NodeList = fixture.nativeElement.querySelectorAll('.tag');
      expect(el.length).toEqual(2)
    });

    it('should have rating', () => {
      const el: NodeList = fixture.nativeElement.querySelectorAll('.star');
      expect(el.length).toEqual(2)
    });

    it('should have price', () => {
      const el: HTMLElement = fixture.nativeElement.querySelector('.price');
      expect(el.textContent).toContain(608)
    });

    it('should show description', () => {
      component.showDetails = true;
      fixture.detectChanges();
      const el: HTMLElement = fixture.nativeElement.querySelector('.details-section');
      expect(el.textContent).toContain("Nullam porttitor lacus at turpis");
    });

    it('should hide description', () => {
      component.showDetails = false;
      fixture.detectChanges();
      const el: HTMLElement = fixture.nativeElement.querySelector('.details-section');
      expect(el).toBeNull()
    });
  })
});
