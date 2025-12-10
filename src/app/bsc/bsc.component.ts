import { Component } from '@angular/core';

@Component({
  selector: 'app-bsc',
  templateUrl: './bsc.component.html',
  styleUrls: ['./bsc.component.css']
})
export class BscComponent {

  title = 'Department of Microbiology';
  subtitle = `Mahatma Gandhi Sarvodaya Sangh’s Padmashri Manibhai Desai Mahavidyalaya, Uruli Kanchan`;
  affiliation = 'Affiliated to Savitribai Phule Pune University';
  established = '2002';
  intake = '120 (Annual)';

  overview: string[] = [
    `Established in 2002, the Department of Microbiology has grown into a vibrant academic unit committed to excellence in teaching, learning, and research.`,
    `With an annual intake of 120 students, the department offers a comprehensive three-year undergraduate program (B.Sc. Microbiology) that equips students with in-depth knowledge and practical skills in various fields of microbiology.`,
    `Since its inception, the department has been committed to producing skilled microbiologists capable of contributing to diverse sectors such as healthcare, pharmaceuticals, biotechnology, food and dairy industries, environmental management, and scientific research.`,
    `Through continuous improvement and innovation, the Department of Microbiology strives to nurture responsible, knowledgeable, and employable graduates who can address current and emerging challenges in the microbial world.`
  ];

  highlights: string[] = [
    'ICT-enabled and experiential teaching-learning practices',
    'Mentor–Mentee and Class Guardian system for academic and personal guidance',
    'Strong industry collaboration for internships, projects, and placements',
    'Regular guest lectures, industrial visits, departmental activities, model and poster competitions, quiz competitions',
    'Focus on innovation, skill enhancement, and holistic student development',
    'Certificate courses in Biofertiliser Production, Mushroom Production and Cultivation, Milk Adulteration'
  ];

  infraIntro: string[] = [
    'The Department of Microbiology is well-equipped with modern infrastructure to support effective teaching, hands-on training, and research.',
    'Spacious and well-ventilated classrooms equipped with projectors, boards, and audio-visual aids.',
    'The department has fully functional and specialized laboratories for undergraduate training and student research.'
  ];

  facilities: string[] = [
    'Spacious classrooms with AV aids',
    'Specialized undergraduate & research labs',
    'Student training and demonstration areas',
    'Department library and resource corner'
  ];

  instruments: string[] = [
    'Autoclaves & Laminar Air Flow Cabinets',
    'Incubators',
    'Centrifuge',
    'pH Meters & Colorimeters',
    'Gel Electrophoresis Unit',
    'Hot Air Oven & Rotary Shaker',
    'Light & Compound Microscopes'
  ];

  objectives: string[] = [
    'To impart comprehensive knowledge and practical skills in microbiology',
    'To nurture scientific temper, critical thinking, and ethical values',
    'To prepare students for careers in research, healthcare, industry, and higher education'
  ];

  vision = `To be a center of excellence in microbiological education and research, fostering innovation, sustainability, and societal impact through scientific advancement and skilled human resource development.`;

  mission: string[] = [
    'To provide a strong foundation in microbiological concepts through high-quality teaching and hands-on laboratory training.',
    'To encourage curiosity-driven learning and promote research aptitude among students.',
    'To develop competent microbiologists capable of contributing to healthcare, agriculture, environment, and industry.',
    'To instill values of scientific ethics, environmental responsibility, and lifelong learning.',
    'To establish collaborations with academic, research, and industrial organizations for student development and knowledge exchange.'
  ];

  // Optional: hero image fallback handler
  imgError(event: any) {
    // if image missing, replace with a subtle placeholder color block
    event.target.src = 'data:image/svg+xml;charset=UTF-8,' +
      encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#E8EFFB'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#1a3da8' font-size='28'>Department of Microbiology</text></svg>`);
  }

  constructor() {}




//  departmental gallary

 selectedImage: string | null = null;

  galleryImages = [
    { path: 'assets/cantin.png', title: 'Canteen' },
    { path: 'assets/chemicallab.png', title: 'Chemistry Lab' },
    { path: 'assets/comlab.png', title: 'Computer Lab' },
    { path: 'assets/gym.png', title: 'College Gym' },
    { path: 'assets/lab.png', title: 'Microbiology Lab' },
    { path: 'assets/studylab.png', title: 'Study Lab' }
  ];

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
