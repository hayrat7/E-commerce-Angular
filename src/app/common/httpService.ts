import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService{

  constructor(private http: HttpClient,
              private router: Router
  ) {
  }


  public post(url,request,headers) {
    return this.http.post(url, request, { headers, observe: 'response' })
  }

  public getData(url,token) {

    const tokenStr = 'Bearer ' + token;
    let httpOptions = new HttpHeaders()
    httpOptions.append('Authorization', tokenStr);
    return this.http.get(url,{headers:httpOptions,observe: 'response'});
  }
  navigate(path:string){
   return this.router.navigate([path])
  }

}
