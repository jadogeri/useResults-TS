/**
 * @author      Joseph Adogeri
 * @since       6-JUL-2025
 * @version     1.0.0
 * @description Returns reusable hook
 *  
 */

import { useState, useEffect } from "react";
import { getParamsAsString } from "./getParamsAsString";
import { SearchApiParams } from "./types/SearchApiParams";
import { BaseProps } from "./types/BaseProps";


/**
 * Fetches data from a specified API endpoint and manages the results and error state.
 * 
 * @param {ResultsApiProps} props - Configuration object containing base URL, route, and headers.
 * @returns {[Function, any[], string]} - Returns a search function, the results array, and an error message.
 * @throws {Error} - Throws an error message if the fetch operation fails.
 */
// 
const useResults = ({ baseURL, baseRoute, baseHeaders }: BaseProps): [Function, any[], string] => {

  const [results, setResults] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const _baseURL: string = baseURL;
  const _headers: any = baseHeaders ? baseHeaders : {};

  const searchApi = async ({ route, params, headers }: SearchApiParams) : Promise<void> => {
    try {
      const _params: string = getParamsAsString(params);

      const response = await fetch(`${_baseURL}${route}${_params}`, {
        mode: 'cors',
        headers: headers ? headers : _headers,
      });
      const data = await response.json();

      setResults(data);
      setErrorMessage('');

    } catch (e: unknown) {
        if (e instanceof Error) {
            setErrorMessage('something went wrong\nerror message : ' + e.message);
            console.error("An error occurred:", e.message);
        } else {
            console.error("An unknown error occurred:", e);
        }
    }
  };

  useEffect(() => {
    searchApi({ route: baseRoute, headers: _headers });
  }, []);

  return [searchApi, results, errorMessage];
};

export default useResults;