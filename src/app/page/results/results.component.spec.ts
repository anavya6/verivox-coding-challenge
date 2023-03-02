import { ItemState } from '../../store/reducer';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ResultsComponent } from './results.component';
import { ResultComponent } from '../../result/result.component';
import { SearchResultComponent } from '../../search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { itemSelector, itemsLoadError } from '../../store/selector';
import { MemoizedSelector, DefaultProjectorFn } from '@ngrx/store';
import { Item } from '../../model/item';

describe('ResultsComponent', async () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let store: MockStore<ItemState>;
  let mockItemsSelector: MemoizedSelector<ItemState, Item[], DefaultProjectorFn<Item[]>>;
  let mockErrorSelector: MemoizedSelector<ItemState, string, DefaultProjectorFn<string>>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ResultsComponent, SearchResultComponent, ResultComponent],
      providers: [provideMockStore({})],
      imports: [FormsModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    mockItemsSelector = store.overrideSelector(itemSelector, []);
    mockErrorSelector = store.overrideSelector(itemsLoadError, "")
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all items', () => {
    mockItemsSelector.setResult([
      {
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
    ]);
    store.refreshState();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.index-section')).length).toBe(1);

    const el: HTMLElement = fixture.nativeElement.querySelector('.text-danger');
    expect(el).toBeNull()
  });

  it('should render error', () => {
    mockErrorSelector.setResult("test");
    store.refreshState();
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.index-section')).length).toBe(0);

    const el: HTMLElement = fixture.nativeElement.querySelector('.text-danger');
    expect(el.textContent).toContain("test")
  });
});
