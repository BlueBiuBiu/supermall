import {request2} from 'network/request'

export function getCategoryData(){
    return request2({
        url: 'api/n3/category'
    })
}

export function getSubCategoryData(maitKey){
    return request2(
        {
            url: 'api/n3/subcategory',
            params: {
                maitKey
            }
        }
    )
}

export function getSubCategoryDetailData(miniWallkey,type){
    return request2(
        {
            url: 'api/n3/subcategory/detail',
            params: {
                miniWallkey,
                type
            }
        }
    )
}