import {request2} from 'network/request'

export function getDetailData(iid){
    return request2({
        url: '/api/n3/detail',
        params: {
            iid
        }
    })
}

export function getRecommendData(iid){
  return request2({
      url: '/api/n3/recommend',
      params: {
          iid
      }
  })
}

export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.lowNowPrice = itemInfo.lowNowPrice;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.discountBgColor = itemInfo.discountBgColor;
      this.columns = columns;
      this.services = services;
    }
  }

  export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
    }
  }

  export class GoodsInfo{
    constructor(detailInfo){
      this.desc = detailInfo.desc;
      this.key = detailInfo.detailImage[0].key;
      this.goodsList = detailInfo.detailImage[0].list
    }
  }

  export class GoodsParams {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }