import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  email = 'nishranasar@gmail.com';
  mobileNumber = '+94-76-364-4-633';
  articles = [
    {
      title: 'Microsoft Azure Key Vault For.NET Core APIs and Function Apps',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*WfXLTVZ5ne7pLkf2Ot_JxA.png',
      link: 'https://nishranasar.medium.com/microsoft-azure-key-vault-a3c1a10425c5',
    },
    {
      title: 'OpenID Connect Authentication with Azure AD and AD-B2C',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:750/format:webp/1*fOLH1D4x7A73mLMgYMflrQ.png',
      link: 'https://nishranasar.medium.com/openid-connect-authentication-with-azure-active-directory-and-b2c-53ad0fc241f4',
    },
    {
      title: 'Delete Cache in Azure APIM',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:720/format:webp/1*qVTjDiyqGEupfVtbnVNtLw.png',
      link: 'https://nishranasar.medium.com/delete-cache-in-azure-api-management-bf4c0d47bae8',
    },
    {
      title: 'Integrate PingOne with .NET Core.',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:640/format:webp/1*zNDI3T0NkKVBFQyWuT1LOA.jpeg',
      link: 'https://nishranasar.medium.com/integrate-pingone-with-net-core-a08b9bbf1a0a',
    },
    {
      title:
        'React Unit Testing & Connecting Test Results to Azure Pipeline CI/CD.',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:640/format:webp/1*SCjCRjjJ35gxoQMSGRmAJg.png',
      link: 'https://engineering.99x.io/react-unit-testing-connecting-test-results-to-azure-pipeline-ci-cd-819a2a183904',
    },
    {
      title: 'What is PWA?',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*CO9JSzxLJ3ZQ_UdHigWp-Q.png',
      link: 'https://engineering.99x.io/what-is-pwa-98b06b77f361',
    },
  ];
  skills = [
    { class: 'bi-laptop', name: '.NET Core' },
    { class: 'bi-braces', name: 'C Sharp' },
    { class: 'bi-cloud ', name: 'Azure DevOps' },
    { class: 'bi-database', name: 'Ms SQL' },
    { class: 'bi-gear', name: 'Azure Function App' },
    { class: 'bi-cpu', name: 'Azure Durable Functions' },
    { class: 'bi-app-indicator', name: 'Angular' },
    { class: 'bi-browser-chrome', name: 'React' },
  ];
  roles = [
    'Full Stack Engineer',
    'Azure Developer',
    '.NET Developer',
    'Angular Developer',
    'React Developer',
    'Blogger',
  ];
  currentYear: number | undefined;
  yearsOfExperince: number | undefined;
  selectedYear: number | undefined;
  descriptions: {
    year: number;
    designation: string;
    company: string;
    description: string;
  }[] = [
    {
      year: 2020,
      designation: 'Trainee Software Engineer (Full Stack)',
      company: '99x (Pvt) Ltd - Sri Lanka',
      description: 'March 2020 - January 2021',
    },
    {
      year: 2021,
      designation: 'Associate Engineer - Technology (Full Stack)',
      company: 'Virtusa (Pvt) Ltd - Sri Lanka',
      description: 'July 2021 - March 2022',
    },
    {
      year: 2022,
      designation: 'Software Engineer (.NET)',
      company: 'Acentura (Pvt) Ltd - Sri Lanka',
      description: 'March 2022 - October 2023',
    },
    {
      year: 2023,
      designation: 'Software Engineer (Full Stack)',
      company: 'School Grid (Pvt) Ltd - UK',
      description: 'October 2023 - January 2025',
    },
    {
      year: 2025,
      designation: 'Senior Software Engineer (Full Stack)',
      company: 'School Grid (Pvt) Ltd - UK',
      description: 'January 2025 - Present',
    },
  ];
  educationData = [
    {
      title: 'Azure Fundamentals - AZ-900',
      institution: 'Microsoft',
      year: 2023,
      grade: 'Pass',
      image: '../../assets/certificate.png',
    },
    {
      title: 'BSc (Hons) in Computer Science - Web and Mobile Development',
      institution: 'Kingston University',
      year: 2020,
      grade: 'First Class (Best Performer Award)',
      image: '../../assets/degree.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.initTypingEffect();
    this.currentYear = new Date().getFullYear();
    this.selectedYear = this.currentYear;
    this.yearsOfExperince = this.currentYear - 2020;
  }

  initTypingEffect() {
    const options = {
      strings: this.roles,
      typeSpeed: 100, // Speed of typing
      backSpeed: 50, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop through the strings
    };

    new Typed('#typed-role', options); // Initialize the typing effect
  }

  getData(year: number, section: string) {
    const item = this.descriptions.find((item) => item.year === year);
    if (!item) return null;

    switch (section) {
      case 'desig':
        return item.designation;
      case 'comp':
        return item.company;
      case 'descrip':
        return item.description;
      default:
        return null;
    }
  }
}
