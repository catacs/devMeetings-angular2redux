import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  moduleId: __moduleName,
  selector: 'grocerie-details',
  templateUrl: 'grocerie-details.html'
})

export class GroceriesDetailComponent implements OnInit {
  id

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id']
    })
  }
}