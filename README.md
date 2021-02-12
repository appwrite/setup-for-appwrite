# Appwrite CLI for GitHub Actions

![License](https://img.shields.io/github/license/appwrite/setup-for-actions.svg?v=1)
![Version](https://img.shields.io/badge/api%20version-0.7.0-blue.svg?v=1)

Appwrite is an open-source backend as a service server that abstract and simplify complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way.
Use the CLI to integrate your CI with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools.
For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

![Appwrite](https://appwrite.io/images/github.png)

## Usage

The action will setup Appwrite CLI for all following task. `key` should be defined as an encrypted secret and not be exposed directly.
```yml
- uses: appwrite/setup-for-actions@v1
  with:
    endpoint: 'https://[HOSTNAME_OR_IP]/v1'
    project: '[PROJECT_ID]'
    key: '${{ secrets.APPWRITE_API_KEY }}'
```

Great! Now you're all set to use the Appwrite CLI. You can access your CLI using the `appwrite` command:

```yml
- name: Some Appwrite CLI action
  run: appwrite users list
```

You can read more about the CLI [here](https://appwrite.io/docs/command-line) and in our [docs](https://appwrite.io/docs).
