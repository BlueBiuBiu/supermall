<template>
    <div class="goods-item">
        <img v-lazy="showImg" alt="" @load="imageLoad">
        <div class='goods-info'>
            <p>{{goodsItem.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsItem:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('categoryImageLoad')
      },
    },
    computed: {
      showImg(){
        return this.goodsItem.image || this.goodsItem.img
      }
    },
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 10px;
    position: relative; 
    width: 30%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px; 
    height: 80px;
    margin-bottom: 3px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap,规定段落中的文本不能换行 */
    white-space: nowrap;
    margin-bottom: 1px; 
  }

</style>