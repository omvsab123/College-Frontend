import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

interface Course {
  id: number;
  title: string;
  duration: string;
  type: string;
  description: string;
  seats?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // ---------------- Existing Code ----------------
  eventsData: any[] = [];
  showModal = false;
  modalImageUrl: string | null = null;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // Fetch Events
    this.loginService.getAllEvents().subscribe({
      next: (res) => {
        this.eventsData = res.data || [];
      },
      error: () => {
        this.eventsData = [];
      }
    });
  }

  openImage(url: string) {
    this.modalImageUrl = url;
    this.showModal = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.showModal = false;
    this.modalImageUrl = null;
    document.body.classList.remove('modal-open');
  }

  @HostListener('window:keydown', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showModal) {
      this.closeModal();
    }
  }



  // ---------------- New "Courses" Section Code ----------------

  search = '';
  courseTypeFilter = 'All';

  courses: Course[] = [
    {
      id: 1,
      title: 'Bachelor of Business Administration in Computer Applications, (BBA-CA)',
      duration: '3 Years',
      type: 'UG',
      description: 'F.Y/S.Y/T.Y.BBA(CA)',
      seats: '80'
    },
    {
      id: 2,
      title: 'Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      type: 'UG',
      description: 'F.Y/S.Y/T.Y.B.Com',
      seats: '240'
    },
    {
      id: 3,
      title: ' Bachelor of Arts, (B.A)',
      duration: '3 Years',
      type: 'UG',
      description: 'F.Y/S.Y/T.Y.B.A',
      seats: '240'
    },
    {
      id: 4,
      title: 'Bachelor of Science(BSC)',
      duration: '3 Years',
      type: 'UG',
      description: 'F.Y/S.Y/T.Y.B.Sc',
      seats: '240'
    },
     {
      id: 5,
      title: 'Bachelor of Science in Computer Science (BSC-CS)',
      duration: '3 Years',
      type: 'UG',
      description: 'F.Y/S.Y/T.Y.B.Sc (Comp.Sc.)',
      seats: '80'
    },
     {
      id: 6,
      title: 'Master of Arts, (M.A)',
      duration: '2 Years',
      type: 'PG',
      description: 'Marathi',
      seats: '60'
    },
     {
      id: 7,
      title: 'Master of Arts, (M.A)',
      duration: '2 Years',
      type: 'PG',
      description: 'History',
      seats: '60'
    },
    {
      id: 8,
      title: 'Master of Commerce, (M.Com)',
      duration: '2 Years',
      type: 'PG',
      description: '1.Advance cost accounting and Cost System.  2.Advance Banking and Finance',
      seats: '60'
    }
  ];

  get filteredCourses(): Course[] {
    return this.courses.filter(c => {
      const mSearch =
        this.search.trim() === '' ||
        c.title.toLowerCase().includes(this.search.toLowerCase()) ||
        c.description.toLowerCase().includes(this.search.toLowerCase());

      const mType = this.courseTypeFilter === 'All' || c.type === this.courseTypeFilter;

      return mSearch && mType;
    });
  }

  enroll(course: Course) {
  this.router.navigate(['/gallery']);
  }
}
