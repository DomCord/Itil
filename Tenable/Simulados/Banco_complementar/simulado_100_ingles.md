# Banco complementar: Tenable VM — 100 questions

Original English wording, options and publisher answers. Captured from independent study source on 14 October 2026. Personal, non-commercial educational use under independent study source. This is an independent practice bank, not actual exam content or an official Tenable answer key.

The site randomizes display order. This booklet uses source IDs 001–100 so question numbers and the separate answer key remain stable. Answer one option per question. Suggested practice time: 200 minutes, an editorial allowance of two minutes per item.

## 1. Which Tenable.io metric combines CVSS severity with threat intelligence and asset context to produce a risk-based prioritization score?

A. ACR (Asset Criticality Rating)

B. CVSS v3 Base Score

C. AES (Asset Exposure Score)

D. VPR (Vulnerability Priority Rating)

Source ID: tenable-certified-vm-q-001. Category: Vulnerability Prioritization • Topics: Vpr, Predictive Prioritization, Cvss

## 2. What is the range of the VPR (Vulnerability Priority Rating) score in Tenable?

A. 1 to 5

B. 0.1 to 10.0

C. 0 to 100

D. 0 to 1000

Source ID: tenable-certified-vm-q-002. Category: Vulnerability Prioritization • Topics: Vpr, Scoring

## 3. Nessus plugin 19506 appears in every Tenable scan. What information does it provide?

A. Operating system fingerprint of the scanned host

B. CVSS scores for all vulnerabilities found in the scan

C. List of all open ports found on the target host

D. Scan metadata including scanner IP, scan duration, and whether credentials were accepted

Source ID: tenable-certified-vm-q-003. Category: Nessus Scanning • Topics: Plugin 19506, Credentialed Scanning, Scan Metadata

## 4. What is the primary advantage of a credentialed Nessus scan over an uncredentialed scan?

A. It enables local check plugins to detect missing patches and misconfigurations invisible to network-based checks

B. It runs faster because fewer probe packets are required

C. It does not require network access to the target host

D. It generates a higher VPR score for all discovered vulnerabilities

Source ID: tenable-certified-vm-q-004. Category: Nessus Scanning • Topics: Credentialed Scanning, Local Checks, Patch Detection

## 5. In Tenable.io, what does ACR (Asset Criticality Rating) represent?

A. The CVSS score of the most critical vulnerability on the asset

B. A dynamic score from 0–1000 representing overall asset vulnerability exposure

C. The number of critical vulnerabilities found on the asset during the last scan

D. A 1–10 score reflecting the business importance of an asset, configured by the security team

Source ID: tenable-certified-vm-q-005. Category: Vulnerability Prioritization • Topics: Acr, Asset Management, Aes

## 6. AES (Asset Exposure Score) in Tenable.io ranges from 0 to 1000. What two factors primarily determine an asset's AES?

A. The vulnerabilities present on the asset and the asset's ACR (Asset Criticality Rating)

B. The CVSS scores of all vulnerabilities and the asset's IP address subnet

C. The number of scans performed on the asset and the last scan date

D. The VPR scores of all vulnerabilities and the number of open ports

Source ID: tenable-certified-vm-q-006. Category: Vulnerability Prioritization • Topics: Aes, Acr, Vpr

## 7. A Tenable.io remediation campaign is created against a specific set of vulnerabilities. New vulnerabilities discovered after the campaign is created — what happens to them?

A. They are automatically added to the campaign if they have the same CVE

B. They are NOT automatically added to the campaign; the campaign uses a snapshot of vulnerability data at creation time

C. They are added to the campaign only if they have a VPR score above 7.0

D. They replace the existing campaign data if they affect the same assets

Source ID: tenable-certified-vm-q-007. Category: Remediation Workflows • Topics: Remediation Campaigns, Snapshot, Sla

## 8. Which Tenable.io scan template is most appropriate for detecting missing Windows patches on domain-joined workstations?

A. Discovery Scan

B. Web Application Tests

C. Credentialed Patch Audit

D. Basic Network Scan

Source ID: tenable-certified-vm-q-008. Category: Nessus Scanning • Topics: Scan Templates, Patch Audit, Windows Scanning

## 9. In Tenable.io, what is the purpose of tagging assets?

A. To exclude assets from compliance benchmark checks

B. To assign VPR scores to specific groups of assets

C. To organize assets into logical groups for filtering, access control, and targeted scanning

D. To automatically remediate vulnerabilities on tagged assets

Source ID: tenable-certified-vm-q-009. Category: Asset Management • Topics: Asset Tags, Asset Organization, Filtering

## 10. Which CVSS metric most directly captures whether a vulnerability requires user interaction to be exploited?

A. User Interaction (UI)

B. Attack Vector (AV)

C. Privileges Required (PR)

D. Confidentiality Impact (C)

Source ID: tenable-certified-vm-q-010. Category: Vulnerability Prioritization • Topics: Cvss V3, Scoring Metrics

## 11. What is the purpose of Nessus Agents in Tenable.io?

A. To monitor network traffic for intrusion detection

B. To replace the Tenable.io console for on-premises deployments

C. To perform web application penetration testing

D. To scan assets that are offline, behind firewalls, or lacking persistent network connectivity to the scanner

Source ID: tenable-certified-vm-q-011. Category: Asset Management • Topics: Nessus Agents, Agent Scanning, Remote Assets

## 12. A security analyst wants to filter vulnerabilities in Tenable.io to focus only on those with active known exploits in the wild. Which feature should they use?

A. Filter by plugin family 'General'

B. Filter by scan template type

C. VPR filter for vulnerabilities with VPR score 9.0 and above

D. CVSS v3 filter for scores above 9.0

Source ID: tenable-certified-vm-q-012. Category: Vulnerability Prioritization • Topics: Vpr, Exploit Intelligence, Filtering

