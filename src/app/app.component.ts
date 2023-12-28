import { Component, Inject, InjectionToken, OnInit, ViewContainerRef } from '@angular/core';
@Component({
  template:`<p> I am a paragraph</p>`,
})
export class IamAParagrahph {

}

const componentList = [IamAParagrahph];
const componentToken = new InjectionToken<any>('componentToken');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{provide: componentToken, useValue: componentList}]
})
export class AppComponent implements OnInit {
  title = 'memory-leak-v14';
  constructor(
    private viewContainerRef: ViewContainerRef,
    @Inject(componentToken) private components: any,
  ) {}

  ngOnInit() {
    const instance = this.viewContainerRef.createComponent(this.components[0]);
    this.viewContainerRef.insert(instance.hostView);
  }

  clearViewRef() {
    this.viewContainerRef.clear();
  }
}


