# Banco complementar — 100 questions (English)

All option rationales are in English. The existing answer key is retained.

Independent educational study material; personal, noncommercial use. Not an official certification question bank.

## 1. BC-Q001

Which Tenable.io metric combines CVSS severity with threat intelligence and asset context to produce a risk-based prioritization score?

**Technical review:** The wording conflates vulnerability priority with asset-specific exposure. The imported key is retained; AES and ACR should be distinguished from the global VPR calculation.

**A. ACR (Asset Criticality Rating) — Not the keyed answer**

ACR rates business criticality of an asset; it is not the vulnerability's dynamic threat-priority score.

**B. CVSS v3 Base Score — Not the keyed answer**

CVSS v3 Base describes technical severity and does not incorporate current threat intelligence into a dynamic priority score.

**C. AES (Asset Exposure Score) — Not the keyed answer**

AES combines vulnerability exposure with asset criticality, so the phrase 'asset context' makes this option plausible. It is not the imported key's answer; the wording is ambiguous.

**D. VPR (Vulnerability Priority Rating) — Answer key**

The imported key selects VPR because it incorporates vulnerability characteristics and threat intelligence. However, VPR does not itself encode asset-specific business criticality; the question's asset-context wording needs qualification.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm), [Scoring — official documentation](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)

## 2. BC-Q002

What is the range of the VPR (Vulnerability Priority Rating) score in Tenable?

**A. 1 to 5 — Not the keyed answer**

A five-point scale does not match Tenable's documented VPR range.

**B. 0.1 to 10.0 — Answer key**

VPR runs from 0.1 to 10.0, with higher values indicating greater vulnerability priority.

**C. 0 to 100 — Not the keyed answer**

A 0-100 scale is not the VPR score range used for vulnerability prioritization.

**D. 0 to 1000 — Not the keyed answer**

The 0-1000 scale applies to exposure scoring such as AES, not the VPR score.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 3. BC-Q003

Nessus plugin 19506 appears in every Tenable scan. What information does it provide?

**Technical review:** Plugin availability and successful authenticated inventory collection must be checked. Neither universal plugin presence nor complete collection follows from the opening sentence.

**A. Operating system fingerprint of the scanned host — Not the keyed answer**

OS fingerprinting is a different discovery function; plugin 19506 primarily reports information about the scan execution.

**B. CVSS scores for all vulnerabilities found in the scan — Not the keyed answer**

Plugin 19506 is not a consolidated catalog of all detected vulnerabilities' CVSS scores.

**C. List of all open ports found on the target host — Not the keyed answer**

Port enumeration belongs to discovery plugins rather than the primary function of Nessus Scan Information.

**D. Scan metadata including scanner IP, scan duration, and whether credentials were accepted — Answer key**

Plugin 19506 reports scan execution metadata and credential-related information when present. Do not assume its appearance in every scan or treat accepted credentials alone as proof of complete local collection.

Sources: [Checks — official documentation](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)

## 4. BC-Q004

What is the primary advantage of a credentialed Nessus scan over an uncredentialed scan?

**A. It enables local check plugins to detect missing patches and misconfigurations invisible to network-based checks — Answer key**

Authenticated host access enables local checks of software, patches and configuration that remote unauthenticated probing may not expose.

**B. It runs faster because fewer probe packets are required — Not the keyed answer**

Credentialed checks can require additional work; universally faster execution is not their primary advantage.

**C. It does not require network access to the target host — Not the keyed answer**

A network-based credentialed scan still needs a communication path to the target host.

**D. It generates a higher VPR score for all discovered vulnerabilities — Not the keyed answer**

Authentication improves collection evidence; it does not automatically raise every detected vulnerability's VPR.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 5. BC-Q005

In Tenable.io, what does ACR (Asset Criticality Rating) represent?

**A. The CVSS score of the most critical vulnerability on the asset — Not the keyed answer**

The maximum CVSS severity on a host describes a vulnerability, not the asset's business importance.

**B. A dynamic score from 0–1000 representing overall asset vulnerability exposure — Not the keyed answer**

The 0-1000 exposure scale describes AES rather than ACR.

**C. The number of critical vulnerabilities found on the asset during the last scan — Not the keyed answer**

A count of critical findings measures detected weaknesses and is not an asset's criticality rating.

**D. A 1–10 score reflecting the business importance of an asset, configured by the security team — Answer key**

ACR uses a 1-10 scale for asset business criticality and can be adjusted to reflect organizational context under the applicable licensing.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 6. BC-Q006

AES (Asset Exposure Score) in Tenable.io ranges from 0 to 1000. What two factors primarily determine an asset's AES?

**A. The vulnerabilities present on the asset and the asset's ACR (Asset Criticality Rating) — Answer key**

AES weighs the asset's active weakness exposure, including VPR-related risk, together with its ACR business criticality.

**B. The CVSS scores of all vulnerabilities and the asset's IP address subnet — Not the keyed answer**

A subnet address is not a substitute for the business-criticality input needed in the described asset exposure calculation.

**C. The number of scans performed on the asset and the last scan date — Not the keyed answer**

Scan frequency and recency affect evidence freshness but are not the two primary exposure/criticality factors requested.

**D. The VPR scores of all vulnerabilities and the number of open ports — Not the keyed answer**

VPR contributes vulnerability exposure, but open-port count does not replace the ACR input in the documented combination.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 7. BC-Q007

A Tenable.io remediation campaign is created against a specific set of vulnerabilities. New vulnerabilities discovered after the campaign is created — what happens to them?

**Technical review:** The imported snapshot-campaign model is product/workflow-specific. Do not assume current initiatives have identical membership and update behavior.

**A. They are automatically added to the campaign if they have the same CVE — Not the keyed answer**

The imported campaign model does not automatically expand membership merely because a later finding has the same CVE.

**B. They are NOT automatically added to the campaign; the campaign uses a snapshot of vulnerability data at creation time — Answer key**

This is the answer for the snapshot-based campaign described by the imported key. Verify the actual product and workflow: current Exposure Response initiatives have their own documented selection and update behavior.

**C. They are added to the campaign only if they have a VPR score above 7.0 — Not the keyed answer**

A VPR threshold alone does not establish that newly discovered records are automatically added to the snapshot campaign.

**D. They replace the existing campaign data if they affect the same assets — Not the keyed answer**

New findings do not simply replace historical campaign evidence because the same assets are affected.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 8. BC-Q008

Which Tenable.io scan template is most appropriate for detecting missing Windows patches on domain-joined workstations?

**A. Discovery Scan — Not the keyed answer**

Discovery identifies hosts and available inventory; it is not the focused authenticated missing-patch audit.

**B. Web Application Tests — Not the keyed answer**

Web application testing assesses application issues rather than Windows workstation update inventory.

**C. Credentialed Patch Audit — Answer key**

Credentialed Patch Audit is specifically designed to collect local patch evidence and enumerate missing updates using suitable credentials.

**D. Basic Network Scan — Not the keyed answer**

Basic Network Scan can assess many exposures, but the focused patch-audit template best matches this missing-update objective.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 9. BC-Q009

In Tenable.io, what is the purpose of tagging assets?

**A. To exclude assets from compliance benchmark checks — Not the keyed answer**

A tag does not inherently exclude its assets from compliance checks; exclusions or scan configuration govern that behavior.

**B. To assign VPR scores to specific groups of assets — Not the keyed answer**

Tags group assets and do not directly assign or rewrite calculated VPR scores.

**C. To organize assets into logical groups for filtering, access control, and targeted scanning — Answer key**

Tags create logical asset sets used in filtering, access scope and targeted operational workflows.

**D. To automatically remediate vulnerabilities on tagged assets — Not the keyed answer**

Tagging organizes scope; it does not itself install patches or automatically remediate the tagged assets.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 10. BC-Q010

Which CVSS metric most directly captures whether a vulnerability requires user interaction to be exploited?

**A. User Interaction (UI) — Answer key**

User Interaction explicitly records whether exploitation needs an action by a human user.

**B. Attack Vector (AV) — Not the keyed answer**

Attack Vector describes the attacker's required access path rather than whether a victim must interact.

**C. Privileges Required (PR) — Not the keyed answer**

Privileges Required describes the attacker's existing privileges, not victim user participation.

**D. Confidentiality Impact (C) — Not the keyed answer**

Confidentiality Impact measures the information disclosure consequence rather than the interaction prerequisite.

