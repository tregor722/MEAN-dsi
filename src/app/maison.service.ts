import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MaisonService {
  private apiUrl = 'http://localhost:3000/api/maison';
  constructor(private http: HttpClient) { }



  all() {
    return this.http.get(this.apiUrl);
  }

  get(id: any) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /*
   * Create a new course
   * @param course new course to create
   */
  create(course: any) {
    return this.http.post(this.apiUrl, course);
  }

  /*
   * Update a course with the given id
   * @param id course id to update
   * @param course new course data
   */
  update(id: string, course: any) {
    return this.http.put(this.apiUrl + '/' + id, course);
  }

  /*
   * Delete a course with the given id
   * @param id course id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }



}
