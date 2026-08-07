# Next Ticket System

An efficient ticket system built with Next.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)

## Introduction

The Next Ticket System is a web application developed with Next.js for managing tickets efficiently. It provides a user-friendly interface for creating, viewing, and managing support tickets.

[Watch the walkthrough video](public/videos/Main-tutorial-ezgif.com-video-to-gif-converter.mp4)

## Features

- User authentication and authorization
- Ticket creation and management
- Dynamic routing with Next.js
- Responsive design for various devices

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Supabase account (for authentication and database)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hamse47/The-Next-Ticket-system.git
cd The-Next-Ticket-system
```

2. Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root with your Supabase project credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Both values are available in your Supabase dashboard under **Project Settings → API**.

## Usage

Tickets are served by [json-server](https://github.com/typicode/json-server) from `_data/db.json`, so the app needs both processes running. Start them together:

```bash
npm run dev:all
```

- App: [http://localhost:3000](http://localhost:3000)
- Ticket API: [http://localhost:4000/tickets](http://localhost:4000/tickets)

To run them separately, use `npm run dev` for the Next.js app and `npm run server` for the ticket API.