## 13. Which compliance benchmarks are natively supported in Tenable.io for configuration auditing?

A. HIPAA and FERPA only

B. NIST SP 800-53 and CMMC

C. CIS Benchmarks and DISA STIGs

D. SOC 2 Type II and ISO 27001

Source ID: tenable-certified-vm-q-013. Category: Reporting Compliance • Topics: Cis Benchmarks, Disa Stig, Compliance Scanning

## 14. In Tenable.io, what is the function of the 'Accepted Risk' workflow?

A. To mark a vulnerability as intentionally accepted, removing it from active remediation tracking for a defined period

B. To increase the VPR score of a vulnerability to reflect accepted business risk

C. To delete the vulnerability finding from the scan results permanently

D. To automatically escalate a vulnerability to a SIEM for incident response

Source ID: tenable-certified-vm-q-014. Category: Remediation Workflows • Topics: Accepted Risk, Exception Management, Risk Workflow

## 15. Which plugin family in Nessus contains checks specifically for detecting missing Windows operating system patches?

A. Windows: Microsoft Bulletins

B. Service Detection

C. Web Servers

D. General

Source ID: tenable-certified-vm-q-015. Category: Nessus Scanning • Topics: Plugin Families, Windows Patches, Microsoft Bulletins

## 16. What does the 'Recast Risk' feature in Tenable.io allow a security analyst to do?

A. Reassign ownership of a vulnerability to a different team member

B. Move a vulnerability from one remediation campaign to another

C. Change the severity of a vulnerability finding to better reflect the organization's actual risk context

D. Automatically rescan an asset to confirm whether a vulnerability was remediated

Source ID: tenable-certified-vm-q-016. Category: Remediation Workflows • Topics: Recast Risk, Severity Override, Risk Management

## 17. In Tenable.io, which scan template would you choose to quickly identify live hosts and open ports without performing vulnerability assessment?

A. Advanced Scan

B. Malware Scan

C. Basic Network Scan

D. Discovery Scan

Source ID: tenable-certified-vm-q-017. Category: Nessus Scanning • Topics: Scan Templates, Discovery Scan, Host Discovery

## 18. A Tenable.io user wants to export vulnerability data for integration with a SIEM. Which export format provides the most flexibility for machine processing?

A. HTML

B. CSV

C. PDF

D. DOCX

Source ID: tenable-certified-vm-q-018. Category: Reporting Compliance • Topics: Export Formats, Siem Integration, Reporting

## 19. What is the key difference between CVSS v2 and CVSS v3 in Tenable vulnerability reporting?

A. CVSS v3 is calculated by Tenable internally while CVSS v2 comes from the NVD

B. CVSS v3 added Scope and User Interaction metrics not present in v2, providing more granular severity assessment

C. CVSS v3 only applies to web application vulnerabilities

D. CVSS v3 uses a 0–100 scale while CVSS v2 uses 0–10

Source ID: tenable-certified-vm-q-019. Category: Vulnerability Prioritization • Topics: Cvss V2, Cvss V3, Scoring Metrics

## 20. Which Tenable.io feature allows integration with ServiceNow to automatically create tickets for detected vulnerabilities?

A. Remediation campaigns only

B. Accepted Risk workflow

C. Nessus scan policies

D. Connectors (Tenable.io Integrations)

Source ID: tenable-certified-vm-q-020. Category: Remediation Workflows • Topics: Servicenow Integration, Connectors, Ticketing

## 21. In Tenable.io, which asset source provides continuous, real-time vulnerability data for endpoints that frequently move between networks?

A. Passive Vulnerability Scanner (PVS)

B. Cloud Connector

C. Nessus Agent

D. Virtual Scanner

Source ID: tenable-certified-vm-q-021. Category: Asset Management • Topics: Nessus Agents, Endpoint Scanning, Remote Workers

## 22. What does the Tenable.io 'Lumin' capability provide?

A. Risk-based vulnerability management including Cyber Exposure score, ACR, AES, and benchmarking against industry peers

B. Passive network traffic analysis for threat detection

C. Cloud security posture management for AWS and Azure

D. Automated penetration testing of discovered vulnerabilities

Source ID: tenable-certified-vm-q-022. Category: Vulnerability Prioritization • Topics: Lumin, Cyber Exposure, Benchmarking

## 23. How does Tenable.io handle assets that have not been scanned for an extended period?

A. Assets are moved to a quarantine repository requiring manual review

B. Assets are permanently deleted from the platform after 30 days without scanning

C. Assets are marked as 'inactive' after a configurable period of no scan data and are excluded from active vulnerability counts

D. Assets are automatically escalated to Critical severity in all dashboards

Source ID: tenable-certified-vm-q-023. Category: Asset Management • Topics: Asset Aging, Inactive Assets, Data Retention

## 24. Which Tenable.io dashboard view is best for tracking remediation progress against a defined SLA across an entire program?

A. The raw CSV export sorted by CVSS score

B. The plugin family summary report

C. The Nessus scan results view filtered by date

D. Vulnerability Management dashboard with remediation tracking widgets and SLA metrics

Source ID: tenable-certified-vm-q-024. Category: Reporting Compliance • Topics: Dashboards, Sla Tracking, Remediation Progress

## 25. In Tenable.io, what is the role of 'Network Objects' in scan configuration?

A. They configure the communication protocol used between the scanner and Tenable.io cloud

B. They define firewall rules that Tenable.io recommends for hardening

C. They define named IP address ranges or CIDR blocks that can be reused across multiple scan targets

D. They identify network devices like switches and routers for topology mapping

Source ID: tenable-certified-vm-q-025. Category: Asset Management • Topics: Network Objects, Scan Targets, Configuration

## 26. A CVSS v3 vulnerability has an Attack Vector of 'Network' and Privileges Required of 'None'. What does this indicate about the exploitability?

A. The vulnerability can only be exploited by a physical presence at the machine

