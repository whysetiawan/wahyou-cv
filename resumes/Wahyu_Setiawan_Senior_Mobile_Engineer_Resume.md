# Wahyu Setiawan

Software Engineer, Mobile & Web
Bandung, West Java, Indonesia
whysetiawan27@gmail.com · +62 851 5855 1727
github.com/whysetiawan · linkedin.com/in/whysetiawan

---

## Summary

Senior-level software engineer with 8+ years shipping production mobile and web apps for fintech, banking, and logistics teams. Deep in React Native, currently building Flip's Globe remittance product used by millions across React Native and Next.js. I drive mobile architecture, chase down performance problems with real numbers, and set the testing and engineering standards other engineers build on.

---

## Key Skills

**Mobile:** React Native (incl. native modules / native SDK bridging), Flutter
**Front End:** TypeScript, React, Next.js
**Back End:** Node.js, NestJS, Go (Gin), Python (FastAPI)
**Architecture:** Clean Architecture, server-driven UI, modularization, API/domain decoupling
**Performance:** profiling (Flashlight, React DevTools), FPS/startup optimization
**Testing:** Jest, MSW, unit & e2e, TDD, SonarQube coverage
**Delivery:** feature flags, staged rollout, CI/CD (GitHub Actions, GitLab CI), trunk-based development
**AI / ML:** TensorFlow, on-device computer vision
**Data:** PostgreSQL, MongoDB, SQLite, Realm
**Security:** DexGuard

---

## Professional Experience

### Software Engineer, Mobile & Web — Flip
**PT Fliptech Lentera Inspirasi Pertiwi · Jakarta (Hybrid) · Jan 2025 – Present**

On the Globe (international remittance) squad, serving millions of users, I build the transaction flow across mobile (React Native) and web (Next.js), and pitch in on back-end and release engineering.

- Helped move the Globe transaction flow onto microservices, bringing in Clean Architecture so domain logic no longer leaned on API shapes. Future changes got cheaper and safer.
- Rewrote the Globe web form library into a server-driven system that scales both horizontally and vertically. Beneficiary forms now render straight from backend config, so even junior engineers can ship new ones without touching the core.
- Profiled and fixed the Globe landing page, lifting average FPS from 53 to 57.7 and pulling worst-case drops up from under 10 to over 40. Shared what I found with the rest of the mobile team afterward.
- Designed a backwards-compatible, multi-partner feature-flag schema (iBKR, hospitals) for the Investment and Hospital Bills use case. It went live in v3.35.0 and handled 60+ real transactions in its first week.
- Took web test coverage from 11% to 90.7% and kept mobile above 95%, and made MSW our standard way to mock APIs. Ran a TDD session to bring the team along.
- Owned and shipped the WhatsApp support entrypoint end to end across 6 transfer pages, which lifted retention among high-value users by 5%.
- Explored code-splitting and Micro-Frontend / OTA approaches (Re.Pack, Expo Updates, Module Federation) through proofs of concept and RFCs, and caught circular dependencies the team had been missing.

### Senior Mobile Engineer — SiCepat Ekspres Indonesia
**Remote · Mar 2022 – May 2024**

- Developed and maintained core-business mobile apps in React Native used by millions across Indonesia's largest logistics network.
- Led the Rebuild Pick Up mobile team; improved app performance and stabilized a large app on an outdated RN version through careful dependency management.
- Built internal libraries and wrote native modules for React Native, including an on-device computer-vision integration that bridged native SDKs and cut development effort for the team.
- Hardened app security with DexGuard code obfuscation.
- Co-authored mobile code standards and guidelines; drove React Native version upgrades to clear tech debt.

### Senior Front End Engineer — PT Teknologi Karya Digital Nusa Tbk. (TKDN)
**Jakarta · May 2024 – Nov 2024**

- Built and maintained multiple client apps from scratch (transportation domain) using Flutter, React Native, and Next.js.
- Led the mobile team to deliver clean, performant code following agreed design patterns and code standards.
- Established Git trunk-based development and CI/CD pipelines that analyze, test, and deploy automatically.

### Mobile Engineer — Ihsan Solusi Informatika
**Dec 2017 – Mar 2022**

- Built and maintained mobile + web apps from scratch for banking and fintech clients; published to Google Play and the App Store.
- Migrated a production codebase from React Native to Flutter; delivered mobile banking apps (BMT BUS, BJB Syariah) and a BANSOS aid-distribution app with an offline-capable API layer for low-connectivity field use.

### Project-based & Part-time — Qalboo, Kodegiri, Sanbersy (2017 – 2022)

- Shipped React Native and Flutter apps for various clients; built a runtime feature-flag system and a Node.js/NestJS backend for a travel-agency product.

---

## Education

**B.Sc. Computer Science** — Universitas Pendidikan Indonesia · 2019 – 2023 · GPA 3.32

Thesis: Benchmarked lightweight face-recognition CNNs (GhostFaceNet, MobileFaceNet, MobileNetV3) with ArcFace loss for on-device Android inference. MobileFaceNet won on accuracy; MobileNetV3 won on mobile speed — the accuracy-vs-latency tradeoff that matters for on-device deployment.
