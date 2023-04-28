import { Component } from '@angular/core';

@Component({
  selector: 'app-game-carrocel-new',
  templateUrl: './game-carrocel-new.component.html',
  styleUrls: ['./game-carrocel-new.component.css']
})
export class GameCarrocelNewComponent {
  games = [
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/2222/l8QTN7ThQK3lRBHhB3nX1s7h.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1012/V6WJkRhfNIQ3ePfAmrLSfGng.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1516/C4e7doLUZkF9fDviGRHO1n2x.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/0511/3tqbQ0Mjd0JwmcfGEGv6c4i6.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/1820/089786a9937a0074b674f3494b0bf710c68e16b4a11f47fc.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/1119/195cdeb4a42e21b335183060d5dfe1b49f4fc92c87429f92.png?w=230&thumb=false'
    },
  ]

}
