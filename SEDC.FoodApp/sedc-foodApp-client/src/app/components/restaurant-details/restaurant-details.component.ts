import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MealType } from 'src/app/models/restaurant-model';
import { AdminPanelService } from 'src/app/services/admin-panel.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  modalRef: BsModalRef

  restaurantMenuItems: any

  restaurantId: string

  isEditMode: boolean = false

  menuItemForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    calories: new FormControl(''),
    isVege: new FormControl(''),
    mealType: new FormControl(''),
  })

  filterForm = new FormGroup({
    name: new FormControl('')
  })

  mealTypes = [MealType.Starters, MealType.Salads, MealType.MainDish, MealType.Deserts, MealType.Drinks];

  constructor(private activatedRoute: ActivatedRoute,
              private adminPanelService: AdminPanelService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.restaurantId = params.id
    })

    this.getMenuItems()
  }

  addMenuItem() {
    let requestModel: any = {
      id: this.restaurantId,
      menuItem: {
        name: this.menuItemForm.value.name,
        price: this.menuItemForm.value.price,
        calories: this.menuItemForm.value.calories,
        isVege: Boolean(this.menuItemForm.value.isVege),
        mealType: parseInt(this.menuItemForm.value.mealType)
      }
    }

    this.adminPanelService.updateRestaurantMenu(requestModel).subscribe({
      error: err => console.warn(err.error),
      complete: () => {
        this.closeModal()
        this.getMenuItems()
      }
    })  
  }

  getMenuItems() {
    let filter = this.filterForm.value.name;

    this.adminPanelService.getRestaurantMenu(this.restaurantId, filter).subscribe({
      next: data => this.restaurantMenuItems = data,
      error: err => console.warn(err.error)
    })
  }

  deleteMenuItem(menuItemId: string) {
    this.adminPanelService.deleteMenuItem(this.restaurantId, menuItemId).subscribe({
      error: err => console.warn(err.error),
      complete: () => this.getMenuItems()
    })
  }

  openModal(template: TemplateRef<any>, menuItem?: any) {
    this.modalRef = this.modalService.show(template);

    if(!menuItem) {
      this.menuItemForm.get("mealType").setValue(MealType.Starters)
    }

  }

  closeModal() {
    this.menuItemForm.reset()
    this.modalService._hideModal()
    this.modalService._hideBackdrop()
    this.isEditMode = false
  }

}
