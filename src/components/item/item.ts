// Imports
import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

export class ListItem {
  id: string;
  title: string;
  checked: boolean;
}

@Component({  
	moduleId: __moduleName,
  selector: 'item',
  templateUrl: './item.html'
})

export class ListItemComponent {

  @Input() item: ListItem
  @Output() update: EventEmitter<ListItem> = new EventEmitter<ListItem>()
  @Output() delete: EventEmitter<ListItem> = new EventEmitter<ListItem>()

  @HostBinding('class.checked')
  get checked() { 
		return this.item.checked;
	}

  updateItem(ev) {
    if (ev) {
      this.item.checked = ev.checked
    }
    this.update.emit(this.item);
  }

  deleteItem () {
    this.delete.emit(this.item);
  }
}
