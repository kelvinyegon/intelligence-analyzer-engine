#  Project Analyzer

> A full-stack developer intelligence tool that provides instant, multi-dimensional analysis of GitHub repositories and live websites.

Analyze any project and get:

- Security vulnerability scanning
- Technology stack detection
- Performance metrics
- SEO insights
- Repository intelligence

Built for developers, recruiters, and technology teams who want fast insights into software projects without manual inspection.

---

# Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Frontend Architecture](#frontend-architecture)
- [How Each Feature Works](#how-each-feature-works)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

#  Overview

Project Analyzer is a full-stack developer tool designed to analyze GitHub repositories and live websites automatically.

Instead of manually reviewing codebases, developers can paste a GitHub repository URL or a live website URL and receive a structured report containing technical insights, security findings, performance data, and technology information.

The platform provides two analysis modes:

##  Repository Analysis

Analyzes a GitHub repository using the GitHub API.

It provides:

- Repository details
- Programming language breakdown
- Technology stack detection
- Security vulnerability scanning
- Framework and dependency detection
- Development tools identification

## Live Website Analysis

Analyzes a deployed website URL.

It provides:

- Performance measurements
- SEO analysis
- Security header checks
- Website technology fingerprinting
- Asset analysis

---

#  Features

## Repository Analysis

| Feature | Description |
|---|---|
| Repository Details | Displays stars, forks, watchers, issues, owner information, license, topics and dates |
| Security Scanner | Detects exposed API keys, tokens, passwords, database URLs and sensitive information |
| Technology Detection | Identifies frameworks, libraries, databases, testing tools and DevOps technologies |
| Language Analysis | Shows programming language distribution using GitHub statistics |

---

## Live Website Analysis

| Feature | Description |
|---|---|
| Performance Analysis | Measures load time, page size, HTTP status and HTTPS availability |
| SEO Analysis | Checks titles, descriptions, headings, Open Graph data and missing image alt tags |
| Security Headers | Checks HSTS, CSP, X-Frame-Options and other security policies |
| Asset Detection | Counts scripts, stylesheets and images |
| Technology Fingerprinting | Detects frameworks, servers and website technologies |

---

#  Tech Stack

## Backend

- **FastAPI** - Python asynchronous API framework
- **httpx** - HTTP client for API requests
- **BeautifulSoup4** - HTML parsing
- **python-dotenv** - Environment variable management
- **uvicorn** - ASGI server

## Frontend

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

---

#  Project Structure

```
project-analyzer/

├── backend/
│
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   │
│   └── routers/
│       ├── dependencies.py
│       ├── repo.py
│       ├── security.py
│       ├── techstack.py
│       └── live.py
│
└── frontend/
    
    ├── app/
    │   ├── page.tsx
    │   └── analyse/
    │       └── page.tsx
    │
    ├── components/
    │   ├── RepoDetails.tsx
    │   ├── Security.tsx
    │   ├── TechStack.tsx
    │   └── Performance.tsx
    │
    ├── hooks/
    │   ├── useRepo.ts
    │   ├── useSecurity.ts
    │   ├── useTechStack.ts
    │   └── useLive.ts
    │
    └── lib/
        ├── github.ts
        ├── security.ts
        ├── techstack.ts
        └── live.ts
```

---

#  Getting Started

## Prerequisites

Before running the project, install:

- Python 3.10+
- Node.js 18+
- GitHub Personal Access Token

---

## Creating GitHub Token

1. Open GitHub Developer Settings
2. Create a Personal Access Token
3. Enable repository access permissions
4. Copy the generated token

The token will be used by the backend to communicate with GitHub APIs.

---
author :Kelvin Yegon
to get this project git clone: https://github.com/kelvinyegon/intelligence-analyzer-engine