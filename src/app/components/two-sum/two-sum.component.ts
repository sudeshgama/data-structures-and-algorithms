import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-two-sum',
  standalone: true,
  imports: [],
  templateUrl: './two-sum.component.html',
  styleUrl: './two-sum.component.scss'
})
export class TwoSumComponent implements OnInit {
  twoSumResult: number[] = [];

  constructor() {
    this.twoSumResult = this.twoSum([2, 7, 5, 11], 9);
    console.log(this.twoSumResult);
  }
  twoSum(numbers: number[], target: number): number[] {
    const numberMap = new Map();

    for (let i = 0; i < numbers[i]; i++) {
      const number = numbers[i];
      const result = target - number;

      if (numberMap.get(result) !== undefined) {
        return [numberMap.get(result), i];
      } else {
        numberMap.set(number, i);
      }
    }
    return [];
  }

  ngOnInit(): void {
    Prism.highlightAll();
  }

  typescriptCode = `twoSum(numbers: number[], target: number): number[] {
    const numberMap = new Map();

    for (let i = 0; i < numbers[i]; i++) {
      const number = numbers[i];
      const result = target - number;

      if (numberMap.get(result) !== undefined) {
        return [numberMap.get(result), i];
      } else {
        numberMap.set(number, i);
      }
    }
    return [];
  }`;
}
