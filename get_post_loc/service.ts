getDataAndPost(): Observable<any> {
      return this.http.get('https://api.ipgeolocation.io/v2/ipgeo?apiKey=').pipe(
      switchMap(data =>{
        console.log(data)
        return this.http.post('http://localhost:5000/getLocations',data,httpOptions)
    })
  )
 }

}
