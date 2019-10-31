import { RequestService } from './services/request.service';
import { Data } from './data';
import { HashService } from './services/hash.service';

export interface Factory {

    req : RequestService
    hash : HashService

    create(modeltype : string, input? : any) : Data
    cast(modeltype : string, ...input : any)
}
