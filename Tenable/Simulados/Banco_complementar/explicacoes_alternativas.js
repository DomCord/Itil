/* Independent educational material, personal and noncommercial use. */
const ComplementaryOptionExplanations = {
  "BC-Q001": [
    "ACR rates business criticality of an asset; it is not the vulnerability's dynamic threat-priority score.",
    "CVSS v3 Base describes technical severity and does not incorporate current threat intelligence into a dynamic priority score.",
    "AES combines vulnerability exposure with asset criticality, so the phrase 'asset context' makes this option plausible. It is not the imported key's answer; the wording is ambiguous.",
    "The imported key selects VPR because it incorporates vulnerability characteristics and threat intelligence. However, VPR does not itself encode asset-specific business criticality; the question's asset-context wording needs qualification."
  ],
  "BC-Q002": [
    "A five-point scale does not match Tenable's documented VPR range.",
    "VPR runs from 0.1 to 10.0, with higher values indicating greater vulnerability priority.",
    "A 0-100 scale is not the VPR score range used for vulnerability prioritization.",
    "The 0-1000 scale applies to exposure scoring such as AES, not the VPR score."
  ],
  "BC-Q003": [
    "OS fingerprinting is a different discovery function; plugin 19506 primarily reports information about the scan execution.",
    "Plugin 19506 is not a consolidated catalog of all detected vulnerabilities' CVSS scores.",
    "Port enumeration belongs to discovery plugins rather than the primary function of Nessus Scan Information.",
    "Plugin 19506 reports scan execution metadata and credential-related information when present. Do not assume its appearance in every scan or treat accepted credentials alone as proof of complete local collection."
  ],
  "BC-Q004": [
    "Authenticated host access enables local checks of software, patches and configuration that remote unauthenticated probing may not expose.",
    "Credentialed checks can require additional work; universally faster execution is not their primary advantage.",
    "A network-based credentialed scan still needs a communication path to the target host.",
    "Authentication improves collection evidence; it does not automatically raise every detected vulnerability's VPR."
  ],
  "BC-Q005": [
    "The maximum CVSS severity on a host describes a vulnerability, not the asset's business importance.",
    "The 0-1000 exposure scale describes AES rather than ACR.",
    "A count of critical findings measures detected weaknesses and is not an asset's criticality rating.",
    "ACR uses a 1-10 scale for asset business criticality and can be adjusted to reflect organizational context under the applicable licensing."
  ],
  "BC-Q006": [
    "AES weighs the asset's active weakness exposure, including VPR-related risk, together with its ACR business criticality.",
    "A subnet address is not a substitute for the business-criticality input needed in the described asset exposure calculation.",
    "Scan frequency and recency affect evidence freshness but are not the two primary exposure/criticality factors requested.",
    "VPR contributes vulnerability exposure, but open-port count does not replace the ACR input in the documented combination."
  ],
  "BC-Q007": [
    "The imported campaign model does not automatically expand membership merely because a later finding has the same CVE.",
    "This is the answer for the snapshot-based campaign described by the imported key. Verify the actual product and workflow: current Exposure Response initiatives have their own documented selection and update behavior.",
    "A VPR threshold alone does not establish that newly discovered records are automatically added to the snapshot campaign.",
    "New findings do not simply replace historical campaign evidence because the same assets are affected."
  ],
  "BC-Q008": [
    "Discovery identifies hosts and available inventory; it is not the focused authenticated missing-patch audit.",
    "Web application testing assesses application issues rather than Windows workstation update inventory.",
    "Credentialed Patch Audit is specifically designed to collect local patch evidence and enumerate missing updates using suitable credentials.",
    "Basic Network Scan can assess many exposures, but the focused patch-audit template best matches this missing-update objective."
  ],
  "BC-Q009": [
    "A tag does not inherently exclude its assets from compliance checks; exclusions or scan configuration govern that behavior.",
    "Tags group assets and do not directly assign or rewrite calculated VPR scores.",
    "Tags create logical asset sets used in filtering, access scope and targeted operational workflows.",
    "Tagging organizes scope; it does not itself install patches or automatically remediate the tagged assets."
  ],
  "BC-Q010": [
    "User Interaction explicitly records whether exploitation needs an action by a human user.",
    "Attack Vector describes the attacker's required access path rather than whether a victim must interact.",
    "Privileges Required describes the attacker's existing privileges, not victim user participation.",
    "Confidentiality Impact measures the information disclosure consequence rather than the interaction prerequisite."
  ],
  "BC-Q011": [
    "Agents perform host-local assessments; passive traffic analysis and intrusion detection are different functions.",
    "An installed agent remains a sensor and does not replace the VM management console.",
    "Host agent checks are not a replacement for dedicated web application penetration testing.",
    "Agents can assess locally when endpoints lack scanner reachability. They still need an appropriate manager communication path to obtain updates and deliver results; permanent isolation requires a separately supported workflow."
  ],
  "BC-Q012": [
    "The General family is a check grouping, not a filter proving exploitation in the wild.",
    "A scan template describes collection configuration and does not identify which CVEs have known active exploitation.",
    "This is the imported key's best available choice for high threat priority. VPR 9+ does not prove known exploitation; use explicit exploitation intelligence or CISA KEV-related filters for the strict 'only exploited' requirement.",
    "A high CVSS score describes technical severity and does not establish that a vulnerability is actively exploited."
  ],
  "BC-Q013": [
    "The 'only' claim excludes widely used supported hardening audits such as CIS and STIG content.",
    "Framework control mappings can be relevant, but they are not the benchmark audit pair identified by this question.",
    "Tenable provides audit content for CIS Benchmarks and DISA STIGs to test supported system hardening requirements.",
    "Management-system and assurance frameworks are not interchangeable with the specific system configuration benchmark audits requested."
  ],
  "BC-Q014": [
    "Risk acceptance records a deliberate decision to tolerate a finding within a defined scope and, where configured, a time period; it is not a technical fix.",
    "Accepting risk does not directly edit the calculated VPR value.",
    "An acceptance rule changes risk treatment rather than permanently deleting all underlying assessment evidence.",
    "Risk acceptance and SIEM escalation serve different workflows; accepting a finding does not inherently trigger an incident-response escalation."
  ],
  "BC-Q015": [
    "Windows: Microsoft Bulletins contains checks for missing Microsoft security updates using relevant Windows host evidence.",
    "Service Detection identifies running services rather than being the dedicated Microsoft patch-check family.",
    "Web Servers focuses on server software exposures and is not the Windows OS update family requested.",
    "General contains miscellaneous checks and is not the specifically named Microsoft security bulletin family."
  ],
  "BC-Q016": [
    "Assigning ownership concerns remediation responsibility, not overriding severity.",
    "Moving campaign membership changes workflow scope rather than the finding's severity classification.",
    "Recast applies a severity override to matching findings so their displayed classification reflects the approved risk treatment.",
    "Recasting does not execute a scan; verifying a fix requires a separately performed suitable reassessment."
  ],
  "BC-Q017": [
    "Advanced Scan exposes flexible assessment settings; it is not specifically the discovery-only template requested.",
    "A malware-focused assessment searches for malicious software rather than limiting the objective to live hosts and ports.",
    "Basic Network Scan performs vulnerability assessment beyond the initial discovery task.",
    "The intended discovery template locates hosts and ports without treating that inventory as a full vulnerability assessment."
  ],
  "BC-Q018": [
    "HTML is primarily a presentation format; it is less direct than a tabular export for the SIEM ingestion task described.",
    "Among these choices, CSV provides a structured tabular representation that scripts and SIEM importers can process directly.",
    "PDF is designed for document presentation rather than direct record-level ingestion.",
    "DOCX is a document format and is not the most suitable structured export among the listed options."
  ],
  "BC-Q019": [
    "The difference is in the scoring model, not a universal rule that Tenable calculates one version internally while obtaining the other from NVD.",
    "CVSS v3 explicitly separates user interaction and introduces Scope, improving how prerequisite and security-boundary effects are described.",
    "CVSS v3 can score vulnerabilities in many technologies, not only web applications.",
    "Both versions use a 0-10 scoring range; CVSS v3 does not use a 0-100 base scale."
  ],
  "BC-Q020": [
    "A remediation campaign alone is not the configured ServiceNow connection that sends or synchronizes ticket-related data.",
    "Risk acceptance records a treatment decision rather than creating the ServiceNow integration.",
    "A Nessus policy defines checks; it does not itself configure ServiceNow ticket synchronization.",
    "A suitably configured Tenable/ServiceNow integration supports the ticketing workflow. Verify the specific application and module because asset-CMDB and vulnerability/ITSM connectors serve different purposes."
  ],
  "BC-Q021": [
    "A passive monitor only sees traffic at its observation point and can miss roaming endpoints outside that view.",
    "A cloud connector discovers supported provider assets; it is not the general local assessment client for a roaming laptop.",
    "An installed agent follows the endpoint and reports locally collected results when connectivity is available. Its scans are scheduled or triggered, not a guarantee of continuous real-time vulnerability streaming.",
    "A virtual network scanner still depends on reaching the mobile endpoint from its own network location."
  ],
  "BC-Q022": [
    "Lumin provides exposure scoring and benchmarking capabilities, including asset criticality and exposure context under the applicable licensing.",
    "Passive network traffic analysis is a sensor function rather than the exposure scoring capability described here.",
    "Cloud security posture assessment is a separate product capability and does not define Lumin's exposure metrics.",
    "Exposure scoring prioritizes and measures risk; it is not an automated penetration-test engine."
  ],
  "BC-Q023": [
    "The question does not establish a quarantine repository workflow for stale VM assets.",
    "There is no universal rule here permanently deleting all assets exactly 30 days after their last scan.",
    "This is the imported answer, but its inactive-retention claim is not a universal current rule. Managed status, license aging and configured Asset Age Out are distinct; Asset Age Out can permanently delete an asset and its data.",
    "Lack of recent assessment does not automatically set every vulnerability or asset to Critical severity."
  ],
  "BC-Q024": [
    "A severity-sorted export contains useful data but is not a purpose-built program dashboard tracking deadlines and remediation progress.",
    "A plugin family summary groups checks and does not inherently show SLA performance across the program.",
    "A date-filtered individual scan view is narrower than program-level SLA and remediation tracking.",
    "Program dashboards with appropriate remediation and SLA widgets provide aggregate progress views; confirm each widget's scope and metric configuration."
  ],
  "BC-Q025": [
    "Cloud communication protocols are sensor connection settings, not the reusable target collections described by the imported key.",
    "A collection of scan targets does not itself create or recommend firewall hardening rules.",
    "The imported key intends reusable named address collections. Confirm the product/version terminology: current VM Networks primarily provide asset identity context and should not be assumed to be reusable CIDR target lists.",
    "Topology mapping of switches and routers is a different purpose from the reusable target-scope concept intended by the question."
  ],
  "BC-Q026": [
    "Physical presence describes a different Attack Vector and conflicts with AV:Network.",
    "PR:None does not require a prior authenticated session, and AV:Network is not limited to adjacent-network access.",
    "Administrative privileges contradict PR:None, and adjacency is not the Network vector specified.",
    "AV:Network permits exploitation through the network path and PR:None requires no prior privileges. Other metrics still determine interaction and complexity; network scoring does not guarantee actual internet reachability."
  ],
  "BC-Q027": [
    "An access/secret key pair authenticates permitted API operations for automation and integrations using the associated user's privileges.",
    "A user API key is not the password used to log into a scanner's local web interface.",
    "Sensor registration uses the appropriate linking mechanism; user API credentials do not replace the sensor linking key.",
    "API authentication credentials are not the mechanism used to encrypt stored scan results."
  ],
  "BC-Q028": [
    "A descriptive slow-scan tag does not set execution concurrency unless a separate configured workflow interprets it.",
    "Performance settings such as Max Simultaneous Hosts control how many targets the scan assesses concurrently.",
    "A VPR threshold filters priority information and does not set the scanner's host concurrency.",
    "Zone prioritization is not the specific simultaneous-host performance control requested."
  ],
  "BC-Q029": [
    "A remote credentialed audit still connects to target services and can produce network activity visible to detection controls.",
    "An agent performs the checks locally and avoids the remote probe pattern. It still communicates for updates and results, so this is not a guarantee of zero network traffic or zero alerts.",
    "A full network scan with enabled plugins sends remote probes and can trigger the IDS/IPS concern described.",
    "SYN discovery still sends observable probing traffic even though its assessment objective is narrower."
  ],
  "BC-Q030": [
    "Exploit framework availability is threat intelligence, not the numeric CVSS v3 Critical threshold.",
    "Under CVSS v3 severity mapping, Critical covers scores from 9.0 through 10.0. Verify that the tenant or view actually uses CVSS rather than a different configured metric.",
    "CVSS v3 scores from 7.0 through 8.9 are High, not Critical.",
    "CVSS v3 scores from 4.0 through 6.9 are Medium, not Critical."
  ],
  "BC-Q031": [
    "Valid credentials, sufficient privileges and successful local patch inventory improve missing-update detection accuracy; confirm collection evidence as well as authentication.",
    "Scanning more often repeats the same evidence problem if the credentials or local collection remain broken.",
    "Adding targets changes scope but does not improve the accuracy of patch inventory on the affected host.",
    "Disabling the relevant family removes detection coverage instead of correcting the source of inaccurate results."
  ],
  "BC-Q032": [
    "The stated 100-scanner global limit is not the account-specific sizing principle intended by the imported key.",
    "The imported key intends that deployment scale be checked against entitlements and applicable service limits. Do not treat this wording as proof that every account has unlimited scanners or no technical limits.",
    "The imported key does not establish a universal ten-scanner limit; check current account and sensor constraints.",
    "A one-scanner-only subscription rule does not describe the distributed assessment model intended by the question."
  ],
  "BC-Q033": [
    "CVE publication changes are distinct from an asset finding's assessment lifecycle state.",
    "Fixed indicates that a previously detected issue is no longer found by a qualifying subsequent assessment of the asset.",
    "A workflow declaration alone is not equivalent to the documented assessment-based verification of mitigation.",
    "Disabling a plugin removes a check and does not itself provide the comparable evidence needed to establish a fix."
  ],
  "BC-Q034": [
    "Permissions scoped using asset tags constrain which resources a user can view or act on, alongside the user's functional role.",
    "A sensor or zone assignment is not the general tag-based authorization mechanism controlling asset visibility.",
    "A VPR threshold filters risk information and is not an authorization boundary.",
    "ACR rates business criticality; assigning it does not grant or restrict a user's access."
  ],
  "BC-Q035": [
    "Manual billing exports are not automatic asset discovery through the provider API.",
    "Supported cloud connectors use provider APIs to discover and import cloud asset inventory information.",
    "Passive visibility from a cloud traffic feed does not replace the specified cloud provider API integration.",
    "Agents supply local assessment evidence, but deploying them is not the connector-based inventory import requested."
  ],
  "BC-Q036": [
    "Host scan duration measures assessment execution performance rather than time to resolve detected vulnerabilities.",
    "An average severity score measures the risk mix, not elapsed remediation time.",
    "MTTR measures average elapsed time from detection to confirmed remediation under the program's defined timing and verification rules.",
    "The delay between a feed update and detection concerns detection freshness rather than time to remediate a finding."
  ],
  "BC-Q037": [
    "Plugin 10397 is a Windows SMB/LANMAN information-disclosure check, not a MySQL vulnerability check.",
    "DNS zone transfer is a different protocol and finding type from this Windows SMB plugin.",
    "Certificate expiration concerns TLS certificates, not the LANMAN pipe information disclosed by plugin 10397.",
    "The imported key selects the Windows/SMB option, but its share-enumeration description is inaccurate. The official plugin is Microsoft Windows SMB LanMan Pipe Server Listing Disclosure and retrieves a browse list of nearby Windows systems."
  ],
  "BC-Q038": [
    "An active scan exclusion skips matching IP targets even when they are included in the broader network scan scope.",
    "Skipping a target is an assessment decision and does not automatically accept the risk of existing findings.",
    "Exclusion controls assessment participation rather than deleting historical asset results.",
    "Plugin family selection controls checks; target exclusions are not a universal family-disable setting."
  ],
  "BC-Q039": [
    "Changing the active scan template does not turn Nessus into a passive traffic monitor.",
    "Dedicated web application assessment has a different objective; Advanced Network Scan is not inherently an application fuzzing tool.",
    "Fewer plugins may alter runtime, but speed alone does not define the advantage of the more configurable template.",
    "Advanced Scan exposes granular assessment settings for cases where the simpler template lacks the required configuration; verify which options each current template offers."
  ],
  "BC-Q040": [
    "This reverses the deployment distinction and confuses sensor management with external threat intelligence.",
    "A linked scanner is customer-managed Nessus infrastructure associated with VM; a cloud scanner is Tenable-managed scanning infrastructure.",
    "Linked Nessus scanners can perform network assessments and are not restricted to agent-based scanning.",
    "Customer-managed Nessus can run on supported physical or virtual systems; a dedicated physical appliance is not mandatory."
  ],
  "BC-Q041": [
    "Scope is a security-authority boundary concept, not a geographic footprint.",
    "The number of vulnerable systems does not define the CVSS v3 Scope metric.",
    "Cloud versus on-premises hosting is not the distinction encoded by Scope.",
    "Scope describes whether exploitation affects resources beyond the vulnerable component's security authority, distinguishing unchanged and changed scope."
  ],
  "BC-Q042": [
    "VPN-only collection can miss endpoints that do not connect during the scheduled network assessment.",
    "Agents assess on the mobile endpoint and synchronize results when communication is available, reducing dependence on central scanner reachability.",
    "A home ISP range is not a reliable or appropriately scoped substitute for assessing the employee's specific endpoint.",
    "Office address ranges omit endpoints currently on remote networks, regardless of the scan's speed."
  ],
  "BC-Q043": [
    "An executive summary emphasizes program risk, trends and remediation progress in a format appropriate for a high-level audience.",
    "A raw record export can overwhelm an executive audience without the requested aggregation and context.",
    "Detailed per-host plugin output is useful to technical remediation teams rather than being the best executive summary.",
    "Nessus XML is a technical assessment export and is not the most suitable executive communication format."
  ],
  "BC-Q044": [
    "Ticket integration coordinates work but does not automatically replace the program, patch systems or validate every fix.",
    "Configured integrations transfer qualifying finding context into tickets and route work through the appropriate remediation process without manual export/import.",
    "A ticketing integration does not turn ServiceNow into the Nessus assessment engine.",
    "Transport security may be relevant, but encryption alone is not the main workflow benefit requested."
  ],
  "BC-Q045": [
    "Rotating credentials does not ordinarily require rebuilding every assessment policy from scratch.",
    "Update the credential source actually used by the scans and verify successful authenticated collection afterward, including patch inventory rather than relying on plugin 19506 alone.",
    "Disabling Windows checks removes evidence and does not restore the rotated account's access.",
    "Changing priority thresholds cannot compensate for failed authentication or missing local assessment data."
  ],
  "BC-Q046": [
    "ACR is an asset-specific criticality input and does not directly customize the vulnerability's globally calculated VPR.",
    "Functional exploit code provides concrete exploitability evidence relevant to VPR prioritization; no single signal guarantees a fixed score increase.",
    "A CVE identifier alone does not supply the same practical exploitation evidence as functional exploit code.",
    "Age by itself does not establish stronger current exploitation signals or a universally higher VPR."
  ],
  "BC-Q047": [
    "With valid collected evidence, Failed indicates that the tested configuration did not satisfy the selected CIS requirement.",
    "Failure of a particular control does not mean that no applicable operating-system benchmark exists.",
    "A connection problem can affect evidence collection, but it is not the definition of a validated Failed configuration result.",
    "Insufficient credentials require collection diagnosis and do not universally define every Failed audit outcome."
  ],
  "BC-Q048": [
    "User groups organize access; they do not create separate custom CVSS scoring formulas.",
    "Grouping vulnerability work for remediation is a different concept from organizing users and their permissions.",
    "Sensor target ranges and Network associations are not the purpose of user access groups.",
    "Groups organize users so appropriate permissions can be assigned consistently to the scans, assets and results they need."
  ],
  "BC-Q049": [
    "A cross-asset findings/workbench view sorted by VPR supports organization-wide vulnerability triage; local business context still needs separate consideration.",
    "A plugin family summary groups checks rather than providing the requested prioritized cross-asset finding list.",
    "One asset's last-scan date is a freshness view, not a program-wide vulnerability priority ranking.",
    "An individual scanner's results do not inherently aggregate all relevant findings across the organization."
  ],
  "BC-Q050": [
    "Current documentation also gives Scan Manager policy/scan management without user administration, so this option meets the stated condition too. The item is not uniquely answerable as written.",
    "Administrator includes user management, which conflicts with the stated restriction.",
    "The imported key selects Standard for managing its own scans and templates without user administration. Scan Manager can also satisfy the wording, so distinguish own-resource management from broader scan oversight.",
    "Read-Only users can inspect allowed data but cannot create and manage scan policies."
  ],
  "BC-Q051": [
    "Recast changes the severity classification of matching findings, whereas risk acceptance records a decision to tolerate the exposure.",
    "Recasting does not retroactively remove the vulnerability from all historical scan evidence.",
    "Vendor disclosure is a separate communication workflow, not the effect of a severity recast.",
    "A severity override does not reassign the technical finding to a different asset."
  ],
  "BC-Q052": [
    "A custom port range excluding 1-1023 limits the port-scanning phase to the intended higher-numbered ports. It is not a universal guarantee against every plugin connection; review check-specific access too.",
    "Discovery can still probe lower-numbered ports unless its actual port configuration excludes them.",
    "Safe Checks avoids potentially harmful checks but does not itself define the requested port range.",
    "Asset criticality affects prioritization and does not control which ports the scanner probes."
  ],
  "BC-Q053": [
    "Safe Checks is not an encrypted-traffic-only scan restricted to TCP 443.",
    "Safe Checks avoids checks known to risk adversely affecting the host; overall load and target sensitivity still require assessment.",
    "ACR describes business importance and is not the selection threshold defining Safe Checks.",
    "Safe Checks does not deploy compensating controls or automatically change failing target configuration."
  ],
  "BC-Q054": [
    "An MTTR trend adds evidence about remediation speed over time, complementing the current outstanding critical count.",
    "The number of online sensors measures collection infrastructure, not the rate at which vulnerabilities are resolved.",
    "Assessment volume adds coverage context but does not directly measure remediation progress.",
    "A severity distribution describes the risk mix rather than how quickly the organization closes findings."
  ],
  "BC-Q055": [
    "Campaign references are a workflow relationship and not a plugin execution concurrency setting.",
    "The number of users viewing findings does not determine how many checks run against a target.",
    "This setting limits concurrent plugin checks against each host, supporting control of scan-induced resource pressure.",
    "It does not cap the number of CVEs that a host can report; it limits simultaneous assessment work."
  ],
  "BC-Q056": [
    "Plugin suppression changes assessment or result scope; it does not save a workbench query and view.",
    "An ACR override changes asset criticality rather than preserving a set of analyst filters.",
    "A scheduled report is a generated document workflow, not the saved interactive workbench view requested.",
    "A saved search/view or appropriately configured dashboard widget preserves the intended filtering configuration for repeat use."
  ],
  "BC-Q057": [
    "The appropriately configured ServiceNow CMDB integration synchronizes asset/CI information; verify which application and supported direction are being used.",
    "Agent deployment collects host evidence but does not by itself synchronize the enterprise CMDB.",
    "Entering target ranges manually is not automatic record synchronization with the CMDB.",
    "A cloud-provider connector is not a generic on-premises LDAP-to-CMDB synchronization mechanism."
  ],
  "BC-Q058": [
    "Deleting the asset hides evidence and does not establish whether the detection or compliance interpretation was wrong.",
    "Automatic acceptance without investigation omits the required evidence and approved treatment decision.",
    "ACR is asset business criticality; increasing it does not validate whether the vulnerability was correctly detected.",
    "Investigate and document the detection and use the applicable dispute or approved treatment process. A stopped service is not, by itself, proof of a false positive, and recasting does not automatically satisfy PCI requirements."
  ],
  "BC-Q059": [
    "Changing a compliance result is a different operation from contextual treatment of a vulnerability finding.",
    "A documented, approved recast can adjust finding severity to reflect a verified compensating control while retaining the underlying evidence.",
    "Reducing asset business criticality is not a substitute for evaluating the specific vulnerability's compensating control.",
    "VPR is globally calculated from vulnerability/threat information; it does not automatically incorporate every organization's WAF deployment."
  ],
  "BC-Q060": [
    "VPR is dynamic rather than permanently fixed at CVE publication.",
    "The documented VPR update cadence is daily, not a quarterly plugin-feed-only schedule.",
    "Daily VPR recalculation incorporates changing threat information rather than relying solely on the original technical score.",
    "Threat developments can change VPR independently of whether NVD revises the CVSS score."
  ],
  "BC-Q061": [
    "Discovery alone does not immediately consume the vulnerability-assessment asset license described in the question.",
    "Adding a widget changes presentation and is not the licensing trigger for a discovered asset.",
    "Discovery-only assets are excluded from assessment license counting; later vulnerability assessment or other applicable licensed activity must be considered separately.",
    "An open port discovered in an inventory scan does not, by itself, convert the discovery activity into the relevant vulnerability assessment."
  ],
  "BC-Q062": [
    "Keep private controls publication into the common findings views; it does not mean results are immediately deleted after upload.",
    "The setting concerns result handling, not automatically replacing the selected plugins with discovery-only checks.",
    "Private results remain directly accessible from the scan but do not update dashboard/workbench findings or their vulnerability lifecycle states.",
    "The described setting prevents shared finding-state updates rather than merely restricting already published dashboard findings to administrators."
  ],
  "BC-Q063": [
    "Credential Validation checks authentication rather than performing the requested internal PCI vulnerability assessment.",
    "Host Discovery establishes inventory and does not replace the required vulnerability assessment.",
    "A legacy web application template does not provide the internal network PCI scan requested.",
    "Internal PCI Network Scan is the template specifically intended for an internal PCI DSS network vulnerability assessment."
  ],
  "BC-Q064": [
    "Agents are not polled through inbound SNMP UDP 161 for this cloud communication workflow.",
    "TCP 8834 is a Nessus interface port and is not the required inbound connection to every agent endpoint.",
    "Agents run local checks rather than requiring inbound SMB or SSH from the cloud scanner to execute them.",
    "Agents initiate the standard cloud communication outbound on TCP 443, so this purpose does not require inbound access from Tenable to each endpoint."
  ],
  "BC-Q065": [
    "Supported asynchronous or catch-up behavior can assess an endpoint after it becomes available; check the actual scan method and configured reporting rules.",
    "The normal agent workflow does not inherently require an administrator to import a scan file after every offline interval.",
    "An offline agent does not automatically cause a cloud scanner to probe its laptop's public address.",
    "A dashboard refresh cannot supply assessment evidence that every existing finding has been fixed."
  ],
  "BC-Q066": [
    "Agent scan target membership is specified through an agent group, which selects the participating endpoints.",
    "Scanner groups organize network assessment infrastructure rather than the endpoint participants of an agent scan.",
    "The documented target selection uses groups rather than selecting an individual linked agent directly as the scan target type.",
    "A raw CIDR range identifies network addresses and is not the participant target type for host-installed agents."
  ],
  "BC-Q067": [
    "A successful authenticated follow-up must collect the local evidence needed to verify mitigation of the credentialed patch finding.",
    "Discovery alone does not inspect the required Windows local patch state.",
    "Recasting severity is unnecessary for technical mitigation and does not establish that the patch was installed.",
    "Windows patch findings can transition to Fixed after a qualifying reassessment confirms mitigation."
  ],
  "BC-Q068": [
    "For this local-treatment case, a closed remote port alone does not inspect the underlying host condition that produced the combined-plugin finding.",
    "Combined plugins reported on port 0 or 445 are treated as local for the stated mitigation requirement and need successful authenticated follow-up.",
    "A refresh or feed update is not new authenticated evidence of mitigation on the asset.",
    "Host Discovery identifies hosts/services but does not provide the local evidence required to mitigate this finding."
  ],
  "BC-Q069": [
    "Resurfaced records a renewed detection after the same vulnerability had previously been marked Fixed.",
    "Risk acceptance is a treatment decision and is not the resurfaced lifecycle condition.",
    "An initial first detection is New, not Resurfaced.",
    "Repeated detection without an intervening Fixed state describes Active rather than Resurfaced."
  ],
  "BC-Q070": [
    "UI lifecycle labels are not all returned verbatim by the API.",
    "These created/running/failed/closed labels describe a different lifecycle vocabulary, not the documented finding mappings.",
    "The documented mapping is New and Active to open, Resurfaced to reopened, and Fixed to fixed.",
    "Active is not mapped to confirmed, and Fixed is not equivalent to deleting the finding."
  ],
  "BC-Q071": [
    "Dashboard placement describes presentation and does not identify the service-specific occurrence on the asset.",
    "The plugin ID, port and protocol combination distinguishes a vulnerability instance within the asset's context.",
    "Scheduling and scanner group information do not define the individual vulnerability instance.",
    "Operating system and owner are asset attributes rather than the plugin/service occurrence key."
  ],
  "BC-Q072": [
    "Ninety days is associated with other asset or licensing windows and is not the findings-retention period asked here.",
    "The documented findings data retention window is 15 months; this differs from shorter report views and asset handling policies.",
    "Findings retention is not universally indefinite, and deleting a scan is not the only relevant lifecycle consideration.",
    "Thirty days describes the stated standard report data window rather than the longer findings-retention window."
  ],
  "BC-Q073": [
    "The issue is the query condition limit, not a universal administrator-only restriction on Boolean operators.",
    "Saved Views can preserve Query Builder filters; they are not prohibited from containing them.",
    "Twenty-five conditions exceed the documented maximum of twenty, explaining the Invalid filter error.",
    "Selecting a curated query does not universally disable all subsequent custom filtering."
  ],
  "BC-Q074": [
    "A scanner group selects assessment infrastructure rather than saving filters and table layout.",
    "A scan folder organizes scan definitions and results, not the analyst's Explore workspace layout.",
    "A Saved View preserves the query and supported table customizations, including columns, sorting and grouping.",
    "Recast changes severity treatment of matching findings and is not a mechanism for saving a view layout."
  ],
  "BC-Q075": [
    "Credentialed Scan Failures targets collection problems rather than catalog membership for known exploited CVEs.",
    "Network Devices segments assets and does not specifically select CISA KEV vulnerabilities.",
    "External Assets identifies exposure scope, not necessarily known exploitation of the vulnerabilities found there.",
    "The CISA KEV-oriented Tenable Query identifies findings associated with CVEs in the Known Exploited Vulnerabilities catalog."
  ],
  "BC-Q076": [
    "A simple CVSS threshold does not identify the specific emerging-threat intelligence being monitored by Tenable Research.",
    "Compliance transitions describe configuration audit outcomes rather than emerging exploitation activity.",
    "Emerging Threats focuses on vulnerabilities attracting research attention through discussion, proof-of-concept potential or observed abuse.",
    "Unassessed assets are a coverage issue and are not the vulnerability threat-intelligence category requested."
  ],
  "BC-Q077": [
    "The documented delay concerns evaluation and view caching, not an owner-only visibility rule tied to the next plugin update.",
    "Recast is not universally restricted to findings created after the rule; existing matching findings can also be affected.",
    "Exporting and reimporting a finding is not the required normal mechanism for applying the rule.",
    "Recast processing is eventually consistent and Explore can retain a cached view, so immediate unchanged severity is not proof of a failed rule."
  ],
  "BC-Q078": [
    "Recast changes vulnerability severity rather than the original host-audit Passed/Failed result.",
    "Accept records a treatment decision without being the specific operation that changes the displayed audit result value.",
    "A target group organizes scope and does not override the audit result.",
    "Change Result can override matching host-audit outcomes; record the approved exception because the override does not itself fix target configuration."
  ],
  "BC-Q079": [
    "Retaining older findings does not mean the standard generated report includes every historical record from account creation.",
    "The documented standard report data window is the last 30 days, which is distinct from the findings-retention window.",
    "A calendar quarter is not the standard 30-day window described for these reports.",
    "Fifteen months is the findings-retention period, not the standard report window requested."
  ],
  "BC-Q080": [
    "Can Use concerns applying a reusable object and does not describe the general view-only resource permission requested.",
    "Can Edit permits modifications and conflicts with the auditor's required restriction.",
    "Can Scan authorizes assessment activity rather than restricting the auditor to inspection and reporting.",
    "Can View provides visibility to permitted results without granting scan configuration changes; the user's role must also allow the requested reporting actions."
  ],
  "BC-Q081": [
    "The issue is scan-owner authorization, not a requirement that the launcher personally created each asset tag.",
    "Target permission evaluation uses the scan owner's scope, so targets outside that owner's permissions can be skipped despite the launcher's access.",
    "Editing report templates is unrelated to permission to assess a particular target.",
    "A Scan Operator can launch appropriately permitted shared scans; the problem is not a universal prohibition on scans owned by others."
  ],
  "BC-Q082": [
    "Roles and permissions apply across multiple product functions and resources, not only reports or only scans.",
    "The distinction is action versus data scope, not an exclusive scanner-versus-agent division.",
    "Roles govern the major actions a user can perform, while permissions constrain the resources on which the user may act.",
    "Roles are not simply temporary grants, and permissions are not synonymous with permanent administrator accounts."
  ],
  "BC-Q083": [
    "Can Use permits applying a reusable policy or template without granting the right to modify its centrally managed configuration.",
    "Can Edit grants modification rights beyond the requested use-only access.",
    "Can Scan authorizes assessment activity but is not the reusable-object use permission described here.",
    "Can View permits inspection; applying the reusable object requires the appropriate use permission and functional role."
  ],
  "BC-Q084": [
    "The target selection modes do not distinguish Fixed versus Active finding states.",
    "Both modes can be relevant to scanner templates; they are not a universal agent-versus-cloud-scanner split.",
    "The distinction is existing membership versus rule-derived targets, not public versus private addressing.",
    "Existing tagged assets only uses current tagged inventory, whereas Targets defined by tags derives addresses or names from supported matching rules."
  ],
  "BC-Q085": [
    "Supported IPv4 rules can be used; the issue is the combination mode rather than an absolute prohibition.",
    "In this target-resolution context, Match All supports one rule; multiple supported address/name rules require the documented Match Any arrangement.",
    "Converting to an agent scan is not the fix for an incorrectly combined scanner target rule set.",
    "Rule-derived targets are not universally restricted to assets already assessed with credentials."
  ],
  "BC-Q086": [
    "The documented upload format is not a JSON array restricted to CIDR entries.",
    "UTF-16 and comma-separated rows do not match the required ASCII-compatible, one-target-per-line representation.",
    "A scanner UUID before every target is not part of the documented target-file format.",
    "Use the documented ASCII representation with one target per line and without trailing spaces or extra final lines. Pure ASCII bytes are also valid UTF-8, so distinguish actual byte content from an encoding label."
  ],
  "BC-Q087": [
    "Triggered scans are not inherently limited to informational findings; the configured checks determine what they detect.",
    "Show in dashboard is always enabled for triggered scans in the documented Basic settings, so they are not private troubleshooting scans through that choice.",
    "Triggered scans can contribute vulnerability lifecycle updates when they supply qualifying assessment evidence.",
    "The documented result setting is the opposite: triggered scans cannot be restricted to Keep private through this option."
  ],
  "BC-Q088": [
    "The documented manual override does not require deleting and rediscovering the asset.",
    "The guide allows a delay up to 24 hours rather than guaranteeing exactly fifteen minutes.",
    "A saved manual ACR override can take up to 24 hours to appear in the UI, reflecting eventual processing of the changed asset context.",
    "A quarterly feed event is not the prerequisite or timing interval documented for this manual criticality change."
  ],
  "BC-Q089": [
    "Separate Networks disambiguate overlapping addresses; the scenario does not establish automatic merging of all matching private IPs.",
    "Moving assets after scans and leaving the sensor in the old Network can create duplicate or recreated records, so coordinate asset and scanner movement.",
    "Changing Network context does not convert host assets into web application assets.",
    "A later scan does not universally and permanently delete all assets moved to another Network."
  ],
  "BC-Q090": [
    "Deletion removes the asset and associated findings rather than merely hiding its display name indefinitely.",
    "A subsequent detection need not recover the deleted identity and all historical evidence automatically.",
    "The documented operation is permanent deletion, not a fifteen-month quarantine folder.",
    "Deleting the host removes its asset record and associated finding data and stops matching results to that deleted identity; licensing reclamation follows its own documented timing."
  ],
  "BC-Q091": [
    "Assessment results can require indexing before dashboard values refresh, so a short delay alone does not establish scan failure.",
    "The program dashboard is not restricted to quarterly updates.",
    "Dashboard widgets can summarize open and other finding states; they do not only display Fixed vulnerabilities.",
    "Linked-scanner results can contribute to dashboards when configured for shared findings publication."
  ],
  "BC-Q092": [
    "Report definitions/templates and generated report results are distinct; the documented result ownership restriction can explain visibility limited to the user's own outputs.",
    "A reusable report template and its generated result are different objects with different access behavior.",
    "Fifteen-month findings retention is unrelated to a waiting period for report-result access.",
    "Manager status is not a universal prohibition on viewing reports the user is otherwise permitted to generate or access."
  ],
  "BC-Q093": [
    "Pull Vulnerabilities is the ITSM job type for retrieving VM vulnerability data into the ServiceNow integration.",
    "Recasting is a finding treatment operation and not the documented ITSM data-pull job name.",
    "Push Assets belongs to asset synchronization rather than importing vulnerability records into the ITSM module.",
    "Pull Assets imports inventory/CI information under the Asset module rather than the requested vulnerability data."
  ],
  "BC-Q094": [
    "Sharing one key across integrations couples their access and rotation; the cited plugin guidance recommends a separate key per instance.",
    "A distinct key per installed integration instance isolates that integration's API credential lifecycle and matches the cited Jira plugin guidance.",
    "A required token/key must be recorded securely; the integration cannot be assumed to recover a secret after reset.",
    "The required privilege scope depends on the documented integration operations; this statement also incorrectly claims the integration never collects vulnerability data."
  ],
  "BC-Q095": [
    "Collect Inventory gathers host/software inventory with a lower footprint for supported downstream missing-patch analysis.",
    "Host Discovery is a network inventory workflow and is not the agent software-inventory template requested.",
    "Credential Validation tests authentication rather than performing the specified lower-footprint agent inventory collection.",
    "A legacy web application template assesses a different target and does not collect the agent's local software inventory."
  ],
  "BC-Q096": [
    "Collect Inventory can collect Windows information; the limitation concerns particular application and update coverage rather than an absolute Linux-only rule.",
    "The cited template guidance documents these third-party Windows application and Microsoft product update gaps. Verify current coverage before replacing broader local assessment with inventory-only scans.",
    "The template's purpose is host/software inventory, not malware-only checks with all inventory disabled.",
    "Manual selection of every family is not the explanation for the specific documented coverage exclusions."
  ],
  "BC-Q097": [
    "Advanced Agent Scan is a customizable agent template supporting the documented Window and Triggered methods, with plugin selection requiring careful configuration.",
    "The template allows check customization; it does not universally enable every plugin and prohibit edits.",
    "External PCI ASV assessment is a different scan objective from this customizable host-agent template.",
    "Host Discovery belongs to network discovery and does not define the Advanced Agent Scan template."
  ],
  "BC-Q098": [
    "Ping-Only Discovery is the lightweight reachability-oriented template described; nonresponse still does not conclusively prove host absence.",
    "SCAP/OVAL auditing evaluates structured configuration or vulnerability content rather than being the minimal host-ping discovery method.",
    "Cloud infrastructure auditing assesses cloud configuration instead of simply pinging live hosts.",
    "Policy Compliance Auditing compares configuration requirements and is broader than lightweight reachability discovery."
  ],
  "BC-Q099": [
    "Collect Inventory supplies software/host information and is not the baseline configuration audit workflow requested.",
    "Malware assessment searches for malicious software rather than auditing registry and password policy requirements.",
    "Policy Compliance Auditing assesses configured benchmark requirements such as Windows password complexity and registry settings.",
    "Host Discovery identifies hosts and services; it does not provide the required baseline configuration audit."
  ],
  "BC-Q100": [
    "Agents provide local evidence but do not eliminate the applicable need to assess remotely exposed network services.",
    "Internal network scanning remains necessary for the network-service perspective and systems without agents; agent checks complement that coverage rather than replace it.",
    "Internal PCI findings are not automatically reviewed by Tenable assessors as an external ASV workflow before appearing.",
    "The internal agent template supports internal assessment; it is not solely an external ASV attestation mechanism."
  ]
};
const TenableTechnicalReview = {
  "BC-Q001": "The wording conflates vulnerability priority with asset-specific exposure. The imported key is retained; AES and ACR should be distinguished from the global VPR calculation.",
  "BC-Q003": "Plugin availability and successful authenticated inventory collection must be checked. Neither universal plugin presence nor complete collection follows from the opening sentence.",
  "BC-Q007": "The imported snapshot-campaign model is product/workflow-specific. Do not assume current initiatives have identical membership and update behavior.",
  "BC-Q011": "Local collection and delivery are separate. Agents still need a supported update/reporting path; permanently isolated operation is not established by this answer.",
  "BC-Q012": "A critical VPR is not proof of exploitation in the wild. The strict requirement calls for explicit exploitation intelligence rather than a score-only filter.",
  "BC-Q021": "Agent scans can follow roaming endpoints, but scheduled or triggered collection is not continuous real-time vulnerability streaming.",
  "BC-Q023": "Managed asset status, licensing age and automatic deletion are distinct mechanisms. Current Asset Age Out can purge the asset and associated findings rather than always retaining an inactive historical record.",
  "BC-Q025": "Reusable target collections and VM Networks are different concepts. Confirm the product/version before adopting the imported Network Objects terminology.",
  "BC-Q029": "Agents avoid remote scan probes, but still generate communication for updates and uploads. Zero network traffic or zero IDS/IPS alerts is not guaranteed.",
  "BC-Q030": "The stated score band applies to CVSS v3. General Settings also supports other severity metrics, so tenant configuration must be checked.",
  "BC-Q032": "Verify current account entitlements and documented service limits. The imported wording is not evidence of unlimited sensor capacity.",
  "BC-Q037": "The official plugin 10397 is Microsoft Windows SMB LanMan Pipe Server Listing Disclosure, not SMB file-share enumeration. None of the descriptions precisely names its behavior; the imported key is retained for scoring.",
  "BC-Q045": "After rotation, verify local inventory and checks as well as accepted credentials; plugin 19506 alone does not prove full collection.",
  "BC-Q050": "Both Standard and Scan Manager can meet the stated condition in current documentation. The question needs an own-scope versus broader management distinction to have one unique answer; the imported key is retained.",
  "BC-Q052": "A port-scanner range controls discovery probing, but authenticated or plugin-specific connections can have additional ports. Do not interpret it as a universal traffic guarantee.",
  "BC-Q058": "A stopped service alone does not establish a false positive. Investigate the original detection and applicable PCI validation/dispute requirements before approving a treatment.",
  "BC-Q065": "Catch-up behavior depends on the configured agent scan method, timing and reporting rules; it is not an automatic guarantee for every missed window.",
  "BC-Q086": "Pure ASCII is byte-compatible with UTF-8. Check actual target-file content, BOM and formatting rather than treating every UTF-8 label as automatically invalid.",
  "BC-Q096": "The listed inventory-template coverage exclusions are version-dependent; check the current template guidance before using inventory collection as a full assessment replacement."
};
const ComplementaryReferences = {
  "BC-Q001": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    },
    {
      "title": "Scoring — official documentation",
      "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
    }
  ],
  "BC-Q003": [
    {
      "title": "Checks — official documentation",
      "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
    }
  ],
  "BC-Q007": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q011": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q012": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q020": [
    {
      "title": "Snow — official documentation",
      "url": "https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm"
    }
  ],
  "BC-Q021": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q023": [
    {
      "title": "Aging — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-networks.htm"
    }
  ],
  "BC-Q025": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q030": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    },
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q037": [
    {
      "title": "Plugin — official documentation",
      "url": "https://www.tenable.com/plugins/nessus/10397"
    }
  ],
  "BC-Q045": [
    {
      "title": "Checks — official documentation",
      "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
    }
  ],
  "BC-Q050": [
    {
      "title": "Roles — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/TenableRolePrivileges.htm"
    }
  ],
  "BC-Q057": [
    {
      "title": "Snow — official documentation",
      "url": "https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm"
    }
  ],
  "BC-Q058": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    },
    {
      "title": "Checks — official documentation",
      "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
    }
  ],
  "BC-Q065": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q077": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q081": [
    {
      "title": "Rbac — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/best-practices/RBAC/Content/best-practices.htm"
    }
  ],
  "BC-Q088": [
    {
      "title": "Scoring — official documentation",
      "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
    }
  ],
  "BC-Q093": [
    {
      "title": "Snow — official documentation",
      "url": "https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm"
    }
  ],
  "BC-Q094": [
    {
      "title": "Jira — official documentation",
      "url": "https://docs.tenable.com/integrations/Atlassian/Jira/Content/configure_tio_addon.htm"
    }
  ],
  "BC-Q095": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q096": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q097": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q100": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q010": [
    {
      "title": "Cvss — official documentation",
      "url": "https://www.first.org/cvss/v3.1/specification-document"
    }
  ],
  "BC-Q019": [
    {
      "title": "Cvss — official documentation",
      "url": "https://www.first.org/cvss/v3.1/specification-document"
    }
  ],
  "BC-Q026": [
    {
      "title": "Cvss — official documentation",
      "url": "https://www.first.org/cvss/v3.1/specification-document"
    }
  ],
  "BC-Q041": [
    {
      "title": "Cvss — official documentation",
      "url": "https://www.first.org/cvss/v3.1/specification-document"
    }
  ],
  "BC-Q002": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q004": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q005": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q006": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q008": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q009": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q013": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q014": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q015": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q016": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q017": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q018": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q022": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q024": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q027": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q028": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q029": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q031": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q032": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q033": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q034": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q035": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q036": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q038": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q039": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q040": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q042": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q043": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q044": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q046": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q047": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q048": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q049": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q051": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q052": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q053": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q054": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q055": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q056": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q059": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q060": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q061": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q062": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q063": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q064": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q066": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q067": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q068": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q069": [
    {
      "title": "Recast — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
    }
  ],
  "BC-Q070": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q071": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q072": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q073": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q074": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q075": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q076": [
    {
      "title": "Risk — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
    }
  ],
  "BC-Q078": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q079": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q080": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q082": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q083": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q084": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q085": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q086": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q087": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q089": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q090": [
    {
      "title": "Networks — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
    }
  ],
  "BC-Q091": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q092": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ],
  "BC-Q098": [
    {
      "title": "Templates — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
    }
  ],
  "BC-Q099": [
    {
      "title": "General — official documentation",
      "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
    }
  ]
};
for (const sim of SIMULADOS.filter(s=>s.complementary)) for (const q of sim.questions) {
  q.x=ComplementaryOptionExplanations[q.id].slice(); q.explanationLanguage='en'; q.origin='complementar';
  q.references=ComplementaryReferences[q.id]; q.reviewNote=TenableTechnicalReview[q.id] || '';
}
