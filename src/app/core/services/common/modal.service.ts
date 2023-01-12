import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private componentRef!: ComponentRef<any>;
  private componentSubscriber!: Subject<string>;
  constructor() {}

  openModal(component: any, entry: ViewContainerRef, props: any = {}) {
    this.componentRef = entry.createComponent(component);
    this.componentRef.instance.props = props;
    this.componentRef.instance.closeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.next('closed');
    this.destroyModal();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.destroyModal();
  }
  destroyModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }
}
