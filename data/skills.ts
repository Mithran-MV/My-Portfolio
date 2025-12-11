import { Building2, Cloud, Cpu, Sparkles, type LucideIcon } from "lucide-react";

export const skillGroups = [
  {
    title: "Core Architecture",
    items: ["Microservices", "Event-driven", "REST/GraphQL", "CQRS", "Domain-driven design"]
  },
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "PHP (Laravel)", "C++", "Solidity", "Dart"]
  },
  {
    title: "Web & Mobile",
    items: ["Next.js", "React", "Tailwind", "Flutter", "Phaser3", "PWA"]
  },
  {
    title: "Cloud & Infra",
    items: ["AWS", "Docker", "Nginx", "Redis", "Linux", "MQTT", "InfluxDB", "PostgreSQL"]
  },
  {
    title: "Specialized Domains",
    items: ["AI Systems", "zkTLS", "IoT Edge", "Industrial Automation", "Temporal Logic"]
  }
];

export const signatureDomains = [
  {
    key: "ai",
    title: "AI & Agents",
    bullets: [
      "Wallet-aware agents with Coinbase AgentKit and Privy onboarding.",
      "Queue-backed AI workloads for assessments and concierge flows.",
      "Agent guardrails, prompt evaluation, and cost-aware execution."
    ],
    tech: ["AgentKit", "OpenAI", "LangChain", "Redis Queues", "Node.js"]
  },
  {
    key: "web3",
    title: "Web3 & ZK",
    bullets: [
      "zkTLS attestations for consumer identity (BeatLink).",
      "SecretVault-backed document privacy for legal AI agents.",
      "Wallet orchestration, escrow flows, and partner prize wins."
    ],
    tech: ["Nillion", "Reclaim Protocol", "World Chain", "Privy", "IPFS/Filecoin"]
  },
  {
    key: "enterprise",
    title: "Enterprise Systems",
    bullets: [
      "ERP + private cloud for universities and multi-site enterprises.",
      "Temporal SLA engines with escalation matrices and audits.",
      "High-availability portals serving 10k+ concurrent users."
    ],
    tech: ["Next.js", "MongoDB", "Redis", "Nginx", "AWS", "PostgreSQL"]
  },
  {
    key: "iot",
    title: "IoT & Hardware",
    bullets: [
      "Deterministic RP2040 PIO control loops with digital twins.",
      "MQTT store-and-forward pipelines for ESP32 nodes.",
      "Predictive models on time-series telemetry."
    ],
    tech: ["RP2040 PIO", "ESP32", "MQTT", "InfluxDB", "Random Forest", "FastAPI"]
  }
];

type WhatIDo = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whatIDo: WhatIDo[] = [
  {
    title: "AI & Web3 Systems",
    description: "Wallet-aware AI services, zk-backed attestations, and privacy-first execution.",
    icon: Sparkles
  },
  {
    title: "Enterprise & Campus-Scale Platforms",
    description: "ERP, private cloud, and SLA engines serving thousands with uptime guarantees.",
    icon: Building2
  },
  {
    title: "IoT & Real-Time Control",
    description: "MQTT pipelines, deterministic RP2040 control loops, and digital twins.",
    icon: Cpu
  },
  {
    title: "DevOps & Cloud Architecture",
    description: "AWS, Docker, Nginx, and caching patterns tuned for mission-critical SLAs.",
    icon: Cloud
  }
];

export const kpiMetrics = [
  { label: "Concurrent users", value: 10000, suffix: "+" },
  { label: "Manufacturing sites governed", value: 28 },
  { label: "Faculty served via ERP", value: 240, suffix: "+" },
  { label: "SLA accuracy", value: 99.9, suffix: "%" }
];
