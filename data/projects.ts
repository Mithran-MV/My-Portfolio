import { CaseStudy } from "./types";

export const projects: CaseStudy[] = [
  {
    slug: "v-workforce",
    title: "V-WorkForce — Decentralized AI Service Marketplace",
    subtitle: "ETHGlobal Ethereum winner: autonomous agents with wallets, privacy-preserving legal flows.",
    role: "Lead Engineer / Architect",
    status: "Hackathon Winner",
    categories: ["AI & Agents", "Web3 & ZK"],
    labels: ["ETHGlobal Ethereum", "Coinbase Pool Prize"],
    tech: ["Next.js", "Coinbase AgentKit", "Nillion SecretVault", "Privy", "TypeScript"],
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Built an autonomous marketplace where AI agents hold wallets, negotiate tasks, and settle payments while keeping client documents private through Nillion SecretVault.",
    engagement: "individual",
    caseStudy: {
      context: [
        "Legal teams wanted agents that could negotiate, price, and settle blockchain tasks without exposing sensitive contracts.",
        "Needed privacy-preserving document intake and deterministic on-chain execution for funds held in agent-controlled wallets."
      ],
      architecture: [
        "Next.js front-end with Framer Motion for interactive agent controls.",
        "Coinbase AgentKit to give each agent a custodial wallet and on-chain action surface.",
        "Nillion SecretVault for encrypted legal document processing before agent execution.",
        "Privy for embedded wallet authentication and seamless onboarding."
      ],
      features: [
        "Agent-run task proposals that calculate cost and push transactions from delegated wallets.",
        "Secret document ingestion pipeline guarded by Nillion; agents only see redacted hashes.",
        "Multi-party escrow flow with milestone releases triggered by agent assertions."
      ],
      challenges: [
        "Wallet orchestration for multiple concurrent agent sessions without race conditions.",
        "Balancing privacy (SecretVault) with verifiability for on-chain receipts.",
        "Designing UX that reveals agent intent and costs before signing."
      ],
      impact: [
        "Won Coinbase pool prize at ETHGlobal Ethereum.",
        "Delivered compliant agent flows for legal documents while keeping signer UX under 2 clicks.",
        "Demonstrated autonomous wallet execution with human-in-the-loop checkpoints."
      ],
      improvements: [
        "Deeper audit trails with zk attestations of agent reasoning.",
        "AI guardrails for cost caps and automatic risk scoring prior to signing."
      ],
      diagram: {
        caption: "Agent-controlled wallet executes tasks; SecretVault guards sensitive inputs.",
        nodes: [
          { id: "ui", label: "Next.js UI", x: 18, y: 35, tone: "teal" },
          { id: "agents", label: "Agent Hub", x: 40, y: 20, tone: "purple" },
          { id: "wallet", label: "Coinbase Wallet", x: 65, y: 20, tone: "blue" },
          { id: "vault", label: "Nillion SecretVault", x: 45, y: 50, tone: "purple" },
          { id: "chain", label: "Ethereum", x: 82, y: 35, tone: "blue" }
        ],
        edges: [
          { from: "ui", to: "agents", label: "prompts & intents" },
          { from: "agents", to: "vault", label: "encrypted docs" },
          { from: "agents", to: "wallet", label: "sign & pay" },
          { from: "wallet", to: "chain", label: "tx settlement" }
        ]
      }
    }
  },
  {
    slug: "workverse",
    title: "WorkVerse — Gamified Virtual Office",
    subtitle: "ETHGlobal Bangkok winner: spatial collaboration with encrypted proximity video.",
    role: "Full Stack Engineer",
    status: "Hackathon Winner",
    categories: ["Web3 & ZK", "AI & Agents"],
    labels: ["ETHGlobal Bangkok", "Push Protocol Prize"],
    tech: ["React", "Phaser3", "Push Protocol", "Node.js", "TypeScript"],
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Built a virtual office with Phaser3 maps, avatar proximity, and encrypted P2P video via Push Protocol so remote teams collaborate as if co-located.",
    engagement: "individual",
    caseStudy: {
      context: [
        "Remote teams needed an always-on space that felt like a real office without sacrificing privacy.",
        "Voice/video should only connect when avatars are near, with no central media server dependency."
      ],
      architecture: [
        "Phaser3 scene rendered over React canvas for game state and collision.",
        "Push Protocol for proximity-based encrypted P2P video and chat.",
        "Node.js presence service broadcasting positions and room topology."
      ],
      features: [
        "Spatial audio/video: only nearby avatars can communicate.",
        "Encrypted file drops inside rooms and hot desks.",
        "Room-level admin controls and scheduled event spaces."
      ],
      challenges: [
        "Synchronizing Phaser physics with React state without re-render storms.",
        "Ensuring Push Protocol session handshakes remain stable during rapid movement.",
        "Latency smoothing for distributed players across regions."
      ],
      impact: [
        "Won Push Protocol partner prize at ETHGlobal Bangkok.",
        "Delivered sub-200ms position sync at peak 150 concurrent testers.",
        "Reduced WebRTC renegotiations by batching avatar movement frames."
      ],
      improvements: [
        "Add AI NPCs for onboarding and guided tours.",
        "GPU-accelerated map streaming for larger campuses."
      ],
      diagram: {
        caption: "Spatial presence drives encrypted WebRTC sessions via Push Protocol.",
        nodes: [
          { id: "phaser", label: "Phaser Map", x: 20, y: 30, tone: "teal" },
          { id: "presence", label: "Presence Service", x: 50, y: 20, tone: "blue" },
          { id: "push", label: "Push Protocol", x: 80, y: 30, tone: "purple" },
          { id: "clients", label: "Avatars", x: 50, y: 60, tone: "teal" }
        ],
        edges: [
          { from: "phaser", to: "presence", label: "positions" },
          { from: "presence", to: "push", label: "proximity events" },
          { from: "push", to: "clients", label: "P2P media" }
        ]
      }
    }
  },
  {
    slug: "beatlink",
    title: "BeatLink — zkTLS Music Identity",
    subtitle: "Zero-knowledge proof of Spotify listening, minted as VIBE DataCoins.",
    role: "Full Stack Engineer",
    status: "Hackathon",
    categories: ["Web3 & ZK"],
    labels: ["World Chain", "zkTLS"],
    tech: ["Reclaim Protocol", "zkTLS", "World Chain", "IPFS/Filecoin", "Next.js"],
    heroImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Used zkTLS via Reclaim Protocol to prove Spotify listening history without leaking credentials, minting verifiable music identities as VIBE DataCoins.",
    engagement: "individual",
    caseStudy: {
      context: [
        "Artists wanted verifiable proof of fandom without exposing personal accounts.",
        "Needed portable, privacy-preserving attestations that could live on-chain."
      ],
      architecture: [
        "Reclaim Protocol zkTLS flow to fetch and prove Spotify listening data.",
        "World Chain mainnet for minting VIBE DataCoins tied to proofs.",
        "IPFS/Filecoin (Lighthouse) for encrypted proof storage."
      ],
      features: [
        "One-click proof generation of recent listens.",
        "DataCoins minted with embedded zk proof references.",
        "Artist dashboards to airdrop perks to verified fans."
      ],
      challenges: [
        "Keeping zk proof sizes small enough for mobile wallets.",
        "Coordinating asynchronous proof generation UX with user patience.",
        "Safely pinning proofs without leaking replayable data."
      ],
      impact: [
        "Delivered privacy-first fan identity with chain-verifiable perks.",
        "Validated zkTLS pattern for consumer music use-cases.",
        "Created foundation for proof-based ticketing extensions."
      ],
      improvements: [
        "Batch proof generation for playlists.",
        "Open attestations for cross-platform music sources."
      ],
      diagram: {
        caption: "zkTLS fetches Spotify data; proof anchored on World Chain.",
        nodes: [
          { id: "client", label: "Fan Client", x: 20, y: 40, tone: "teal" },
          { id: "reclaim", label: "Reclaim zkTLS", x: 45, y: 25, tone: "purple" },
          { id: "chain", label: "World Chain", x: 70, y: 25, tone: "blue" },
          { id: "ipfs", label: "IPFS/Filecoin", x: 55, y: 55, tone: "purple" }
        ],
        edges: [
          { from: "client", to: "reclaim", label: "Spotify session" },
          { from: "reclaim", to: "chain", label: "proof anchor" },
          { from: "reclaim", to: "ipfs", label: "encrypted proof" }
        ]
      }
    }
  },
  {
    slug: "mtwu-erp",
    title: "MTWU Academic ERP & Secure Private Cloud",
    subtitle: "ERP + drive for 25+ departments, 240+ faculty, role-based hierarchy.",
    role: "Systems Architect / Full Stack",
    status: "Production",
    categories: ["Enterprise & ERP", "Community & EdTech"],
    labels: ["Private Cloud", "Multi-tenant"],
    tech: ["Next.js", "MongoDB", "AWS EC2/S3", "Redis", "Nginx"],
    heroImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Built an academic ERP with private cloud drive and strict role hierarchy (VC, Dean, HOD, Faculty) serving 240+ faculty across 25 departments.",
    engagement: "individual",
    caseStudy: {
      context: [
        "University needed a unified ERP and secure drive replacing fragmented tools.",
        "Strict hierarchy and approvals had to be enforced across departments."
      ],
      architecture: [
        "Next.js app with MongoDB and Redis caching behind Nginx load balancer.",
        "AWS EC2 + S3 for the 'SecureVault' private cloud with signed URLs.",
        "Role-based access enforced via middleware and attribute-based policies."
      ],
      features: [
        "Curriculum, attendance, exams, and document workflows per department.",
        "Private cloud drive with granular permissions and audit logs.",
        "Bulk CSV ingestion for student data with validation queues."
      ],
      challenges: [
        "Ensuring zero downtime at result declaration with 10k+ concurrent hits.",
        "Designing permission inheritance without manual overrides.",
        "Optimizing large file uploads over constrained campus networks."
      ],
      impact: [
        "Served 240+ faculty and 25+ departments with SLA-backed uptime.",
        "Eliminated shadow IT by consolidating workflows and storage.",
        "Delivered campus-wide result releases with stable load-balanced traffic."
      ],
      improvements: [
        "Add offline-first mobile clients for faculty.",
        "Introduce policy simulation for faster audits."
      ],
      diagram: {
        caption: "Load-balanced ERP backed by SecureVault on AWS.",
        nodes: [
          { id: "users", label: "VC/Dean/HOD", x: 18, y: 35, tone: "teal" },
          { id: "app", label: "ERP (Next.js)", x: 45, y: 20, tone: "blue" },
          { id: "cache", label: "Redis", x: 70, y: 20, tone: "purple" },
          { id: "db", label: "MongoDB", x: 45, y: 45, tone: "blue" },
          { id: "s3", label: "SecureVault", x: 70, y: 45, tone: "purple" }
        ],
        edges: [
          { from: "users", to: "app", label: "role-based access" },
          { from: "app", to: "cache", label: "hot paths" },
          { from: "app", to: "db", label: "data" },
          { from: "app", to: "s3", label: "files" }
        ]
      }
    }
  },
  {
    slug: "perfex-sla-engine",
    title: "Enterprise SLA & Temporal Logic Engine",
    subtitle: "Minute-level SLA computation with escalation matrix for enterprise support.",
    role: "Systems Architect",
    status: "Production",
    categories: ["Enterprise & ERP"],
    labels: ["Automation", "Temporal Logic"],
    tech: ["PHP", "MySQL", "Redis", "Nginx", "Temporal Rules"],
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Engineered SLA computation across complex calendars, holidays, and shifts with escalation workflows, caching, and priority upgrades.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Support teams struggled to calculate SLAs across multiple shift calendars and holidays.",
        "Needed deterministic, minute-level SLA accuracy with escalation and auto-assign."
      ],
      architecture: [
        "Temporal rules engine embedded into support workflow modules.",
        "Optimized MySQL queries with Redis caching for SLA windows.",
        "Notification bus triggering escalations and assignments."
      ],
      features: [
        "Minute-level SLA calculations respecting per-customer calendars.",
        "Auto-escalation with role-based assignment and notifications.",
        "Priority upgrades when breach risk crosses thresholds."
      ],
      challenges: [
        "Avoiding query explosions for overlapping calendars.",
        "Maintaining consistent time math across time zones.",
        "Ensuring escalations are idempotent during retries."
      ],
      impact: [
        "99.9% SLA accuracy validated against manual audits.",
        "Reduced breach incidents by automating escalations.",
        "Improved support throughput with deterministic routing."
      ],
      improvements: [
        "Expose SLA simulation UI for operations.",
        "Add observability dashboard for SLA drifts."
      ],
      diagram: {
        caption: "Temporal engine computes SLA windows and triggers escalations.",
        nodes: [
          { id: "tickets", label: "Tickets", x: 20, y: 35, tone: "teal" },
          { id: "engine", label: "SLA Engine", x: 50, y: 25, tone: "blue" },
          { id: "cache", label: "Redis", x: 80, y: 25, tone: "purple" },
          { id: "notify", label: "Escalation Bus", x: 50, y: 50, tone: "purple" }
        ],
        edges: [
          { from: "tickets", to: "engine", label: "calculate" },
          { from: "engine", to: "cache", label: "cache windows" },
          { from: "engine", to: "notify", label: "breach alerts" }
        ]
      }
    }
  },
  {
    slug: "asset-lifecycle",
    title: "Enterprise IT Asset & Lifecycle Management",
    subtitle: "Single source of truth for 1,000+ assets across 28 factories.",
    role: "Systems Architect",
    status: "Production",
    categories: ["Enterprise & ERP"],
    labels: ["Multi-site", "Lifecycle"],
    tech: ["PHP/Laravel", "MySQL", "Redis", "Docker"],
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Consolidated IT asset inventory, depreciation, gate-pass workflows, and custody tracking for 28 manufacturing sites.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Factories held inconsistent asset records, leading to ghost assets and audit failures.",
        "Needed lifecycle tracking tied to tickets and gate passes across locations."
      ],
      architecture: [
        "Laravel + MySQL core with Redis for fast asset lookups.",
        "Workflow engine for gate-pass approvals and custody transitions."
      ],
      features: [
        "Depreciation engine with policy-based schedules.",
        "Gate-pass workflow tying assets to physical movement and tickets.",
        "Custody transfers with chain-of-custody logs."
      ],
      challenges: [
        "Keeping records consistent across 28 sites with intermittent connectivity.",
        "Designing depreciation calculations that auditors can reproduce.",
        "Blending manual records without false positives across sites."
      ],
      impact: [
        "Eliminated ghost assets across 28 factories.",
        "Created audit-ready custody and depreciation histories.",
        "Unified ticketing with asset context for faster MTTR."
      ],
      improvements: [
        "Add offline mobile audits with conflict resolution.",
        "Predictive maintenance scoring using asset health signals."
      ],
      diagram: {
        caption: "Central asset ledger with site-level custody and workflows.",
        nodes: [
          { id: "sites", label: "28 Sites", x: 20, y: 35, tone: "teal" },
          { id: "ledger", label: "Asset Ledger", x: 50, y: 25, tone: "blue" },
          { id: "iot", label: "Data Sync", x: 80, y: 25, tone: "purple" },
          { id: "workflow", label: "Gate-Pass WF", x: 50, y: 50, tone: "purple" }
        ],
        edges: [
          { from: "sites", to: "ledger", label: "create/update" },
          { from: "ledger", to: "iot", label: "telemetry" },
          { from: "ledger", to: "workflow", label: "custody change" }
        ]
      }
    }
  },
  {
    slug: "result-portal",
    title: "High-Availability Result Portal",
    subtitle: "Govt college portal serving 10,000+ concurrent students at result time.",
    role: "Lead Engineer",
    status: "Production",
    categories: ["Community & EdTech", "Enterprise & ERP"],
    labels: ["High concurrency"],
    tech: ["Nginx", "Redis", "PostgreSQL", "Next.js"],
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Delivered a load-balanced result publishing portal with Redis caching and DB indexing to keep latency low during peak declaration.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Result day traffic spikes caused downtime and re-renders.",
        "Needed deterministic performance for 10k+ concurrent connections."
      ],
      architecture: [
        "Nginx load balancer distributing traffic across multiple Node/Next instances.",
        "Redis caching of result payloads with cache warming jobs.",
        "PostgreSQL tuned with covering indexes for result queries."
      ],
      features: [
        "Pre-generated result pages cached before announcement.",
        "Bulk CSV ingestion with validation and rollback on failure.",
        "Progressive reveal of results with strict access control."
      ],
      challenges: [
        "Avoiding thundering herd during announcement.",
        "Ensuring cache invalidation when corrections occur.",
        "Monitoring queues to stay within SLA during ingestion."
      ],
      impact: [
        "Zero downtime during result declaration.",
        "Served 10k+ concurrent users with predictable latency.",
        "Reduced ingestion errors with streaming validators."
      ],
      improvements: [
        "Add synthetic load tests per release.",
        "Ship offline PDF certificates for redundancy."
      ]
    }
  },
  {
    slug: "ver2park",
    title: "Ver2Park — Smart Urban Parking SaaS",
    subtitle: "Multi-tenant parking with Flutter apps, realtime availability, and billing.",
    role: "Lead Engineer",
    status: "Production",
    categories: ["Enterprise & ERP"],
    labels: ["SaaS", "Mobility"],
    tech: ["Flutter", "Laravel", "MySQL", "Google Maps", "Stripe"],
    heroImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Delivered multi-tenant parking SaaS with realtime availability, mapping, and subscription billing across city partners.",
    engagement: "internship",
    caseStudy: {
      context: [
        "City partners needed live parking availability with tenant isolation.",
        "Payments and passes had to be unified across web and mobile."
      ],
      architecture: [
        "Flutter mobile apps with Laravel backend and MySQL tenancy scopes.",
        "Realtime availability via WebSockets and cached occupancy.",
        "Payment module with billing cycles and receipts."
      ],
      features: [
        "Live availability map and slot reservation.",
        "Tenant-level branding and billing.",
        "Admin dashboards for occupancy analytics."
      ],
      challenges: [
        "Reducing latency on availability updates in dense areas.",
        "Safeguarding multi-tenant boundaries in SQL queries.",
        "Reconciling payment webhooks with reservations."
      ],
      impact: [
        "Rolled out across multiple city lots with consistent uptime.",
        "Increased slot utilization with accurate live data.",
        "Simplified partner onboarding with templated tenants."
      ],
      improvements: [
        "Add dynamic pricing based on utilization.",
        "Edge caching for map tiles in low-connectivity zones."
      ]
    }
  },
  {
    slug: "gospel-musicals",
    title: "Gospel Musicals — Retail PWA + POS",
    subtitle: "Unified POS, web inventory, and WhatsApp ordering for music retail.",
    role: "Full Stack Engineer",
    status: "Production",
    categories: ["Enterprise & ERP"],
    labels: ["Commerce"],
    tech: ["Laravel", "Vue", "MySQL", "PWA", "Razorpay"],
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Transformed retail workflow with a Laravel PWA, unified POS + web inventory, and WhatsApp ordering tied to Indian payment gateways.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Retail needed synced inventory across web, POS, and WhatsApp orders.",
        "Wanted low-friction checkout for repeat buyers."
      ],
      architecture: [
        "Laravel backend with Vue PWA front-end and offline caching.",
        "Unified inventory service serving POS and web.",
        "Payment integration with Indian gateways for QR and UPI flows."
      ],
      features: [
        "POS and web carts share the same inventory ledger.",
        "WhatsApp ordering bot tying SKUs to carts.",
        "Offline-capable PWA for in-store tablets."
      ],
      challenges: [
        "Keeping inventory consistent between POS and web events.",
        "Ensuring offline carts reconcile without duplicates.",
        "Handling WhatsApp message parsing reliably."
      ],
      impact: [
        "Reduced stockouts and mismatched ledgers.",
        "Faster checkout for repeat buyers via chat commerce.",
        "Lowered training time with unified interfaces."
      ],
      improvements: [
        "Add ML-based recommendations for bundles.",
        "Expand to multi-store multi-currency capabilities."
      ]
    }
  },
  {
    slug: "vsaaa-alumni",
    title: "VSAAA Alumni Platform",
    subtitle: "Identity verification with marksheets, events, donations, and job board.",
    role: "Full Stack Engineer",
    status: "Production",
    categories: ["Community & EdTech"],
    labels: ["Identity", "Donations"],
    tech: ["Laravel", "MySQL", "Tailwind", "Razorpay"],
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Built alumni identity verification using marksheets + roll numbers, plus event ticketing, donations, and job board modules.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Alumni body required verified identities to prevent fraud.",
        "Needed fundraising, events, and hiring under one portal."
      ],
      architecture: [
        "Laravel stack with verification pipeline tied to legacy records.",
        "Payments and ticketing integrated with Indian gateways.",
        "Role-based access for alumni, admins, and recruiters."
      ],
      features: [
        "Document + roll-number verification workflow.",
        "Event ticketing with QR validation.",
        "Donation campaigns and job board with approvals."
      ],
      challenges: [
        "Matching legacy data with varied formats.",
        "Preventing duplicate identities across batches.",
        "Securely issuing QR tickets resistant to reuse."
      ],
      impact: [
        "Trusted alumni identities increased event engagement.",
        "Single portal for fundraising and jobs.",
        "Reduced manual verification load for admins."
      ],
      improvements: [
        "Self-serve API for alumni apps.",
        "NFT-style membership cards for on-chain perks."
      ]
    }
  },
  {
    slug: "engineering-monk",
    title: "Engineering Monk Identity Platform",
    subtitle: "Multi-tenant identity profiles with subdomains, payments, and bookings.",
    role: "Systems Architect",
    status: "Production",
    categories: ["Enterprise & ERP", "Community & EdTech"],
    labels: ["SaaS", "Identity"],
    tech: ["Laravel", "MySQL", "Tailwind", "Stripe"],
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Delivered SaaS for personal identity profiles at iam.engineeringmonk.com with subdomains per user, QR vCards, payments, and booking modules.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Professionals needed customizable identity pages under their own subdomains.",
        "Payments and scheduling had to be bundled without custom code per tenant."
      ],
      architecture: [
        "Laravel multi-tenant setup with per-tenant subdomains and theme overrides.",
        "Payment and booking modules tied to tenant settings.",
        "Edge caching for public profiles with signed assets."
      ],
      features: [
        "Subdomain identity pages with QR vCards.",
        "Booking modules and payments for premium tiers.",
        "Multi-tenant admin with template-driven customization."
      ],
      challenges: [
        "Ensuring isolation between tenants while sharing infra.",
        "Building theming without code injection risks.",
        "Scaling profile rendering with cache invalidation on edits."
      ],
      impact: [
        "Shipped production identity SaaS with predictable onboarding.",
        "Enabled paid tiers without custom engineering per user.",
        "Kept public profile loads fast with caching strategy."
      ],
      improvements: [
        "Add AI-driven profile suggestions.",
        "Web3 identity bindings for on-chain attestations."
      ]
    }
  },
  {
    slug: "quizwhiz-ai",
    title: "AI-Powered Assessment Platform",
    subtitle: "Automatic quiz generation from PDFs/text/URLs with AI and queues.",
    role: "Full Stack Engineer",
    status: "Production",
    categories: ["AI & Agents", "Community & EdTech"],
    labels: ["AI", "Queues"],
    tech: ["Laravel", "OpenAI", "Queues", "Tailwind"],
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Integrated OpenAI-based quiz generation with queues, subscriptions, and dashboards for educators.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Educators wanted to generate assessments from course materials automatically.",
        "Needed to process heavy AI workloads without blocking UI."
      ],
      architecture: [
        "Laravel with queued OpenAI jobs for PDF/text/URL ingestion.",
        "Subscription billing and usage metering.",
        "Dashboard for reviewing and editing AI-generated questions."
      ],
      features: [
        "Multi-format ingestion to generate quizzes.",
        "Queued processing with progress updates.",
        "Question editing and export to LMS formats."
      ],
      challenges: [
        "Preventing token overruns on large documents.",
        "Ensuring safe defaults for academic tone.",
        "Providing transparent progress feedback during long jobs."
      ],
      impact: [
        "Reduced manual question drafting time drastically.",
        "Stable throughput using queues for heavy AI tasks.",
        "Improved quiz quality with review and edit loops."
      ],
      improvements: [
        "Add rubric generation and grading models.",
        "Integrate proctoring-ready exports."
      ]
    }
  },
  {
    slug: "communeverse",
    title: "CommuneVerse — AI Event Concierge",
    subtitle: "Conversational discovery of events with geolocation and GPT-powered concierge.",
    role: "Full Stack Engineer",
    status: "MVP",
    categories: ["AI & Agents", "Community & EdTech"],
    labels: ["Conversational", "Location-aware"],
    tech: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    heroImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Built GPT-based conversational concierge that recommends events based on intent and location, with routes to ticketing.",
    engagement: "individual",
    caseStudy: {
      context: [
        "Communities wanted a natural language concierge to find nearby events.",
        "Recommendations needed to respect geofencing and time windows."
      ],
      architecture: [
        "Next.js app with Node API for event search.",
        "OpenAI prompt orchestration with location and preference context.",
        "PostgreSQL-backed event catalog with geo indexes."
      ],
      features: [
        "Conversational search with follow-up refinement.",
        "Geolocation-aware recommendations and maps.",
        "Ticketing handoff and calendar sync."
      ],
      challenges: [
        "Prompt conditioning to avoid hallucinated venues.",
        "Handling privacy for location storage.",
        "Keeping latency low for conversational feel."
      ],
      impact: [
        "Deployed MVP tested across community events.",
        "Higher engagement through conversational UX.",
        "Foundation for brand-specific concierge experiences."
      ],
      improvements: [
        "Add multi-agent planning for travel plus events.",
        "Integrate verified venue data feeds."
      ]
    }
  },
  {
    slug: "terratech-agri",
    title: "TerraTech Agri Insight",
    subtitle: "ESP32 nodes with FastAPI backend, telemetry, and Random Forest predictions.",
    role: "IoT Engineer",
    status: "Pilot",
    categories: ["IoT & R&D"],
    labels: ["Edge", "Predictive"],
    tech: ["ESP32", "MQTT", "FastAPI", "InfluxDB", "Random Forest"],
    heroImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    summary:
      "IoT smart farming stack with store-and-forward MQTT buffering, FastAPI backend, and Random Forest predictor on time-series telemetry.",
    engagement: "individual",
    caseStudy: {
      context: [
        "Farms needed resilient telemetry with buffering during outages.",
        "Wanted predictive insights without heavy cloud cost."
      ],
      architecture: [
        "ESP32 sensor nodes with store-and-forward MQTT buffering.",
        "FastAPI backend ingesting telemetry into InfluxDB.",
        "Random Forest model scoring moisture and environment data."
      ],
      features: [
        "Telemetry dashboards with historical slices.",
        "Predictive irrigation suggestions.",
        "Alerting on sensor drift and offline nodes."
      ],
      challenges: [
        "Reliable buffering when connectivity drops.",
        "Model drift when seasons change.",
        "Keeping power usage low on edge devices."
      ],
      impact: [
        "Increased data reliability with store-and-forward design.",
        "Early wins in water optimization from predictive model.",
        "Template usable for other agri nodes."
      ],
      improvements: [
        "Auto model retraining per season.",
        "Edge inferencing to cut latency further."
      ]
    }
  },
  {
    slug: "deterministic-laser",
    title: "Deterministic Laser Control System",
    subtitle: "RP2040 PIO-based control with <10µs jitter, Raspberry Pi UI, and digital twin.",
    role: "R&D Engineer",
    status: "R&D",
    categories: ["IoT & R&D"],
    labels: ["Deterministic", "Simulation"],
    tech: ["RP2040", "PIO", "Python", "Raspberry Pi", "FastAPI"],
    heroImage: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Split-brain architecture with RP2040 PIO for deterministic laser control (<10µs jitter), Raspberry Pi UI, and Python digital twin simulator.",
    engagement: "internship",
    caseStudy: {
      context: [
        "Industrial laser needed deterministic pulse control with guarantees under 10µs jitter.",
        "UI should remain responsive without disturbing real-time loop."
      ],
      architecture: [
        "RP2040 PIO handles real-time pulse generation.",
        "Raspberry Pi hosts UI + supervisory FastAPI service.",
        "Python digital twin simulator mirrors field behavior."
      ],
      features: [
        "Deterministic pulse trains with jitter monitoring.",
        "Split-brain: Pi controls configuration, RP2040 executes timing.",
        "Digital twin for safe testing of patterns."
      ],
      challenges: [
        "Tight jitter constraints under noisy power conditions.",
        "Synchronizing configuration pushes without interrupting real-time loop.",
        "Keeping simulator aligned with firmware versions."
      ],
      impact: [
        "Achieved <10µs jitter with PIO routines.",
        "Safer rollouts via digital twin before field deploy.",
        "Clear separation of UI and deterministic control paths."
      ],
      improvements: [
        "Add redundant watchdog co-processor.",
        "Expose telemetry to cloud dashboard for remote ops."
      ],
      diagram: {
        caption: "Split-brain: Pi orchestrates, RP2040 executes deterministic loop.",
        nodes: [
          { id: "pi", label: "Raspberry Pi UI", x: 20, y: 30, tone: "teal" },
          { id: "api", label: "FastAPI", x: 50, y: 20, tone: "blue" },
          { id: "rp", label: "RP2040 PIO", x: 80, y: 30, tone: "purple" },
          { id: "twin", label: "Digital Twin", x: 50, y: 55, tone: "purple" }
        ],
        edges: [
          { from: "pi", to: "api", label: "config" },
          { from: "api", to: "rp", label: "deterministic commands" },
          { from: "api", to: "twin", label: "mirror pulses" }
        ]
      }
    }
  }
];

export const spotlightSlugs = [
  "v-workforce",
  "workverse",
  "beatlink",
  "mtwu-erp",
  "perfex-sla-engine",
  "asset-lifecycle"
];

export const internshipSlugs = [
  "mtwu-erp",
  "perfex-sla-engine",
  "asset-lifecycle",
  "result-portal",
  "ver2park",
  "gospel-musicals",
  "vsaaa-alumni",
  "engineering-monk",
  "quizwhiz-ai",
  "deterministic-laser"
];
