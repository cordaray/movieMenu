import _ from 'lodash';

export function paginate(array,pageSize,pageNumber) {

    let startIndex = (pageNumber-1)*pageSize;

    return _(array).slice(startIndex).take(pageSize).value();

}