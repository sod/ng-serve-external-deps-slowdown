import { Component } from '@angular/core';
import angularAsFile from 'src/assets/angular.svg';
import angularInline from 'src/assets/angular.inline.svg';

console.log({angularAsFile, angularInline})

@Component({
    selector: 'app-lorem-0001',
    imports: [],
    template: `
      lorem-0001 works!
        <div>
            <h3>image as file path</h3>
            <pre>{{ angularAsFile }}</pre>
            <img [src]="angularAsFile" alt="">
        </div>
      @if (angularInline) {
          <div>
              <h3>image inline</h3>
              <pre>{{ angularInline }}</pre>
              <img [src]="angularInline" alt="">
          </div>
      }
      
  `,
    styles: `
        img {
            width: 6rem;
            height: 6rem;
        }
        
        div {
            word-break: break-all;
            border: 2px solid gray;
            padding: 2rem;
            margin: 2rem;
        }
    `
})
export class Lorem0001Component {

    protected readonly angularAsFile = angularAsFile;
    protected readonly angularInline = /<svg/.test(angularInline) ? `data:image/svg+xml;base64,${btoa(angularInline)}` : undefined;
}
