import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  deviceInfoForm: FormGroup;
  floorDropdown: any = [];
  locationDropdown: any = [];
  typeDropdown: any = [];
  vendorDropdown: any = [];
  dataSource: any = [];
  cols = [
    { field: 'type', header: 'Type', width: '' },
    { field: 'vendorName', header: 'Vendor', width: '' },
    { field: 'operation', header: '', width: '110px' }
  ];
  selectedItems: any;

  applianceTypeForm: FormGroup;
  sensorTypeForm: FormGroup;
  roomTypeForm: FormGroup;
  sensorInfoForm: FormGroup;
  floorForm: FormGroup;
  locationForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.floorDropdown = [
      { label: 'Floor 1', value: 1 },
      { label: 'Floor 2', value: 2 },
      { label: 'Floor 3', value: 3 },
      { label: 'Floor 4', value: 4 }
    ];

    this.locationDropdown = [
      { label: 'Location 1', value: 1 },
      { label: 'Location 2', value: 2 },
      { label: 'Location 3', value: 3 },
      { label: 'Location 4', value: 4 }
    ];

    this.typeDropdown = [
      { label: 'Temperature', value: 1 },
      { label: 'Humidity', value: 2 },
      { label: 'Gas', value: 3 }
    ];

    this.vendorDropdown = [
      { label: 'DHT 11', value: 1 },
      { label: 'MQ 22', value: 2 }
    ];
    this.generateForms();
  }
  generateForms() {
    this.deviceInfoForm = this.formBuilder.group({
      id: [null],
      version: [null],
      floorId: [null],
      locationId: [null],
      type: [null],
      vendorName: [null],
      topicsIn: [null],
      dimension: [null],
      topicsOut: [null],
      dimmerCount: [null]
    });
    this.deviceInfoForm.patchValue({
      type: this.typeDropdown[0].value,
      vendorName: this.vendorDropdown[0].value
    });

    this.applianceTypeForm = this.formBuilder.group({
      type: [null]
    });
    this.sensorTypeForm = this.formBuilder.group({
      type: [null]
    });
    this.roomTypeForm = this.formBuilder.group({
      type: [null]
    });
    this.sensorInfoForm = this.formBuilder.group({
      version: [null],
      vendorInfo: [null],
      accuracy: [null],
      voltage: [null],
      outputType: [null],
      type: [null]
    });
    this.floorForm = this.formBuilder.group({
      no: [null]
    });
    this.locationForm = this.formBuilder.group({
      floor: [null],
      type: [null]
    });
  }
  addDataToTable() {
    if (this.deviceInfoForm.get('type').value && this.deviceInfoForm.get('vendorName').value) {
      let typeLabel;
      let vendorLabel;
      this.typeDropdown.forEach((type: any) => {
        if (type.value === +this.deviceInfoForm.get('type').value) {
          typeLabel = type.label;
        }
      });
      this.vendorDropdown.forEach((vendor: any) => {
        if (vendor.value === +this.deviceInfoForm.get('vendorName').value) {
          vendorLabel = vendor.label;
        }
      });
      this.dataSource.push({
        type: typeLabel,
        vendor: vendorLabel
      });
    }
  }

  deleteData(rowData) {
    let index;
    this.dataSource.forEach((dataItem: any) => {
      if (dataItem.type === rowData.type && dataItem.vendor === rowData.vendor) {
        index = this.dataSource.indexOf(dataItem);
      }
    });
    if (index !== -1) {
      this.dataSource.splice(index, 1);
    }
  }

  deviceInfoCreate() {}

  deviceInfoUpdate() {}

  deviceInfoLoad() {}

  sensorInfoCreate() {}

  sensorInfoUpdate() {}

  sensorInfoLoad() {}

  applianceTypeCreate() {}

  applianceTypeDelete() {}

  sensorTypeCreate() {}

  sensorTypeDelete() {}

  roomTypeCreate() {}

  roomTypeDelete() {}

  floorCreate() {}

  floorDelete() {}

  locationCreate() {}

  locationDelete() {}
}
