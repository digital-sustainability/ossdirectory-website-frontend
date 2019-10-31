import { AuthModule } from '../auth.module';
import { Injectable } from '@angular/core';

@Injectable({ providedIn : AuthModule })
export class EditableService {
  
  public isEditable() {
    return true;
  }
}