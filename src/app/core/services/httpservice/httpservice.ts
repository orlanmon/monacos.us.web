import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ResponseResult } from '../../interfaces/responseresult';
import { map, Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class Httpservice {

public baseApiUrl: string = "";

constructor(private http: HttpClient ) {

}

public setBaseURL(baseAPIURL:string ) {

  this.baseApiUrl = baseAPIURL;

}

private fullUri(url: string) : string {

  return this.baseApiUrl + url;

}

 private headers_json2(token?: string): HttpHeaders {

        return token == undefined ? new HttpHeaders({"content-type": "application/json"})
            : new HttpHeaders({"content-type": "application/json", "authorization": `Bearer ${token}`});

    }


 private headers_json(token?: string): HttpHeaders {

      var httpHeaders : HttpHeaders;

      httpHeaders = new HttpHeaders();

      if( token == undefined ) {

          httpHeaders = httpHeaders.append("content-type", "application/json");


      } else {

        httpHeaders = httpHeaders.append("content-type", "application/json");
        httpHeaders = httpHeaders.append("authorization", "Bearer " + token );

      }

      return httpHeaders;

    }

 public get_response<T>(url: string, token?: string ): Observable<ResponseResult<T>> {
    
    const uri = this.fullUri(url);
    
    var result = this.http.get<T>(uri, { observe: 'response', headers: this.headers_json(token) })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))

    return result;
  }

  public post_response<T>(url: string, body: any, token?: string ): Observable<ResponseResult<T>> {
    
    const uri = this.fullUri(url);

     var result = this.http.post<T>(uri, body, { observe: 'response', headers: this.headers_json(token) })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))

    return result;
  }

public put_response<T>(url: string, body: any, token?: string): Observable<ResponseResult<T>> {

    const uri = this.fullUri(url);
    
     var result = this.http.put<T>(uri, body, { observe: 'response', headers: this.headers_json(token) })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))
    
    return result;
  }  

  public delete_response<T>(url: string, token?: string): Observable<ResponseResult<T>> {
    
    const uri = this.fullUri(url);
    
    var result = this.http.delete<T>(uri, { observe: 'response', headers: this.headers_json(token) })
      .pipe(map((response: HttpResponse<T>) => {
        const responseResult: ResponseResult<T> = { statusCode: response.status, data: response.body };
        return responseResult;
      }))

    return result;
  }

  
}
