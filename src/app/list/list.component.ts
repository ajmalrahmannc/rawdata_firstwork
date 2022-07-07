import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list() {
    var digits = 1234665;
    var last2 = String(digits).slice(-2);
    console.log(last2);

  }

  array = [1, 3, 1, 3, 2];
  s = 0;
  sum() {
    for (let i = 0; i < this.array.length; i++) {
      this.s += this.array[i]
    }
    console.log("sum is :" + this.s);
  }

  // matrix() {
  //   var size = 4;
  //   var a:number[] = [];
  //   for (let i = 1; i <= size*size; i++) {
  //     a.push(i);
  //  }





    // var myArray = Array(size).fill(Array(size).fill(()=> {
    //         for (let i=1;i <= size*size;i++){
    //           item = i ; 
    //           console.log(i);                           
    //         }
  //   }));
  //   =>{
  //   }))
  //     for (let i=0;i < size*size;i++){
  //       for(let j=0;j <a.length;j++){
  //         a[i][j]=1;
           
  //           myArray = a[j][i]
  //       }
  //   }
    // console.log(myArray);
      
  // }

    // matrix() {
    //   var num = 16;
    //   var mat1 = []
    //   var a=1

      
    //   for(let i in range(num)){
    //     let temp1 = []
    //     for( let j in range(num)){
    //       // temp1.append()
    //       temp1.push(a)
    //       a++;
    //     }
    //     mat1.push(temp1)
    //   }
    //   console.log(mat1);
      
    // }
  }

// }
