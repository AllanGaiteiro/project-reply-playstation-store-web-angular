import { Component } from '@angular/core';

@Component({
  selector: 'app-game-carrocel-demostration',
  templateUrl: './game-carrocel-demostration.component.html',
  styleUrls: ['./game-carrocel-demostration.component.css']
})
export class GameCarrocelDemostrationComponent {
  games = [
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/1823/5ee4f1cca98c641f68ed17fe19388791d03a3ce170575a76.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/1823/5ee4f1cca98c641f68ed17fe19388791d03a3ce170575a76.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/0304/b46d9adfafd011a50593b2ebd499610d087fb225f79a5b40.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/0304/b46d9adfafd011a50593b2ebd499610d087fb225f79a5b40.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/0609/5a9d59570fae517969d6e36568efe794ddc8d47243dbeb32.png?w=230&thumb=false'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/0308/9f45ecff21d8d1647f5a6972da6ee6a72493031247900731.png?w=230&thumb=false'
    },
  ]
}
