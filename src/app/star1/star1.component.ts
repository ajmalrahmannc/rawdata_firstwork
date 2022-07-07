import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star1',
  templateUrl: './star1.component.html',
  styleUrls: ['./star1.component.css']
})
export class Star1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  starb() {
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  }

  starc() {
    let n = 6;
    let string = "";
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  }


  stard() {
    let string1 = ""
    for (let i = 1; i <= 8; i++) {
      for (let j = i; j <= 8; j++)
        string1 += "*"
      for (let k = 1; k < (i * 2) - 1; k++)
        string1 += "_"
      for (let j = i; j <= 8; j++){
        string1 += "*"
      }
        string1 += "\n"
    }
    console.log(string1);
  }



  stare() {
    let n = 6;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < n - i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }


  starf() {
    let n = 3;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
      string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
      string += "\n";
    }
    console.log(string);
  }

  starg() {
    let n = 7; 
    let string = "";
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += String.fromCharCode(count + 65)+ " ";
        count++; 
      }
      string += "\n";
      string = string.replace(/[\\[]/g,'');
    }
    console.log(string);
  }


}
