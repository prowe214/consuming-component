/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomService } from './random.service';

describe('Service: Random', () => {
  let randomService: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomService]
    });
    randomService = new RandomService();
  });

  it('should exist', inject([RandomService], (service: RandomService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an int between 5 & 10', inject([RandomService], (service: RandomService) => {
    const int = service.getRandomInt(5, 10);
    expect(int >= 5 && int <= 10).toBe(true);
  }));

  it('should return an boolean', inject([RandomService], (service: RandomService) => {
    const bool = service.getRandomBool();
    expect(bool).toEqual(jasmine.any(Boolean));
  }));

  it('should return a string with two words', inject([RandomService], (service: RandomService) => {
    const name = service.getRandomName();
    const nameArray = name.split(' ');
    expect(nameArray.length).toEqual(2);
  }));

  it('should return a sentence with between 12 & 18 words', inject([RandomService], (service: RandomService) => {
    const sentence = service.getRandomSentence();
    const sentenceCount = sentence.split(' ').length;
    expect(sentenceCount >= 12 && sentenceCount <= 18).toBe(true);
  }));

  it('should return a paragraph with between 3 & 7 sentences', inject([RandomService], (service: RandomService) => {
    const paragraph = service.getRandomParagraph();
    const paragraphCount = paragraph.split('.').length;
    expect(paragraphCount >= 2 && paragraphCount <= 8).toBe(true);
  }));

  it('should return a photo with specified dimensions', inject([RandomService], (service: RandomService) => {
    const photoUrl = service.getRandomPhoto(250, 250);
    expect(photoUrl).toEqual(`http://placehold.it/250x250`);
  }));

  it('should return a date of this year', inject([RandomService], (service: RandomService) => {
    const date = service.getRandomDate();
    expect(date.getFullYear()).toEqual(new Date().getFullYear());
  }));

  it('should return a photo with specified dimensions', inject([RandomService], (service: RandomService) => {
    const googleUrl = service.getRandomGoogleUrl();
    expect(googleUrl.indexOf('www.google.com') > -1).toBe(true);
  }));
});