B. The vulnerability requires local network access and an authenticated session

C. The vulnerability requires administrative privileges on an adjacent network device

D. The vulnerability can be exploited remotely over the network without any prior authentication

Source ID: tenable-certified-vm-q-026. Category: Vulnerability Prioritization • Topics: Cvss V3, Attack Vector, Privileges Required

## 27. What best describes the function of the Tenable.io API key?

A. It authenticates programmatic access to Tenable.io for automation, integrations, and third-party tools

B. It is used as the password for Nessus scanner login during cloud pairing

C. It replaces the Nessus linking key for on-premises scanner registration

D. It encrypts scan results stored in the Tenable.io cloud platform

Source ID: tenable-certified-vm-q-027. Category: Asset Management • Topics: Api Keys, Automation, Integration

## 28. Which Tenable.io feature allows setting a maximum number of hosts scanned simultaneously to reduce impact on network performance?

A. Asset tagging with a 'slow-scan' tag

B. Performance options in the Advanced Scan template (Max Simultaneous Hosts)

C. VPR threshold setting in the scan policy

D. Scan zone priority configuration

Source ID: tenable-certified-vm-q-028. Category: Nessus Scanning • Topics: Scan Performance, Advanced Scan, Network Impact

## 29. What type of Tenable.io scan is most appropriate for an environment where network-based scanning would trigger IDS/IPS alerts?

A. Credentialed Patch Audit scan run from the corporate network

B. Agent-based scan using Nessus Agents installed on the endpoints

C. Basic Network Scan with all plugins enabled

D. Discovery scan with SYN scanning enabled

Source ID: tenable-certified-vm-q-029. Category: Nessus Scanning • Topics: Agent Scanning, Ids Avoidance, Scan Types

## 30. In Tenable.io, what does the 'Severity' filter Critical refer to in terms of CVSS score?

A. Any vulnerability with an active exploit in Metasploit

B. CVSS v3 score of 9.0 to 10.0

C. CVSS v3 score of 7.0 to 8.9

D. CVSS v3 score of 4.0 to 6.9

Source ID: tenable-certified-vm-q-030. Category: Vulnerability Prioritization • Topics: Cvss Severity, Severity Classification, Filtering

## 31. Which scan configuration change would most effectively reduce false positives for missing patch detection in Tenable.io?

A. Ensuring authentication credentials are valid and the scan uses the Credentialed Patch Audit template

B. Increasing the scan frequency to daily

C. Adding more target IP addresses to the scan scope

D. Disabling the Windows plugin family

Source ID: tenable-certified-vm-q-031. Category: Nessus Scanning • Topics: False Positives, Credentialed Scanning, Scan Accuracy

## 32. What is the maximum number of scanners supported in a single Tenable.io account?

A. 100 scanners across all accounts globally

B. Determined by licensing tier; no fixed universal maximum

C. 10 scanners per account

D. 1 scanner per subscription

Source ID: tenable-certified-vm-q-032. Category: Asset Management • Topics: Scanner Management, Licensing, Scale

## 33. When Tenable.io shows a vulnerability as 'Fixed', what does this status indicate?

A. The vulnerability's CVE has been retracted by the NVD

B. The vulnerability was detected in a previous scan but was NOT found in the most recent scan of the same asset

C. The vulnerability was manually marked as remediated by a security analyst

D. The vulnerability's plugin was disabled in the scan policy

Source ID: tenable-certified-vm-q-033. Category: Remediation Workflows • Topics: Vulnerability Status, Fixed Status, Rescan

## 34. Which Tenable.io feature enables role-based access control to restrict which users can view or manage specific assets?

A. User permissions with tag-based access control

B. Scan zone assignments per user

C. VPR thresholds in user profiles

D. ACR assignments on individual assets

Source ID: tenable-certified-vm-q-034. Category: Asset Management • Topics: Rbac, Access Control, Tag Based Access

## 35. Which Tenable.io integration allows discovered cloud assets (EC2, Azure VMs) to be automatically imported into the asset inventory?

A. Manual CSV import from the cloud provider billing console

B. Cloud Connectors for AWS, Azure, and GCP

C. Passive Vulnerability Scanner network tap in the cloud VPC

D. Nessus Agent deployment on cloud instances only

Source ID: tenable-certified-vm-q-035. Category: Asset Management • Topics: Cloud Connectors, Aws Integration, Cloud Assets

## 36. In Tenable vulnerability management terminology, what does 'mean time to remediate' (MTTR) measure?

A. The average time it takes Nessus to complete a scan of a single host

B. The average CVSS score of all vulnerabilities remediated in a reporting period

C. The average number of days between when a vulnerability is discovered and when it is confirmed fixed

D. The time between plugin updates and detection of new vulnerabilities

Source ID: tenable-certified-vm-q-036. Category: Reporting Compliance • Topics: Mttr, Remediation Metrics, Program Kpis

## 37. A Nessus scan reports plugin output for plugin 10397. What general category does this plugin typically represent?

A. MySQL database vulnerability

B. DNS zone transfer attempt

C. SSL/TLS certificate expiration

D. Windows file share enumeration (SMB)

Source ID: tenable-certified-vm-q-037. Category: Nessus Scanning • Topics: Plugin Families, Smb Enumeration, Windows Scanning

## 38. What is the purpose of the Tenable.io 'Exclusions' feature in scan configuration?

A. To prevent specific IP addresses or ranges from being included in a scan even if they fall within the target range

B. To automatically accept risk for vulnerabilities in excluded ranges

C. To remove old scan data from the Tenable.io asset database

D. To block specific plugin families from running on all scanners

Source ID: tenable-certified-vm-q-038. Category: Nessus Scanning • Topics: Scan Exclusions, Scan Targets, Configuration

## 39. Which of the following is a valid use case for Tenable.io's 'Advanced Scan' template over the 'Basic Network Scan' template?

