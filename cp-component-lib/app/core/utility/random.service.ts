import { Injectable } from '@angular/core';
import * as Chance from 'chance';

@Injectable()
export class RandomService {
  chanceService: Chance.Chance;

  constructor() {
    this.chanceService = new Chance();
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomBool(): boolean {
    return this.chanceService.bool();
  }

  getRandomName(): string {
    return this.chanceService.name();
  }

  getRandomSentence(): string {
    return this.chanceService.sentence();
  }

  getRandomParagraph(): string {
    return this.chanceService.paragraph();
  }

  getRandomPhoto(width: number, height: number): string {
    return `http://placehold.it/${width}x${height}`;
  }

  getRandomDataGrid(width?: number, height?: number) {
    let result = [];
    const cols = width || this.getRandomInt(1, 20);
    const rows = height || this.getRandomInt(1, 20);

    let propsArr = [];
    // build props
    for (let i = 0; i < cols; i++) {
      propsArr.push(this.getRandomName());
    }
    // assemble rows
    for (let rowIndx = 0; rowIndx < rows; rowIndx++) {
      let dataObj = {};
      for (let propIndx = 0; propIndx < cols; propIndx++) {
        dataObj[propsArr[propIndx]] = this.getRandomName();
      }
      result.push(dataObj);
    }
    return result;
  }

  getRandomDate(): Date {
    let thisYear = new Date().getFullYear();
    let date: Date | string = this.chanceService.date({ string: false, year: thisYear });
    return new Date(date.toString());
  }

  getRandomGoogleUrl(): string {
    return this.chanceService.url({ domain: 'www.google.com' });
  }

}
