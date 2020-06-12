<template>
    <div>
        <div class='comment-info' v-if='Object.keys(commentInfo).length !== 0'>
            <div class="info-header">
                <div class="header-title">用户评价</div>
                <div class="header-more">更多</div>
            </div>
            <div class='info-user'>
                <img :src="commentInfo.user.avatar" alt="">
                <span>{{commentInfo.user.uname}}</span>
            </div>
            <div class="info-content">
                <p>{{commentInfo.content}}</p>
            </div>
            <div class="info-other">
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div  class="info-images" v-for="(item,index) in commentInfo.images" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="comment-info comment-else" v-else>
            <div>暂无用户评价</div>
        </div>
    </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
    name: '',
    props: {
        commentInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        showDate(value){
            const date = new Date(value * 1000);
            return formatDate(date, "yyyy-MM-dd hh:mm");
        }
    }
}
</script>

<style scoped>
    .comment-info {
        padding: 5px 12px;
        color: #333333;
        border-bottom: 5px solid #f2f5f8;
    }
    .comment-else {
        font-size: 13px;
        text-align: center;
    }
    .info-header {
        line-height: 50px;
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .header-title {
        font-size: 15px;
        float: left;
    }
    .header-more {
        font-size: 13px;
        float: right;
        margin-right: 10px;
    }
    .info-user {
        padding: 10px 0 5px;
    }
    .info-user img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
    .info-user span {
        font-size: 15px;
        position: relative;
        top: -15px;
        margin-left: 10px;
    }
    .info-detail p {
        font-size: 14px;
        line-height: 1.5;
        color: #777777;
    }
    .info-content p {
        font-size: 14px;
        line-height: 1.5;
        color: #777777;
    }
    .info-other {
        font-size: 12px;
        margin-top: 10px;
        color: #999999;
    }
    .info-other .date {
        margin-right: 8px;
    }
    .info-images {
        margin-top: 10px;
    }
    .info-images img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
    }
</style>
