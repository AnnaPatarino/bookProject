import { NgModule } from "@angular/core";
import { TitleColorDirective } from "./title-color.directive";

@NgModule({
    exports: [
        TitleColorDirective
    ],
    declarations: [TitleColorDirective]
  })
  export class TitleColorModule {}
  