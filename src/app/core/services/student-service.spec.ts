import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


fdescribe('SessionService', () => {
  let service: StudentService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StudentService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete a student', () => {
    let student = {
      id: 54,
      name: 'Test',
      surname: 'Ing',
      email: 'test@ing.com',
      commissionId: 4,
      course: 'test'
    }
    
    service.deleteStudent(student).subscribe(data => {
      expect(data).toBe(54);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: 'https://63cc20169b72d2a88e0893c6.mockapi.io/alumnos/54'
    })

    expect(req.request.method).toBe('DELETE');

    req.flush(54);

    httpController.verify();
  })

});
