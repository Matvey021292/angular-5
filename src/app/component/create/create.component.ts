import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	title ='Add Site';
	angForm: FormGroup;
	constructor(private coinservise: CoinService, private fb: FormBuilder) {
		this.createForm();
	}
	createForm(){
		this.angForm = this.fb.group({
			name: ['', Validators.required],
			price: ['', Validators.required],
		})
	}
	addCoin(name, price){
		this.coinservise.addCoin(name, price);
	}
	ngOnInit() {
	}

}
