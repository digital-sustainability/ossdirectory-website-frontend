import { TestBed } from '@angular/core/testing';

import { FactoryService } from './factory.service';
import { HashService } from './hash.service';
import { Modeltype } from '../enums/modeltype.enum';

describe('FactoryService', () => {
  let factory : FactoryService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FactoryService,
        HashService
      ]
    })
    factory = TestBed.get(FactoryService);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });
  

  for (let type in Modeltype){

    it(type +  ': should create ' + type, () => {
      let data = factory.create(type.toLowerCase());
      expect(data).toBeTruthy();
    })
    it(type + ': should read', () => {
      let data = factory.create(type.toLowerCase());
      expect(data.read()).toBeTruthy();
    })
    it(type + ': should update', () => {
      let data = factory.create(type.toLowerCase());
      expect(data.update()).toBeTruthy();
    })
    it(type + ': should create', () => {
      let data = factory.create(type.toLowerCase());
      expect(data.create()).toBeTruthy();
    })
    it(type + ': should delete', () => {
      let data = factory.create(type.toLowerCase());
      expect(data.delete()).toBeTruthy();
    })
  }


});
