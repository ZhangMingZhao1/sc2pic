import request from '../utils/request';

export function getPic() {
  return request('http://localhost:3002/getPic',{method:'GET'});
}