Sources: [Cvss — official documentation](https://www.first.org/cvss/v3.1/specification-document)

## 11. BC-Q011

What is the purpose of Nessus Agents in Tenable.io?

**Technical review:** Local collection and delivery are separate. Agents still need a supported update/reporting path; permanently isolated operation is not established by this answer.

**A. To monitor network traffic for intrusion detection — Not the keyed answer**

Agents perform host-local assessments; passive traffic analysis and intrusion detection are different functions.

**B. To replace the Tenable.io console for on-premises deployments — Not the keyed answer**

An installed agent remains a sensor and does not replace the VM management console.

**C. To perform web application penetration testing — Not the keyed answer**

Host agent checks are not a replacement for dedicated web application penetration testing.

**D. To scan assets that are offline, behind firewalls, or lacking persistent network connectivity to the scanner — Answer key**

Agents can assess locally when endpoints lack scanner reachability. They still need an appropriate manager communication path to obtain updates and deliver results; permanent isolation requires a separately supported workflow.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 12. BC-Q012

A security analyst wants to filter vulnerabilities in Tenable.io to focus only on those with active known exploits in the wild. Which feature should they use?

**Technical review:** A critical VPR is not proof of exploitation in the wild. The strict requirement calls for explicit exploitation intelligence rather than a score-only filter.

**A. Filter by plugin family 'General' — Not the keyed answer**

The General family is a check grouping, not a filter proving exploitation in the wild.

**B. Filter by scan template type — Not the keyed answer**

A scan template describes collection configuration and does not identify which CVEs have known active exploitation.

**C. VPR filter for vulnerabilities with VPR score 9.0 and above — Answer key**

This is the imported key's best available choice for high threat priority. VPR 9+ does not prove known exploitation; use explicit exploitation intelligence or CISA KEV-related filters for the strict 'only exploited' requirement.

**D. CVSS v3 filter for scores above 9.0 — Not the keyed answer**

A high CVSS score describes technical severity and does not establish that a vulnerability is actively exploited.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 13. BC-Q013

Which compliance benchmarks are natively supported in Tenable.io for configuration auditing?

**A. HIPAA and FERPA only — Not the keyed answer**

The 'only' claim excludes widely used supported hardening audits such as CIS and STIG content.

**B. NIST SP 800-53 and CMMC — Not the keyed answer**

Framework control mappings can be relevant, but they are not the benchmark audit pair identified by this question.

**C. CIS Benchmarks and DISA STIGs — Answer key**

Tenable provides audit content for CIS Benchmarks and DISA STIGs to test supported system hardening requirements.

**D. SOC 2 Type II and ISO 27001 — Not the keyed answer**

Management-system and assurance frameworks are not interchangeable with the specific system configuration benchmark audits requested.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 14. BC-Q014

In Tenable.io, what is the function of the 'Accepted Risk' workflow?

**A. To mark a vulnerability as intentionally accepted, removing it from active remediation tracking for a defined period — Answer key**

Risk acceptance records a deliberate decision to tolerate a finding within a defined scope and, where configured, a time period; it is not a technical fix.

**B. To increase the VPR score of a vulnerability to reflect accepted business risk — Not the keyed answer**

Accepting risk does not directly edit the calculated VPR value.

**C. To delete the vulnerability finding from the scan results permanently — Not the keyed answer**

An acceptance rule changes risk treatment rather than permanently deleting all underlying assessment evidence.

**D. To automatically escalate a vulnerability to a SIEM for incident response — Not the keyed answer**

Risk acceptance and SIEM escalation serve different workflows; accepting a finding does not inherently trigger an incident-response escalation.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 15. BC-Q015

Which plugin family in Nessus contains checks specifically for detecting missing Windows operating system patches?

**A. Windows: Microsoft Bulletins — Answer key**

Windows: Microsoft Bulletins contains checks for missing Microsoft security updates using relevant Windows host evidence.

**B. Service Detection — Not the keyed answer**

Service Detection identifies running services rather than being the dedicated Microsoft patch-check family.

**C. Web Servers — Not the keyed answer**

Web Servers focuses on server software exposures and is not the Windows OS update family requested.

**D. General — Not the keyed answer**

General contains miscellaneous checks and is not the specifically named Microsoft security bulletin family.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 16. BC-Q016

What does the 'Recast Risk' feature in Tenable.io allow a security analyst to do?

**A. Reassign ownership of a vulnerability to a different team member — Not the keyed answer**

Assigning ownership concerns remediation responsibility, not overriding severity.

**B. Move a vulnerability from one remediation campaign to another — Not the keyed answer**

Moving campaign membership changes workflow scope rather than the finding's severity classification.

**C. Change the severity of a vulnerability finding to better reflect the organization's actual risk context — Answer key**

Recast applies a severity override to matching findings so their displayed classification reflects the approved risk treatment.

**D. Automatically rescan an asset to confirm whether a vulnerability was remediated — Not the keyed answer**

Recasting does not execute a scan; verifying a fix requires a separately performed suitable reassessment.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 17. BC-Q017

In Tenable.io, which scan template would you choose to quickly identify live hosts and open ports without performing vulnerability assessment?

**A. Advanced Scan — Not the keyed answer**

Advanced Scan exposes flexible assessment settings; it is not specifically the discovery-only template requested.

**B. Malware Scan — Not the keyed answer**

A malware-focused assessment searches for malicious software rather than limiting the objective to live hosts and ports.

**C. Basic Network Scan — Not the keyed answer**

Basic Network Scan performs vulnerability assessment beyond the initial discovery task.

**D. Discovery Scan — Answer key**

The intended discovery template locates hosts and ports without treating that inventory as a full vulnerability assessment.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 18. BC-Q018

A Tenable.io user wants to export vulnerability data for integration with a SIEM. Which export format provides the most flexibility for machine processing?

**A. HTML — Not the keyed answer**

HTML is primarily a presentation format; it is less direct than a tabular export for the SIEM ingestion task described.

**B. CSV — Answer key**

Among these choices, CSV provides a structured tabular representation that scripts and SIEM importers can process directly.

**C. PDF — Not the keyed answer**

PDF is designed for document presentation rather than direct record-level ingestion.

**D. DOCX — Not the keyed answer**

DOCX is a document format and is not the most suitable structured export among the listed options.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 19. BC-Q019

What is the key difference between CVSS v2 and CVSS v3 in Tenable vulnerability reporting?

**A. CVSS v3 is calculated by Tenable internally while CVSS v2 comes from the NVD — Not the keyed answer**

The difference is in the scoring model, not a universal rule that Tenable calculates one version internally while obtaining the other from NVD.

**B. CVSS v3 added Scope and User Interaction metrics not present in v2, providing more granular severity assessment — Answer key**

CVSS v3 explicitly separates user interaction and introduces Scope, improving how prerequisite and security-boundary effects are described.

**C. CVSS v3 only applies to web application vulnerabilities — Not the keyed answer**

CVSS v3 can score vulnerabilities in many technologies, not only web applications.

**D. CVSS v3 uses a 0–100 scale while CVSS v2 uses 0–10 — Not the keyed answer**

Both versions use a 0-10 scoring range; CVSS v3 does not use a 0-100 base scale.

Sources: [Cvss — official documentation](https://www.first.org/cvss/v3.1/specification-document)

## 20. BC-Q020

Which Tenable.io feature allows integration with ServiceNow to automatically create tickets for detected vulnerabilities?

**A. Remediation campaigns only — Not the keyed answer**

A remediation campaign alone is not the configured ServiceNow connection that sends or synchronizes ticket-related data.

**B. Accepted Risk workflow — Not the keyed answer**

Risk acceptance records a treatment decision rather than creating the ServiceNow integration.

**C. Nessus scan policies — Not the keyed answer**

A Nessus policy defines checks; it does not itself configure ServiceNow ticket synchronization.

**D. Connectors (Tenable.io Integrations) — Answer key**

A suitably configured Tenable/ServiceNow integration supports the ticketing workflow. Verify the specific application and module because asset-CMDB and vulnerability/ITSM connectors serve different purposes.

Sources: [Snow — official documentation](https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm)

## 21. BC-Q021

In Tenable.io, which asset source provides continuous, real-time vulnerability data for endpoints that frequently move between networks?

**Technical review:** Agent scans can follow roaming endpoints, but scheduled or triggered collection is not continuous real-time vulnerability streaming.

**A. Passive Vulnerability Scanner (PVS) — Not the keyed answer**

A passive monitor only sees traffic at its observation point and can miss roaming endpoints outside that view.

**B. Cloud Connector — Not the keyed answer**

A cloud connector discovers supported provider assets; it is not the general local assessment client for a roaming laptop.

**C. Nessus Agent — Answer key**

An installed agent follows the endpoint and reports locally collected results when connectivity is available. Its scans are scheduled or triggered, not a guarantee of continuous real-time vulnerability streaming.

**D. Virtual Scanner — Not the keyed answer**

A virtual network scanner still depends on reaching the mobile endpoint from its own network location.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 22. BC-Q022

What does the Tenable.io 'Lumin' capability provide?

**A. Risk-based vulnerability management including Cyber Exposure score, ACR, AES, and benchmarking against industry peers — Answer key**

Lumin provides exposure scoring and benchmarking capabilities, including asset criticality and exposure context under the applicable licensing.

**B. Passive network traffic analysis for threat detection — Not the keyed answer**

Passive network traffic analysis is a sensor function rather than the exposure scoring capability described here.

**C. Cloud security posture management for AWS and Azure — Not the keyed answer**

Cloud security posture assessment is a separate product capability and does not define Lumin's exposure metrics.

**D. Automated penetration testing of discovered vulnerabilities — Not the keyed answer**

Exposure scoring prioritizes and measures risk; it is not an automated penetration-test engine.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 23. BC-Q023

How does Tenable.io handle assets that have not been scanned for an extended period?

**Technical review:** Managed asset status, licensing age and automatic deletion are distinct mechanisms. Current Asset Age Out can purge the asset and associated findings rather than always retaining an inactive historical record.

**A. Assets are moved to a quarantine repository requiring manual review — Not the keyed answer**

The question does not establish a quarantine repository workflow for stale VM assets.

**B. Assets are permanently deleted from the platform after 30 days without scanning — Not the keyed answer**

There is no universal rule here permanently deleting all assets exactly 30 days after their last scan.

**C. Assets are marked as 'inactive' after a configurable period of no scan data and are excluded from active vulnerability counts — Answer key**

This is the imported answer, but its inactive-retention claim is not a universal current rule. Managed status, license aging and configured Asset Age Out are distinct; Asset Age Out can permanently delete an asset and its data.

**D. Assets are automatically escalated to Critical severity in all dashboards — Not the keyed answer**

Lack of recent assessment does not automatically set every vulnerability or asset to Critical severity.

Sources: [Aging — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-networks.htm)

## 24. BC-Q024

Which Tenable.io dashboard view is best for tracking remediation progress against a defined SLA across an entire program?

**A. The raw CSV export sorted by CVSS score — Not the keyed answer**

A severity-sorted export contains useful data but is not a purpose-built program dashboard tracking deadlines and remediation progress.

**B. The plugin family summary report — Not the keyed answer**

A plugin family summary groups checks and does not inherently show SLA performance across the program.

**C. The Nessus scan results view filtered by date — Not the keyed answer**

A date-filtered individual scan view is narrower than program-level SLA and remediation tracking.

**D. Vulnerability Management dashboard with remediation tracking widgets and SLA metrics — Answer key**

Program dashboards with appropriate remediation and SLA widgets provide aggregate progress views; confirm each widget's scope and metric configuration.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 25. BC-Q025

In Tenable.io, what is the role of 'Network Objects' in scan configuration?

**Technical review:** Reusable target collections and VM Networks are different concepts. Confirm the product/version before adopting the imported Network Objects terminology.

**A. They configure the communication protocol used between the scanner and Tenable.io cloud — Not the keyed answer**

Cloud communication protocols are sensor connection settings, not the reusable target collections described by the imported key.

**B. They define firewall rules that Tenable.io recommends for hardening — Not the keyed answer**

A collection of scan targets does not itself create or recommend firewall hardening rules.

**C. They define named IP address ranges or CIDR blocks that can be reused across multiple scan targets — Answer key**

The imported key intends reusable named address collections. Confirm the product/version terminology: current VM Networks primarily provide asset identity context and should not be assumed to be reusable CIDR target lists.

**D. They identify network devices like switches and routers for topology mapping — Not the keyed answer**

Topology mapping of switches and routers is a different purpose from the reusable target-scope concept intended by the question.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 26. BC-Q026

A CVSS v3 vulnerability has an Attack Vector of 'Network' and Privileges Required of 'None'. What does this indicate about the exploitability?

**A. The vulnerability can only be exploited by a physical presence at the machine — Not the keyed answer**

Physical presence describes a different Attack Vector and conflicts with AV:Network.

**B. The vulnerability requires local network access and an authenticated session — Not the keyed answer**

PR:None does not require a prior authenticated session, and AV:Network is not limited to adjacent-network access.

**C. The vulnerability requires administrative privileges on an adjacent network device — Not the keyed answer**

Administrative privileges contradict PR:None, and adjacency is not the Network vector specified.

**D. The vulnerability can be exploited remotely over the network without any prior authentication — Answer key**

AV:Network permits exploitation through the network path and PR:None requires no prior privileges. Other metrics still determine interaction and complexity; network scoring does not guarantee actual internet reachability.

Sources: [Cvss — official documentation](https://www.first.org/cvss/v3.1/specification-document)

## 27. BC-Q027

What best describes the function of the Tenable.io API key?

**A. It authenticates programmatic access to Tenable.io for automation, integrations, and third-party tools — Answer key**

An access/secret key pair authenticates permitted API operations for automation and integrations using the associated user's privileges.

**B. It is used as the password for Nessus scanner login during cloud pairing — Not the keyed answer**

A user API key is not the password used to log into a scanner's local web interface.

**C. It replaces the Nessus linking key for on-premises scanner registration — Not the keyed answer**

Sensor registration uses the appropriate linking mechanism; user API credentials do not replace the sensor linking key.

**D. It encrypts scan results stored in the Tenable.io cloud platform — Not the keyed answer**

API authentication credentials are not the mechanism used to encrypt stored scan results.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 28. BC-Q028

Which Tenable.io feature allows setting a maximum number of hosts scanned simultaneously to reduce impact on network performance?

**A. Asset tagging with a 'slow-scan' tag — Not the keyed answer**

A descriptive slow-scan tag does not set execution concurrency unless a separate configured workflow interprets it.

**B. Performance options in the Advanced Scan template (Max Simultaneous Hosts) — Answer key**

Performance settings such as Max Simultaneous Hosts control how many targets the scan assesses concurrently.

**C. VPR threshold setting in the scan policy — Not the keyed answer**

A VPR threshold filters priority information and does not set the scanner's host concurrency.

**D. Scan zone priority configuration — Not the keyed answer**

Zone prioritization is not the specific simultaneous-host performance control requested.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 29. BC-Q029

What type of Tenable.io scan is most appropriate for an environment where network-based scanning would trigger IDS/IPS alerts?

**Technical review:** Agents avoid remote scan probes, but still generate communication for updates and uploads. Zero network traffic or zero IDS/IPS alerts is not guaranteed.

**A. Credentialed Patch Audit scan run from the corporate network — Not the keyed answer**

A remote credentialed audit still connects to target services and can produce network activity visible to detection controls.

**B. Agent-based scan using Nessus Agents installed on the endpoints — Answer key**

An agent performs the checks locally and avoids the remote probe pattern. It still communicates for updates and results, so this is not a guarantee of zero network traffic or zero alerts.

**C. Basic Network Scan with all plugins enabled — Not the keyed answer**

A full network scan with enabled plugins sends remote probes and can trigger the IDS/IPS concern described.

**D. Discovery scan with SYN scanning enabled — Not the keyed answer**

SYN discovery still sends observable probing traffic even though its assessment objective is narrower.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 30. BC-Q030

In Tenable.io, what does the 'Severity' filter Critical refer to in terms of CVSS score?

**Technical review:** The stated score band applies to CVSS v3. General Settings also supports other severity metrics, so tenant configuration must be checked.

**A. Any vulnerability with an active exploit in Metasploit — Not the keyed answer**

Exploit framework availability is threat intelligence, not the numeric CVSS v3 Critical threshold.

**B. CVSS v3 score of 9.0 to 10.0 — Answer key**

Under CVSS v3 severity mapping, Critical covers scores from 9.0 through 10.0. Verify that the tenant or view actually uses CVSS rather than a different configured metric.

**C. CVSS v3 score of 7.0 to 8.9 — Not the keyed answer**

CVSS v3 scores from 7.0 through 8.9 are High, not Critical.

**D. CVSS v3 score of 4.0 to 6.9 — Not the keyed answer**

CVSS v3 scores from 4.0 through 6.9 are Medium, not Critical.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm), [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 31. BC-Q031

Which scan configuration change would most effectively reduce false positives for missing patch detection in Tenable.io?

**A. Ensuring authentication credentials are valid and the scan uses the Credentialed Patch Audit template — Answer key**

Valid credentials, sufficient privileges and successful local patch inventory improve missing-update detection accuracy; confirm collection evidence as well as authentication.

**B. Increasing the scan frequency to daily — Not the keyed answer**

Scanning more often repeats the same evidence problem if the credentials or local collection remain broken.

**C. Adding more target IP addresses to the scan scope — Not the keyed answer**

Adding targets changes scope but does not improve the accuracy of patch inventory on the affected host.

**D. Disabling the Windows plugin family — Not the keyed answer**

Disabling the relevant family removes detection coverage instead of correcting the source of inaccurate results.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 32. BC-Q032

What is the maximum number of scanners supported in a single Tenable.io account?

**Technical review:** Verify current account entitlements and documented service limits. The imported wording is not evidence of unlimited sensor capacity.

**A. 100 scanners across all accounts globally — Not the keyed answer**

The stated 100-scanner global limit is not the account-specific sizing principle intended by the imported key.

**B. Determined by licensing tier; no fixed universal maximum — Answer key**

The imported key intends that deployment scale be checked against entitlements and applicable service limits. Do not treat this wording as proof that every account has unlimited scanners or no technical limits.

**C. 10 scanners per account — Not the keyed answer**

The imported key does not establish a universal ten-scanner limit; check current account and sensor constraints.

**D. 1 scanner per subscription — Not the keyed answer**

A one-scanner-only subscription rule does not describe the distributed assessment model intended by the question.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 33. BC-Q033

When Tenable.io shows a vulnerability as 'Fixed', what does this status indicate?

**A. The vulnerability's CVE has been retracted by the NVD — Not the keyed answer**

CVE publication changes are distinct from an asset finding's assessment lifecycle state.

**B. The vulnerability was detected in a previous scan but was NOT found in the most recent scan of the same asset — Answer key**

Fixed indicates that a previously detected issue is no longer found by a qualifying subsequent assessment of the asset.

**C. The vulnerability was manually marked as remediated by a security analyst — Not the keyed answer**

A workflow declaration alone is not equivalent to the documented assessment-based verification of mitigation.

**D. The vulnerability's plugin was disabled in the scan policy — Not the keyed answer**

Disabling a plugin removes a check and does not itself provide the comparable evidence needed to establish a fix.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 34. BC-Q034

Which Tenable.io feature enables role-based access control to restrict which users can view or manage specific assets?

**A. User permissions with tag-based access control — Answer key**

Permissions scoped using asset tags constrain which resources a user can view or act on, alongside the user's functional role.

**B. Scan zone assignments per user — Not the keyed answer**

A sensor or zone assignment is not the general tag-based authorization mechanism controlling asset visibility.

**C. VPR thresholds in user profiles — Not the keyed answer**

A VPR threshold filters risk information and is not an authorization boundary.

**D. ACR assignments on individual assets — Not the keyed answer**

ACR rates business criticality; assigning it does not grant or restrict a user's access.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 35. BC-Q035

Which Tenable.io integration allows discovered cloud assets (EC2, Azure VMs) to be automatically imported into the asset inventory?

**A. Manual CSV import from the cloud provider billing console — Not the keyed answer**

Manual billing exports are not automatic asset discovery through the provider API.

**B. Cloud Connectors for AWS, Azure, and GCP — Answer key**

Supported cloud connectors use provider APIs to discover and import cloud asset inventory information.

**C. Passive Vulnerability Scanner network tap in the cloud VPC — Not the keyed answer**

Passive visibility from a cloud traffic feed does not replace the specified cloud provider API integration.

**D. Nessus Agent deployment on cloud instances only — Not the keyed answer**

Agents supply local assessment evidence, but deploying them is not the connector-based inventory import requested.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 36. BC-Q036

In Tenable vulnerability management terminology, what does 'mean time to remediate' (MTTR) measure?

**A. The average time it takes Nessus to complete a scan of a single host — Not the keyed answer**

Host scan duration measures assessment execution performance rather than time to resolve detected vulnerabilities.

**B. The average CVSS score of all vulnerabilities remediated in a reporting period — Not the keyed answer**

An average severity score measures the risk mix, not elapsed remediation time.

**C. The average number of days between when a vulnerability is discovered and when it is confirmed fixed — Answer key**

MTTR measures average elapsed time from detection to confirmed remediation under the program's defined timing and verification rules.

**D. The time between plugin updates and detection of new vulnerabilities — Not the keyed answer**

The delay between a feed update and detection concerns detection freshness rather than time to remediate a finding.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 37. BC-Q037

A Nessus scan reports plugin output for plugin 10397. What general category does this plugin typically represent?

**Technical review:** The official plugin 10397 is Microsoft Windows SMB LanMan Pipe Server Listing Disclosure, not SMB file-share enumeration. None of the descriptions precisely names its behavior; the imported key is retained for scoring.

**A. MySQL database vulnerability — Not the keyed answer**

Plugin 10397 is a Windows SMB/LANMAN information-disclosure check, not a MySQL vulnerability check.

**B. DNS zone transfer attempt — Not the keyed answer**

DNS zone transfer is a different protocol and finding type from this Windows SMB plugin.

**C. SSL/TLS certificate expiration — Not the keyed answer**

Certificate expiration concerns TLS certificates, not the LANMAN pipe information disclosed by plugin 10397.

**D. Windows file share enumeration (SMB) — Answer key**

The imported key selects the Windows/SMB option, but its share-enumeration description is inaccurate. The official plugin is Microsoft Windows SMB LanMan Pipe Server Listing Disclosure and retrieves a browse list of nearby Windows systems.

Sources: [Plugin — official documentation](https://www.tenable.com/plugins/nessus/10397)

## 38. BC-Q038

What is the purpose of the Tenable.io 'Exclusions' feature in scan configuration?

**A. To prevent specific IP addresses or ranges from being included in a scan even if they fall within the target range — Answer key**

An active scan exclusion skips matching IP targets even when they are included in the broader network scan scope.

**B. To automatically accept risk for vulnerabilities in excluded ranges — Not the keyed answer**

Skipping a target is an assessment decision and does not automatically accept the risk of existing findings.

**C. To remove old scan data from the Tenable.io asset database — Not the keyed answer**

Exclusion controls assessment participation rather than deleting historical asset results.

**D. To block specific plugin families from running on all scanners — Not the keyed answer**

Plugin family selection controls checks; target exclusions are not a universal family-disable setting.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 39. BC-Q039

Which of the following is a valid use case for Tenable.io's 'Advanced Scan' template over the 'Basic Network Scan' template?

**A. Performing passive traffic analysis instead of active probing — Not the keyed answer**

Changing the active scan template does not turn Nessus into a passive traffic monitor.

**B. Scanning web applications with application-layer fuzzing — Not the keyed answer**

Dedicated web application assessment has a different objective; Advanced Network Scan is not inherently an application fuzzing tool.

**C. Running faster scans with fewer plugins enabled — Not the keyed answer**

Fewer plugins may alter runtime, but speed alone does not define the advantage of the more configurable template.

**D. Customizing performance settings, enabling specific compliance audits, or adding custom credentials not available in the Basic template — Answer key**

Advanced Scan exposes granular assessment settings for cases where the simpler template lacks the required configuration; verify which options each current template offers.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 40. BC-Q040

In Tenable.io, what is the role of a 'Linked Scanner' compared to a 'Cloud Scanner'?

**A. A Linked Scanner connects to external threat intelligence; a Cloud Scanner handles internal network scanning — Not the keyed answer**

This reverses the deployment distinction and confuses sensor management with external threat intelligence.

**B. A Linked Scanner is a customer-managed on-premises Nessus instance; a Cloud Scanner is managed by Tenable in their cloud infrastructure — Answer key**

A linked scanner is customer-managed Nessus infrastructure associated with VM; a cloud scanner is Tenable-managed scanning infrastructure.

**C. A Linked Scanner is used only for agent-based scans; a Cloud Scanner handles network scans — Not the keyed answer**

Linked Nessus scanners can perform network assessments and are not restricted to agent-based scanning.

**D. A Linked Scanner requires a dedicated physical appliance; a Cloud Scanner runs as a virtual machine — Not the keyed answer**

Customer-managed Nessus can run on supported physical or virtual systems; a dedicated physical appliance is not mandatory.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 41. BC-Q041

What does the CVSS v3 'Scope' metric (S) describe?

**A. The geographic scope of systems affected by the vulnerability — Not the keyed answer**

Scope is a security-authority boundary concept, not a geographic footprint.

**B. The number of systems currently vulnerable in the environment — Not the keyed answer**

The number of vulnerable systems does not define the CVSS v3 Scope metric.

**C. Whether the vulnerability is applicable to cloud or on-premises systems — Not the keyed answer**

Cloud versus on-premises hosting is not the distinction encoded by Scope.

**D. Whether a vulnerability's impact extends beyond the vulnerable component to affect other components — Answer key**

Scope describes whether exploitation affects resources beyond the vulnerable component's security authority, distinguishing unchanged and changed scope.

Sources: [Cvss — official documentation](https://www.first.org/cvss/v3.1/specification-document)

## 42. BC-Q042

A security team wants to ensure vulnerability data stays current for a group of assets that move between office and remote networks. What is the optimal Tenable.io configuration?

**A. Configure VPN-only scanning policies that run when endpoints connect to corporate VPN — Not the keyed answer**

VPN-only collection can miss endpoints that do not connect during the scheduled network assessment.

**B. Deploy Nessus Agents on all mobile assets and configure agent scan intervals — Answer key**

Agents assess on the mobile endpoint and synchronize results when communication is available, reducing dependence on central scanner reachability.

**C. Use a cloud scanner to scan the home ISP ranges of all remote workers — Not the keyed answer**

A home ISP range is not a reliable or appropriately scoped substitute for assessing the employee's specific endpoint.

**D. Schedule daily network scans of all office IP ranges at maximum scan speed — Not the keyed answer**

Office address ranges omit endpoints currently on remote networks, regardless of the scan's speed.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 43. BC-Q043

Which Tenable.io report format is most appropriate for delivering a vulnerability summary to C-level executives?

**A. Executive Summary PDF report with high-level risk metrics and trend charts — Answer key**

An executive summary emphasizes program risk, trends and remediation progress in a format appropriate for a high-level audience.

**B. Raw CSV export with all vulnerability fields — Not the keyed answer**

A raw record export can overwhelm an executive audience without the requested aggregation and context.

**C. Full detailed vulnerability report with plugin output per host — Not the keyed answer**

Detailed per-host plugin output is useful to technical remediation teams rather than being the best executive summary.

**D. Nessus scan results export in .nessus XML format — Not the keyed answer**

Nessus XML is a technical assessment export and is not the most suitable executive communication format.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 44. BC-Q044

What is the main benefit of using Tenable.io's built-in ticketing integrations (e.g., ServiceNow, JIRA) for remediation?

**A. It replaces the need for a vulnerability management program by handling remediation automatically — Not the keyed answer**

Ticket integration coordinates work but does not automatically replace the program, patch systems or validate every fix.

**B. Vulnerabilities are automatically converted to tickets routed to the appropriate remediation team without manual data transfer — Answer key**

Configured integrations transfer qualifying finding context into tickets and route work through the appropriate remediation process without manual export/import.

**C. The integration allows ServiceNow to perform vulnerability scans on behalf of Tenable.io — Not the keyed answer**

A ticketing integration does not turn ServiceNow into the Nessus assessment engine.

**D. It encrypts vulnerability data before sending it to ServiceNow for compliance purposes — Not the keyed answer**

Transport security may be relevant, but encryption alone is not the main workflow benefit requested.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 45. BC-Q045

Which action should a Tenable.io administrator take after rotating Windows service account credentials used for credentialed scans?

**Technical review:** After rotation, verify local inventory and checks as well as accepted credentials; plugin 19506 alone does not prove full collection.

**A. Recreate all scan policies from scratch with the new credentials — Not the keyed answer**

Rotating credentials does not ordinarily require rebuilding every assessment policy from scratch.

**B. Update the stored credentials in the Tenable.io credential manager and verify plugin 19506 confirms successful authentication on the next scan — Answer key**

Update the credential source actually used by the scans and verify successful authenticated collection afterward, including patch inventory rather than relying on plugin 19506 alone.

**C. Disable Windows plugin families until the credential issue is resolved — Not the keyed answer**

Disabling Windows checks removes evidence and does not restore the rotated account's access.

**D. Increase the VPR threshold to compensate for temporarily uncredentialed scan results — Not the keyed answer**

Changing priority thresholds cannot compensate for failed authentication or missing local assessment data.

Sources: [Checks — official documentation](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)

## 46. BC-Q046

In Tenable.io Predictive Prioritization, which of the following signals most increases a vulnerability's VPR score relative to its base CVSS?

**A. The vulnerability affecting a server with ACR of 10 — Not the keyed answer**

ACR is an asset-specific criticality input and does not directly customize the vulnerability's globally calculated VPR.

**B. Availability of functional exploit code in a public exploit framework like Metasploit — Answer key**

Functional exploit code provides concrete exploitability evidence relevant to VPR prioritization; no single signal guarantees a fixed score increase.

**C. The vulnerability receiving a CVE published by the NVD — Not the keyed answer**

A CVE identifier alone does not supply the same practical exploitation evidence as functional exploit code.

**D. The vulnerability having been discovered more than 12 months ago — Not the keyed answer**

Age by itself does not establish stronger current exploitation signals or a universally higher VPR.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 47. BC-Q047

A compliance audit in Tenable.io produces a 'FAILED' result for a CIS benchmark check. What does this indicate?

**A. The system's configuration does not meet the specific CIS hardening requirement being tested — Answer key**

With valid collected evidence, Failed indicates that the tested configuration did not satisfy the selected CIS requirement.

**B. The target asset does not have a CIS benchmark applicable to its operating system — Not the keyed answer**

Failure of a particular control does not mean that no applicable operating-system benchmark exists.

**C. The Nessus scanner lost connectivity to the target during the compliance check — Not the keyed answer**

A connection problem can affect evidence collection, but it is not the definition of a validated Failed configuration result.

**D. The compliance plugin requires root/administrator credentials that were not supplied — Not the keyed answer**

Insufficient credentials require collection diagnosis and do not universally define every Failed audit outcome.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 48. BC-Q048

What is the purpose of Tenable.io's 'Groups' feature?

**A. To create custom CVSS scoring groups for different business units — Not the keyed answer**

User groups organize access; they do not create separate custom CVSS scoring formulas.

**B. To group similar vulnerabilities for bulk remediation — Not the keyed answer**

Grouping vulnerability work for remediation is a different concept from organizing users and their permissions.

**C. To define IP address ranges for scanner assignment — Not the keyed answer**

Sensor target ranges and Network associations are not the purpose of user access groups.

**D. To organize users and control which scan results and assets they can access — Answer key**

Groups organize users so appropriate permissions can be assigned consistently to the scans, assets and results they need.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 49. BC-Q049

Which Tenable.io feature provides a single prioritized list of vulnerabilities ranked by combined risk across all scanned assets?

**A. Vulnerability Workbench filtered and sorted by VPR — Answer key**

A cross-asset findings/workbench view sorted by VPR supports organization-wide vulnerability triage; local business context still needs separate consideration.

**B. Plugin family summary report — Not the keyed answer**

A plugin family summary groups checks rather than providing the requested prioritized cross-asset finding list.

**C. Asset detail page sorted by last scan date — Not the keyed answer**

One asset's last-scan date is a freshness view, not a program-wide vulnerability priority ranking.

**D. Individual scan results view per scanner — Not the keyed answer**

An individual scanner's results do not inherently aggregate all relevant findings across the organization.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 50. BC-Q050

In Tenable.io, which user role has the ability to create and manage scan policies but cannot modify user accounts?

**Technical review:** Both Standard and Scan Manager can meet the stated condition in current documentation. The question needs an own-scope versus broader management distinction to have one unique answer; the imported key is retained.

**A. Scan Manager — Not the keyed answer**

Current documentation also gives Scan Manager policy/scan management without user administration, so this option meets the stated condition too. The item is not uniquely answerable as written.

**B. Administrator — Not the keyed answer**

Administrator includes user management, which conflicts with the stated restriction.

**C. Standard User — Answer key**

The imported key selects Standard for managing its own scans and templates without user administration. Scan Manager can also satisfy the wording, so distinguish own-resource management from broader scan oversight.

**D. Read-Only User — Not the keyed answer**

Read-Only users can inspect allowed data but cannot create and manage scan policies.

Sources: [Roles — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/TenableRolePrivileges.htm)

## 51. BC-Q051

What does the 'Recast Risk' feature allow a Tenable.io analyst to do that 'Accepted Risk' does not?

**A. Change the severity classification of a vulnerability finding permanently or for a defined period — Answer key**

Recast changes the severity classification of matching findings, whereas risk acceptance records a decision to tolerate the exposure.

**B. Remove the vulnerability from all scan results retroactively — Not the keyed answer**

Recasting does not retroactively remove the vulnerability from all historical scan evidence.

**C. Generate a public disclosure notification to the vendor — Not the keyed answer**

Vendor disclosure is a separate communication workflow, not the effect of a severity recast.

**D. Assign the vulnerability to a different asset automatically — Not the keyed answer**

A severity override does not reassign the technical finding to a different asset.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 52. BC-Q052

Which scan configuration ensures that Nessus does not scan ports below 1024 on sensitive production servers?

**Technical review:** A port-scanner range controls discovery probing, but authenticated or plugin-specific connections can have additional ports. Do not interpret it as a universal traffic guarantee.

**A. Custom port range specification in the scan policy, excluding ports 1–1023 — Answer key**

A custom port range excluding 1-1023 limits the port-scanning phase to the intended higher-numbered ports. It is not a universal guarantee against every plugin connection; review check-specific access too.

**B. Applying the Discovery Scan template instead of Basic Network Scan — Not the keyed answer**

Discovery can still probe lower-numbered ports unless its actual port configuration excludes them.

**C. Enabling safe checks in the scan policy — Not the keyed answer**

Safe Checks avoids potentially harmful checks but does not itself define the requested port range.

**D. Setting the ACR of production servers to 10 — Not the keyed answer**

Asset criticality affects prioritization and does not control which ports the scanner probes.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 53. BC-Q053

What is the function of 'Safe Checks' in a Nessus scan policy?

**A. It restricts scans to port 443 for encrypted traffic analysis only — Not the keyed answer**

Safe Checks is not an encrypted-traffic-only scan restricted to TCP 443.

**B. It disables potentially disruptive plugins that could crash services or cause system instability — Answer key**

Safe Checks avoids checks known to risk adversely affecting the host; overall load and target sensitivity still require assessment.

**C. It limits the scan to assets with an ACR below 5 — Not the keyed answer**

ACR describes business importance and is not the selection threshold defining Safe Checks.

**D. It automatically applies compensating controls to failing compliance checks — Not the keyed answer**

Safe Checks does not deploy compensating controls or automatically change failing target configuration.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 54. BC-Q054

A Tenable.io dashboard widget shows '847 Critical vulnerabilities' across all assets. An executive asks for context. Which additional metric best communicates remediation progress?

**A. Mean Time to Remediate (MTTR) trend over the last 90 days — Answer key**

An MTTR trend adds evidence about remediation speed over time, complementing the current outstanding critical count.

**B. The number of Nessus scanners currently online — Not the keyed answer**

The number of online sensors measures collection infrastructure, not the rate at which vulnerabilities are resolved.

**C. Total number of assets scanned this week — Not the keyed answer**

Assessment volume adds coverage context but does not directly measure remediation progress.

**D. The CVSS score distribution across all vulnerabilities — Not the keyed answer**

A severity distribution describes the risk mix rather than how quickly the organization closes findings.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 55. BC-Q055

When configuring a Tenable.io scan, what is the purpose of the 'Max Simultaneous Checks per Host' setting?

**A. It defines how many remediation campaigns can reference the same host — Not the keyed answer**

Campaign references are a workflow relationship and not a plugin execution concurrency setting.

**B. It controls how many users can view a specific host's vulnerability data simultaneously — Not the keyed answer**

The number of users viewing findings does not determine how many checks run against a target.

**C. It limits the number of plugin checks running concurrently against a single target host to reduce system load on that host — Answer key**

This setting limits concurrent plugin checks against each host, supporting control of scan-induced resource pressure.

**D. It sets the maximum number of CVEs a single host can report in one scan — Not the keyed answer**

It does not cap the number of CVEs that a host can report; it limits simultaneous assessment work.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 56. BC-Q056

Which Tenable.io feature allows creating a persistent saved view of the Vulnerability Workbench with specific filters applied?

**A. Plugin family suppression rules — Not the keyed answer**

Plugin suppression changes assessment or result scope; it does not save a workbench query and view.

**B. ACR threshold override in user profile settings — Not the keyed answer**

An ACR override changes asset criticality rather than preserving a set of analyst filters.

**C. Scheduled scan reports with workbench filter options — Not the keyed answer**

A scheduled report is a generated document workflow, not the saved interactive workbench view requested.

**D. Saved search or custom dashboard widget configured with workbench filters — Answer key**

A saved search/view or appropriately configured dashboard widget preserves the intended filtering configuration for repeat use.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 57. BC-Q057

Which Tenable.io integration enables automatic asset synchronization from an enterprise CMDB (Configuration Management Database)?

**A. ServiceNow CMDB connector via the Tenable.io integration framework — Answer key**

The appropriately configured ServiceNow CMDB integration synchronizes asset/CI information; verify which application and supported direction are being used.

**B. Nessus Agent deployment to all CMDB-tracked assets — Not the keyed answer**

Agent deployment collects host evidence but does not by itself synchronize the enterprise CMDB.

**C. Manual IP range entry in Tenable.io network settings — Not the keyed answer**

Entering target ranges manually is not automatic record synchronization with the CMDB.

**D. Cloud connector configured for on-premises LDAP — Not the keyed answer**

A cloud-provider connector is not a generic on-premises LDAP-to-CMDB synchronization mechanism.

Sources: [Snow — official documentation](https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm)

## 58. BC-Q058

What is the recommended approach when a Tenable.io scan discovers a vulnerability on a PCI-in-scope server with a CVSS score of 9.8 but the asset team reports the vulnerable service is not running?

**Technical review:** A stopped service alone does not establish a false positive. Investigate the original detection and applicable PCI validation/dispute requirements before approving a treatment.

**A. Delete the asset from Tenable.io to clear the finding — Not the keyed answer**

Deleting the asset hides evidence and does not establish whether the detection or compliance interpretation was wrong.

**B. Accept the risk automatically using the Accepted Risk workflow — Not the keyed answer**

Automatic acceptance without investigation omits the required evidence and approved treatment decision.

**C. Increase the server's ACR to reflect the higher risk finding — Not the keyed answer**

ACR is asset business criticality; increasing it does not validate whether the vulnerability was correctly detected.

**D. Submit a false positive dispute or use Recast Risk with evidence documentation that the service is not running — Answer key**

Investigate and document the detection and use the applicable dispute or approved treatment process. A stopped service is not, by itself, proof of a false positive, and recasting does not automatically satisfy PCI requirements.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm), [Checks — official documentation](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)

## 59. BC-Q059

Which Tenable.io feature enables vulnerability prioritization based on whether the organization has already deployed compensating controls such as a WAF or IPS signature?

**A. Compliance benchmark override for WAF-protected assets — Not the keyed answer**

Changing a compliance result is a different operation from contextual treatment of a vulnerability finding.

**B. Recast Risk with contextual notes documenting the compensating control — Answer key**

A documented, approved recast can adjust finding severity to reflect a verified compensating control while retaining the underlying evidence.

**C. ACR reduction for assets protected by WAF — Not the keyed answer**

Reducing asset business criticality is not a substitute for evaluating the specific vulnerability's compensating control.

**D. VPR automatic adjustment when WAF integration is active — Not the keyed answer**

VPR is globally calculated from vulnerability/threat information; it does not automatically incorporate every organization's WAF deployment.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 60. BC-Q060

When does Tenable.io update a vulnerability's VPR score after initial publication?

**A. VPR is fixed at the time the CVE is published and never changes — Not the keyed answer**

VPR is dynamic rather than permanently fixed at CVE publication.

**B. VPR updates quarterly on Tenable's plugin feed release schedule — Not the keyed answer**

The documented VPR update cadence is daily, not a quarterly plugin-feed-only schedule.

**C. VPR is recalculated daily as threat intelligence signals change, such as new exploit code being published — Answer key**

Daily VPR recalculation incorporates changing threat information rather than relying solely on the original technical score.

**D. VPR is updated only when the NVD publishes a revised CVSS score — Not the keyed answer**

Threat developments can change VPR independently of whether NVD revises the CVSS score.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 61. BC-Q061

A team runs a Host Discovery scan before building its quarterly vulnerability scan scope. How do assets found only by this discovery scan affect Tenable Vulnerability Management licensing?

**A. They immediately count as licensed assets as soon as any IP address is discovered — Not the keyed answer**

Discovery alone does not immediately consume the vulnerability-assessment asset license described in the question.

**B. They count only if the asset is later added to a dashboard widget — Not the keyed answer**

Adding a widget changes presentation and is not the licensing trigger for a discovered asset.

**C. They do not count toward the license until they are assessed by non-discovery vulnerability plugins — Answer key**

Discovery-only assets are excluded from assessment license counting; later vulnerability assessment or other applicable licensed activity must be considered separately.

**D. They count only if the discovery scan finds at least one open TCP port — Not the keyed answer**

An open port discovered in an inventory scan does not, by itself, convert the discovery activity into the relevant vulnerability assessment.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 62. BC-Q062

A scan owner sets Scan Results to 'Keep private' for a sensitive troubleshooting scan. What is the most important operational effect of that setting?

**A. The scan results are automatically deleted after the scanner uploads them — Not the keyed answer**

Keep private controls publication into the common findings views; it does not mean results are immediately deleted after upload.

**B. The scanner runs only discovery plugins and disables all vulnerability plugins — Not the keyed answer**

The setting concerns result handling, not automatically replacing the selected plugins with discovery-only checks.

**C. The scan results are hidden from dashboards, reports, and workbenches and do not update vulnerability states — Answer key**

Private results remain directly accessible from the scan but do not update dashboard/workbench findings or their vulnerability lifecycle states.

**D. The scan still updates dashboard findings, but only administrators can see them — Not the keyed answer**

The described setting prevents shared finding-state updates rather than merely restricting already published dashboard findings to administrators.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 63. BC-Q063

Which Tenable Vulnerability Management scan template is intended for an internal PCI DSS vulnerability scan?

**A. Credential Validation — Not the keyed answer**

Credential Validation checks authentication rather than performing the requested internal PCI vulnerability assessment.

**B. Host Discovery — Not the keyed answer**

Host Discovery establishes inventory and does not replace the required vulnerability assessment.

**C. Legacy Web App Scan — Not the keyed answer**

A legacy web application template does not provide the internal network PCI scan requested.

**D. Internal PCI Network Scan — Answer key**

Internal PCI Network Scan is the template specifically intended for an internal PCI DSS network vulnerability assessment.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 64. BC-Q064

A firewall team asks what inbound rule is required so Tenable Agents can communicate with Tenable Vulnerability Management. What should you tell them?

**A. Open inbound UDP 161 so Tenable can poll the agent with SNMP — Not the keyed answer**

Agents are not polled through inbound SNMP UDP 161 for this cloud communication workflow.

**B. Open inbound TCP 8834 from Tenable cloud scanners to every endpoint — Not the keyed answer**

TCP 8834 is a Nessus interface port and is not the required inbound connection to every agent endpoint.

**C. Open inbound SMB and SSH so the agent can receive credentialed checks — Not the keyed answer**

Agents run local checks rather than requiring inbound SMB or SSH from the cloud scanner to execute them.

**D. No inbound rule is required because agents initiate outbound TCP 443 communication to Tenable — Answer key**

Agents initiate the standard cloud communication outbound on TCP 443, so this purpose does not require inbound access from Tenable to each endpoint.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 65. BC-Q065

A remote employee's laptop is offline during the scheduled agent scan window. Which agent behavior helps prevent the endpoint from being missed indefinitely?

**Technical review:** Catch-up behavior depends on the configured agent scan method, timing and reporting rules; it is not an automatic guarantee for every missed window.

**A. The agent can be configured to run the scan when it comes back online — Answer key**

Supported asynchronous or catch-up behavior can assess an endpoint after it becomes available; check the actual scan method and configured reporting rules.

**B. The agent waits for an administrator to manually import a scan file — Not the keyed answer**

The normal agent workflow does not inherently require an administrator to import a scan file after every offline interval.

**C. The cloud scanner automatically switches to an uncredentialed scan of the laptop's public IP — Not the keyed answer**

An offline agent does not automatically cause a cloud scanner to probe its laptop's public address.

**D. The next dashboard refresh marks all findings on the laptop as Fixed — Not the keyed answer**

A dashboard refresh cannot supply assessment evidence that every existing finding has been fixed.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 66. BC-Q066

When configuring an agent scan in Tenable Vulnerability Management, what target type must you select?

**A. An agent group — Answer key**

Agent scan target membership is specified through an agent group, which selects the participating endpoints.

**B. A scanner group — Not the keyed answer**

Scanner groups organize network assessment infrastructure rather than the endpoint participants of an agent scan.

**C. An individual linked agent — Not the keyed answer**

The documented target selection uses groups rather than selecting an individual linked agent directly as the scan target type.

**D. A raw CIDR range only — Not the keyed answer**

A raw CIDR range identifies network addresses and is not the participant target type for host-installed agents.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 67. BC-Q067

A missing Windows patch was found by a credentialed local check. After the server team installs the patch, an uncredentialed network scan does not report the finding. Why might Tenable Vulnerability Management still not move it to Fixed?

**A. Local check findings must be verified by another successfully authenticated scan — Answer key**

A successful authenticated follow-up must collect the local evidence needed to verify mitigation of the credentialed patch finding.

**B. Only Host Discovery scans can verify Windows patch remediation — Not the keyed answer**

Discovery alone does not inspect the required Windows local patch state.

**C. The finding must be recast before it can become Fixed — Not the keyed answer**

Recasting severity is unnecessary for technical mitigation and does not establish that the patch was installed.

**D. Windows patch findings never move to Fixed automatically — Not the keyed answer**

Windows patch findings can transition to Fixed after a qualifying reassessment confirms mitigation.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 68. BC-Q068

A vulnerability was originally reported by a combined plugin on port 445. What type of follow-up scan is required to mitigate it according to Tenable's mitigation requirements?

**A. Any scan that confirms the remote port is closed — Not the keyed answer**

For this local-treatment case, a closed remote port alone does not inspect the underlying host condition that produced the combined-plugin finding.

**B. A successfully authenticated scan — Answer key**

Combined plugins reported on port 0 or 445 are treated as local for the stated mitigation requirement and need successful authenticated follow-up.

**C. A dashboard refresh after the next plugin feed update — Not the keyed answer**

A refresh or feed update is not new authenticated evidence of mitigation on the asset.

**D. A Host Discovery scan with common ports enabled — Not the keyed answer**

Host Discovery identifies hosts/services but does not provide the local evidence required to mitigate this finding.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 69. BC-Q069

What does the Resurfaced state mean for a vulnerability finding?

**A. Tenable previously marked the vulnerability Fixed but detected it again — Answer key**

Resurfaced records a renewed detection after the same vulnerability had previously been marked Fixed.

**B. An analyst accepted the risk and hid the finding — Not the keyed answer**

Risk acceptance is a treatment decision and is not the resurfaced lifecycle condition.

**C. Tenable detected the vulnerability for the first time — Not the keyed answer**

An initial first detection is New, not Resurfaced.

**D. Tenable detected the vulnerability more than once without it ever being fixed — Not the keyed answer**

Repeated detection without an intervening Fixed state describes Active rather than Resurfaced.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 70. BC-Q070

A developer comparing Tenable Vulnerability Management UI results to API output sees UI states New, Active, Resurfaced, and Fixed. Which API state mapping is correct?

**A. All UI states are returned as their exact UI names in the API — Not the keyed answer**

UI lifecycle labels are not all returned verbatim by the API.

**B. New is created, Active is running, Resurfaced is failed, and Fixed is closed — Not the keyed answer**

These created/running/failed/closed labels describe a different lifecycle vocabulary, not the documented finding mappings.

**C. New and Active are open, Resurfaced is reopened, and Fixed is fixed — Answer key**

The documented mapping is New and Active to open, Resurfaced to reopened, and Fixed to fixed.

**D. New and Resurfaced are open, Active is confirmed, and Fixed is deleted — Not the keyed answer**

Active is not mapped to confirmed, and Fixed is not equivalent to deleting the finding.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 71. BC-Q071

In Tenable Vulnerability Management, what identifies a single vulnerability finding instance on an asset?

**A. The dashboard widget where the finding appears — Not the keyed answer**

Dashboard placement describes presentation and does not identify the service-specific occurrence on the asset.

**B. The plugin ID, port, and protocol combination — Answer key**

The plugin ID, port and protocol combination distinguishes a vulnerability instance within the asset's context.

**C. The scan schedule and scanner group name — Not the keyed answer**

Scheduling and scanner group information do not define the individual vulnerability instance.

**D. The asset's operating system and business owner — Not the keyed answer**

Operating system and owner are asset attributes rather than the plugin/service occurrence key.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 72. BC-Q072

How long does Tenable Vulnerability Management retain findings data after scans or imported results update it?

**A. 90 days — Not the keyed answer**

Ninety days is associated with other asset or licensing windows and is not the findings-retention period asked here.

**B. 15 months — Answer key**

The documented findings data retention window is 15 months; this differs from shorter report views and asset handling policies.

**C. Indefinitely, unless the scan is deleted — Not the keyed answer**

Findings retention is not universally indefinite, and deleting a scan is not the only relevant lifecycle consideration.

**D. 30 days — Not the keyed answer**

Thirty days describes the stated standard report data window rather than the longer findings-retention window.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 73. BC-Q073

An analyst builds a complex Explore query with 25 filter conditions and receives an Invalid filter error. What is the likely cause?

**A. Only administrators can use AND and OR operators — Not the keyed answer**

The issue is the query condition limit, not a universal administrator-only restriction on Boolean operators.

**B. Saved Views cannot include any Query Builder filters — Not the keyed answer**

Saved Views can preserve Query Builder filters; they are not prohibited from containing them.

**C. Explore Query Builder supports a maximum of 20 filter conditions — Answer key**

Twenty-five conditions exceed the documented maximum of twenty, explaining the Invalid filter error.

**D. Tenable Queries disable all custom filtering when selected — Not the keyed answer**

Selecting a curated query does not universally disable all subsequent custom filtering.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 74. BC-Q074

A lead analyst wants a reusable Explore view that preserves both the query and the table layout, including visible columns and grouping. Which feature best fits?

**A. Scanner group — Not the keyed answer**

A scanner group selects assessment infrastructure rather than saving filters and table layout.

**B. Scan folder — Not the keyed answer**

A scan folder organizes scan definitions and results, not the analyst's Explore workspace layout.

**C. Saved View — Answer key**

A Saved View preserves the query and supported table customizations, including columns, sorting and grouping.

**D. Recast rule — Not the keyed answer**

Recast changes severity treatment of matching findings and is not a mechanism for saving a view layout.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 75. BC-Q075

Which Tenable Query should an analyst use to focus on vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog?

**A. Credentialed Scan Failures — Not the keyed answer**

Credentialed Scan Failures targets collection problems rather than catalog membership for known exploited CVEs.

**B. Network Devices — Not the keyed answer**

Network Devices segments assets and does not specifically select CISA KEV vulnerabilities.

**C. External Assets — Not the keyed answer**

External Assets identifies exposure scope, not necessarily known exploitation of the vulnerabilities found there.

**D. CISA Known Exploitable Vulnerabilities — Answer key**

The CISA KEV-oriented Tenable Query identifies findings associated with CVEs in the Known Exploited Vulnerabilities catalog.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 76. BC-Q076

A security manager asks what the Emerging Threats Tenable Query is meant to identify. Which answer is most accurate?

**A. All vulnerabilities with a CVSS v3 score above 4.0 — Not the keyed answer**

A simple CVSS threshold does not identify the specific emerging-threat intelligence being monitored by Tenable Research.

**B. Compliance audit checks that changed from Failed to Passed — Not the keyed answer**

Compliance transitions describe configuration audit outcomes rather than emerging exploitation activity.

**C. Vulnerabilities Tenable Research is monitoring due to public discussion, proof-of-concept activity, or observed large-scale abuse — Answer key**

Emerging Threats focuses on vulnerabilities attracting research attention through discussion, proof-of-concept potential or observed abuse.

**D. Assets that have never been scanned by an authenticated scan — Not the keyed answer**

Unassessed assets are a coverage issue and are not the vulnerability threat-intelligence category requested.

Sources: [Risk — official documentation](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 77. BC-Q077

A recast rule was created from Explore, but a matching finding still shows its original severity immediately afterward. What is the best explanation?

**A. Only the scan owner can see a recast rule until the next plugin feed update — Not the keyed answer**

The documented delay concerns evaluation and view caching, not an owner-only visibility rule tied to the next plugin update.

**B. Recast rules never apply to findings created before the rule existed — Not the keyed answer**

Recast is not universally restricted to findings created after the rule; existing matching findings can also be affected.

**C. The finding must first be exported and reimported for the rule to apply — Not the keyed answer**

Exporting and reimporting a finding is not the required normal mechanism for applying the rule.

**D. Recast operates on an eventually consistent model, and Explore may cache the view for up to 60 minutes — Answer key**

Recast processing is eventually consistent and Explore can retain a cached view, so immediate unchanged severity is not proof of a failed rule.

Sources: [Recast — official documentation](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 78. BC-Q078

During a compliance review, a host audit check is known to be satisfied through an approved exception, but the original audit result shows Failed. Which rule type changes the host audit result, for example from Failed to Passed?

**A. Recast — Not the keyed answer**

Recast changes vulnerability severity rather than the original host-audit Passed/Failed result.

**B. Accept — Not the keyed answer**

Accept records a treatment decision without being the specific operation that changes the displayed audit result value.

**C. Target Group — Not the keyed answer**

A target group organizes scope and does not override the audit result.

**D. Change Result — Answer key**

Change Result can override matching host-audit outcomes; record the approved exception because the override does not itself fix target configuration.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 79. BC-Q079

A compliance officer relies on Tenable Vulnerability Management reports for monthly status meetings. What data window should they expect standard reports to show?

**A. All retained findings since the account was created — Not the keyed answer**

Retaining older findings does not mean the standard generated report includes every historical record from account creation.

**B. The last 30 days — Answer key**

The documented standard report data window is the last 30 days, which is distinct from the findings-retention window.

**C. Only the current calendar quarter — Not the keyed answer**

A calendar quarter is not the standard 30-day window described for these reports.

**D. The last 15 months — Not the keyed answer**

Fifteen months is the findings-retention period, not the standard report window requested.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 80. BC-Q080

Which permission is most appropriate for an auditor who needs to view scan results and generate reports but must not change scan configurations?

**A. Can Use — Not the keyed answer**

Can Use concerns applying a reusable object and does not describe the general view-only resource permission requested.

**B. Can Edit — Not the keyed answer**

Can Edit permits modifications and conflicts with the auditor's required restriction.

**C. Can Scan — Not the keyed answer**

Can Scan authorizes assessment activity rather than restricting the auditor to inspection and reporting.

**D. Can View — Answer key**

Can View provides visibility to permitted results without granting scan configuration changes; the user's role must also allow the requested reporting actions.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 81. BC-Q081

A Scan Operator launches a scan owned by another user. Some targets are skipped even though the launcher has access to them. What is the most likely permission issue?

**A. The scan can only target assets that the launcher personally tagged — Not the keyed answer**

The issue is scan-owner authorization, not a requirement that the launcher personally created each asset tag.

**B. Tenable evaluates scan target permissions based on the scan owner's permissions, not the launcher — Answer key**

Target permission evaluation uses the scan owner's scope, so targets outside that owner's permissions can be skipped despite the launcher's access.

**C. The launcher must have Can Edit on every report template before a scan can run — Not the keyed answer**

Editing report templates is unrelated to permission to assess a particular target.

**D. Scan Operators can never launch scans owned by another user — Not the keyed answer**

A Scan Operator can launch appropriately permitted shared scans; the problem is not a universal prohibition on scans owned by others.

Sources: [Rbac — official documentation](https://docs.tenable.com/vulnerability-management/best-practices/RBAC/Content/best-practices.htm)

## 82. BC-Q082

Which statement best describes the difference between roles and permissions in Tenable Vulnerability Management?

**A. Roles are used for reports only; permissions are used for scans only — Not the keyed answer**

Roles and permissions apply across multiple product functions and resources, not only reports or only scans.

**B. Roles apply only to scanners; permissions apply only to agents — Not the keyed answer**

The distinction is action versus data scope, not an exclusive scanner-versus-agent division.

**C. Roles control the major actions a user can perform; permissions control the data those actions can apply to — Answer key**

Roles govern the major actions a user can perform, while permissions constrain the resources on which the user may act.

**D. Roles are temporary access grants; permissions are permanent administrator accounts — Not the keyed answer**

Roles are not simply temporary grants, and permissions are not synonymous with permanent administrator accounts.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 83. BC-Q083

Which permission allows a user to apply an existing scan policy or report template without editing that reusable object?

**A. Can Use — Answer key**

Can Use permits applying a reusable policy or template without granting the right to modify its centrally managed configuration.

**B. Can Edit — Not the keyed answer**

Can Edit grants modification rights beyond the requested use-only access.

**C. Can Scan — Not the keyed answer**

Can Scan authorizes assessment activity but is not the reusable-object use permission described here.

**D. Can View — Not the keyed answer**

Can View permits inspection; applying the reusable object requires the appropriate use permission and functional role.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 84. BC-Q084

A scan uses a tag with an IPv4 range rule. What is the difference between 'Existing tagged assets only' and 'Targets defined by tags'?

**A. Existing tagged assets only scans fixed findings; Targets defined by tags scans active findings — Not the keyed answer**

The target selection modes do not distinguish Fixed versus Active finding states.

**B. Existing tagged assets only requires agents; Targets defined by tags requires cloud scanners — Not the keyed answer**

Both modes can be relevant to scanner templates; they are not a universal agent-versus-cloud-scanner split.

**C. Existing tagged assets only scans public IPs; Targets defined by tags scans private IPs — Not the keyed answer**

The distinction is existing membership versus rule-derived targets, not public versus private addressing.

**D. Existing tagged assets only scans assets already tagged; Targets defined by tags scans assets whose IP or DNS matches the tag rules — Answer key**

Existing tagged assets only uses current tagged inventory, whereas Targets defined by tags derives addresses or names from supported matching rules.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 85. BC-Q085

A tag-based scanner configuration uses 'Targets defined by tags' with multiple IPv4 and DNS tag rules. The administrator selects Match All and the scan resolves no targets. What should they understand?

**A. Tag-based scans cannot use IPv4 tag rules — Not the keyed answer**

Supported IPv4 rules can be used; the issue is the combination mode rather than an absolute prohibition.

**B. Match All can have only one tag rule in this context; use Match Any for multiple supported rules — Answer key**

In this target-resolution context, Match All supports one rule; multiple supported address/name rules require the documented Match Any arrangement.

**C. The scan must be converted to an agent scan before tag rules work — Not the keyed answer**

Converting to an agent scan is not the fix for an incorrectly combined scanner target rule set.

**D. Targets defined by tags only works for assets that already completed a credentialed scan — Not the keyed answer**

Rule-derived targets are not universally restricted to assets already assessed with credentials.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 86. BC-Q086

An administrator uploads a target file to a scan and the import fails. Which file requirement should they check first?

**Technical review:** Pure ASCII is byte-compatible with UTF-8. Check actual target-file content, BOM and formatting rather than treating every UTF-8 label as automatically invalid.

**A. The file must be a JSON array with CIDR targets only — Not the keyed answer**

The documented upload format is not a JSON array restricted to CIDR entries.

**B. The file must be UTF-16 with one target per comma-separated row — Not the keyed answer**

UTF-16 and comma-separated rows do not match the required ASCII-compatible, one-target-per-line representation.

**C. The file must include the scanner UUID before every target — Not the keyed answer**

A scanner UUID before every target is not part of the documented target-file format.

**D. The file must be ASCII, one target per line, with no trailing spaces or extra lines after the last target — Answer key**

Use the documented ASCII representation with one target per line and without trailing spaces or extra final lines. Pure ASCII bytes are also valid UTF-8, so distinguish actual byte content from an encoding label.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 87. BC-Q087

A triggered agent scan is configured for a group of laptops. Which statement about Scan Results is true?

**A. Triggered scans report only Info severity findings — Not the keyed answer**

Triggered scans are not inherently limited to informational findings; the configured checks determine what they detect.

**B. Show in dashboard is always enabled for triggered scans — Answer key**

Show in dashboard is always enabled for triggered scans in the documented Basic settings, so they are not private troubleshooting scans through that choice.

**C. Triggered scans never update vulnerability states — Not the keyed answer**

Triggered scans can contribute vulnerability lifecycle updates when they supply qualifying assessment evidence.

**D. Triggered scans can only be kept private — Not the keyed answer**

The documented result setting is the opposite: triggered scans cannot be restricted to Keep private through this option.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 88. BC-Q088

An analyst manually overrides a host asset's ACR to reflect business criticality. How long can it take for the new ACR to appear in the Tenable Vulnerability Management UI?

**A. Only after the asset is deleted and rediscovered — Not the keyed answer**

The documented manual override does not require deleting and rediscovering the asset.

**B. Exactly 15 minutes — Not the keyed answer**

The guide allows a delay up to 24 hours rather than guaranteeing exactly fifteen minutes.

**C. Up to 24 hours — Answer key**

A saved manual ACR override can take up to 24 hours to appear in the UI, reflecting eventual processing of the changed asset context.

**D. Only after the next quarterly plugin feed update — Not the keyed answer**

A quarterly feed event is not the prerequisite or timing interval documented for this manual criticality change.

Sources: [Scoring — official documentation](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)

## 89. BC-Q089

A company has two branch offices that both use 192.168.1.0/24. An administrator moves duplicate-looking assets into separate networks after scans have already run, but leaves the scanner in the old network. What is the key risk?

**A. Tenable automatically merges all assets with the same private IP across networks — Not the keyed answer**

Separate Networks disambiguate overlapping addresses; the scenario does not establish automatic merging of all matching private IPs.

**B. Tenable may create duplicate asset records that count against licensing, and the scanner may recreate the same asset if it is not moved too — Answer key**

Moving assets after scans and leaving the sensor in the old Network can create duplicate or recreated records, so coordinate asset and scanner movement.

**C. The assets are converted to Web Application assets and stop appearing under Hosts — Not the keyed answer**

Changing Network context does not convert host assets into web application assets.

**D. The next scan permanently deletes the moved assets from all dashboards — Not the keyed answer**

A later scan does not universally and permanently delete all assets moved to another Network.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 90. BC-Q090

What happens when a host asset is deleted from Tenable Vulnerability Management?

**A. Only the asset name is hidden; findings remain active forever — Not the keyed answer**

Deletion removes the asset and associated findings rather than merely hiding its display name indefinitely.

**B. The next scan automatically restores the original asset ID and all deleted findings — Not the keyed answer**

A subsequent detection need not recover the deleted identity and all historical evidence automatically.

**C. The asset is placed in a temporary quarantine folder for 15 months — Not the keyed answer**

The documented operation is permanent deletion, not a fifteen-month quarantine folder.

**D. The asset is removed from the assets view, associated findings are deleted, and Tenable stops matching scan results to it — Answer key**

Deleting the host removes its asset record and associated finding data and stops matching results to that deleted identity; licensing reclamation follows its own documented timing.

Sources: [Networks — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 91. BC-Q091

An executive dashboard appears unchanged immediately after a large scan finishes. What is the best explanation before assuming the scan failed?

**A. Dashboard data updates after scans, but there may be a delay while Tenable indexes the data — Answer key**

Assessment results can require indexing before dashboard values refresh, so a short delay alone does not establish scan failure.

**B. Dashboards update only once per calendar quarter — Not the keyed answer**

The program dashboard is not restricted to quarterly updates.

**C. Dashboard widgets show only Fixed vulnerabilities — Not the keyed answer**

Dashboard widgets can summarize open and other finding states; they do not only display Fixed vulnerabilities.

**D. Dashboards never use scan data from linked scanners — Not the keyed answer**

Linked-scanner results can contribute to dashboards when configured for shared findings publication.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 92. BC-Q092

A manager asks why they cannot open another user's report result even though they can see report templates. What is the correct explanation?

**A. Report results are user-specific; users can only view their own Tenable Vulnerability Management report results — Answer key**

Report definitions/templates and generated report results are distinct; the documented result ownership restriction can explain visibility limited to the user's own outputs.

**B. Report templates and report results are the same object — Not the keyed answer**

A reusable report template and its generated result are different objects with different access behavior.

**C. Report results become visible only after 15 months — Not the keyed answer**

Fifteen-month findings retention is unrelated to a waiting period for report-result access.

**D. Reports cannot be viewed by managers under any role — Not the keyed answer**

Manager status is not a universal prohibition on viewing reports the user is otherwise permitted to generate or access.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 93. BC-Q093

In the Tenable for ServiceNow integration, which Tenable Job Type should be selected under the ITSM module to bring vulnerability data into ServiceNow?

**A. Pull Vulnerabilities — Answer key**

Pull Vulnerabilities is the ITSM job type for retrieving VM vulnerability data into the ServiceNow integration.

**B. Recast Findings — Not the keyed answer**

Recasting is a finding treatment operation and not the documented ITSM data-pull job name.

**C. Push Assets — Not the keyed answer**

Push Assets belongs to asset synchronization rather than importing vulnerability records into the ITSM module.

**D. Pull Assets — Not the keyed answer**

Pull Assets imports inventory/CI information under the Asset module rather than the requested vulnerability data.

Sources: [Snow — official documentation](https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm)

## 94. BC-Q094

When configuring the Tenable Plugin for Jira, what is Tenable's recommendation for the API key used by the integration?

**A. Reuse the same API key for all third-party integrations to simplify rotation — Not the keyed answer**

Sharing one key across integrations couples their access and rotation; the cited plugin guidance recommends a separate key per instance.

**B. Generate a unique Tenable Vulnerability Management API key for each installed Jira integration instance — Answer key**

A distinct key per installed integration instance isolates that integration's API credential lifecycle and matches the cited Jira plugin guidance.

**C. Do not record the API token because Jira can retrieve it automatically after reset — Not the keyed answer**

A required token/key must be recorded securely; the integration cannot be assumed to recover a secret after reset.

**D. Use only a read-only API key because Jira never collects vulnerability data — Not the keyed answer**

The required privilege scope depends on the documented integration operations; this statement also incorrectly claims the integration never collects vulnerability data.

Sources: [Jira — official documentation](https://docs.tenable.com/integrations/Atlassian/Jira/Content/configure_tio_addon.htm)

## 95. BC-Q095

A team wants faster, lower-footprint agent results for software inventory so Tenable can analyze missing patches as coverage is released. Which agent template is designed for that purpose?

**A. Collect Inventory — Answer key**

Collect Inventory gathers host/software inventory with a lower footprint for supported downstream missing-patch analysis.

**B. Host Discovery — Not the keyed answer**

Host Discovery is a network inventory workflow and is not the agent software-inventory template requested.

**C. Credential Validation — Not the keyed answer**

Credential Validation tests authentication rather than performing the specified lower-footprint agent inventory collection.

**D. Legacy Web App Scan — Not the keyed answer**

A legacy web application template assesses a different target and does not collect the agent's local software inventory.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 96. BC-Q096

A Windows endpoint team uses Collect Inventory scans and expects coverage for Google Chrome and Microsoft Exchange Patch Tuesday updates. What is the issue with that expectation?

**Technical review:** The listed inventory-template coverage exclusions are version-dependent; check the current template guidance before using inventory collection as a full assessment replacement.

**A. Collect Inventory can run only on Linux agents and cannot report Windows information — Not the keyed answer**

Collect Inventory can collect Windows information; the limitation concerns particular application and update coverage rather than an absolute Linux-only rule.

**B. Collect Inventory does not currently cover third-party Windows applications or Microsoft product Patch Tuesday updates such as Exchange or SharePoint — Answer key**

The cited template guidance documents these third-party Windows application and Microsoft product update gaps. Verify current coverage before replacing broader local assessment with inventory-only scans.

**C. Collect Inventory supports only malware checks and disables all software inventory — Not the keyed answer**

The template's purpose is host/software inventory, not malware-only checks with all inventory disabled.

**D. Collect Inventory requires every plugin family to be manually selected before the scan can launch — Not the keyed answer**

Manual selection of every family is not the explanation for the specific documented coverage exclusions.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 97. BC-Q097

Which statement about the Advanced Agent Scan template is correct?

**A. It is an agent scan without recommendations that can use Scan Window or Triggered Scan methods — Answer key**

Advanced Agent Scan is a customizable agent template supporting the documented Window and Triggered methods, with plugin selection requiring careful configuration.

**B. It automatically selects every plugin and prevents plugin customization — Not the keyed answer**

The template allows check customization; it does not universally enable every plugin and prohibit edits.

**C. It is used only for external PCI ASV scans — Not the keyed answer**

External PCI ASV assessment is a different scan objective from this customizable host-agent template.

**D. It is the only template that performs Host Discovery for network scanners — Not the keyed answer**

Host Discovery belongs to network discovery and does not define the Advanced Agent Scan template.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 98. BC-Q098

Which scan template is a simple way to discover live hosts with minimal network traffic?

**A. Ping-Only Discovery — Answer key**

Ping-Only Discovery is the lightweight reachability-oriented template described; nonresponse still does not conclusively prove host absence.

**B. SCAP and OVAL Auditing — Not the keyed answer**

SCAP/OVAL auditing evaluates structured configuration or vulnerability content rather than being the minimal host-ping discovery method.

**C. Audit Cloud Infrastructure — Not the keyed answer**

Cloud infrastructure auditing assesses cloud configuration instead of simply pinging live hosts.

**D. Policy Compliance Auditing — Not the keyed answer**

Policy Compliance Auditing compares configuration requirements and is broader than lightweight reachability discovery.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 99. BC-Q099

A Windows security baseline team wants to audit password complexity and registry-based settings against a known baseline. Which Tenable scan template category best matches this need?

**A. Inventory collection using Collect Inventory — Not the keyed answer**

Collect Inventory supplies software/host information and is not the baseline configuration audit workflow requested.

**B. Tactical scan using Malware Scan — Not the keyed answer**

Malware assessment searches for malicious software rather than auditing registry and password policy requirements.

**C. Configuration scan using Policy Compliance Auditing — Answer key**

Policy Compliance Auditing assesses configured benchmark requirements such as Windows password complexity and registry settings.

**D. Vulnerability scan using Host Discovery — Not the keyed answer**

Host Discovery identifies hosts and services; it does not provide the required baseline configuration audit.

Sources: [General — official documentation](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 100. BC-Q100

A PCI team wants to rely only on the PCI Internal Nessus Agent template for all internal PCI vulnerability coverage. What should you advise?

**A. Agent-based internal PCI scanning replaces all network scanning requirements — Not the keyed answer**

Agents provide local evidence but do not eliminate the applicable need to assess remotely exposed network services.

**B. Internal uncredentialed network scans are still required to cover vulnerabilities related to network services by port scans — Answer key**

Internal network scanning remains necessary for the network-service perspective and systems without agents; agent checks complement that coverage rather than replace it.

**C. Tenable assessors review internal PCI agent findings for compensating controls before they appear — Not the keyed answer**

Internal PCI findings are not automatically reviewed by Tenable assessors as an external ASV workflow before appearing.

**D. The PCI Internal Nessus Agent template is only for external ASV attestation — Not the keyed answer**

The internal agent template supports internal assessment; it is not solely an external ASV attestation mechanism.

Sources: [Templates — official documentation](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)