A. Performing passive traffic analysis instead of active probing

B. Scanning web applications with application-layer fuzzing

C. Running faster scans with fewer plugins enabled

D. Customizing performance settings, enabling specific compliance audits, or adding custom credentials not available in the Basic template

Source ID: tenable-certified-vm-q-039. Category: Nessus Scanning • Topics: Advanced Scan, Scan Templates, Compliance Audit

## 40. In Tenable.io, what is the role of a 'Linked Scanner' compared to a 'Cloud Scanner'?

A. A Linked Scanner connects to external threat intelligence; a Cloud Scanner handles internal network scanning

B. A Linked Scanner is a customer-managed on-premises Nessus instance; a Cloud Scanner is managed by Tenable in their cloud infrastructure

C. A Linked Scanner is used only for agent-based scans; a Cloud Scanner handles network scans

D. A Linked Scanner requires a dedicated physical appliance; a Cloud Scanner runs as a virtual machine

Source ID: tenable-certified-vm-q-040. Category: Asset Management • Topics: Linked Scanners, Cloud Scanners, Scanner Management

## 41. What does the CVSS v3 'Scope' metric (S) describe?

A. The geographic scope of systems affected by the vulnerability

B. The number of systems currently vulnerable in the environment

C. Whether the vulnerability is applicable to cloud or on-premises systems

D. Whether a vulnerability's impact extends beyond the vulnerable component to affect other components

Source ID: tenable-certified-vm-q-041. Category: Vulnerability Prioritization • Topics: Cvss V3, Scope Metric, Scoring

## 42. A security team wants to ensure vulnerability data stays current for a group of assets that move between office and remote networks. What is the optimal Tenable.io configuration?

A. Configure VPN-only scanning policies that run when endpoints connect to corporate VPN

B. Deploy Nessus Agents on all mobile assets and configure agent scan intervals

C. Use a cloud scanner to scan the home ISP ranges of all remote workers

D. Schedule daily network scans of all office IP ranges at maximum scan speed

Source ID: tenable-certified-vm-q-042. Category: Asset Management • Topics: Nessus Agents, Mobile Assets, Remote Workers

## 43. Which Tenable.io report format is most appropriate for delivering a vulnerability summary to C-level executives?

A. Executive Summary PDF report with high-level risk metrics and trend charts

B. Raw CSV export with all vulnerability fields

C. Full detailed vulnerability report with plugin output per host

D. Nessus scan results export in .nessus XML format

Source ID: tenable-certified-vm-q-043. Category: Reporting Compliance • Topics: Executive Reporting, Report Formats, Dashboards

## 44. What is the main benefit of using Tenable.io's built-in ticketing integrations (e.g., ServiceNow, JIRA) for remediation?

A. It replaces the need for a vulnerability management program by handling remediation automatically

B. Vulnerabilities are automatically converted to tickets routed to the appropriate remediation team without manual data transfer

C. The integration allows ServiceNow to perform vulnerability scans on behalf of Tenable.io

D. It encrypts vulnerability data before sending it to ServiceNow for compliance purposes

Source ID: tenable-certified-vm-q-044. Category: Remediation Workflows • Topics: Ticketing Integration, Servicenow, Jira

## 45. Which action should a Tenable.io administrator take after rotating Windows service account credentials used for credentialed scans?

A. Recreate all scan policies from scratch with the new credentials

B. Update the stored credentials in the Tenable.io credential manager and verify plugin 19506 confirms successful authentication on the next scan

C. Disable Windows plugin families until the credential issue is resolved

D. Increase the VPR threshold to compensate for temporarily uncredentialed scan results

Source ID: tenable-certified-vm-q-045. Category: Nessus Scanning • Topics: Credential Management, Plugin 19506, Scan Authentication

## 46. In Tenable.io Predictive Prioritization, which of the following signals most increases a vulnerability's VPR score relative to its base CVSS?

A. The vulnerability affecting a server with ACR of 10

B. Availability of functional exploit code in a public exploit framework like Metasploit

C. The vulnerability receiving a CVE published by the NVD

D. The vulnerability having been discovered more than 12 months ago

Source ID: tenable-certified-vm-q-046. Category: Vulnerability Prioritization • Topics: Vpr, Predictive Prioritization, Exploit Intelligence

## 47. A compliance audit in Tenable.io produces a 'FAILED' result for a CIS benchmark check. What does this indicate?

A. The system's configuration does not meet the specific CIS hardening requirement being tested

B. The target asset does not have a CIS benchmark applicable to its operating system

C. The Nessus scanner lost connectivity to the target during the compliance check

D. The compliance plugin requires root/administrator credentials that were not supplied

Source ID: tenable-certified-vm-q-047. Category: Reporting Compliance • Topics: Cis Benchmarks, Compliance Results, Hardening

## 48. What is the purpose of Tenable.io's 'Groups' feature?

A. To create custom CVSS scoring groups for different business units

B. To group similar vulnerabilities for bulk remediation

C. To define IP address ranges for scanner assignment

D. To organize users and control which scan results and assets they can access

Source ID: tenable-certified-vm-q-048. Category: Asset Management • Topics: Groups, User Management, Access Control

## 49. Which Tenable.io feature provides a single prioritized list of vulnerabilities ranked by combined risk across all scanned assets?

A. Vulnerability Workbench filtered and sorted by VPR

B. Plugin family summary report

C. Asset detail page sorted by last scan date

D. Individual scan results view per scanner

Source ID: tenable-certified-vm-q-049. Category: Vulnerability Prioritization • Topics: Vulnerability Workbench, Vpr, Triage

## 50. In Tenable.io, which user role has the ability to create and manage scan policies but cannot modify user accounts?

A. Scan Manager

B. Administrator

C. Standard User

D. Read-Only User

Source ID: tenable-certified-vm-q-050. Category: Asset Management • Topics: User Roles, Permissions, Access Control

