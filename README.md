# Appwrite CLI for GitHub Actions

![banner.png](assets/banner.png)

![License](https://img.shields.io/github/license/appwrite/setup-for-actions.svg?v=1)
![Version](https://img.shields.io/badge/api%20version-1.5.6-blue.svg?v=1)

Appwrite is an open-source backend as a service server that abstracts and simplifies complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way.

Use the CLI to integrate your CI with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools.
For full API documentation and tutorials, go to [https://appwrite.io/docs](https://appwrite.io/docs)

## Introduction

This action can be used in many ways:

- To add Appwrite CLI to your GitHub actions
- To log in to your Appwrite instance using **email and password**.
- To log in to your Appwrite instance using an **API key and project ID**.
- Optionally: you can pass a list of action to execute using the Appwrite CLI.

### Inputes

#### ``endpoint``

Required: **NO**

Appwrite Endpoint, e.g. `https://cloud.appwrite.io/v1`

#### ``method``

Required: **NO**

Enter the login method to your Appwrite instance, available options

- email
- key

When using email, you'll need to pass email and password

```yaml
 - name: Appwrite action
   uses: appwrite/setup-for-actions@v2
     with:
       method: email
       email: ${{ secrets.EMAIL }}
       password: ${{ secrets.PASSWORD }}
```

When using key you'll need to pass the API key and project ID

```yaml
 - name: Appwrite action
   uses: appwrite/setup-for-actions@v2
     with:
       method: key
       key: ${{ secrets.API_KEY }}
       project: ${{ vars.PROJECT_ID }}
       self_signed: true
```

#### ``email``

Required: **NO**

User email

#### ``password``

Required: **NO**

User password

#### ``project``

Required: **NO**

Project ID

#### ``key``

Required: **NO**

API Key

#### ``self_signed``

Required: **NO**

Whether you are using a self-signed, local certificate

#### ``force``

Required: **NO**

When set to `true`, push or pull actions will have the `--force` flag

#### ``all``

Required: **NO**

When set to `true`, push or pull actions will have the `--all` flag

#### ``actions``

Required: **NO**

List of appwrite actions to execute, you can use write the command with or without the leading `appwrite`

```yaml
actions: |-
  appwrite push functions
  push collections       
```

## Usage
### Basic example 
```yaml
name: List of users

on:
  workflow_dispatch:
    
jobs:
  migrate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Appwrite
        uses: appwrite/setup-for-actions@v2
      - name: List users
        run: appwrite users list
```

### Full email example
```yaml
name: Database Migrations


on:
  release:
    types: [ published ]

jobs:
  migrate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Appwrite
        uses: appwrite/setup-for-actions@v2
        with:
          method: email
          email: ${{ secrets.EMAIL }}
          password: ${{ secrets.PASSWORD }}
          force: true
          all: true
          actions: |-
            push collections
  
```

You can read more about the CLI [here](https://appwrite.io/docs/tooling/command-line/installation) and in our [docs](https://appwrite.io/docs).
