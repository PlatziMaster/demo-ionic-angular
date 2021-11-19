import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { By } from '@angular/platform-browser';

fdescribe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        imports: [IonicModule.forRoot(), RouterModule.forRoot([]), FormsModule],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title when set the title', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    component.title = 'Nicolas';
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should change the title when run setTitle', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    component.setTitle('change');
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should change the title when do click', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    const btn = fixture.debugElement.query(By.css('#btnTitle'))
    btn.nativeElement.click();
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });
});