## 51. What does the 'Recast Risk' feature allow a Tenable.io analyst to do that 'Accepted Risk' does not?

A. Change the severity classification of a vulnerability finding permanently or for a defined period

B. Remove the vulnerability from all scan results retroactively

C. Generate a public disclosure notification to the vendor

D. Assign the vulnerability to a different asset automatically

Source ID: tenable-certified-vm-q-051. Category: Remediation Workflows • Topics: Recast Risk, Accepted Risk, Severity Management

## 52. Which scan configuration ensures that Nessus does not scan ports below 1024 on sensitive production servers?

A. Custom port range specification in the scan policy, excluding ports 1–1023

B. Applying the Discovery Scan template instead of Basic Network Scan

C. Enabling safe checks in the scan policy

D. Setting the ACR of production servers to 10

Source ID: tenable-certified-vm-q-052. Category: Nessus Scanning • Topics: Port Range, Scan Configuration, Production Safety

## 53. What is the function of 'Safe Checks' in a Nessus scan policy?

A. It restricts scans to port 443 for encrypted traffic analysis only

B. It disables potentially disruptive plugins that could crash services or cause system instability

C. It limits the scan to assets with an ACR below 5

D. It automatically applies compensating controls to failing compliance checks

Source ID: tenable-certified-vm-q-053. Category: Nessus Scanning • Topics: Safe Checks, Scan Policy, Production Safety

## 54. A Tenable.io dashboard widget shows '847 Critical vulnerabilities' across all assets. An executive asks for context. Which additional metric best communicates remediation progress?

A. Mean Time to Remediate (MTTR) trend over the last 90 days

B. The number of Nessus scanners currently online

C. Total number of assets scanned this week

D. The CVSS score distribution across all vulnerabilities

Source ID: tenable-certified-vm-q-054. Category: Reporting Compliance • Topics: Mttr, Executive Reporting, Remediation Progress

## 55. When configuring a Tenable.io scan, what is the purpose of the 'Max Simultaneous Checks per Host' setting?

A. It defines how many remediation campaigns can reference the same host

B. It controls how many users can view a specific host's vulnerability data simultaneously

C. It limits the number of plugin checks running concurrently against a single target host to reduce system load on that host

D. It sets the maximum number of CVEs a single host can report in one scan

Source ID: tenable-certified-vm-q-055. Category: Nessus Scanning • Topics: Scan Performance, Simultaneous Checks, Scan Tuning

## 56. Which Tenable.io feature allows creating a persistent saved view of the Vulnerability Workbench with specific filters applied?

A. Plugin family suppression rules

B. ACR threshold override in user profile settings

C. Scheduled scan reports with workbench filter options

D. Saved search or custom dashboard widget configured with workbench filters

Source ID: tenable-certified-vm-q-056. Category: Reporting Compliance • Topics: Saved Search, Workbench, Dashboards

## 57. Which Tenable.io integration enables automatic asset synchronization from an enterprise CMDB (Configuration Management Database)?

A. ServiceNow CMDB connector via the Tenable.io integration framework

B. Nessus Agent deployment to all CMDB-tracked assets

C. Manual IP range entry in Tenable.io network settings

D. Cloud connector configured for on-premises LDAP

Source ID: tenable-certified-vm-q-057. Category: Asset Management • Topics: Cmdb Integration, Servicenow, Asset Sync

## 58. What is the recommended approach when a Tenable.io scan discovers a vulnerability on a PCI-in-scope server with a CVSS score of 9.8 but the asset team reports the vulnerable service is not running?

A. Delete the asset from Tenable.io to clear the finding

B. Accept the risk automatically using the Accepted Risk workflow

C. Increase the server's ACR to reflect the higher risk finding

D. Submit a false positive dispute or use Recast Risk with evidence documentation that the service is not running

Source ID: tenable-certified-vm-q-058. Category: Remediation Workflows • Topics: False Positives, Recast Risk, Pci Compliance

## 59. Which Tenable.io feature enables vulnerability prioritization based on whether the organization has already deployed compensating controls such as a WAF or IPS signature?

A. Compliance benchmark override for WAF-protected assets

B. Recast Risk with contextual notes documenting the compensating control

C. ACR reduction for assets protected by WAF

D. VPR automatic adjustment when WAF integration is active

Source ID: tenable-certified-vm-q-059. Category: Vulnerability Prioritization • Topics: Compensating Controls, Recast Risk, Risk Context

## 60. When does Tenable.io update a vulnerability's VPR score after initial publication?

A. VPR is fixed at the time the CVE is published and never changes

B. VPR updates quarterly on Tenable's plugin feed release schedule

C. VPR is recalculated daily as threat intelligence signals change, such as new exploit code being published

D. VPR is updated only when the NVD publishes a revised CVSS score

Source ID: tenable-certified-vm-q-060. Category: Vulnerability Prioritization • Topics: Vpr, Dynamic Scoring, Threat Intelligence

## 61. A team runs a Host Discovery scan before building its quarterly vulnerability scan scope. How do assets found only by this discovery scan affect Tenable Vulnerability Management licensing?

A. They immediately count as licensed assets as soon as any IP address is discovered

B. They count only if the asset is later added to a dashboard widget

C. They do not count toward the license until they are assessed by non-discovery vulnerability plugins

D. They count only if the discovery scan finds at least one open TCP port

Source ID: tenable-certified-vm-q-061. Category: Nessus Scanning • Topics: Host Discovery, Licensing, Scan Templates

## 62. A scan owner sets Scan Results to 'Keep private' for a sensitive troubleshooting scan. What is the most important operational effect of that setting?

A. The scan results are automatically deleted after the scanner uploads them

B. The scanner runs only discovery plugins and disables all vulnerability plugins

C. The scan results are hidden from dashboards, reports, and workbenches and do not update vulnerability states

D. The scan still updates dashboard findings, but only administrators can see them

