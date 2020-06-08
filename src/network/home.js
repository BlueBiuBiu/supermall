import {request,request2} from 'network/request'

export function getHomeMultidata(){
    return request({
        url: '/home/multidata'
    })
}

export function getGoodsData(type,page) {
    return request2({
        url: '/api/n3/home/data',
        params:{
            type,
            page
        }
    })
}