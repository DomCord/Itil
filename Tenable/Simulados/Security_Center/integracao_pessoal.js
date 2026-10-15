/* Personal, noncommercial educational copy. Copyright Bayview Global LLC. */
(()=>{
const questions=[
  {
    "id": "SC-Q001",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "What is the fundamental architectural difference between Tenable.sc and Tenable.io?",
    "o": [
      "Tenable.sc supports only Windows targets; Tenable.io supports multi-platform environments",
      "Tenable.sc stores all vulnerability data on-premises under customer control; Tenable.io stores data in Tenable's cloud",
      "Tenable.sc uses agents for all scanning; Tenable.io uses only network-based scanning",
      "Tenable.sc requires physical hardware; Tenable.io can only be deployed as a virtual machine"
    ],
    "a": "B",
    "e": "Tenable.sc (formerly SecurityCenter) is an on-premises platform where all scan data, repositories, and reports reside within the customer's own infrastructure. Tenable.io is a cloud-delivered SaaS platform hosted by Tenable. Organizations in air-gapped, highly regulated, or data-sovereignty environments typically prefer Tenable.sc.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-001",
    "x": [
      "The source answer key does not select this alternative: “Tenable.sc supports only Windows targets; Tenable.io supports multi-platform environments”. The keyed answer is “Tenable.sc stores all vulnerability data on-premises under customer control; Tenable.io stores data in Tenable's cloud”. Source explanation: Tenable.sc (formerly SecurityCenter) is an on-premises platform where all scan data, repositories, and reports reside within the customer's own infrastructure. Tenable.io is a cloud-delivered SaaS platform hosted by Tenable. Organizations in air-gapped, highly regulated, or data-sovereignty environments typically prefer Tenable.sc.",
      "Tenable.sc (formerly SecurityCenter) is an on-premises platform where all scan data, repositories, and reports reside within the customer's own infrastructure. Tenable.io is a cloud-delivered SaaS platform hosted by Tenable. Organizations in air-gapped, highly regulated, or data-sovereignty environments typically prefer Tenable.sc.",
      "The source answer key does not select this alternative: “Tenable.sc uses agents for all scanning; Tenable.io uses only network-based scanning”. The keyed answer is “Tenable.sc stores all vulnerability data on-premises under customer control; Tenable.io stores data in Tenable's cloud”. Source explanation: Tenable.sc (formerly SecurityCenter) is an on-premises platform where all scan data, repositories, and reports reside within the customer's own infrastructure. Tenable.io is a cloud-delivered SaaS platform hosted by Tenable. Organizations in air-gapped, highly regulated, or data-sovereignty environments typically prefer Tenable.sc.",
      "The source answer key does not select this alternative: “Tenable.sc requires physical hardware; Tenable.io can only be deployed as a virtual machine”. The keyed answer is “Tenable.sc stores all vulnerability data on-premises under customer control; Tenable.io stores data in Tenable's cloud”. Source explanation: Tenable.sc (formerly SecurityCenter) is an on-premises platform where all scan data, repositories, and reports reside within the customer's own infrastructure. Tenable.io is a cloud-delivered SaaS platform hosted by Tenable. Organizations in air-gapped, highly regulated, or data-sovereignty environments typically prefer Tenable.sc."
    ]
  },
  {
    "id": "SC-Q002",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "In Tenable.sc, what is the function of a 'Scan Zone'?",
    "o": [
      "A Scan Zone defines the time window during which scans are allowed to run",
      "A Scan Zone is a compliance policy applied to a set of assets",
      "A Scan Zone is a repository partition for storing scan data from different network segments",
      "A Scan Zone defines which Nessus scanners are available to scan specific IP ranges and can be allocated to organizations"
    ],
    "a": "D",
    "e": "Scan Zones in Tenable.sc are logical groupings that associate specific Nessus scanners with the IP ranges they are responsible for scanning. Scan zones can be shared across multiple organizations, allowing centralized scanner infrastructure to serve multiple business units while maintaining organizational separation in reporting.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-002",
    "x": [
      "The source answer key does not select this alternative: “A Scan Zone defines the time window during which scans are allowed to run”. The keyed answer is “A Scan Zone defines which Nessus scanners are available to scan specific IP ranges and can be allocated to organizations”. Source explanation: Scan Zones in Tenable.sc are logical groupings that associate specific Nessus scanners with the IP ranges they are responsible for scanning. Scan zones can be shared across multiple organizations, allowing centralized scanner infrastructure to serve multiple business units while maintaining organizational separation in reporting.",
      "The source answer key does not select this alternative: “A Scan Zone is a compliance policy applied to a set of assets”. The keyed answer is “A Scan Zone defines which Nessus scanners are available to scan specific IP ranges and can be allocated to organizations”. Source explanation: Scan Zones in Tenable.sc are logical groupings that associate specific Nessus scanners with the IP ranges they are responsible for scanning. Scan zones can be shared across multiple organizations, allowing centralized scanner infrastructure to serve multiple business units while maintaining organizational separation in reporting.",
      "The source answer key does not select this alternative: “A Scan Zone is a repository partition for storing scan data from different network segments”. The keyed answer is “A Scan Zone defines which Nessus scanners are available to scan specific IP ranges and can be allocated to organizations”. Source explanation: Scan Zones in Tenable.sc are logical groupings that associate specific Nessus scanners with the IP ranges they are responsible for scanning. Scan zones can be shared across multiple organizations, allowing centralized scanner infrastructure to serve multiple business units while maintaining organizational separation in reporting.",
      "Scan Zones in Tenable.sc are logical groupings that associate specific Nessus scanners with the IP ranges they are responsible for scanning. Scan zones can be shared across multiple organizations, allowing centralized scanner infrastructure to serve multiple business units while maintaining organizational separation in reporting."
    ]
  },
  {
    "id": "SC-Q003",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "In Tenable.sc, what is a 'Repository' and what types are available?",
    "o": [
      "A shared folder for exporting reports to network drives",
      "A file system folder storing Nessus scan policy XML files",
      "A backup archive of Tenable.sc configuration settings",
      "A database storing scan data; types include IPv4, IPv6, Agent, and Universal repositories"
    ],
    "a": "D",
    "e": "Repositories in Tenable.sc are databases that store vulnerability scan results. IPv4 repositories store data for IPv4-addressed assets, IPv6 repositories for IPv6 assets, Agent repositories for Nessus Agent scan data, and Universal repositories can store data from both agent and agentless sources in a single repository.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-003",
    "x": [
      "The source answer key does not select this alternative: “A shared folder for exporting reports to network drives”. The keyed answer is “A database storing scan data; types include IPv4, IPv6, Agent, and Universal repositories”. Source explanation: Repositories in Tenable.sc are databases that store vulnerability scan results. IPv4 repositories store data for IPv4-addressed assets, IPv6 repositories for IPv6 assets, Agent repositories for Nessus Agent scan data, and Universal repositories can store data from both agent and agentless sources in a single repository.",
      "The source answer key does not select this alternative: “A file system folder storing Nessus scan policy XML files”. The keyed answer is “A database storing scan data; types include IPv4, IPv6, Agent, and Universal repositories”. Source explanation: Repositories in Tenable.sc are databases that store vulnerability scan results. IPv4 repositories store data for IPv4-addressed assets, IPv6 repositories for IPv6 assets, Agent repositories for Nessus Agent scan data, and Universal repositories can store data from both agent and agentless sources in a single repository.",
      "The source answer key does not select this alternative: “A backup archive of Tenable.sc configuration settings”. The keyed answer is “A database storing scan data; types include IPv4, IPv6, Agent, and Universal repositories”. Source explanation: Repositories in Tenable.sc are databases that store vulnerability scan results. IPv4 repositories store data for IPv4-addressed assets, IPv6 repositories for IPv6 assets, Agent repositories for Nessus Agent scan data, and Universal repositories can store data from both agent and agentless sources in a single repository.",
      "Repositories in Tenable.sc are databases that store vulnerability scan results. IPv4 repositories store data for IPv4-addressed assets, IPv6 repositories for IPv6 assets, Agent repositories for Nessus Agent scan data, and Universal repositories can store data from both agent and agentless sources in a single repository."
    ]
  },
  {
    "id": "SC-Q004",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "What is the purpose of a 'Universal Repository' in Tenable.sc?",
    "o": [
      "To store scan data from all organizations in a single unified view",
      "To store both agent-based and agentless (network scan) vulnerability data in a single repository",
      "To store compliance benchmark results separately from vulnerability data",
      "To archive scan data permanently without retention limits"
    ],
    "a": "B",
    "e": "A Universal Repository in Tenable.sc can ingest and store vulnerability data from both Nessus Agent scans and traditional network-based (agentless) scans. This consolidates data sources in environments using both scan types for the same asset group, simplifying dashboard and report queries.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-004",
    "x": [
      "The source answer key does not select this alternative: “To store scan data from all organizations in a single unified view”. The keyed answer is “To store both agent-based and agentless (network scan) vulnerability data in a single repository”. Source explanation: A Universal Repository in Tenable.sc can ingest and store vulnerability data from both Nessus Agent scans and traditional network-based (agentless) scans. This consolidates data sources in environments using both scan types for the same asset group, simplifying dashboard and report queries.",
      "A Universal Repository in Tenable.sc can ingest and store vulnerability data from both Nessus Agent scans and traditional network-based (agentless) scans. This consolidates data sources in environments using both scan types for the same asset group, simplifying dashboard and report queries.",
      "The source answer key does not select this alternative: “To store compliance benchmark results separately from vulnerability data”. The keyed answer is “To store both agent-based and agentless (network scan) vulnerability data in a single repository”. Source explanation: A Universal Repository in Tenable.sc can ingest and store vulnerability data from both Nessus Agent scans and traditional network-based (agentless) scans. This consolidates data sources in environments using both scan types for the same asset group, simplifying dashboard and report queries.",
      "The source answer key does not select this alternative: “To archive scan data permanently without retention limits”. The keyed answer is “To store both agent-based and agentless (network scan) vulnerability data in a single repository”. Source explanation: A Universal Repository in Tenable.sc can ingest and store vulnerability data from both Nessus Agent scans and traditional network-based (agentless) scans. This consolidates data sources in environments using both scan types for the same asset group, simplifying dashboard and report queries."
    ]
  },
  {
    "id": "SC-Q005",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "Which Tenable.sc user role can manage users within an organization but cannot configure system-wide settings like creating new organizations?",
    "o": [
      "Administrator",
      "Security Manager",
      "Security Analyst",
      "Auditor"
    ],
    "a": "B",
    "e": "The Security Manager role in Tenable.sc has organization-level management authority: creating and managing users within their organization, configuring scans, managing asset lists, and administering repositories assigned to their organization. They cannot create new organizations or manage system-wide infrastructure — those are Administrator-only actions.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-005",
    "x": [
      "The source answer key does not select this alternative: “Administrator”. The keyed answer is “Security Manager”. Source explanation: The Security Manager role in Tenable.sc has organization-level management authority: creating and managing users within their organization, configuring scans, managing asset lists, and administering repositories assigned to their organization. They cannot create new organizations or manage system-wide infrastructure — those are Administrator-only actions.",
      "The Security Manager role in Tenable.sc has organization-level management authority: creating and managing users within their organization, configuring scans, managing asset lists, and administering repositories assigned to their organization. They cannot create new organizations or manage system-wide infrastructure — those are Administrator-only actions.",
      "The source answer key does not select this alternative: “Security Analyst”. The keyed answer is “Security Manager”. Source explanation: The Security Manager role in Tenable.sc has organization-level management authority: creating and managing users within their organization, configuring scans, managing asset lists, and administering repositories assigned to their organization. They cannot create new organizations or manage system-wide infrastructure — those are Administrator-only actions.",
      "The source answer key does not select this alternative: “Auditor”. The keyed answer is “Security Manager”. Source explanation: The Security Manager role in Tenable.sc has organization-level management authority: creating and managing users within their organization, configuring scans, managing asset lists, and administering repositories assigned to their organization. They cannot create new organizations or manage system-wide infrastructure — those are Administrator-only actions."
    ]
  },
  {
    "id": "SC-Q006",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "In Tenable.sc, what is the difference between a 'Static Asset List' and a 'Dynamic Asset List'?",
    "o": [
      "A Static Asset List contains external IPs; a Dynamic Asset List contains internal IPs",
      "A Static Asset List cannot be modified once created; a Dynamic Asset List changes automatically based on scan schedule",
      "A Static Asset List contains manually defined IP addresses; a Dynamic Asset List automatically includes IPs matching query criteria",
      "A Static Asset List is used for compliance scanning; a Dynamic Asset List is used only for vulnerability scanning"
    ],
    "a": "C",
    "e": "Static Asset Lists are manually defined collections of specific IP addresses, ranges, or CIDR blocks that remain constant unless manually edited. Dynamic Asset Lists use query-based logic (severity, plugin output, OS, port, etc.) and automatically update to include or exclude assets meeting the defined criteria after each scan, keeping the list current without manual maintenance.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-006",
    "x": [
      "The source answer key does not select this alternative: “A Static Asset List contains external IPs; a Dynamic Asset List contains internal IPs”. The keyed answer is “A Static Asset List contains manually defined IP addresses; a Dynamic Asset List automatically includes IPs matching query criteria”. Source explanation: Static Asset Lists are manually defined collections of specific IP addresses, ranges, or CIDR blocks that remain constant unless manually edited. Dynamic Asset Lists use query-based logic (severity, plugin output, OS, port, etc.) and automatically update to include or exclude assets meeting the defined criteria after each scan, keeping the list current without manual maintenance.",
      "The source answer key does not select this alternative: “A Static Asset List cannot be modified once created; a Dynamic Asset List changes automatically based on scan schedule”. The keyed answer is “A Static Asset List contains manually defined IP addresses; a Dynamic Asset List automatically includes IPs matching query criteria”. Source explanation: Static Asset Lists are manually defined collections of specific IP addresses, ranges, or CIDR blocks that remain constant unless manually edited. Dynamic Asset Lists use query-based logic (severity, plugin output, OS, port, etc.) and automatically update to include or exclude assets meeting the defined criteria after each scan, keeping the list current without manual maintenance.",
      "Static Asset Lists are manually defined collections of specific IP addresses, ranges, or CIDR blocks that remain constant unless manually edited. Dynamic Asset Lists use query-based logic (severity, plugin output, OS, port, etc.) and automatically update to include or exclude assets meeting the defined criteria after each scan, keeping the list current without manual maintenance.",
      "The source answer key does not select this alternative: “A Static Asset List is used for compliance scanning; a Dynamic Asset List is used only for vulnerability scanning”. The keyed answer is “A Static Asset List contains manually defined IP addresses; a Dynamic Asset List automatically includes IPs matching query criteria”. Source explanation: Static Asset Lists are manually defined collections of specific IP addresses, ranges, or CIDR blocks that remain constant unless manually edited. Dynamic Asset Lists use query-based logic (severity, plugin output, OS, port, etc.) and automatically update to include or exclude assets meeting the defined criteria after each scan, keeping the list current without manual maintenance."
    ]
  },
  {
    "id": "SC-Q007",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "How does an administrator pair a remote Nessus scanner with Tenable Security Center?",
    "o": [
      "Create an SSH tunnel between the Nessus scanner and the Tenable Security Center server",
      "Add the scanner in Resources > Nessus Scanners using the scanner hostname/IP, port 8834, and an administrator username and password (or SSL certificate authentication)",
      "Generate a linking key in Tenable Security Center and paste it into the Nessus Linking Key field during scanner setup",
      "Upload the Nessus scanner SSL certificate to the Tenable Security Center DNS allowlist"
    ],
    "a": "B",
    "e": "Tenable Security Center manages remote Nessus scanners by connecting outbound to the scanner on TCP 8834. The administrator adds the scanner under Resources > Nessus Scanners and authenticates with a Nessus administrator account (password) or SSL certificate/API keys. Linking keys are used for Tenable Vulnerability Management and Nessus Manager agent linking, not for pairing scanners to Security Center.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-007",
    "x": [
      "The source answer key does not select this alternative: “Create an SSH tunnel between the Nessus scanner and the Tenable Security Center server”. The keyed answer is “Add the scanner in Resources > Nessus Scanners using the scanner hostname/IP, port 8834, and an administrator username and password (or SSL certificate authentication)”. Source explanation: Tenable Security Center manages remote Nessus scanners by connecting outbound to the scanner on TCP 8834. The administrator adds the scanner under Resources > Nessus Scanners and authenticates with a Nessus administrator account (password) or SSL certificate/API keys. Linking keys are used for Tenable Vulnerability Management and Nessus Manager agent linking, not for pairing scanners to Security Center.",
      "Tenable Security Center manages remote Nessus scanners by connecting outbound to the scanner on TCP 8834. The administrator adds the scanner under Resources > Nessus Scanners and authenticates with a Nessus administrator account (password) or SSL certificate/API keys. Linking keys are used for Tenable Vulnerability Management and Nessus Manager agent linking, not for pairing scanners to Security Center.",
      "The source answer key does not select this alternative: “Generate a linking key in Tenable Security Center and paste it into the Nessus Linking Key field during scanner setup”. The keyed answer is “Add the scanner in Resources > Nessus Scanners using the scanner hostname/IP, port 8834, and an administrator username and password (or SSL certificate authentication)”. Source explanation: Tenable Security Center manages remote Nessus scanners by connecting outbound to the scanner on TCP 8834. The administrator adds the scanner under Resources > Nessus Scanners and authenticates with a Nessus administrator account (password) or SSL certificate/API keys. Linking keys are used for Tenable Vulnerability Management and Nessus Manager agent linking, not for pairing scanners to Security Center.",
      "The source answer key does not select this alternative: “Upload the Nessus scanner SSL certificate to the Tenable Security Center DNS allowlist”. The keyed answer is “Add the scanner in Resources > Nessus Scanners using the scanner hostname/IP, port 8834, and an administrator username and password (or SSL certificate authentication)”. Source explanation: Tenable Security Center manages remote Nessus scanners by connecting outbound to the scanner on TCP 8834. The administrator adds the scanner under Resources > Nessus Scanners and authenticates with a Nessus administrator account (password) or SSL certificate/API keys. Linking keys are used for Tenable Vulnerability Management and Nessus Manager agent linking, not for pairing scanners to Security Center."
    ]
  },
  {
    "id": "SC-Q008",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "What is the Tenable.sc 'Auditor' user role's primary capability?",
    "o": [
      "Managing user accounts within their assigned organization",
      "Running on-demand scans against specific asset lists",
      "Creating compliance audit policies and assigning them to scan zones",
      "Read-only access to reports, dashboards, and scan results without the ability to create or modify anything"
    ],
    "a": "D",
    "e": "The Auditor role in Tenable.sc provides read-only access to vulnerability data, dashboards, and reports within the scope of their organization. Auditors cannot create scans, modify policies, or manage users — they exist specifically for compliance auditors, management stakeholders, or third-party reviewers who need data visibility without write access.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-008",
    "x": [
      "The source answer key does not select this alternative: “Managing user accounts within their assigned organization”. The keyed answer is “Read-only access to reports, dashboards, and scan results without the ability to create or modify anything”. Source explanation: The Auditor role in Tenable.sc provides read-only access to vulnerability data, dashboards, and reports within the scope of their organization. Auditors cannot create scans, modify policies, or manage users — they exist specifically for compliance auditors, management stakeholders, or third-party reviewers who need data visibility without write access.",
      "The source answer key does not select this alternative: “Running on-demand scans against specific asset lists”. The keyed answer is “Read-only access to reports, dashboards, and scan results without the ability to create or modify anything”. Source explanation: The Auditor role in Tenable.sc provides read-only access to vulnerability data, dashboards, and reports within the scope of their organization. Auditors cannot create scans, modify policies, or manage users — they exist specifically for compliance auditors, management stakeholders, or third-party reviewers who need data visibility without write access.",
      "The source answer key does not select this alternative: “Creating compliance audit policies and assigning them to scan zones”. The keyed answer is “Read-only access to reports, dashboards, and scan results without the ability to create or modify anything”. Source explanation: The Auditor role in Tenable.sc provides read-only access to vulnerability data, dashboards, and reports within the scope of their organization. Auditors cannot create scans, modify policies, or manage users — they exist specifically for compliance auditors, management stakeholders, or third-party reviewers who need data visibility without write access.",
      "The Auditor role in Tenable.sc provides read-only access to vulnerability data, dashboards, and reports within the scope of their organization. Auditors cannot create scans, modify policies, or manage users — they exist specifically for compliance auditors, management stakeholders, or third-party reviewers who need data visibility without write access."
    ]
  },
  {
    "id": "SC-Q009",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "In Tenable.sc, what happens to scan data when the configured data retention period for a repository expires?",
    "o": [
      "The oldest vulnerability data is purged from the repository based on the retention settings",
      "The repository is locked until an administrator manually clears old data",
      "All scan data is retained permanently regardless of retention settings",
      "The data is automatically archived to a remote offsite repository"
    ],
    "a": "A",
    "e": "Tenable.sc repositories have configurable data retention periods. When vulnerability scan data exceeds the retention window (e.g., 365 days), the oldest data records are purged from the repository. This manages database size and scan performance but means historical trend data older than the retention period is no longer available.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-009",
    "x": [
      "Tenable.sc repositories have configurable data retention periods. When vulnerability scan data exceeds the retention window (e.g., 365 days), the oldest data records are purged from the repository. This manages database size and scan performance but means historical trend data older than the retention period is no longer available.",
      "The source answer key does not select this alternative: “The repository is locked until an administrator manually clears old data”. The keyed answer is “The oldest vulnerability data is purged from the repository based on the retention settings”. Source explanation: Tenable.sc repositories have configurable data retention periods. When vulnerability scan data exceeds the retention window (e.g., 365 days), the oldest data records are purged from the repository. This manages database size and scan performance but means historical trend data older than the retention period is no longer available.",
      "The source answer key does not select this alternative: “All scan data is retained permanently regardless of retention settings”. The keyed answer is “The oldest vulnerability data is purged from the repository based on the retention settings”. Source explanation: Tenable.sc repositories have configurable data retention periods. When vulnerability scan data exceeds the retention window (e.g., 365 days), the oldest data records are purged from the repository. This manages database size and scan performance but means historical trend data older than the retention period is no longer available.",
      "The source answer key does not select this alternative: “The data is automatically archived to a remote offsite repository”. The keyed answer is “The oldest vulnerability data is purged from the repository based on the retention settings”. Source explanation: Tenable.sc repositories have configurable data retention periods. When vulnerability scan data exceeds the retention window (e.g., 365 days), the oldest data records are purged from the repository. This manages database size and scan performance but means historical trend data older than the retention period is no longer available."
    ]
  },
  {
    "id": "SC-Q010",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "Which Tenable.sc query filter would you use to build a dynamic asset list containing all assets with at least one Critical (CVSS 10.0) vulnerability?",
    "o": [
      "CVSS filter greater than 9.0 in the Static Asset List builder",
      "ACR filter greater than 8 in the repository query",
      "Severity filter set to 'Critical' in the Dynamic Asset List query",
      "Plugin family filter set to 'Windows: Microsoft Bulletins'"
    ],
    "a": "C",
    "e": "Dynamic Asset Lists in Tenable.sc use query filters against repository data. Setting the Severity filter to 'Critical' in the dynamic asset list query returns all assets in the repository that currently have at least one Critical-severity vulnerability finding, automatically updating as new scan data is ingested.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-010",
    "x": [
      "The source answer key does not select this alternative: “CVSS filter greater than 9.0 in the Static Asset List builder”. The keyed answer is “Severity filter set to 'Critical' in the Dynamic Asset List query”. Source explanation: Dynamic Asset Lists in Tenable.sc use query filters against repository data. Setting the Severity filter to 'Critical' in the dynamic asset list query returns all assets in the repository that currently have at least one Critical-severity vulnerability finding, automatically updating as new scan data is ingested.",
      "The source answer key does not select this alternative: “ACR filter greater than 8 in the repository query”. The keyed answer is “Severity filter set to 'Critical' in the Dynamic Asset List query”. Source explanation: Dynamic Asset Lists in Tenable.sc use query filters against repository data. Setting the Severity filter to 'Critical' in the dynamic asset list query returns all assets in the repository that currently have at least one Critical-severity vulnerability finding, automatically updating as new scan data is ingested.",
      "Dynamic Asset Lists in Tenable.sc use query filters against repository data. Setting the Severity filter to 'Critical' in the dynamic asset list query returns all assets in the repository that currently have at least one Critical-severity vulnerability finding, automatically updating as new scan data is ingested.",
      "The source answer key does not select this alternative: “Plugin family filter set to 'Windows: Microsoft Bulletins'”. The keyed answer is “Severity filter set to 'Critical' in the Dynamic Asset List query”. Source explanation: Dynamic Asset Lists in Tenable.sc use query filters against repository data. Setting the Severity filter to 'Critical' in the dynamic asset list query returns all assets in the repository that currently have at least one Critical-severity vulnerability finding, automatically updating as new scan data is ingested."
    ]
  },
  {
    "id": "SC-Q011",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In Tenable.sc, what is an 'Organization' and what is its purpose?",
    "o": [
      "A grouping of scan policies that share the same compliance benchmark",
      "An external partner company that Tenable.sc can share vulnerability data with automatically",
      "A naming convention for grouping Nessus scanners by physical location",
      "A logical boundary grouping users, repositories, scan zones, and assets to provide multi-tenant separation within a single Tenable.sc instance"
    ],
    "a": "D",
    "e": "Organizations in Tenable.sc are multi-tenancy containers that partition a single Tenable.sc installation into separate management domains. Each organization has its own users (managed by Security Managers), repositories, and asset lists, enabling multiple business units, subsidiaries, or customer environments to share one Tenable.sc platform without access overlap.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-011",
    "x": [
      "The source answer key does not select this alternative: “A grouping of scan policies that share the same compliance benchmark”. The keyed answer is “A logical boundary grouping users, repositories, scan zones, and assets to provide multi-tenant separation within a single Tenable.sc instance”. Source explanation: Organizations in Tenable.sc are multi-tenancy containers that partition a single Tenable.sc installation into separate management domains. Each organization has its own users (managed by Security Managers), repositories, and asset lists, enabling multiple business units, subsidiaries, or customer environments to share one Tenable.sc platform without access overlap.",
      "The source answer key does not select this alternative: “An external partner company that Tenable.sc can share vulnerability data with automatically”. The keyed answer is “A logical boundary grouping users, repositories, scan zones, and assets to provide multi-tenant separation within a single Tenable.sc instance”. Source explanation: Organizations in Tenable.sc are multi-tenancy containers that partition a single Tenable.sc installation into separate management domains. Each organization has its own users (managed by Security Managers), repositories, and asset lists, enabling multiple business units, subsidiaries, or customer environments to share one Tenable.sc platform without access overlap.",
      "The source answer key does not select this alternative: “A naming convention for grouping Nessus scanners by physical location”. The keyed answer is “A logical boundary grouping users, repositories, scan zones, and assets to provide multi-tenant separation within a single Tenable.sc instance”. Source explanation: Organizations in Tenable.sc are multi-tenancy containers that partition a single Tenable.sc installation into separate management domains. Each organization has its own users (managed by Security Managers), repositories, and asset lists, enabling multiple business units, subsidiaries, or customer environments to share one Tenable.sc platform without access overlap.",
      "Organizations in Tenable.sc are multi-tenancy containers that partition a single Tenable.sc installation into separate management domains. Each organization has its own users (managed by Security Managers), repositories, and asset lists, enabling multiple business units, subsidiaries, or customer environments to share one Tenable.sc platform without access overlap."
    ]
  },
  {
    "id": "SC-Q012",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A Tenable.sc deployment has a DMZ network segment with no inbound access to the corporate scanner. What is the correct approach to scan the DMZ assets?",
    "o": [
      "Use passive monitoring only since active scanning is impossible in a DMZ",
      "Export the Tenable.sc scan policy to a standalone Nessus and manually import results",
      "Deploy an additional Nessus scanner in the DMZ, pair it with Tenable.sc, and configure a scan zone for the DMZ subnet",
      "Extend the corporate scanner's scan zone to include the DMZ IP range"
    ],
    "a": "C",
    "e": "For network segments with restricted access, the correct approach is deploying a Nessus scanner within (or adjacent to) that segment, pairing it with Tenable.sc using a linking key, and creating a scan zone that maps the DMZ subnet to the new scanner. All scan coordination and result aggregation still flows through Tenable.sc.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-012",
    "x": [
      "The source answer key does not select this alternative: “Use passive monitoring only since active scanning is impossible in a DMZ”. The keyed answer is “Deploy an additional Nessus scanner in the DMZ, pair it with Tenable.sc, and configure a scan zone for the DMZ subnet”. Source explanation: For network segments with restricted access, the correct approach is deploying a Nessus scanner within (or adjacent to) that segment, pairing it with Tenable.sc using a linking key, and creating a scan zone that maps the DMZ subnet to the new scanner. All scan coordination and result aggregation still flows through Tenable.sc.",
      "The source answer key does not select this alternative: “Export the Tenable.sc scan policy to a standalone Nessus and manually import results”. The keyed answer is “Deploy an additional Nessus scanner in the DMZ, pair it with Tenable.sc, and configure a scan zone for the DMZ subnet”. Source explanation: For network segments with restricted access, the correct approach is deploying a Nessus scanner within (or adjacent to) that segment, pairing it with Tenable.sc using a linking key, and creating a scan zone that maps the DMZ subnet to the new scanner. All scan coordination and result aggregation still flows through Tenable.sc.",
      "For network segments with restricted access, the correct approach is deploying a Nessus scanner within (or adjacent to) that segment, pairing it with Tenable.sc using a linking key, and creating a scan zone that maps the DMZ subnet to the new scanner. All scan coordination and result aggregation still flows through Tenable.sc.",
      "The source answer key does not select this alternative: “Extend the corporate scanner's scan zone to include the DMZ IP range”. The keyed answer is “Deploy an additional Nessus scanner in the DMZ, pair it with Tenable.sc, and configure a scan zone for the DMZ subnet”. Source explanation: For network segments with restricted access, the correct approach is deploying a Nessus scanner within (or adjacent to) that segment, pairing it with Tenable.sc using a linking key, and creating a scan zone that maps the DMZ subnet to the new scanner. All scan coordination and result aggregation still flows through Tenable.sc."
    ]
  },
  {
    "id": "SC-Q013",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "Which Tenable.sc feature allows administrators to track vulnerability trending over time without requiring a separate reporting tool?",
    "o": [
      "The scan history export to CSV for spreadsheet trend analysis",
      "Dashboard components using trend-enabled data sources that chart vulnerability counts over time",
      "The compliance benchmark improvement tracker in scan policies",
      "Repository comparison between two different repository types"
    ],
    "a": "B",
    "e": "Tenable.sc dashboards support trend-enabled components that plot vulnerability metrics (total count by severity, new vs. remediated, etc.) as time-series charts directly within the console. This provides built-in trending without requiring external tools, showing how the vulnerability posture changes across scan cycles.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-013",
    "x": [
      "The source answer key does not select this alternative: “The scan history export to CSV for spreadsheet trend analysis”. The keyed answer is “Dashboard components using trend-enabled data sources that chart vulnerability counts over time”. Source explanation: Tenable.sc dashboards support trend-enabled components that plot vulnerability metrics (total count by severity, new vs. remediated, etc.) as time-series charts directly within the console. This provides built-in trending without requiring external tools, showing how the vulnerability posture changes across scan cycles.",
      "Tenable.sc dashboards support trend-enabled components that plot vulnerability metrics (total count by severity, new vs. remediated, etc.) as time-series charts directly within the console. This provides built-in trending without requiring external tools, showing how the vulnerability posture changes across scan cycles.",
      "The source answer key does not select this alternative: “The compliance benchmark improvement tracker in scan policies”. The keyed answer is “Dashboard components using trend-enabled data sources that chart vulnerability counts over time”. Source explanation: Tenable.sc dashboards support trend-enabled components that plot vulnerability metrics (total count by severity, new vs. remediated, etc.) as time-series charts directly within the console. This provides built-in trending without requiring external tools, showing how the vulnerability posture changes across scan cycles.",
      "The source answer key does not select this alternative: “Repository comparison between two different repository types”. The keyed answer is “Dashboard components using trend-enabled data sources that chart vulnerability counts over time”. Source explanation: Tenable.sc dashboards support trend-enabled components that plot vulnerability metrics (total count by severity, new vs. remediated, etc.) as time-series charts directly within the console. This provides built-in trending without requiring external tools, showing how the vulnerability posture changes across scan cycles."
    ]
  },
  {
    "id": "SC-Q014",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "In Tenable.sc, what is required to enable an organization to use a specific repository?",
    "o": [
      "The Administrator must assign repository access to the organization in the repository configuration",
      "The Security Manager must create the repository within their organization",
      "Users must have Auditor or higher role to access repository data",
      "The repository must be mapped to the organization's scan zone"
    ],
    "a": "A",
    "e": "Repositories are created and owned at the system level by Administrators. To make a repository available to an organization's users, the Administrator must explicitly grant the organization access to that repository in the repository's configuration settings. Organizations only see and use repositories to which they have been granted access.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-014",
    "x": [
      "Repositories are created and owned at the system level by Administrators. To make a repository available to an organization's users, the Administrator must explicitly grant the organization access to that repository in the repository's configuration settings. Organizations only see and use repositories to which they have been granted access.",
      "The source answer key does not select this alternative: “The Security Manager must create the repository within their organization”. The keyed answer is “The Administrator must assign repository access to the organization in the repository configuration”. Source explanation: Repositories are created and owned at the system level by Administrators. To make a repository available to an organization's users, the Administrator must explicitly grant the organization access to that repository in the repository's configuration settings. Organizations only see and use repositories to which they have been granted access.",
      "The source answer key does not select this alternative: “Users must have Auditor or higher role to access repository data”. The keyed answer is “The Administrator must assign repository access to the organization in the repository configuration”. Source explanation: Repositories are created and owned at the system level by Administrators. To make a repository available to an organization's users, the Administrator must explicitly grant the organization access to that repository in the repository's configuration settings. Organizations only see and use repositories to which they have been granted access.",
      "The source answer key does not select this alternative: “The repository must be mapped to the organization's scan zone”. The keyed answer is “The Administrator must assign repository access to the organization in the repository configuration”. Source explanation: Repositories are created and owned at the system level by Administrators. To make a repository available to an organization's users, the Administrator must explicitly grant the organization access to that repository in the repository's configuration settings. Organizations only see and use repositories to which they have been granted access."
    ]
  },
  {
    "id": "SC-Q015",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "What is the purpose of 'Combination Asset Lists' in Tenable.sc?",
    "o": [
      "To create a new asset list by performing union, intersection, or difference operations on existing asset lists",
      "To share asset lists between multiple organizations simultaneously",
      "To merge repository data from two different scan cycles",
      "To combine static and dynamic asset list data into a single IP export file"
    ],
    "a": "A",
    "e": "Combination Asset Lists in Tenable.sc allow administrators to define a new asset list using set operations: Union (all assets in List A OR List B), Intersection (only assets in BOTH List A AND List B), or Difference (assets in List A but NOT in List B). This enables complex asset targeting without manual list management.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-015",
    "x": [
      "Combination Asset Lists in Tenable.sc allow administrators to define a new asset list using set operations: Union (all assets in List A OR List B), Intersection (only assets in BOTH List A AND List B), or Difference (assets in List A but NOT in List B). This enables complex asset targeting without manual list management.",
      "The source answer key does not select this alternative: “To share asset lists between multiple organizations simultaneously”. The keyed answer is “To create a new asset list by performing union, intersection, or difference operations on existing asset lists”. Source explanation: Combination Asset Lists in Tenable.sc allow administrators to define a new asset list using set operations: Union (all assets in List A OR List B), Intersection (only assets in BOTH List A AND List B), or Difference (assets in List A but NOT in List B). This enables complex asset targeting without manual list management.",
      "The source answer key does not select this alternative: “To merge repository data from two different scan cycles”. The keyed answer is “To create a new asset list by performing union, intersection, or difference operations on existing asset lists”. Source explanation: Combination Asset Lists in Tenable.sc allow administrators to define a new asset list using set operations: Union (all assets in List A OR List B), Intersection (only assets in BOTH List A AND List B), or Difference (assets in List A but NOT in List B). This enables complex asset targeting without manual list management.",
      "The source answer key does not select this alternative: “To combine static and dynamic asset list data into a single IP export file”. The keyed answer is “To create a new asset list by performing union, intersection, or difference operations on existing asset lists”. Source explanation: Combination Asset Lists in Tenable.sc allow administrators to define a new asset list using set operations: Union (all assets in List A OR List B), Intersection (only assets in BOTH List A AND List B), or Difference (assets in List A but NOT in List B). This enables complex asset targeting without manual list management."
    ]
  },
  {
    "id": "SC-Q016",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In a Tenable.sc deployment with multiple organizations, how is scan data separated between organizations?",
    "o": [
      "Each organization has a completely separate Tenable.sc database instance",
      "Data separation is enforced by the Nessus scanner assigning results to specific organizations",
      "Each organization is assigned access to specific repositories; scan results are stored in those repositories and users only see data from their assigned repositories",
      "Scan results are tagged with an organization ID and filtered at query time for each user"
    ],
    "a": "C",
    "e": "Tenable.sc's multi-tenancy is implemented through repository access control. Each organization is assigned access to one or more repositories, and scan results are stored in those repositories. Users within an organization can only query and view data from repositories accessible to their organization, providing logical data separation.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-016",
    "x": [
      "The source answer key does not select this alternative: “Each organization has a completely separate Tenable.sc database instance”. The keyed answer is “Each organization is assigned access to specific repositories; scan results are stored in those repositories and users only see data from their assigned repositories”. Source explanation: Tenable.sc's multi-tenancy is implemented through repository access control. Each organization is assigned access to one or more repositories, and scan results are stored in those repositories. Users within an organization can only query and view data from repositories accessible to their organization, providing logical data separation.",
      "The source answer key does not select this alternative: “Data separation is enforced by the Nessus scanner assigning results to specific organizations”. The keyed answer is “Each organization is assigned access to specific repositories; scan results are stored in those repositories and users only see data from their assigned repositories”. Source explanation: Tenable.sc's multi-tenancy is implemented through repository access control. Each organization is assigned access to one or more repositories, and scan results are stored in those repositories. Users within an organization can only query and view data from repositories accessible to their organization, providing logical data separation.",
      "Tenable.sc's multi-tenancy is implemented through repository access control. Each organization is assigned access to one or more repositories, and scan results are stored in those repositories. Users within an organization can only query and view data from repositories accessible to their organization, providing logical data separation.",
      "The source answer key does not select this alternative: “Scan results are tagged with an organization ID and filtered at query time for each user”. The keyed answer is “Each organization is assigned access to specific repositories; scan results are stored in those repositories and users only see data from their assigned repositories”. Source explanation: Tenable.sc's multi-tenancy is implemented through repository access control. Each organization is assigned access to one or more repositories, and scan results are stored in those repositories. Users within an organization can only query and view data from repositories accessible to their organization, providing logical data separation."
    ]
  },
  {
    "id": "SC-Q017",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "Which Tenable.sc dashboard component is best suited for tracking the number of critical vulnerabilities on a specific asset list over the last 30 days?",
    "o": [
      "A pie chart component showing current severity distribution across the asset list",
      "A trending graph component filtered to the asset list with severity set to Critical and a 30-day time range",
      "A table component listing the top 10 hosts by vulnerability count",
      "A summary component showing current total vulnerability count"
    ],
    "a": "B",
    "e": "A trending graph (time-series chart) component in Tenable.sc dashboards can be scoped to a specific asset list, filtered by Critical severity, and configured with a 30-day time range to show how Critical vulnerability counts have changed over time. This provides program velocity data rather than a static point-in-time count.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-017",
    "x": [
      "The source answer key does not select this alternative: “A pie chart component showing current severity distribution across the asset list”. The keyed answer is “A trending graph component filtered to the asset list with severity set to Critical and a 30-day time range”. Source explanation: A trending graph (time-series chart) component in Tenable.sc dashboards can be scoped to a specific asset list, filtered by Critical severity, and configured with a 30-day time range to show how Critical vulnerability counts have changed over time. This provides program velocity data rather than a static point-in-time count.",
      "A trending graph (time-series chart) component in Tenable.sc dashboards can be scoped to a specific asset list, filtered by Critical severity, and configured with a 30-day time range to show how Critical vulnerability counts have changed over time. This provides program velocity data rather than a static point-in-time count.",
      "The source answer key does not select this alternative: “A table component listing the top 10 hosts by vulnerability count”. The keyed answer is “A trending graph component filtered to the asset list with severity set to Critical and a 30-day time range”. Source explanation: A trending graph (time-series chart) component in Tenable.sc dashboards can be scoped to a specific asset list, filtered by Critical severity, and configured with a 30-day time range to show how Critical vulnerability counts have changed over time. This provides program velocity data rather than a static point-in-time count.",
      "The source answer key does not select this alternative: “A summary component showing current total vulnerability count”. The keyed answer is “A trending graph component filtered to the asset list with severity set to Critical and a 30-day time range”. Source explanation: A trending graph (time-series chart) component in Tenable.sc dashboards can be scoped to a specific asset list, filtered by Critical severity, and configured with a 30-day time range to show how Critical vulnerability counts have changed over time. This provides program velocity data rather than a static point-in-time count."
    ]
  },
  {
    "id": "SC-Q018",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "What is Tenable.sc's 'offsite repository' synchronization feature used for?",
    "o": [
      "To replicate vulnerability data from one Tenable.sc instance to another for disaster recovery or consolidated reporting",
      "To synchronize Nessus plugin feeds between primary and secondary Tenable.sc servers",
      "To automatically back up Tenable.sc configuration to a cloud storage bucket",
      "To share scan results with Tenable.io for cloud-based analysis"
    ],
    "a": "A",
    "e": "Offsite repository synchronization allows Tenable.sc to export repository data to a separate remote Tenable.sc installation. This is used for disaster recovery (having a backup Tenable.sc with current data), consolidated reporting (merging data from multiple Tenable.sc instances into a central reporting server), or hierarchical deployments.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-018",
    "x": [
      "Offsite repository synchronization allows Tenable.sc to export repository data to a separate remote Tenable.sc installation. This is used for disaster recovery (having a backup Tenable.sc with current data), consolidated reporting (merging data from multiple Tenable.sc instances into a central reporting server), or hierarchical deployments.",
      "The source answer key does not select this alternative: “To synchronize Nessus plugin feeds between primary and secondary Tenable.sc servers”. The keyed answer is “To replicate vulnerability data from one Tenable.sc instance to another for disaster recovery or consolidated reporting”. Source explanation: Offsite repository synchronization allows Tenable.sc to export repository data to a separate remote Tenable.sc installation. This is used for disaster recovery (having a backup Tenable.sc with current data), consolidated reporting (merging data from multiple Tenable.sc instances into a central reporting server), or hierarchical deployments.",
      "The source answer key does not select this alternative: “To automatically back up Tenable.sc configuration to a cloud storage bucket”. The keyed answer is “To replicate vulnerability data from one Tenable.sc instance to another for disaster recovery or consolidated reporting”. Source explanation: Offsite repository synchronization allows Tenable.sc to export repository data to a separate remote Tenable.sc installation. This is used for disaster recovery (having a backup Tenable.sc with current data), consolidated reporting (merging data from multiple Tenable.sc instances into a central reporting server), or hierarchical deployments.",
      "The source answer key does not select this alternative: “To share scan results with Tenable.io for cloud-based analysis”. The keyed answer is “To replicate vulnerability data from one Tenable.sc instance to another for disaster recovery or consolidated reporting”. Source explanation: Offsite repository synchronization allows Tenable.sc to export repository data to a separate remote Tenable.sc installation. This is used for disaster recovery (having a backup Tenable.sc with current data), consolidated reporting (merging data from multiple Tenable.sc instances into a central reporting server), or hierarchical deployments."
    ]
  },
  {
    "id": "SC-Q019",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "In Tenable Security Center, which approach provides interactive, dynamic filtering of vulnerability data without exporting a static report file?",
    "o": [
      "Schedule a CSV report and open it only in a text editor",
      "Export an HTML report and rely on browser print preview filters",
      "Generate a PDF report with embedded JavaScript for dynamic filtering",
      "Use the vulnerability analysis Query interface or an interactive dashboard component"
    ],
    "a": "D",
    "e": "Generated PDF, CSV, and HTML reports from Tenable Security Center are static outputs. Interactive filtering—changing severity, plugin, asset, or date criteria on live repository data—requires the vulnerability analysis Query interface or dashboard components inside the console.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-019",
    "x": [
      "The source answer key does not select this alternative: “Schedule a CSV report and open it only in a text editor”. The keyed answer is “Use the vulnerability analysis Query interface or an interactive dashboard component”. Source explanation: Generated PDF, CSV, and HTML reports from Tenable Security Center are static outputs. Interactive filtering—changing severity, plugin, asset, or date criteria on live repository data—requires the vulnerability analysis Query interface or dashboard components inside the console.",
      "The source answer key does not select this alternative: “Export an HTML report and rely on browser print preview filters”. The keyed answer is “Use the vulnerability analysis Query interface or an interactive dashboard component”. Source explanation: Generated PDF, CSV, and HTML reports from Tenable Security Center are static outputs. Interactive filtering—changing severity, plugin, asset, or date criteria on live repository data—requires the vulnerability analysis Query interface or dashboard components inside the console.",
      "The source answer key does not select this alternative: “Generate a PDF report with embedded JavaScript for dynamic filtering”. The keyed answer is “Use the vulnerability analysis Query interface or an interactive dashboard component”. Source explanation: Generated PDF, CSV, and HTML reports from Tenable Security Center are static outputs. Interactive filtering—changing severity, plugin, asset, or date criteria on live repository data—requires the vulnerability analysis Query interface or dashboard components inside the console.",
      "Generated PDF, CSV, and HTML reports from Tenable Security Center are static outputs. Interactive filtering—changing severity, plugin, asset, or date criteria on live repository data—requires the vulnerability analysis Query interface or dashboard components inside the console."
    ]
  },
  {
    "id": "SC-Q020",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "What is the 'IP Normalization' setting in a Tenable.sc repository and why is it important?",
    "o": [
      "It standardizes port numbering across different scan policy configurations",
      "It normalizes CVSS scores across different Nessus plugin versions",
      "It converts IPv6 addresses to IPv4 format for storage in IPv4 repositories",
      "It maps different DNS names or agent IDs resolving to the same IP address to a single asset record, preventing duplicate vulnerability tracking"
    ],
    "a": "D",
    "e": "IP normalization in Tenable.sc repositories consolidates multiple asset identifiers (different hostnames, agent IDs, or MAC addresses) that map to the same IP address into a single asset record. Without normalization, the same physical machine could appear as multiple assets, inflating vulnerability counts and complicating remediation tracking.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-020",
    "x": [
      "The source answer key does not select this alternative: “It standardizes port numbering across different scan policy configurations”. The keyed answer is “It maps different DNS names or agent IDs resolving to the same IP address to a single asset record, preventing duplicate vulnerability tracking”. Source explanation: IP normalization in Tenable.sc repositories consolidates multiple asset identifiers (different hostnames, agent IDs, or MAC addresses) that map to the same IP address into a single asset record. Without normalization, the same physical machine could appear as multiple assets, inflating vulnerability counts and complicating remediation tracking.",
      "The source answer key does not select this alternative: “It normalizes CVSS scores across different Nessus plugin versions”. The keyed answer is “It maps different DNS names or agent IDs resolving to the same IP address to a single asset record, preventing duplicate vulnerability tracking”. Source explanation: IP normalization in Tenable.sc repositories consolidates multiple asset identifiers (different hostnames, agent IDs, or MAC addresses) that map to the same IP address into a single asset record. Without normalization, the same physical machine could appear as multiple assets, inflating vulnerability counts and complicating remediation tracking.",
      "The source answer key does not select this alternative: “It converts IPv6 addresses to IPv4 format for storage in IPv4 repositories”. The keyed answer is “It maps different DNS names or agent IDs resolving to the same IP address to a single asset record, preventing duplicate vulnerability tracking”. Source explanation: IP normalization in Tenable.sc repositories consolidates multiple asset identifiers (different hostnames, agent IDs, or MAC addresses) that map to the same IP address into a single asset record. Without normalization, the same physical machine could appear as multiple assets, inflating vulnerability counts and complicating remediation tracking.",
      "IP normalization in Tenable.sc repositories consolidates multiple asset identifiers (different hostnames, agent IDs, or MAC addresses) that map to the same IP address into a single asset record. Without normalization, the same physical machine could appear as multiple assets, inflating vulnerability counts and complicating remediation tracking."
    ]
  },
  {
    "id": "SC-Q021",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "In Tenable Security Center, which built-in organizational role can create scan policies and run scans but cannot manage groups or users?",
    "o": [
      "Administrator",
      "Security Analyst",
      "Security Manager",
      "Auditor"
    ],
    "a": "B",
    "e": "Per Tenable Security Center user-role documentation, the Security Analyst role can perform organizational-level actions including creating policies and scans, but cannot manage groups or users. Security Managers manage the organization including users; Administrators manage the system outside organizations; Auditors are read-only for dashboards, reports, and logs.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-021",
    "x": [
      "The source answer key does not select this alternative: “Administrator”. The keyed answer is “Security Analyst”. Source explanation: Per Tenable Security Center user-role documentation, the Security Analyst role can perform organizational-level actions including creating policies and scans, but cannot manage groups or users. Security Managers manage the organization including users; Administrators manage the system outside organizations; Auditors are read-only for dashboards, reports, and logs.",
      "Per Tenable Security Center user-role documentation, the Security Analyst role can perform organizational-level actions including creating policies and scans, but cannot manage groups or users. Security Managers manage the organization including users; Administrators manage the system outside organizations; Auditors are read-only for dashboards, reports, and logs.",
      "The source answer key does not select this alternative: “Security Manager”. The keyed answer is “Security Analyst”. Source explanation: Per Tenable Security Center user-role documentation, the Security Analyst role can perform organizational-level actions including creating policies and scans, but cannot manage groups or users. Security Managers manage the organization including users; Administrators manage the system outside organizations; Auditors are read-only for dashboards, reports, and logs.",
      "The source answer key does not select this alternative: “Auditor”. The keyed answer is “Security Analyst”. Source explanation: Per Tenable Security Center user-role documentation, the Security Analyst role can perform organizational-level actions including creating policies and scans, but cannot manage groups or users. Security Managers manage the organization including users; Administrators manage the system outside organizations; Auditors are read-only for dashboards, reports, and logs."
    ]
  },
  {
    "id": "SC-Q022",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "What differentiates a Tenable.sc 'Active Scan' from a 'Passive Scan' configuration?",
    "o": [
      "Active scans send probe packets to targets; passive scans monitor network traffic without sending probes",
      "Active scans run continuously; passive scans are run on a fixed schedule",
      "Active scans require Administrator approval; passive scans can be run by Security Analysts",
      "Active scans are performed by Nessus Agents; passive scans are performed by the network scanner"
    ],
    "a": "A",
    "e": "Active scans (the primary Nessus scan type) actively send probe packets, authentication requests, and plugin checks to target systems to enumerate vulnerabilities. Passive scans (using Nessus Network Monitor/PVS) monitor network traffic flowing through a network tap or SPAN port without sending any packets, providing agentless, non-intrusive visibility.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-022",
    "x": [
      "Active scans (the primary Nessus scan type) actively send probe packets, authentication requests, and plugin checks to target systems to enumerate vulnerabilities. Passive scans (using Nessus Network Monitor/PVS) monitor network traffic flowing through a network tap or SPAN port without sending any packets, providing agentless, non-intrusive visibility.",
      "The source answer key does not select this alternative: “Active scans run continuously; passive scans are run on a fixed schedule”. The keyed answer is “Active scans send probe packets to targets; passive scans monitor network traffic without sending probes”. Source explanation: Active scans (the primary Nessus scan type) actively send probe packets, authentication requests, and plugin checks to target systems to enumerate vulnerabilities. Passive scans (using Nessus Network Monitor/PVS) monitor network traffic flowing through a network tap or SPAN port without sending any packets, providing agentless, non-intrusive visibility.",
      "The source answer key does not select this alternative: “Active scans require Administrator approval; passive scans can be run by Security Analysts”. The keyed answer is “Active scans send probe packets to targets; passive scans monitor network traffic without sending probes”. Source explanation: Active scans (the primary Nessus scan type) actively send probe packets, authentication requests, and plugin checks to target systems to enumerate vulnerabilities. Passive scans (using Nessus Network Monitor/PVS) monitor network traffic flowing through a network tap or SPAN port without sending any packets, providing agentless, non-intrusive visibility.",
      "The source answer key does not select this alternative: “Active scans are performed by Nessus Agents; passive scans are performed by the network scanner”. The keyed answer is “Active scans send probe packets to targets; passive scans monitor network traffic without sending probes”. Source explanation: Active scans (the primary Nessus scan type) actively send probe packets, authentication requests, and plugin checks to target systems to enumerate vulnerabilities. Passive scans (using Nessus Network Monitor/PVS) monitor network traffic flowing through a network tap or SPAN port without sending any packets, providing agentless, non-intrusive visibility."
    ]
  },
  {
    "id": "SC-Q023",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "In Tenable.sc, which type of credential is typically used for credentialed scanning of Windows servers joined to an Active Directory domain?",
    "o": [
      "SSH key-based authentication for Windows Server Core installations",
      "SNMP community string for Windows Management Instrumentation (WMI) access",
      "Windows credentials with domain administrator or dedicated scan account in the Domain Admins or local Administrators group",
      "API token authentication via the Windows REST API"
    ],
    "a": "C",
    "e": "Windows credentialed scanning in Nessus/Tenable.sc requires Windows domain or local credentials with administrative privileges on the target system. The account needs local Administrator group membership (or equivalent) to access the registry, file system, and WMI for local check plugins. A dedicated scan account with minimal other access is a security best practice.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-023",
    "x": [
      "The source answer key does not select this alternative: “SSH key-based authentication for Windows Server Core installations”. The keyed answer is “Windows credentials with domain administrator or dedicated scan account in the Domain Admins or local Administrators group”. Source explanation: Windows credentialed scanning in Nessus/Tenable.sc requires Windows domain or local credentials with administrative privileges on the target system. The account needs local Administrator group membership (or equivalent) to access the registry, file system, and WMI for local check plugins. A dedicated scan account with minimal other access is a security best practice.",
      "The source answer key does not select this alternative: “SNMP community string for Windows Management Instrumentation (WMI) access”. The keyed answer is “Windows credentials with domain administrator or dedicated scan account in the Domain Admins or local Administrators group”. Source explanation: Windows credentialed scanning in Nessus/Tenable.sc requires Windows domain or local credentials with administrative privileges on the target system. The account needs local Administrator group membership (or equivalent) to access the registry, file system, and WMI for local check plugins. A dedicated scan account with minimal other access is a security best practice.",
      "Windows credentialed scanning in Nessus/Tenable.sc requires Windows domain or local credentials with administrative privileges on the target system. The account needs local Administrator group membership (or equivalent) to access the registry, file system, and WMI for local check plugins. A dedicated scan account with minimal other access is a security best practice.",
      "The source answer key does not select this alternative: “API token authentication via the Windows REST API”. The keyed answer is “Windows credentials with domain administrator or dedicated scan account in the Domain Admins or local Administrators group”. Source explanation: Windows credentialed scanning in Nessus/Tenable.sc requires Windows domain or local credentials with administrative privileges on the target system. The account needs local Administrator group membership (or equivalent) to access the registry, file system, and WMI for local check plugins. A dedicated scan account with minimal other access is a security best practice."
    ]
  },
  {
    "id": "SC-Q024",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "A Tenable.sc administrator wants to generate a report showing all vulnerabilities on the PCI Cardholder Data Environment (CDE) assets with CVSS score 7.0 or higher. Which elements are required?",
    "o": [
      "A dedicated organization for the PCI CDE with Administrator-owned reporting",
      "A new scan policy configured with PCI compliance checks targeting the CDE subnet",
      "An offsite repository containing only CDE vulnerability data",
      "A static or dynamic asset list for CDE assets, a report configured with a CVSS filter for 7.0+, and access to the CDE repository"
    ],
    "a": "D",
    "e": "To generate this targeted report, the administrator needs: an asset list defining CDE assets (static IP list or dynamic query), a report template configured to filter vulnerabilities with CVSS 7.0 or higher, and the user's account must have access to the repository containing CDE scan data. Report filters in Tenable.sc support CVSS score thresholds.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-024",
    "x": [
      "The source answer key does not select this alternative: “A dedicated organization for the PCI CDE with Administrator-owned reporting”. The keyed answer is “A static or dynamic asset list for CDE assets, a report configured with a CVSS filter for 7.0+, and access to the CDE repository”. Source explanation: To generate this targeted report, the administrator needs: an asset list defining CDE assets (static IP list or dynamic query), a report template configured to filter vulnerabilities with CVSS 7.0 or higher, and the user's account must have access to the repository containing CDE scan data. Report filters in Tenable.sc support CVSS score thresholds.",
      "The source answer key does not select this alternative: “A new scan policy configured with PCI compliance checks targeting the CDE subnet”. The keyed answer is “A static or dynamic asset list for CDE assets, a report configured with a CVSS filter for 7.0+, and access to the CDE repository”. Source explanation: To generate this targeted report, the administrator needs: an asset list defining CDE assets (static IP list or dynamic query), a report template configured to filter vulnerabilities with CVSS 7.0 or higher, and the user's account must have access to the repository containing CDE scan data. Report filters in Tenable.sc support CVSS score thresholds.",
      "The source answer key does not select this alternative: “An offsite repository containing only CDE vulnerability data”. The keyed answer is “A static or dynamic asset list for CDE assets, a report configured with a CVSS filter for 7.0+, and access to the CDE repository”. Source explanation: To generate this targeted report, the administrator needs: an asset list defining CDE assets (static IP list or dynamic query), a report template configured to filter vulnerabilities with CVSS 7.0 or higher, and the user's account must have access to the repository containing CDE scan data. Report filters in Tenable.sc support CVSS score thresholds.",
      "To generate this targeted report, the administrator needs: an asset list defining CDE assets (static IP list or dynamic query), a report template configured to filter vulnerabilities with CVSS 7.0 or higher, and the user's account must have access to the repository containing CDE scan data. Report filters in Tenable.sc support CVSS score thresholds."
    ]
  },
  {
    "id": "SC-Q025",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In Tenable.sc, which system component handles the web-based user interface and serves the management console?",
    "o": [
      "The Nessus scanner web interface forwarded through a reverse proxy",
      "The Tenable.sc web server (Apache-based) running on the Tenable.sc appliance",
      "A separate management server purchased alongside the Tenable.sc license",
      "The Tenable.sc database server which also serves HTTP connections"
    ],
    "a": "B",
    "e": "Tenable.sc runs an embedded web server (based on Apache) on the Tenable.sc appliance that serves the management console UI on HTTPS (default port 443). The database (PostgreSQL) stores all data separately, and Nessus scanners are separate paired components — the web UI is native to the Tenable.sc appliance itself.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-025",
    "x": [
      "The source answer key does not select this alternative: “The Nessus scanner web interface forwarded through a reverse proxy”. The keyed answer is “The Tenable.sc web server (Apache-based) running on the Tenable.sc appliance”. Source explanation: Tenable.sc runs an embedded web server (based on Apache) on the Tenable.sc appliance that serves the management console UI on HTTPS (default port 443). The database (PostgreSQL) stores all data separately, and Nessus scanners are separate paired components — the web UI is native to the Tenable.sc appliance itself.",
      "Tenable.sc runs an embedded web server (based on Apache) on the Tenable.sc appliance that serves the management console UI on HTTPS (default port 443). The database (PostgreSQL) stores all data separately, and Nessus scanners are separate paired components — the web UI is native to the Tenable.sc appliance itself.",
      "The source answer key does not select this alternative: “A separate management server purchased alongside the Tenable.sc license”. The keyed answer is “The Tenable.sc web server (Apache-based) running on the Tenable.sc appliance”. Source explanation: Tenable.sc runs an embedded web server (based on Apache) on the Tenable.sc appliance that serves the management console UI on HTTPS (default port 443). The database (PostgreSQL) stores all data separately, and Nessus scanners are separate paired components — the web UI is native to the Tenable.sc appliance itself.",
      "The source answer key does not select this alternative: “The Tenable.sc database server which also serves HTTP connections”. The keyed answer is “The Tenable.sc web server (Apache-based) running on the Tenable.sc appliance”. Source explanation: Tenable.sc runs an embedded web server (based on Apache) on the Tenable.sc appliance that serves the management console UI on HTTPS (default port 443). The database (PostgreSQL) stores all data separately, and Nessus scanners are separate paired components — the web UI is native to the Tenable.sc appliance itself."
    ]
  },
  {
    "id": "SC-Q026",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "When configuring a Tenable.sc scan policy for compliance auditing, what file type must be uploaded to enable CIS Benchmark checks?",
    "o": [
      "Audit file (.audit) provided by Tenable or downloaded from the Tenable Audit Files portal",
      "Policy XML file exported from DISA STIG Viewer",
      "JSON configuration schema from the CIS website",
      "Nessus plugin bundle (.tar.gz) for compliance plugins"
    ],
    "a": "A",
    "e": "Tenable compliance checks use proprietary .audit files — text-based files defining specific configuration checks with expected values and pass/fail logic. Tenable provides hundreds of pre-built .audit files for CIS Benchmarks and DISA STIGs on the Tenable Audit Files portal. Custom .audit files can also be created using Tenable's audit file syntax.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-026",
    "x": [
      "Tenable compliance checks use proprietary .audit files — text-based files defining specific configuration checks with expected values and pass/fail logic. Tenable provides hundreds of pre-built .audit files for CIS Benchmarks and DISA STIGs on the Tenable Audit Files portal. Custom .audit files can also be created using Tenable's audit file syntax.",
      "The source answer key does not select this alternative: “Policy XML file exported from DISA STIG Viewer”. The keyed answer is “Audit file (.audit) provided by Tenable or downloaded from the Tenable Audit Files portal”. Source explanation: Tenable compliance checks use proprietary .audit files — text-based files defining specific configuration checks with expected values and pass/fail logic. Tenable provides hundreds of pre-built .audit files for CIS Benchmarks and DISA STIGs on the Tenable Audit Files portal. Custom .audit files can also be created using Tenable's audit file syntax.",
      "The source answer key does not select this alternative: “JSON configuration schema from the CIS website”. The keyed answer is “Audit file (.audit) provided by Tenable or downloaded from the Tenable Audit Files portal”. Source explanation: Tenable compliance checks use proprietary .audit files — text-based files defining specific configuration checks with expected values and pass/fail logic. Tenable provides hundreds of pre-built .audit files for CIS Benchmarks and DISA STIGs on the Tenable Audit Files portal. Custom .audit files can also be created using Tenable's audit file syntax.",
      "The source answer key does not select this alternative: “Nessus plugin bundle (.tar.gz) for compliance plugins”. The keyed answer is “Audit file (.audit) provided by Tenable or downloaded from the Tenable Audit Files portal”. Source explanation: Tenable compliance checks use proprietary .audit files — text-based files defining specific configuration checks with expected values and pass/fail logic. Tenable provides hundreds of pre-built .audit files for CIS Benchmarks and DISA STIGs on the Tenable Audit Files portal. Custom .audit files can also be created using Tenable's audit file syntax."
    ]
  },
  {
    "id": "SC-Q027",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "What is the default HTTPS port for accessing the Tenable.sc management console?",
    "o": [
      "443",
      "8834",
      "8080",
      "3000"
    ],
    "a": "A",
    "e": "Tenable.sc's web management console is accessible via HTTPS on the standard port 443. This is a key installation fact tested in certifications. Nessus scanner's own web UI uses port 8834. Port 443 on the Tenable.sc appliance serves the admin console for all users.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-027",
    "x": [
      "Tenable.sc's web management console is accessible via HTTPS on the standard port 443. This is a key installation fact tested in certifications. Nessus scanner's own web UI uses port 8834. Port 443 on the Tenable.sc appliance serves the admin console for all users.",
      "The source answer key does not select this alternative: “8834”. The keyed answer is “443”. Source explanation: Tenable.sc's web management console is accessible via HTTPS on the standard port 443. This is a key installation fact tested in certifications. Nessus scanner's own web UI uses port 8834. Port 443 on the Tenable.sc appliance serves the admin console for all users.",
      "The source answer key does not select this alternative: “8080”. The keyed answer is “443”. Source explanation: Tenable.sc's web management console is accessible via HTTPS on the standard port 443. This is a key installation fact tested in certifications. Nessus scanner's own web UI uses port 8834. Port 443 on the Tenable.sc appliance serves the admin console for all users.",
      "The source answer key does not select this alternative: “3000”. The keyed answer is “443”. Source explanation: Tenable.sc's web management console is accessible via HTTPS on the standard port 443. This is a key installation fact tested in certifications. Nessus scanner's own web UI uses port 8834. Port 443 on the Tenable.sc appliance serves the admin console for all users."
    ]
  },
  {
    "id": "SC-Q028",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "In Tenable.sc, a Security Manager wants to ensure that a new analyst can only view vulnerability data for servers in the '10.10.0.0/16' subnet. What is the correct approach?",
    "o": [
      "Configure the analyst's Nessus scanner to only scan 10.10.0.0/16",
      "Create a separate Tenable.sc instance for the analyst with only 10.10.0.0/16 in the scan zone",
      "Create an asset list for 10.10.0.0/16, assign the repository containing that data to the organization, and ensure user permissions restrict them to that asset scope",
      "Apply a CVSS filter on the analyst's account to show only 10.10.0.0/16 results"
    ],
    "a": "C",
    "e": "Tenable.sc's access control for data scoping uses a combination of repository access (which repositories the organization/user can query) and asset list restrictions. By defining an asset list for 10.10.0.0/16 and ensuring the analyst's role and the organization's repository access are scoped appropriately, visibility can be restricted to that subnet.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-028",
    "x": [
      "The source answer key does not select this alternative: “Configure the analyst's Nessus scanner to only scan 10.10.0.0/16”. The keyed answer is “Create an asset list for 10.10.0.0/16, assign the repository containing that data to the organization, and ensure user permissions restrict them to that asset scope”. Source explanation: Tenable.sc's access control for data scoping uses a combination of repository access (which repositories the organization/user can query) and asset list restrictions. By defining an asset list for 10.10.0.0/16 and ensuring the analyst's role and the organization's repository access are scoped appropriately, visibility can be restricted to that subnet.",
      "The source answer key does not select this alternative: “Create a separate Tenable.sc instance for the analyst with only 10.10.0.0/16 in the scan zone”. The keyed answer is “Create an asset list for 10.10.0.0/16, assign the repository containing that data to the organization, and ensure user permissions restrict them to that asset scope”. Source explanation: Tenable.sc's access control for data scoping uses a combination of repository access (which repositories the organization/user can query) and asset list restrictions. By defining an asset list for 10.10.0.0/16 and ensuring the analyst's role and the organization's repository access are scoped appropriately, visibility can be restricted to that subnet.",
      "Tenable.sc's access control for data scoping uses a combination of repository access (which repositories the organization/user can query) and asset list restrictions. By defining an asset list for 10.10.0.0/16 and ensuring the analyst's role and the organization's repository access are scoped appropriately, visibility can be restricted to that subnet.",
      "The source answer key does not select this alternative: “Apply a CVSS filter on the analyst's account to show only 10.10.0.0/16 results”. The keyed answer is “Create an asset list for 10.10.0.0/16, assign the repository containing that data to the organization, and ensure user permissions restrict them to that asset scope”. Source explanation: Tenable.sc's access control for data scoping uses a combination of repository access (which repositories the organization/user can query) and asset list restrictions. By defining an asset list for 10.10.0.0/16 and ensuring the analyst's role and the organization's repository access are scoped appropriately, visibility can be restricted to that subnet."
    ]
  },
  {
    "id": "SC-Q029",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "Which Tenable.sc report chapter type displays a count of vulnerabilities per severity level as a bar chart?",
    "o": [
      "Asset Summary chapter with severity breakdown",
      "Table chapter sorted by severity",
      "Text chapter with embedded severity statistics",
      "Chart chapter using a vulnerability severity distribution data source"
    ],
    "a": "D",
    "e": "Tenable.sc reports are composed of chapters, and a Chart chapter using a vulnerability data source can be configured to display severity distribution as a bar, pie, or area chart. This provides visual representation of the vulnerability severity breakdown in formal PDF reports.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-029",
    "x": [
      "The source answer key does not select this alternative: “Asset Summary chapter with severity breakdown”. The keyed answer is “Chart chapter using a vulnerability severity distribution data source”. Source explanation: Tenable.sc reports are composed of chapters, and a Chart chapter using a vulnerability data source can be configured to display severity distribution as a bar, pie, or area chart. This provides visual representation of the vulnerability severity breakdown in formal PDF reports.",
      "The source answer key does not select this alternative: “Table chapter sorted by severity”. The keyed answer is “Chart chapter using a vulnerability severity distribution data source”. Source explanation: Tenable.sc reports are composed of chapters, and a Chart chapter using a vulnerability data source can be configured to display severity distribution as a bar, pie, or area chart. This provides visual representation of the vulnerability severity breakdown in formal PDF reports.",
      "The source answer key does not select this alternative: “Text chapter with embedded severity statistics”. The keyed answer is “Chart chapter using a vulnerability severity distribution data source”. Source explanation: Tenable.sc reports are composed of chapters, and a Chart chapter using a vulnerability data source can be configured to display severity distribution as a bar, pie, or area chart. This provides visual representation of the vulnerability severity breakdown in formal PDF reports.",
      "Tenable.sc reports are composed of chapters, and a Chart chapter using a vulnerability data source can be configured to display severity distribution as a bar, pie, or area chart. This provides visual representation of the vulnerability severity breakdown in formal PDF reports."
    ]
  },
  {
    "id": "SC-Q030",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In Tenable.sc, what is the correct order of operations when setting up a new organization for a subsidiary company?",
    "o": [
      "Create the organization, assign repositories, create the Security Manager account, then allow the Security Manager to create analysts and configure scans",
      "Import the subsidiary's existing Nessus scan policies first, then create the organization around them",
      "Create Security Manager first, then create the organization, then assign repositories",
      "Create repositories first, then create scan zones, then create the organization with scan zone and repository assignments"
    ],
    "a": "A",
    "e": "The correct Tenable.sc onboarding sequence is: (1) Administrator creates the Organization, (2) Administrator assigns repositories and scan zones to the organization, (3) Administrator creates the Security Manager account for the organization, (4) Security Manager creates Security Analyst and Auditor users and configures scans within the organization.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-030",
    "x": [
      "The correct Tenable.sc onboarding sequence is: (1) Administrator creates the Organization, (2) Administrator assigns repositories and scan zones to the organization, (3) Administrator creates the Security Manager account for the organization, (4) Security Manager creates Security Analyst and Auditor users and configures scans within the organization.",
      "The source answer key does not select this alternative: “Import the subsidiary's existing Nessus scan policies first, then create the organization around them”. The keyed answer is “Create the organization, assign repositories, create the Security Manager account, then allow the Security Manager to create analysts and configure scans”. Source explanation: The correct Tenable.sc onboarding sequence is: (1) Administrator creates the Organization, (2) Administrator assigns repositories and scan zones to the organization, (3) Administrator creates the Security Manager account for the organization, (4) Security Manager creates Security Analyst and Auditor users and configures scans within the organization.",
      "The source answer key does not select this alternative: “Create Security Manager first, then create the organization, then assign repositories”. The keyed answer is “Create the organization, assign repositories, create the Security Manager account, then allow the Security Manager to create analysts and configure scans”. Source explanation: The correct Tenable.sc onboarding sequence is: (1) Administrator creates the Organization, (2) Administrator assigns repositories and scan zones to the organization, (3) Administrator creates the Security Manager account for the organization, (4) Security Manager creates Security Analyst and Auditor users and configures scans within the organization.",
      "The source answer key does not select this alternative: “Create repositories first, then create scan zones, then create the organization with scan zone and repository assignments”. The keyed answer is “Create the organization, assign repositories, create the Security Manager account, then allow the Security Manager to create analysts and configure scans”. Source explanation: The correct Tenable.sc onboarding sequence is: (1) Administrator creates the Organization, (2) Administrator assigns repositories and scan zones to the organization, (3) Administrator creates the Security Manager account for the organization, (4) Security Manager creates Security Analyst and Auditor users and configures scans within the organization."
    ]
  },
  {
    "id": "SC-Q031",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "What is the main purpose of Tenable.sc's 'Query' function in vulnerability analysis?",
    "o": [
      "To create saved filter expressions that retrieve specific vulnerability data from repositories for analysis or dashboard components",
      "To send API queries to external threat intelligence feeds",
      "To query the Nessus plugin database for information about specific CVEs",
      "To schedule automated vulnerability reports on a recurring basis"
    ],
    "a": "A",
    "e": "Queries in Tenable.sc are saved filter expressions used in vulnerability analysis views. They allow analysts to define specific criteria (severity, plugin, asset, date range, etc.) and save them for reuse in dashboards, reports, or ad-hoc analysis. Queries are the building blocks of Tenable.sc's data exploration capability.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-031",
    "x": [
      "Queries in Tenable.sc are saved filter expressions used in vulnerability analysis views. They allow analysts to define specific criteria (severity, plugin, asset, date range, etc.) and save them for reuse in dashboards, reports, or ad-hoc analysis. Queries are the building blocks of Tenable.sc's data exploration capability.",
      "The source answer key does not select this alternative: “To send API queries to external threat intelligence feeds”. The keyed answer is “To create saved filter expressions that retrieve specific vulnerability data from repositories for analysis or dashboard components”. Source explanation: Queries in Tenable.sc are saved filter expressions used in vulnerability analysis views. They allow analysts to define specific criteria (severity, plugin, asset, date range, etc.) and save them for reuse in dashboards, reports, or ad-hoc analysis. Queries are the building blocks of Tenable.sc's data exploration capability.",
      "The source answer key does not select this alternative: “To query the Nessus plugin database for information about specific CVEs”. The keyed answer is “To create saved filter expressions that retrieve specific vulnerability data from repositories for analysis or dashboard components”. Source explanation: Queries in Tenable.sc are saved filter expressions used in vulnerability analysis views. They allow analysts to define specific criteria (severity, plugin, asset, date range, etc.) and save them for reuse in dashboards, reports, or ad-hoc analysis. Queries are the building blocks of Tenable.sc's data exploration capability.",
      "The source answer key does not select this alternative: “To schedule automated vulnerability reports on a recurring basis”. The keyed answer is “To create saved filter expressions that retrieve specific vulnerability data from repositories for analysis or dashboard components”. Source explanation: Queries in Tenable.sc are saved filter expressions used in vulnerability analysis views. They allow analysts to define specific criteria (severity, plugin, asset, date range, etc.) and save them for reuse in dashboards, reports, or ad-hoc analysis. Queries are the building blocks of Tenable.sc's data exploration capability."
    ]
  },
  {
    "id": "SC-Q032",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "Which network protocol does the Tenable.sc web console use for communication between the administrator's browser and the Tenable.sc server?",
    "o": [
      "SNMP on port 161",
      "SSH on port 22",
      "HTTP on port 8080",
      "HTTPS (TLS-encrypted HTTP on port 443)"
    ],
    "a": "D",
    "e": "The Tenable.sc management console exclusively uses HTTPS (HTTP over TLS encryption) on port 443 for all browser-to-server communication. This ensures all management traffic, including credentials and vulnerability data, is encrypted in transit. HTTP is not supported for the management console.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-032",
    "x": [
      "The source answer key does not select this alternative: “SNMP on port 161”. The keyed answer is “HTTPS (TLS-encrypted HTTP on port 443)”. Source explanation: The Tenable.sc management console exclusively uses HTTPS (HTTP over TLS encryption) on port 443 for all browser-to-server communication. This ensures all management traffic, including credentials and vulnerability data, is encrypted in transit. HTTP is not supported for the management console.",
      "The source answer key does not select this alternative: “SSH on port 22”. The keyed answer is “HTTPS (TLS-encrypted HTTP on port 443)”. Source explanation: The Tenable.sc management console exclusively uses HTTPS (HTTP over TLS encryption) on port 443 for all browser-to-server communication. This ensures all management traffic, including credentials and vulnerability data, is encrypted in transit. HTTP is not supported for the management console.",
      "The source answer key does not select this alternative: “HTTP on port 8080”. The keyed answer is “HTTPS (TLS-encrypted HTTP on port 443)”. Source explanation: The Tenable.sc management console exclusively uses HTTPS (HTTP over TLS encryption) on port 443 for all browser-to-server communication. This ensures all management traffic, including credentials and vulnerability data, is encrypted in transit. HTTP is not supported for the management console.",
      "The Tenable.sc management console exclusively uses HTTPS (HTTP over TLS encryption) on port 443 for all browser-to-server communication. This ensures all management traffic, including credentials and vulnerability data, is encrypted in transit. HTTP is not supported for the management console."
    ]
  },
  {
    "id": "SC-Q033",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "In Tenable.sc, which type of asset list would automatically capture all assets with a specific OS type detected during scanning without requiring manual updates?",
    "o": [
      "Watch List asset list type for OS-specific tracking",
      "Static Asset List imported from an OS inventory spreadsheet",
      "Combination Asset List intersecting all repositories",
      "Dynamic Asset List with an OS-type query filter"
    ],
    "a": "D",
    "e": "A Dynamic Asset List configured with an OS-type query filter (e.g., 'OS contains Windows Server 2012') automatically includes all assets from the repository where the OS detection plugin found a match. As new systems are scanned and OS-detected, they are automatically added to the list without manual intervention.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-033",
    "x": [
      "The source answer key does not select this alternative: “Watch List asset list type for OS-specific tracking”. The keyed answer is “Dynamic Asset List with an OS-type query filter”. Source explanation: A Dynamic Asset List configured with an OS-type query filter (e.g., 'OS contains Windows Server 2012') automatically includes all assets from the repository where the OS detection plugin found a match. As new systems are scanned and OS-detected, they are automatically added to the list without manual intervention.",
      "The source answer key does not select this alternative: “Static Asset List imported from an OS inventory spreadsheet”. The keyed answer is “Dynamic Asset List with an OS-type query filter”. Source explanation: A Dynamic Asset List configured with an OS-type query filter (e.g., 'OS contains Windows Server 2012') automatically includes all assets from the repository where the OS detection plugin found a match. As new systems are scanned and OS-detected, they are automatically added to the list without manual intervention.",
      "The source answer key does not select this alternative: “Combination Asset List intersecting all repositories”. The keyed answer is “Dynamic Asset List with an OS-type query filter”. Source explanation: A Dynamic Asset List configured with an OS-type query filter (e.g., 'OS contains Windows Server 2012') automatically includes all assets from the repository where the OS detection plugin found a match. As new systems are scanned and OS-detected, they are automatically added to the list without manual intervention.",
      "A Dynamic Asset List configured with an OS-type query filter (e.g., 'OS contains Windows Server 2012') automatically includes all assets from the repository where the OS detection plugin found a match. As new systems are scanned and OS-detected, they are automatically added to the list without manual intervention."
    ]
  },
  {
    "id": "SC-Q034",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "What Tenable.sc feature allows an administrator to see which Nessus scanners are currently active and their last check-in time?",
    "o": [
      "The Repository health status page",
      "Resources > Nessus Scanners in the Administration menu",
      "The Organization audit log",
      "The Scan Zone summary dashboard component"
    ],
    "a": "B",
    "e": "The Resources > Nessus Scanners section in the Tenable.sc Administration menu displays all registered Nessus scanners with their current status (enabled/disabled), connectivity status, last check-in time, plugin feed version, and the scan zones they are assigned to. This is the primary view for scanner health monitoring.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-034",
    "x": [
      "The source answer key does not select this alternative: “The Repository health status page”. The keyed answer is “Resources > Nessus Scanners in the Administration menu”. Source explanation: The Resources > Nessus Scanners section in the Tenable.sc Administration menu displays all registered Nessus scanners with their current status (enabled/disabled), connectivity status, last check-in time, plugin feed version, and the scan zones they are assigned to. This is the primary view for scanner health monitoring.",
      "The Resources > Nessus Scanners section in the Tenable.sc Administration menu displays all registered Nessus scanners with their current status (enabled/disabled), connectivity status, last check-in time, plugin feed version, and the scan zones they are assigned to. This is the primary view for scanner health monitoring.",
      "The source answer key does not select this alternative: “The Organization audit log”. The keyed answer is “Resources > Nessus Scanners in the Administration menu”. Source explanation: The Resources > Nessus Scanners section in the Tenable.sc Administration menu displays all registered Nessus scanners with their current status (enabled/disabled), connectivity status, last check-in time, plugin feed version, and the scan zones they are assigned to. This is the primary view for scanner health monitoring.",
      "The source answer key does not select this alternative: “The Scan Zone summary dashboard component”. The keyed answer is “Resources > Nessus Scanners in the Administration menu”. Source explanation: The Resources > Nessus Scanners section in the Tenable.sc Administration menu displays all registered Nessus scanners with their current status (enabled/disabled), connectivity status, last check-in time, plugin feed version, and the scan zones they are assigned to. This is the primary view for scanner health monitoring."
    ]
  },
  {
    "id": "SC-Q035",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "In Tenable.sc, what is the consequence of assigning the same IP range to two different scan zones each with different scanners?",
    "o": [
      "The IP range will be scanned twice simultaneously by both scanners, doubling network load",
      "Tenable.sc will reject the configuration and require unique IP ranges per scan zone",
      "Scans targeting that IP range can use either scanner, providing redundancy and flexibility",
      "Only the scan zone created first will be used; the second assignment is ignored"
    ],
    "a": "C",
    "e": "In Tenable.sc, IP ranges can overlap between scan zones. When a scan targets an IP range covered by multiple scan zones, the system uses load balancing or priority rules to determine which scanner is used for a particular scan. This provides flexibility and scanner redundancy in distributed environments.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-035",
    "x": [
      "The source answer key does not select this alternative: “The IP range will be scanned twice simultaneously by both scanners, doubling network load”. The keyed answer is “Scans targeting that IP range can use either scanner, providing redundancy and flexibility”. Source explanation: In Tenable.sc, IP ranges can overlap between scan zones. When a scan targets an IP range covered by multiple scan zones, the system uses load balancing or priority rules to determine which scanner is used for a particular scan. This provides flexibility and scanner redundancy in distributed environments.",
      "The source answer key does not select this alternative: “Tenable.sc will reject the configuration and require unique IP ranges per scan zone”. The keyed answer is “Scans targeting that IP range can use either scanner, providing redundancy and flexibility”. Source explanation: In Tenable.sc, IP ranges can overlap between scan zones. When a scan targets an IP range covered by multiple scan zones, the system uses load balancing or priority rules to determine which scanner is used for a particular scan. This provides flexibility and scanner redundancy in distributed environments.",
      "In Tenable.sc, IP ranges can overlap between scan zones. When a scan targets an IP range covered by multiple scan zones, the system uses load balancing or priority rules to determine which scanner is used for a particular scan. This provides flexibility and scanner redundancy in distributed environments.",
      "The source answer key does not select this alternative: “Only the scan zone created first will be used; the second assignment is ignored”. The keyed answer is “Scans targeting that IP range can use either scanner, providing redundancy and flexibility”. Source explanation: In Tenable.sc, IP ranges can overlap between scan zones. When a scan targets an IP range covered by multiple scan zones, the system uses load balancing or priority rules to determine which scanner is used for a particular scan. This provides flexibility and scanner redundancy in distributed environments."
    ]
  },
  {
    "id": "SC-Q036",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "What is the 'Trend Days' setting in a Tenable.sc dashboard component?",
    "o": [
      "It sets how frequently the dashboard auto-refreshes vulnerability data",
      "It determines how many days before a vulnerability is considered aged-out",
      "It limits the number of days a report can be scheduled in advance",
      "It defines how many days of historical data to include in the time-series trend chart"
    ],
    "a": "D",
    "e": "The Trend Days setting in a Tenable.sc dashboard trend component defines the lookback window for the time-series chart — for example, setting Trend Days to 30 shows the last 30 days of vulnerability data as a line or bar trend chart. Longer trend windows require more historical data in the repository.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-036",
    "x": [
      "The source answer key does not select this alternative: “It sets how frequently the dashboard auto-refreshes vulnerability data”. The keyed answer is “It defines how many days of historical data to include in the time-series trend chart”. Source explanation: The Trend Days setting in a Tenable.sc dashboard trend component defines the lookback window for the time-series chart — for example, setting Trend Days to 30 shows the last 30 days of vulnerability data as a line or bar trend chart. Longer trend windows require more historical data in the repository.",
      "The source answer key does not select this alternative: “It determines how many days before a vulnerability is considered aged-out”. The keyed answer is “It defines how many days of historical data to include in the time-series trend chart”. Source explanation: The Trend Days setting in a Tenable.sc dashboard trend component defines the lookback window for the time-series chart — for example, setting Trend Days to 30 shows the last 30 days of vulnerability data as a line or bar trend chart. Longer trend windows require more historical data in the repository.",
      "The source answer key does not select this alternative: “It limits the number of days a report can be scheduled in advance”. The keyed answer is “It defines how many days of historical data to include in the time-series trend chart”. Source explanation: The Trend Days setting in a Tenable.sc dashboard trend component defines the lookback window for the time-series chart — for example, setting Trend Days to 30 shows the last 30 days of vulnerability data as a line or bar trend chart. Longer trend windows require more historical data in the repository.",
      "The Trend Days setting in a Tenable.sc dashboard trend component defines the lookback window for the time-series chart — for example, setting Trend Days to 30 shows the last 30 days of vulnerability data as a line or bar trend chart. Longer trend windows require more historical data in the repository."
    ]
  },
  {
    "id": "SC-Q037",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "Which Tenable.sc feature allows scheduled automatic export of a vulnerability report to a shared network location or email recipient?",
    "o": [
      "Scan results auto-export via webhook",
      "Dashboard snapshot exports on a cron schedule",
      "Repository synchronization with email notification",
      "Report scheduling with distribution settings (email or network path)"
    ],
    "a": "D",
    "e": "Tenable.sc reports can be scheduled to run automatically at defined intervals and distributed via email (as PDF/CSV attachment) or exported to a configured network file path. This enables automated weekly/monthly reporting to compliance stakeholders without manual intervention.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-037",
    "x": [
      "The source answer key does not select this alternative: “Scan results auto-export via webhook”. The keyed answer is “Report scheduling with distribution settings (email or network path)”. Source explanation: Tenable.sc reports can be scheduled to run automatically at defined intervals and distributed via email (as PDF/CSV attachment) or exported to a configured network file path. This enables automated weekly/monthly reporting to compliance stakeholders without manual intervention.",
      "The source answer key does not select this alternative: “Dashboard snapshot exports on a cron schedule”. The keyed answer is “Report scheduling with distribution settings (email or network path)”. Source explanation: Tenable.sc reports can be scheduled to run automatically at defined intervals and distributed via email (as PDF/CSV attachment) or exported to a configured network file path. This enables automated weekly/monthly reporting to compliance stakeholders without manual intervention.",
      "The source answer key does not select this alternative: “Repository synchronization with email notification”. The keyed answer is “Report scheduling with distribution settings (email or network path)”. Source explanation: Tenable.sc reports can be scheduled to run automatically at defined intervals and distributed via email (as PDF/CSV attachment) or exported to a configured network file path. This enables automated weekly/monthly reporting to compliance stakeholders without manual intervention.",
      "Tenable.sc reports can be scheduled to run automatically at defined intervals and distributed via email (as PDF/CSV attachment) or exported to a configured network file path. This enables automated weekly/monthly reporting to compliance stakeholders without manual intervention."
    ]
  },
  {
    "id": "SC-Q038",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "In Tenable.sc, which scan type is appropriate for detecting vulnerabilities in web applications running on internal servers?",
    "o": [
      "Compliance scan using a CIS web server benchmark audit file",
      "Web Application Scanning using a scan policy with web application test plugins enabled",
      "Discovery Scan targeting the web server IP addresses",
      "Basic Network Scan with port 443 as the only scan target"
    ],
    "a": "B",
    "e": "Tenable.sc supports web application scanning through scan policies with web application test plugins enabled (or the dedicated Web Application Tests scan template). These plugins test for OWASP-style vulnerabilities (SQL injection, XSS, etc.) on web applications, distinct from infrastructure-level network vulnerability scanning.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-038",
    "x": [
      "The source answer key does not select this alternative: “Compliance scan using a CIS web server benchmark audit file”. The keyed answer is “Web Application Scanning using a scan policy with web application test plugins enabled”. Source explanation: Tenable.sc supports web application scanning through scan policies with web application test plugins enabled (or the dedicated Web Application Tests scan template). These plugins test for OWASP-style vulnerabilities (SQL injection, XSS, etc.) on web applications, distinct from infrastructure-level network vulnerability scanning.",
      "Tenable.sc supports web application scanning through scan policies with web application test plugins enabled (or the dedicated Web Application Tests scan template). These plugins test for OWASP-style vulnerabilities (SQL injection, XSS, etc.) on web applications, distinct from infrastructure-level network vulnerability scanning.",
      "The source answer key does not select this alternative: “Discovery Scan targeting the web server IP addresses”. The keyed answer is “Web Application Scanning using a scan policy with web application test plugins enabled”. Source explanation: Tenable.sc supports web application scanning through scan policies with web application test plugins enabled (or the dedicated Web Application Tests scan template). These plugins test for OWASP-style vulnerabilities (SQL injection, XSS, etc.) on web applications, distinct from infrastructure-level network vulnerability scanning.",
      "The source answer key does not select this alternative: “Basic Network Scan with port 443 as the only scan target”. The keyed answer is “Web Application Scanning using a scan policy with web application test plugins enabled”. Source explanation: Tenable.sc supports web application scanning through scan policies with web application test plugins enabled (or the dedicated Web Application Tests scan template). These plugins test for OWASP-style vulnerabilities (SQL injection, XSS, etc.) on web applications, distinct from infrastructure-level network vulnerability scanning."
    ]
  },
  {
    "id": "SC-Q039",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "A Tenable.sc repository is configured with IPv4 data. An analyst needs to also track vulnerabilities for IPv6 hosts in the same environment. What should be done?",
    "o": [
      "Convert the IPv4 repository to Universal by changing the repository type setting",
      "Configure the Nessus scanner to translate IPv6 addresses to IPv4 before storage",
      "Create a separate IPv6 repository and configure scans to store IPv6 results in it, or use a Universal repository for both",
      "Create a static asset list for the IPv6 hosts and associate it with the IPv4 repository"
    ],
    "a": "C",
    "e": "IPv4 repositories cannot store IPv6 data. The correct approach is either creating a dedicated IPv6 repository for IPv6 scan results, or using a Universal repository that can store both IPv4 and IPv6 (and agent) data in a single repository. Existing IPv4 repository types cannot be changed after creation.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-039",
    "x": [
      "The source answer key does not select this alternative: “Convert the IPv4 repository to Universal by changing the repository type setting”. The keyed answer is “Create a separate IPv6 repository and configure scans to store IPv6 results in it, or use a Universal repository for both”. Source explanation: IPv4 repositories cannot store IPv6 data. The correct approach is either creating a dedicated IPv6 repository for IPv6 scan results, or using a Universal repository that can store both IPv4 and IPv6 (and agent) data in a single repository. Existing IPv4 repository types cannot be changed after creation.",
      "The source answer key does not select this alternative: “Configure the Nessus scanner to translate IPv6 addresses to IPv4 before storage”. The keyed answer is “Create a separate IPv6 repository and configure scans to store IPv6 results in it, or use a Universal repository for both”. Source explanation: IPv4 repositories cannot store IPv6 data. The correct approach is either creating a dedicated IPv6 repository for IPv6 scan results, or using a Universal repository that can store both IPv4 and IPv6 (and agent) data in a single repository. Existing IPv4 repository types cannot be changed after creation.",
      "IPv4 repositories cannot store IPv6 data. The correct approach is either creating a dedicated IPv6 repository for IPv6 scan results, or using a Universal repository that can store both IPv4 and IPv6 (and agent) data in a single repository. Existing IPv4 repository types cannot be changed after creation.",
      "The source answer key does not select this alternative: “Create a static asset list for the IPv6 hosts and associate it with the IPv4 repository”. The keyed answer is “Create a separate IPv6 repository and configure scans to store IPv6 results in it, or use a Universal repository for both”. Source explanation: IPv4 repositories cannot store IPv6 data. The correct approach is either creating a dedicated IPv6 repository for IPv6 scan results, or using a Universal repository that can store both IPv4 and IPv6 (and agent) data in a single repository. Existing IPv4 repository types cannot be changed after creation."
    ]
  },
  {
    "id": "SC-Q040",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "What is the Tenable.sc 'SecurityCenter Director' (or 'Tenable.sc Director') used for?",
    "o": [
      "To aggregate Tenable.sc data with Tenable.io data for hybrid deployments",
      "To provide a single management pane across multiple distributed Tenable.sc consoles in a hierarchical deployment",
      "To manage Nessus scanner firmware updates across all paired scanners",
      "To serve as an on-premises replacement for Tenable.io for organizations requiring local data storage"
    ],
    "a": "B",
    "e": "Tenable.sc Director (formerly SecurityCenter Director) is a hierarchical management layer that provides a consolidated view and management capability across multiple distributed Tenable.sc child instances. It enables centralized reporting, policy management, and visibility across geographically distributed or multi-tenant Tenable.sc deployments.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-040",
    "x": [
      "The source answer key does not select this alternative: “To aggregate Tenable.sc data with Tenable.io data for hybrid deployments”. The keyed answer is “To provide a single management pane across multiple distributed Tenable.sc consoles in a hierarchical deployment”. Source explanation: Tenable.sc Director (formerly SecurityCenter Director) is a hierarchical management layer that provides a consolidated view and management capability across multiple distributed Tenable.sc child instances. It enables centralized reporting, policy management, and visibility across geographically distributed or multi-tenant Tenable.sc deployments.",
      "Tenable.sc Director (formerly SecurityCenter Director) is a hierarchical management layer that provides a consolidated view and management capability across multiple distributed Tenable.sc child instances. It enables centralized reporting, policy management, and visibility across geographically distributed or multi-tenant Tenable.sc deployments.",
      "The source answer key does not select this alternative: “To manage Nessus scanner firmware updates across all paired scanners”. The keyed answer is “To provide a single management pane across multiple distributed Tenable.sc consoles in a hierarchical deployment”. Source explanation: Tenable.sc Director (formerly SecurityCenter Director) is a hierarchical management layer that provides a consolidated view and management capability across multiple distributed Tenable.sc child instances. It enables centralized reporting, policy management, and visibility across geographically distributed or multi-tenant Tenable.sc deployments.",
      "The source answer key does not select this alternative: “To serve as an on-premises replacement for Tenable.io for organizations requiring local data storage”. The keyed answer is “To provide a single management pane across multiple distributed Tenable.sc consoles in a hierarchical deployment”. Source explanation: Tenable.sc Director (formerly SecurityCenter Director) is a hierarchical management layer that provides a consolidated view and management capability across multiple distributed Tenable.sc child instances. It enables centralized reporting, policy management, and visibility across geographically distributed or multi-tenant Tenable.sc deployments."
    ]
  },
  {
    "id": "SC-Q041",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "In Tenable.sc, which element must be configured before a Security Analyst can run their first active scan?",
    "o": [
      "A Universal repository containing existing historical scan data",
      "At minimum one active scan policy, one scan zone with an assigned scanner, and target assets defined",
      "An Auditor role account to review results before the analyst can run scans",
      "An offsite repository for backup of scan results"
    ],
    "a": "B",
    "e": "Before running an active scan in Tenable.sc, the minimum requirements are: a scan policy defining what to test, a scan zone with at least one paired/active Nessus scanner, and defined scan targets (either IP ranges or asset lists). Without all three, scan creation will fail or produce no results.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-041",
    "x": [
      "The source answer key does not select this alternative: “A Universal repository containing existing historical scan data”. The keyed answer is “At minimum one active scan policy, one scan zone with an assigned scanner, and target assets defined”. Source explanation: Before running an active scan in Tenable.sc, the minimum requirements are: a scan policy defining what to test, a scan zone with at least one paired/active Nessus scanner, and defined scan targets (either IP ranges or asset lists). Without all three, scan creation will fail or produce no results.",
      "Before running an active scan in Tenable.sc, the minimum requirements are: a scan policy defining what to test, a scan zone with at least one paired/active Nessus scanner, and defined scan targets (either IP ranges or asset lists). Without all three, scan creation will fail or produce no results.",
      "The source answer key does not select this alternative: “An Auditor role account to review results before the analyst can run scans”. The keyed answer is “At minimum one active scan policy, one scan zone with an assigned scanner, and target assets defined”. Source explanation: Before running an active scan in Tenable.sc, the minimum requirements are: a scan policy defining what to test, a scan zone with at least one paired/active Nessus scanner, and defined scan targets (either IP ranges or asset lists). Without all three, scan creation will fail or produce no results.",
      "The source answer key does not select this alternative: “An offsite repository for backup of scan results”. The keyed answer is “At minimum one active scan policy, one scan zone with an assigned scanner, and target assets defined”. Source explanation: Before running an active scan in Tenable.sc, the minimum requirements are: a scan policy defining what to test, a scan zone with at least one paired/active Nessus scanner, and defined scan targets (either IP ranges or asset lists). Without all three, scan creation will fail or produce no results."
    ]
  },
  {
    "id": "SC-Q042",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "Which Tenable.sc feature enables displaying vulnerability data from multiple repositories in a single dashboard view?",
    "o": [
      "Dashboard components can be configured to query across multiple repositories simultaneously",
      "The offsite sync feature merges repository data into a single consolidated repository",
      "Only one repository can be displayed per dashboard; multiple dashboards are required",
      "Repository federation mode enables transparent cross-repository queries"
    ],
    "a": "A",
    "e": "Tenable.sc dashboard components can be configured to include data from multiple repositories by selecting more than one repository as a data source. This allows a single dashboard to present a comprehensive view of vulnerability data across different network segments or organizations without requiring data to be merged into one repository.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-042",
    "x": [
      "Tenable.sc dashboard components can be configured to include data from multiple repositories by selecting more than one repository as a data source. This allows a single dashboard to present a comprehensive view of vulnerability data across different network segments or organizations without requiring data to be merged into one repository.",
      "The source answer key does not select this alternative: “The offsite sync feature merges repository data into a single consolidated repository”. The keyed answer is “Dashboard components can be configured to query across multiple repositories simultaneously”. Source explanation: Tenable.sc dashboard components can be configured to include data from multiple repositories by selecting more than one repository as a data source. This allows a single dashboard to present a comprehensive view of vulnerability data across different network segments or organizations without requiring data to be merged into one repository.",
      "The source answer key does not select this alternative: “Only one repository can be displayed per dashboard; multiple dashboards are required”. The keyed answer is “Dashboard components can be configured to query across multiple repositories simultaneously”. Source explanation: Tenable.sc dashboard components can be configured to include data from multiple repositories by selecting more than one repository as a data source. This allows a single dashboard to present a comprehensive view of vulnerability data across different network segments or organizations without requiring data to be merged into one repository.",
      "The source answer key does not select this alternative: “Repository federation mode enables transparent cross-repository queries”. The keyed answer is “Dashboard components can be configured to query across multiple repositories simultaneously”. Source explanation: Tenable.sc dashboard components can be configured to include data from multiple repositories by selecting more than one repository as a data source. This allows a single dashboard to present a comprehensive view of vulnerability data across different network segments or organizations without requiring data to be merged into one repository."
    ]
  },
  {
    "id": "SC-Q043",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "In Tenable.sc, how are Nessus Agent scan results stored differently from traditional network scan results?",
    "o": [
      "Agent results are stored only in cloud storage and not locally on Tenable.sc",
      "Agent results must be stored in an Agent repository or Universal repository; they cannot be stored in IPv4/IPv6 repositories",
      "Agent results are stored in the same IPv4 repository as network scan results without differentiation",
      "Agent results are automatically discarded after 24 hours to comply with endpoint privacy regulations"
    ],
    "a": "B",
    "e": "Nessus Agent results in Tenable.sc must be directed to either an Agent repository (exclusively for agent data) or a Universal repository (which accepts both agent and network scan data). Traditional IPv4/IPv6 repositories do not accept Nessus Agent data, so deployments using agents require the appropriate repository type.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-043",
    "x": [
      "The source answer key does not select this alternative: “Agent results are stored only in cloud storage and not locally on Tenable.sc”. The keyed answer is “Agent results must be stored in an Agent repository or Universal repository; they cannot be stored in IPv4/IPv6 repositories”. Source explanation: Nessus Agent results in Tenable.sc must be directed to either an Agent repository (exclusively for agent data) or a Universal repository (which accepts both agent and network scan data). Traditional IPv4/IPv6 repositories do not accept Nessus Agent data, so deployments using agents require the appropriate repository type.",
      "Nessus Agent results in Tenable.sc must be directed to either an Agent repository (exclusively for agent data) or a Universal repository (which accepts both agent and network scan data). Traditional IPv4/IPv6 repositories do not accept Nessus Agent data, so deployments using agents require the appropriate repository type.",
      "The source answer key does not select this alternative: “Agent results are stored in the same IPv4 repository as network scan results without differentiation”. The keyed answer is “Agent results must be stored in an Agent repository or Universal repository; they cannot be stored in IPv4/IPv6 repositories”. Source explanation: Nessus Agent results in Tenable.sc must be directed to either an Agent repository (exclusively for agent data) or a Universal repository (which accepts both agent and network scan data). Traditional IPv4/IPv6 repositories do not accept Nessus Agent data, so deployments using agents require the appropriate repository type.",
      "The source answer key does not select this alternative: “Agent results are automatically discarded after 24 hours to comply with endpoint privacy regulations”. The keyed answer is “Agent results must be stored in an Agent repository or Universal repository; they cannot be stored in IPv4/IPv6 repositories”. Source explanation: Nessus Agent results in Tenable.sc must be directed to either an Agent repository (exclusively for agent data) or a Universal repository (which accepts both agent and network scan data). Traditional IPv4/IPv6 repositories do not accept Nessus Agent data, so deployments using agents require the appropriate repository type."
    ]
  },
  {
    "id": "SC-Q044",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "What is the best way to verify that a Tenable.sc credentialed scan successfully authenticated to Windows target hosts?",
    "o": [
      "Check plugin 19506 (Nessus Scan Information) output for the scanned host to confirm credentials were used",
      "Run a separate ping scan to confirm the host was reachable during the scan window",
      "Review the scan progress log for '200 OK' authentication responses",
      "Check the repository for WMI-specific plugin results on the target"
    ],
    "a": "A",
    "e": "Plugin 19506 is present in every Nessus scan result and contains a field explicitly stating whether credentials were provided and whether they were used successfully (e.g., 'Credentialed checks: yes'). Checking this plugin output per host is the standard method for confirming credentialed scan success in Tenable.sc.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-044",
    "x": [
      "Plugin 19506 is present in every Nessus scan result and contains a field explicitly stating whether credentials were provided and whether they were used successfully (e.g., 'Credentialed checks: yes'). Checking this plugin output per host is the standard method for confirming credentialed scan success in Tenable.sc.",
      "The source answer key does not select this alternative: “Run a separate ping scan to confirm the host was reachable during the scan window”. The keyed answer is “Check plugin 19506 (Nessus Scan Information) output for the scanned host to confirm credentials were used”. Source explanation: Plugin 19506 is present in every Nessus scan result and contains a field explicitly stating whether credentials were provided and whether they were used successfully (e.g., 'Credentialed checks: yes'). Checking this plugin output per host is the standard method for confirming credentialed scan success in Tenable.sc.",
      "The source answer key does not select this alternative: “Review the scan progress log for '200 OK' authentication responses”. The keyed answer is “Check plugin 19506 (Nessus Scan Information) output for the scanned host to confirm credentials were used”. Source explanation: Plugin 19506 is present in every Nessus scan result and contains a field explicitly stating whether credentials were provided and whether they were used successfully (e.g., 'Credentialed checks: yes'). Checking this plugin output per host is the standard method for confirming credentialed scan success in Tenable.sc.",
      "The source answer key does not select this alternative: “Check the repository for WMI-specific plugin results on the target”. The keyed answer is “Check plugin 19506 (Nessus Scan Information) output for the scanned host to confirm credentials were used”. Source explanation: Plugin 19506 is present in every Nessus scan result and contains a field explicitly stating whether credentials were provided and whether they were used successfully (e.g., 'Credentialed checks: yes'). Checking this plugin output per host is the standard method for confirming credentialed scan success in Tenable.sc."
    ]
  },
  {
    "id": "SC-Q045",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "A Tenable.sc dashboard is being built to show the top 10 most vulnerable servers ranked by critical vulnerability count. Which component type should be used?",
    "o": [
      "Bar chart component showing severity distribution across all assets",
      "Table component configured with a vulnerability data source sorted by Critical severity count, limit 10",
      "Pie chart component with severity segmentation, limited to 10 slices",
      "Text component with embedded query results from the vulnerability analysis"
    ],
    "a": "B",
    "e": "A Table component in Tenable.sc dashboards can be configured to display assets (rows) with their Critical vulnerability counts (columns), sorted in descending order and limited to the top 10 records. This provides a clear, ranked list of the most exposed servers for prioritizing investigation and remediation.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-045",
    "x": [
      "The source answer key does not select this alternative: “Bar chart component showing severity distribution across all assets”. The keyed answer is “Table component configured with a vulnerability data source sorted by Critical severity count, limit 10”. Source explanation: A Table component in Tenable.sc dashboards can be configured to display assets (rows) with their Critical vulnerability counts (columns), sorted in descending order and limited to the top 10 records. This provides a clear, ranked list of the most exposed servers for prioritizing investigation and remediation.",
      "A Table component in Tenable.sc dashboards can be configured to display assets (rows) with their Critical vulnerability counts (columns), sorted in descending order and limited to the top 10 records. This provides a clear, ranked list of the most exposed servers for prioritizing investigation and remediation.",
      "The source answer key does not select this alternative: “Pie chart component with severity segmentation, limited to 10 slices”. The keyed answer is “Table component configured with a vulnerability data source sorted by Critical severity count, limit 10”. Source explanation: A Table component in Tenable.sc dashboards can be configured to display assets (rows) with their Critical vulnerability counts (columns), sorted in descending order and limited to the top 10 records. This provides a clear, ranked list of the most exposed servers for prioritizing investigation and remediation.",
      "The source answer key does not select this alternative: “Text component with embedded query results from the vulnerability analysis”. The keyed answer is “Table component configured with a vulnerability data source sorted by Critical severity count, limit 10”. Source explanation: A Table component in Tenable.sc dashboards can be configured to display assets (rows) with their Critical vulnerability counts (columns), sorted in descending order and limited to the top 10 records. This provides a clear, ranked list of the most exposed servers for prioritizing investigation and remediation."
    ]
  },
  {
    "id": "SC-Q046",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In Tenable.sc, which license model determines how many IPs can be actively scanned?",
    "o": [
      "Per-scanner licensing where each paired Nessus instance adds a fixed number of scannable IPs",
      "IP-based licensing where the license specifies the maximum number of concurrent unique IP addresses that can be scanned",
      "Unlimited IP scanning is included; licensing only limits the number of repositories",
      "Per-user licensing where each Security Analyst account adds scan capacity"
    ],
    "a": "B",
    "e": "Tenable.sc licenses are IP-based, specifying the maximum number of unique IP addresses that can be included in active scans. This is distinct from the number of discovered assets in dashboards; only actively scanned IPs count against the license. Exceeding the license limit may require a license upgrade.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-046",
    "x": [
      "The source answer key does not select this alternative: “Per-scanner licensing where each paired Nessus instance adds a fixed number of scannable IPs”. The keyed answer is “IP-based licensing where the license specifies the maximum number of concurrent unique IP addresses that can be scanned”. Source explanation: Tenable.sc licenses are IP-based, specifying the maximum number of unique IP addresses that can be included in active scans. This is distinct from the number of discovered assets in dashboards; only actively scanned IPs count against the license. Exceeding the license limit may require a license upgrade.",
      "Tenable.sc licenses are IP-based, specifying the maximum number of unique IP addresses that can be included in active scans. This is distinct from the number of discovered assets in dashboards; only actively scanned IPs count against the license. Exceeding the license limit may require a license upgrade.",
      "The source answer key does not select this alternative: “Unlimited IP scanning is included; licensing only limits the number of repositories”. The keyed answer is “IP-based licensing where the license specifies the maximum number of concurrent unique IP addresses that can be scanned”. Source explanation: Tenable.sc licenses are IP-based, specifying the maximum number of unique IP addresses that can be included in active scans. This is distinct from the number of discovered assets in dashboards; only actively scanned IPs count against the license. Exceeding the license limit may require a license upgrade.",
      "The source answer key does not select this alternative: “Per-user licensing where each Security Analyst account adds scan capacity”. The keyed answer is “IP-based licensing where the license specifies the maximum number of concurrent unique IP addresses that can be scanned”. Source explanation: Tenable.sc licenses are IP-based, specifying the maximum number of unique IP addresses that can be included in active scans. This is distinct from the number of discovered assets in dashboards; only actively scanned IPs count against the license. Exceeding the license limit may require a license upgrade."
    ]
  },
  {
    "id": "SC-Q047",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "What is the benefit of using a Tenable.sc 'Import' scan policy versus creating a new scan policy from scratch?",
    "o": [
      "It imports vulnerability findings directly into the repository without running a new scan",
      "It creates a read-only policy copy that cannot be accidentally modified",
      "It pulls the latest CIS benchmark audit files automatically from the Tenable policy store",
      "It allows reusing a Nessus scan policy (.nessus file) exported from another Nessus or Tenable.sc instance, saving configuration time"
    ],
    "a": "D",
    "e": "Nessus scan policies can be exported as .nessus XML files and imported into Tenable.sc. This enables administrators to reuse standardized scan configurations across multiple Tenable.sc instances, distribute approved scan policies to teams, or restore a previously configured policy, rather than manually recreating all settings.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-047",
    "x": [
      "The source answer key does not select this alternative: “It imports vulnerability findings directly into the repository without running a new scan”. The keyed answer is “It allows reusing a Nessus scan policy (.nessus file) exported from another Nessus or Tenable.sc instance, saving configuration time”. Source explanation: Nessus scan policies can be exported as .nessus XML files and imported into Tenable.sc. This enables administrators to reuse standardized scan configurations across multiple Tenable.sc instances, distribute approved scan policies to teams, or restore a previously configured policy, rather than manually recreating all settings.",
      "The source answer key does not select this alternative: “It creates a read-only policy copy that cannot be accidentally modified”. The keyed answer is “It allows reusing a Nessus scan policy (.nessus file) exported from another Nessus or Tenable.sc instance, saving configuration time”. Source explanation: Nessus scan policies can be exported as .nessus XML files and imported into Tenable.sc. This enables administrators to reuse standardized scan configurations across multiple Tenable.sc instances, distribute approved scan policies to teams, or restore a previously configured policy, rather than manually recreating all settings.",
      "The source answer key does not select this alternative: “It pulls the latest CIS benchmark audit files automatically from the Tenable policy store”. The keyed answer is “It allows reusing a Nessus scan policy (.nessus file) exported from another Nessus or Tenable.sc instance, saving configuration time”. Source explanation: Nessus scan policies can be exported as .nessus XML files and imported into Tenable.sc. This enables administrators to reuse standardized scan configurations across multiple Tenable.sc instances, distribute approved scan policies to teams, or restore a previously configured policy, rather than manually recreating all settings.",
      "Nessus scan policies can be exported as .nessus XML files and imported into Tenable.sc. This enables administrators to reuse standardized scan configurations across multiple Tenable.sc instances, distribute approved scan policies to teams, or restore a previously configured policy, rather than manually recreating all settings."
    ]
  },
  {
    "id": "SC-Q048",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "In a Tenable.sc compliance scan, what does a 'WARNING' result (vs. PASSED or FAILED) indicate?",
    "o": [
      "The compliance check requires an administrative approval before it can be marked passed",
      "The audit check could not definitively determine pass or fail — typically due to a configuration that partially meets the requirement or requires human judgment",
      "The target host was unreachable during the compliance check",
      "The vulnerability associated with the compliance check has been patched but the configuration still needs review"
    ],
    "a": "B",
    "e": "A WARNING result in Tenable.sc compliance scanning indicates the check produced a result that requires interpretation or is in a borderline state. This can occur when a configuration partially meets the benchmark requirement, when the check requires context that automated scanning cannot determine, or when the audit file logic produces an indeterminate outcome.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-048",
    "x": [
      "The source answer key does not select this alternative: “The compliance check requires an administrative approval before it can be marked passed”. The keyed answer is “The audit check could not definitively determine pass or fail — typically due to a configuration that partially meets the requirement or requires human judgment”. Source explanation: A WARNING result in Tenable.sc compliance scanning indicates the check produced a result that requires interpretation or is in a borderline state. This can occur when a configuration partially meets the benchmark requirement, when the check requires context that automated scanning cannot determine, or when the audit file logic produces an indeterminate outcome.",
      "A WARNING result in Tenable.sc compliance scanning indicates the check produced a result that requires interpretation or is in a borderline state. This can occur when a configuration partially meets the benchmark requirement, when the check requires context that automated scanning cannot determine, or when the audit file logic produces an indeterminate outcome.",
      "The source answer key does not select this alternative: “The target host was unreachable during the compliance check”. The keyed answer is “The audit check could not definitively determine pass or fail — typically due to a configuration that partially meets the requirement or requires human judgment”. Source explanation: A WARNING result in Tenable.sc compliance scanning indicates the check produced a result that requires interpretation or is in a borderline state. This can occur when a configuration partially meets the benchmark requirement, when the check requires context that automated scanning cannot determine, or when the audit file logic produces an indeterminate outcome.",
      "The source answer key does not select this alternative: “The vulnerability associated with the compliance check has been patched but the configuration still needs review”. The keyed answer is “The audit check could not definitively determine pass or fail — typically due to a configuration that partially meets the requirement or requires human judgment”. Source explanation: A WARNING result in Tenable.sc compliance scanning indicates the check produced a result that requires interpretation or is in a borderline state. This can occur when a configuration partially meets the benchmark requirement, when the check requires context that automated scanning cannot determine, or when the audit file logic produces an indeterminate outcome."
    ]
  },
  {
    "id": "SC-Q049",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "Which Tenable.sc feature enables tracking vulnerability data from both Nessus Agents and network scans for the same asset in a unified view?",
    "o": [
      "Two separate repositories displayed side-by-side in a split-screen dashboard",
      "A query that merges agent and network results at query execution time",
      "A combined scan policy that runs both agent and network checks simultaneously",
      "Universal Repository that accepts both agent and network scan data, combined with IP normalization"
    ],
    "a": "D",
    "e": "A Universal Repository can store both Nessus Agent scan results and traditional network scan results for the same asset. When combined with IP normalization, Tenable.sc can associate agent data and network data from the same IP address into a single unified asset view, providing the most comprehensive vulnerability picture.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-049",
    "x": [
      "The source answer key does not select this alternative: “Two separate repositories displayed side-by-side in a split-screen dashboard”. The keyed answer is “Universal Repository that accepts both agent and network scan data, combined with IP normalization”. Source explanation: A Universal Repository can store both Nessus Agent scan results and traditional network scan results for the same asset. When combined with IP normalization, Tenable.sc can associate agent data and network data from the same IP address into a single unified asset view, providing the most comprehensive vulnerability picture.",
      "The source answer key does not select this alternative: “A query that merges agent and network results at query execution time”. The keyed answer is “Universal Repository that accepts both agent and network scan data, combined with IP normalization”. Source explanation: A Universal Repository can store both Nessus Agent scan results and traditional network scan results for the same asset. When combined with IP normalization, Tenable.sc can associate agent data and network data from the same IP address into a single unified asset view, providing the most comprehensive vulnerability picture.",
      "The source answer key does not select this alternative: “A combined scan policy that runs both agent and network checks simultaneously”. The keyed answer is “Universal Repository that accepts both agent and network scan data, combined with IP normalization”. Source explanation: A Universal Repository can store both Nessus Agent scan results and traditional network scan results for the same asset. When combined with IP normalization, Tenable.sc can associate agent data and network data from the same IP address into a single unified asset view, providing the most comprehensive vulnerability picture.",
      "A Universal Repository can store both Nessus Agent scan results and traditional network scan results for the same asset. When combined with IP normalization, Tenable.sc can associate agent data and network data from the same IP address into a single unified asset view, providing the most comprehensive vulnerability picture."
    ]
  },
  {
    "id": "SC-Q050",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In Tenable.sc, which port must be open between a Nessus scanner and the Tenable.sc server for scanner management communication?",
    "o": [
      "TCP 8834",
      "TCP 22",
      "TCP 443",
      "UDP 161"
    ],
    "a": "A",
    "e": "Nessus scanners communicate with the Tenable.sc server over TCP port 8834. The Tenable.sc server initiates connections to paired Nessus scanners on this port to control scans, retrieve results, and update plugin feeds. Firewalls between Tenable.sc and its scanners must allow outbound connections from Tenable.sc to port 8834 on each scanner.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-050",
    "x": [
      "Nessus scanners communicate with the Tenable.sc server over TCP port 8834. The Tenable.sc server initiates connections to paired Nessus scanners on this port to control scans, retrieve results, and update plugin feeds. Firewalls between Tenable.sc and its scanners must allow outbound connections from Tenable.sc to port 8834 on each scanner.",
      "The source answer key does not select this alternative: “TCP 22”. The keyed answer is “TCP 8834”. Source explanation: Nessus scanners communicate with the Tenable.sc server over TCP port 8834. The Tenable.sc server initiates connections to paired Nessus scanners on this port to control scans, retrieve results, and update plugin feeds. Firewalls between Tenable.sc and its scanners must allow outbound connections from Tenable.sc to port 8834 on each scanner.",
      "The source answer key does not select this alternative: “TCP 443”. The keyed answer is “TCP 8834”. Source explanation: Nessus scanners communicate with the Tenable.sc server over TCP port 8834. The Tenable.sc server initiates connections to paired Nessus scanners on this port to control scans, retrieve results, and update plugin feeds. Firewalls between Tenable.sc and its scanners must allow outbound connections from Tenable.sc to port 8834 on each scanner.",
      "The source answer key does not select this alternative: “UDP 161”. The keyed answer is “TCP 8834”. Source explanation: Nessus scanners communicate with the Tenable.sc server over TCP port 8834. The Tenable.sc server initiates connections to paired Nessus scanners on this port to control scans, retrieve results, and update plugin feeds. Firewalls between Tenable.sc and its scanners must allow outbound connections from Tenable.sc to port 8834 on each scanner."
    ]
  },
  {
    "id": "SC-Q051",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "What does 'Cumulative' vs 'Mitigated' mean in the context of Tenable.sc vulnerability views?",
    "o": [
      "Cumulative includes all historical vulnerability data; Mitigated shows only new findings from the last scan",
      "Cumulative applies to Critical and High vulnerabilities; Mitigated applies to Medium and Low",
      "Cumulative includes all organizations' data; Mitigated is filtered to a single organization",
      "Cumulative shows all currently active vulnerabilities; Mitigated shows vulnerabilities that were previously detected but are no longer present in the most recent scan"
    ],
    "a": "D",
    "e": "In Tenable.sc, the Cumulative view shows vulnerabilities currently present on scanned assets (active findings). The Mitigated view shows vulnerabilities that were detected in previous scans but were NOT found in the most recent scan of the same asset — indicating they have been remediated, patched, or the affected service removed.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-051",
    "x": [
      "The source answer key does not select this alternative: “Cumulative includes all historical vulnerability data; Mitigated shows only new findings from the last scan”. The keyed answer is “Cumulative shows all currently active vulnerabilities; Mitigated shows vulnerabilities that were previously detected but are no longer present in the most recent scan”. Source explanation: In Tenable.sc, the Cumulative view shows vulnerabilities currently present on scanned assets (active findings). The Mitigated view shows vulnerabilities that were detected in previous scans but were NOT found in the most recent scan of the same asset — indicating they have been remediated, patched, or the affected service removed.",
      "The source answer key does not select this alternative: “Cumulative applies to Critical and High vulnerabilities; Mitigated applies to Medium and Low”. The keyed answer is “Cumulative shows all currently active vulnerabilities; Mitigated shows vulnerabilities that were previously detected but are no longer present in the most recent scan”. Source explanation: In Tenable.sc, the Cumulative view shows vulnerabilities currently present on scanned assets (active findings). The Mitigated view shows vulnerabilities that were detected in previous scans but were NOT found in the most recent scan of the same asset — indicating they have been remediated, patched, or the affected service removed.",
      "The source answer key does not select this alternative: “Cumulative includes all organizations' data; Mitigated is filtered to a single organization”. The keyed answer is “Cumulative shows all currently active vulnerabilities; Mitigated shows vulnerabilities that were previously detected but are no longer present in the most recent scan”. Source explanation: In Tenable.sc, the Cumulative view shows vulnerabilities currently present on scanned assets (active findings). The Mitigated view shows vulnerabilities that were detected in previous scans but were NOT found in the most recent scan of the same asset — indicating they have been remediated, patched, or the affected service removed.",
      "In Tenable.sc, the Cumulative view shows vulnerabilities currently present on scanned assets (active findings). The Mitigated view shows vulnerabilities that were detected in previous scans but were NOT found in the most recent scan of the same asset — indicating they have been remediated, patched, or the affected service removed."
    ]
  },
  {
    "id": "SC-Q052",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "A Tenable.sc administrator needs to ensure the Nessus plugin feed is up to date on all paired scanners. What is the correct update mechanism?",
    "o": [
      "Tenable.sc pushes plugin updates to paired scanners automatically when it downloads new feed updates",
      "Each Nessus scanner must be manually updated by logging into its individual web console",
      "Plugin updates require a Tenable.sc reboot to be distributed to scanners",
      "Scanners update plugins independently from Tenable.com without Tenable.sc involvement"
    ],
    "a": "A",
    "e": "When Tenable.sc downloads updated plugin feeds from Tenable's servers, it automatically distributes the update to all paired Nessus scanners. Administrators do not need to log into each scanner individually; the centralized feed management in Tenable.sc handles plugin distribution as part of its scanner management role.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-052",
    "x": [
      "When Tenable.sc downloads updated plugin feeds from Tenable's servers, it automatically distributes the update to all paired Nessus scanners. Administrators do not need to log into each scanner individually; the centralized feed management in Tenable.sc handles plugin distribution as part of its scanner management role.",
      "The source answer key does not select this alternative: “Each Nessus scanner must be manually updated by logging into its individual web console”. The keyed answer is “Tenable.sc pushes plugin updates to paired scanners automatically when it downloads new feed updates”. Source explanation: When Tenable.sc downloads updated plugin feeds from Tenable's servers, it automatically distributes the update to all paired Nessus scanners. Administrators do not need to log into each scanner individually; the centralized feed management in Tenable.sc handles plugin distribution as part of its scanner management role.",
      "The source answer key does not select this alternative: “Plugin updates require a Tenable.sc reboot to be distributed to scanners”. The keyed answer is “Tenable.sc pushes plugin updates to paired scanners automatically when it downloads new feed updates”. Source explanation: When Tenable.sc downloads updated plugin feeds from Tenable's servers, it automatically distributes the update to all paired Nessus scanners. Administrators do not need to log into each scanner individually; the centralized feed management in Tenable.sc handles plugin distribution as part of its scanner management role.",
      "The source answer key does not select this alternative: “Scanners update plugins independently from Tenable.com without Tenable.sc involvement”. The keyed answer is “Tenable.sc pushes plugin updates to paired scanners automatically when it downloads new feed updates”. Source explanation: When Tenable.sc downloads updated plugin feeds from Tenable's servers, it automatically distributes the update to all paired Nessus scanners. Administrators do not need to log into each scanner individually; the centralized feed management in Tenable.sc handles plugin distribution as part of its scanner management role."
    ]
  },
  {
    "id": "SC-Q053",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "In Tenable.sc, which scan credential type is used for Linux/Unix servers in an enterprise environment with centralized key management?",
    "o": [
      "HTTP basic authentication for API-based credential verification",
      "SNMP v3 authentication with AES encryption",
      "Windows domain account credentials configured with SMB protocol",
      "SSH public key authentication with a private key uploaded to Tenable.sc credential management"
    ],
    "a": "D",
    "e": "For Linux/Unix credentialed scanning, Tenable.sc supports SSH authentication using either password or public key pairs. In enterprise environments with centralized SSH key management, the SSH public key is deployed to target servers and the corresponding private key is uploaded to Tenable.sc's credential store, eliminating the need to store passwords.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-053",
    "x": [
      "The source answer key does not select this alternative: “HTTP basic authentication for API-based credential verification”. The keyed answer is “SSH public key authentication with a private key uploaded to Tenable.sc credential management”. Source explanation: For Linux/Unix credentialed scanning, Tenable.sc supports SSH authentication using either password or public key pairs. In enterprise environments with centralized SSH key management, the SSH public key is deployed to target servers and the corresponding private key is uploaded to Tenable.sc's credential store, eliminating the need to store passwords.",
      "The source answer key does not select this alternative: “SNMP v3 authentication with AES encryption”. The keyed answer is “SSH public key authentication with a private key uploaded to Tenable.sc credential management”. Source explanation: For Linux/Unix credentialed scanning, Tenable.sc supports SSH authentication using either password or public key pairs. In enterprise environments with centralized SSH key management, the SSH public key is deployed to target servers and the corresponding private key is uploaded to Tenable.sc's credential store, eliminating the need to store passwords.",
      "The source answer key does not select this alternative: “Windows domain account credentials configured with SMB protocol”. The keyed answer is “SSH public key authentication with a private key uploaded to Tenable.sc credential management”. Source explanation: For Linux/Unix credentialed scanning, Tenable.sc supports SSH authentication using either password or public key pairs. In enterprise environments with centralized SSH key management, the SSH public key is deployed to target servers and the corresponding private key is uploaded to Tenable.sc's credential store, eliminating the need to store passwords.",
      "For Linux/Unix credentialed scanning, Tenable.sc supports SSH authentication using either password or public key pairs. In enterprise environments with centralized SSH key management, the SSH public key is deployed to target servers and the corresponding private key is uploaded to Tenable.sc's credential store, eliminating the need to store passwords."
    ]
  },
  {
    "id": "SC-Q054",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "What does the Tenable.sc 'Accept Risk' workflow allow a security team to do?",
    "o": [
      "Document that a specific vulnerability on a specific asset is acknowledged and the risk is formally accepted, removing it from active remediation tracking",
      "Escalate a vulnerability to the CISO for sign-off before it appears in dashboards",
      "Automatically apply patches to accepted vulnerabilities during the next maintenance window",
      "Transfer vulnerability ownership to a third-party vendor for external remediation"
    ],
    "a": "A",
    "e": "The Accept Risk workflow in Tenable.sc allows teams to formally acknowledge that a specific vulnerability exists on a specific asset, that remediation is not currently possible or warranted, and that the risk is accepted. Accepted risks are excluded from active vulnerability counts while maintaining an audit trail with the accepting user, date, reason, and expiration date.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-054",
    "x": [
      "The Accept Risk workflow in Tenable.sc allows teams to formally acknowledge that a specific vulnerability exists on a specific asset, that remediation is not currently possible or warranted, and that the risk is accepted. Accepted risks are excluded from active vulnerability counts while maintaining an audit trail with the accepting user, date, reason, and expiration date.",
      "The source answer key does not select this alternative: “Escalate a vulnerability to the CISO for sign-off before it appears in dashboards”. The keyed answer is “Document that a specific vulnerability on a specific asset is acknowledged and the risk is formally accepted, removing it from active remediation tracking”. Source explanation: The Accept Risk workflow in Tenable.sc allows teams to formally acknowledge that a specific vulnerability exists on a specific asset, that remediation is not currently possible or warranted, and that the risk is accepted. Accepted risks are excluded from active vulnerability counts while maintaining an audit trail with the accepting user, date, reason, and expiration date.",
      "The source answer key does not select this alternative: “Automatically apply patches to accepted vulnerabilities during the next maintenance window”. The keyed answer is “Document that a specific vulnerability on a specific asset is acknowledged and the risk is formally accepted, removing it from active remediation tracking”. Source explanation: The Accept Risk workflow in Tenable.sc allows teams to formally acknowledge that a specific vulnerability exists on a specific asset, that remediation is not currently possible or warranted, and that the risk is accepted. Accepted risks are excluded from active vulnerability counts while maintaining an audit trail with the accepting user, date, reason, and expiration date.",
      "The source answer key does not select this alternative: “Transfer vulnerability ownership to a third-party vendor for external remediation”. The keyed answer is “Document that a specific vulnerability on a specific asset is acknowledged and the risk is formally accepted, removing it from active remediation tracking”. Source explanation: The Accept Risk workflow in Tenable.sc allows teams to formally acknowledge that a specific vulnerability exists on a specific asset, that remediation is not currently possible or warranted, and that the risk is accepted. Accepted risks are excluded from active vulnerability counts while maintaining an audit trail with the accepting user, date, reason, and expiration date."
    ]
  },
  {
    "id": "SC-Q055",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "In Tenable.sc, which feature allows fine-grained control over what specific vulnerabilities appear in a report beyond severity and asset filters?",
    "o": [
      "Custom filter scripts must be written using the Tenable API",
      "Report filters are limited to the organization's assigned repositories",
      "Only severity and IP range filters are available in Tenable.sc reports",
      "Report filters including CVE, plugin ID, plugin family, port, protocol, and plugin text search"
    ],
    "a": "D",
    "e": "Tenable.sc reports support a comprehensive range of filters including CVE identifier, plugin ID, plugin family, affected port, protocol, vulnerability text search, CVSS score range, severity level, asset list, and date range. This granularity allows precisely scoped reports for specific compliance requirements, penetration test validation, or executive summaries.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-055",
    "x": [
      "The source answer key does not select this alternative: “Custom filter scripts must be written using the Tenable API”. The keyed answer is “Report filters including CVE, plugin ID, plugin family, port, protocol, and plugin text search”. Source explanation: Tenable.sc reports support a comprehensive range of filters including CVE identifier, plugin ID, plugin family, affected port, protocol, vulnerability text search, CVSS score range, severity level, asset list, and date range. This granularity allows precisely scoped reports for specific compliance requirements, penetration test validation, or executive summaries.",
      "The source answer key does not select this alternative: “Report filters are limited to the organization's assigned repositories”. The keyed answer is “Report filters including CVE, plugin ID, plugin family, port, protocol, and plugin text search”. Source explanation: Tenable.sc reports support a comprehensive range of filters including CVE identifier, plugin ID, plugin family, affected port, protocol, vulnerability text search, CVSS score range, severity level, asset list, and date range. This granularity allows precisely scoped reports for specific compliance requirements, penetration test validation, or executive summaries.",
      "The source answer key does not select this alternative: “Only severity and IP range filters are available in Tenable.sc reports”. The keyed answer is “Report filters including CVE, plugin ID, plugin family, port, protocol, and plugin text search”. Source explanation: Tenable.sc reports support a comprehensive range of filters including CVE identifier, plugin ID, plugin family, affected port, protocol, vulnerability text search, CVSS score range, severity level, asset list, and date range. This granularity allows precisely scoped reports for specific compliance requirements, penetration test validation, or executive summaries.",
      "Tenable.sc reports support a comprehensive range of filters including CVE identifier, plugin ID, plugin family, affected port, protocol, vulnerability text search, CVSS score range, severity level, asset list, and date range. This granularity allows precisely scoped reports for specific compliance requirements, penetration test validation, or executive summaries."
    ]
  },
  {
    "id": "SC-Q056",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "What happens in Tenable.sc when a scan is configured to store results in a repository that has reached its IP license limit?",
    "o": [
      "Scan results may fail to import or the system may generate a license warning, and new IPs beyond the limit may not be tracked",
      "The scan completes normally, and results are stored in a temporary buffer until licenses are added",
      "Tenable.sc automatically archives the oldest IP data to create room for new scan results",
      "The scanner pauses the scan until the administrator adds additional license capacity"
    ],
    "a": "A",
    "e": "When the Tenable.sc IP license limit is reached, attempts to import scan results for IPs beyond the licensed count may fail or generate license warnings. The system enforces the IP cap, so organizations must ensure their license covers the total number of unique IPs they intend to actively scan.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-056",
    "x": [
      "When the Tenable.sc IP license limit is reached, attempts to import scan results for IPs beyond the licensed count may fail or generate license warnings. The system enforces the IP cap, so organizations must ensure their license covers the total number of unique IPs they intend to actively scan.",
      "The source answer key does not select this alternative: “The scan completes normally, and results are stored in a temporary buffer until licenses are added”. The keyed answer is “Scan results may fail to import or the system may generate a license warning, and new IPs beyond the limit may not be tracked”. Source explanation: When the Tenable.sc IP license limit is reached, attempts to import scan results for IPs beyond the licensed count may fail or generate license warnings. The system enforces the IP cap, so organizations must ensure their license covers the total number of unique IPs they intend to actively scan.",
      "The source answer key does not select this alternative: “Tenable.sc automatically archives the oldest IP data to create room for new scan results”. The keyed answer is “Scan results may fail to import or the system may generate a license warning, and new IPs beyond the limit may not be tracked”. Source explanation: When the Tenable.sc IP license limit is reached, attempts to import scan results for IPs beyond the licensed count may fail or generate license warnings. The system enforces the IP cap, so organizations must ensure their license covers the total number of unique IPs they intend to actively scan.",
      "The source answer key does not select this alternative: “The scanner pauses the scan until the administrator adds additional license capacity”. The keyed answer is “Scan results may fail to import or the system may generate a license warning, and new IPs beyond the limit may not be tracked”. Source explanation: When the Tenable.sc IP license limit is reached, attempts to import scan results for IPs beyond the licensed count may fail or generate license warnings. The system enforces the IP cap, so organizations must ensure their license covers the total number of unique IPs they intend to actively scan."
    ]
  },
  {
    "id": "SC-Q057",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "In Tenable.sc, what configuration allows Security Analysts from different organizations to share read access to the same repository data?",
    "o": [
      "This is not possible in Tenable.sc; repositories are strictly single-organization",
      "Granting both organizations access to the shared repository in its configuration, combined with analyst-level permissions",
      "Using offsite sync to replicate the repository to each organization's dedicated repository",
      "Creating duplicate copies of the repository for each organization"
    ],
    "a": "B",
    "e": "Tenable.sc repositories can be shared across multiple organizations by granting multiple organizations access to the same repository. When analysts from different organizations query dashboards or reports using that repository, they can see the shared data. This is useful for central IT repositories viewed by business unit security teams.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-057",
    "x": [
      "The source answer key does not select this alternative: “This is not possible in Tenable.sc; repositories are strictly single-organization”. The keyed answer is “Granting both organizations access to the shared repository in its configuration, combined with analyst-level permissions”. Source explanation: Tenable.sc repositories can be shared across multiple organizations by granting multiple organizations access to the same repository. When analysts from different organizations query dashboards or reports using that repository, they can see the shared data. This is useful for central IT repositories viewed by business unit security teams.",
      "Tenable.sc repositories can be shared across multiple organizations by granting multiple organizations access to the same repository. When analysts from different organizations query dashboards or reports using that repository, they can see the shared data. This is useful for central IT repositories viewed by business unit security teams.",
      "The source answer key does not select this alternative: “Using offsite sync to replicate the repository to each organization's dedicated repository”. The keyed answer is “Granting both organizations access to the shared repository in its configuration, combined with analyst-level permissions”. Source explanation: Tenable.sc repositories can be shared across multiple organizations by granting multiple organizations access to the same repository. When analysts from different organizations query dashboards or reports using that repository, they can see the shared data. This is useful for central IT repositories viewed by business unit security teams.",
      "The source answer key does not select this alternative: “Creating duplicate copies of the repository for each organization”. The keyed answer is “Granting both organizations access to the shared repository in its configuration, combined with analyst-level permissions”. Source explanation: Tenable.sc repositories can be shared across multiple organizations by granting multiple organizations access to the same repository. When analysts from different organizations query dashboards or reports using that repository, they can see the shared data. This is useful for central IT repositories viewed by business unit security teams."
    ]
  },
  {
    "id": "SC-Q058",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "Which network protocol does Nessus use to perform credentialed scanning of Windows hosts in Tenable.sc?",
    "o": [
      "SSH for encrypted command execution on Windows",
      "SMB (Server Message Block) for registry, WMI, and file system access",
      "SNMP for Windows system information enumeration",
      "RDP for interactive Windows session-based scanning"
    ],
    "a": "B",
    "e": "Nessus uses SMB (Server Message Block) protocol for Windows credentialed scanning to access the Windows registry, WMI (Windows Management Instrumentation), and file system. SMB access is what enables local check plugins to enumerate installed patches, software versions, and configuration settings on Windows hosts.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-058",
    "x": [
      "The source answer key does not select this alternative: “SSH for encrypted command execution on Windows”. The keyed answer is “SMB (Server Message Block) for registry, WMI, and file system access”. Source explanation: Nessus uses SMB (Server Message Block) protocol for Windows credentialed scanning to access the Windows registry, WMI (Windows Management Instrumentation), and file system. SMB access is what enables local check plugins to enumerate installed patches, software versions, and configuration settings on Windows hosts.",
      "Nessus uses SMB (Server Message Block) protocol for Windows credentialed scanning to access the Windows registry, WMI (Windows Management Instrumentation), and file system. SMB access is what enables local check plugins to enumerate installed patches, software versions, and configuration settings on Windows hosts.",
      "The source answer key does not select this alternative: “SNMP for Windows system information enumeration”. The keyed answer is “SMB (Server Message Block) for registry, WMI, and file system access”. Source explanation: Nessus uses SMB (Server Message Block) protocol for Windows credentialed scanning to access the Windows registry, WMI (Windows Management Instrumentation), and file system. SMB access is what enables local check plugins to enumerate installed patches, software versions, and configuration settings on Windows hosts.",
      "The source answer key does not select this alternative: “RDP for interactive Windows session-based scanning”. The keyed answer is “SMB (Server Message Block) for registry, WMI, and file system access”. Source explanation: Nessus uses SMB (Server Message Block) protocol for Windows credentialed scanning to access the Windows registry, WMI (Windows Management Instrumentation), and file system. SMB access is what enables local check plugins to enumerate installed patches, software versions, and configuration settings on Windows hosts."
    ]
  },
  {
    "id": "SC-Q059",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "In Tenable.sc, which dashboard component type should be used when a manager wants to see a single number — the total count of Critical vulnerabilities across all assets?",
    "o": [
      "Table component with one row showing the total count",
      "Bar chart component with a single bar for Critical severity",
      "Summary component (single statistic) configured with Critical severity filter",
      "A text component with the vulnerability count embedded in a narrative"
    ],
    "a": "C",
    "e": "The Summary (or 'Total' or 'Single Statistic') dashboard component type in Tenable.sc displays a single aggregated number prominently — ideal for KPI-style dashboards showing total vulnerability counts by severity. It can be configured with severity, asset, and repository filters to scope the count appropriately.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-059",
    "x": [
      "The source answer key does not select this alternative: “Table component with one row showing the total count”. The keyed answer is “Summary component (single statistic) configured with Critical severity filter”. Source explanation: The Summary (or 'Total' or 'Single Statistic') dashboard component type in Tenable.sc displays a single aggregated number prominently — ideal for KPI-style dashboards showing total vulnerability counts by severity. It can be configured with severity, asset, and repository filters to scope the count appropriately.",
      "The source answer key does not select this alternative: “Bar chart component with a single bar for Critical severity”. The keyed answer is “Summary component (single statistic) configured with Critical severity filter”. Source explanation: The Summary (or 'Total' or 'Single Statistic') dashboard component type in Tenable.sc displays a single aggregated number prominently — ideal for KPI-style dashboards showing total vulnerability counts by severity. It can be configured with severity, asset, and repository filters to scope the count appropriately.",
      "The Summary (or 'Total' or 'Single Statistic') dashboard component type in Tenable.sc displays a single aggregated number prominently — ideal for KPI-style dashboards showing total vulnerability counts by severity. It can be configured with severity, asset, and repository filters to scope the count appropriately.",
      "The source answer key does not select this alternative: “A text component with the vulnerability count embedded in a narrative”. The keyed answer is “Summary component (single statistic) configured with Critical severity filter”. Source explanation: The Summary (or 'Total' or 'Single Statistic') dashboard component type in Tenable.sc displays a single aggregated number prominently — ideal for KPI-style dashboards showing total vulnerability counts by severity. It can be configured with severity, asset, and repository filters to scope the count appropriately."
    ]
  },
  {
    "id": "SC-Q060",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "In Tenable.sc, what is the purpose of the 'Recast Risk' feature available to Security Managers?",
    "o": [
      "To automatically accept all instances of a vulnerability across the organization",
      "To escalate a vulnerability to the Administrator for system-wide severity reclassification",
      "To change the severity classification of a specific vulnerability on specific assets within the organization to better reflect the actual risk context",
      "To rerun the scan for specific vulnerabilities suspected of being false positives"
    ],
    "a": "C",
    "e": "Recast Risk in Tenable.sc allows Security Managers to override the default severity of a vulnerability for specific assets within their organization. For example, if a Critical vulnerability only affects an isolated test system, the manager can recast it to Medium to reflect reduced actual risk. The change is tracked with the user, date, and justification.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-060",
    "x": [
      "The source answer key does not select this alternative: “To automatically accept all instances of a vulnerability across the organization”. The keyed answer is “To change the severity classification of a specific vulnerability on specific assets within the organization to better reflect the actual risk context”. Source explanation: Recast Risk in Tenable.sc allows Security Managers to override the default severity of a vulnerability for specific assets within their organization. For example, if a Critical vulnerability only affects an isolated test system, the manager can recast it to Medium to reflect reduced actual risk. The change is tracked with the user, date, and justification.",
      "The source answer key does not select this alternative: “To escalate a vulnerability to the Administrator for system-wide severity reclassification”. The keyed answer is “To change the severity classification of a specific vulnerability on specific assets within the organization to better reflect the actual risk context”. Source explanation: Recast Risk in Tenable.sc allows Security Managers to override the default severity of a vulnerability for specific assets within their organization. For example, if a Critical vulnerability only affects an isolated test system, the manager can recast it to Medium to reflect reduced actual risk. The change is tracked with the user, date, and justification.",
      "Recast Risk in Tenable.sc allows Security Managers to override the default severity of a vulnerability for specific assets within their organization. For example, if a Critical vulnerability only affects an isolated test system, the manager can recast it to Medium to reflect reduced actual risk. The change is tracked with the user, date, and justification.",
      "The source answer key does not select this alternative: “To rerun the scan for specific vulnerabilities suspected of being false positives”. The keyed answer is “To change the severity classification of a specific vulnerability on specific assets within the organization to better reflect the actual risk context”. Source explanation: Recast Risk in Tenable.sc allows Security Managers to override the default severity of a vulnerability for specific assets within their organization. For example, if a Critical vulnerability only affects an isolated test system, the manager can recast it to Medium to reflect reduced actual risk. The change is tracked with the user, date, and justification."
    ]
  },
  {
    "id": "SC-Q061",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "A candidate is planning the Tenable Security Center certification path. Which exam order matches Tenable's certification process?",
    "o": [
      "Complete either exam first because the two exams are independent",
      "Complete only the practical exam because the written exam is optional",
      "Complete the practical exam first, then complete the written exam",
      "Complete the written qualification exam first, then complete the practical exam"
    ],
    "a": "D",
    "e": "Tenable certifications use a two-part process: a written qualification exam followed by a practical exam for the same product. The written exam must be completed before the practical exam can be taken. This sequence validates both product knowledge and hands-on platform ability.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-061",
    "x": [
      "The source answer key does not select this alternative: “Complete either exam first because the two exams are independent”. The keyed answer is “Complete the written qualification exam first, then complete the practical exam”. Source explanation: Tenable certifications use a two-part process: a written qualification exam followed by a practical exam for the same product. The written exam must be completed before the practical exam can be taken. This sequence validates both product knowledge and hands-on platform ability.",
      "The source answer key does not select this alternative: “Complete only the practical exam because the written exam is optional”. The keyed answer is “Complete the written qualification exam first, then complete the practical exam”. Source explanation: Tenable certifications use a two-part process: a written qualification exam followed by a practical exam for the same product. The written exam must be completed before the practical exam can be taken. This sequence validates both product knowledge and hands-on platform ability.",
      "The source answer key does not select this alternative: “Complete the practical exam first, then complete the written exam”. The keyed answer is “Complete the written qualification exam first, then complete the practical exam”. Source explanation: Tenable certifications use a two-part process: a written qualification exam followed by a practical exam for the same product. The written exam must be completed before the practical exam can be taken. This sequence validates both product knowledge and hands-on platform ability.",
      "Tenable certifications use a two-part process: a written qualification exam followed by a practical exam for the same product. The written exam must be completed before the practical exam can be taken. This sequence validates both product knowledge and hands-on platform ability."
    ]
  },
  {
    "id": "SC-Q062",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "Why must an administrator configure scan zones before running active scans in Tenable Security Center?",
    "o": [
      "Scan zones encrypt credentials before they are sent to Nessus scanners",
      "Scan zones define which dashboard templates organizational users can import",
      "Scan zones associate target IP ranges with one or more scanners that can reach those ranges",
      "Scan zones store vulnerability results after scans complete"
    ],
    "a": "C",
    "e": "A scan zone defines an area of the network for active scanning by pairing IP addresses or ranges with scanners in the deployment. Tenable Security Center uses that mapping to choose scanners that can reach the requested targets. Without scan zones, active scanning cannot be routed correctly.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-062",
    "x": [
      "The source answer key does not select this alternative: “Scan zones encrypt credentials before they are sent to Nessus scanners”. The keyed answer is “Scan zones associate target IP ranges with one or more scanners that can reach those ranges”. Source explanation: A scan zone defines an area of the network for active scanning by pairing IP addresses or ranges with scanners in the deployment. Tenable Security Center uses that mapping to choose scanners that can reach the requested targets. Without scan zones, active scanning cannot be routed correctly.",
      "The source answer key does not select this alternative: “Scan zones define which dashboard templates organizational users can import”. The keyed answer is “Scan zones associate target IP ranges with one or more scanners that can reach those ranges”. Source explanation: A scan zone defines an area of the network for active scanning by pairing IP addresses or ranges with scanners in the deployment. Tenable Security Center uses that mapping to choose scanners that can reach the requested targets. Without scan zones, active scanning cannot be routed correctly.",
      "A scan zone defines an area of the network for active scanning by pairing IP addresses or ranges with scanners in the deployment. Tenable Security Center uses that mapping to choose scanners that can reach the requested targets. Without scan zones, active scanning cannot be routed correctly.",
      "The source answer key does not select this alternative: “Scan zones store vulnerability results after scans complete”. The keyed answer is “Scan zones associate target IP ranges with one or more scanners that can reach those ranges”. Source explanation: A scan zone defines an area of the network for active scanning by pairing IP addresses or ranges with scanners in the deployment. Tenable Security Center uses that mapping to choose scanners that can reach the requested targets. Without scan zones, active scanning cannot be routed correctly."
    ]
  },
  {
    "id": "SC-Q063",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "What is the primary purpose of a repository in Tenable Security Center?",
    "o": [
      "To store scan policies before they are exported to Nessus scanners",
      "To store only dashboard layouts and report templates",
      "To store vulnerability data collected from scanners and make that data available to assigned organizations",
      "To store user passwords for LDAP and SAML authentication"
    ],
    "a": "C",
    "e": "Repositories are databases in Tenable Security Center that contain vulnerability data. They provide configurable storage and can be assigned to organizations so users can analyze the data they are allowed to access. Scan policies, authentication settings, and dashboard layouts are separate objects.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-063",
    "x": [
      "The source answer key does not select this alternative: “To store scan policies before they are exported to Nessus scanners”. The keyed answer is “To store vulnerability data collected from scanners and make that data available to assigned organizations”. Source explanation: Repositories are databases in Tenable Security Center that contain vulnerability data. They provide configurable storage and can be assigned to organizations so users can analyze the data they are allowed to access. Scan policies, authentication settings, and dashboard layouts are separate objects.",
      "The source answer key does not select this alternative: “To store only dashboard layouts and report templates”. The keyed answer is “To store vulnerability data collected from scanners and make that data available to assigned organizations”. Source explanation: Repositories are databases in Tenable Security Center that contain vulnerability data. They provide configurable storage and can be assigned to organizations so users can analyze the data they are allowed to access. Scan policies, authentication settings, and dashboard layouts are separate objects.",
      "Repositories are databases in Tenable Security Center that contain vulnerability data. They provide configurable storage and can be assigned to organizations so users can analyze the data they are allowed to access. Scan policies, authentication settings, and dashboard layouts are separate objects.",
      "The source answer key does not select this alternative: “To store user passwords for LDAP and SAML authentication”. The keyed answer is “To store vulnerability data collected from scanners and make that data available to assigned organizations”. Source explanation: Repositories are databases in Tenable Security Center that contain vulnerability data. They provide configurable storage and can be assigned to organizations so users can analyze the data they are allowed to access. Scan policies, authentication settings, and dashboard layouts are separate objects."
    ]
  },
  {
    "id": "SC-Q064",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "Which built-in role is designed for a person who maintains scan credentials and shares them without revealing the credential values to scan operators?",
    "o": [
      "Credential Manager",
      "Executive",
      "No Role",
      "Auditor"
    ],
    "a": "A",
    "e": "The Credential Manager role is intended for users who handle reusable credential objects. This role can create and share credentials so other users can run credentialed scans without learning the secret values. That separation helps keep privileged scan accounts maintained without spreading passwords broadly.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-064",
    "x": [
      "The Credential Manager role is intended for users who handle reusable credential objects. This role can create and share credentials so other users can run credentialed scans without learning the secret values. That separation helps keep privileged scan accounts maintained without spreading passwords broadly.",
      "The source answer key does not select this alternative: “Executive”. The keyed answer is “Credential Manager”. Source explanation: The Credential Manager role is intended for users who handle reusable credential objects. This role can create and share credentials so other users can run credentialed scans without learning the secret values. That separation helps keep privileged scan accounts maintained without spreading passwords broadly.",
      "The source answer key does not select this alternative: “No Role”. The keyed answer is “Credential Manager”. Source explanation: The Credential Manager role is intended for users who handle reusable credential objects. This role can create and share credentials so other users can run credentialed scans without learning the secret values. That separation helps keep privileged scan accounts maintained without spreading passwords broadly.",
      "The source answer key does not select this alternative: “Auditor”. The keyed answer is “Credential Manager”. Source explanation: The Credential Manager role is intended for users who handle reusable credential objects. This role can create and share credentials so other users can run credentialed scans without learning the secret values. That separation helps keep privileged scan accounts maintained without spreading passwords broadly."
    ]
  },
  {
    "id": "SC-Q065",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "An analyst repeatedly applies the same vulnerability filters for CVE ID and severity. What should they create to reuse that filter set?",
    "o": [
      "A query",
      "A linked user account",
      "A repository",
      "A scan zone"
    ],
    "a": "A",
    "e": "Filters can be applied across many Tenable Security Center pages, and saved filter logic is stored as a query. A query lets the analyst reuse the same filter components instead of rebuilding them each time. Scan zones, repositories, and linked accounts solve different problems.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-065",
    "x": [
      "Filters can be applied across many Tenable Security Center pages, and saved filter logic is stored as a query. A query lets the analyst reuse the same filter components instead of rebuilding them each time. Scan zones, repositories, and linked accounts solve different problems.",
      "The source answer key does not select this alternative: “A linked user account”. The keyed answer is “A query”. Source explanation: Filters can be applied across many Tenable Security Center pages, and saved filter logic is stored as a query. A query lets the analyst reuse the same filter components instead of rebuilding them each time. Scan zones, repositories, and linked accounts solve different problems.",
      "The source answer key does not select this alternative: “A repository”. The keyed answer is “A query”. Source explanation: Filters can be applied across many Tenable Security Center pages, and saved filter logic is stored as a query. A query lets the analyst reuse the same filter components instead of rebuilding them each time. Scan zones, repositories, and linked accounts solve different problems.",
      "The source answer key does not select this alternative: “A scan zone”. The keyed answer is “A query”. Source explanation: Filters can be applied across many Tenable Security Center pages, and saved filter logic is stored as a query. A query lets the analyst reuse the same filter components instead of rebuilding them each time. Scan zones, repositories, and linked accounts solve different problems."
    ]
  },
  {
    "id": "SC-Q066",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "Which asset list type is immediately usable after configuration because it is simply a defined list of IP addresses?",
    "o": [
      "Static asset list",
      "Combination asset list",
      "LDAP query asset list",
      "Dynamic asset list"
    ],
    "a": "A",
    "e": "Static asset lists are manually defined lists of IP addresses, CIDR blocks, or ranges. Because membership is explicitly supplied, the asset list can be used immediately after it is saved without waiting for scan data to calculate membership.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-066",
    "x": [
      "Static asset lists are manually defined lists of IP addresses, CIDR blocks, or ranges. Because membership is explicitly supplied, the asset list can be used immediately after it is saved without waiting for scan data to calculate membership.",
      "The source answer key does not select this alternative: “Combination asset list”. The keyed answer is “Static asset list”. Source explanation: Static asset lists are manually defined lists of IP addresses, CIDR blocks, or ranges. Because membership is explicitly supplied, the asset list can be used immediately after it is saved without waiting for scan data to calculate membership.",
      "The source answer key does not select this alternative: “LDAP query asset list”. The keyed answer is “Static asset list”. Source explanation: Static asset lists are manually defined lists of IP addresses, CIDR blocks, or ranges. Because membership is explicitly supplied, the asset list can be used immediately after it is saved without waiting for scan data to calculate membership.",
      "The source answer key does not select this alternative: “Dynamic asset list”. The keyed answer is “Static asset list”. Source explanation: Static asset lists are manually defined lists of IP addresses, CIDR blocks, or ranges. Because membership is explicitly supplied, the asset list can be used immediately after it is saved without waiting for scan data to calculate membership."
    ]
  },
  {
    "id": "SC-Q067",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "A team fixed a vulnerability and wants Tenable Security Center to verify the fix on affected hosts. Which feature is intended for that follow-up check?",
    "o": [
      "Linked account switch",
      "Remediation scan",
      "Dashboard refresh",
      "Offline repository import"
    ],
    "a": "B",
    "e": "A remediation scan is a follow-up active scan against targets where a vulnerability was previously found. It evaluates the selected plugin to determine whether remediation actions were successful. If the vulnerability is no longer detected where it was previously present, Tenable Security Center can mark it mitigated.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-067",
    "x": [
      "The source answer key does not select this alternative: “Linked account switch”. The keyed answer is “Remediation scan”. Source explanation: A remediation scan is a follow-up active scan against targets where a vulnerability was previously found. It evaluates the selected plugin to determine whether remediation actions were successful. If the vulnerability is no longer detected where it was previously present, Tenable Security Center can mark it mitigated.",
      "A remediation scan is a follow-up active scan against targets where a vulnerability was previously found. It evaluates the selected plugin to determine whether remediation actions were successful. If the vulnerability is no longer detected where it was previously present, Tenable Security Center can mark it mitigated.",
      "The source answer key does not select this alternative: “Dashboard refresh”. The keyed answer is “Remediation scan”. Source explanation: A remediation scan is a follow-up active scan against targets where a vulnerability was previously found. It evaluates the selected plugin to determine whether remediation actions were successful. If the vulnerability is no longer detected where it was previously present, Tenable Security Center can mark it mitigated.",
      "The source answer key does not select this alternative: “Offline repository import”. The keyed answer is “Remediation scan”. Source explanation: A remediation scan is a follow-up active scan against targets where a vulnerability was previously found. It evaluates the selected plugin to determine whether remediation actions were successful. If the vulnerability is no longer detected where it was previously present, Tenable Security Center can mark it mitigated."
    ]
  },
  {
    "id": "SC-Q068",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "How does Tenable Security Center normally keep dashboard data current for organizational users?",
    "o": [
      "It refreshes dashboard data only when the administrator restarts the Security Center service",
      "It refreshes dashboard data automatically once per day, with a manual Refresh All option available",
      "It never refreshes dashboard data after the dashboard is created",
      "It refreshes dashboard data only when a new scan policy is created"
    ],
    "a": "B",
    "e": "Dashboards in Tenable Security Center are designed to display current vulnerability, event, ticket, user, and alert data. Tenable documents an automatic daily dashboard refresh, and organizational users can refresh all dashboard components on demand. This keeps dashboards useful without requiring service restarts.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-068",
    "x": [
      "The source answer key does not select this alternative: “It refreshes dashboard data only when the administrator restarts the Security Center service”. The keyed answer is “It refreshes dashboard data automatically once per day, with a manual Refresh All option available”. Source explanation: Dashboards in Tenable Security Center are designed to display current vulnerability, event, ticket, user, and alert data. Tenable documents an automatic daily dashboard refresh, and organizational users can refresh all dashboard components on demand. This keeps dashboards useful without requiring service restarts.",
      "Dashboards in Tenable Security Center are designed to display current vulnerability, event, ticket, user, and alert data. Tenable documents an automatic daily dashboard refresh, and organizational users can refresh all dashboard components on demand. This keeps dashboards useful without requiring service restarts.",
      "The source answer key does not select this alternative: “It never refreshes dashboard data after the dashboard is created”. The keyed answer is “It refreshes dashboard data automatically once per day, with a manual Refresh All option available”. Source explanation: Dashboards in Tenable Security Center are designed to display current vulnerability, event, ticket, user, and alert data. Tenable documents an automatic daily dashboard refresh, and organizational users can refresh all dashboard components on demand. This keeps dashboards useful without requiring service restarts.",
      "The source answer key does not select this alternative: “It refreshes dashboard data only when a new scan policy is created”. The keyed answer is “It refreshes dashboard data automatically once per day, with a manual Refresh All option available”. Source explanation: Dashboards in Tenable Security Center are designed to display current vulnerability, event, ticket, user, and alert data. Tenable documents an automatic daily dashboard refresh, and organizational users can refresh all dashboard components on demand. This keeps dashboards useful without requiring service restarts."
    ]
  },
  {
    "id": "SC-Q069",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "Which report output formats are explicitly supported by Tenable Security Center's built-in reporting capability?",
    "o": [
      "DOCX and PPTX",
      "OVF and VMDK",
      "PDF and CSV",
      "MP4 and WAV"
    ],
    "a": "C",
    "e": "Tenable Security Center supports report templates and customizable report formats, including PDF and CSV. Those formats let teams share human-readable summaries and structured tabular data. Office document, media, and virtual machine formats are not the standard reporting outputs described for Tenable Security Center reports.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-069",
    "x": [
      "The source answer key does not select this alternative: “DOCX and PPTX”. The keyed answer is “PDF and CSV”. Source explanation: Tenable Security Center supports report templates and customizable report formats, including PDF and CSV. Those formats let teams share human-readable summaries and structured tabular data. Office document, media, and virtual machine formats are not the standard reporting outputs described for Tenable Security Center reports.",
      "The source answer key does not select this alternative: “OVF and VMDK”. The keyed answer is “PDF and CSV”. Source explanation: Tenable Security Center supports report templates and customizable report formats, including PDF and CSV. Those formats let teams share human-readable summaries and structured tabular data. Office document, media, and virtual machine formats are not the standard reporting outputs described for Tenable Security Center reports.",
      "Tenable Security Center supports report templates and customizable report formats, including PDF and CSV. Those formats let teams share human-readable summaries and structured tabular data. Office document, media, and virtual machine formats are not the standard reporting outputs described for Tenable Security Center reports.",
      "The source answer key does not select this alternative: “MP4 and WAV”. The keyed answer is “PDF and CSV”. Source explanation: Tenable Security Center supports report templates and customizable report formats, including PDF and CSV. Those formats let teams share human-readable summaries and structured tabular data. Office document, media, and virtual machine formats are not the standard reporting outputs described for Tenable Security Center reports."
    ]
  },
  {
    "id": "SC-Q070",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "An analyst launches an active scan with the schedule set to Now. What should they expect on the Active Scans page afterward?",
    "o": [
      "The scan is converted into a monthly recurring scan",
      "The scan is saved as a reusable on-demand scan and appears on the Active Scans page",
      "The scan launches immediately, but the scan configuration is not saved for later display on the Active Scans page",
      "The scan remains pending until an administrator manually saves it"
    ],
    "a": "C",
    "e": "The Now schedule option launches the scan immediately without saving the scan configuration for later use. Tenable documents that scans configured to run Now do not appear on the Active Scans page. Use On Demand or another saved schedule when the scan needs to be launched again later.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-070",
    "x": [
      "The source answer key does not select this alternative: “The scan is converted into a monthly recurring scan”. The keyed answer is “The scan launches immediately, but the scan configuration is not saved for later display on the Active Scans page”. Source explanation: The Now schedule option launches the scan immediately without saving the scan configuration for later use. Tenable documents that scans configured to run Now do not appear on the Active Scans page. Use On Demand or another saved schedule when the scan needs to be launched again later.",
      "The source answer key does not select this alternative: “The scan is saved as a reusable on-demand scan and appears on the Active Scans page”. The keyed answer is “The scan launches immediately, but the scan configuration is not saved for later display on the Active Scans page”. Source explanation: The Now schedule option launches the scan immediately without saving the scan configuration for later use. Tenable documents that scans configured to run Now do not appear on the Active Scans page. Use On Demand or another saved schedule when the scan needs to be launched again later.",
      "The Now schedule option launches the scan immediately without saving the scan configuration for later use. Tenable documents that scans configured to run Now do not appear on the Active Scans page. Use On Demand or another saved schedule when the scan needs to be launched again later.",
      "The source answer key does not select this alternative: “The scan remains pending until an administrator manually saves it”. The keyed answer is “The scan launches immediately, but the scan configuration is not saved for later display on the Active Scans page”. Source explanation: The Now schedule option launches the scan immediately without saving the scan configuration for later use. Tenable documents that scans configured to run Now do not appear on the Active Scans page. Use On Demand or another saved schedule when the scan needs to be launched again later."
    ]
  },
  {
    "id": "SC-Q071",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "Which statement best describes administrator users in Tenable Security Center?",
    "o": [
      "They are organizational users limited to one assigned repository",
      "They manage Security Center as a whole and do not belong to organizations",
      "They are created only through LDAP synchronization",
      "They can view dashboards but cannot configure scanners or organizations"
    ],
    "a": "B",
    "e": "Administrator users have the system-provided administrator role and do not belong to organizations. They manage the Tenable Security Center deployment as a whole, including components such as scanners and organizations. Organizational users, by contrast, belong to an organization and operate within role and group permissions.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-071",
    "x": [
      "The source answer key does not select this alternative: “They are organizational users limited to one assigned repository”. The keyed answer is “They manage Security Center as a whole and do not belong to organizations”. Source explanation: Administrator users have the system-provided administrator role and do not belong to organizations. They manage the Tenable Security Center deployment as a whole, including components such as scanners and organizations. Organizational users, by contrast, belong to an organization and operate within role and group permissions.",
      "Administrator users have the system-provided administrator role and do not belong to organizations. They manage the Tenable Security Center deployment as a whole, including components such as scanners and organizations. Organizational users, by contrast, belong to an organization and operate within role and group permissions.",
      "The source answer key does not select this alternative: “They are created only through LDAP synchronization”. The keyed answer is “They manage Security Center as a whole and do not belong to organizations”. Source explanation: Administrator users have the system-provided administrator role and do not belong to organizations. They manage the Tenable Security Center deployment as a whole, including components such as scanners and organizations. Organizational users, by contrast, belong to an organization and operate within role and group permissions.",
      "The source answer key does not select this alternative: “They can view dashboards but cannot configure scanners or organizations”. The keyed answer is “They manage Security Center as a whole and do not belong to organizations”. Source explanation: Administrator users have the system-provided administrator role and do not belong to organizations. They manage the Tenable Security Center deployment as a whole, including components such as scanners and organizations. Organizational users, by contrast, belong to an organization and operate within role and group permissions."
    ]
  },
  {
    "id": "SC-Q072",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "What does a scan policy primarily define for active scans in Tenable Security Center?",
    "o": [
      "The repository encryption key for all vulnerability data",
      "Plugin settings and advanced directives used by the active scan",
      "The final report recipient list for every organization",
      "The authentication method for logging in to the web interface"
    ],
    "a": "B",
    "e": "Scan policies contain plugin settings and advanced scan directives used by active scans. Users with the appropriate permissions can reference those policies when configuring scans. Reporting distribution, repository encryption, and web login authentication are managed elsewhere.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-072",
    "x": [
      "The source answer key does not select this alternative: “The repository encryption key for all vulnerability data”. The keyed answer is “Plugin settings and advanced directives used by the active scan”. Source explanation: Scan policies contain plugin settings and advanced scan directives used by active scans. Users with the appropriate permissions can reference those policies when configuring scans. Reporting distribution, repository encryption, and web login authentication are managed elsewhere.",
      "Scan policies contain plugin settings and advanced scan directives used by active scans. Users with the appropriate permissions can reference those policies when configuring scans. Reporting distribution, repository encryption, and web login authentication are managed elsewhere.",
      "The source answer key does not select this alternative: “The final report recipient list for every organization”. The keyed answer is “Plugin settings and advanced directives used by the active scan”. Source explanation: Scan policies contain plugin settings and advanced scan directives used by active scans. Users with the appropriate permissions can reference those policies when configuring scans. Reporting distribution, repository encryption, and web login authentication are managed elsewhere.",
      "The source answer key does not select this alternative: “The authentication method for logging in to the web interface”. The keyed answer is “Plugin settings and advanced directives used by the active scan”. Source explanation: Scan policies contain plugin settings and advanced scan directives used by active scans. Users with the appropriate permissions can reference those policies when configuring scans. Reporting distribution, repository encryption, and web login authentication are managed elsewhere."
    ]
  },
  {
    "id": "SC-Q073",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A scan contains several Windows credential objects, and an older low-privilege credential can log in successfully before a newer administrator credential is tried. What happens?",
    "o": [
      "Tenable Security Center fails the scan because multiple credentials of the same type are not allowed",
      "Tenable Security Center uses the first credential that successfully logs in and stops trying other credentials of that type",
      "Tenable Security Center tries credentials in the order they were attached to the scan and always ignores object IDs",
      "Tenable Security Center continues trying all credentials and automatically switches to the highest-privilege account"
    ],
    "a": "B",
    "e": "For multiple credentials of the same type, Tenable Security Center attempts credentials according to their stored object order and uses the first one that successfully logs in. After successful login, it does not continue trying other credentials, even if another credential has greater privileges. This makes credential object order important when troubleshooting shallow credentialed results.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-073",
    "x": [
      "The source answer key does not select this alternative: “Tenable Security Center fails the scan because multiple credentials of the same type are not allowed”. The keyed answer is “Tenable Security Center uses the first credential that successfully logs in and stops trying other credentials of that type”. Source explanation: For multiple credentials of the same type, Tenable Security Center attempts credentials according to their stored object order and uses the first one that successfully logs in. After successful login, it does not continue trying other credentials, even if another credential has greater privileges. This makes credential object order important when troubleshooting shallow credentialed results.",
      "For multiple credentials of the same type, Tenable Security Center attempts credentials according to their stored object order and uses the first one that successfully logs in. After successful login, it does not continue trying other credentials, even if another credential has greater privileges. This makes credential object order important when troubleshooting shallow credentialed results.",
      "The source answer key does not select this alternative: “Tenable Security Center tries credentials in the order they were attached to the scan and always ignores object IDs”. The keyed answer is “Tenable Security Center uses the first credential that successfully logs in and stops trying other credentials of that type”. Source explanation: For multiple credentials of the same type, Tenable Security Center attempts credentials according to their stored object order and uses the first one that successfully logs in. After successful login, it does not continue trying other credentials, even if another credential has greater privileges. This makes credential object order important when troubleshooting shallow credentialed results.",
      "The source answer key does not select this alternative: “Tenable Security Center continues trying all credentials and automatically switches to the highest-privilege account”. The keyed answer is “Tenable Security Center uses the first credential that successfully logs in and stops trying other credentials of that type”. Source explanation: For multiple credentials of the same type, Tenable Security Center attempts credentials according to their stored object order and uses the first one that successfully logs in. After successful login, it does not continue trying other credentials, even if another credential has greater privileges. This makes credential object order important when troubleshooting shallow credentialed results."
    ]
  },
  {
    "id": "SC-Q074",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "An analyst created a dynamic asset list based on Linux hosts listening on TCP port 80, but it has no members yet in a new repository. What is the most likely missing step?",
    "o": [
      "Convert the dynamic asset list into a watchlist asset list",
      "Disable repository trend data so dynamic asset lists can calculate",
      "Run an initial discovery or assessment scan so Security Center has data to calculate the dynamic asset list",
      "Assign the dynamic asset list to the Administrator user account"
    ],
    "a": "C",
    "e": "Dynamic asset lists are calculated from conditions matched against scan data. Until Security Center has performed an initial scan that populates the repository, a newly created dynamic asset list typically has no members.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-074",
    "x": [
      "The source answer key does not select this alternative: “Convert the dynamic asset list into a watchlist asset list”. The keyed answer is “Run an initial discovery or assessment scan so Security Center has data to calculate the dynamic asset list”. Source explanation: Dynamic asset lists are calculated from conditions matched against scan data. Until Security Center has performed an initial scan that populates the repository, a newly created dynamic asset list typically has no members.",
      "The source answer key does not select this alternative: “Disable repository trend data so dynamic asset lists can calculate”. The keyed answer is “Run an initial discovery or assessment scan so Security Center has data to calculate the dynamic asset list”. Source explanation: Dynamic asset lists are calculated from conditions matched against scan data. Until Security Center has performed an initial scan that populates the repository, a newly created dynamic asset list typically has no members.",
      "Dynamic asset lists are calculated from conditions matched against scan data. Until Security Center has performed an initial scan that populates the repository, a newly created dynamic asset list typically has no members.",
      "The source answer key does not select this alternative: “Assign the dynamic asset list to the Administrator user account”. The keyed answer is “Run an initial discovery or assessment scan so Security Center has data to calculate the dynamic asset list”. Source explanation: Dynamic asset lists are calculated from conditions matched against scan data. Until Security Center has performed an initial scan that populates the repository, a newly created dynamic asset list typically has no members."
    ]
  },
  {
    "id": "SC-Q075",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A scan is configured with a single selected scan zone and a target list that includes only 10.10.50.25. The selected scan zone's range is 10.10.0.0/16. What does Tenable Security Center scan?",
    "o": [
      "No hosts, because target ranges must exactly match the zone range",
      "Only the targets specified in the scan configuration, using the selected zone's scanner assignment",
      "Every address in the scan zone range because the zone range overrides scan targets",
      "Only hosts already present in the import repository"
    ],
    "a": "B",
    "e": "When a single available scan zone is selected for an active scan, Tenable Security Center uses that zone for scanner selection but scans the targets specified in the scan configuration. The documented behavior is that it ignores the scan zone ranges as a target list in this case. The zone still matters because it determines scanner reachability.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-075",
    "x": [
      "The source answer key does not select this alternative: “No hosts, because target ranges must exactly match the zone range”. The keyed answer is “Only the targets specified in the scan configuration, using the selected zone's scanner assignment”. Source explanation: When a single available scan zone is selected for an active scan, Tenable Security Center uses that zone for scanner selection but scans the targets specified in the scan configuration. The documented behavior is that it ignores the scan zone ranges as a target list in this case. The zone still matters because it determines scanner reachability.",
      "When a single available scan zone is selected for an active scan, Tenable Security Center uses that zone for scanner selection but scans the targets specified in the scan configuration. The documented behavior is that it ignores the scan zone ranges as a target list in this case. The zone still matters because it determines scanner reachability.",
      "The source answer key does not select this alternative: “Every address in the scan zone range because the zone range overrides scan targets”. The keyed answer is “Only the targets specified in the scan configuration, using the selected zone's scanner assignment”. Source explanation: When a single available scan zone is selected for an active scan, Tenable Security Center uses that zone for scanner selection but scans the targets specified in the scan configuration. The documented behavior is that it ignores the scan zone ranges as a target list in this case. The zone still matters because it determines scanner reachability.",
      "The source answer key does not select this alternative: “Only hosts already present in the import repository”. The keyed answer is “Only the targets specified in the scan configuration, using the selected zone's scanner assignment”. Source explanation: When a single available scan zone is selected for an active scan, Tenable Security Center uses that zone for scanner selection but scans the targets specified in the scan configuration. The documented behavior is that it ignores the scan zone ranges as a target list in this case. The zone still matters because it determines scanner reachability."
    ]
  },
  {
    "id": "SC-Q076",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "An organization uses the Automatic Distribution Only scan distribution method. What change should scan creators expect in active scan configuration?",
    "o": [
      "Users can choose any scanner directly without scan zones",
      "Tenable Security Center chooses one or more scan zones automatically and hides manual scan zone selection",
      "All scans are blocked until an administrator enables external repositories",
      "Users must always choose exactly one scan zone before a scan can launch"
    ],
    "a": "B",
    "e": "Automatic Distribution Only causes Tenable Security Center to choose scan zones for organizational scans automatically. In that mode, organizational users do not manually choose a scan zone in the scan configuration. This is useful when the organization wants consistent zone routing for complex or overlapping address spaces.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-076",
    "x": [
      "The source answer key does not select this alternative: “Users can choose any scanner directly without scan zones”. The keyed answer is “Tenable Security Center chooses one or more scan zones automatically and hides manual scan zone selection”. Source explanation: Automatic Distribution Only causes Tenable Security Center to choose scan zones for organizational scans automatically. In that mode, organizational users do not manually choose a scan zone in the scan configuration. This is useful when the organization wants consistent zone routing for complex or overlapping address spaces.",
      "Automatic Distribution Only causes Tenable Security Center to choose scan zones for organizational scans automatically. In that mode, organizational users do not manually choose a scan zone in the scan configuration. This is useful when the organization wants consistent zone routing for complex or overlapping address spaces.",
      "The source answer key does not select this alternative: “All scans are blocked until an administrator enables external repositories”. The keyed answer is “Tenable Security Center chooses one or more scan zones automatically and hides manual scan zone selection”. Source explanation: Automatic Distribution Only causes Tenable Security Center to choose scan zones for organizational scans automatically. In that mode, organizational users do not manually choose a scan zone in the scan configuration. This is useful when the organization wants consistent zone routing for complex or overlapping address spaces.",
      "The source answer key does not select this alternative: “Users must always choose exactly one scan zone before a scan can launch”. The keyed answer is “Tenable Security Center chooses one or more scan zones automatically and hides manual scan zone selection”. Source explanation: Automatic Distribution Only causes Tenable Security Center to choose scan zones for organizational scans automatically. In that mode, organizational users do not manually choose a scan zone in the scan configuration. This is useful when the organization wants consistent zone routing for complex or overlapping address spaces."
    ]
  },
  {
    "id": "SC-Q077",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "A dashboard trend chart is blank for a repository even though current vulnerability data exists. Which repository setting is most directly related to generating the historical snapshots needed for trend displays?",
    "o": [
      "Linked User Accounts",
      "Dark Mode",
      "Restricted Scan Ranges",
      "Generate Trend Data"
    ],
    "a": "D",
    "e": "Generate Trend Data causes Tenable Security Center to take periodic cumulative-database snapshots for trending displays in dashboards and reports. Days Trending then controls how much historical trend data can be displayed. If trend data is not generated, current results can exist while trend components lack history.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-077",
    "x": [
      "The source answer key does not select this alternative: “Linked User Accounts”. The keyed answer is “Generate Trend Data”. Source explanation: Generate Trend Data causes Tenable Security Center to take periodic cumulative-database snapshots for trending displays in dashboards and reports. Days Trending then controls how much historical trend data can be displayed. If trend data is not generated, current results can exist while trend components lack history.",
      "The source answer key does not select this alternative: “Dark Mode”. The keyed answer is “Generate Trend Data”. Source explanation: Generate Trend Data causes Tenable Security Center to take periodic cumulative-database snapshots for trending displays in dashboards and reports. Days Trending then controls how much historical trend data can be displayed. If trend data is not generated, current results can exist while trend components lack history.",
      "The source answer key does not select this alternative: “Restricted Scan Ranges”. The keyed answer is “Generate Trend Data”. Source explanation: Generate Trend Data causes Tenable Security Center to take periodic cumulative-database snapshots for trending displays in dashboards and reports. Days Trending then controls how much historical trend data can be displayed. If trend data is not generated, current results can exist while trend components lack history.",
      "Generate Trend Data causes Tenable Security Center to take periodic cumulative-database snapshots for trending displays in dashboards and reports. Days Trending then controls how much historical trend data can be displayed. If trend data is not generated, current results can exist while trend components lack history."
    ]
  },
  {
    "id": "SC-Q078",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "Which repository data lifetime setting has a shorter documented default than active, compliance, and mitigated data lifetimes?",
    "o": [
      "Mitigated vulnerability data",
      "Passive vulnerability data from Tenable Network Monitor",
      "Active agent scan vulnerability data",
      "Compliance audit data"
    ],
    "a": "B",
    "e": "The documented default passive vulnerability data lifetime is 7 days, while active, compliance, and mitigated data lifetimes default to 365 days. This matters when teams expect passive findings from Tenable Network Monitor to remain available for the same period as active scan data. Repository retention should be tuned to match reporting and investigation needs.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-078",
    "x": [
      "The source answer key does not select this alternative: “Mitigated vulnerability data”. The keyed answer is “Passive vulnerability data from Tenable Network Monitor”. Source explanation: The documented default passive vulnerability data lifetime is 7 days, while active, compliance, and mitigated data lifetimes default to 365 days. This matters when teams expect passive findings from Tenable Network Monitor to remain available for the same period as active scan data. Repository retention should be tuned to match reporting and investigation needs.",
      "The documented default passive vulnerability data lifetime is 7 days, while active, compliance, and mitigated data lifetimes default to 365 days. This matters when teams expect passive findings from Tenable Network Monitor to remain available for the same period as active scan data. Repository retention should be tuned to match reporting and investigation needs.",
      "The source answer key does not select this alternative: “Active agent scan vulnerability data”. The keyed answer is “Passive vulnerability data from Tenable Network Monitor”. Source explanation: The documented default passive vulnerability data lifetime is 7 days, while active, compliance, and mitigated data lifetimes default to 365 days. This matters when teams expect passive findings from Tenable Network Monitor to remain available for the same period as active scan data. Repository retention should be tuned to match reporting and investigation needs.",
      "The source answer key does not select this alternative: “Compliance audit data”. The keyed answer is “Passive vulnerability data from Tenable Network Monitor”. Source explanation: The documented default passive vulnerability data lifetime is 7 days, while active, compliance, and mitigated data lifetimes default to 365 days. This matters when teams expect passive findings from Tenable Network Monitor to remain available for the same period as active scan data. Repository retention should be tuned to match reporting and investigation needs."
    ]
  },
  {
    "id": "SC-Q079",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "A central Tenable Security Center deployment needs static reporting data from an isolated Security Center that can only transfer files manually. Which repository type fits best?",
    "o": [
      "Offline repository",
      "Universal repository",
      "Agent repository",
      "Remote repository"
    ],
    "a": "A",
    "e": "Offline repositories allow repository data from another Tenable Security Center deployment to be shared through manual export and import of archive files. Remote repositories use an SSH session to access data from another deployment. Universal and agent repositories are local data storage types, not manual external repository transfer methods.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-079",
    "x": [
      "Offline repositories allow repository data from another Tenable Security Center deployment to be shared through manual export and import of archive files. Remote repositories use an SSH session to access data from another deployment. Universal and agent repositories are local data storage types, not manual external repository transfer methods.",
      "The source answer key does not select this alternative: “Universal repository”. The keyed answer is “Offline repository”. Source explanation: Offline repositories allow repository data from another Tenable Security Center deployment to be shared through manual export and import of archive files. Remote repositories use an SSH session to access data from another deployment. Universal and agent repositories are local data storage types, not manual external repository transfer methods.",
      "The source answer key does not select this alternative: “Agent repository”. The keyed answer is “Offline repository”. Source explanation: Offline repositories allow repository data from another Tenable Security Center deployment to be shared through manual export and import of archive files. Remote repositories use an SSH session to access data from another deployment. Universal and agent repositories are local data storage types, not manual external repository transfer methods.",
      "The source answer key does not select this alternative: “Remote repository”. The keyed answer is “Offline repository”. Source explanation: Offline repositories allow repository data from another Tenable Security Center deployment to be shared through manual export and import of archive files. Remote repositories use an SSH session to access data from another deployment. Universal and agent repositories are local data storage types, not manual external repository transfer methods."
    ]
  },
  {
    "id": "SC-Q080",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "An organizational user cannot generate a DISA ASR report even though they can create ordinary custom reports. What prerequisite is likely missing?",
    "o": [
      "The scan was scheduled as On Demand instead of Daily",
      "An administrator has not enabled the specialized DISA report generation option",
      "The dashboard was not refreshed before the report was created",
      "The user has not converted the repository to an offline repository"
    ],
    "a": "B",
    "e": "Tenable Security Center includes specialized report types such as CyberScope and DISA ASR/ARF reports, but an administrator must enable the related report generation options before organizational users can generate them. Ordinary reporting access alone does not necessarily enable those specialized formats. This is a platform configuration issue rather than a scan schedule issue.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-080",
    "x": [
      "The source answer key does not select this alternative: “The scan was scheduled as On Demand instead of Daily”. The keyed answer is “An administrator has not enabled the specialized DISA report generation option”. Source explanation: Tenable Security Center includes specialized report types such as CyberScope and DISA ASR/ARF reports, but an administrator must enable the related report generation options before organizational users can generate them. Ordinary reporting access alone does not necessarily enable those specialized formats. This is a platform configuration issue rather than a scan schedule issue.",
      "Tenable Security Center includes specialized report types such as CyberScope and DISA ASR/ARF reports, but an administrator must enable the related report generation options before organizational users can generate them. Ordinary reporting access alone does not necessarily enable those specialized formats. This is a platform configuration issue rather than a scan schedule issue.",
      "The source answer key does not select this alternative: “The dashboard was not refreshed before the report was created”. The keyed answer is “An administrator has not enabled the specialized DISA report generation option”. Source explanation: Tenable Security Center includes specialized report types such as CyberScope and DISA ASR/ARF reports, but an administrator must enable the related report generation options before organizational users can generate them. Ordinary reporting access alone does not necessarily enable those specialized formats. This is a platform configuration issue rather than a scan schedule issue.",
      "The source answer key does not select this alternative: “The user has not converted the repository to an offline repository”. The keyed answer is “An administrator has not enabled the specialized DISA report generation option”. Source explanation: Tenable Security Center includes specialized report types such as CyberScope and DISA ASR/ARF reports, but an administrator must enable the related report generation options before organizational users can generate them. Ordinary reporting access alone does not necessarily enable those specialized formats. This is a platform configuration issue rather than a scan schedule issue."
    ]
  },
  {
    "id": "SC-Q081",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "An analyst wants to analyze only vulnerabilities from the Windows plugin family and then narrow further to a specific plugin ID range. Which filter components should they use?",
    "o": [
      "Scan Zone and Available Zones",
      "Plugin Family and Plugin ID",
      "User Role and Group Relationship",
      "Repository and Dashboard Layout"
    ],
    "a": "B",
    "e": "The vulnerability analysis filters include Plugin Family and Plugin ID components. Plugin Family limits results to vulnerabilities from a selected Nessus or Tenable Network Monitor plugin family, while Plugin ID can match a specific ID or range. The other choices are administrative scoping concepts rather than vulnerability plugin filters.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-081",
    "x": [
      "The source answer key does not select this alternative: “Scan Zone and Available Zones”. The keyed answer is “Plugin Family and Plugin ID”. Source explanation: The vulnerability analysis filters include Plugin Family and Plugin ID components. Plugin Family limits results to vulnerabilities from a selected Nessus or Tenable Network Monitor plugin family, while Plugin ID can match a specific ID or range. The other choices are administrative scoping concepts rather than vulnerability plugin filters.",
      "The vulnerability analysis filters include Plugin Family and Plugin ID components. Plugin Family limits results to vulnerabilities from a selected Nessus or Tenable Network Monitor plugin family, while Plugin ID can match a specific ID or range. The other choices are administrative scoping concepts rather than vulnerability plugin filters.",
      "The source answer key does not select this alternative: “User Role and Group Relationship”. The keyed answer is “Plugin Family and Plugin ID”. Source explanation: The vulnerability analysis filters include Plugin Family and Plugin ID components. Plugin Family limits results to vulnerabilities from a selected Nessus or Tenable Network Monitor plugin family, while Plugin ID can match a specific ID or range. The other choices are administrative scoping concepts rather than vulnerability plugin filters.",
      "The source answer key does not select this alternative: “Repository and Dashboard Layout”. The keyed answer is “Plugin Family and Plugin ID”. Source explanation: The vulnerability analysis filters include Plugin Family and Plugin ID components. Plugin Family limits results to vulnerabilities from a selected Nessus or Tenable Network Monitor plugin family, while Plugin ID can match a specific ID or range. The other choices are administrative scoping concepts rather than vulnerability plugin filters."
    ]
  },
  {
    "id": "SC-Q082",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "A vulnerability no longer appears in the current cumulative results but must be reviewed as previously fixed. Which Tenable Security Center view is intended for that data?",
    "o": [
      "Scan zone detail view",
      "Credential detail view",
      "Mitigated vulnerability view",
      "Current cumulative vulnerability view"
    ],
    "a": "C",
    "e": "The Vulnerabilities page can display data from either the cumulative or mitigated vulnerability database. The mitigated view is used for vulnerabilities that are no longer currently observed but are retained as mitigation history. Cumulative view focuses on currently known vulnerability data.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-082",
    "x": [
      "The source answer key does not select this alternative: “Scan zone detail view”. The keyed answer is “Mitigated vulnerability view”. Source explanation: The Vulnerabilities page can display data from either the cumulative or mitigated vulnerability database. The mitigated view is used for vulnerabilities that are no longer currently observed but are retained as mitigation history. Cumulative view focuses on currently known vulnerability data.",
      "The source answer key does not select this alternative: “Credential detail view”. The keyed answer is “Mitigated vulnerability view”. Source explanation: The Vulnerabilities page can display data from either the cumulative or mitigated vulnerability database. The mitigated view is used for vulnerabilities that are no longer currently observed but are retained as mitigation history. Cumulative view focuses on currently known vulnerability data.",
      "The Vulnerabilities page can display data from either the cumulative or mitigated vulnerability database. The mitigated view is used for vulnerabilities that are no longer currently observed but are retained as mitigation history. Cumulative view focuses on currently known vulnerability data.",
      "The source answer key does not select this alternative: “Current cumulative vulnerability view”. The keyed answer is “Mitigated vulnerability view”. Source explanation: The Vulnerabilities page can display data from either the cumulative or mitigated vulnerability database. The mitigated view is used for vulnerabilities that are no longer currently observed but are retained as mitigation history. Cumulative view focuses on currently known vulnerability data."
    ]
  },
  {
    "id": "SC-Q083",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A long active scan reaches its configured timeout and some hosts were not scanned. Which Scan Timeout Action preserves completed results and creates a follow-up scan for unfinished hosts?",
    "o": [
      "Import Completed Results With Rollover",
      "Discard Results",
      "Import Completed Results",
      "Scan Virtual Hosts"
    ],
    "a": "A",
    "e": "Import Completed Results With Rollover imports the results gathered so far and creates a rollover scan that can be launched to complete the scan. Import Completed Results preserves current results but discards information for unscanned hosts. Discard Results throws away the scan data, and Scan Virtual Hosts is unrelated to timeout handling.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-083",
    "x": [
      "Import Completed Results With Rollover imports the results gathered so far and creates a rollover scan that can be launched to complete the scan. Import Completed Results preserves current results but discards information for unscanned hosts. Discard Results throws away the scan data, and Scan Virtual Hosts is unrelated to timeout handling.",
      "The source answer key does not select this alternative: “Discard Results”. The keyed answer is “Import Completed Results With Rollover”. Source explanation: Import Completed Results With Rollover imports the results gathered so far and creates a rollover scan that can be launched to complete the scan. Import Completed Results preserves current results but discards information for unscanned hosts. Discard Results throws away the scan data, and Scan Virtual Hosts is unrelated to timeout handling.",
      "The source answer key does not select this alternative: “Import Completed Results”. The keyed answer is “Import Completed Results With Rollover”. Source explanation: Import Completed Results With Rollover imports the results gathered so far and creates a rollover scan that can be launched to complete the scan. Import Completed Results preserves current results but discards information for unscanned hosts. Discard Results throws away the scan data, and Scan Virtual Hosts is unrelated to timeout handling.",
      "The source answer key does not select this alternative: “Scan Virtual Hosts”. The keyed answer is “Import Completed Results With Rollover”. Source explanation: Import Completed Results With Rollover imports the results gathered so far and creates a rollover scan that can be launched to complete the scan. Import Completed Results preserves current results but discards information for unscanned hosts. Discard Results throws away the scan data, and Scan Virtual Hosts is unrelated to timeout handling."
    ]
  },
  {
    "id": "SC-Q084",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A laptop receives a new DHCP address between scans. Which tracking order does Tenable Security Center use when the DHCP tracking option is enabled?",
    "o": [
      "Repository UUID first, then scan zone, then dashboard component ID",
      "MAC address first, then IP address, then CVE ID, then repository name",
      "Agent ID first for all hosts, then plugin ID, then DNS name",
      "DNS name, then NetBIOS name, then Agent ID, then MAC address if known"
    ],
    "a": "D",
    "e": "The DHCP tracking option uses DNS name, NetBIOS name, Agent ID, and MAC address if known, in that order, to match a host whose IP address changes. Once a match is found, Tenable Security Center stops searching for additional matches. This helps prevent DHCP address churn from fragmenting host history.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-084",
    "x": [
      "The source answer key does not select this alternative: “Repository UUID first, then scan zone, then dashboard component ID”. The keyed answer is “DNS name, then NetBIOS name, then Agent ID, then MAC address if known”. Source explanation: The DHCP tracking option uses DNS name, NetBIOS name, Agent ID, and MAC address if known, in that order, to match a host whose IP address changes. Once a match is found, Tenable Security Center stops searching for additional matches. This helps prevent DHCP address churn from fragmenting host history.",
      "The source answer key does not select this alternative: “MAC address first, then IP address, then CVE ID, then repository name”. The keyed answer is “DNS name, then NetBIOS name, then Agent ID, then MAC address if known”. Source explanation: The DHCP tracking option uses DNS name, NetBIOS name, Agent ID, and MAC address if known, in that order, to match a host whose IP address changes. Once a match is found, Tenable Security Center stops searching for additional matches. This helps prevent DHCP address churn from fragmenting host history.",
      "The source answer key does not select this alternative: “Agent ID first for all hosts, then plugin ID, then DNS name”. The keyed answer is “DNS name, then NetBIOS name, then Agent ID, then MAC address if known”. Source explanation: The DHCP tracking option uses DNS name, NetBIOS name, Agent ID, and MAC address if known, in that order, to match a host whose IP address changes. Once a match is found, Tenable Security Center stops searching for additional matches. This helps prevent DHCP address churn from fragmenting host history.",
      "The DHCP tracking option uses DNS name, NetBIOS name, Agent ID, and MAC address if known, in that order, to match a host whose IP address changes. Once a match is found, Tenable Security Center stops searching for additional matches. This helps prevent DHCP address churn from fragmenting host history."
    ]
  },
  {
    "id": "SC-Q085",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A web server hosts several sites on the same IP address with different DNS names. What is the effect of enabling Scan Virtual Hosts in an active scan policy?",
    "o": [
      "The scan converts every web finding to a host-based plugin with port 0",
      "The scan disables web application results unless a separate license is installed",
      "The scan ignores DNS names and scans only the first resolved IP address",
      "New DNS names for the same IP can appear as separate vulnerability data entries instead of merging into one IP entry"
    ],
    "a": "D",
    "e": "Scan Virtual Hosts tells Tenable Security Center to treat a new DNS entry for the same IP address as a virtual host. With the option enabled, vulnerability data for different DNS names can appear as separate entries with the same IP address. With it disabled, that data merges into a single IP address entry.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-085",
    "x": [
      "The source answer key does not select this alternative: “The scan converts every web finding to a host-based plugin with port 0”. The keyed answer is “New DNS names for the same IP can appear as separate vulnerability data entries instead of merging into one IP entry”. Source explanation: Scan Virtual Hosts tells Tenable Security Center to treat a new DNS entry for the same IP address as a virtual host. With the option enabled, vulnerability data for different DNS names can appear as separate entries with the same IP address. With it disabled, that data merges into a single IP address entry.",
      "The source answer key does not select this alternative: “The scan disables web application results unless a separate license is installed”. The keyed answer is “New DNS names for the same IP can appear as separate vulnerability data entries instead of merging into one IP entry”. Source explanation: Scan Virtual Hosts tells Tenable Security Center to treat a new DNS entry for the same IP address as a virtual host. With the option enabled, vulnerability data for different DNS names can appear as separate entries with the same IP address. With it disabled, that data merges into a single IP address entry.",
      "The source answer key does not select this alternative: “The scan ignores DNS names and scans only the first resolved IP address”. The keyed answer is “New DNS names for the same IP can appear as separate vulnerability data entries instead of merging into one IP entry”. Source explanation: Scan Virtual Hosts tells Tenable Security Center to treat a new DNS entry for the same IP address as a virtual host. With the option enabled, vulnerability data for different DNS names can appear as separate entries with the same IP address. With it disabled, that data merges into a single IP address entry.",
      "Scan Virtual Hosts tells Tenable Security Center to treat a new DNS entry for the same IP address as a virtual host. With the option enabled, vulnerability data for different DNS names can appear as separate entries with the same IP address. With it disabled, that data merges into a single IP address entry."
    ]
  },
  {
    "id": "SC-Q086",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "A user needs broad organizational scanning and policy abilities but should not manage groups or users. Which built-in role most closely matches this need?",
    "o": [
      "Security Analyst",
      "Executive",
      "Auditor",
      "No Role"
    ],
    "a": "A",
    "e": "The Security Analyst role is intended for advanced organizational users and can perform organizational-level actions except managing groups and users. That fits a trusted operator who needs scanning and policy-related abilities without user administration. Auditor, Executive, and No Role are much more limited for operational scanning work.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-086",
    "x": [
      "The Security Analyst role is intended for advanced organizational users and can perform organizational-level actions except managing groups and users. That fits a trusted operator who needs scanning and policy-related abilities without user administration. Auditor, Executive, and No Role are much more limited for operational scanning work.",
      "The source answer key does not select this alternative: “Executive”. The keyed answer is “Security Analyst”. Source explanation: The Security Analyst role is intended for advanced organizational users and can perform organizational-level actions except managing groups and users. That fits a trusted operator who needs scanning and policy-related abilities without user administration. Auditor, Executive, and No Role are much more limited for operational scanning work.",
      "The source answer key does not select this alternative: “Auditor”. The keyed answer is “Security Analyst”. Source explanation: The Security Analyst role is intended for advanced organizational users and can perform organizational-level actions except managing groups and users. That fits a trusted operator who needs scanning and policy-related abilities without user administration. Auditor, Executive, and No Role are much more limited for operational scanning work.",
      "The source answer key does not select this alternative: “No Role”. The keyed answer is “Security Analyst”. Source explanation: The Security Analyst role is intended for advanced organizational users and can perform organizational-level actions except managing groups and users. That fits a trusted operator who needs scanning and policy-related abilities without user administration. Auditor, Executive, and No Role are much more limited for operational scanning work."
    ]
  },
  {
    "id": "SC-Q087",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A team imports a scan policy exported from another Tenable Security Center instance and discovers the scan does not include expected credentials or audit files. What is the correct interpretation?",
    "o": [
      "Exported or imported scan policy files do not include credentials or audit files, so those must be configured separately",
      "The import failed because credentials and audit files are mandatory inside every policy file",
      "The policy can use credentials only if it is converted to a remediation scan",
      "Credentials and audit files are included only when the target repository is universal"
    ],
    "a": "A",
    "e": "Tenable documents that exported scan policy files do not include audit files or credentials. After importing a policy, administrators or organizational users must configure the needed audit files and credentials in the destination environment. This prevents assuming that sensitive credential material travels with policy exports.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-087",
    "x": [
      "Tenable documents that exported scan policy files do not include audit files or credentials. After importing a policy, administrators or organizational users must configure the needed audit files and credentials in the destination environment. This prevents assuming that sensitive credential material travels with policy exports.",
      "The source answer key does not select this alternative: “The import failed because credentials and audit files are mandatory inside every policy file”. The keyed answer is “Exported or imported scan policy files do not include credentials or audit files, so those must be configured separately”. Source explanation: Tenable documents that exported scan policy files do not include audit files or credentials. After importing a policy, administrators or organizational users must configure the needed audit files and credentials in the destination environment. This prevents assuming that sensitive credential material travels with policy exports.",
      "The source answer key does not select this alternative: “The policy can use credentials only if it is converted to a remediation scan”. The keyed answer is “Exported or imported scan policy files do not include credentials or audit files, so those must be configured separately”. Source explanation: Tenable documents that exported scan policy files do not include audit files or credentials. After importing a policy, administrators or organizational users must configure the needed audit files and credentials in the destination environment. This prevents assuming that sensitive credential material travels with policy exports.",
      "The source answer key does not select this alternative: “Credentials and audit files are included only when the target repository is universal”. The keyed answer is “Exported or imported scan policy files do not include credentials or audit files, so those must be configured separately”. Source explanation: Tenable documents that exported scan policy files do not include audit files or credentials. After importing a policy, administrators or organizational users must configure the needed audit files and credentials in the destination environment. This prevents assuming that sensitive credential material travels with policy exports."
    ]
  },
  {
    "id": "SC-Q088",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "A dashboard contains dozens of unrelated components and users struggle to analyze active scan data separately from passive event data. What design change aligns with Tenable's dashboard guidance?",
    "o": [
      "Replace dashboard components with static text blocks that summarize yesterday's findings",
      "Create separate dashboards that group similar components, such as one for active scanning data and one for passive data",
      "Put every component into a single dashboard so users never switch pages",
      "Disable all dashboard templates and require only custom PDF reports"
    ],
    "a": "B",
    "e": "Tenable recommends organizing similar dashboard components to streamline analysis rather than placing many unrelated components in one dashboard. Separate dashboards for active scanning and passive data make the view easier to interpret. Users can still drill into underlying vulnerability or event data when needed.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-088",
    "x": [
      "The source answer key does not select this alternative: “Replace dashboard components with static text blocks that summarize yesterday's findings”. The keyed answer is “Create separate dashboards that group similar components, such as one for active scanning data and one for passive data”. Source explanation: Tenable recommends organizing similar dashboard components to streamline analysis rather than placing many unrelated components in one dashboard. Separate dashboards for active scanning and passive data make the view easier to interpret. Users can still drill into underlying vulnerability or event data when needed.",
      "Tenable recommends organizing similar dashboard components to streamline analysis rather than placing many unrelated components in one dashboard. Separate dashboards for active scanning and passive data make the view easier to interpret. Users can still drill into underlying vulnerability or event data when needed.",
      "The source answer key does not select this alternative: “Put every component into a single dashboard so users never switch pages”. The keyed answer is “Create separate dashboards that group similar components, such as one for active scanning data and one for passive data”. Source explanation: Tenable recommends organizing similar dashboard components to streamline analysis rather than placing many unrelated components in one dashboard. Separate dashboards for active scanning and passive data make the view easier to interpret. Users can still drill into underlying vulnerability or event data when needed.",
      "The source answer key does not select this alternative: “Disable all dashboard templates and require only custom PDF reports”. The keyed answer is “Create separate dashboards that group similar components, such as one for active scanning data and one for passive data”. Source explanation: Tenable recommends organizing similar dashboard components to streamline analysis rather than placing many unrelated components in one dashboard. Separate dashboards for active scanning and passive data make the view easier to interpret. Users can still drill into underlying vulnerability or event data when needed."
    ]
  },
  {
    "id": "SC-Q089",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "An agent scan in Tenable Security Center shows incomplete results because Security Center fetched data before agents finished uploading. Which setting should be reviewed?",
    "o": [
      "PDF report Java dependency",
      "Scan Window duration for the agent scan",
      "Dashboard column layout",
      "Repository organization access"
    ],
    "a": "B",
    "e": "For agent scans, the Scan Window is the time allowed from scheduled start for agents to receive the job, run it, and upload results before Security Center fetches the data. If the window expires before agent-side scanning finishes, Security Center displays the results available at that time. Tenable recommends setting a window that allows agent scans to complete before results are fetched.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-089",
    "x": [
      "The source answer key does not select this alternative: “PDF report Java dependency”. The keyed answer is “Scan Window duration for the agent scan”. Source explanation: For agent scans, the Scan Window is the time allowed from scheduled start for agents to receive the job, run it, and upload results before Security Center fetches the data. If the window expires before agent-side scanning finishes, Security Center displays the results available at that time. Tenable recommends setting a window that allows agent scans to complete before results are fetched.",
      "For agent scans, the Scan Window is the time allowed from scheduled start for agents to receive the job, run it, and upload results before Security Center fetches the data. If the window expires before agent-side scanning finishes, Security Center displays the results available at that time. Tenable recommends setting a window that allows agent scans to complete before results are fetched.",
      "The source answer key does not select this alternative: “Dashboard column layout”. The keyed answer is “Scan Window duration for the agent scan”. Source explanation: For agent scans, the Scan Window is the time allowed from scheduled start for agents to receive the job, run it, and upload results before Security Center fetches the data. If the window expires before agent-side scanning finishes, Security Center displays the results available at that time. Tenable recommends setting a window that allows agent scans to complete before results are fetched.",
      "The source answer key does not select this alternative: “Repository organization access”. The keyed answer is “Scan Window duration for the agent scan”. Source explanation: For agent scans, the Scan Window is the time allowed from scheduled start for agents to receive the job, run it, and upload results before Security Center fetches the data. If the window expires before agent-side scanning finishes, Security Center displays the results available at that time. Tenable recommends setting a window that allows agent scans to complete before results are fetched."
    ]
  },
  {
    "id": "SC-Q090",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "An analyst wants vulnerability analysis to show only Tenable Web App Scanning results. Which condition must be accounted for when using the Web App Scanning filter?",
    "o": [
      "It requires all findings to be host-based checks on port 0",
      "It is available only to Administrator users outside organizations",
      "It works only in the mitigated view and never in the cumulative view",
      "It requires the additional Web App Scanning license and a supported Nessus version"
    ],
    "a": "D",
    "e": "The Web App Scanning vulnerability analysis filter is documented with an additional Tenable Web App Scanning license requirement and a supported Tenable Nessus version requirement. It can be used to exclude, include, or show only web app scan results. It is not limited to host-based port 0 checks.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-090",
    "x": [
      "The source answer key does not select this alternative: “It requires all findings to be host-based checks on port 0”. The keyed answer is “It requires the additional Web App Scanning license and a supported Nessus version”. Source explanation: The Web App Scanning vulnerability analysis filter is documented with an additional Tenable Web App Scanning license requirement and a supported Tenable Nessus version requirement. It can be used to exclude, include, or show only web app scan results. It is not limited to host-based port 0 checks.",
      "The source answer key does not select this alternative: “It is available only to Administrator users outside organizations”. The keyed answer is “It requires the additional Web App Scanning license and a supported Nessus version”. Source explanation: The Web App Scanning vulnerability analysis filter is documented with an additional Tenable Web App Scanning license requirement and a supported Tenable Nessus version requirement. It can be used to exclude, include, or show only web app scan results. It is not limited to host-based port 0 checks.",
      "The source answer key does not select this alternative: “It works only in the mitigated view and never in the cumulative view”. The keyed answer is “It requires the additional Web App Scanning license and a supported Nessus version”. Source explanation: The Web App Scanning vulnerability analysis filter is documented with an additional Tenable Web App Scanning license requirement and a supported Tenable Nessus version requirement. It can be used to exclude, include, or show only web app scan results. It is not limited to host-based port 0 checks.",
      "The Web App Scanning vulnerability analysis filter is documented with an additional Tenable Web App Scanning license requirement and a supported Tenable Nessus version requirement. It can be used to exclude, include, or show only web app scan results. It is not limited to host-based port 0 checks."
    ]
  },
  {
    "id": "SC-Q091",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "A manager asks why a host discovery scan did not increase the organization's licensed asset count. What is the best answer?",
    "o": [
      "All active scans count toward the license regardless of whether they find vulnerabilities",
      "Only unauthenticated scans count toward the license",
      "Only scans launched from dashboards count toward the license",
      "Discovery scans identify assets and do not count toward the license, while assessment scans generally do"
    ],
    "a": "D",
    "e": "Tenable distinguishes discovery scans, which find assets, from assessment scans, which find vulnerabilities. Assets identified by discovery scans do not count toward the license, while assets assessed by assessment scans generally do. This distinction is important when planning discovery coverage before vulnerability assessment.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-091",
    "x": [
      "The source answer key does not select this alternative: “All active scans count toward the license regardless of whether they find vulnerabilities”. The keyed answer is “Discovery scans identify assets and do not count toward the license, while assessment scans generally do”. Source explanation: Tenable distinguishes discovery scans, which find assets, from assessment scans, which find vulnerabilities. Assets identified by discovery scans do not count toward the license, while assets assessed by assessment scans generally do. This distinction is important when planning discovery coverage before vulnerability assessment.",
      "The source answer key does not select this alternative: “Only unauthenticated scans count toward the license”. The keyed answer is “Discovery scans identify assets and do not count toward the license, while assessment scans generally do”. Source explanation: Tenable distinguishes discovery scans, which find assets, from assessment scans, which find vulnerabilities. Assets identified by discovery scans do not count toward the license, while assets assessed by assessment scans generally do. This distinction is important when planning discovery coverage before vulnerability assessment.",
      "The source answer key does not select this alternative: “Only scans launched from dashboards count toward the license”. The keyed answer is “Discovery scans identify assets and do not count toward the license, while assessment scans generally do”. Source explanation: Tenable distinguishes discovery scans, which find assets, from assessment scans, which find vulnerabilities. Assets identified by discovery scans do not count toward the license, while assets assessed by assessment scans generally do. This distinction is important when planning discovery coverage before vulnerability assessment.",
      "Tenable distinguishes discovery scans, which find assets, from assessment scans, which find vulnerabilities. Assets identified by discovery scans do not count toward the license, while assets assessed by assessment scans generally do. This distinction is important when planning discovery coverage before vulnerability assessment."
    ]
  },
  {
    "id": "SC-Q092",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "An organization should be able to scan only approved ranges, even though users can create their own active scans. Which organization setting addresses ranges users must not scan?",
    "o": [
      "Restricted Scan Ranges",
      "Accessible Repositories",
      "Dark Mode",
      "Report Images"
    ],
    "a": "A",
    "e": "Restricted Scan Ranges define IP address ranges that users in the organization are not allowed to scan. This control helps administrators enforce boundaries even when organizational users have scan creation permissions. Accessible Repositories control analysis data access, not prohibited scan targets.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-092",
    "x": [
      "Restricted Scan Ranges define IP address ranges that users in the organization are not allowed to scan. This control helps administrators enforce boundaries even when organizational users have scan creation permissions. Accessible Repositories control analysis data access, not prohibited scan targets.",
      "The source answer key does not select this alternative: “Accessible Repositories”. The keyed answer is “Restricted Scan Ranges”. Source explanation: Restricted Scan Ranges define IP address ranges that users in the organization are not allowed to scan. This control helps administrators enforce boundaries even when organizational users have scan creation permissions. Accessible Repositories control analysis data access, not prohibited scan targets.",
      "The source answer key does not select this alternative: “Dark Mode”. The keyed answer is “Restricted Scan Ranges”. Source explanation: Restricted Scan Ranges define IP address ranges that users in the organization are not allowed to scan. This control helps administrators enforce boundaries even when organizational users have scan creation permissions. Accessible Repositories control analysis data access, not prohibited scan targets.",
      "The source answer key does not select this alternative: “Report Images”. The keyed answer is “Restricted Scan Ranges”. Source explanation: Restricted Scan Ranges define IP address ranges that users in the organization are not allowed to scan. This control helps administrators enforce boundaries even when organizational users have scan creation permissions. Accessible Repositories control analysis data access, not prohibited scan targets."
    ]
  },
  {
    "id": "SC-Q093",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "An analyst launches a remediation scan from Vulnerability Summary and finds the repository, target IP address, and port fields are not pre-populated as expected. Why is this behavior valid?",
    "o": [
      "Remediation scans never populate repository, target, or port fields from analysis views",
      "The fields are populated only after the remediation scan completes",
      "Vulnerability Summary may aggregate multiple repositories, IPs, and ports, so those fields can be default or empty",
      "Only agent repository findings can pre-populate remediation scan fields"
    ],
    "a": "C",
    "e": "Tenable documents different remediation scan behavior depending on the analysis view. Launching from Vulnerability List or Vulnerability Detail List can pre-populate repository, target IP, and port from the specific finding. Launching from Vulnerability Summary may leave those fields default or empty because the summary row can represent multiple repositories, IPs, and ports.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-093",
    "x": [
      "The source answer key does not select this alternative: “Remediation scans never populate repository, target, or port fields from analysis views”. The keyed answer is “Vulnerability Summary may aggregate multiple repositories, IPs, and ports, so those fields can be default or empty”. Source explanation: Tenable documents different remediation scan behavior depending on the analysis view. Launching from Vulnerability List or Vulnerability Detail List can pre-populate repository, target IP, and port from the specific finding. Launching from Vulnerability Summary may leave those fields default or empty because the summary row can represent multiple repositories, IPs, and ports.",
      "The source answer key does not select this alternative: “The fields are populated only after the remediation scan completes”. The keyed answer is “Vulnerability Summary may aggregate multiple repositories, IPs, and ports, so those fields can be default or empty”. Source explanation: Tenable documents different remediation scan behavior depending on the analysis view. Launching from Vulnerability List or Vulnerability Detail List can pre-populate repository, target IP, and port from the specific finding. Launching from Vulnerability Summary may leave those fields default or empty because the summary row can represent multiple repositories, IPs, and ports.",
      "Tenable documents different remediation scan behavior depending on the analysis view. Launching from Vulnerability List or Vulnerability Detail List can pre-populate repository, target IP, and port from the specific finding. Launching from Vulnerability Summary may leave those fields default or empty because the summary row can represent multiple repositories, IPs, and ports.",
      "The source answer key does not select this alternative: “Only agent repository findings can pre-populate remediation scan fields”. The keyed answer is “Vulnerability Summary may aggregate multiple repositories, IPs, and ports, so those fields can be default or empty”. Source explanation: Tenable documents different remediation scan behavior depending on the analysis view. Launching from Vulnerability List or Vulnerability Detail List can pre-populate repository, target IP, and port from the specific finding. Launching from Vulnerability Summary may leave those fields default or empty because the summary row can represent multiple repositories, IPs, and ports."
    ]
  },
  {
    "id": "SC-Q094",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Dashboards Reports",
    "q": "A vulnerability found by an agent scan needs validation after patching. Which limitation must the team consider before using a Tenable Security Center remediation scan?",
    "o": [
      "Remediation scans must always scan every port on the target host",
      "Remediation scans can be performed only for active scan results, not for agent repository or OT Security scan results",
      "Remediation scans can run only against vulnerabilities with no dependent plugins",
      "Remediation scans require a scheduled scan policy before they can launch"
    ],
    "a": "B",
    "e": "Tenable Security Center remediation scans are follow-up active scans and are documented as available only for active scan results. They cannot be performed for agent repository scan results or Tenable OT Security scan results. If a selected plugin has dependent plugins, the system includes them automatically, but the remediation scan still evaluates the specified plugin and port context.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-094",
    "x": [
      "The source answer key does not select this alternative: “Remediation scans must always scan every port on the target host”. The keyed answer is “Remediation scans can be performed only for active scan results, not for agent repository or OT Security scan results”. Source explanation: Tenable Security Center remediation scans are follow-up active scans and are documented as available only for active scan results. They cannot be performed for agent repository scan results or Tenable OT Security scan results. If a selected plugin has dependent plugins, the system includes them automatically, but the remediation scan still evaluates the specified plugin and port context.",
      "Tenable Security Center remediation scans are follow-up active scans and are documented as available only for active scan results. They cannot be performed for agent repository scan results or Tenable OT Security scan results. If a selected plugin has dependent plugins, the system includes them automatically, but the remediation scan still evaluates the specified plugin and port context.",
      "The source answer key does not select this alternative: “Remediation scans can run only against vulnerabilities with no dependent plugins”. The keyed answer is “Remediation scans can be performed only for active scan results, not for agent repository or OT Security scan results”. Source explanation: Tenable Security Center remediation scans are follow-up active scans and are documented as available only for active scan results. They cannot be performed for agent repository scan results or Tenable OT Security scan results. If a selected plugin has dependent plugins, the system includes them automatically, but the remediation scan still evaluates the specified plugin and port context.",
      "The source answer key does not select this alternative: “Remediation scans require a scheduled scan policy before they can launch”. The keyed answer is “Remediation scans can be performed only for active scan results, not for agent repository or OT Security scan results”. Source explanation: Tenable Security Center remediation scans are follow-up active scans and are documented as available only for active scan results. They cannot be performed for agent repository scan results or Tenable OT Security scan results. If a selected plugin has dependent plugins, the system includes them automatically, but the remediation scan still evaluates the specified plugin and port context."
    ]
  },
  {
    "id": "SC-Q095",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "An enterprise has overlapping scan zones for coverage redundancy. What scanner-routing behavior should they expect for a target that matches multiple zones?",
    "o": [
      "Tenable Security Center first attempts the scan using the narrowest, most specific matching scan zone",
      "Tenable Security Center randomly chooses any matching zone to spread load evenly",
      "Tenable Security Center refuses to run any scan that matches overlapping zones",
      "Tenable Security Center always chooses the oldest scan zone by creation date"
    ],
    "a": "A",
    "e": "When redundant scan zones target the same network area, Tenable Security Center attempts scanning with the narrowest and most specific matching scan zone first. Overlapping zones can support coverage or redundancy, but Tenable warns not to configure them without planning the scan zone and distribution strategy. Poorly planned overlaps can route scans through the wrong scanners or links.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-095",
    "x": [
      "When redundant scan zones target the same network area, Tenable Security Center attempts scanning with the narrowest and most specific matching scan zone first. Overlapping zones can support coverage or redundancy, but Tenable warns not to configure them without planning the scan zone and distribution strategy. Poorly planned overlaps can route scans through the wrong scanners or links.",
      "The source answer key does not select this alternative: “Tenable Security Center randomly chooses any matching zone to spread load evenly”. The keyed answer is “Tenable Security Center first attempts the scan using the narrowest, most specific matching scan zone”. Source explanation: When redundant scan zones target the same network area, Tenable Security Center attempts scanning with the narrowest and most specific matching scan zone first. Overlapping zones can support coverage or redundancy, but Tenable warns not to configure them without planning the scan zone and distribution strategy. Poorly planned overlaps can route scans through the wrong scanners or links.",
      "The source answer key does not select this alternative: “Tenable Security Center refuses to run any scan that matches overlapping zones”. The keyed answer is “Tenable Security Center first attempts the scan using the narrowest, most specific matching scan zone”. Source explanation: When redundant scan zones target the same network area, Tenable Security Center attempts scanning with the narrowest and most specific matching scan zone first. Overlapping zones can support coverage or redundancy, but Tenable warns not to configure them without planning the scan zone and distribution strategy. Poorly planned overlaps can route scans through the wrong scanners or links.",
      "The source answer key does not select this alternative: “Tenable Security Center always chooses the oldest scan zone by creation date”. The keyed answer is “Tenable Security Center first attempts the scan using the narrowest, most specific matching scan zone”. Source explanation: When redundant scan zones target the same network area, Tenable Security Center attempts scanning with the narrowest and most specific matching scan zone first. Overlapping zones can support coverage or redundancy, but Tenable warns not to configure them without planning the scan zone and distribution strategy. Poorly planned overlaps can route scans through the wrong scanners or links."
    ]
  },
  {
    "id": "SC-Q096",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Repositories",
    "q": "A universal repository contains data from active Nessus scans, agents, and OT Security. Why does Tenable Security Center assign UUIDs to assets in asset repositories?",
    "o": [
      "Because UUIDs are required only for PDF report generation",
      "Because not all assets have stable IP addresses or Tenable UUIDs, and different data sources identify assets differently",
      "Because UUIDs replace the need to configure organization access to repositories",
      "Because UUIDs prevent passive vulnerability data from expiring"
    ],
    "a": "B",
    "e": "Asset repositories can include IP data, agent data, and OT Security data, and those sources do not all identify assets the same way. Tenable Security Center assigns UUIDs to uniquely identify vulnerability data where IP addresses or Tenable UUIDs may not be available or stable. This is especially important for agent-tracked laptops and OT assets without traditional IP assumptions.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-096",
    "x": [
      "The source answer key does not select this alternative: “Because UUIDs are required only for PDF report generation”. The keyed answer is “Because not all assets have stable IP addresses or Tenable UUIDs, and different data sources identify assets differently”. Source explanation: Asset repositories can include IP data, agent data, and OT Security data, and those sources do not all identify assets the same way. Tenable Security Center assigns UUIDs to uniquely identify vulnerability data where IP addresses or Tenable UUIDs may not be available or stable. This is especially important for agent-tracked laptops and OT assets without traditional IP assumptions.",
      "Asset repositories can include IP data, agent data, and OT Security data, and those sources do not all identify assets the same way. Tenable Security Center assigns UUIDs to uniquely identify vulnerability data where IP addresses or Tenable UUIDs may not be available or stable. This is especially important for agent-tracked laptops and OT assets without traditional IP assumptions.",
      "The source answer key does not select this alternative: “Because UUIDs replace the need to configure organization access to repositories”. The keyed answer is “Because not all assets have stable IP addresses or Tenable UUIDs, and different data sources identify assets differently”. Source explanation: Asset repositories can include IP data, agent data, and OT Security data, and those sources do not all identify assets the same way. Tenable Security Center assigns UUIDs to uniquely identify vulnerability data where IP addresses or Tenable UUIDs may not be available or stable. This is especially important for agent-tracked laptops and OT assets without traditional IP assumptions.",
      "The source answer key does not select this alternative: “Because UUIDs prevent passive vulnerability data from expiring”. The keyed answer is “Because not all assets have stable IP addresses or Tenable UUIDs, and different data sources identify assets differently”. Source explanation: Asset repositories can include IP data, agent data, and OT Security data, and those sources do not all identify assets the same way. Tenable Security Center assigns UUIDs to uniquely identify vulnerability data where IP addresses or Tenable UUIDs may not be available or stable. This is especially important for agent-tracked laptops and OT assets without traditional IP assumptions."
    ]
  },
  {
    "id": "SC-Q097",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "After a very large scan import, the next import is delayed while Security Center recalculates dynamic and combination asset lists. Which explanation matches the documented behavior?",
    "o": [
      "Dynamic and combination asset lists are recalculated only when a user manually refreshes a dashboard",
      "Asset list calculations are global across all repositories and always block every repository equally",
      "A scan import queues an asset calculation job per import repository, and the next scan import waits until that asset job completes",
      "Static asset lists trigger the same scan-import calculation delay because they depend on plugin output"
    ],
    "a": "C",
    "e": "When a scan import completes, Tenable Security Center queues a job to calculate dynamic and combination asset lists for the import repository. The next scan import for that repository waits until the asset calculation job finishes.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-097",
    "x": [
      "The source answer key does not select this alternative: “Dynamic and combination asset lists are recalculated only when a user manually refreshes a dashboard”. The keyed answer is “A scan import queues an asset calculation job per import repository, and the next scan import waits until that asset job completes”. Source explanation: When a scan import completes, Tenable Security Center queues a job to calculate dynamic and combination asset lists for the import repository. The next scan import for that repository waits until the asset calculation job finishes.",
      "The source answer key does not select this alternative: “Asset list calculations are global across all repositories and always block every repository equally”. The keyed answer is “A scan import queues an asset calculation job per import repository, and the next scan import waits until that asset job completes”. Source explanation: When a scan import completes, Tenable Security Center queues a job to calculate dynamic and combination asset lists for the import repository. The next scan import for that repository waits until the asset calculation job finishes.",
      "When a scan import completes, Tenable Security Center queues a job to calculate dynamic and combination asset lists for the import repository. The next scan import for that repository waits until the asset calculation job finishes.",
      "The source answer key does not select this alternative: “Static asset lists trigger the same scan-import calculation delay because they depend on plugin output”. The keyed answer is “A scan import queues an asset calculation job per import repository, and the next scan import waits until that asset job completes”. Source explanation: When a scan import completes, Tenable Security Center queues a job to calculate dynamic and combination asset lists for the import repository. The next scan import for that repository waits until the asset calculation job finishes."
    ]
  },
  {
    "id": "SC-Q098",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A production scan policy has an entire plugin family enabled. Tenable later adds new plugins to that family through the feed. What is the expected behavior?",
    "o": [
      "The new plugins are automatically enabled if the entire plugin family is enabled in the policy template",
      "The new plugins are imported only after exporting and reimporting the policy",
      "The new plugins are enabled only for administrator-created scan policies",
      "The new plugins stay disabled until each plugin is selected individually"
    ],
    "a": "A",
    "e": "When an entire plugin family is enabled in a scan policy template, Tenable Security Center automatically enables newly added plugins that belong to that family. Plugin family configuration therefore has future impact as plugin feeds change. This is one reason production policies should be reviewed carefully, especially for higher-risk plugin families.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-098",
    "x": [
      "When an entire plugin family is enabled in a scan policy template, Tenable Security Center automatically enables newly added plugins that belong to that family. Plugin family configuration therefore has future impact as plugin feeds change. This is one reason production policies should be reviewed carefully, especially for higher-risk plugin families.",
      "The source answer key does not select this alternative: “The new plugins are imported only after exporting and reimporting the policy”. The keyed answer is “The new plugins are automatically enabled if the entire plugin family is enabled in the policy template”. Source explanation: When an entire plugin family is enabled in a scan policy template, Tenable Security Center automatically enables newly added plugins that belong to that family. Plugin family configuration therefore has future impact as plugin feeds change. This is one reason production policies should be reviewed carefully, especially for higher-risk plugin families.",
      "The source answer key does not select this alternative: “The new plugins are enabled only for administrator-created scan policies”. The keyed answer is “The new plugins are automatically enabled if the entire plugin family is enabled in the policy template”. Source explanation: When an entire plugin family is enabled in a scan policy template, Tenable Security Center automatically enables newly added plugins that belong to that family. Plugin family configuration therefore has future impact as plugin feeds change. This is one reason production policies should be reviewed carefully, especially for higher-risk plugin families.",
      "The source answer key does not select this alternative: “The new plugins stay disabled until each plugin is selected individually”. The keyed answer is “The new plugins are automatically enabled if the entire plugin family is enabled in the policy template”. Source explanation: When an entire plugin family is enabled in a scan policy template, Tenable Security Center automatically enables newly added plugins that belong to that family. Plugin family configuration therefore has future impact as plugin feeds change. This is one reason production policies should be reviewed carefully, especially for higher-risk plugin families."
    ]
  },
  {
    "id": "SC-Q099",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "A custom organizational user can create policies but cannot update feeds. They attempt to create a role that includes Update Feeds. What should Tenable Security Center allow?",
    "o": [
      "It should silently create the role but remove all scanning permissions",
      "It should allow the role because custom roles can include any system permission",
      "It should allow the role only if the user also belongs to two groups",
      "It should prevent the user from creating a role with permissions greater than their own"
    ],
    "a": "D",
    "e": "Tenable Security Center role management is constrained by the permissions of the user creating or editing roles. Any roles added must have permissions equal to or lesser than the user's own role. A user who lacks Update Feeds cannot create a role that grants Update Feeds to others.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-099",
    "x": [
      "The source answer key does not select this alternative: “It should silently create the role but remove all scanning permissions”. The keyed answer is “It should prevent the user from creating a role with permissions greater than their own”. Source explanation: Tenable Security Center role management is constrained by the permissions of the user creating or editing roles. Any roles added must have permissions equal to or lesser than the user's own role. A user who lacks Update Feeds cannot create a role that grants Update Feeds to others.",
      "The source answer key does not select this alternative: “It should allow the role because custom roles can include any system permission”. The keyed answer is “It should prevent the user from creating a role with permissions greater than their own”. Source explanation: Tenable Security Center role management is constrained by the permissions of the user creating or editing roles. Any roles added must have permissions equal to or lesser than the user's own role. A user who lacks Update Feeds cannot create a role that grants Update Feeds to others.",
      "The source answer key does not select this alternative: “It should allow the role only if the user also belongs to two groups”. The keyed answer is “It should prevent the user from creating a role with permissions greater than their own”. Source explanation: Tenable Security Center role management is constrained by the permissions of the user creating or editing roles. Any roles added must have permissions equal to or lesser than the user's own role. A user who lacks Update Feeds cannot create a role that grants Update Feeds to others.",
      "Tenable Security Center role management is constrained by the permissions of the user creating or editing roles. Any roles added must have permissions equal to or lesser than the user's own role. A user who lacks Update Feeds cannot create a role that grants Update Feeds to others."
    ]
  },
  {
    "id": "SC-Q100",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "A scan has Max scan duration set. It reaches that duration even though Scan Timeout Action is configured to Import Completed Results without rollover. What should the administrator expect?",
    "o": [
      "Tenable Security Center converts the scan to a remediation scan and launches it automatically",
      "Tenable Security Center discards all results because Max scan duration overrides import settings",
      "Tenable Security Center creates a rollover scan when Max scan duration is reached regardless of the Scan Timeout Action setting",
      "Tenable Security Center never creates a rollover scan unless Scan Timeout Action is set to Import Completed Results With Rollover"
    ],
    "a": "C",
    "e": "The Max scan duration setting specifies the maximum hours a scan can run. When a scan reaches that threshold, Tenable Security Center creates a rollover scan that can be launched manually to complete the scan, regardless of the configured Scan Timeout Action. Tenable also notes that Max scan duration must be longer than any scan window to allow time to generate results.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-100",
    "x": [
      "The source answer key does not select this alternative: “Tenable Security Center converts the scan to a remediation scan and launches it automatically”. The keyed answer is “Tenable Security Center creates a rollover scan when Max scan duration is reached regardless of the Scan Timeout Action setting”. Source explanation: The Max scan duration setting specifies the maximum hours a scan can run. When a scan reaches that threshold, Tenable Security Center creates a rollover scan that can be launched manually to complete the scan, regardless of the configured Scan Timeout Action. Tenable also notes that Max scan duration must be longer than any scan window to allow time to generate results.",
      "The source answer key does not select this alternative: “Tenable Security Center discards all results because Max scan duration overrides import settings”. The keyed answer is “Tenable Security Center creates a rollover scan when Max scan duration is reached regardless of the Scan Timeout Action setting”. Source explanation: The Max scan duration setting specifies the maximum hours a scan can run. When a scan reaches that threshold, Tenable Security Center creates a rollover scan that can be launched manually to complete the scan, regardless of the configured Scan Timeout Action. Tenable also notes that Max scan duration must be longer than any scan window to allow time to generate results.",
      "The Max scan duration setting specifies the maximum hours a scan can run. When a scan reaches that threshold, Tenable Security Center creates a rollover scan that can be launched manually to complete the scan, regardless of the configured Scan Timeout Action. Tenable also notes that Max scan duration must be longer than any scan window to allow time to generate results.",
      "The source answer key does not select this alternative: “Tenable Security Center never creates a rollover scan unless Scan Timeout Action is set to Import Completed Results With Rollover”. The keyed answer is “Tenable Security Center creates a rollover scan when Max scan duration is reached regardless of the Scan Timeout Action setting”. Source explanation: The Max scan duration setting specifies the maximum hours a scan can run. When a scan reaches that threshold, Tenable Security Center creates a rollover scan that can be launched manually to complete the scan, regardless of the configured Scan Timeout Action. Tenable also notes that Max scan duration must be longer than any scan window to allow time to generate results."
    ]
  },
  {
    "id": "SC-Q101",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "What is the primary purpose of an Assurance Report Card (ARC) in Tenable Security Center?",
    "o": [
      "Replace all PDF reports with a single executive spreadsheet export",
      "Provide a pass/fail overview of security posture using configurable policy statements evaluated against repository data",
      "Store Nessus plugin feed updates offline for air-gapped scanners",
      "Define which scan zones organizational users may select"
    ],
    "a": "B",
    "e": "Assurance Report Cards (ARCs) give an overview of network security posture. Each policy statement in an ARC returns a visible pass or fail based on live repository data, which is why ARCs are a distinct Specialist exam topic separate from ordinary dashboards and PDF reports.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-101",
    "x": [
      "The source answer key does not select this alternative: “Replace all PDF reports with a single executive spreadsheet export”. The keyed answer is “Provide a pass/fail overview of security posture using configurable policy statements evaluated against repository data”. Source explanation: Assurance Report Cards (ARCs) give an overview of network security posture. Each policy statement in an ARC returns a visible pass or fail based on live repository data, which is why ARCs are a distinct Specialist exam topic separate from ordinary dashboards and PDF reports.",
      "Assurance Report Cards (ARCs) give an overview of network security posture. Each policy statement in an ARC returns a visible pass or fail based on live repository data, which is why ARCs are a distinct Specialist exam topic separate from ordinary dashboards and PDF reports.",
      "The source answer key does not select this alternative: “Store Nessus plugin feed updates offline for air-gapped scanners”. The keyed answer is “Provide a pass/fail overview of security posture using configurable policy statements evaluated against repository data”. Source explanation: Assurance Report Cards (ARCs) give an overview of network security posture. Each policy statement in an ARC returns a visible pass or fail based on live repository data, which is why ARCs are a distinct Specialist exam topic separate from ordinary dashboards and PDF reports.",
      "The source answer key does not select this alternative: “Define which scan zones organizational users may select”. The keyed answer is “Provide a pass/fail overview of security posture using configurable policy statements evaluated against repository data”. Source explanation: Assurance Report Cards (ARCs) give an overview of network security posture. Each policy statement in an ARC returns a visible pass or fail based on live repository data, which is why ARCs are a distinct Specialist exam topic separate from ordinary dashboards and PDF reports."
    ]
  },
  {
    "id": "SC-Q102",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "Who can add a template-based or custom Assurance Report Card in Tenable Security Center?",
    "o": [
      "Organizational users with appropriate permissions",
      "Only Administrator users outside any organization",
      "Only Credential Manager users",
      "Only Auditor users with read-only access"
    ],
    "a": "A",
    "e": "Tenable documents that organizational users with appropriate permissions can add template-based ARCs from Tenable-provided templates or create custom ARCs. Administrators do not belong to organizations and do not analyze organizational vulnerability data the same way.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-102",
    "x": [
      "Tenable documents that organizational users with appropriate permissions can add template-based ARCs from Tenable-provided templates or create custom ARCs. Administrators do not belong to organizations and do not analyze organizational vulnerability data the same way.",
      "The source answer key does not select this alternative: “Only Administrator users outside any organization”. The keyed answer is “Organizational users with appropriate permissions”. Source explanation: Tenable documents that organizational users with appropriate permissions can add template-based ARCs from Tenable-provided templates or create custom ARCs. Administrators do not belong to organizations and do not analyze organizational vulnerability data the same way.",
      "The source answer key does not select this alternative: “Only Credential Manager users”. The keyed answer is “Organizational users with appropriate permissions”. Source explanation: Tenable documents that organizational users with appropriate permissions can add template-based ARCs from Tenable-provided templates or create custom ARCs. Administrators do not belong to organizations and do not analyze organizational vulnerability data the same way.",
      "The source answer key does not select this alternative: “Only Auditor users with read-only access”. The keyed answer is “Organizational users with appropriate permissions”. Source explanation: Tenable documents that organizational users with appropriate permissions can add template-based ARCs from Tenable-provided templates or create custom ARCs. Administrators do not belong to organizations and do not analyze organizational vulnerability data the same way."
    ]
  },
  {
    "id": "SC-Q103",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "How does an Assurance Report Card communicate results for each policy statement?",
    "o": [
      "Using repository IP license counts only",
      "Using a pass or fail methodology for each policy statement",
      "Using only CVSS numeric averages without pass/fail",
      "Using scanner Working/Unavailable status icons only"
    ],
    "a": "B",
    "e": "ARCs are designed around quick visible feedback with a pass/fail methodology for each policy statement. That executive-style posture view is distinct from raw vulnerability tables or scanner health status.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-103",
    "x": [
      "The source answer key does not select this alternative: “Using repository IP license counts only”. The keyed answer is “Using a pass or fail methodology for each policy statement”. Source explanation: ARCs are designed around quick visible feedback with a pass/fail methodology for each policy statement. That executive-style posture view is distinct from raw vulnerability tables or scanner health status.",
      "ARCs are designed around quick visible feedback with a pass/fail methodology for each policy statement. That executive-style posture view is distinct from raw vulnerability tables or scanner health status.",
      "The source answer key does not select this alternative: “Using only CVSS numeric averages without pass/fail”. The keyed answer is “Using a pass or fail methodology for each policy statement”. Source explanation: ARCs are designed around quick visible feedback with a pass/fail methodology for each policy statement. That executive-style posture view is distinct from raw vulnerability tables or scanner health status.",
      "The source answer key does not select this alternative: “Using scanner Working/Unavailable status icons only”. The keyed answer is “Using a pass or fail methodology for each policy statement”. Source explanation: ARCs are designed around quick visible feedback with a pass/fail methodology for each policy statement. That executive-style posture view is distinct from raw vulnerability tables or scanner health status."
    ]
  },
  {
    "id": "SC-Q104",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "Where do organizational users manage existing Assurance Report Cards in the Tenable Security Center UI?",
    "o": [
      "Repositories > Offline Sync > Manage ARCs",
      "Resources > Scan Zones > Manage ARCs",
      "Dashboard > Assurance Report Cards, then Options > Manage ARCs",
      "System > Configuration > License > Manage ARCs"
    ],
    "a": "C",
    "e": "Tenable's Manage Assurance Report Cards workflow is accessed from Dashboard > Assurance Report Cards, then Options > Manage ARCs. From there users can view, edit, schedule, share, or otherwise manage ARC objects.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-104",
    "x": [
      "The source answer key does not select this alternative: “Repositories > Offline Sync > Manage ARCs”. The keyed answer is “Dashboard > Assurance Report Cards, then Options > Manage ARCs”. Source explanation: Tenable's Manage Assurance Report Cards workflow is accessed from Dashboard > Assurance Report Cards, then Options > Manage ARCs. From there users can view, edit, schedule, share, or otherwise manage ARC objects.",
      "The source answer key does not select this alternative: “Resources > Scan Zones > Manage ARCs”. The keyed answer is “Dashboard > Assurance Report Cards, then Options > Manage ARCs”. Source explanation: Tenable's Manage Assurance Report Cards workflow is accessed from Dashboard > Assurance Report Cards, then Options > Manage ARCs. From there users can view, edit, schedule, share, or otherwise manage ARC objects.",
      "Tenable's Manage Assurance Report Cards workflow is accessed from Dashboard > Assurance Report Cards, then Options > Manage ARCs. From there users can view, edit, schedule, share, or otherwise manage ARC objects.",
      "The source answer key does not select this alternative: “System > Configuration > License > Manage ARCs”. The keyed answer is “Dashboard > Assurance Report Cards, then Options > Manage ARCs”. Source explanation: Tenable's Manage Assurance Report Cards workflow is accessed from Dashboard > Assurance Report Cards, then Options > Manage ARCs. From there users can view, edit, schedule, share, or otherwise manage ARC objects."
    ]
  },
  {
    "id": "SC-Q105",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "What can an organizational user do when sharing an Assurance Report Card with a group?",
    "o": [
      "Grant every group member Administrator privileges automatically",
      "Force all shared users to become Security Managers",
      "Give users in the group the ability to view the ARC, subject to each user's role and permissions for drill-down",
      "Disable repository access for anyone not in the sharing group"
    ],
    "a": "C",
    "e": "Sharing an ARC gives users in a group the ability to view it. Whether they can drill down into more detailed pages still depends on each user's role and custom permissions.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-105",
    "x": [
      "The source answer key does not select this alternative: “Grant every group member Administrator privileges automatically”. The keyed answer is “Give users in the group the ability to view the ARC, subject to each user's role and permissions for drill-down”. Source explanation: Sharing an ARC gives users in a group the ability to view it. Whether they can drill down into more detailed pages still depends on each user's role and custom permissions.",
      "The source answer key does not select this alternative: “Force all shared users to become Security Managers”. The keyed answer is “Give users in the group the ability to view the ARC, subject to each user's role and permissions for drill-down”. Source explanation: Sharing an ARC gives users in a group the ability to view it. Whether they can drill down into more detailed pages still depends on each user's role and custom permissions.",
      "Sharing an ARC gives users in a group the ability to view it. Whether they can drill down into more detailed pages still depends on each user's role and custom permissions.",
      "The source answer key does not select this alternative: “Disable repository access for anyone not in the sharing group”. The keyed answer is “Give users in the group the ability to view the ARC, subject to each user's role and permissions for drill-down”. Source explanation: Sharing an ARC gives users in a group the ability to view it. Whether they can drill down into more detailed pages still depends on each user's role and custom permissions."
    ]
  },
  {
    "id": "SC-Q106",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "Which statement best distinguishes an Assurance Report Card from a standard dashboard component?",
    "o": [
      "An ARC replaces the need for repositories in multi-organization deployments",
      "An ARC evaluates named policy statements as pass/fail posture checks, while dashboard components visualize metrics, charts, and tables",
      "An ARC can only display mitigated vulnerabilities, while dashboards can only display cumulative vulnerabilities",
      "An ARC stores scan policies, while dashboards store credentials"
    ],
    "a": "B",
    "e": "Dashboards visualize vulnerability and operational data with components such as charts and tables. ARCs specifically present configurable policy statements with pass/fail feedback for security posture communication.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-106",
    "x": [
      "The source answer key does not select this alternative: “An ARC replaces the need for repositories in multi-organization deployments”. The keyed answer is “An ARC evaluates named policy statements as pass/fail posture checks, while dashboard components visualize metrics, charts, and tables”. Source explanation: Dashboards visualize vulnerability and operational data with components such as charts and tables. ARCs specifically present configurable policy statements with pass/fail feedback for security posture communication.",
      "Dashboards visualize vulnerability and operational data with components such as charts and tables. ARCs specifically present configurable policy statements with pass/fail feedback for security posture communication.",
      "The source answer key does not select this alternative: “An ARC can only display mitigated vulnerabilities, while dashboards can only display cumulative vulnerabilities”. The keyed answer is “An ARC evaluates named policy statements as pass/fail posture checks, while dashboard components visualize metrics, charts, and tables”. Source explanation: Dashboards visualize vulnerability and operational data with components such as charts and tables. ARCs specifically present configurable policy statements with pass/fail feedback for security posture communication.",
      "The source answer key does not select this alternative: “An ARC stores scan policies, while dashboards store credentials”. The keyed answer is “An ARC evaluates named policy statements as pass/fail posture checks, while dashboard components visualize metrics, charts, and tables”. Source explanation: Dashboards visualize vulnerability and operational data with components such as charts and tables. ARCs specifically present configurable policy statements with pass/fail feedback for security posture communication."
    ]
  },
  {
    "id": "SC-Q107",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "A CISO wants a recurring executive view that answers: 'Are all Critical vulnerabilities remediated within 30 days?' Which Tenable Security Center feature is purpose-built for that style of policy statement?",
    "o": [
      "Nessus scanner Verify Hostname toggle",
      "Offline repository archive filename",
      "Assurance Report Card policy statement",
      "Scan zone Restricted Scan Ranges"
    ],
    "a": "C",
    "e": "ARCs are built around policy statements that return pass/fail based on repository data—exactly the executive posture questions CISOs ask. Scan zones, scanner hostname verification, and offline archive names do not answer remediation SLA policy statements.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-107",
    "x": [
      "The source answer key does not select this alternative: “Nessus scanner Verify Hostname toggle”. The keyed answer is “Assurance Report Card policy statement”. Source explanation: ARCs are built around policy statements that return pass/fail based on repository data—exactly the executive posture questions CISOs ask. Scan zones, scanner hostname verification, and offline archive names do not answer remediation SLA policy statements.",
      "The source answer key does not select this alternative: “Offline repository archive filename”. The keyed answer is “Assurance Report Card policy statement”. Source explanation: ARCs are built around policy statements that return pass/fail based on repository data—exactly the executive posture questions CISOs ask. Scan zones, scanner hostname verification, and offline archive names do not answer remediation SLA policy statements.",
      "ARCs are built around policy statements that return pass/fail based on repository data—exactly the executive posture questions CISOs ask. Scan zones, scanner hostname verification, and offline archive names do not answer remediation SLA policy statements.",
      "The source answer key does not select this alternative: “Scan zone Restricted Scan Ranges”. The keyed answer is “Assurance Report Card policy statement”. Source explanation: ARCs are built around policy statements that return pass/fail based on repository data—exactly the executive posture questions CISOs ask. Scan zones, scanner hostname verification, and offline archive names do not answer remediation SLA policy statements."
    ]
  },
  {
    "id": "SC-Q108",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Assurance Report Cards",
    "q": "When creating a custom Assurance Report Card, what must the user configure for the ARC to evaluate posture?",
    "o": [
      "Only the Tenable.io cloud connector token",
      "ARC options including policy statements (and schedule if automatic refresh is required)",
      "Only the PostgreSQL database connection string",
      "Only a linking key for each Nessus scanner"
    ],
    "a": "B",
    "e": "Custom ARCs are created via Advanced Add under Assurance Report Cards. Users configure ARC options—including the policy statements that define pass/fail checks—and may set a schedule for how often the ARC polls data sources.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-108",
    "x": [
      "The source answer key does not select this alternative: “Only the Tenable.io cloud connector token”. The keyed answer is “ARC options including policy statements (and schedule if automatic refresh is required)”. Source explanation: Custom ARCs are created via Advanced Add under Assurance Report Cards. Users configure ARC options—including the policy statements that define pass/fail checks—and may set a schedule for how often the ARC polls data sources.",
      "Custom ARCs are created via Advanced Add under Assurance Report Cards. Users configure ARC options—including the policy statements that define pass/fail checks—and may set a schedule for how often the ARC polls data sources.",
      "The source answer key does not select this alternative: “Only the PostgreSQL database connection string”. The keyed answer is “ARC options including policy statements (and schedule if automatic refresh is required)”. Source explanation: Custom ARCs are created via Advanced Add under Assurance Report Cards. Users configure ARC options—including the policy statements that define pass/fail checks—and may set a schedule for how often the ARC polls data sources.",
      "The source answer key does not select this alternative: “Only a linking key for each Nessus scanner”. The keyed answer is “ARC options including policy statements (and schedule if automatic refresh is required)”. Source explanation: Custom ARCs are created via Advanced Add under Assurance Report Cards. Users configure ARC options—including the policy statements that define pass/fail checks—and may set a schedule for how often the ARC polls data sources."
    ]
  },
  {
    "id": "SC-Q109",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Alerts",
    "q": "What can Tenable Security Center alerts be configured to do when vulnerability or event conditions occur?",
    "o": [
      "Automatically increase the IP license count",
      "Trigger actions such as email notifications, UI notifications, tickets, remediation scans, reports, or syslog alerting",
      "Convert IPv4 repositories into Universal repositories",
      "Disable all freeze windows organization-wide"
    ],
    "a": "B",
    "e": "Alerts can perform actions for selected vulnerability or alert occurrences, including UI notifications, creating/assigning tickets, remediation scans, launching reports, email notifications, and syslog alerting. Multiple actions can be assigned.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-109",
    "x": [
      "The source answer key does not select this alternative: “Automatically increase the IP license count”. The keyed answer is “Trigger actions such as email notifications, UI notifications, tickets, remediation scans, reports, or syslog alerting”. Source explanation: Alerts can perform actions for selected vulnerability or alert occurrences, including UI notifications, creating/assigning tickets, remediation scans, launching reports, email notifications, and syslog alerting. Multiple actions can be assigned.",
      "Alerts can perform actions for selected vulnerability or alert occurrences, including UI notifications, creating/assigning tickets, remediation scans, launching reports, email notifications, and syslog alerting. Multiple actions can be assigned.",
      "The source answer key does not select this alternative: “Convert IPv4 repositories into Universal repositories”. The keyed answer is “Trigger actions such as email notifications, UI notifications, tickets, remediation scans, reports, or syslog alerting”. Source explanation: Alerts can perform actions for selected vulnerability or alert occurrences, including UI notifications, creating/assigning tickets, remediation scans, launching reports, email notifications, and syslog alerting. Multiple actions can be assigned.",
      "The source answer key does not select this alternative: “Disable all freeze windows organization-wide”. The keyed answer is “Trigger actions such as email notifications, UI notifications, tickets, remediation scans, reports, or syslog alerting”. Source explanation: Alerts can perform actions for selected vulnerability or alert occurrences, including UI notifications, creating/assigning tickets, remediation scans, launching reports, email notifications, and syslog alerting. Multiple actions can be assigned."
    ]
  },
  {
    "id": "SC-Q110",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Alerts",
    "q": "Which role permission specifically allows a user to create alerts that trigger actions when specified vulnerability or event conditions occur?",
    "o": [
      "Create Alerts",
      "Create LDAP Query Assets",
      "Manage Images",
      "Update Feeds"
    ],
    "a": "A",
    "e": "Under Workflow Permissions, Create Alerts allows the user to create alerts used to trigger actions (launch scans, run reports, send emails, etc.) when specified vulnerability or event conditions occur.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-110",
    "x": [
      "Under Workflow Permissions, Create Alerts allows the user to create alerts used to trigger actions (launch scans, run reports, send emails, etc.) when specified vulnerability or event conditions occur.",
      "The source answer key does not select this alternative: “Create LDAP Query Assets”. The keyed answer is “Create Alerts”. Source explanation: Under Workflow Permissions, Create Alerts allows the user to create alerts used to trigger actions (launch scans, run reports, send emails, etc.) when specified vulnerability or event conditions occur.",
      "The source answer key does not select this alternative: “Manage Images”. The keyed answer is “Create Alerts”. Source explanation: Under Workflow Permissions, Create Alerts allows the user to create alerts used to trigger actions (launch scans, run reports, send emails, etc.) when specified vulnerability or event conditions occur.",
      "The source answer key does not select this alternative: “Update Feeds”. The keyed answer is “Create Alerts”. Source explanation: Under Workflow Permissions, Create Alerts allows the user to create alerts used to trigger actions (launch scans, run reports, send emails, etc.) when specified vulnerability or event conditions occur."
    ]
  },
  {
    "id": "SC-Q111",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Alerts",
    "q": "Which statement about alert actions in Tenable Security Center is correct?",
    "o": [
      "Only one action is allowed per alert and it must be email",
      "Alerts replace the need for dashboards and reports",
      "Alerts can only notify Administrator users",
      "Multiple actions can be assigned for each alert"
    ],
    "a": "D",
    "e": "Tenable documents that multiple actions can be assigned for each alert/ticket workflow, enabling combinations such as email plus ticket creation plus a remediation scan.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-111",
    "x": [
      "The source answer key does not select this alternative: “Only one action is allowed per alert and it must be email”. The keyed answer is “Multiple actions can be assigned for each alert”. Source explanation: Tenable documents that multiple actions can be assigned for each alert/ticket workflow, enabling combinations such as email plus ticket creation plus a remediation scan.",
      "The source answer key does not select this alternative: “Alerts replace the need for dashboards and reports”. The keyed answer is “Multiple actions can be assigned for each alert”. Source explanation: Tenable documents that multiple actions can be assigned for each alert/ticket workflow, enabling combinations such as email plus ticket creation plus a remediation scan.",
      "The source answer key does not select this alternative: “Alerts can only notify Administrator users”. The keyed answer is “Multiple actions can be assigned for each alert”. Source explanation: Tenable documents that multiple actions can be assigned for each alert/ticket workflow, enabling combinations such as email plus ticket creation plus a remediation scan.",
      "Tenable documents that multiple actions can be assigned for each alert/ticket workflow, enabling combinations such as email plus ticket creation plus a remediation scan."
    ]
  },
  {
    "id": "SC-Q112",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Alerts",
    "q": "A team wants Security Center to open a ticket and email stakeholders when a new Critical vulnerability appears on PCI assets. Which feature should they configure?",
    "o": [
      "A scan zone with overlapping IP ranges only",
      "An offline repository with Generate Trend Data disabled",
      "An alert with ticket and email actions filtered to Critical severity and the PCI asset list",
      "A Credential Manager account with No Role"
    ],
    "a": "C",
    "e": "Alerts evaluate vulnerability/event conditions and can create tickets and send emails. Scoping by severity and asset list matches the PCI Critical use case.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-112",
    "x": [
      "The source answer key does not select this alternative: “A scan zone with overlapping IP ranges only”. The keyed answer is “An alert with ticket and email actions filtered to Critical severity and the PCI asset list”. Source explanation: Alerts evaluate vulnerability/event conditions and can create tickets and send emails. Scoping by severity and asset list matches the PCI Critical use case.",
      "The source answer key does not select this alternative: “An offline repository with Generate Trend Data disabled”. The keyed answer is “An alert with ticket and email actions filtered to Critical severity and the PCI asset list”. Source explanation: Alerts evaluate vulnerability/event conditions and can create tickets and send emails. Scoping by severity and asset list matches the PCI Critical use case.",
      "Alerts evaluate vulnerability/event conditions and can create tickets and send emails. Scoping by severity and asset list matches the PCI Critical use case.",
      "The source answer key does not select this alternative: “A Credential Manager account with No Role”. The keyed answer is “An alert with ticket and email actions filtered to Critical severity and the PCI asset list”. Source explanation: Alerts evaluate vulnerability/event conditions and can create tickets and send emails. Scoping by severity and asset list matches the PCI Critical use case."
    ]
  },
  {
    "id": "SC-Q113",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Alerts",
    "q": "Where is the Tenable Security Center web address used when alerts and tickets generate notifications configured?",
    "o": [
      "Inside each scan policy under Advanced > Plugin Families",
      "Inside each repository under Restricted Scan Ranges",
      "Inside each Nessus scanner under Verify Hostname",
      "Configuration Settings under Notifications as Tenable Security Center Location"
    ],
    "a": "D",
    "e": "In Configuration Settings > Notifications, Tenable Security Center Location is the web address used when alerts and tickets generate notifications. Bell Notifications can also enable top-navigation notifications.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-113",
    "x": [
      "The source answer key does not select this alternative: “Inside each scan policy under Advanced > Plugin Families”. The keyed answer is “Configuration Settings under Notifications as Tenable Security Center Location”. Source explanation: In Configuration Settings > Notifications, Tenable Security Center Location is the web address used when alerts and tickets generate notifications. Bell Notifications can also enable top-navigation notifications.",
      "The source answer key does not select this alternative: “Inside each repository under Restricted Scan Ranges”. The keyed answer is “Configuration Settings under Notifications as Tenable Security Center Location”. Source explanation: In Configuration Settings > Notifications, Tenable Security Center Location is the web address used when alerts and tickets generate notifications. Bell Notifications can also enable top-navigation notifications.",
      "The source answer key does not select this alternative: “Inside each Nessus scanner under Verify Hostname”. The keyed answer is “Configuration Settings under Notifications as Tenable Security Center Location”. Source explanation: In Configuration Settings > Notifications, Tenable Security Center Location is the web address used when alerts and tickets generate notifications. Bell Notifications can also enable top-navigation notifications.",
      "In Configuration Settings > Notifications, Tenable Security Center Location is the web address used when alerts and tickets generate notifications. Bell Notifications can also enable top-navigation notifications."
    ]
  },
  {
    "id": "SC-Q114",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Alerts",
    "q": "Which alert destination is explicitly supported alongside email and UI notifications in Tenable Security Center?",
    "o": [
      "Direct SMS to mobile carriers without a gateway",
      "Automatic creation of new organizations",
      "Automatic deletion of repositories",
      "Syslog alerting"
    ],
    "a": "D",
    "e": "Documented alert actions include syslog alerting in addition to email, UI notifications, tickets, remediation scans, and report launches.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-114",
    "x": [
      "The source answer key does not select this alternative: “Direct SMS to mobile carriers without a gateway”. The keyed answer is “Syslog alerting”. Source explanation: Documented alert actions include syslog alerting in addition to email, UI notifications, tickets, remediation scans, and report launches.",
      "The source answer key does not select this alternative: “Automatic creation of new organizations”. The keyed answer is “Syslog alerting”. Source explanation: Documented alert actions include syslog alerting in addition to email, UI notifications, tickets, remediation scans, and report launches.",
      "The source answer key does not select this alternative: “Automatic deletion of repositories”. The keyed answer is “Syslog alerting”. Source explanation: Documented alert actions include syslog alerting in addition to email, UI notifications, tickets, remediation scans, and report launches.",
      "Documented alert actions include syslog alerting in addition to email, UI notifications, tickets, remediation scans, and report launches."
    ]
  },
  {
    "id": "SC-Q115",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "Which permission allows a user to upload audit files used for configuration audit scans in Tenable Security Center?",
    "o": [
      "Manage Freeze Windows",
      "Update Feeds",
      "Manage Attribute Sets",
      "Create Audit Files"
    ],
    "a": "D",
    "e": "Create Audit Files allows the user to upload audit files used for configuration audit (compliance) scans. This is a Scanning permission distinct from feed updates or freeze windows.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-115",
    "x": [
      "The source answer key does not select this alternative: “Manage Freeze Windows”. The keyed answer is “Create Audit Files”. Source explanation: Create Audit Files allows the user to upload audit files used for configuration audit (compliance) scans. This is a Scanning permission distinct from feed updates or freeze windows.",
      "The source answer key does not select this alternative: “Update Feeds”. The keyed answer is “Create Audit Files”. Source explanation: Create Audit Files allows the user to upload audit files used for configuration audit (compliance) scans. This is a Scanning permission distinct from feed updates or freeze windows.",
      "The source answer key does not select this alternative: “Manage Attribute Sets”. The keyed answer is “Create Audit Files”. Source explanation: Create Audit Files allows the user to upload audit files used for configuration audit (compliance) scans. This is a Scanning permission distinct from feed updates or freeze windows.",
      "Create Audit Files allows the user to upload audit files used for configuration audit (compliance) scans. This is a Scanning permission distinct from feed updates or freeze windows."
    ]
  },
  {
    "id": "SC-Q116",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "What content do Tenable .audit files primarily define for compliance scanning?",
    "o": [
      "The DHCP tracking order for changing IP addresses",
      "The Max scan duration rollover behavior",
      "Configuration checks with expected values and pass/fail logic for benchmarks such as CIS and DISA STIG",
      "The list of organizations allowed to use Universal repositories"
    ],
    "a": "C",
    "e": "Compliance checks use .audit files that define configuration checks, expected values, and pass/fail logic. Tenable provides audit content for CIS Benchmarks and DISA STIGs, among others.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-116",
    "x": [
      "The source answer key does not select this alternative: “The DHCP tracking order for changing IP addresses”. The keyed answer is “Configuration checks with expected values and pass/fail logic for benchmarks such as CIS and DISA STIG”. Source explanation: Compliance checks use .audit files that define configuration checks, expected values, and pass/fail logic. Tenable provides audit content for CIS Benchmarks and DISA STIGs, among others.",
      "The source answer key does not select this alternative: “The Max scan duration rollover behavior”. The keyed answer is “Configuration checks with expected values and pass/fail logic for benchmarks such as CIS and DISA STIG”. Source explanation: Compliance checks use .audit files that define configuration checks, expected values, and pass/fail logic. Tenable provides audit content for CIS Benchmarks and DISA STIGs, among others.",
      "Compliance checks use .audit files that define configuration checks, expected values, and pass/fail logic. Tenable provides audit content for CIS Benchmarks and DISA STIGs, among others.",
      "The source answer key does not select this alternative: “The list of organizations allowed to use Universal repositories”. The keyed answer is “Configuration checks with expected values and pass/fail logic for benchmarks such as CIS and DISA STIG”. Source explanation: Compliance checks use .audit files that define configuration checks, expected values, and pass/fail logic. Tenable provides audit content for CIS Benchmarks and DISA STIGs, among others."
    ]
  },
  {
    "id": "SC-Q117",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "After importing a scan policy from another Security Center, why might compliance checks be missing even though the policy imported successfully?",
    "o": [
      "Compliance checks are disabled until an Auditor role is assigned",
      "Exported scan policy files do not include audit files, so audit files must be configured separately after import",
      "Compliance checks require Universal repositories exclusively",
      "Compliance checks only run when the schedule is set to Now"
    ],
    "a": "B",
    "e": "Tenable documents that exported/imported scan policy files do not include credentials or audit files. After import, users must attach the needed audit files (and credentials) separately.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-117",
    "x": [
      "The source answer key does not select this alternative: “Compliance checks are disabled until an Auditor role is assigned”. The keyed answer is “Exported scan policy files do not include audit files, so audit files must be configured separately after import”. Source explanation: Tenable documents that exported/imported scan policy files do not include credentials or audit files. After import, users must attach the needed audit files (and credentials) separately.",
      "Tenable documents that exported/imported scan policy files do not include credentials or audit files. After import, users must attach the needed audit files (and credentials) separately.",
      "The source answer key does not select this alternative: “Compliance checks require Universal repositories exclusively”. The keyed answer is “Exported scan policy files do not include audit files, so audit files must be configured separately after import”. Source explanation: Tenable documents that exported/imported scan policy files do not include credentials or audit files. After import, users must attach the needed audit files (and credentials) separately.",
      "The source answer key does not select this alternative: “Compliance checks only run when the schedule is set to Now”. The keyed answer is “Exported scan policy files do not include audit files, so audit files must be configured separately after import”. Source explanation: Tenable documents that exported/imported scan policy files do not include credentials or audit files. After import, users must attach the needed audit files (and credentials) separately."
    ]
  },
  {
    "id": "SC-Q118",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "Which result statuses are commonly associated with Tenable Security Center compliance audit checks?",
    "o": [
      "PASSED, FAILED, and WARNING (with ERROR/timeout conditions for unreachable or failed checks)",
      "Cumulative, Mitigated, and Recast only",
      "Working, Plugins Updating, and Unavailable only",
      "Static, Dynamic, and Combination only"
    ],
    "a": "A",
    "e": "Compliance audit checks evaluate configuration state and commonly return PASSED, FAILED, or WARNING. Unreachable hosts or failed check execution produce error/timeout-style outcomes rather than a clean pass/fail. Working/Unavailable are scanner statuses; Cumulative/Mitigated are vulnerability views; Static/Dynamic/Combination are asset list types.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-118",
    "x": [
      "Compliance audit checks evaluate configuration state and commonly return PASSED, FAILED, or WARNING. Unreachable hosts or failed check execution produce error/timeout-style outcomes rather than a clean pass/fail. Working/Unavailable are scanner statuses; Cumulative/Mitigated are vulnerability views; Static/Dynamic/Combination are asset list types.",
      "The source answer key does not select this alternative: “Cumulative, Mitigated, and Recast only”. The keyed answer is “PASSED, FAILED, and WARNING (with ERROR/timeout conditions for unreachable or failed checks)”. Source explanation: Compliance audit checks evaluate configuration state and commonly return PASSED, FAILED, or WARNING. Unreachable hosts or failed check execution produce error/timeout-style outcomes rather than a clean pass/fail. Working/Unavailable are scanner statuses; Cumulative/Mitigated are vulnerability views; Static/Dynamic/Combination are asset list types.",
      "The source answer key does not select this alternative: “Working, Plugins Updating, and Unavailable only”. The keyed answer is “PASSED, FAILED, and WARNING (with ERROR/timeout conditions for unreachable or failed checks)”. Source explanation: Compliance audit checks evaluate configuration state and commonly return PASSED, FAILED, or WARNING. Unreachable hosts or failed check execution produce error/timeout-style outcomes rather than a clean pass/fail. Working/Unavailable are scanner statuses; Cumulative/Mitigated are vulnerability views; Static/Dynamic/Combination are asset list types.",
      "The source answer key does not select this alternative: “Static, Dynamic, and Combination only”. The keyed answer is “PASSED, FAILED, and WARNING (with ERROR/timeout conditions for unreachable or failed checks)”. Source explanation: Compliance audit checks evaluate configuration state and commonly return PASSED, FAILED, or WARNING. Unreachable hosts or failed check execution produce error/timeout-style outcomes rather than a clean pass/fail. Working/Unavailable are scanner statuses; Cumulative/Mitigated are vulnerability views; Static/Dynamic/Combination are asset list types."
    ]
  },
  {
    "id": "SC-Q119",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "A Security Analyst needs to run CIS Benchmark checks against Linux servers. What must be attached to the scan configuration in addition to credentials and targets?",
    "o": [
      "A Security Center Director license key",
      "An audit file (.audit) for the relevant CIS Benchmark",
      "A Tenable Lumin connector only",
      "An offline repository sync schedule"
    ],
    "a": "B",
    "e": "Configuration compliance scanning requires uploading/selecting the appropriate .audit file for the benchmark. Credentials enable local checks; the audit file defines what is evaluated.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-119",
    "x": [
      "The source answer key does not select this alternative: “A Security Center Director license key”. The keyed answer is “An audit file (.audit) for the relevant CIS Benchmark”. Source explanation: Configuration compliance scanning requires uploading/selecting the appropriate .audit file for the benchmark. Credentials enable local checks; the audit file defines what is evaluated.",
      "Configuration compliance scanning requires uploading/selecting the appropriate .audit file for the benchmark. Credentials enable local checks; the audit file defines what is evaluated.",
      "The source answer key does not select this alternative: “A Tenable Lumin connector only”. The keyed answer is “An audit file (.audit) for the relevant CIS Benchmark”. Source explanation: Configuration compliance scanning requires uploading/selecting the appropriate .audit file for the benchmark. Credentials enable local checks; the audit file defines what is evaluated.",
      "The source answer key does not select this alternative: “An offline repository sync schedule”. The keyed answer is “An audit file (.audit) for the relevant CIS Benchmark”. Source explanation: Configuration compliance scanning requires uploading/selecting the appropriate .audit file for the benchmark. Credentials enable local checks; the audit file defines what is evaluated."
    ]
  },
  {
    "id": "SC-Q120",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "How do compliance assessment results relate to vulnerability assessment results in Tenable Security Center repositories?",
    "o": [
      "Compliance findings can only be stored in Agent repositories",
      "Compliance findings always overwrite vulnerability findings for the same IP",
      "Compliance findings and vulnerability findings are distinct result types that can be retained with separate data-lifetime settings",
      "Compliance findings are never stored in repositories and exist only in PDF reports"
    ],
    "a": "C",
    "e": "Repositories store active, passive, compliance, and mitigated data with configurable lifetimes. Defaults commonly use 365 days for active, compliance, and mitigated data (passive often shorter). Compliance does not simply overwrite vulnerability data.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-120",
    "x": [
      "The source answer key does not select this alternative: “Compliance findings can only be stored in Agent repositories”. The keyed answer is “Compliance findings and vulnerability findings are distinct result types that can be retained with separate data-lifetime settings”. Source explanation: Repositories store active, passive, compliance, and mitigated data with configurable lifetimes. Defaults commonly use 365 days for active, compliance, and mitigated data (passive often shorter). Compliance does not simply overwrite vulnerability data.",
      "The source answer key does not select this alternative: “Compliance findings always overwrite vulnerability findings for the same IP”. The keyed answer is “Compliance findings and vulnerability findings are distinct result types that can be retained with separate data-lifetime settings”. Source explanation: Repositories store active, passive, compliance, and mitigated data with configurable lifetimes. Defaults commonly use 365 days for active, compliance, and mitigated data (passive often shorter). Compliance does not simply overwrite vulnerability data.",
      "Repositories store active, passive, compliance, and mitigated data with configurable lifetimes. Defaults commonly use 365 days for active, compliance, and mitigated data (passive often shorter). Compliance does not simply overwrite vulnerability data.",
      "The source answer key does not select this alternative: “Compliance findings are never stored in repositories and exist only in PDF reports”. The keyed answer is “Compliance findings and vulnerability findings are distinct result types that can be retained with separate data-lifetime settings”. Source explanation: Repositories store active, passive, compliance, and mitigated data with configurable lifetimes. Defaults commonly use 365 days for active, compliance, and mitigated data (passive often shorter). Compliance does not simply overwrite vulnerability data."
    ]
  },
  {
    "id": "SC-Q121",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "Which statement about DISA ASR/ARF or CyberScope specialized reporting in Tenable Security Center is correct?",
    "o": [
      "Specialized reports are available only when Max scan duration is unset",
      "Specialized DISA reports require converting every repository to Offline",
      "Any Auditor can enable CyberScope reporting without administrator involvement",
      "An administrator must enable the specialized report generation options before organizational users can generate those report types"
    ],
    "a": "D",
    "e": "If an organization requires specialized formats such as DISA or CyberScope, an administrator enables Report Generation options. Organizational users cannot generate those specialized reports until the options are enabled.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-121",
    "x": [
      "The source answer key does not select this alternative: “Specialized reports are available only when Max scan duration is unset”. The keyed answer is “An administrator must enable the specialized report generation options before organizational users can generate those report types”. Source explanation: If an organization requires specialized formats such as DISA or CyberScope, an administrator enables Report Generation options. Organizational users cannot generate those specialized reports until the options are enabled.",
      "The source answer key does not select this alternative: “Specialized DISA reports require converting every repository to Offline”. The keyed answer is “An administrator must enable the specialized report generation options before organizational users can generate those report types”. Source explanation: If an organization requires specialized formats such as DISA or CyberScope, an administrator enables Report Generation options. Organizational users cannot generate those specialized reports until the options are enabled.",
      "The source answer key does not select this alternative: “Any Auditor can enable CyberScope reporting without administrator involvement”. The keyed answer is “An administrator must enable the specialized report generation options before organizational users can generate those report types”. Source explanation: If an organization requires specialized formats such as DISA or CyberScope, an administrator enables Report Generation options. Organizational users cannot generate those specialized reports until the options are enabled.",
      "If an organization requires specialized formats such as DISA or CyberScope, an administrator enables Report Generation options. Organizational users cannot generate those specialized reports until the options are enabled."
    ]
  },
  {
    "id": "SC-Q122",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Compliance Assessment",
    "q": "What is the difference between a vulnerability assessment scan and a compliance assessment scan in Tenable Security Center?",
    "o": [
      "Vulnerability assessment only uses agents; compliance assessment only uses Network Monitor",
      "Vulnerability assessment stores data in dashboards; compliance assessment stores data only in ARCs",
      "Vulnerability assessment finds software/configuration weaknesses via plugins; compliance assessment evaluates hosts against audit-file benchmarks such as CIS/STIG",
      "There is no difference; Tenable uses the terms interchangeably"
    ],
    "a": "C",
    "e": "Vulnerability assessment uses Nessus plugins to find vulnerabilities and misconfigurations. Compliance assessment uses .audit content to measure configuration against benchmarks. Both are separate Specialist exam domains.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-122",
    "x": [
      "The source answer key does not select this alternative: “Vulnerability assessment only uses agents; compliance assessment only uses Network Monitor”. The keyed answer is “Vulnerability assessment finds software/configuration weaknesses via plugins; compliance assessment evaluates hosts against audit-file benchmarks such as CIS/STIG”. Source explanation: Vulnerability assessment uses Nessus plugins to find vulnerabilities and misconfigurations. Compliance assessment uses .audit content to measure configuration against benchmarks. Both are separate Specialist exam domains.",
      "The source answer key does not select this alternative: “Vulnerability assessment stores data in dashboards; compliance assessment stores data only in ARCs”. The keyed answer is “Vulnerability assessment finds software/configuration weaknesses via plugins; compliance assessment evaluates hosts against audit-file benchmarks such as CIS/STIG”. Source explanation: Vulnerability assessment uses Nessus plugins to find vulnerabilities and misconfigurations. Compliance assessment uses .audit content to measure configuration against benchmarks. Both are separate Specialist exam domains.",
      "Vulnerability assessment uses Nessus plugins to find vulnerabilities and misconfigurations. Compliance assessment uses .audit content to measure configuration against benchmarks. Both are separate Specialist exam domains.",
      "The source answer key does not select this alternative: “There is no difference; Tenable uses the terms interchangeably”. The keyed answer is “Vulnerability assessment finds software/configuration weaknesses via plugins; compliance assessment evaluates hosts against audit-file benchmarks such as CIS/STIG”. Source explanation: Vulnerability assessment uses Nessus plugins to find vulnerabilities and misconfigurations. Compliance assessment uses .audit content to measure configuration against benchmarks. Both are separate Specialist exam domains."
    ]
  },
  {
    "id": "SC-Q123",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "What is the default port for accessing the Tenable Security Center web interface?",
    "o": [
      "TCP 8835",
      "TCP 8834",
      "TCP 443",
      "TCP 22"
    ],
    "a": "C",
    "e": "Port requirements document TCP 443 for accessing the Tenable Security Center interface (and Director communication). TCP 8834 is for Nessus communication; 8835 for Network Monitor; 22 for remote repository synchronization.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-123",
    "x": [
      "The source answer key does not select this alternative: “TCP 8835”. The keyed answer is “TCP 443”. Source explanation: Port requirements document TCP 443 for accessing the Tenable Security Center interface (and Director communication). TCP 8834 is for Nessus communication; 8835 for Network Monitor; 22 for remote repository synchronization.",
      "The source answer key does not select this alternative: “TCP 8834”. The keyed answer is “TCP 443”. Source explanation: Port requirements document TCP 443 for accessing the Tenable Security Center interface (and Director communication). TCP 8834 is for Nessus communication; 8835 for Network Monitor; 22 for remote repository synchronization.",
      "Port requirements document TCP 443 for accessing the Tenable Security Center interface (and Director communication). TCP 8834 is for Nessus communication; 8835 for Network Monitor; 22 for remote repository synchronization.",
      "The source answer key does not select this alternative: “TCP 22”. The keyed answer is “TCP 443”. Source explanation: Port requirements document TCP 443 for accessing the Tenable Security Center interface (and Director communication). TCP 8834 is for Nessus communication; 8835 for Network Monitor; 22 for remote repository synchronization."
    ]
  },
  {
    "id": "SC-Q124",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "Which port must Tenable Security Center use to communicate with Tenable Nessus scanners?",
    "o": [
      "TCP 8834",
      "TCP 443 only",
      "TCP 25",
      "UDP 161"
    ],
    "a": "A",
    "e": "Official port requirements list TCP 8834 for communicating with Tenable Nessus. Security Center reaches scanners on that port to manage scans and retrieve results.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-124",
    "x": [
      "Official port requirements list TCP 8834 for communicating with Tenable Nessus. Security Center reaches scanners on that port to manage scans and retrieve results.",
      "The source answer key does not select this alternative: “TCP 443 only”. The keyed answer is “TCP 8834”. Source explanation: Official port requirements list TCP 8834 for communicating with Tenable Nessus. Security Center reaches scanners on that port to manage scans and retrieve results.",
      "The source answer key does not select this alternative: “TCP 25”. The keyed answer is “TCP 8834”. Source explanation: Official port requirements list TCP 8834 for communicating with Tenable Nessus. Security Center reaches scanners on that port to manage scans and retrieve results.",
      "The source answer key does not select this alternative: “UDP 161”. The keyed answer is “TCP 8834”. Source explanation: Official port requirements list TCP 8834 for communicating with Tenable Nessus. Security Center reaches scanners on that port to manage scans and retrieve results."
    ]
  },
  {
    "id": "SC-Q125",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "Which port is used for remote repository synchronization between Tenable Security Center instances?",
    "o": [
      "TCP 3389",
      "UDP 53",
      "TCP 22",
      "TCP 8834"
    ],
    "a": "C",
    "e": "Port requirements list TCP 22 for performing remote repository synchronization with another Tenable Security Center.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-125",
    "x": [
      "The source answer key does not select this alternative: “TCP 3389”. The keyed answer is “TCP 22”. Source explanation: Port requirements list TCP 22 for performing remote repository synchronization with another Tenable Security Center.",
      "The source answer key does not select this alternative: “UDP 53”. The keyed answer is “TCP 22”. Source explanation: Port requirements list TCP 22 for performing remote repository synchronization with another Tenable Security Center.",
      "Port requirements list TCP 22 for performing remote repository synchronization with another Tenable Security Center.",
      "The source answer key does not select this alternative: “TCP 8834”. The keyed answer is “TCP 22”. Source explanation: Port requirements list TCP 22 for performing remote repository synchronization with another Tenable Security Center."
    ]
  },
  {
    "id": "SC-Q126",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "Which Tenable Security Center user role is required to add a Nessus scanner under Resources > Tenable Nessus Scanners?",
    "o": [
      "Auditor",
      "Administrator",
      "Executive",
      "Vulnerability Analyst"
    ],
    "a": "B",
    "e": "Adding a Nessus scanner is an Administrator task. Organizational roles such as Auditor, Executive, and Vulnerability Analyst do not manage system-level scanner resources.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-126",
    "x": [
      "The source answer key does not select this alternative: “Auditor”. The keyed answer is “Administrator”. Source explanation: Adding a Nessus scanner is an Administrator task. Organizational roles such as Auditor, Executive, and Vulnerability Analyst do not manage system-level scanner resources.",
      "Adding a Nessus scanner is an Administrator task. Organizational roles such as Auditor, Executive, and Vulnerability Analyst do not manage system-level scanner resources.",
      "The source answer key does not select this alternative: “Executive”. The keyed answer is “Administrator”. Source explanation: Adding a Nessus scanner is an Administrator task. Organizational roles such as Auditor, Executive, and Vulnerability Analyst do not manage system-level scanner resources.",
      "The source answer key does not select this alternative: “Vulnerability Analyst”. The keyed answer is “Administrator”. Source explanation: Adding a Nessus scanner is an Administrator task. Organizational roles such as Auditor, Executive, and Vulnerability Analyst do not manage system-level scanner resources."
    ]
  },
  {
    "id": "SC-Q127",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "During initial Nessus setup, a scanner can be linked to Tenable Security Center by selecting which Managed by option?",
    "o": [
      "Tenable Vulnerability Management linking key only",
      "Tenable OT Security Director",
      "Tenable.sc (Tenable Security Center)",
      "Tenable Assurance Report Card Manager"
    ],
    "a": "C",
    "e": "Nessus can be installed/linked as a remote scanner managed by Tenable.sc / Tenable Security Center. After creating the local Nessus admin user, the Security Center administrator adds the scanner by host/port/credentials.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-127",
    "x": [
      "The source answer key does not select this alternative: “Tenable Vulnerability Management linking key only”. The keyed answer is “Tenable.sc (Tenable Security Center)”. Source explanation: Nessus can be installed/linked as a remote scanner managed by Tenable.sc / Tenable Security Center. After creating the local Nessus admin user, the Security Center administrator adds the scanner by host/port/credentials.",
      "The source answer key does not select this alternative: “Tenable OT Security Director”. The keyed answer is “Tenable.sc (Tenable Security Center)”. Source explanation: Nessus can be installed/linked as a remote scanner managed by Tenable.sc / Tenable Security Center. After creating the local Nessus admin user, the Security Center administrator adds the scanner by host/port/credentials.",
      "Nessus can be installed/linked as a remote scanner managed by Tenable.sc / Tenable Security Center. After creating the local Nessus admin user, the Security Center administrator adds the scanner by host/port/credentials.",
      "The source answer key does not select this alternative: “Tenable Assurance Report Card Manager”. The keyed answer is “Tenable.sc (Tenable Security Center)”. Source explanation: Nessus can be installed/linked as a remote scanner managed by Tenable.sc / Tenable Security Center. After creating the local Nessus admin user, the Security Center administrator adds the scanner by host/port/credentials."
    ]
  },
  {
    "id": "SC-Q128",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "Which component communication uses TCP 8835 in a Tenable Security Center deployment?",
    "o": [
      "Communication with Tenable Network Monitor",
      "SMTP email delivery for scheduled reports",
      "Remote repository synchronization",
      "Accessing the Security Center web UI"
    ],
    "a": "A",
    "e": "Port requirements list TCP 8835 for communicating with Tenable Network Monitor. The UI uses 443; remote repository sync uses 22; email uses mail infrastructure, not 8835.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-128",
    "x": [
      "Port requirements list TCP 8835 for communicating with Tenable Network Monitor. The UI uses 443; remote repository sync uses 22; email uses mail infrastructure, not 8835.",
      "The source answer key does not select this alternative: “SMTP email delivery for scheduled reports”. The keyed answer is “Communication with Tenable Network Monitor”. Source explanation: Port requirements list TCP 8835 for communicating with Tenable Network Monitor. The UI uses 443; remote repository sync uses 22; email uses mail infrastructure, not 8835.",
      "The source answer key does not select this alternative: “Remote repository synchronization”. The keyed answer is “Communication with Tenable Network Monitor”. Source explanation: Port requirements list TCP 8835 for communicating with Tenable Network Monitor. The UI uses 443; remote repository sync uses 22; email uses mail infrastructure, not 8835.",
      "The source answer key does not select this alternative: “Accessing the Security Center web UI”. The keyed answer is “Communication with Tenable Network Monitor”. Source explanation: Port requirements list TCP 8835 for communicating with Tenable Network Monitor. The UI uses 443; remote repository sync uses 22; email uses mail infrastructure, not 8835."
    ]
  },
  {
    "id": "SC-Q129",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Installation Deployment",
    "q": "What should an administrator confirm before adding a Nessus Manager versus a standalone Nessus scanner to Security Center?",
    "o": [
      "Whether the repository type is Offline, because only Offline repos can receive agent data",
      "Whether the remote instance is a standalone scanner or a Nessus Manager that manages agents, because connection/credential options differ",
      "Whether Trend Days is set to 0 on all dashboards",
      "Whether all users have the No Role assignment"
    ],
    "a": "B",
    "e": "Tenable notes you must confirm whether you are connecting to standalone Nessus or Nessus Manager. Manager deployments that provide agent results use additional options such as Agent Capable and possibly API keys.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-129",
    "x": [
      "The source answer key does not select this alternative: “Whether the repository type is Offline, because only Offline repos can receive agent data”. The keyed answer is “Whether the remote instance is a standalone scanner or a Nessus Manager that manages agents, because connection/credential options differ”. Source explanation: Tenable notes you must confirm whether you are connecting to standalone Nessus or Nessus Manager. Manager deployments that provide agent results use additional options such as Agent Capable and possibly API keys.",
      "Tenable notes you must confirm whether you are connecting to standalone Nessus or Nessus Manager. Manager deployments that provide agent results use additional options such as Agent Capable and possibly API keys.",
      "The source answer key does not select this alternative: “Whether Trend Days is set to 0 on all dashboards”. The keyed answer is “Whether the remote instance is a standalone scanner or a Nessus Manager that manages agents, because connection/credential options differ”. Source explanation: Tenable notes you must confirm whether you are connecting to standalone Nessus or Nessus Manager. Manager deployments that provide agent results use additional options such as Agent Capable and possibly API keys.",
      "The source answer key does not select this alternative: “Whether all users have the No Role assignment”. The keyed answer is “Whether the remote instance is a standalone scanner or a Nessus Manager that manages agents, because connection/credential options differ”. Source explanation: Tenable notes you must confirm whether you are connecting to standalone Nessus or Nessus Manager. Manager deployments that provide agent results use additional options such as Agent Capable and possibly API keys."
    ]
  },
  {
    "id": "SC-Q130",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Vulnerability Analysis",
    "q": "In Tenable Security Center vulnerability analysis, what does the Cumulative view show?",
    "o": [
      "Only Assurance Report Card pass/fail history",
      "Vulnerabilities currently present (active) on scanned assets",
      "Only vulnerabilities that were fixed in the last 24 hours",
      "Only scanner connectivity events"
    ],
    "a": "B",
    "e": "The Cumulative view shows currently active vulnerabilities present on assets. The Mitigated view is used for vulnerabilities that are no longer currently present but were previously detected.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-130",
    "x": [
      "The source answer key does not select this alternative: “Only Assurance Report Card pass/fail history”. The keyed answer is “Vulnerabilities currently present (active) on scanned assets”. Source explanation: The Cumulative view shows currently active vulnerabilities present on assets. The Mitigated view is used for vulnerabilities that are no longer currently present but were previously detected.",
      "The Cumulative view shows currently active vulnerabilities present on assets. The Mitigated view is used for vulnerabilities that are no longer currently present but were previously detected.",
      "The source answer key does not select this alternative: “Only vulnerabilities that were fixed in the last 24 hours”. The keyed answer is “Vulnerabilities currently present (active) on scanned assets”. Source explanation: The Cumulative view shows currently active vulnerabilities present on assets. The Mitigated view is used for vulnerabilities that are no longer currently present but were previously detected.",
      "The source answer key does not select this alternative: “Only scanner connectivity events”. The keyed answer is “Vulnerabilities currently present (active) on scanned assets”. Source explanation: The Cumulative view shows currently active vulnerabilities present on assets. The Mitigated view is used for vulnerabilities that are no longer currently present but were previously detected."
    ]
  },
  {
    "id": "SC-Q131",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Vulnerability Analysis",
    "q": "Which analysis permission allows a user to change the severity of vulnerabilities in Tenable Security Center?",
    "o": [
      "Create Audit Files",
      "Recast Risks",
      "Verify Hostname",
      "Manage Freeze Windows"
    ],
    "a": "B",
    "e": "Recast Risks allows the user to change the severity for vulnerabilities. Accept Risks removes accepted items from default analysis/dashboard/report views.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-131",
    "x": [
      "The source answer key does not select this alternative: “Create Audit Files”. The keyed answer is “Recast Risks”. Source explanation: Recast Risks allows the user to change the severity for vulnerabilities. Accept Risks removes accepted items from default analysis/dashboard/report views.",
      "Recast Risks allows the user to change the severity for vulnerabilities. Accept Risks removes accepted items from default analysis/dashboard/report views.",
      "The source answer key does not select this alternative: “Verify Hostname”. The keyed answer is “Recast Risks”. Source explanation: Recast Risks allows the user to change the severity for vulnerabilities. Accept Risks removes accepted items from default analysis/dashboard/report views.",
      "The source answer key does not select this alternative: “Manage Freeze Windows”. The keyed answer is “Recast Risks”. Source explanation: Recast Risks allows the user to change the severity for vulnerabilities. Accept Risks removes accepted items from default analysis/dashboard/report views."
    ]
  },
  {
    "id": "SC-Q132",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Vulnerability Analysis",
    "q": "What does the Accept Risk workflow do in vulnerability analysis?",
    "o": [
      "Formally accept risk for vulnerabilities so they are removed from the default view for analysis, dashboards, and reports",
      "Increase the vulnerability severity by one level",
      "Move the finding into an Offline repository permanently",
      "Automatically patch the accepted CVE on all hosts"
    ],
    "a": "A",
    "e": "Accept Risks allows users to accept risks for vulnerabilities, removing them from the default view for analysis, dashboards, and reports. It does not patch systems or raise severity (raising/changing severity is Recast Risk).",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-132",
    "x": [
      "Accept Risks allows users to accept risks for vulnerabilities, removing them from the default view for analysis, dashboards, and reports. It does not patch systems or raise severity (raising/changing severity is Recast Risk).",
      "The source answer key does not select this alternative: “Increase the vulnerability severity by one level”. The keyed answer is “Formally accept risk for vulnerabilities so they are removed from the default view for analysis, dashboards, and reports”. Source explanation: Accept Risks allows users to accept risks for vulnerabilities, removing them from the default view for analysis, dashboards, and reports. It does not patch systems or raise severity (raising/changing severity is Recast Risk).",
      "The source answer key does not select this alternative: “Move the finding into an Offline repository permanently”. The keyed answer is “Formally accept risk for vulnerabilities so they are removed from the default view for analysis, dashboards, and reports”. Source explanation: Accept Risks allows users to accept risks for vulnerabilities, removing them from the default view for analysis, dashboards, and reports. It does not patch systems or raise severity (raising/changing severity is Recast Risk).",
      "The source answer key does not select this alternative: “Automatically patch the accepted CVE on all hosts”. The keyed answer is “Formally accept risk for vulnerabilities so they are removed from the default view for analysis, dashboards, and reports”. Source explanation: Accept Risks allows users to accept risks for vulnerabilities, removing them from the default view for analysis, dashboards, and reports. It does not patch systems or raise severity (raising/changing severity is Recast Risk)."
    ]
  },
  {
    "id": "SC-Q133",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Vulnerability Analysis",
    "q": "An analyst needs to review only vulnerabilities from a specific Nessus plugin family and then a plugin ID range. Which filters should they apply?",
    "o": [
      "Scan Zone and Restricted Scan Ranges",
      "Plugin Family and Plugin ID",
      "Freeze Window and Bell Notifications",
      "User Role and Group Relationship"
    ],
    "a": "B",
    "e": "Vulnerability analysis filters include Plugin Family and Plugin ID. Those components narrow results to a family and then to specific plugin identifiers.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-133",
    "x": [
      "The source answer key does not select this alternative: “Scan Zone and Restricted Scan Ranges”. The keyed answer is “Plugin Family and Plugin ID”. Source explanation: Vulnerability analysis filters include Plugin Family and Plugin ID. Those components narrow results to a family and then to specific plugin identifiers.",
      "Vulnerability analysis filters include Plugin Family and Plugin ID. Those components narrow results to a family and then to specific plugin identifiers.",
      "The source answer key does not select this alternative: “Freeze Window and Bell Notifications”. The keyed answer is “Plugin Family and Plugin ID”. Source explanation: Vulnerability analysis filters include Plugin Family and Plugin ID. Those components narrow results to a family and then to specific plugin identifiers.",
      "The source answer key does not select this alternative: “User Role and Group Relationship”. The keyed answer is “Plugin Family and Plugin ID”. Source explanation: Vulnerability analysis filters include Plugin Family and Plugin ID. Those components narrow results to a family and then to specific plugin identifiers."
    ]
  },
  {
    "id": "SC-Q134",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Vulnerability Analysis",
    "q": "Which statement correctly describes Manage Risks when Accept Risks or Recast Risks is enabled?",
    "o": [
      "It allows the user to modify accept and recast risk rules created by other users",
      "It allows the user to delete all repositories in the organization",
      "It allows the user to create new Administrator accounts",
      "It allows the user to change the Security Center HTTPS port"
    ],
    "a": "A",
    "e": "Manage Risks appears when Accept Risks or Recast Risks is enabled and allows modifying accept/recast risk rules created by other users.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-134",
    "x": [
      "Manage Risks appears when Accept Risks or Recast Risks is enabled and allows modifying accept/recast risk rules created by other users.",
      "The source answer key does not select this alternative: “It allows the user to delete all repositories in the organization”. The keyed answer is “It allows the user to modify accept and recast risk rules created by other users”. Source explanation: Manage Risks appears when Accept Risks or Recast Risks is enabled and allows modifying accept/recast risk rules created by other users.",
      "The source answer key does not select this alternative: “It allows the user to create new Administrator accounts”. The keyed answer is “It allows the user to modify accept and recast risk rules created by other users”. Source explanation: Manage Risks appears when Accept Risks or Recast Risks is enabled and allows modifying accept/recast risk rules created by other users.",
      "The source answer key does not select this alternative: “It allows the user to change the Security Center HTTPS port”. The keyed answer is “It allows the user to modify accept and recast risk rules created by other users”. Source explanation: Manage Risks appears when Accept Risks or Recast Risks is enabled and allows modifying accept/recast risk rules created by other users."
    ]
  },
  {
    "id": "SC-Q135",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Vulnerability Analysis",
    "q": "A vulnerability no longer appears in cumulative results after remediation. Where should an analyst look to review the previously fixed finding?",
    "o": [
      "Mitigated vulnerability view",
      "Scan zone detail view only",
      "Credential Manager credential secret view",
      "Nessus scanner Verify Hostname log only"
    ],
    "a": "A",
    "e": "The Vulnerabilities page can display cumulative or mitigated databases. Mitigated is intended for vulnerabilities that are no longer currently present.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-135",
    "x": [
      "The Vulnerabilities page can display cumulative or mitigated databases. Mitigated is intended for vulnerabilities that are no longer currently present.",
      "The source answer key does not select this alternative: “Scan zone detail view only”. The keyed answer is “Mitigated vulnerability view”. Source explanation: The Vulnerabilities page can display cumulative or mitigated databases. Mitigated is intended for vulnerabilities that are no longer currently present.",
      "The source answer key does not select this alternative: “Credential Manager credential secret view”. The keyed answer is “Mitigated vulnerability view”. Source explanation: The Vulnerabilities page can display cumulative or mitigated databases. Mitigated is intended for vulnerabilities that are no longer currently present.",
      "The source answer key does not select this alternative: “Nessus scanner Verify Hostname log only”. The keyed answer is “Mitigated vulnerability view”. Source explanation: The Vulnerabilities page can display cumulative or mitigated databases. Mitigated is intended for vulnerabilities that are no longer currently present."
    ]
  },
  {
    "id": "SC-Q136",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "Which permission is required to create LDAP Query Assets that update host lists from directory queries?",
    "o": [
      "Create Alerts",
      "Manage Images",
      "Create LDAP Query Assets",
      "Update Feeds"
    ],
    "a": "C",
    "e": "Create LDAP Query Assets allows users to create LDAP query assets that update a list of hosts based on a user-defined LDAP query.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-136",
    "x": [
      "The source answer key does not select this alternative: “Create Alerts”. The keyed answer is “Create LDAP Query Assets”. Source explanation: Create LDAP Query Assets allows users to create LDAP query assets that update a list of hosts based on a user-defined LDAP query.",
      "The source answer key does not select this alternative: “Manage Images”. The keyed answer is “Create LDAP Query Assets”. Source explanation: Create LDAP Query Assets allows users to create LDAP query assets that update a list of hosts based on a user-defined LDAP query.",
      "Create LDAP Query Assets allows users to create LDAP query assets that update a list of hosts based on a user-defined LDAP query.",
      "The source answer key does not select this alternative: “Update Feeds”. The keyed answer is “Create LDAP Query Assets”. Source explanation: Create LDAP Query Assets allows users to create LDAP query assets that update a list of hosts based on a user-defined LDAP query."
    ]
  },
  {
    "id": "SC-Q137",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "What is an LDAP query asset list used for in Tenable Security Center?",
    "o": [
      "Authenticate Security Center to Nessus on port 8834",
      "Dynamically update a list of hosts based on a user-defined LDAP query",
      "Store .audit files for CIS Benchmarks",
      "Enable CyberScope report generation"
    ],
    "a": "B",
    "e": "LDAP query assets maintain host membership from LDAP query results, useful when asset inventory is driven by directory attributes rather than static IP lists alone.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-137",
    "x": [
      "The source answer key does not select this alternative: “Authenticate Security Center to Nessus on port 8834”. The keyed answer is “Dynamically update a list of hosts based on a user-defined LDAP query”. Source explanation: LDAP query assets maintain host membership from LDAP query results, useful when asset inventory is driven by directory attributes rather than static IP lists alone.",
      "LDAP query assets maintain host membership from LDAP query results, useful when asset inventory is driven by directory attributes rather than static IP lists alone.",
      "The source answer key does not select this alternative: “Store .audit files for CIS Benchmarks”. The keyed answer is “Dynamically update a list of hosts based on a user-defined LDAP query”. Source explanation: LDAP query assets maintain host membership from LDAP query results, useful when asset inventory is driven by directory attributes rather than static IP lists alone.",
      "The source answer key does not select this alternative: “Enable CyberScope report generation”. The keyed answer is “Dynamically update a list of hosts based on a user-defined LDAP query”. Source explanation: LDAP query assets maintain host membership from LDAP query results, useful when asset inventory is driven by directory attributes rather than static IP lists alone."
    ]
  },
  {
    "id": "SC-Q138",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "Which set operation would a combination asset list use to include only hosts present in both List A and List B?",
    "o": [
      "Intersection",
      "Union",
      "Difference of A minus B only when A is empty",
      "DNS normalization"
    ],
    "a": "A",
    "e": "Combination asset lists support set operations. Intersection returns only assets present in both source lists. Union returns assets in either list.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-138",
    "x": [
      "Combination asset lists support set operations. Intersection returns only assets present in both source lists. Union returns assets in either list.",
      "The source answer key does not select this alternative: “Union”. The keyed answer is “Intersection”. Source explanation: Combination asset lists support set operations. Intersection returns only assets present in both source lists. Union returns assets in either list.",
      "The source answer key does not select this alternative: “Difference of A minus B only when A is empty”. The keyed answer is “Intersection”. Source explanation: Combination asset lists support set operations. Intersection returns only assets present in both source lists. Union returns assets in either list.",
      "The source answer key does not select this alternative: “DNS normalization”. The keyed answer is “Intersection”. Source explanation: Combination asset lists support set operations. Intersection returns only assets present in both source lists. Union returns assets in either list."
    ]
  },
  {
    "id": "SC-Q139",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "Why might a Security Manager create separate static asset lists for PCI CDE and corporate workstation ranges?",
    "o": [
      "To scope scans, dashboards, reports, alerts, and analysis filters to the correct business context",
      "Because dynamic asset lists cannot use IP addresses",
      "Because repositories can only store one asset list at a time",
      "Because Administrators cannot assign repositories without asset lists"
    ],
    "a": "A",
    "e": "Asset lists are reusable scoping objects across scanning and analysis workflows. Separating PCI CDE from workstations enables precise targeting and reporting without mixing environments.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-139",
    "x": [
      "Asset lists are reusable scoping objects across scanning and analysis workflows. Separating PCI CDE from workstations enables precise targeting and reporting without mixing environments.",
      "The source answer key does not select this alternative: “Because dynamic asset lists cannot use IP addresses”. The keyed answer is “To scope scans, dashboards, reports, alerts, and analysis filters to the correct business context”. Source explanation: Asset lists are reusable scoping objects across scanning and analysis workflows. Separating PCI CDE from workstations enables precise targeting and reporting without mixing environments.",
      "The source answer key does not select this alternative: “Because repositories can only store one asset list at a time”. The keyed answer is “To scope scans, dashboards, reports, alerts, and analysis filters to the correct business context”. Source explanation: Asset lists are reusable scoping objects across scanning and analysis workflows. Separating PCI CDE from workstations enables precise targeting and reporting without mixing environments.",
      "The source answer key does not select this alternative: “Because Administrators cannot assign repositories without asset lists”. The keyed answer is “To scope scans, dashboards, reports, alerts, and analysis filters to the correct business context”. Source explanation: Asset lists are reusable scoping objects across scanning and analysis workflows. Separating PCI CDE from workstations enables precise targeting and reporting without mixing environments."
    ]
  },
  {
    "id": "SC-Q140",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Asset Lists",
    "q": "Which asset list type requires existing repository/scan data before it typically shows members?",
    "o": [
      "An empty placeholder list with hard-coded addresses only",
      "Static asset list of manually entered CIDR ranges",
      "A newly typed IP list with no query conditions",
      "Dynamic asset list"
    ],
    "a": "D",
    "e": "Dynamic asset lists calculate membership from scan/repository data matching query conditions. Static lists with manually entered addresses are usable immediately after save.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-140",
    "x": [
      "The source answer key does not select this alternative: “An empty placeholder list with hard-coded addresses only”. The keyed answer is “Dynamic asset list”. Source explanation: Dynamic asset lists calculate membership from scan/repository data matching query conditions. Static lists with manually entered addresses are usable immediately after save.",
      "The source answer key does not select this alternative: “Static asset list of manually entered CIDR ranges”. The keyed answer is “Dynamic asset list”. Source explanation: Dynamic asset lists calculate membership from scan/repository data matching query conditions. Static lists with manually entered addresses are usable immediately after save.",
      "The source answer key does not select this alternative: “A newly typed IP list with no query conditions”. The keyed answer is “Dynamic asset list”. Source explanation: Dynamic asset lists calculate membership from scan/repository data matching query conditions. Static lists with manually entered addresses are usable immediately after save.",
      "Dynamic asset lists calculate membership from scan/repository data matching query conditions. Static lists with manually entered addresses are usable immediately after save."
    ]
  },
  {
    "id": "SC-Q141",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "Which built-in role is intended for users who mainly browse dashboards and reports and can assign tasks with tickets, but are not focused on managing scans or users?",
    "o": [
      "Administrator",
      "Executive",
      "Credential Manager",
      "No Role"
    ],
    "a": "B",
    "e": "The Executive role is intended for high-level overview users who browse dashboards and review reports and can assign tasks via tickets, without focusing on running scans or managing users.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-141",
    "x": [
      "The source answer key does not select this alternative: “Administrator”. The keyed answer is “Executive”. Source explanation: The Executive role is intended for high-level overview users who browse dashboards and review reports and can assign tasks via tickets, without focusing on running scans or managing users.",
      "The Executive role is intended for high-level overview users who browse dashboards and review reports and can assign tasks via tickets, without focusing on running scans or managing users.",
      "The source answer key does not select this alternative: “Credential Manager”. The keyed answer is “Executive”. Source explanation: The Executive role is intended for high-level overview users who browse dashboards and review reports and can assign tasks via tickets, without focusing on running scans or managing users.",
      "The source answer key does not select this alternative: “No Role”. The keyed answer is “Executive”. Source explanation: The Executive role is intended for high-level overview users who browse dashboards and review reports and can assign tasks via tickets, without focusing on running scans or managing users."
    ]
  },
  {
    "id": "SC-Q142",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "Which built-in role can perform basic tasks such as viewing security data, performing scans, sharing objects, viewing logs, and working with tickets?",
    "o": [
      "Administrator",
      "SM-Linked",
      "No Role",
      "Vulnerability Analyst"
    ],
    "a": "D",
    "e": "Vulnerability Analyst is documented as a basic organizational role allowed to view security data, perform scans, share objects, view logs, and work with tickets.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-142",
    "x": [
      "The source answer key does not select this alternative: “Administrator”. The keyed answer is “Vulnerability Analyst”. Source explanation: Vulnerability Analyst is documented as a basic organizational role allowed to view security data, perform scans, share objects, view logs, and work with tickets.",
      "The source answer key does not select this alternative: “SM-Linked”. The keyed answer is “Vulnerability Analyst”. Source explanation: Vulnerability Analyst is documented as a basic organizational role allowed to view security data, perform scans, share objects, view logs, and work with tickets.",
      "The source answer key does not select this alternative: “No Role”. The keyed answer is “Vulnerability Analyst”. Source explanation: Vulnerability Analyst is documented as a basic organizational role allowed to view security data, perform scans, share objects, view logs, and work with tickets.",
      "Vulnerability Analyst is documented as a basic organizational role allowed to view security data, perform scans, share objects, view logs, and work with tickets."
    ]
  },
  {
    "id": "SC-Q143",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "What is unique about the initial Security Manager account created with a new organization?",
    "o": [
      "It cannot launch scans until an Auditor approves each scan",
      "It cannot be deleted without deleting the entire organization",
      "It automatically becomes an Administrator after first login",
      "It is the only account that can access TCP 8834"
    ],
    "a": "B",
    "e": "Tenable documents that the initial Security Manager created with a new organization cannot be deleted without deleting the entire organization. That account has broad organizational access to the organization's data.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-143",
    "x": [
      "The source answer key does not select this alternative: “It cannot launch scans until an Auditor approves each scan”. The keyed answer is “It cannot be deleted without deleting the entire organization”. Source explanation: Tenable documents that the initial Security Manager created with a new organization cannot be deleted without deleting the entire organization. That account has broad organizational access to the organization's data.",
      "Tenable documents that the initial Security Manager created with a new organization cannot be deleted without deleting the entire organization. That account has broad organizational access to the organization's data.",
      "The source answer key does not select this alternative: “It automatically becomes an Administrator after first login”. The keyed answer is “It cannot be deleted without deleting the entire organization”. Source explanation: Tenable documents that the initial Security Manager created with a new organization cannot be deleted without deleting the entire organization. That account has broad organizational access to the organization's data.",
      "The source answer key does not select this alternative: “It is the only account that can access TCP 8834”. The keyed answer is “It cannot be deleted without deleting the entire organization”. Source explanation: Tenable documents that the initial Security Manager created with a new organization cannot be deleted without deleting the entire organization. That account has broad organizational access to the organization's data."
    ]
  },
  {
    "id": "SC-Q144",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "Why do Administrator users not see organizational vulnerability dashboards by default?",
    "o": [
      "Administrators must use the Auditor role simultaneously",
      "Administrators do not belong to an organization and do not have access to the data collected by Tenable Security Center",
      "Administrators can only use PDF reports, never dashboards",
      "Administrators are limited to Agent repositories only"
    ],
    "a": "B",
    "e": "Official role documentation states administrators do not belong to an organization and therefore do not have access to the vulnerability data collected by Security Center. Their job is system/organization configuration.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-144",
    "x": [
      "The source answer key does not select this alternative: “Administrators must use the Auditor role simultaneously”. The keyed answer is “Administrators do not belong to an organization and do not have access to the data collected by Tenable Security Center”. Source explanation: Official role documentation states administrators do not belong to an organization and therefore do not have access to the vulnerability data collected by Security Center. Their job is system/organization configuration.",
      "Official role documentation states administrators do not belong to an organization and therefore do not have access to the vulnerability data collected by Security Center. Their job is system/organization configuration.",
      "The source answer key does not select this alternative: “Administrators can only use PDF reports, never dashboards”. The keyed answer is “Administrators do not belong to an organization and do not have access to the data collected by Tenable Security Center”. Source explanation: Official role documentation states administrators do not belong to an organization and therefore do not have access to the vulnerability data collected by Security Center. Their job is system/organization configuration.",
      "The source answer key does not select this alternative: “Administrators are limited to Agent repositories only”. The keyed answer is “Administrators do not belong to an organization and do not have access to the data collected by Tenable Security Center”. Source explanation: Official role documentation states administrators do not belong to an organization and therefore do not have access to the vulnerability data collected by Security Center. Their job is system/organization configuration."
    ]
  },
  {
    "id": "SC-Q145",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Access Control",
    "q": "What does the Manage Groups permission allow an organizational user to do?",
    "o": [
      "Enable CyberScope reporting system-wide",
      "Add, edit, and delete groups, including creating groups with access to vulnerability and event data available to the organization",
      "Register Nessus scanners on port 8834",
      "Change the Security Center license IP count"
    ],
    "a": "B",
    "e": "Manage Groups allows adding/editing/deleting groups. Users with this permission can create groups with access to vulnerability and event data available to the organization.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-145",
    "x": [
      "The source answer key does not select this alternative: “Enable CyberScope reporting system-wide”. The keyed answer is “Add, edit, and delete groups, including creating groups with access to vulnerability and event data available to the organization”. Source explanation: Manage Groups allows adding/editing/deleting groups. Users with this permission can create groups with access to vulnerability and event data available to the organization.",
      "Manage Groups allows adding/editing/deleting groups. Users with this permission can create groups with access to vulnerability and event data available to the organization.",
      "The source answer key does not select this alternative: “Register Nessus scanners on port 8834”. The keyed answer is “Add, edit, and delete groups, including creating groups with access to vulnerability and event data available to the organization”. Source explanation: Manage Groups allows adding/editing/deleting groups. Users with this permission can create groups with access to vulnerability and event data available to the organization.",
      "The source answer key does not select this alternative: “Change the Security Center license IP count”. The keyed answer is “Add, edit, and delete groups, including creating groups with access to vulnerability and event data available to the organization”. Source explanation: Manage Groups allows adding/editing/deleting groups. Users with this permission can create groups with access to vulnerability and event data available to the organization."
    ]
  },
  {
    "id": "SC-Q146",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "Which statement best describes Tenable Security Center relative to Tenable Vulnerability Management?",
    "o": [
      "Security Center is Tenable's on-premises vulnerability analysis platform; Vulnerability Management is the cloud platform",
      "Security Center is cloud-only; Vulnerability Management is on-premises only",
      "Both products store all customer scan data exclusively in Tenable's SaaS cloud",
      "Security Center cannot use Nessus scanners"
    ],
    "a": "A",
    "e": "Tenable Security Center (formerly Tenable.sc) is the on-premises vulnerability analysis solution. Tenable Vulnerability Management (formerly Tenable.io) is cloud-based. Security Center stores data under customer control and manages Nessus scanners.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-146",
    "x": [
      "Tenable Security Center (formerly Tenable.sc) is the on-premises vulnerability analysis solution. Tenable Vulnerability Management (formerly Tenable.io) is cloud-based. Security Center stores data under customer control and manages Nessus scanners.",
      "The source answer key does not select this alternative: “Security Center is cloud-only; Vulnerability Management is on-premises only”. The keyed answer is “Security Center is Tenable's on-premises vulnerability analysis platform; Vulnerability Management is the cloud platform”. Source explanation: Tenable Security Center (formerly Tenable.sc) is the on-premises vulnerability analysis solution. Tenable Vulnerability Management (formerly Tenable.io) is cloud-based. Security Center stores data under customer control and manages Nessus scanners.",
      "The source answer key does not select this alternative: “Both products store all customer scan data exclusively in Tenable's SaaS cloud”. The keyed answer is “Security Center is Tenable's on-premises vulnerability analysis platform; Vulnerability Management is the cloud platform”. Source explanation: Tenable Security Center (formerly Tenable.sc) is the on-premises vulnerability analysis solution. Tenable Vulnerability Management (formerly Tenable.io) is cloud-based. Security Center stores data under customer control and manages Nessus scanners.",
      "The source answer key does not select this alternative: “Security Center cannot use Nessus scanners”. The keyed answer is “Security Center is Tenable's on-premises vulnerability analysis platform; Vulnerability Management is the cloud platform”. Source explanation: Tenable Security Center (formerly Tenable.sc) is the on-premises vulnerability analysis solution. Tenable Vulnerability Management (formerly Tenable.io) is cloud-based. Security Center stores data under customer control and manages Nessus scanners."
    ]
  },
  {
    "id": "SC-Q147",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "What is Tenable Security Center Director used for?",
    "o": [
      "Replace Nessus scanners with agent-only scanning",
      "Provide a unified view and management across multiple distributed Security Center consoles",
      "Convert all repositories to Offline automatically",
      "Issue linking keys for Tenable Vulnerability Management"
    ],
    "a": "B",
    "e": "Security Center Director is an add-on that gives enterprise customers a unified view across multiple Security Center consoles spanning dispersed networks.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-147",
    "x": [
      "The source answer key does not select this alternative: “Replace Nessus scanners with agent-only scanning”. The keyed answer is “Provide a unified view and management across multiple distributed Security Center consoles”. Source explanation: Security Center Director is an add-on that gives enterprise customers a unified view across multiple Security Center consoles spanning dispersed networks.",
      "Security Center Director is an add-on that gives enterprise customers a unified view across multiple Security Center consoles spanning dispersed networks.",
      "The source answer key does not select this alternative: “Convert all repositories to Offline automatically”. The keyed answer is “Provide a unified view and management across multiple distributed Security Center consoles”. Source explanation: Security Center Director is an add-on that gives enterprise customers a unified view across multiple Security Center consoles spanning dispersed networks.",
      "The source answer key does not select this alternative: “Issue linking keys for Tenable Vulnerability Management”. The keyed answer is “Provide a unified view and management across multiple distributed Security Center consoles”. Source explanation: Security Center Director is an add-on that gives enterprise customers a unified view across multiple Security Center consoles spanning dispersed networks."
    ]
  },
  {
    "id": "SC-Q148",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "Which sensor provides passive vulnerability data that Security Center can analyze alongside active Nessus results?",
    "o": [
      "PDF report scheduler",
      "Credential Manager role",
      "Assurance Report Card template gallery",
      "Tenable Network Monitor"
    ],
    "a": "D",
    "e": "Tenable Network Monitor (NNM) provides passive monitoring data. Security Center communicates with NNM (TCP 8835) and can retain passive findings with a typically shorter default lifetime than active scan data.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-148",
    "x": [
      "The source answer key does not select this alternative: “PDF report scheduler”. The keyed answer is “Tenable Network Monitor”. Source explanation: Tenable Network Monitor (NNM) provides passive monitoring data. Security Center communicates with NNM (TCP 8835) and can retain passive findings with a typically shorter default lifetime than active scan data.",
      "The source answer key does not select this alternative: “Credential Manager role”. The keyed answer is “Tenable Network Monitor”. Source explanation: Tenable Network Monitor (NNM) provides passive monitoring data. Security Center communicates with NNM (TCP 8835) and can retain passive findings with a typically shorter default lifetime than active scan data.",
      "The source answer key does not select this alternative: “Assurance Report Card template gallery”. The keyed answer is “Tenable Network Monitor”. Source explanation: Tenable Network Monitor (NNM) provides passive monitoring data. Security Center communicates with NNM (TCP 8835) and can retain passive findings with a typically shorter default lifetime than active scan data.",
      "Tenable Network Monitor (NNM) provides passive monitoring data. Security Center communicates with NNM (TCP 8835) and can retain passive findings with a typically shorter default lifetime than active scan data."
    ]
  },
  {
    "id": "SC-Q149",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Tenable Sc Architecture",
    "q": "In Specialist certification terms, what must a candidate complete before taking the practical exam?",
    "o": [
      "Only the practical exam is required; the written exam is optional",
      "A Tenable Expert large-scale deployment exam must be completed first",
      "A GIAC certification must be completed first",
      "The written exam (60 questions, 2 hours, 80% pass) must be completed first"
    ],
    "a": "D",
    "e": "The official Tenable Security Center Specialist Certification data sheet states the written exam must be completed before the practical exam. Written: 60 questions, 2 hours, 80% minimum. Practical: up to 30 tasks, 4 hours, 80% minimum.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-149",
    "x": [
      "The source answer key does not select this alternative: “Only the practical exam is required; the written exam is optional”. The keyed answer is “The written exam (60 questions, 2 hours, 80% pass) must be completed first”. Source explanation: The official Tenable Security Center Specialist Certification data sheet states the written exam must be completed before the practical exam. Written: 60 questions, 2 hours, 80% minimum. Practical: up to 30 tasks, 4 hours, 80% minimum.",
      "The source answer key does not select this alternative: “A Tenable Expert large-scale deployment exam must be completed first”. The keyed answer is “The written exam (60 questions, 2 hours, 80% pass) must be completed first”. Source explanation: The official Tenable Security Center Specialist Certification data sheet states the written exam must be completed before the practical exam. Written: 60 questions, 2 hours, 80% minimum. Practical: up to 30 tasks, 4 hours, 80% minimum.",
      "The source answer key does not select this alternative: “A GIAC certification must be completed first”. The keyed answer is “The written exam (60 questions, 2 hours, 80% pass) must be completed first”. Source explanation: The official Tenable Security Center Specialist Certification data sheet states the written exam must be completed before the practical exam. Written: 60 questions, 2 hours, 80% minimum. Practical: up to 30 tasks, 4 hours, 80% minimum.",
      "The official Tenable Security Center Specialist Certification data sheet states the written exam must be completed before the practical exam. Written: 60 questions, 2 hours, 80% minimum. Practical: up to 30 tasks, 4 hours, 80% minimum."
    ]
  },
  {
    "id": "SC-Q150",
    "course": "tenable-sc",
    "type": "single",
    "topic": "Security Center: Scan Zones",
    "q": "Which freeze window behavior is correct in Tenable Security Center?",
    "o": [
      "Freeze windows are system-wide only and cannot be organizational",
      "Freeze windows are organizational and prevent scans of affected targets during the configured time frame",
      "Freeze windows permanently delete mitigated vulnerabilities",
      "Freeze windows automatically upgrade all scanners to the latest Nessus version"
    ],
    "a": "B",
    "e": "Freeze windows specify time frames when Security Center should not scan specific targets, preventing remediation/ad-hoc scans during undesired periods such as production hours. They are organizational and affect scans in the creating user's organization. Manage Freeze Windows permission is required to administer them.",
    "origin": "complementar",
    "sourceId": "tenable-certified-sc-q-150",
    "x": [
      "The source answer key does not select this alternative: “Freeze windows are system-wide only and cannot be organizational”. The keyed answer is “Freeze windows are organizational and prevent scans of affected targets during the configured time frame”. Source explanation: Freeze windows specify time frames when Security Center should not scan specific targets, preventing remediation/ad-hoc scans during undesired periods such as production hours. They are organizational and affect scans in the creating user's organization. Manage Freeze Windows permission is required to administer them.",
      "Freeze windows specify time frames when Security Center should not scan specific targets, preventing remediation/ad-hoc scans during undesired periods such as production hours. They are organizational and affect scans in the creating user's organization. Manage Freeze Windows permission is required to administer them.",
      "The source answer key does not select this alternative: “Freeze windows permanently delete mitigated vulnerabilities”. The keyed answer is “Freeze windows are organizational and prevent scans of affected targets during the configured time frame”. Source explanation: Freeze windows specify time frames when Security Center should not scan specific targets, preventing remediation/ad-hoc scans during undesired periods such as production hours. They are organizational and affect scans in the creating user's organization. Manage Freeze Windows permission is required to administer them.",
      "The source answer key does not select this alternative: “Freeze windows automatically upgrade all scanners to the latest Nessus version”. The keyed answer is “Freeze windows are organizational and prevent scans of affected targets during the configured time frame”. Source explanation: Freeze windows specify time frames when Security Center should not scan specific targets, preventing remediation/ad-hoc scans during undesired periods such as production hours. They are organizational and affect scans in the creating user's organization. Manage Freeze Windows permission is required to administer them."
    ]
  }
];
if(!SIMULADOS.some(s=>s.id==="tenable-sc150")) SIMULADOS.push({id:"tenable-sc150",title:"Tenable · Security Center Specialist — 150 questions (English)",course:"tenable-sc",minutes:300,personal:true,complementary:true,questions});
})();
