module.exports = {
  docs: [
    'get-started',
    {
      type: 'category',
      collapsed: true,
      label: 'Concepts',
      items: [
        'overview',
        'workflows',
        'activities',
        'events',
        'queries',
        'task-queues',
        'namespaces',
        'glossary',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Use cases',
      items: [
        'use-cases-orchestration',
        'use-cases-distributed-transactions',
        'use-cases-provisioning',
        'use-cases-monitoring',
        'use-cases-pipelines',
        'use-cases-long-running',
        'use-cases-dsl',
        'use-cases-actors',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Server',
      items: [
        'server-introduction',
        'server-quick-install',
        'server-architecture',
        'server-versions-and-dependencies',
        'server-workflow-search',
        'server-elasticsearch-setup',
        'server-options',
        'server-security',
        'server-configuration',
        'server-archive-data',
      ],
    },
    'cloud-introduction',
    'tctl',
    {
      type: 'category',
      collapsed: false,
      label: 'SDKs',
      items: [
        'sdks-introduction',
        {
          type: 'category',
          collapsed: true,
          label: 'Go',
          items: [
            'go-sdk-overview',
            {
              type: 'link',
              label: 'Reference 🔗',
              href: 'https://pkg.go.dev/go.temporal.io/sdk',
            },
            'go-sdk-tutorial-prerequisites',
            'go-run-your-first-app',
            'go-hello-world',
            'go-sdk-video-tutorial',
            'go-sync-vs-async-start',
            'go-workers',
            'go-create-workflows',
            'go-activities',
            'go-execute-activity',
            'go-child-workflows',
            'go-retries',
            'go-error-handling',
            'go-signals',
            'go-continue-as-new',
            'go-side-effect',
            'go-queries',
            'go-activity-async-completion',
            'go-workflow-testing',
            'go-versioning',
            'go-sessions',
            'go-distributed-cron',
            'go-tracing',
            'go-search-apis',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Java',
          items: [
            'java-sdk-overview',
            {
              type: 'link',
              label: 'Reference 🔗',
              href: 'https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html',
            },
            'java-sdk-tutorial-prerequisites',
            'java-run-your-first-app',
            'java-hello-world',
            'java-quick-start',
            'java-workflow-interface',
            'java-implementing-workflows',
            'java-starting-workflow-executions',
            'java-activity-interface',
            'java-implementing-activities',
            'java-versioning',
            'java-distributed-cron',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'PHP',
          items: [
            'php-sdk-overview',
            'php-workflow-interface',
            'php-implementing-workflows',
            'php-activity-async-completion',
            'php-sync-vs-async-start',
            'php-workers',
            'php-activity-interface',
            'php-activity-interface',
            'php-implementing-activities',
            'php-child-workflows',
            'php-retries',
            'php-error-handling',
            'php-signals',
            'php-continue-as-new',
            'php-side-effect',
            'php-queries',
            'php-activity-async-completion',
            'php-versioning',
            'php-distributed-cron',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Ruby',
          items: [
            'ruby-sdk-overview',
          ],
        },
      ],
    },
  ],
};
