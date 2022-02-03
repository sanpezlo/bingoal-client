import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@shared/components/header/header.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { AuthInterceptorService } from '@shared/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [HeaderComponent, LoadingComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  exports: [HeaderComponent, LoadingComponent],
})
export class SharedModule {}
