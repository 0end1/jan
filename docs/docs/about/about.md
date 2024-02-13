---
title: About Jan
slug: /about
description: Jan is a productivity tool to customize AI to your needs and workflows. 
keywords:
  [
    Jan AI,
    Jan,
    ChatGPT alternative,
    local AI,
    private AI,
    conversational AI,
    no-subscription fee,
    large language model,
  ]
---

Jan is a [open-source](https://en.wikipedia.org/wiki/Open_source), [local-first](https://www.inkandswitch.com/local-first/) tool to [create, customize and use AI](https://www.gatesnotes.com/AI-agents) for everyday tasks. 

You can: 
- Run locally using [open-source LLMs](https://huggingface.co/models?pipeline_tag=text-generation) or connect to cloud AIs like [ChatGPT](https://openai.com/blog/openai-api) or [Google](https://ai.google.dev/)
- Fine-tune AI with specific knowledge
- Search the web and other databases
- Connect AI to your everyday tools and (with your permission) do work on your behalf

Longer-term, Jan is building a cognitive framework for future robots. We envision a world where we have personal or company robots that we continually improve and customize, growing together with us. 

![Human repairing a Droid](/img/star-wars-droids.png)

## Why do we exist

At Jan, our mission is to advance human-machine collaboration. We achieve this through delivering the best open-source, local-first tools to allow users to run, customize and tinker with AI. 

## What's different about it?

|                                                            | Status Quo                                                                 | Jan                                                                                                                           |
| ---------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Ownership                                                  | AI Monopolies owned by Big Tech                                            | AI that you own and control                                                                                                   |
| Openness?                                                  | Closed-source                                                              | [Open-source (AGPLv3)](https://github.com/janhq/jan/blob/main/LICENSE)                                                        |
| Your role                                                  | Consume                                                                    | Create, Tinker and Customize                                                                                                  |
| Approach                                                   | Cloud                                                                      | [Local-first](https://www.inkandswitch.com/local-first/), running 100% on your computer                                       |
| Data                                                       | Data stored on their servers                                               | Data stored in your local filesystem in open, non-proprietary file formats                                                    |
| Privacy                                                    | Privacy?                                                                   | Runs 100% on your own machine, predictably, privately and offline                                                             |
| Transparency                                               | "Black Box"                                                                | Runs predictability with code available to tinker and customize                                                               |
| What happens if there's an outage or goes out of business? | Your life's work held hostage in the cloud in proprietary data formats[^1] | Continues to run 100% on your computer, your data is safe in your local folder                                                |
| Driving Philosophy                                         | Monetize your users                                                        | [Privacy as a human right](https://en.wikipedia.org/wiki/Right_to_privacy) and the [Right to Repair](https://www.repair.org/) |

## How do I get it?

You can install and start using Jan in less than 5 minutes, from [jan.ai](https://jan.ai) or our [Github repo](https://github.com/janhq/jan). 

You can read the [User Guide](/docs/user-guide) if you need some help to get started. 

## What license is the code under?

Jan is licensed under the [AGPLv3 License](https://github.com/janhq/jan/blob/main/LICENSE). 

We happily accept pull requests, however we do ask that you sign a [Contributor License Agreement](https://en.wikipedia.org/wiki/Contributor_License_Agreement) so that we have the right to relicense your contributions[^2]. 

We also have a [Contributor Program](/docs/team/contributor-program) to provide ownership and upside to contributors who have made significant contributions to the project.

## What was it built with?

Jan is pragmatically built using Javascript at the application level, and C++ at the Inference level (which we have refactored into [Nitro](https://nitro.jan.ai)). We use [Electron](https://www.electronjs.org/) to build the desktop client. 

We have made similar choices to the [Next.js Enterprise Javascript Stack](https://vercel.com/templates/next.js/nextjs-enterprise-boilerplate), which is a [battle-tested](https://nextjs.org/showcase/enterprise) framework for building enterprise-grade applications.

## Contact

Drop us a message in our [Discord](https://discord.gg/af6SaTdzpx) and we'll get back to you.

- `#general`: for general discussion
- `#get-help`: for bug reports and troubleshooting
- `#roadmap`: for feature requests and ideas

## Footnotes

[^1]: Credit to Obsidian's original website
[^2]: Credit to [Discourse's About Page](https://www.discourse.org/about)