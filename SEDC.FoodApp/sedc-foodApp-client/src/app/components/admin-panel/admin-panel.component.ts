import { Component, OnInit } from '@angular/core';
import { AdminPanelService } from 'src/app/services/admin-panel.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private adminPanelService: AdminPanelService) {}

  ngOnInit(): void {
    this.addRestaurant()
  }

  addRestaurant() {
    let requestModel = {
      Name: "Forza",
      Address: "New Address",
      Municipality: 1
    }

    this.adminPanelService.addRestaurant(requestModel).subscribe({
      error: err => console.warn(err.error)
    })

  }
}
