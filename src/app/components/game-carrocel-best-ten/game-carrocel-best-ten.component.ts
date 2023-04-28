import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-carrocel-best-ten',
  templateUrl: './game-carrocel-best-ten.component.html',
  styleUrls: ['./game-carrocel-best-ten.component.css'],
  providers: [NgbCarouselConfig],
})
export class GameCarrocelBestTenComponent {
  games = [
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/2222/l8QTN7ThQK3lRBHhB3nX1s7h.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/0621/d3c11818a78c6495e84a3d8e8dd6dc652721be36e0eb8c0a.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/1300/69e8f4d30c2b6544938b4a3754f3089445c74527c0b821d6.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png?w=230&thumb=false'
    },
  ]
}
