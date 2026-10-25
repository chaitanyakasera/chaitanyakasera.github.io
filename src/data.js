// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Chetanya Prakash Kasera',
  role: 'Senior Android Developer · Java & Kotlin',
  location: 'Jaipur, Rajasthan, India',
  email: 'chaitanyakasera1@gmail.com',
  github: 'https://github.com/chaitanyakasera',
  // Drop a photo at public/profile.jpg — initials are shown until then.
  photo: 'profile.jpg',
  summary:
    'Detail-oriented Android developer with 6+ years of experience building native apps in Java and Kotlin, from IoT libraries and live-streaming fitness apps to ride-hailing and kids’ education platforms. I enjoy clean architecture (MVVM, SOLID), modern Android with Jetpack Compose and Coroutines, and leading small teams to ship apps on the Play Store.',
}

export const stats = [
  { value: '6+', label: 'Years in Android' },
  { value: '20+', label: 'Apps & projects' },
  { value: '5', label: 'Live on Play Store' },
  { value: '4', label: 'Projects as team lead' },
]

export const highlights = [
  'Senior Android Developer at Dev Technosys since 2021.',
  'Led Android teams for OTMT, Execlink and Slick.',
  'Shipped live streaming, Chromecast, Health Connect and Agora calling features.',
  'Built a Kotlin native library bridging IoT hardware to a React UI.',
]

export const skills = [
  { title: 'Languages', items: ['Kotlin', 'Java'] },
  { title: 'Android UI', items: ['Jetpack Compose', 'Navigation', 'Data / View Binding', 'Wear OS UI', 'Flutter UI'] },
  { title: 'Architecture & Jetpack', items: ['MVVM / MVP / MVC', 'SOLID', 'Coroutines', 'Flow', 'Room', 'Retrofit', 'WorkManager'] },
  { title: 'Firebase & Realtime', items: ['Firebase Auth', 'Realtime Database', 'Firestore', 'Storage', 'Cloud Messaging', 'Socket.IO'] },
  { title: 'Integrations', items: ['Health Connect', 'Google Chromecast', 'Agora Calling', 'Google Maps', 'Bluetooth', 'Unity'] },
  { title: 'Testing & Tools', items: ['JUnit4', 'Espresso', 'Git', 'Jira', 'Trello', 'CI/CD (AWS)', 'Spring Boot'] },
]

export const experience = [
  {
    company: 'Dev Technosys Pvt. Ltd.',
    location: 'Jaipur',
    role: 'Senior Android Developer',
    period: 'Nov 2021 – Present',
  },
  {
    company: 'Load Infotech',
    location: 'Jaipur',
    role: 'Android Developer',
    period: 'Jan 2020 – Jan 2021',
  },
  {
    company: 'Brisklights Technology Pvt. Ltd.',
    location: 'Jaipur',
    role: 'Android & Java (Swing) Developer',
    period: 'Sep 2018 – Jan 2019',
  },
  {
    company: 'P Cube IT Solution Pvt. Ltd.',
    location: 'Jaipur',
    role: 'Android Trainee',
    period: 'May 2018 – Aug 2018',
  },
  {
    company: 'Techsol Engineering Services Pvt. Ltd.',
    location: 'New Delhi',
    role: 'Maintenance Engineer',
    period: 'Mar 2016 – Sep 2017',
  },
]

const play = (id) => `https://play.google.com/store/apps/details?id=${id}`

// Featured projects get full cards.
export const projects = [
  {
    title: 'OTMT — OTM Training',
    role: 'Team Lead & Android Developer',
    description:
      'Closed-environment fitness and welfare app with mocked live streaming, Google Cast and Google Health integration.',
    tags: ['Kotlin', 'Chromecast', 'Health Connect', 'FCM', 'Socket.IO'],
    link: play('com.otm_training'),
  },
  {
    title: 'myAIE Student App',
    role: 'Senior Developer',
    description:
      'Education app for the Academic Institute of Excellence, shipped in three product flavours.',
    tags: ['Kotlin', 'Java', 'Jetpack Compose'],
    link: play('com.myaie'),
  },
  {
    title: 'Execlink',
    role: 'Team Lead & Android Developer',
    description: 'App with real-time Agora calling, push notifications and live messaging over Socket.IO.',
    tags: ['Kotlin', 'Agora', 'FCM', 'Socket.IO'],
    link: play('com.execlink'),
  },
  {
    title: 'The Vibes App',
    role: 'Senior Developer',
    description: 'Firebase-backed app using Realtime Database and Firestore with secured database rules.',
    tags: ['Kotlin', 'Firestore', 'Realtime DB', 'FCM'],
    link: play('com.app.thevibesapp'),
  },
  {
    title: 'Slick',
    role: 'Team Lead',
    description: 'Real-time app with MVVM architecture and an AWS CI/CD pipeline.',
    tags: ['Kotlin', 'MVVM', 'Socket.IO', 'AWS CI/CD'],
    link: play('com.slick'),
  },
  {
    title: 'PT-30 (IoT)',
    role: 'Android Developer',
    description:
      'Native Kotlin library with helper contract classes that talk to a real IoT device and feed data to a React UI.',
    tags: ['Kotlin', 'Native library', 'IoT'],
  },
  {
    title: 'Foxx — Universal Studios',
    role: 'Senior Developer',
    description:
      'Kids’ education launcher for tablets and phones, with modules that run as separate apps or features.',
    tags: ['Kotlin', 'Compose', 'Firebase'],
    status: 'In development',
  },
  {
    title: 'Zuko Taxi',
    role: 'Senior Developer',
    description: 'Uber-style ride-hailing app with live maps and real-time updates.',
    tags: ['Kotlin', 'Compose', 'Google Maps', 'Socket.IO'],
    status: 'In development',
  },
  {
    title: 'Dino Land',
    role: 'Senior Developer',
    description: 'Game app with a Kotlin/Compose shell around a Unity game.',
    tags: ['Kotlin', 'Compose', 'Unity'],
    status: 'In development',
  },
]

// Earlier work, shown as a compact list.
export const otherProjects = [
  { title: 'Jiak', note: 'React Native app with native Bluetooth & network printing', role: 'Senior Developer' },
  { title: 'Elex Shipper & Elex Customer', note: 'Logistics apps · Kotlin, Google Maps, MVVM', role: 'Junior Developer' },
  { title: 'Bulir User & Service Provider', note: 'Service booking · Maps, FCM, Socket.IO', role: 'Junior Developer' },
  { title: 'Drunoo Customer & Partner', note: 'Food delivery', role: 'Junior Developer' },
  { title: 'QMS App', note: 'Doctor appointments', role: 'Junior Developer' },
  { title: 'Custom Calling App', note: 'Calling solution', role: 'Junior Developer' },
  { title: 'Honda CRM', note: 'CRM', role: 'Assistant Developer' },
  { title: 'SkillBrisk Mobile & Desktop', note: 'School management · Android + Java Swing', role: 'Junior Developer' },
  { title: 'Xamen App & Desktop', note: 'Offline exams · file manager, Bluetooth transfer, Java Swing', role: 'Junior Developer' },
]

export const education = [
  {
    school: 'Rajasthan Technical University, Kota',
    degree: 'B.Tech, Electronics & Communication',
    detail: 'First Division',
    period: '2015',
  },
  {
    school: 'BSER, Ajmer',
    degree: 'Higher Secondary (Class XII)',
    detail: 'First Division',
    period: '2011',
  },
  {
    school: 'BSER, Ajmer',
    degree: 'Secondary (Class X)',
    detail: 'First Division',
    period: '2009',
  },
]
