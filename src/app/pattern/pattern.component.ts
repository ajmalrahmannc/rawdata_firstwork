import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pattern() {
    let n = 8;
    let str = "";

    for (let i = 1; i <= n; i++) {  
      for (let j = 1; j <= i; j++) {  
        str += i*j+" ";         
      }
      str += "\n";
    }
    console.log(str);
  }
}
