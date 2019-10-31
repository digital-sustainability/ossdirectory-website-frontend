import { Injectable } from '@angular/core';
import { Data } from '../data';
import { Factory } from '../factory';
import { Modeltype } from '../enums/modeltype.enum';
import { Product, ProductTranslation } from '../models/product';
import { OrganisationTranslation } from '../models/organisation';
import { SuccessStory, SuccessStoryTranslation } from '../models/success_story';
import { ProductCategory, ProductCategoryTranslation } from '../models/product_category';
import { Vendor, VendorProductServices } from '../models/vendor';
import { Industry, IndustryTranslation } from '../models/industry';
import { Language } from '../models/language';
import { Address } from '../models/address';
import { CommunityMember, Community } from '../models/community';
import { Client } from '../models/client';
import { DataModule } from '../data.module';
import { RequestService } from './request.service';
import { HashService } from './hash.service';
import { Property } from '../enums/null';

@Injectable({ providedIn : DataModule })
export class FactoryService implements Factory {

  constructor(
    public req : RequestService,
    public hash : HashService,
  ) { }


  public create(modeltype : string, input? : any) : Data {
    let data;
    modeltype = modeltype.toLowerCase();
    
    switch(modeltype) {
      case Modeltype.Vendor:
        data = new Vendor(this);
        break;
      case Modeltype.Client:
        data = new Client(this);
        break;
      case Modeltype.Community:
        data = new Community(this);
        break;
      case Modeltype.OrganisationTranslation:
        data = new OrganisationTranslation(this);
        break;
      case Modeltype.SuccessStory:
        data = new SuccessStory(this);
        break;
      case Modeltype.SuccessStoryTranslation:
        data = new SuccessStoryTranslation(this);
        break;
      case Modeltype.Product:
        data = new Product(this);
        break;
      case Modeltype.ProductTranslation:
        data = new ProductTranslation(this);
        break;
      case Modeltype.ProductCategory:
        data = new ProductCategory(this);
        break;
      case Modeltype.VendorProductServices:
        data = new VendorProductServices(this);
        break;
      case Modeltype.Industry:
        data = new Industry(this);
        break;
      case Modeltype.Language:
        data = new Language(this);
        break;
      case Modeltype.Address:
        data = new Address(this);
        break;
      case Modeltype.CommunityMember:
        data = new CommunityMember(this);
        break;
      case Modeltype.VendorProductServices:
        data = new VendorProductServices(this);
        break;
      default:
        //console.error("error while factory create: ", modeltype)
        //TODO:
    }
    if (input) data.deserialize(input);
    return data;
  }

  public cast(modeltype : string, input : any){
    let models = new Array();
    if (input instanceof Array){
      for (let model of input){
        models.push(this.castToType(modeltype, model));
      }
    } else {
      return this.castToType(modeltype, input);
    }
    return models;
  }

  private castToType(modeltype : string, input : any){
    if (input === Property.NULL || !input) return Property.NULL
    let data;
    modeltype = input.type ? input.type : modeltype;
    switch(modeltype.toLowerCase()) {
      case Modeltype.Vendor:
        data = Object.assign(new Vendor(this), input);
        break;
      case Modeltype.Client:
        data = Object.assign(new Client(this), input);
        break;
      case Modeltype.Community:
        data = Object.assign(new Community(this), input);
        break;
      case Modeltype.OrganisationTranslation:
        data = Object.assign(new OrganisationTranslation(this), input);
        break;
      case Modeltype.SuccessStory:
        data = Object.assign(new SuccessStory(this), input);
        break;
      case Modeltype.SuccessStoryTranslation:
        data = Object.assign(new SuccessStoryTranslation(this), input);
        break;
      case Modeltype.Product:
        data = Object.assign(new Product(this), input);
        break;
      case Modeltype.ProductTranslation:
        data = Object.assign(new ProductTranslation(this), input);
        break;
      case Modeltype.ProductCategory:
        data = Object.assign(new ProductCategory(this), input);
        break;
      case Modeltype.ProductCategoryTranslation:
        data = Object.assign(new ProductCategoryTranslation(this), input);
        break;
      case Modeltype.VendorProductServices:
        data = Object.assign(new VendorProductServices(this), input);
        break;
      case Modeltype.Industry:
        data = Object.assign(new Industry(this), input);
        break;
      case Modeltype.IndustryTranslation:
        data = Object.assign(new IndustryTranslation(this), input);
        break;
      case Modeltype.Language:
        data = Object.assign(new Language(this), input);
        break;
      case Modeltype.Address:
        data = Object.assign(new Address(this), input);
        break;
      case Modeltype.CommunityMember:
        data = Object.assign(new CommunityMember(this), input);
        break;
      case Modeltype.VendorProductServices:
        data = Object.assign(new VendorProductServices(this), input);
        break;
      default:
        console.error("error while factory create: ", modeltype)
        //TODO:
    }
    data.deserialize();
    return data;
  }
}
