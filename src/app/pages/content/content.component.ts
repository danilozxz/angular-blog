import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string = "https://img-c.udemycdn.com/course/750x422/2919556_498a.jpg"
  contentTitle:string = "Spring boot lidera no ranking pernambucano"
  contentDescription:string = "O spring boot é o framework back-end mais utilizado entre os pernambucanos"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }
  
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title    
    this.contentDescription = result.description    
    this.photoCover = result.photoCover    
  }

}