Source ID: tenable-certified-vm-q-062. Category: Nessus Scanning • Topics: Scan Results, Private Scans, Vulnerability States

## 63. Which Tenable Vulnerability Management scan template is intended for an internal PCI DSS vulnerability scan?

A. Credential Validation

B. Host Discovery

C. Legacy Web App Scan

D. Internal PCI Network Scan

Source ID: tenable-certified-vm-q-063. Category: Reporting Compliance • Topics: Pci, Scan Templates, Compliance Scanning

## 64. A firewall team asks what inbound rule is required so Tenable Agents can communicate with Tenable Vulnerability Management. What should you tell them?

A. Open inbound UDP 161 so Tenable can poll the agent with SNMP

B. Open inbound TCP 8834 from Tenable cloud scanners to every endpoint

C. Open inbound SMB and SSH so the agent can receive credentialed checks

D. No inbound rule is required because agents initiate outbound TCP 443 communication to Tenable

Source ID: tenable-certified-vm-q-064. Category: Nessus Scanning • Topics: Nessus Agents, Outbound Communication, Firewalls

## 65. A remote employee's laptop is offline during the scheduled agent scan window. Which agent behavior helps prevent the endpoint from being missed indefinitely?

A. The agent can be configured to run the scan when it comes back online

B. The agent waits for an administrator to manually import a scan file

C. The cloud scanner automatically switches to an uncredentialed scan of the laptop's public IP

D. The next dashboard refresh marks all findings on the laptop as Fixed

Source ID: tenable-certified-vm-q-065. Category: Nessus Scanning • Topics: Nessus Agents, Asynchronous Scanning, Remote Workers

## 66. When configuring an agent scan in Tenable Vulnerability Management, what target type must you select?

A. An agent group

B. A scanner group

C. An individual linked agent

D. A raw CIDR range only

Source ID: tenable-certified-vm-q-066. Category: Nessus Scanning • Topics: Agent Groups, Agent Scanning, Scan Targets

## 67. A missing Windows patch was found by a credentialed local check. After the server team installs the patch, an uncredentialed network scan does not report the finding. Why might Tenable Vulnerability Management still not move it to Fixed?

A. Local check findings must be verified by another successfully authenticated scan

B. Only Host Discovery scans can verify Windows patch remediation

C. The finding must be recast before it can become Fixed

D. Windows patch findings never move to Fixed automatically

Source ID: tenable-certified-vm-q-067. Category: Remediation Workflows • Topics: Vulnerability Mitigation, Credentialed Scanning, Local Checks

## 68. A vulnerability was originally reported by a combined plugin on port 445. What type of follow-up scan is required to mitigate it according to Tenable's mitigation requirements?

A. Any scan that confirms the remote port is closed

B. A successfully authenticated scan

C. A dashboard refresh after the next plugin feed update

D. A Host Discovery scan with common ports enabled

Source ID: tenable-certified-vm-q-068. Category: Remediation Workflows • Topics: Combined Plugins, Vulnerability Mitigation, Authenticated Scans

## 69. What does the Resurfaced state mean for a vulnerability finding?

A. Tenable previously marked the vulnerability Fixed but detected it again

B. An analyst accepted the risk and hid the finding

C. Tenable detected the vulnerability for the first time

D. Tenable detected the vulnerability more than once without it ever being fixed

Source ID: tenable-certified-vm-q-069. Category: Remediation Workflows • Topics: Vulnerability States, Resurfaced, Remediation Tracking

## 70. A developer comparing Tenable Vulnerability Management UI results to API output sees UI states New, Active, Resurfaced, and Fixed. Which API state mapping is correct?

A. All UI states are returned as their exact UI names in the API

B. New is created, Active is running, Resurfaced is failed, and Fixed is closed

C. New and Active are open, Resurfaced is reopened, and Fixed is fixed

D. New and Resurfaced are open, Active is confirmed, and Fixed is deleted

Source ID: tenable-certified-vm-q-070. Category: Reporting Compliance • Topics: Api, Vulnerability States, Integrations

## 71. In Tenable Vulnerability Management, what identifies a single vulnerability finding instance on an asset?

A. The dashboard widget where the finding appears

B. The plugin ID, port, and protocol combination

C. The scan schedule and scanner group name

D. The asset's operating system and business owner

Source ID: tenable-certified-vm-q-071. Category: Vulnerability Prioritization • Topics: Findings, Plugin Id, Vulnerability Instances

## 72. How long does Tenable Vulnerability Management retain findings data after scans or imported results update it?

A. 90 days

B. 15 months

C. Indefinitely, unless the scan is deleted

D. 30 days

Source ID: tenable-certified-vm-q-072. Category: Reporting Compliance • Topics: Findings, Data Retention, Reporting

## 73. An analyst builds a complex Explore query with 25 filter conditions and receives an Invalid filter error. What is the likely cause?

A. Only administrators can use AND and OR operators

B. Saved Views cannot include any Query Builder filters

C. Explore Query Builder supports a maximum of 20 filter conditions

D. Tenable Queries disable all custom filtering when selected

Source ID: tenable-certified-vm-q-073. Category: Reporting Compliance • Topics: Query Builder, Explore, Filtering

## 74. A lead analyst wants a reusable Explore view that preserves both the query and the table layout, including visible columns and grouping. Which feature best fits?

A. Scanner group

B. Scan folder

C. Saved View

D. Recast rule

Source ID: tenable-certified-vm-q-074. Category: Reporting Compliance • Topics: Saved Views, Explore, Query Builder

## 75. Which Tenable Query should an analyst use to focus on vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog?

A. Credentialed Scan Failures

B. Network Devices

C. External Assets

D. CISA Known Exploitable Vulnerabilities

Source ID: tenable-certified-vm-q-075. Category: Vulnerability Prioritization • Topics: Tenable Queries, Cisa Kev, Threat Intelligence

