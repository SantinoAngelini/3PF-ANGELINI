import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: false,

})
export class ToolbarComponent {
  @Output() drawerToggle = new EventEmitter<void>();

  onToggleDrawer() {
    this.drawerToggle.emit();
  }
}