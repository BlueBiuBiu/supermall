<template>
  <div class="list-item">
      <div class="item-selector">
          <check-button></check-button>
      </div>
    <div class="item-img">
      <img :src="goods.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{goods.title}}</div>
      <div class="item-desc">{{goods.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{goods.nowPrice}}</div>
        <div class="item-count">x{{goods.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name: '',
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    components: {
        CheckButton
    }
}
</script>

<style scoped>
    .list-item {
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .item-selector {
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-img {
        padding: 5px;
    }
    .item-img img {
        width: 80px;
        height: 100px;
        border-radius: 5px;
    }
    .item-info {
        font-size: 14px;
        color:#333;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
    }
    .item-title, .item-desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-title {
        font-size: 17px;
        margin-bottom: 4px;
    }
    .item-desc {
        color: #666;
        font-size: 14px;
    }
    .info-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    .item-price {
        color: #ffb805;
        font-size: 20px;
    }
    .item-count {
        font-size: 20px;
    }

</style>