## 76. A security manager asks what the Emerging Threats Tenable Query is meant to identify. Which answer is most accurate?

A. All vulnerabilities with a CVSS v3 score above 4.0

B. Compliance audit checks that changed from Failed to Passed

C. Vulnerabilities Tenable Research is monitoring due to public discussion, proof-of-concept activity, or observed large-scale abuse

D. Assets that have never been scanned by an authenticated scan

Source ID: tenable-certified-vm-q-076. Category: Vulnerability Prioritization • Topics: Tenable Queries, Emerging Threats, Threat Intelligence

## 77. A recast rule was created from Explore, but a matching finding still shows its original severity immediately afterward. What is the best explanation?

A. Only the scan owner can see a recast rule until the next plugin feed update

B. Recast rules never apply to findings created before the rule existed

C. The finding must first be exported and reimported for the rule to apply

D. Recast operates on an eventually consistent model, and Explore may cache the view for up to 60 minutes

Source ID: tenable-certified-vm-q-077. Category: Remediation Workflows • Topics: Recast Risk, Eventual Consistency, Explore

## 78. During a compliance review, a host audit check is known to be satisfied through an approved exception, but the original audit result shows Failed. Which rule type changes the host audit result, for example from Failed to Passed?

A. Recast

B. Accept

C. Target Group

D. Change Result

Source ID: tenable-certified-vm-q-078. Category: Reporting Compliance • Topics: Host Audits, Change Result, Compliance Workflows

## 79. A compliance officer relies on Tenable Vulnerability Management reports for monthly status meetings. What data window should they expect standard reports to show?

A. All retained findings since the account was created

B. The last 30 days

C. Only the current calendar quarter

D. The last 15 months

Source ID: tenable-certified-vm-q-079. Category: Reporting Compliance • Topics: Reports, Data Window, Monthly Scanning

## 80. Which permission is most appropriate for an auditor who needs to view scan results and generate reports but must not change scan configurations?

A. Can Use

B. Can Edit

C. Can Scan

D. Can View

Source ID: tenable-certified-vm-q-080. Category: Asset Management • Topics: Permissions, Can View, Access Control

## 81. A Scan Operator launches a scan owned by another user. Some targets are skipped even though the launcher has access to them. What is the most likely permission issue?

A. The scan can only target assets that the launcher personally tagged

B. Tenable evaluates scan target permissions based on the scan owner's permissions, not the launcher

C. The launcher must have Can Edit on every report template before a scan can run

D. Scan Operators can never launch scans owned by another user

Source ID: tenable-certified-vm-q-081. Category: Asset Management • Topics: Permissions, Scan Owner, Can Scan

## 82. Which statement best describes the difference between roles and permissions in Tenable Vulnerability Management?

A. Roles are used for reports only; permissions are used for scans only

B. Roles apply only to scanners; permissions apply only to agents

C. Roles control the major actions a user can perform; permissions control the data those actions can apply to

D. Roles are temporary access grants; permissions are permanent administrator accounts

Source ID: tenable-certified-vm-q-082. Category: Asset Management • Topics: Roles, Permissions, Least Privilege

## 83. Which permission allows a user to apply an existing scan policy or report template without editing that reusable object?

A. Can Use

B. Can Edit

C. Can Scan

D. Can View

Source ID: tenable-certified-vm-q-083. Category: Asset Management • Topics: Can Use, Scan Policies, Access Control

## 84. A scan uses a tag with an IPv4 range rule. What is the difference between 'Existing tagged assets only' and 'Targets defined by tags'?

A. Existing tagged assets only scans fixed findings; Targets defined by tags scans active findings

B. Existing tagged assets only requires agents; Targets defined by tags requires cloud scanners

C. Existing tagged assets only scans public IPs; Targets defined by tags scans private IPs

D. Existing tagged assets only scans assets already tagged; Targets defined by tags scans assets whose IP or DNS matches the tag rules

Source ID: tenable-certified-vm-q-084. Category: Nessus Scanning • Topics: Tag Based Targeting, Scan Targets, Scan Configuration

## 85. A tag-based scanner configuration uses 'Targets defined by tags' with multiple IPv4 and DNS tag rules. The administrator selects Match All and the scan resolves no targets. What should they understand?

A. Tag-based scans cannot use IPv4 tag rules

B. Match All can have only one tag rule in this context; use Match Any for multiple supported rules

C. The scan must be converted to an agent scan before tag rules work

D. Targets defined by tags only works for assets that already completed a credentialed scan

Source ID: tenable-certified-vm-q-085. Category: Nessus Scanning • Topics: Tag Rules, Match All, Target Resolution

## 86. An administrator uploads a target file to a scan and the import fails. Which file requirement should they check first?

A. The file must be a JSON array with CIDR targets only

B. The file must be UTF-16 with one target per comma-separated row

C. The file must include the scanner UUID before every target

D. The file must be ASCII, one target per line, with no trailing spaces or extra lines after the last target

Source ID: tenable-certified-vm-q-086. Category: Nessus Scanning • Topics: Target Files, Scan Targets, Scan Configuration

## 87. A triggered agent scan is configured for a group of laptops. Which statement about Scan Results is true?

A. Triggered scans report only Info severity findings

B. Show in dashboard is always enabled for triggered scans

C. Triggered scans never update vulnerability states

D. Triggered scans can only be kept private

Source ID: tenable-certified-vm-q-087. Category: Nessus Scanning • Topics: Triggered Agent Scans, Scan Results, Dashboards

## 88. An analyst manually overrides a host asset's ACR to reflect business criticality. How long can it take for the new ACR to appear in the Tenable Vulnerability Management UI?

A. Only after the asset is deleted and rediscovered

B. Exactly 15 minutes

C. Up to 24 hours

D. Only after the next quarterly plugin feed update

Source ID: tenable-certified-vm-q-088. Category: Asset Management • Topics: Acr, Asset Criticality, Asset Management

