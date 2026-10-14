/* Banco complementar / Bayview Global LLC.
 * Atribuição e termos originais preservados em manifesto.json.
 * Carregado como parte da integração padrão do site.
 */
(() => {
  const questions = [
  {
    "id": "BC-Q001",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "Which Tenable.io metric combines CVSS severity with threat intelligence and asset context to produce a risk-based prioritization score?",
    "o": [
      "ACR (Asset Criticality Rating)",
      "CVSS v3 Base Score",
      "AES (Asset Exposure Score)",
      "VPR (Vulnerability Priority Rating)"
    ],
    "a": "D",
    "e": "The imported key selects VPR because it incorporates vulnerability characteristics and threat intelligence. However, VPR does not itself encode asset-specific business criticality; the question's asset-context wording needs qualification.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-001",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q002",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "What is the range of the VPR (Vulnerability Priority Rating) score in Tenable?",
    "o": [
      "1 to 5",
      "0.1 to 10.0",
      "0 to 100",
      "0 to 1000"
    ],
    "a": "B",
    "e": "VPR runs from 0.1 to 10.0, with higher values indicating greater vulnerability priority.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-002",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q003",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Nessus plugin 19506 appears in every Tenable scan. What information does it provide?",
    "o": [
      "Operating system fingerprint of the scanned host",
      "CVSS scores for all vulnerabilities found in the scan",
      "List of all open ports found on the target host",
      "Scan metadata including scanner IP, scan duration, and whether credentials were accepted"
    ],
    "a": "D",
    "e": "Plugin 19506 reports scan execution metadata and credential-related information when present. Do not assume its appearance in every scan or treat accepted credentials alone as proof of complete local collection.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-003",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q004",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "What is the primary advantage of a credentialed Nessus scan over an uncredentialed scan?",
    "o": [
      "It enables local check plugins to detect missing patches and misconfigurations invisible to network-based checks",
      "It runs faster because fewer probe packets are required",
      "It does not require network access to the target host",
      "It generates a higher VPR score for all discovered vulnerabilities"
    ],
    "a": "A",
    "e": "Authenticated host access enables local checks of software, patches and configuration that remote unauthenticated probing may not expose.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-004",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q005",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "In Tenable.io, what does ACR (Asset Criticality Rating) represent?",
    "o": [
      "The CVSS score of the most critical vulnerability on the asset",
      "A dynamic score from 0–1000 representing overall asset vulnerability exposure",
      "The number of critical vulnerabilities found on the asset during the last scan",
      "A 1–10 score reflecting the business importance of an asset, configured by the security team"
    ],
    "a": "D",
    "e": "ACR uses a 1-10 scale for asset business criticality and can be adjusted to reflect organizational context under the applicable licensing.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-005",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q006",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "AES (Asset Exposure Score) in Tenable.io ranges from 0 to 1000. What two factors primarily determine an asset's AES?",
    "o": [
      "The vulnerabilities present on the asset and the asset's ACR (Asset Criticality Rating)",
      "The CVSS scores of all vulnerabilities and the asset's IP address subnet",
      "The number of scans performed on the asset and the last scan date",
      "The VPR scores of all vulnerabilities and the number of open ports"
    ],
    "a": "A",
    "e": "AES weighs the asset's active weakness exposure, including VPR-related risk, together with its ACR business criticality.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-006",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q007",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "A Tenable.io remediation campaign is created against a specific set of vulnerabilities. New vulnerabilities discovered after the campaign is created — what happens to them?",
    "o": [
      "They are automatically added to the campaign if they have the same CVE",
      "They are NOT automatically added to the campaign; the campaign uses a snapshot of vulnerability data at creation time",
      "They are added to the campaign only if they have a VPR score above 7.0",
      "They replace the existing campaign data if they affect the same assets"
    ],
    "a": "B",
    "e": "This is the answer for the snapshot-based campaign described by the imported key. Verify the actual product and workflow: current Exposure Response initiatives have their own documented selection and update behavior.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-007",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q008",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which Tenable.io scan template is most appropriate for detecting missing Windows patches on domain-joined workstations?",
    "o": [
      "Discovery Scan",
      "Web Application Tests",
      "Credentialed Patch Audit",
      "Basic Network Scan"
    ],
    "a": "C",
    "e": "Credentialed Patch Audit is specifically designed to collect local patch evidence and enumerate missing updates using suitable credentials.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-008",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q009",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "In Tenable.io, what is the purpose of tagging assets?",
    "o": [
      "To exclude assets from compliance benchmark checks",
      "To assign VPR scores to specific groups of assets",
      "To organize assets into logical groups for filtering, access control, and targeted scanning",
      "To automatically remediate vulnerabilities on tagged assets"
    ],
    "a": "C",
    "e": "Tags create logical asset sets used in filtering, access scope and targeted operational workflows.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-009",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q010",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "Which CVSS metric most directly captures whether a vulnerability requires user interaction to be exploited?",
    "o": [
      "User Interaction (UI)",
      "Attack Vector (AV)",
      "Privileges Required (PR)",
      "Confidentiality Impact (C)"
    ],
    "a": "A",
    "e": "User Interaction explicitly records whether exploitation needs an action by a human user.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-010",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q011",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "What is the purpose of Nessus Agents in Tenable.io?",
    "o": [
      "To monitor network traffic for intrusion detection",
      "To replace the Tenable.io console for on-premises deployments",
      "To perform web application penetration testing",
      "To scan assets that are offline, behind firewalls, or lacking persistent network connectivity to the scanner"
    ],
    "a": "D",
    "e": "Agents can assess locally when endpoints lack scanner reachability. They still need an appropriate manager communication path to obtain updates and deliver results; permanent isolation requires a separately supported workflow.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-011",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q012",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "A security analyst wants to filter vulnerabilities in Tenable.io to focus only on those with active known exploits in the wild. Which feature should they use?",
    "o": [
      "Filter by plugin family 'General'",
      "Filter by scan template type",
      "VPR filter for vulnerabilities with VPR score 9.0 and above",
      "CVSS v3 filter for scores above 9.0"
    ],
    "a": "C",
    "e": "This is the imported key's best available choice for high threat priority. VPR 9+ does not prove known exploitation; use explicit exploitation intelligence or CISA KEV-related filters for the strict 'only exploited' requirement.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-012",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q013",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "Which compliance benchmarks are natively supported in Tenable.io for configuration auditing?",
    "o": [
      "HIPAA and FERPA only",
      "NIST SP 800-53 and CMMC",
      "CIS Benchmarks and DISA STIGs",
      "SOC 2 Type II and ISO 27001"
    ],
    "a": "C",
    "e": "Tenable provides audit content for CIS Benchmarks and DISA STIGs to test supported system hardening requirements.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-013",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q014",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "In Tenable.io, what is the function of the 'Accepted Risk' workflow?",
    "o": [
      "To mark a vulnerability as intentionally accepted, removing it from active remediation tracking for a defined period",
      "To increase the VPR score of a vulnerability to reflect accepted business risk",
      "To delete the vulnerability finding from the scan results permanently",
      "To automatically escalate a vulnerability to a SIEM for incident response"
    ],
    "a": "A",
    "e": "Risk acceptance records a deliberate decision to tolerate a finding within a defined scope and, where configured, a time period; it is not a technical fix.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-014",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q015",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which plugin family in Nessus contains checks specifically for detecting missing Windows operating system patches?",
    "o": [
      "Windows: Microsoft Bulletins",
      "Service Detection",
      "Web Servers",
      "General"
    ],
    "a": "A",
    "e": "Windows: Microsoft Bulletins contains checks for missing Microsoft security updates using relevant Windows host evidence.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-015",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q016",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "What does the 'Recast Risk' feature in Tenable.io allow a security analyst to do?",
    "o": [
      "Reassign ownership of a vulnerability to a different team member",
      "Move a vulnerability from one remediation campaign to another",
      "Change the severity of a vulnerability finding to better reflect the organization's actual risk context",
      "Automatically rescan an asset to confirm whether a vulnerability was remediated"
    ],
    "a": "C",
    "e": "Recast applies a severity override to matching findings so their displayed classification reflects the approved risk treatment.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-016",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q017",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "In Tenable.io, which scan template would you choose to quickly identify live hosts and open ports without performing vulnerability assessment?",
    "o": [
      "Advanced Scan",
      "Malware Scan",
      "Basic Network Scan",
      "Discovery Scan"
    ],
    "a": "D",
    "e": "The intended discovery template locates hosts and ports without treating that inventory as a full vulnerability assessment.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-017",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q018",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A Tenable.io user wants to export vulnerability data for integration with a SIEM. Which export format provides the most flexibility for machine processing?",
    "o": [
      "HTML",
      "CSV",
      "PDF",
      "DOCX"
    ],
    "a": "B",
    "e": "Among these choices, CSV provides a structured tabular representation that scripts and SIEM importers can process directly.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-018",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q019",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "What is the key difference between CVSS v2 and CVSS v3 in Tenable vulnerability reporting?",
    "o": [
      "CVSS v3 is calculated by Tenable internally while CVSS v2 comes from the NVD",
      "CVSS v3 added Scope and User Interaction metrics not present in v2, providing more granular severity assessment",
      "CVSS v3 only applies to web application vulnerabilities",
      "CVSS v3 uses a 0–100 scale while CVSS v2 uses 0–10"
    ],
    "a": "B",
    "e": "CVSS v3 explicitly separates user interaction and introduces Scope, improving how prerequisite and security-boundary effects are described.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-019",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q020",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "Which Tenable.io feature allows integration with ServiceNow to automatically create tickets for detected vulnerabilities?",
    "o": [
      "Remediation campaigns only",
      "Accepted Risk workflow",
      "Nessus scan policies",
      "Connectors (Tenable.io Integrations)"
    ],
    "a": "D",
    "e": "A suitably configured Tenable/ServiceNow integration supports the ticketing workflow. Verify the specific application and module because asset-CMDB and vulnerability/ITSM connectors serve different purposes.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-020",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q021",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "In Tenable.io, which asset source provides continuous, real-time vulnerability data for endpoints that frequently move between networks?",
    "o": [
      "Passive Vulnerability Scanner (PVS)",
      "Cloud Connector",
      "Nessus Agent",
      "Virtual Scanner"
    ],
    "a": "C",
    "e": "An installed agent follows the endpoint and reports locally collected results when connectivity is available. Its scans are scheduled or triggered, not a guarantee of continuous real-time vulnerability streaming.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-021",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q022",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "What does the Tenable.io 'Lumin' capability provide?",
    "o": [
      "Risk-based vulnerability management including Cyber Exposure score, ACR, AES, and benchmarking against industry peers",
      "Passive network traffic analysis for threat detection",
      "Cloud security posture management for AWS and Azure",
      "Automated penetration testing of discovered vulnerabilities"
    ],
    "a": "A",
    "e": "Lumin provides exposure scoring and benchmarking capabilities, including asset criticality and exposure context under the applicable licensing.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-022",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q023",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "How does Tenable.io handle assets that have not been scanned for an extended period?",
    "o": [
      "Assets are moved to a quarantine repository requiring manual review",
      "Assets are permanently deleted from the platform after 30 days without scanning",
      "Assets are marked as 'inactive' after a configurable period of no scan data and are excluded from active vulnerability counts",
      "Assets are automatically escalated to Critical severity in all dashboards"
    ],
    "a": "C",
    "e": "This is the imported answer, but its inactive-retention claim is not a universal current rule. Managed status, license aging and configured Asset Age Out are distinct; Asset Age Out can permanently delete an asset and its data.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-023",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q024",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "Which Tenable.io dashboard view is best for tracking remediation progress against a defined SLA across an entire program?",
    "o": [
      "The raw CSV export sorted by CVSS score",
      "The plugin family summary report",
      "The Nessus scan results view filtered by date",
      "Vulnerability Management dashboard with remediation tracking widgets and SLA metrics"
    ],
    "a": "D",
    "e": "Program dashboards with appropriate remediation and SLA widgets provide aggregate progress views; confirm each widget's scope and metric configuration.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-024",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q025",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "In Tenable.io, what is the role of 'Network Objects' in scan configuration?",
    "o": [
      "They configure the communication protocol used between the scanner and Tenable.io cloud",
      "They define firewall rules that Tenable.io recommends for hardening",
      "They define named IP address ranges or CIDR blocks that can be reused across multiple scan targets",
      "They identify network devices like switches and routers for topology mapping"
    ],
    "a": "C",
    "e": "The imported key intends reusable named address collections. Confirm the product/version terminology: current VM Networks primarily provide asset identity context and should not be assumed to be reusable CIDR target lists.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-025",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q026",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "A CVSS v3 vulnerability has an Attack Vector of 'Network' and Privileges Required of 'None'. What does this indicate about the exploitability?",
    "o": [
      "The vulnerability can only be exploited by a physical presence at the machine",
      "The vulnerability requires local network access and an authenticated session",
      "The vulnerability requires administrative privileges on an adjacent network device",
      "The vulnerability can be exploited remotely over the network without any prior authentication"
    ],
    "a": "D",
    "e": "AV:Network permits exploitation through the network path and PR:None requires no prior privileges. Other metrics still determine interaction and complexity; network scoring does not guarantee actual internet reachability.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-026",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q027",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "What best describes the function of the Tenable.io API key?",
    "o": [
      "It authenticates programmatic access to Tenable.io for automation, integrations, and third-party tools",
      "It is used as the password for Nessus scanner login during cloud pairing",
      "It replaces the Nessus linking key for on-premises scanner registration",
      "It encrypts scan results stored in the Tenable.io cloud platform"
    ],
    "a": "A",
    "e": "An access/secret key pair authenticates permitted API operations for automation and integrations using the associated user's privileges.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-027",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q028",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which Tenable.io feature allows setting a maximum number of hosts scanned simultaneously to reduce impact on network performance?",
    "o": [
      "Asset tagging with a 'slow-scan' tag",
      "Performance options in the Advanced Scan template (Max Simultaneous Hosts)",
      "VPR threshold setting in the scan policy",
      "Scan zone priority configuration"
    ],
    "a": "B",
    "e": "Performance settings such as Max Simultaneous Hosts control how many targets the scan assesses concurrently.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-028",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q029",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "What type of Tenable.io scan is most appropriate for an environment where network-based scanning would trigger IDS/IPS alerts?",
    "o": [
      "Credentialed Patch Audit scan run from the corporate network",
      "Agent-based scan using Nessus Agents installed on the endpoints",
      "Basic Network Scan with all plugins enabled",
      "Discovery scan with SYN scanning enabled"
    ],
    "a": "B",
    "e": "An agent performs the checks locally and avoids the remote probe pattern. It still communicates for updates and results, so this is not a guarantee of zero network traffic or zero alerts.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-029",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q030",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "In Tenable.io, what does the 'Severity' filter Critical refer to in terms of CVSS score?",
    "o": [
      "Any vulnerability with an active exploit in Metasploit",
      "CVSS v3 score of 9.0 to 10.0",
      "CVSS v3 score of 7.0 to 8.9",
      "CVSS v3 score of 4.0 to 6.9"
    ],
    "a": "B",
    "e": "Under CVSS v3 severity mapping, Critical covers scores from 9.0 through 10.0. Verify that the tenant or view actually uses CVSS rather than a different configured metric.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-030",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q031",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which scan configuration change would most effectively reduce false positives for missing patch detection in Tenable.io?",
    "o": [
      "Ensuring authentication credentials are valid and the scan uses the Credentialed Patch Audit template",
      "Increasing the scan frequency to daily",
      "Adding more target IP addresses to the scan scope",
      "Disabling the Windows plugin family"
    ],
    "a": "A",
    "e": "Valid credentials, sufficient privileges and successful local patch inventory improve missing-update detection accuracy; confirm collection evidence as well as authentication.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-031",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q032",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "What is the maximum number of scanners supported in a single Tenable.io account?",
    "o": [
      "100 scanners across all accounts globally",
      "Determined by licensing tier; no fixed universal maximum",
      "10 scanners per account",
      "1 scanner per subscription"
    ],
    "a": "B",
    "e": "The imported key intends that deployment scale be checked against entitlements and applicable service limits. Do not treat this wording as proof that every account has unlimited scanners or no technical limits.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-032",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q033",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "When Tenable.io shows a vulnerability as 'Fixed', what does this status indicate?",
    "o": [
      "The vulnerability's CVE has been retracted by the NVD",
      "The vulnerability was detected in a previous scan but was NOT found in the most recent scan of the same asset",
      "The vulnerability was manually marked as remediated by a security analyst",
      "The vulnerability's plugin was disabled in the scan policy"
    ],
    "a": "B",
    "e": "Fixed indicates that a previously detected issue is no longer found by a qualifying subsequent assessment of the asset.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-033",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q034",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "Which Tenable.io feature enables role-based access control to restrict which users can view or manage specific assets?",
    "o": [
      "User permissions with tag-based access control",
      "Scan zone assignments per user",
      "VPR thresholds in user profiles",
      "ACR assignments on individual assets"
    ],
    "a": "A",
    "e": "Permissions scoped using asset tags constrain which resources a user can view or act on, alongside the user's functional role.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-034",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q035",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "Which Tenable.io integration allows discovered cloud assets (EC2, Azure VMs) to be automatically imported into the asset inventory?",
    "o": [
      "Manual CSV import from the cloud provider billing console",
      "Cloud Connectors for AWS, Azure, and GCP",
      "Passive Vulnerability Scanner network tap in the cloud VPC",
      "Nessus Agent deployment on cloud instances only"
    ],
    "a": "B",
    "e": "Supported cloud connectors use provider APIs to discover and import cloud asset inventory information.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-035",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q036",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "In Tenable vulnerability management terminology, what does 'mean time to remediate' (MTTR) measure?",
    "o": [
      "The average time it takes Nessus to complete a scan of a single host",
      "The average CVSS score of all vulnerabilities remediated in a reporting period",
      "The average number of days between when a vulnerability is discovered and when it is confirmed fixed",
      "The time between plugin updates and detection of new vulnerabilities"
    ],
    "a": "C",
    "e": "MTTR measures average elapsed time from detection to confirmed remediation under the program's defined timing and verification rules.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-036",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q037",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A Nessus scan reports plugin output for plugin 10397. What general category does this plugin typically represent?",
    "o": [
      "MySQL database vulnerability",
      "DNS zone transfer attempt",
      "SSL/TLS certificate expiration",
      "Windows file share enumeration (SMB)"
    ],
    "a": "D",
    "e": "The imported key selects the Windows/SMB option, but its share-enumeration description is inaccurate. The official plugin is Microsoft Windows SMB LanMan Pipe Server Listing Disclosure and retrieves a browse list of nearby Windows systems.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-037",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q038",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "What is the purpose of the Tenable.io 'Exclusions' feature in scan configuration?",
    "o": [
      "To prevent specific IP addresses or ranges from being included in a scan even if they fall within the target range",
      "To automatically accept risk for vulnerabilities in excluded ranges",
      "To remove old scan data from the Tenable.io asset database",
      "To block specific plugin families from running on all scanners"
    ],
    "a": "A",
    "e": "An active scan exclusion skips matching IP targets even when they are included in the broader network scan scope.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-038",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q039",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which of the following is a valid use case for Tenable.io's 'Advanced Scan' template over the 'Basic Network Scan' template?",
    "o": [
      "Performing passive traffic analysis instead of active probing",
      "Scanning web applications with application-layer fuzzing",
      "Running faster scans with fewer plugins enabled",
      "Customizing performance settings, enabling specific compliance audits, or adding custom credentials not available in the Basic template"
    ],
    "a": "D",
    "e": "Advanced Scan exposes granular assessment settings for cases where the simpler template lacks the required configuration; verify which options each current template offers.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-039",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q040",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "In Tenable.io, what is the role of a 'Linked Scanner' compared to a 'Cloud Scanner'?",
    "o": [
      "A Linked Scanner connects to external threat intelligence; a Cloud Scanner handles internal network scanning",
      "A Linked Scanner is a customer-managed on-premises Nessus instance; a Cloud Scanner is managed by Tenable in their cloud infrastructure",
      "A Linked Scanner is used only for agent-based scans; a Cloud Scanner handles network scans",
      "A Linked Scanner requires a dedicated physical appliance; a Cloud Scanner runs as a virtual machine"
    ],
    "a": "B",
    "e": "A linked scanner is customer-managed Nessus infrastructure associated with VM; a cloud scanner is Tenable-managed scanning infrastructure.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-040",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q041",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "What does the CVSS v3 'Scope' metric (S) describe?",
    "o": [
      "The geographic scope of systems affected by the vulnerability",
      "The number of systems currently vulnerable in the environment",
      "Whether the vulnerability is applicable to cloud or on-premises systems",
      "Whether a vulnerability's impact extends beyond the vulnerable component to affect other components"
    ],
    "a": "D",
    "e": "Scope describes whether exploitation affects resources beyond the vulnerable component's security authority, distinguishing unchanged and changed scope.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-041",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q042",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "A security team wants to ensure vulnerability data stays current for a group of assets that move between office and remote networks. What is the optimal Tenable.io configuration?",
    "o": [
      "Configure VPN-only scanning policies that run when endpoints connect to corporate VPN",
      "Deploy Nessus Agents on all mobile assets and configure agent scan intervals",
      "Use a cloud scanner to scan the home ISP ranges of all remote workers",
      "Schedule daily network scans of all office IP ranges at maximum scan speed"
    ],
    "a": "B",
    "e": "Agents assess on the mobile endpoint and synchronize results when communication is available, reducing dependence on central scanner reachability.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-042",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q043",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "Which Tenable.io report format is most appropriate for delivering a vulnerability summary to C-level executives?",
    "o": [
      "Executive Summary PDF report with high-level risk metrics and trend charts",
      "Raw CSV export with all vulnerability fields",
      "Full detailed vulnerability report with plugin output per host",
      "Nessus scan results export in .nessus XML format"
    ],
    "a": "A",
    "e": "An executive summary emphasizes program risk, trends and remediation progress in a format appropriate for a high-level audience.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-043",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q044",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "What is the main benefit of using Tenable.io's built-in ticketing integrations (e.g., ServiceNow, JIRA) for remediation?",
    "o": [
      "It replaces the need for a vulnerability management program by handling remediation automatically",
      "Vulnerabilities are automatically converted to tickets routed to the appropriate remediation team without manual data transfer",
      "The integration allows ServiceNow to perform vulnerability scans on behalf of Tenable.io",
      "It encrypts vulnerability data before sending it to ServiceNow for compliance purposes"
    ],
    "a": "B",
    "e": "Configured integrations transfer qualifying finding context into tickets and route work through the appropriate remediation process without manual export/import.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-044",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q045",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which action should a Tenable.io administrator take after rotating Windows service account credentials used for credentialed scans?",
    "o": [
      "Recreate all scan policies from scratch with the new credentials",
      "Update the stored credentials in the Tenable.io credential manager and verify plugin 19506 confirms successful authentication on the next scan",
      "Disable Windows plugin families until the credential issue is resolved",
      "Increase the VPR threshold to compensate for temporarily uncredentialed scan results"
    ],
    "a": "B",
    "e": "Update the credential source actually used by the scans and verify successful authenticated collection afterward, including patch inventory rather than relying on plugin 19506 alone.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-045",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q046",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "In Tenable.io Predictive Prioritization, which of the following signals most increases a vulnerability's VPR score relative to its base CVSS?",
    "o": [
      "The vulnerability affecting a server with ACR of 10",
      "Availability of functional exploit code in a public exploit framework like Metasploit",
      "The vulnerability receiving a CVE published by the NVD",
      "The vulnerability having been discovered more than 12 months ago"
    ],
    "a": "B",
    "e": "Functional exploit code provides concrete exploitability evidence relevant to VPR prioritization; no single signal guarantees a fixed score increase.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-046",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q047",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A compliance audit in Tenable.io produces a 'FAILED' result for a CIS benchmark check. What does this indicate?",
    "o": [
      "The system's configuration does not meet the specific CIS hardening requirement being tested",
      "The target asset does not have a CIS benchmark applicable to its operating system",
      "The Nessus scanner lost connectivity to the target during the compliance check",
      "The compliance plugin requires root/administrator credentials that were not supplied"
    ],
    "a": "A",
    "e": "With valid collected evidence, Failed indicates that the tested configuration did not satisfy the selected CIS requirement.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-047",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q048",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "What is the purpose of Tenable.io's 'Groups' feature?",
    "o": [
      "To create custom CVSS scoring groups for different business units",
      "To group similar vulnerabilities for bulk remediation",
      "To define IP address ranges for scanner assignment",
      "To organize users and control which scan results and assets they can access"
    ],
    "a": "D",
    "e": "Groups organize users so appropriate permissions can be assigned consistently to the scans, assets and results they need.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-048",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q049",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "Which Tenable.io feature provides a single prioritized list of vulnerabilities ranked by combined risk across all scanned assets?",
    "o": [
      "Vulnerability Workbench filtered and sorted by VPR",
      "Plugin family summary report",
      "Asset detail page sorted by last scan date",
      "Individual scan results view per scanner"
    ],
    "a": "A",
    "e": "A cross-asset findings/workbench view sorted by VPR supports organization-wide vulnerability triage; local business context still needs separate consideration.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-049",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q050",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "In Tenable.io, which user role has the ability to create and manage scan policies but cannot modify user accounts?",
    "o": [
      "Scan Manager",
      "Administrator",
      "Standard User",
      "Read-Only User"
    ],
    "a": "C",
    "e": "The imported key selects Standard for managing its own scans and templates without user administration. Scan Manager can also satisfy the wording, so distinguish own-resource management from broader scan oversight.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-050",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q051",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "What does the 'Recast Risk' feature allow a Tenable.io analyst to do that 'Accepted Risk' does not?",
    "o": [
      "Change the severity classification of a vulnerability finding permanently or for a defined period",
      "Remove the vulnerability from all scan results retroactively",
      "Generate a public disclosure notification to the vendor",
      "Assign the vulnerability to a different asset automatically"
    ],
    "a": "A",
    "e": "Recast changes the severity classification of matching findings, whereas risk acceptance records a decision to tolerate the exposure.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-051",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q052",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which scan configuration ensures that Nessus does not scan ports below 1024 on sensitive production servers?",
    "o": [
      "Custom port range specification in the scan policy, excluding ports 1–1023",
      "Applying the Discovery Scan template instead of Basic Network Scan",
      "Enabling safe checks in the scan policy",
      "Setting the ACR of production servers to 10"
    ],
    "a": "A",
    "e": "A custom port range excluding 1-1023 limits the port-scanning phase to the intended higher-numbered ports. It is not a universal guarantee against every plugin connection; review check-specific access too.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-052",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q053",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "What is the function of 'Safe Checks' in a Nessus scan policy?",
    "o": [
      "It restricts scans to port 443 for encrypted traffic analysis only",
      "It disables potentially disruptive plugins that could crash services or cause system instability",
      "It limits the scan to assets with an ACR below 5",
      "It automatically applies compensating controls to failing compliance checks"
    ],
    "a": "B",
    "e": "Safe Checks avoids checks known to risk adversely affecting the host; overall load and target sensitivity still require assessment.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-053",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q054",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A Tenable.io dashboard widget shows '847 Critical vulnerabilities' across all assets. An executive asks for context. Which additional metric best communicates remediation progress?",
    "o": [
      "Mean Time to Remediate (MTTR) trend over the last 90 days",
      "The number of Nessus scanners currently online",
      "Total number of assets scanned this week",
      "The CVSS score distribution across all vulnerabilities"
    ],
    "a": "A",
    "e": "An MTTR trend adds evidence about remediation speed over time, complementing the current outstanding critical count.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-054",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q055",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "When configuring a Tenable.io scan, what is the purpose of the 'Max Simultaneous Checks per Host' setting?",
    "o": [
      "It defines how many remediation campaigns can reference the same host",
      "It controls how many users can view a specific host's vulnerability data simultaneously",
      "It limits the number of plugin checks running concurrently against a single target host to reduce system load on that host",
      "It sets the maximum number of CVEs a single host can report in one scan"
    ],
    "a": "C",
    "e": "This setting limits concurrent plugin checks against each host, supporting control of scan-induced resource pressure.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-055",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q056",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "Which Tenable.io feature allows creating a persistent saved view of the Vulnerability Workbench with specific filters applied?",
    "o": [
      "Plugin family suppression rules",
      "ACR threshold override in user profile settings",
      "Scheduled scan reports with workbench filter options",
      "Saved search or custom dashboard widget configured with workbench filters"
    ],
    "a": "D",
    "e": "A saved search/view or appropriately configured dashboard widget preserves the intended filtering configuration for repeat use.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-056",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q057",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "Which Tenable.io integration enables automatic asset synchronization from an enterprise CMDB (Configuration Management Database)?",
    "o": [
      "ServiceNow CMDB connector via the Tenable.io integration framework",
      "Nessus Agent deployment to all CMDB-tracked assets",
      "Manual IP range entry in Tenable.io network settings",
      "Cloud connector configured for on-premises LDAP"
    ],
    "a": "A",
    "e": "The appropriately configured ServiceNow CMDB integration synchronizes asset/CI information; verify which application and supported direction are being used.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-057",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q058",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "What is the recommended approach when a Tenable.io scan discovers a vulnerability on a PCI-in-scope server with a CVSS score of 9.8 but the asset team reports the vulnerable service is not running?",
    "o": [
      "Delete the asset from Tenable.io to clear the finding",
      "Accept the risk automatically using the Accepted Risk workflow",
      "Increase the server's ACR to reflect the higher risk finding",
      "Submit a false positive dispute or use Recast Risk with evidence documentation that the service is not running"
    ],
    "a": "D",
    "e": "Investigate and document the detection and use the applicable dispute or approved treatment process. A stopped service is not, by itself, proof of a false positive, and recasting does not automatically satisfy PCI requirements.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-058",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q059",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "Which Tenable.io feature enables vulnerability prioritization based on whether the organization has already deployed compensating controls such as a WAF or IPS signature?",
    "o": [
      "Compliance benchmark override for WAF-protected assets",
      "Recast Risk with contextual notes documenting the compensating control",
      "ACR reduction for assets protected by WAF",
      "VPR automatic adjustment when WAF integration is active"
    ],
    "a": "B",
    "e": "A documented, approved recast can adjust finding severity to reflect a verified compensating control while retaining the underlying evidence.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-059",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q060",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "When does Tenable.io update a vulnerability's VPR score after initial publication?",
    "o": [
      "VPR is fixed at the time the CVE is published and never changes",
      "VPR updates quarterly on Tenable's plugin feed release schedule",
      "VPR is recalculated daily as threat intelligence signals change, such as new exploit code being published",
      "VPR is updated only when the NVD publishes a revised CVSS score"
    ],
    "a": "C",
    "e": "Daily VPR recalculation incorporates changing threat information rather than relying solely on the original technical score.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-060",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q061",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A team runs a Host Discovery scan before building its quarterly vulnerability scan scope. How do assets found only by this discovery scan affect Tenable Vulnerability Management licensing?",
    "o": [
      "They immediately count as licensed assets as soon as any IP address is discovered",
      "They count only if the asset is later added to a dashboard widget",
      "They do not count toward the license until they are assessed by non-discovery vulnerability plugins",
      "They count only if the discovery scan finds at least one open TCP port"
    ],
    "a": "C",
    "e": "Discovery-only assets are excluded from assessment license counting; later vulnerability assessment or other applicable licensed activity must be considered separately.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-061",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q062",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A scan owner sets Scan Results to 'Keep private' for a sensitive troubleshooting scan. What is the most important operational effect of that setting?",
    "o": [
      "The scan results are automatically deleted after the scanner uploads them",
      "The scanner runs only discovery plugins and disables all vulnerability plugins",
      "The scan results are hidden from dashboards, reports, and workbenches and do not update vulnerability states",
      "The scan still updates dashboard findings, but only administrators can see them"
    ],
    "a": "C",
    "e": "Private results remain directly accessible from the scan but do not update dashboard/workbench findings or their vulnerability lifecycle states.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-062",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q063",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "Which Tenable Vulnerability Management scan template is intended for an internal PCI DSS vulnerability scan?",
    "o": [
      "Credential Validation",
      "Host Discovery",
      "Legacy Web App Scan",
      "Internal PCI Network Scan"
    ],
    "a": "D",
    "e": "Internal PCI Network Scan is the template specifically intended for an internal PCI DSS network vulnerability assessment.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-063",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q064",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A firewall team asks what inbound rule is required so Tenable Agents can communicate with Tenable Vulnerability Management. What should you tell them?",
    "o": [
      "Open inbound UDP 161 so Tenable can poll the agent with SNMP",
      "Open inbound TCP 8834 from Tenable cloud scanners to every endpoint",
      "Open inbound SMB and SSH so the agent can receive credentialed checks",
      "No inbound rule is required because agents initiate outbound TCP 443 communication to Tenable"
    ],
    "a": "D",
    "e": "Agents initiate the standard cloud communication outbound on TCP 443, so this purpose does not require inbound access from Tenable to each endpoint.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-064",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q065",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A remote employee's laptop is offline during the scheduled agent scan window. Which agent behavior helps prevent the endpoint from being missed indefinitely?",
    "o": [
      "The agent can be configured to run the scan when it comes back online",
      "The agent waits for an administrator to manually import a scan file",
      "The cloud scanner automatically switches to an uncredentialed scan of the laptop's public IP",
      "The next dashboard refresh marks all findings on the laptop as Fixed"
    ],
    "a": "A",
    "e": "Supported asynchronous or catch-up behavior can assess an endpoint after it becomes available; check the actual scan method and configured reporting rules.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-065",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q066",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "When configuring an agent scan in Tenable Vulnerability Management, what target type must you select?",
    "o": [
      "An agent group",
      "A scanner group",
      "An individual linked agent",
      "A raw CIDR range only"
    ],
    "a": "A",
    "e": "Agent scan target membership is specified through an agent group, which selects the participating endpoints.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-066",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q067",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "A missing Windows patch was found by a credentialed local check. After the server team installs the patch, an uncredentialed network scan does not report the finding. Why might Tenable Vulnerability Management still not move it to Fixed?",
    "o": [
      "Local check findings must be verified by another successfully authenticated scan",
      "Only Host Discovery scans can verify Windows patch remediation",
      "The finding must be recast before it can become Fixed",
      "Windows patch findings never move to Fixed automatically"
    ],
    "a": "A",
    "e": "A successful authenticated follow-up must collect the local evidence needed to verify mitigation of the credentialed patch finding.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-067",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q068",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "A vulnerability was originally reported by a combined plugin on port 445. What type of follow-up scan is required to mitigate it according to Tenable's mitigation requirements?",
    "o": [
      "Any scan that confirms the remote port is closed",
      "A successfully authenticated scan",
      "A dashboard refresh after the next plugin feed update",
      "A Host Discovery scan with common ports enabled"
    ],
    "a": "B",
    "e": "Combined plugins reported on port 0 or 445 are treated as local for the stated mitigation requirement and need successful authenticated follow-up.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-068",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q069",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "What does the Resurfaced state mean for a vulnerability finding?",
    "o": [
      "Tenable previously marked the vulnerability Fixed but detected it again",
      "An analyst accepted the risk and hid the finding",
      "Tenable detected the vulnerability for the first time",
      "Tenable detected the vulnerability more than once without it ever being fixed"
    ],
    "a": "A",
    "e": "Resurfaced records a renewed detection after the same vulnerability had previously been marked Fixed.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-069",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q070",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A developer comparing Tenable Vulnerability Management UI results to API output sees UI states New, Active, Resurfaced, and Fixed. Which API state mapping is correct?",
    "o": [
      "All UI states are returned as their exact UI names in the API",
      "New is created, Active is running, Resurfaced is failed, and Fixed is closed",
      "New and Active are open, Resurfaced is reopened, and Fixed is fixed",
      "New and Resurfaced are open, Active is confirmed, and Fixed is deleted"
    ],
    "a": "C",
    "e": "The documented mapping is New and Active to open, Resurfaced to reopened, and Fixed to fixed.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-070",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q071",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "In Tenable Vulnerability Management, what identifies a single vulnerability finding instance on an asset?",
    "o": [
      "The dashboard widget where the finding appears",
      "The plugin ID, port, and protocol combination",
      "The scan schedule and scanner group name",
      "The asset's operating system and business owner"
    ],
    "a": "B",
    "e": "The plugin ID, port and protocol combination distinguishes a vulnerability instance within the asset's context.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-071",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q072",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "How long does Tenable Vulnerability Management retain findings data after scans or imported results update it?",
    "o": [
      "90 days",
      "15 months",
      "Indefinitely, unless the scan is deleted",
      "30 days"
    ],
    "a": "B",
    "e": "The documented findings data retention window is 15 months; this differs from shorter report views and asset handling policies.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-072",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q073",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "An analyst builds a complex Explore query with 25 filter conditions and receives an Invalid filter error. What is the likely cause?",
    "o": [
      "Only administrators can use AND and OR operators",
      "Saved Views cannot include any Query Builder filters",
      "Explore Query Builder supports a maximum of 20 filter conditions",
      "Tenable Queries disable all custom filtering when selected"
    ],
    "a": "C",
    "e": "Twenty-five conditions exceed the documented maximum of twenty, explaining the Invalid filter error.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-073",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q074",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A lead analyst wants a reusable Explore view that preserves both the query and the table layout, including visible columns and grouping. Which feature best fits?",
    "o": [
      "Scanner group",
      "Scan folder",
      "Saved View",
      "Recast rule"
    ],
    "a": "C",
    "e": "A Saved View preserves the query and supported table customizations, including columns, sorting and grouping.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-074",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q075",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "Which Tenable Query should an analyst use to focus on vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog?",
    "o": [
      "Credentialed Scan Failures",
      "Network Devices",
      "External Assets",
      "CISA Known Exploitable Vulnerabilities"
    ],
    "a": "D",
    "e": "The CISA KEV-oriented Tenable Query identifies findings associated with CVEs in the Known Exploited Vulnerabilities catalog.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-075",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q076",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Vulnerability Prioritization",
    "q": "A security manager asks what the Emerging Threats Tenable Query is meant to identify. Which answer is most accurate?",
    "o": [
      "All vulnerabilities with a CVSS v3 score above 4.0",
      "Compliance audit checks that changed from Failed to Passed",
      "Vulnerabilities Tenable Research is monitoring due to public discussion, proof-of-concept activity, or observed large-scale abuse",
      "Assets that have never been scanned by an authenticated scan"
    ],
    "a": "C",
    "e": "Emerging Threats focuses on vulnerabilities attracting research attention through discussion, proof-of-concept potential or observed abuse.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-076",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q077",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "A recast rule was created from Explore, but a matching finding still shows its original severity immediately afterward. What is the best explanation?",
    "o": [
      "Only the scan owner can see a recast rule until the next plugin feed update",
      "Recast rules never apply to findings created before the rule existed",
      "The finding must first be exported and reimported for the rule to apply",
      "Recast operates on an eventually consistent model, and Explore may cache the view for up to 60 minutes"
    ],
    "a": "D",
    "e": "Recast processing is eventually consistent and Explore can retain a cached view, so immediate unchanged severity is not proof of a failed rule.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-077",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q078",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "During a compliance review, a host audit check is known to be satisfied through an approved exception, but the original audit result shows Failed. Which rule type changes the host audit result, for example from Failed to Passed?",
    "o": [
      "Recast",
      "Accept",
      "Target Group",
      "Change Result"
    ],
    "a": "D",
    "e": "Change Result can override matching host-audit outcomes; record the approved exception because the override does not itself fix target configuration.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-078",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q079",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A compliance officer relies on Tenable Vulnerability Management reports for monthly status meetings. What data window should they expect standard reports to show?",
    "o": [
      "All retained findings since the account was created",
      "The last 30 days",
      "Only the current calendar quarter",
      "The last 15 months"
    ],
    "a": "B",
    "e": "The documented standard report data window is the last 30 days, which is distinct from the findings-retention window.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-079",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q080",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "Which permission is most appropriate for an auditor who needs to view scan results and generate reports but must not change scan configurations?",
    "o": [
      "Can Use",
      "Can Edit",
      "Can Scan",
      "Can View"
    ],
    "a": "D",
    "e": "Can View provides visibility to permitted results without granting scan configuration changes; the user's role must also allow the requested reporting actions.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-080",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q081",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "A Scan Operator launches a scan owned by another user. Some targets are skipped even though the launcher has access to them. What is the most likely permission issue?",
    "o": [
      "The scan can only target assets that the launcher personally tagged",
      "Tenable evaluates scan target permissions based on the scan owner's permissions, not the launcher",
      "The launcher must have Can Edit on every report template before a scan can run",
      "Scan Operators can never launch scans owned by another user"
    ],
    "a": "B",
    "e": "Target permission evaluation uses the scan owner's scope, so targets outside that owner's permissions can be skipped despite the launcher's access.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-081",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q082",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "Which statement best describes the difference between roles and permissions in Tenable Vulnerability Management?",
    "o": [
      "Roles are used for reports only; permissions are used for scans only",
      "Roles apply only to scanners; permissions apply only to agents",
      "Roles control the major actions a user can perform; permissions control the data those actions can apply to",
      "Roles are temporary access grants; permissions are permanent administrator accounts"
    ],
    "a": "C",
    "e": "Roles govern the major actions a user can perform, while permissions constrain the resources on which the user may act.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-082",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q083",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "Which permission allows a user to apply an existing scan policy or report template without editing that reusable object?",
    "o": [
      "Can Use",
      "Can Edit",
      "Can Scan",
      "Can View"
    ],
    "a": "A",
    "e": "Can Use permits applying a reusable policy or template without granting the right to modify its centrally managed configuration.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-083",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q084",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A scan uses a tag with an IPv4 range rule. What is the difference between 'Existing tagged assets only' and 'Targets defined by tags'?",
    "o": [
      "Existing tagged assets only scans fixed findings; Targets defined by tags scans active findings",
      "Existing tagged assets only requires agents; Targets defined by tags requires cloud scanners",
      "Existing tagged assets only scans public IPs; Targets defined by tags scans private IPs",
      "Existing tagged assets only scans assets already tagged; Targets defined by tags scans assets whose IP or DNS matches the tag rules"
    ],
    "a": "D",
    "e": "Existing tagged assets only uses current tagged inventory, whereas Targets defined by tags derives addresses or names from supported matching rules.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-084",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q085",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A tag-based scanner configuration uses 'Targets defined by tags' with multiple IPv4 and DNS tag rules. The administrator selects Match All and the scan resolves no targets. What should they understand?",
    "o": [
      "Tag-based scans cannot use IPv4 tag rules",
      "Match All can have only one tag rule in this context; use Match Any for multiple supported rules",
      "The scan must be converted to an agent scan before tag rules work",
      "Targets defined by tags only works for assets that already completed a credentialed scan"
    ],
    "a": "B",
    "e": "In this target-resolution context, Match All supports one rule; multiple supported address/name rules require the documented Match Any arrangement.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-085",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q086",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "An administrator uploads a target file to a scan and the import fails. Which file requirement should they check first?",
    "o": [
      "The file must be a JSON array with CIDR targets only",
      "The file must be UTF-16 with one target per comma-separated row",
      "The file must include the scanner UUID before every target",
      "The file must be ASCII, one target per line, with no trailing spaces or extra lines after the last target"
    ],
    "a": "D",
    "e": "Use the documented ASCII representation with one target per line and without trailing spaces or extra final lines. Pure ASCII bytes are also valid UTF-8, so distinguish actual byte content from an encoding label.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-086",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q087",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A triggered agent scan is configured for a group of laptops. Which statement about Scan Results is true?",
    "o": [
      "Triggered scans report only Info severity findings",
      "Show in dashboard is always enabled for triggered scans",
      "Triggered scans never update vulnerability states",
      "Triggered scans can only be kept private"
    ],
    "a": "B",
    "e": "Show in dashboard is always enabled for triggered scans in the documented Basic settings, so they are not private troubleshooting scans through that choice.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-087",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q088",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "An analyst manually overrides a host asset's ACR to reflect business criticality. How long can it take for the new ACR to appear in the Tenable Vulnerability Management UI?",
    "o": [
      "Only after the asset is deleted and rediscovered",
      "Exactly 15 minutes",
      "Up to 24 hours",
      "Only after the next quarterly plugin feed update"
    ],
    "a": "C",
    "e": "A saved manual ACR override can take up to 24 hours to appear in the UI, reflecting eventual processing of the changed asset context.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-088",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q089",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "A company has two branch offices that both use 192.168.1.0/24. An administrator moves duplicate-looking assets into separate networks after scans have already run, but leaves the scanner in the old network. What is the key risk?",
    "o": [
      "Tenable automatically merges all assets with the same private IP across networks",
      "Tenable may create duplicate asset records that count against licensing, and the scanner may recreate the same asset if it is not moved too",
      "The assets are converted to Web Application assets and stop appearing under Hosts",
      "The next scan permanently deletes the moved assets from all dashboards"
    ],
    "a": "B",
    "e": "Moving assets after scans and leaving the sensor in the old Network can create duplicate or recreated records, so coordinate asset and scanner movement.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-089",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q090",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Asset Management",
    "q": "What happens when a host asset is deleted from Tenable Vulnerability Management?",
    "o": [
      "Only the asset name is hidden; findings remain active forever",
      "The next scan automatically restores the original asset ID and all deleted findings",
      "The asset is placed in a temporary quarantine folder for 15 months",
      "The asset is removed from the assets view, associated findings are deleted, and Tenable stops matching scan results to it"
    ],
    "a": "D",
    "e": "Deleting the host removes its asset record and associated finding data and stops matching results to that deleted identity; licensing reclamation follows its own documented timing.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-090",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q091",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "An executive dashboard appears unchanged immediately after a large scan finishes. What is the best explanation before assuming the scan failed?",
    "o": [
      "Dashboard data updates after scans, but there may be a delay while Tenable indexes the data",
      "Dashboards update only once per calendar quarter",
      "Dashboard widgets show only Fixed vulnerabilities",
      "Dashboards never use scan data from linked scanners"
    ],
    "a": "A",
    "e": "Assessment results can require indexing before dashboard values refresh, so a short delay alone does not establish scan failure.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-091",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q092",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A manager asks why they cannot open another user's report result even though they can see report templates. What is the correct explanation?",
    "o": [
      "Report results are user-specific; users can only view their own Tenable Vulnerability Management report results",
      "Report templates and report results are the same object",
      "Report results become visible only after 15 months",
      "Reports cannot be viewed by managers under any role"
    ],
    "a": "A",
    "e": "Report definitions/templates and generated report results are distinct; the documented result ownership restriction can explain visibility limited to the user's own outputs.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-092",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q093",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "In the Tenable for ServiceNow integration, which Tenable Job Type should be selected under the ITSM module to bring vulnerability data into ServiceNow?",
    "o": [
      "Pull Vulnerabilities",
      "Recast Findings",
      "Push Assets",
      "Pull Assets"
    ],
    "a": "A",
    "e": "Pull Vulnerabilities is the ITSM job type for retrieving VM vulnerability data into the ServiceNow integration.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-093",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q094",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Remediation Workflows",
    "q": "When configuring the Tenable Plugin for Jira, what is Tenable's recommendation for the API key used by the integration?",
    "o": [
      "Reuse the same API key for all third-party integrations to simplify rotation",
      "Generate a unique Tenable Vulnerability Management API key for each installed Jira integration instance",
      "Do not record the API token because Jira can retrieve it automatically after reset",
      "Use only a read-only API key because Jira never collects vulnerability data"
    ],
    "a": "B",
    "e": "A distinct key per installed integration instance isolates that integration's API credential lifecycle and matches the cited Jira plugin guidance.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-094",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q095",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A team wants faster, lower-footprint agent results for software inventory so Tenable can analyze missing patches as coverage is released. Which agent template is designed for that purpose?",
    "o": [
      "Collect Inventory",
      "Host Discovery",
      "Credential Validation",
      "Legacy Web App Scan"
    ],
    "a": "A",
    "e": "Collect Inventory gathers host/software inventory with a lower footprint for supported downstream missing-patch analysis.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-095",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q096",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "A Windows endpoint team uses Collect Inventory scans and expects coverage for Google Chrome and Microsoft Exchange Patch Tuesday updates. What is the issue with that expectation?",
    "o": [
      "Collect Inventory can run only on Linux agents and cannot report Windows information",
      "Collect Inventory does not currently cover third-party Windows applications or Microsoft product Patch Tuesday updates such as Exchange or SharePoint",
      "Collect Inventory supports only malware checks and disables all software inventory",
      "Collect Inventory requires every plugin family to be manually selected before the scan can launch"
    ],
    "a": "B",
    "e": "The cited template guidance documents these third-party Windows application and Microsoft product update gaps. Verify current coverage before replacing broader local assessment with inventory-only scans.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-096",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q097",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which statement about the Advanced Agent Scan template is correct?",
    "o": [
      "It is an agent scan without recommendations that can use Scan Window or Triggered Scan methods",
      "It automatically selects every plugin and prevents plugin customization",
      "It is used only for external PCI ASV scans",
      "It is the only template that performs Host Discovery for network scanners"
    ],
    "a": "A",
    "e": "Advanced Agent Scan is a customizable agent template supporting the documented Window and Triggered methods, with plugin selection requiring careful configuration.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-097",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q098",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Nessus Scanning",
    "q": "Which scan template is a simple way to discover live hosts with minimal network traffic?",
    "o": [
      "Ping-Only Discovery",
      "SCAP and OVAL Auditing",
      "Audit Cloud Infrastructure",
      "Policy Compliance Auditing"
    ],
    "a": "A",
    "e": "Ping-Only Discovery is the lightweight reachability-oriented template described; nonresponse still does not conclusively prove host absence.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-098",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q099",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A Windows security baseline team wants to audit password complexity and registry-based settings against a known baseline. Which Tenable scan template category best matches this need?",
    "o": [
      "Inventory collection using Collect Inventory",
      "Tactical scan using Malware Scan",
      "Configuration scan using Policy Compliance Auditing",
      "Vulnerability scan using Host Discovery"
    ],
    "a": "C",
    "e": "Policy Compliance Auditing assesses configured benchmark requirements such as Windows password complexity and registry settings.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-099",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  },
  {
    "id": "BC-Q100",
    "course": "tenable",
    "type": "single",
    "topic": "Banco complementar: Reporting Compliance",
    "q": "A PCI team wants to rely only on the PCI Internal Nessus Agent template for all internal PCI vulnerability coverage. What should you advise?",
    "o": [
      "Agent-based internal PCI scanning replaces all network scanning requirements",
      "Internal uncredentialed network scans are still required to cover vulnerabilities related to network services by port scans",
      "Tenable assessors review internal PCI agent findings for compensating controls before they appear",
      "The PCI Internal Nessus Agent template is only for external ASV attestation"
    ],
    "a": "B",
    "e": "Internal network scanning remains necessary for the network-service perspective and systems without agents; agent checks complement that coverage rather than replace it.",
    "origin": "Banco complementar",
    "sourceId": "tenable-certified-vm-q-100",
    "references": [
      {
        "title": "Banco complementar: Tenable VM practice questions",
        "url": ""
      }
    ]
  }
];
  SIMULADOS.push({id:'tenable-complementar100',title:'Tenable · Banco complementar — 100 questions (English)',course:'tenable',minutes:200,complementary:true,questions});
})();
