import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-destaques',
  templateUrl: './section-destaques.component.html',
  styleUrls: ['./section-destaques.component.css']
})
export class SectionDestaquesComponent implements OnInit {
  itens = [
    "https://image.api.playstation.com/pr/bam-art/156/475/a63aa02f-884a-4b3f-ab48-c0d4da773937.png?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/156/241/74499e5f-964c-4ef3-95d9-3576338731ef.png?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/156/351/c5c36fa6-bb85-4c2e-8ce9-2854944e1643.jpg?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/141/082/0aa9672f-4506-442d-b51a-a0b07c7e69c9.jpg?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/150/095/28120b18-05e4-4d70-9c3a-a3d12bf78e91.jpg?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/156/685/9468a995-9c6c-4ceb-b024-d63579b7a993.jpg?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/142/225/b8c9c8a9-ce45-4ec5-bdc0-0ee27ee951b9.jpg?w=440&thumb=false",
    "https://image.api.playstation.com/pr/bam-art/156/507/69edcc76-ae4a-43e5-a201-afadb2409a34.jpg?w=440&thumb=false"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
