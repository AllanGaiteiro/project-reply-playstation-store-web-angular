import { Injectable } from '@angular/core';
import { Game } from '../models/games.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  constructor() { }

  findBestTem(): Game[] {
    return [
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

  findDemo(): Game[] {
    return [
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

  findNew(): Game[] {
    return [
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

  findShortly(): Game[] {
    return [
      {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/3017/Oo1B84A7BLCT157YFSxjtwG0.png?w=230&thumb=false'
      },
      {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/XFU0aPBvtm3W2od1ZvhByAOv.png?w=230&thumb=false'
      },
      {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/3007/lgFVhRm5BfoX02pRUt3lSmLV.png?w=230&thumb=false'
      },
      {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/1301/4f6q3hFlVbI3FSbDDpH9I4uA.png?w=230&thumb=false'
      },
      {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/0214/CfyekgsrgeaZlAfgVDeK10ZF.png?w=230&thumb=false'
      },
      {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png?w=230&thumb=false'
      },
    ]
  }
}
