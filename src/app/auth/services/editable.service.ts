import { AuthModule } from '../auth.module';
import { Injectable } from '@angular/core';
import { ApolloService } from '../../data/services/apollo.service';
import { ConfigService } from '../../config/services/config.service';

@Injectable({ providedIn : AuthModule })
export class EditableService {

  constructor(
    private config: ConfigService
  ) { }

  public isEditable() {
    return this.config.get('authenticated');
  }

  public authenticateUser() {
    this.config.set('authenticated', true);
  }
}
