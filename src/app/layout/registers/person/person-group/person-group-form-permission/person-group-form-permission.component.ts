import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-group-form-permission',
  templateUrl: './person-group-form-permission.component.html',
  styleUrls: []
})
export class PersonGroupFormPermissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      let api: DataTables.Api = $("#example1").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
      });
  }

}
