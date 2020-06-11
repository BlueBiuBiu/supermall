import {request2} from 'network/request'

export function getDetailData(iid){
    return request2({
        url: '/api/n3/detail',
        params: {
            iid
        }
    })
}