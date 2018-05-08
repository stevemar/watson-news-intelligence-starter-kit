### This came from a Starter Kit

This Code Pattern is based on a Starter Kit. The Starter Kit
code should be treated as the master if possible, but it is
not public. So we'll hope to keep it in sync somehow.

When we need to update the code from the Starter Kit, we can
generate and download the Starter Kit.

Keeping track of some work done to adapt it can be listed here to help:

1. .gitignore was used to eliminate things that we don't need for the Code Pattern. Try to keep unnecessary files out of the Code Pattern.

1. The README.md is significantly changed to be a Code Pattern. Mostly just keep the "Run Locally" part. Refer to the Starter Kit for other options.

1. The Starter Kit ID was used to create a button for "Try the Starter Kit".

1. The below directory structure is from the README. It's handy and belongs here.

### Directory structure

```none
.
├── public                          // static resources
├── server                          // server app
│   ├── config                      // express configuration
│   ├── routers                      // express routers
│   ├── services                     // express services
|   └── server.js                    // entry point
├── test                             // tests
├── package.json
└── views                           // react components
```
