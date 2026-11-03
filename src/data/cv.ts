export const contact = {
  name: 'Wahyu Setiawan',
  role: 'Software Engineer - Full Stack',
  location: 'Jakarta, Indonesia',
  email: 'whysetiawan27@gmail.com',
  phone: '+62 851 5855 1727',
  github: 'https://github.com/whysetiawan',
  linkedin: 'https://linkedin.com/in/whysetiawan',
};

export const metaDescription =
  'Wahyu Setiawan — Full Stack Software Engineer with 8+ years in mobile and web, currently building fintech products at Flip.';

export const summary =
  "Full stack software engineer with 8+ years shipping production mobile and web apps for fintech, banking, and logistics teams. At Flip, owns the Globe remittance product end to end across **React Native, Next.js, and Go**, serving millions of users. Moved its mobile and web flows from the monolith to a dedicated payout service, sets the testing standards the team builds on, and fixes performance problems with data, not guesses.";

export type Phase = { label: string; bullets: string[] };
export type Job = { title: string; dates: string; context?: string; bullets?: string[]; phases?: Phase[] };

export const experience: Job[] = [
  {
    title: 'Software Engineer, Flip',
    dates: 'Jan 2025 – Present · Jakarta (Hybrid)',
    context:
      'On the Globe (international remittance) squad, serving millions of users. Builds the transfer flow on mobile (React Native) and web (Next.js, flip.id/id/globe), contributes to Go services in the payout backend, and maintains the internal operations portal.',
    phases: [
      {
        label: '2026 · Payout service and backend ownership',
        bullets: [
          'Top contributor to the Globe web app at **flip.id/id/globe** (Next.js). Wrote its Clean Architecture and DDD guide, which sets the layer rules for the team and for AI coding agents, and built the integration test setup the module runs on.',
          'Moved the Globe mobile and web transfer flows from the monolith to a dedicated payout service, using **Clean Architecture** so domain logic stopped depending on API shapes. Rolled the client side out behind feature flags and made it the default in Sep 2026. On the backend, helped remove the legacy path once the rollout was complete.',
          'Built money-movement endpoints in **Go**: a capped update-amount API with unique-code matching, scoped auth, and a maintenance switch, plus partner callbacks verified by status inquiry before they publish.',
          'Fixed slow queries on FX history and the transaction list with a targeted index and a narrower indexed search. Added audit logging across the payout service and pricing engine.',
          'Built internal tools for the operations team: bulk actions with multi-ID search, beneficiary preset rules, and downtime and RFI management on the new service.',
          'Upgraded two Next.js apps to **Next.js 16 and React 19**, closing a security advisory. Fixed a CDN cache incident and added a check to every merge request so it cannot return.',
        ],
      },
      {
        label: '2025 · Globe mobile and web build-out',
        bullets: [
          'Rewrote the Globe form library, which used to be slow and painful to change, into a **server-driven** system. Beneficiary forms now render straight from backend config, so even junior engineers can ship new ones without touching the core.',
          'Profiled and fixed the Globe FX remittance calculator, the screen where every international transfer starts, lifting average FPS from **53 to 57.7** and pulling worst-case drops up from under 10 to over 40. Shared what I found with the rest of the mobile team afterward.',
          'Designed a backwards-compatible, multi-partner feature-flag schema (iBKR, hospitals) for the Investment and Hospital Bills use case. It went live in v3.35.0 and handled **60+ real transactions in its first week**.',
          'Raised mobile test coverage to **95%** in SonarQube and Globe web coverage from **0% to 96%**, and made MSW the standard way to mock APIs. Ran a TDD session to bring the team along.',
          'Shipped the WhatsApp support entrypoint across 6 transfer pages, lifting retention among high-value users by **5%**.',
          'Explored code-splitting and Micro-Frontend / OTA approaches (Re.Pack, Expo Updates, Module Federation) through proofs of concept and RFCs, and caught circular dependencies the team had been missing.',
        ],
      },
    ],
  },
  {
    title: 'Senior Front End Engineer, TKDN',
    dates: 'May 2024 – Nov 2024 · Jakarta',
    bullets: [
      'Built and maintained multiple client apps from scratch (transportation domain) using Flutter, React Native, and Next.js.',
      'Led the mobile team to deliver clean, performant code following agreed design patterns and code standards.',
      'Established Git trunk-based development and CI/CD pipelines that analyze, test, and deploy automatically.',
    ],
  },
  {
    title: 'Senior Mobile Engineer, SiCepat Ekspres',
    dates: 'Mar 2022 – May 2024 · Remote',
    bullets: [
      "Developed and maintained core-business mobile apps in React Native used by millions across Indonesia's largest logistics network.",
      'Led the Rebuild Pick Up mobile team; improved app performance and stabilized a large app on an outdated RN version through careful dependency management.',
      'Built internal libraries and wrote **native modules** for React Native, including an on-device computer-vision integration that bridged native SDKs and cut development effort for the team.',
      'Hardened app security with DexGuard code obfuscation, co-authored the mobile code standards, and drove React Native version upgrades to clear tech debt.',
    ],
  },
  {
    title: 'Mobile Engineer, Ihsan Solusi Informatika',
    dates: 'Dec 2017 – Mar 2022',
    bullets: [
      'Built and maintained mobile and web apps from scratch for banking and fintech clients; published to Google Play and the App Store.',
      'Migrated a production codebase from React Native to Flutter; delivered mobile banking apps (BMT BUS, BJB Syariah) and a BANSOS aid-distribution app with an offline-capable API layer.',
    ],
  },
  {
    title: 'Project-based & Part-time',
    dates: '2017 – 2022',
    bullets: [
      'Shipped React Native and Flutter apps for various clients (Qalboo, Kodegiri, Sanbersy); built a runtime feature-flag system and a Node.js/NestJS backend for a travel-agency product.',
    ],
  },
];

export const skills = [
  ['Mobile', 'React Native (incl. native modules / native SDK bridging), Reanimated, Flutter'],
  ['Front End', 'TypeScript, React, Next.js'],
  ['Back End', 'Go (in production at Flip), Node.js, NestJS, Python (FastAPI)'],
  ['Infra', 'Helm, Kubernetes (GitOps), API gateway routing, GitLab CI, GitHub Actions'],
  ['Architecture', 'Clean Architecture, server-driven UI, expand-migrate-contract migrations, API/domain decoupling'],
  ['Observability', 'Sentry tracing, TTI tracking, profiling (Flashlight, React DevTools), audit logging'],
  ['Testing', 'Jest, MSW, unit & integration, TDD, SonarQube coverage'],
  ['Delivery', 'Feature flags, staged rollout, trunk-based development'],
  ['AI / ML', 'TensorFlow, on-device computer vision'],
  ['Data', 'PostgreSQL, MongoDB, SQLite, Realm'],
  ['Security', 'DexGuard, dependency advisory patching'],
];

export const education = {
  degree: 'B.Sc. Computer Science',
  school: 'Universitas Pendidikan Indonesia · 2019 – 2023',
  thesisTitle: 'Analysis of CNN GhostFaceNet, MobileFaceNet and MobileNetV3 Models Using ArcFace Loss in Facial Recognition',
  thesisUrl: 'https://repository.upi.edu/115971/',
  thesisNote:
    'Benchmarked three lightweight face-recognition CNNs with ArcFace loss for on-device Android use. MobileFaceNet won on accuracy and MobileNetV3 won on speed, the tradeoff that decides on-device deployment.',
};