## 89. A company has two branch offices that both use 192.168.1.0/24. An administrator moves duplicate-looking assets into separate networks after scans have already run, but leaves the scanner in the old network. What is the key risk?

A. Tenable automatically merges all assets with the same private IP across networks

B. Tenable may create duplicate asset records that count against licensing, and the scanner may recreate the same asset if it is not moved too

C. The assets are converted to Web Application assets and stop appearing under Hosts

D. The next scan permanently deletes the moved assets from all dashboards

Source ID: tenable-certified-vm-q-089. Category: Asset Management • Topics: Networks, Duplicate Assets, Scanner Placement

## 90. What happens when a host asset is deleted from Tenable Vulnerability Management?

A. Only the asset name is hidden; findings remain active forever

B. The next scan automatically restores the original asset ID and all deleted findings

C. The asset is placed in a temporary quarantine folder for 15 months

D. The asset is removed from the assets view, associated findings are deleted, and Tenable stops matching scan results to it

Source ID: tenable-certified-vm-q-090. Category: Asset Management • Topics: Delete Assets, Findings, License Count

## 91. An executive dashboard appears unchanged immediately after a large scan finishes. What is the best explanation before assuming the scan failed?

A. Dashboard data updates after scans, but there may be a delay while Tenable indexes the data

B. Dashboards update only once per calendar quarter

C. Dashboard widgets show only Fixed vulnerabilities

D. Dashboards never use scan data from linked scanners

Source ID: tenable-certified-vm-q-091. Category: Reporting Compliance • Topics: Dashboards, Indexing, Scan Results

## 92. A manager asks why they cannot open another user's report result even though they can see report templates. What is the correct explanation?

A. Report results are user-specific; users can only view their own Tenable Vulnerability Management report results

B. Report templates and report results are the same object

C. Report results become visible only after 15 months

D. Reports cannot be viewed by managers under any role

Source ID: tenable-certified-vm-q-092. Category: Reporting Compliance • Topics: Reports, Report Results, Permissions

## 93. In the Tenable for ServiceNow integration, which Tenable Job Type should be selected under the ITSM module to bring vulnerability data into ServiceNow?

A. Pull Vulnerabilities

B. Recast Findings

C. Push Assets

D. Pull Assets

Source ID: tenable-certified-vm-q-093. Category: Remediation Workflows • Topics: Servicenow, Integrations, Vulnerability Data

## 94. When configuring the Tenable Plugin for Jira, what is Tenable's recommendation for the API key used by the integration?

A. Reuse the same API key for all third-party integrations to simplify rotation

B. Generate a unique Tenable Vulnerability Management API key for each installed Jira integration instance

C. Do not record the API token because Jira can retrieve it automatically after reset

D. Use only a read-only API key because Jira never collects vulnerability data

Source ID: tenable-certified-vm-q-094. Category: Remediation Workflows • Topics: Jira, Api Keys, Integrations

## 95. A team wants faster, lower-footprint agent results for software inventory so Tenable can analyze missing patches as coverage is released. Which agent template is designed for that purpose?

A. Collect Inventory

B. Host Discovery

C. Credential Validation

D. Legacy Web App Scan

Source ID: tenable-certified-vm-q-095. Category: Nessus Scanning • Topics: Collect Inventory, Agent Scanning, Software Inventory

## 96. A Windows endpoint team uses Collect Inventory scans and expects coverage for Google Chrome and Microsoft Exchange Patch Tuesday updates. What is the issue with that expectation?

A. Collect Inventory can run only on Linux agents and cannot report Windows information

B. Collect Inventory does not currently cover third-party Windows applications or Microsoft product Patch Tuesday updates such as Exchange or SharePoint

C. Collect Inventory supports only malware checks and disables all software inventory

D. Collect Inventory requires every plugin family to be manually selected before the scan can launch

Source ID: tenable-certified-vm-q-096. Category: Nessus Scanning • Topics: Collect Inventory, Coverage Limitations, Patch Assessment

## 97. Which statement about the Advanced Agent Scan template is correct?

A. It is an agent scan without recommendations that can use Scan Window or Triggered Scan methods

B. It automatically selects every plugin and prevents plugin customization

C. It is used only for external PCI ASV scans

D. It is the only template that performs Host Discovery for network scanners

Source ID: tenable-certified-vm-q-097. Category: Nessus Scanning • Topics: Advanced Agent Scan, Triggered Scans, Plugin Selection

## 98. Which scan template is a simple way to discover live hosts with minimal network traffic?

A. Ping-Only Discovery

B. SCAP and OVAL Auditing

C. Audit Cloud Infrastructure

D. Policy Compliance Auditing

Source ID: tenable-certified-vm-q-098. Category: Nessus Scanning • Topics: Ping Only Discovery, Host Discovery, Scan Templates

## 99. A Windows security baseline team wants to audit password complexity and registry-based settings against a known baseline. Which Tenable scan template category best matches this need?

A. Inventory collection using Collect Inventory

B. Tactical scan using Malware Scan

C. Configuration scan using Policy Compliance Auditing

D. Vulnerability scan using Host Discovery

Source ID: tenable-certified-vm-q-099. Category: Reporting Compliance • Topics: Policy Compliance Auditing, Configuration Scans, Windows Baselines

## 100. A PCI team wants to rely only on the PCI Internal Nessus Agent template for all internal PCI vulnerability coverage. What should you advise?

A. Agent-based internal PCI scanning replaces all network scanning requirements

B. Internal uncredentialed network scans are still required to cover vulnerabilities related to network services by port scans

C. Tenable assessors review internal PCI agent findings for compensating controls before they appear

D. The PCI Internal Nessus Agent template is only for external ASV attestation

Source ID: tenable-certified-vm-q-100. Category: Reporting Compliance • Topics: Pci, Agent Scanning, Network Service Scanning
