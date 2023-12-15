import { Component } from '@angular/core';

import { Company, Service } from '../../services/accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  providers: [Service],
  preserveWhitespaces: true,
})
export class AccordionComponent {
  companies: Company[];
  multiple: boolean | undefined; 
  collapsible: boolean | undefined;


  onMultipleValueChanged(event: any) {
    this.multiple = event.value;
    console.log(this.multiple)
  }

  onCollapsibleValueChanged(event: any) {
    this.collapsible = event.value;
  }
  
  constructor(service: Service) {
    this.companies = service.getCompanies();

    this.multiple =  true;
    this.collapsible =  true;
  


  }
  
}

