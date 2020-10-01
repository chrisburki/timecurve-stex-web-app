import { Component, OnInit } from '@angular/core';

// Template driven Approach
// import { NgForm } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Reactive driven Approach
  searches: string[] = [];

  searchForm: FormGroup;
  searchField: FormControl;

  ngOnInit() {
    this.searchForm = new FormGroup({ 
      searchField: new FormControl(null)
    })
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.searches.push(term)
      });
  }

  // Template driven Approach  
  // ngOnInit() { }

  //   onSubmit(form: NgForm) {
  //    console.log(form);
  //  }
}
