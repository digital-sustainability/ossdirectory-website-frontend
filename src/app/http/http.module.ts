import { NgModule } from "@angular/core";
import { WithCredentialsInterceptor } from "./interceptors/credentials.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptor,
      multi: true
    },
  ],
})
export class HttpModule {
}
