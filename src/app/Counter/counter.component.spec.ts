import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe("CounterComponet", ()=>{

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
        imports:[CounterComponent],
        }).compileComponents();
    });

    it("se deben crear el componenter counter", ()=>{
       const fixture = TestBed.createComponent(CounterComponent); 
        expect(fixture.componentInstance).toBeTruthy();
    });

    xit("Se debe crear el texto Contador: 23", ()=>{
        const fixture = TestBed.createComponent(CounterComponent); 
        fixture.detectChanges(); 
        const compiled: HTMLElement = fixture.nativeElement; 
        expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 23")
    });

	it("valor inicial del contador es 23",() =>{
		const counter = new CounterComponent()
		
		expect(counter.contador).toBe(23)
	});
});