import {request2} from 'network/request'

export function getCategoryData(){
    return request2({
        url: 'api/n3/category'
    })
}