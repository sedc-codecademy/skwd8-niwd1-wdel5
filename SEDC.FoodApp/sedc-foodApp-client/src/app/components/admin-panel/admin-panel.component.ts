import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Municipality, RestaurantRequestModel } from 'src/app/models/restaurant-model';
import { AdminPanelService } from 'src/app/services/admin-panel.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  modalRef: BsModalRef;

  municipalityList = [Municipality.karpos, Municipality.centar, Municipality.aerodrom]

  requestForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    municipality: new FormControl('')
  })

  constructor(private adminPanelService: AdminPanelService,
              private modalService: BsModalService) {}

  ngOnInit(): void {}

  addRestaurant() {
    let requestModel = new RestaurantRequestModel();

    this.adminPanelService.addRestaurant(requestModel).subscribe({
      error: err => console.warn(err.error)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
