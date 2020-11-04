import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', Validators.required),
    address: new FormControl(''),
    municipality: new FormControl('')
  })

  constructor(private adminPanelService: AdminPanelService,
              private modalService: BsModalService) {}

  ngOnInit(): void {}

  addRestaurant() {
    let requestModel = new RestaurantRequestModel();
    requestModel.name = this.requestForm.value.name
    requestModel.address = this.requestForm.value.address
    requestModel.municipality = parseInt(this.requestForm.value.municipality)

    this.adminPanelService.addRestaurant(requestModel).subscribe({
      error: err => console.warn(err.error)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalService._hideModal()
    this.modalService._hideBackdrop()

  }

}
