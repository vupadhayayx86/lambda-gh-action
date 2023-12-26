import * as _ from 'lodash';
export const handler=()=>{
    const max=10;
    const val=_.random(max);
    const response={
        statusCode:200,
        body:`Hello from ${max} is ${val}`
    }
    return response;
}