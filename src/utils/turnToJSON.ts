const turnToJSON = (obj: {}|[]) =>{
  let obj_JSON = JSON.stringify(obj);
  return obj_JSON;
}
export default turnToJSON