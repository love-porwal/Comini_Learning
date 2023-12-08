# Chrome Extension Project

## Overview

This Chrome extension project aims to create a fun and informative browsing experience by changing major headlines on selected Indian newspaper sites into mini rhymes and providing brief bias summaries for articles.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup and Run](#setup-and-run)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Extension](#extension)

## Project Structure

The project is organized into three main folders:

1. **`backend`**: Contains the Node.js backend for serving data and handling authentication.

2. **`frontend`**: Holds the frontend code responsible for displaying changed headlines and bias summaries.

3. **`extension`**: Includes files related to the Chrome extension, such as the manifest, content script, popup, and background script.

## Setup and Run

### Backend

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Start the Backend Server:

   ```bash
   npm start
   ```

   The backend server will be running on port 3000 (or as specified).

### Frontend

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Start the Frontend Server:

   ```bash
   npm start
   ```

   The frontend server will be running on port 3001 (or as specified).

### Extension

1. Load the Extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" at the top right.
   - Click on "Load unpacked" and select the `extension` folder from your project directory.

2. Activate the Extension:
   - Click on the extension icon in the Chrome toolbar to activate it.
