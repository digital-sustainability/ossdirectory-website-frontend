import { Subject, concat, BehaviorSubject } from 'rxjs';
import { Req } from './req';
import { RequestService } from './services/request.service';
import { Data } from './data';

export class Pager extends Subject<Data|Data[]>{

  public first : number;
  public offset : number;

  constructor(
    private req_service : RequestService,
    private request : Req){
    super();
    this.first = request.first ? request.first : 10;
    this.offset = request.offset ? request.offset : 0;
  }

  public getPageByNumber(page_number : number) {
  }

  public getNextPage(steps_forward? : number){
    this.setOffset(steps_forward ? steps_forward : 1)
    let copy = Object.assign({}, this.request)
    copy.offset = this.offset;
    copy.first = this.first;
    this.req_service.request(copy, this); //create copy if not we have circle object
  }

  public getPreviousPage(steps_backwards? : number){
    this.getNextPage(steps_backwards ? -steps_backwards : -1);
  }

  public setOffset(steps){
    let next = this.first * (steps);
    this.offset += next;
  }



}