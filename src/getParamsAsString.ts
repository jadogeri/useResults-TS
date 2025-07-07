/**
 * @author      Joseph Adogeri
 * @since       6-JUL-2025
 * @version     1.0.0
 * @description params object and return query string 
 *  
 */

export const getParamsAsString = (queryParams : any) => {
  if(queryParams == null || queryParams == undefined){
    return ""
  }else{
    const params = new URLSearchParams(queryParams as string).toString();
    return "?" + params;
  }
}