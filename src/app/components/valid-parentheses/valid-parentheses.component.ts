import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-valid-parentheses',
  standalone: true,
  imports: [],
  templateUrl: './valid-parentheses.component.html',
  styleUrl: './valid-parentheses.component.scss'
})
export class ValidParenthesesComponent implements OnInit {

  typescriptCode = `validParenthesis(s: string): boolean {
    const stack: string[] = [];
    const splitString = s.split("");
    let isValid: boolean = false;

    if (splitString.length % 2 === 0) {
      return false
    }

    for (let s of splitString) {
      if (s === "{" || s === "(" || s === "[") {
        stack.push();
      }

      if (s === "}" || s === ")" || s === "]") {
        const removedItem = stack.pop();
        if (removedItem === "{" && s === "}" ||
          removedItem === "(" && s === ")" ||
          removedItem === "[" && s === "]") {
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (stack.length > 0) {
      return false;
    }

    return isValid;
  }`;


  validParenthesis(s: string): boolean {
    const stack: string[] = [];
    const splitString = s.split("");
    let isValid: boolean = false;

    if (splitString.length % 2 === 0) {
      return false
    }

    for (let s of splitString) {
      if (s === "{" || s === "(" || s === "[") {
        stack.push();
      }

      if (s === "}" || s === ")" || s === "]") {
        const removedItem = stack.pop();
        if (removedItem === "{" && s === "}" ||
          removedItem === "(" && s === ")" ||
          removedItem === "[" && s === "]") {
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (stack.length > 0) {
      return false;
    }

    return isValid;
  }

  ngOnInit(): void {
    console.log(this.validParenthesis('({{{{}}}))'));
    Prism.highlightAll();
  }
}
