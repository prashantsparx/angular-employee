import {Component} from '@angular/core';
import { indexService } from '../index/services/index.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: "app/dashboard/index/index.component.html",
  styleUrls: ["app/dashboard/index/index.component.css"],
  providers: [indexService],
})

export class dashboardIndexComponent {
	
	employeeData: any[];
	token: string;

	constructor(private _indexService: indexService, private _router: Router){
		this._indexService.getEmployeeData().subscribe(data => {
			this.employeeData = data;
		});
	}

	deleteEmployee(id): void {
		this._indexService.deleteEmployee(id).subscribe(data => {
			this.employeeData = this.employeeData.filter(function(employee){
				return employee.id != id;
			});
		});
	}
}
