import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SearchResultComponent } from './search-result.component';
import { FormsModule } from '@angular/forms';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchResultComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should contain sort field with atleast 1 option`, (() => {
    const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('.form-select');
    expect(selectElement).toBeDefined();
    expect(selectElement.options.length).toBeGreaterThanOrEqual(1);
  }));

  it(`should have sort icon for ascending/descending order`, (() => {
    // test for ascending icon
    const el: HTMLElement = fixture.nativeElement.querySelector('#sort-icon');
    expect(el.classList).toContain('bi-sort-down-alt');

    // click the element
    el.click();
    fixture.detectChanges();

    // test for descending icon
    expect(el.classList).toContain('bi-sort-down');
  }));

  it(`should have input element with list of possible filter fields`, (() => {
    // Test list of filter fields
    const filterEl: HTMLUListElement = fixture.nativeElement.querySelector('ul');
    expect(filterEl).toBeDefined();
    expect(filterEl.childNodes.length).toBeGreaterThanOrEqual(1);

    // Test for input field
    const el: HTMLInputElement = fixture.nativeElement.querySelector('#filter-input');
    expect(el.placeholder).toContain('Search based on ');
  }));
});
