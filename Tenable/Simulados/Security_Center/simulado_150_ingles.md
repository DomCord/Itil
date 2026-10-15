# Security Center Specialist — 150 practice questions (English)

Personal, noncommercial educational copy. Copyright Bayview Global LLC. Independent practice material; not official exam questions.

Training time reference: 300 minutes, not an official exam duration.


## SC-Q001

What is the fundamental architectural difference between Tenable.sc and Tenable.io?

- A. Tenable.sc supports only Windows targets; Tenable.io supports multi-platform environments
- B. Tenable.sc stores all vulnerability data on-premises under customer control; Tenable.io stores data in Tenable's cloud
- C. Tenable.sc uses agents for all scanning; Tenable.io uses only network-based scanning
- D. Tenable.sc requires physical hardware; Tenable.io can only be deployed as a virtual machine


## SC-Q002

In Tenable.sc, what is the function of a 'Scan Zone'?

- A. A Scan Zone defines the time window during which scans are allowed to run
- B. A Scan Zone is a compliance policy applied to a set of assets
- C. A Scan Zone is a repository partition for storing scan data from different network segments
- D. A Scan Zone defines which Nessus scanners are available to scan specific IP ranges and can be allocated to organizations


## SC-Q003

In Tenable.sc, what is a 'Repository' and what types are available?

- A. A shared folder for exporting reports to network drives
- B. A file system folder storing Nessus scan policy XML files
- C. A backup archive of Tenable.sc configuration settings
- D. A database storing scan data; types include IPv4, IPv6, Agent, and Universal repositories


## SC-Q004

What is the purpose of a 'Universal Repository' in Tenable.sc?

- A. To store scan data from all organizations in a single unified view
- B. To store both agent-based and agentless (network scan) vulnerability data in a single repository
- C. To store compliance benchmark results separately from vulnerability data
- D. To archive scan data permanently without retention limits


## SC-Q005

Which Tenable.sc user role can manage users within an organization but cannot configure system-wide settings like creating new organizations?

- A. Administrator
- B. Security Manager
- C. Security Analyst
- D. Auditor


## SC-Q006

In Tenable.sc, what is the difference between a 'Static Asset List' and a 'Dynamic Asset List'?

- A. A Static Asset List contains external IPs; a Dynamic Asset List contains internal IPs
- B. A Static Asset List cannot be modified once created; a Dynamic Asset List changes automatically based on scan schedule
- C. A Static Asset List contains manually defined IP addresses; a Dynamic Asset List automatically includes IPs matching query criteria
- D. A Static Asset List is used for compliance scanning; a Dynamic Asset List is used only for vulnerability scanning


## SC-Q007

How does an administrator pair a remote Nessus scanner with Tenable Security Center?

- A. Create an SSH tunnel between the Nessus scanner and the Tenable Security Center server
- B. Add the scanner in Resources > Nessus Scanners using the scanner hostname/IP, port 8834, and an administrator username and password (or SSL certificate authentication)
- C. Generate a linking key in Tenable Security Center and paste it into the Nessus Linking Key field during scanner setup
- D. Upload the Nessus scanner SSL certificate to the Tenable Security Center DNS allowlist


## SC-Q008

What is the Tenable.sc 'Auditor' user role's primary capability?

- A. Managing user accounts within their assigned organization
- B. Running on-demand scans against specific asset lists
- C. Creating compliance audit policies and assigning them to scan zones
- D. Read-only access to reports, dashboards, and scan results without the ability to create or modify anything


## SC-Q009

In Tenable.sc, what happens to scan data when the configured data retention period for a repository expires?

- A. The oldest vulnerability data is purged from the repository based on the retention settings
- B. The repository is locked until an administrator manually clears old data
- C. All scan data is retained permanently regardless of retention settings
- D. The data is automatically archived to a remote offsite repository


## SC-Q010

Which Tenable.sc query filter would you use to build a dynamic asset list containing all assets with at least one Critical (CVSS 10.0) vulnerability?

- A. CVSS filter greater than 9.0 in the Static Asset List builder
- B. ACR filter greater than 8 in the repository query
- C. Severity filter set to 'Critical' in the Dynamic Asset List query
- D. Plugin family filter set to 'Windows: Microsoft Bulletins'


## SC-Q011

In Tenable.sc, what is an 'Organization' and what is its purpose?

- A. A grouping of scan policies that share the same compliance benchmark
- B. An external partner company that Tenable.sc can share vulnerability data with automatically
- C. A naming convention for grouping Nessus scanners by physical location
- D. A logical boundary grouping users, repositories, scan zones, and assets to provide multi-tenant separation within a single Tenable.sc instance


## SC-Q012

A Tenable.sc deployment has a DMZ network segment with no inbound access to the corporate scanner. What is the correct approach to scan the DMZ assets?

- A. Use passive monitoring only since active scanning is impossible in a DMZ
- B. Export the Tenable.sc scan policy to a standalone Nessus and manually import results
- C. Deploy an additional Nessus scanner in the DMZ, pair it with Tenable.sc, and configure a scan zone for the DMZ subnet
- D. Extend the corporate scanner's scan zone to include the DMZ IP range


## SC-Q013

Which Tenable.sc feature allows administrators to track vulnerability trending over time without requiring a separate reporting tool?

- A. The scan history export to CSV for spreadsheet trend analysis
- B. Dashboard components using trend-enabled data sources that chart vulnerability counts over time
- C. The compliance benchmark improvement tracker in scan policies
- D. Repository comparison between two different repository types


## SC-Q014

In Tenable.sc, what is required to enable an organization to use a specific repository?

- A. The Administrator must assign repository access to the organization in the repository configuration
- B. The Security Manager must create the repository within their organization
- C. Users must have Auditor or higher role to access repository data
- D. The repository must be mapped to the organization's scan zone


## SC-Q015

What is the purpose of 'Combination Asset Lists' in Tenable.sc?

- A. To create a new asset list by performing union, intersection, or difference operations on existing asset lists
- B. To share asset lists between multiple organizations simultaneously
- C. To merge repository data from two different scan cycles
- D. To combine static and dynamic asset list data into a single IP export file


## SC-Q016

In a Tenable.sc deployment with multiple organizations, how is scan data separated between organizations?

- A. Each organization has a completely separate Tenable.sc database instance
- B. Data separation is enforced by the Nessus scanner assigning results to specific organizations
- C. Each organization is assigned access to specific repositories; scan results are stored in those repositories and users only see data from their assigned repositories
- D. Scan results are tagged with an organization ID and filtered at query time for each user


## SC-Q017

Which Tenable.sc dashboard component is best suited for tracking the number of critical vulnerabilities on a specific asset list over the last 30 days?

- A. A pie chart component showing current severity distribution across the asset list
- B. A trending graph component filtered to the asset list with severity set to Critical and a 30-day time range
- C. A table component listing the top 10 hosts by vulnerability count
- D. A summary component showing current total vulnerability count


## SC-Q018

What is Tenable.sc's 'offsite repository' synchronization feature used for?

- A. To replicate vulnerability data from one Tenable.sc instance to another for disaster recovery or consolidated reporting
- B. To synchronize Nessus plugin feeds between primary and secondary Tenable.sc servers
- C. To automatically back up Tenable.sc configuration to a cloud storage bucket
- D. To share scan results with Tenable.io for cloud-based analysis


## SC-Q019

In Tenable Security Center, which approach provides interactive, dynamic filtering of vulnerability data without exporting a static report file?

- A. Schedule a CSV report and open it only in a text editor
- B. Export an HTML report and rely on browser print preview filters
- C. Generate a PDF report with embedded JavaScript for dynamic filtering
- D. Use the vulnerability analysis Query interface or an interactive dashboard component


## SC-Q020

What is the 'IP Normalization' setting in a Tenable.sc repository and why is it important?

- A. It standardizes port numbering across different scan policy configurations
- B. It normalizes CVSS scores across different Nessus plugin versions
- C. It converts IPv6 addresses to IPv4 format for storage in IPv4 repositories
- D. It maps different DNS names or agent IDs resolving to the same IP address to a single asset record, preventing duplicate vulnerability tracking


## SC-Q021

In Tenable Security Center, which built-in organizational role can create scan policies and run scans but cannot manage groups or users?

- A. Administrator
- B. Security Analyst
- C. Security Manager
- D. Auditor


## SC-Q022

What differentiates a Tenable.sc 'Active Scan' from a 'Passive Scan' configuration?

- A. Active scans send probe packets to targets; passive scans monitor network traffic without sending probes
- B. Active scans run continuously; passive scans are run on a fixed schedule
- C. Active scans require Administrator approval; passive scans can be run by Security Analysts
- D. Active scans are performed by Nessus Agents; passive scans are performed by the network scanner


## SC-Q023

In Tenable.sc, which type of credential is typically used for credentialed scanning of Windows servers joined to an Active Directory domain?

- A. SSH key-based authentication for Windows Server Core installations
- B. SNMP community string for Windows Management Instrumentation (WMI) access
- C. Windows credentials with domain administrator or dedicated scan account in the Domain Admins or local Administrators group
- D. API token authentication via the Windows REST API


## SC-Q024

A Tenable.sc administrator wants to generate a report showing all vulnerabilities on the PCI Cardholder Data Environment (CDE) assets with CVSS score 7.0 or higher. Which elements are required?

- A. A dedicated organization for the PCI CDE with Administrator-owned reporting
- B. A new scan policy configured with PCI compliance checks targeting the CDE subnet
- C. An offsite repository containing only CDE vulnerability data
- D. A static or dynamic asset list for CDE assets, a report configured with a CVSS filter for 7.0+, and access to the CDE repository


## SC-Q025

In Tenable.sc, which system component handles the web-based user interface and serves the management console?

- A. The Nessus scanner web interface forwarded through a reverse proxy
- B. The Tenable.sc web server (Apache-based) running on the Tenable.sc appliance
- C. A separate management server purchased alongside the Tenable.sc license
- D. The Tenable.sc database server which also serves HTTP connections


## SC-Q026

When configuring a Tenable.sc scan policy for compliance auditing, what file type must be uploaded to enable CIS Benchmark checks?

- A. Audit file (.audit) provided by Tenable or downloaded from the Tenable Audit Files portal
- B. Policy XML file exported from DISA STIG Viewer
- C. JSON configuration schema from the CIS website
- D. Nessus plugin bundle (.tar.gz) for compliance plugins


## SC-Q027

What is the default HTTPS port for accessing the Tenable.sc management console?

- A. 443
- B. 8834
- C. 8080
- D. 3000


## SC-Q028

In Tenable.sc, a Security Manager wants to ensure that a new analyst can only view vulnerability data for servers in the '10.10.0.0/16' subnet. What is the correct approach?

- A. Configure the analyst's Nessus scanner to only scan 10.10.0.0/16
- B. Create a separate Tenable.sc instance for the analyst with only 10.10.0.0/16 in the scan zone
- C. Create an asset list for 10.10.0.0/16, assign the repository containing that data to the organization, and ensure user permissions restrict them to that asset scope
- D. Apply a CVSS filter on the analyst's account to show only 10.10.0.0/16 results


## SC-Q029

Which Tenable.sc report chapter type displays a count of vulnerabilities per severity level as a bar chart?

- A. Asset Summary chapter with severity breakdown
- B. Table chapter sorted by severity
- C. Text chapter with embedded severity statistics
- D. Chart chapter using a vulnerability severity distribution data source


## SC-Q030

In Tenable.sc, what is the correct order of operations when setting up a new organization for a subsidiary company?

- A. Create the organization, assign repositories, create the Security Manager account, then allow the Security Manager to create analysts and configure scans
- B. Import the subsidiary's existing Nessus scan policies first, then create the organization around them
- C. Create Security Manager first, then create the organization, then assign repositories
- D. Create repositories first, then create scan zones, then create the organization with scan zone and repository assignments


## SC-Q031

What is the main purpose of Tenable.sc's 'Query' function in vulnerability analysis?

- A. To create saved filter expressions that retrieve specific vulnerability data from repositories for analysis or dashboard components
- B. To send API queries to external threat intelligence feeds
- C. To query the Nessus plugin database for information about specific CVEs
- D. To schedule automated vulnerability reports on a recurring basis


## SC-Q032

Which network protocol does the Tenable.sc web console use for communication between the administrator's browser and the Tenable.sc server?

- A. SNMP on port 161
- B. SSH on port 22
- C. HTTP on port 8080
- D. HTTPS (TLS-encrypted HTTP on port 443)


## SC-Q033

In Tenable.sc, which type of asset list would automatically capture all assets with a specific OS type detected during scanning without requiring manual updates?

- A. Watch List asset list type for OS-specific tracking
- B. Static Asset List imported from an OS inventory spreadsheet
- C. Combination Asset List intersecting all repositories
- D. Dynamic Asset List with an OS-type query filter


## SC-Q034

What Tenable.sc feature allows an administrator to see which Nessus scanners are currently active and their last check-in time?

- A. The Repository health status page
- B. Resources > Nessus Scanners in the Administration menu
- C. The Organization audit log
- D. The Scan Zone summary dashboard component


## SC-Q035

In Tenable.sc, what is the consequence of assigning the same IP range to two different scan zones each with different scanners?

- A. The IP range will be scanned twice simultaneously by both scanners, doubling network load
- B. Tenable.sc will reject the configuration and require unique IP ranges per scan zone
- C. Scans targeting that IP range can use either scanner, providing redundancy and flexibility
- D. Only the scan zone created first will be used; the second assignment is ignored


## SC-Q036

What is the 'Trend Days' setting in a Tenable.sc dashboard component?

- A. It sets how frequently the dashboard auto-refreshes vulnerability data
- B. It determines how many days before a vulnerability is considered aged-out
- C. It limits the number of days a report can be scheduled in advance
- D. It defines how many days of historical data to include in the time-series trend chart


## SC-Q037

Which Tenable.sc feature allows scheduled automatic export of a vulnerability report to a shared network location or email recipient?

- A. Scan results auto-export via webhook
- B. Dashboard snapshot exports on a cron schedule
- C. Repository synchronization with email notification
- D. Report scheduling with distribution settings (email or network path)


## SC-Q038

In Tenable.sc, which scan type is appropriate for detecting vulnerabilities in web applications running on internal servers?

- A. Compliance scan using a CIS web server benchmark audit file
- B. Web Application Scanning using a scan policy with web application test plugins enabled
- C. Discovery Scan targeting the web server IP addresses
- D. Basic Network Scan with port 443 as the only scan target


## SC-Q039

A Tenable.sc repository is configured with IPv4 data. An analyst needs to also track vulnerabilities for IPv6 hosts in the same environment. What should be done?

- A. Convert the IPv4 repository to Universal by changing the repository type setting
- B. Configure the Nessus scanner to translate IPv6 addresses to IPv4 before storage
- C. Create a separate IPv6 repository and configure scans to store IPv6 results in it, or use a Universal repository for both
- D. Create a static asset list for the IPv6 hosts and associate it with the IPv4 repository


## SC-Q040

What is the Tenable.sc 'SecurityCenter Director' (or 'Tenable.sc Director') used for?

- A. To aggregate Tenable.sc data with Tenable.io data for hybrid deployments
- B. To provide a single management pane across multiple distributed Tenable.sc consoles in a hierarchical deployment
- C. To manage Nessus scanner firmware updates across all paired scanners
- D. To serve as an on-premises replacement for Tenable.io for organizations requiring local data storage


## SC-Q041

In Tenable.sc, which element must be configured before a Security Analyst can run their first active scan?

- A. A Universal repository containing existing historical scan data
- B. At minimum one active scan policy, one scan zone with an assigned scanner, and target assets defined
- C. An Auditor role account to review results before the analyst can run scans
- D. An offsite repository for backup of scan results


## SC-Q042

Which Tenable.sc feature enables displaying vulnerability data from multiple repositories in a single dashboard view?

- A. Dashboard components can be configured to query across multiple repositories simultaneously
- B. The offsite sync feature merges repository data into a single consolidated repository
- C. Only one repository can be displayed per dashboard; multiple dashboards are required
- D. Repository federation mode enables transparent cross-repository queries


## SC-Q043

In Tenable.sc, how are Nessus Agent scan results stored differently from traditional network scan results?

- A. Agent results are stored only in cloud storage and not locally on Tenable.sc
- B. Agent results must be stored in an Agent repository or Universal repository; they cannot be stored in IPv4/IPv6 repositories
- C. Agent results are stored in the same IPv4 repository as network scan results without differentiation
- D. Agent results are automatically discarded after 24 hours to comply with endpoint privacy regulations


## SC-Q044

What is the best way to verify that a Tenable.sc credentialed scan successfully authenticated to Windows target hosts?

- A. Check plugin 19506 (Nessus Scan Information) output for the scanned host to confirm credentials were used
- B. Run a separate ping scan to confirm the host was reachable during the scan window
- C. Review the scan progress log for '200 OK' authentication responses
- D. Check the repository for WMI-specific plugin results on the target


## SC-Q045

A Tenable.sc dashboard is being built to show the top 10 most vulnerable servers ranked by critical vulnerability count. Which component type should be used?

- A. Bar chart component showing severity distribution across all assets
- B. Table component configured with a vulnerability data source sorted by Critical severity count, limit 10
- C. Pie chart component with severity segmentation, limited to 10 slices
- D. Text component with embedded query results from the vulnerability analysis


## SC-Q046

In Tenable.sc, which license model determines how many IPs can be actively scanned?

- A. Per-scanner licensing where each paired Nessus instance adds a fixed number of scannable IPs
- B. IP-based licensing where the license specifies the maximum number of concurrent unique IP addresses that can be scanned
- C. Unlimited IP scanning is included; licensing only limits the number of repositories
- D. Per-user licensing where each Security Analyst account adds scan capacity


## SC-Q047

What is the benefit of using a Tenable.sc 'Import' scan policy versus creating a new scan policy from scratch?

- A. It imports vulnerability findings directly into the repository without running a new scan
- B. It creates a read-only policy copy that cannot be accidentally modified
- C. It pulls the latest CIS benchmark audit files automatically from the Tenable policy store
- D. It allows reusing a Nessus scan policy (.nessus file) exported from another Nessus or Tenable.sc instance, saving configuration time


## SC-Q048

In a Tenable.sc compliance scan, what does a 'WARNING' result (vs. PASSED or FAILED) indicate?

- A. The compliance check requires an administrative approval before it can be marked passed
- B. The audit check could not definitively determine pass or fail — typically due to a configuration that partially meets the requirement or requires human judgment
- C. The target host was unreachable during the compliance check
- D. The vulnerability associated with the compliance check has been patched but the configuration still needs review


## SC-Q049

Which Tenable.sc feature enables tracking vulnerability data from both Nessus Agents and network scans for the same asset in a unified view?

- A. Two separate repositories displayed side-by-side in a split-screen dashboard
- B. A query that merges agent and network results at query execution time
- C. A combined scan policy that runs both agent and network checks simultaneously
- D. Universal Repository that accepts both agent and network scan data, combined with IP normalization


## SC-Q050

In Tenable.sc, which port must be open between a Nessus scanner and the Tenable.sc server for scanner management communication?

- A. TCP 8834
- B. TCP 22
- C. TCP 443
- D. UDP 161


## SC-Q051

What does 'Cumulative' vs 'Mitigated' mean in the context of Tenable.sc vulnerability views?

- A. Cumulative includes all historical vulnerability data; Mitigated shows only new findings from the last scan
- B. Cumulative applies to Critical and High vulnerabilities; Mitigated applies to Medium and Low
- C. Cumulative includes all organizations' data; Mitigated is filtered to a single organization
- D. Cumulative shows all currently active vulnerabilities; Mitigated shows vulnerabilities that were previously detected but are no longer present in the most recent scan


## SC-Q052

A Tenable.sc administrator needs to ensure the Nessus plugin feed is up to date on all paired scanners. What is the correct update mechanism?

- A. Tenable.sc pushes plugin updates to paired scanners automatically when it downloads new feed updates
- B. Each Nessus scanner must be manually updated by logging into its individual web console
- C. Plugin updates require a Tenable.sc reboot to be distributed to scanners
- D. Scanners update plugins independently from Tenable.com without Tenable.sc involvement


## SC-Q053

In Tenable.sc, which scan credential type is used for Linux/Unix servers in an enterprise environment with centralized key management?

- A. HTTP basic authentication for API-based credential verification
- B. SNMP v3 authentication with AES encryption
- C. Windows domain account credentials configured with SMB protocol
- D. SSH public key authentication with a private key uploaded to Tenable.sc credential management


## SC-Q054

What does the Tenable.sc 'Accept Risk' workflow allow a security team to do?

- A. Document that a specific vulnerability on a specific asset is acknowledged and the risk is formally accepted, removing it from active remediation tracking
- B. Escalate a vulnerability to the CISO for sign-off before it appears in dashboards
- C. Automatically apply patches to accepted vulnerabilities during the next maintenance window
- D. Transfer vulnerability ownership to a third-party vendor for external remediation


## SC-Q055

In Tenable.sc, which feature allows fine-grained control over what specific vulnerabilities appear in a report beyond severity and asset filters?

- A. Custom filter scripts must be written using the Tenable API
- B. Report filters are limited to the organization's assigned repositories
- C. Only severity and IP range filters are available in Tenable.sc reports
- D. Report filters including CVE, plugin ID, plugin family, port, protocol, and plugin text search


## SC-Q056

What happens in Tenable.sc when a scan is configured to store results in a repository that has reached its IP license limit?

- A. Scan results may fail to import or the system may generate a license warning, and new IPs beyond the limit may not be tracked
- B. The scan completes normally, and results are stored in a temporary buffer until licenses are added
- C. Tenable.sc automatically archives the oldest IP data to create room for new scan results
- D. The scanner pauses the scan until the administrator adds additional license capacity


## SC-Q057

In Tenable.sc, what configuration allows Security Analysts from different organizations to share read access to the same repository data?

- A. This is not possible in Tenable.sc; repositories are strictly single-organization
- B. Granting both organizations access to the shared repository in its configuration, combined with analyst-level permissions
- C. Using offsite sync to replicate the repository to each organization's dedicated repository
- D. Creating duplicate copies of the repository for each organization


## SC-Q058

Which network protocol does Nessus use to perform credentialed scanning of Windows hosts in Tenable.sc?

- A. SSH for encrypted command execution on Windows
- B. SMB (Server Message Block) for registry, WMI, and file system access
- C. SNMP for Windows system information enumeration
- D. RDP for interactive Windows session-based scanning


## SC-Q059

In Tenable.sc, which dashboard component type should be used when a manager wants to see a single number — the total count of Critical vulnerabilities across all assets?

- A. Table component with one row showing the total count
- B. Bar chart component with a single bar for Critical severity
- C. Summary component (single statistic) configured with Critical severity filter
- D. A text component with the vulnerability count embedded in a narrative


## SC-Q060

In Tenable.sc, what is the purpose of the 'Recast Risk' feature available to Security Managers?

- A. To automatically accept all instances of a vulnerability across the organization
- B. To escalate a vulnerability to the Administrator for system-wide severity reclassification
- C. To change the severity classification of a specific vulnerability on specific assets within the organization to better reflect the actual risk context
- D. To rerun the scan for specific vulnerabilities suspected of being false positives


## SC-Q061

A candidate is planning the Tenable Security Center certification path. Which exam order matches Tenable's certification process?

- A. Complete either exam first because the two exams are independent
- B. Complete only the practical exam because the written exam is optional
- C. Complete the practical exam first, then complete the written exam
- D. Complete the written qualification exam first, then complete the practical exam


## SC-Q062

Why must an administrator configure scan zones before running active scans in Tenable Security Center?

- A. Scan zones encrypt credentials before they are sent to Nessus scanners
- B. Scan zones define which dashboard templates organizational users can import
- C. Scan zones associate target IP ranges with one or more scanners that can reach those ranges
- D. Scan zones store vulnerability results after scans complete


## SC-Q063

What is the primary purpose of a repository in Tenable Security Center?

- A. To store scan policies before they are exported to Nessus scanners
- B. To store only dashboard layouts and report templates
- C. To store vulnerability data collected from scanners and make that data available to assigned organizations
- D. To store user passwords for LDAP and SAML authentication


## SC-Q064

Which built-in role is designed for a person who maintains scan credentials and shares them without revealing the credential values to scan operators?

- A. Credential Manager
- B. Executive
- C. No Role
- D. Auditor


## SC-Q065

An analyst repeatedly applies the same vulnerability filters for CVE ID and severity. What should they create to reuse that filter set?

- A. A query
- B. A linked user account
- C. A repository
- D. A scan zone


## SC-Q066

Which asset list type is immediately usable after configuration because it is simply a defined list of IP addresses?

- A. Static asset list
- B. Combination asset list
- C. LDAP query asset list
- D. Dynamic asset list


## SC-Q067

A team fixed a vulnerability and wants Tenable Security Center to verify the fix on affected hosts. Which feature is intended for that follow-up check?

- A. Linked account switch
- B. Remediation scan
- C. Dashboard refresh
- D. Offline repository import


## SC-Q068

How does Tenable Security Center normally keep dashboard data current for organizational users?

- A. It refreshes dashboard data only when the administrator restarts the Security Center service
- B. It refreshes dashboard data automatically once per day, with a manual Refresh All option available
- C. It never refreshes dashboard data after the dashboard is created
- D. It refreshes dashboard data only when a new scan policy is created


## SC-Q069

Which report output formats are explicitly supported by Tenable Security Center's built-in reporting capability?

- A. DOCX and PPTX
- B. OVF and VMDK
- C. PDF and CSV
- D. MP4 and WAV


## SC-Q070

An analyst launches an active scan with the schedule set to Now. What should they expect on the Active Scans page afterward?

- A. The scan is converted into a monthly recurring scan
- B. The scan is saved as a reusable on-demand scan and appears on the Active Scans page
- C. The scan launches immediately, but the scan configuration is not saved for later display on the Active Scans page
- D. The scan remains pending until an administrator manually saves it


## SC-Q071

Which statement best describes administrator users in Tenable Security Center?

- A. They are organizational users limited to one assigned repository
- B. They manage Security Center as a whole and do not belong to organizations
- C. They are created only through LDAP synchronization
- D. They can view dashboards but cannot configure scanners or organizations


## SC-Q072

What does a scan policy primarily define for active scans in Tenable Security Center?

- A. The repository encryption key for all vulnerability data
- B. Plugin settings and advanced directives used by the active scan
- C. The final report recipient list for every organization
- D. The authentication method for logging in to the web interface


## SC-Q073

A scan contains several Windows credential objects, and an older low-privilege credential can log in successfully before a newer administrator credential is tried. What happens?

- A. Tenable Security Center fails the scan because multiple credentials of the same type are not allowed
- B. Tenable Security Center uses the first credential that successfully logs in and stops trying other credentials of that type
- C. Tenable Security Center tries credentials in the order they were attached to the scan and always ignores object IDs
- D. Tenable Security Center continues trying all credentials and automatically switches to the highest-privilege account


## SC-Q074

An analyst created a dynamic asset list based on Linux hosts listening on TCP port 80, but it has no members yet in a new repository. What is the most likely missing step?

- A. Convert the dynamic asset list into a watchlist asset list
- B. Disable repository trend data so dynamic asset lists can calculate
- C. Run an initial discovery or assessment scan so Security Center has data to calculate the dynamic asset list
- D. Assign the dynamic asset list to the Administrator user account


## SC-Q075

A scan is configured with a single selected scan zone and a target list that includes only 10.10.50.25. The selected scan zone's range is 10.10.0.0/16. What does Tenable Security Center scan?

- A. No hosts, because target ranges must exactly match the zone range
- B. Only the targets specified in the scan configuration, using the selected zone's scanner assignment
- C. Every address in the scan zone range because the zone range overrides scan targets
- D. Only hosts already present in the import repository


## SC-Q076

An organization uses the Automatic Distribution Only scan distribution method. What change should scan creators expect in active scan configuration?

- A. Users can choose any scanner directly without scan zones
- B. Tenable Security Center chooses one or more scan zones automatically and hides manual scan zone selection
- C. All scans are blocked until an administrator enables external repositories
- D. Users must always choose exactly one scan zone before a scan can launch


## SC-Q077

A dashboard trend chart is blank for a repository even though current vulnerability data exists. Which repository setting is most directly related to generating the historical snapshots needed for trend displays?

- A. Linked User Accounts
- B. Dark Mode
- C. Restricted Scan Ranges
- D. Generate Trend Data


## SC-Q078

Which repository data lifetime setting has a shorter documented default than active, compliance, and mitigated data lifetimes?

- A. Mitigated vulnerability data
- B. Passive vulnerability data from Tenable Network Monitor
- C. Active agent scan vulnerability data
- D. Compliance audit data


## SC-Q079

A central Tenable Security Center deployment needs static reporting data from an isolated Security Center that can only transfer files manually. Which repository type fits best?

- A. Offline repository
- B. Universal repository
- C. Agent repository
- D. Remote repository


## SC-Q080

An organizational user cannot generate a DISA ASR report even though they can create ordinary custom reports. What prerequisite is likely missing?

- A. The scan was scheduled as On Demand instead of Daily
- B. An administrator has not enabled the specialized DISA report generation option
- C. The dashboard was not refreshed before the report was created
- D. The user has not converted the repository to an offline repository


## SC-Q081

An analyst wants to analyze only vulnerabilities from the Windows plugin family and then narrow further to a specific plugin ID range. Which filter components should they use?

- A. Scan Zone and Available Zones
- B. Plugin Family and Plugin ID
- C. User Role and Group Relationship
- D. Repository and Dashboard Layout


## SC-Q082

A vulnerability no longer appears in the current cumulative results but must be reviewed as previously fixed. Which Tenable Security Center view is intended for that data?

- A. Scan zone detail view
- B. Credential detail view
- C. Mitigated vulnerability view
- D. Current cumulative vulnerability view


## SC-Q083

A long active scan reaches its configured timeout and some hosts were not scanned. Which Scan Timeout Action preserves completed results and creates a follow-up scan for unfinished hosts?

- A. Import Completed Results With Rollover
- B. Discard Results
- C. Import Completed Results
- D. Scan Virtual Hosts


## SC-Q084

A laptop receives a new DHCP address between scans. Which tracking order does Tenable Security Center use when the DHCP tracking option is enabled?

- A. Repository UUID first, then scan zone, then dashboard component ID
- B. MAC address first, then IP address, then CVE ID, then repository name
- C. Agent ID first for all hosts, then plugin ID, then DNS name
- D. DNS name, then NetBIOS name, then Agent ID, then MAC address if known


## SC-Q085

A web server hosts several sites on the same IP address with different DNS names. What is the effect of enabling Scan Virtual Hosts in an active scan policy?

- A. The scan converts every web finding to a host-based plugin with port 0
- B. The scan disables web application results unless a separate license is installed
- C. The scan ignores DNS names and scans only the first resolved IP address
- D. New DNS names for the same IP can appear as separate vulnerability data entries instead of merging into one IP entry


## SC-Q086

A user needs broad organizational scanning and policy abilities but should not manage groups or users. Which built-in role most closely matches this need?

- A. Security Analyst
- B. Executive
- C. Auditor
- D. No Role


## SC-Q087

A team imports a scan policy exported from another Tenable Security Center instance and discovers the scan does not include expected credentials or audit files. What is the correct interpretation?

- A. Exported or imported scan policy files do not include credentials or audit files, so those must be configured separately
- B. The import failed because credentials and audit files are mandatory inside every policy file
- C. The policy can use credentials only if it is converted to a remediation scan
- D. Credentials and audit files are included only when the target repository is universal


## SC-Q088

A dashboard contains dozens of unrelated components and users struggle to analyze active scan data separately from passive event data. What design change aligns with Tenable's dashboard guidance?

- A. Replace dashboard components with static text blocks that summarize yesterday's findings
- B. Create separate dashboards that group similar components, such as one for active scanning data and one for passive data
- C. Put every component into a single dashboard so users never switch pages
- D. Disable all dashboard templates and require only custom PDF reports


## SC-Q089

An agent scan in Tenable Security Center shows incomplete results because Security Center fetched data before agents finished uploading. Which setting should be reviewed?

- A. PDF report Java dependency
- B. Scan Window duration for the agent scan
- C. Dashboard column layout
- D. Repository organization access


## SC-Q090

An analyst wants vulnerability analysis to show only Tenable Web App Scanning results. Which condition must be accounted for when using the Web App Scanning filter?

- A. It requires all findings to be host-based checks on port 0
- B. It is available only to Administrator users outside organizations
- C. It works only in the mitigated view and never in the cumulative view
- D. It requires the additional Web App Scanning license and a supported Nessus version


## SC-Q091

A manager asks why a host discovery scan did not increase the organization's licensed asset count. What is the best answer?

- A. All active scans count toward the license regardless of whether they find vulnerabilities
- B. Only unauthenticated scans count toward the license
- C. Only scans launched from dashboards count toward the license
- D. Discovery scans identify assets and do not count toward the license, while assessment scans generally do


## SC-Q092

An organization should be able to scan only approved ranges, even though users can create their own active scans. Which organization setting addresses ranges users must not scan?

- A. Restricted Scan Ranges
- B. Accessible Repositories
- C. Dark Mode
- D. Report Images


## SC-Q093

An analyst launches a remediation scan from Vulnerability Summary and finds the repository, target IP address, and port fields are not pre-populated as expected. Why is this behavior valid?

- A. Remediation scans never populate repository, target, or port fields from analysis views
- B. The fields are populated only after the remediation scan completes
- C. Vulnerability Summary may aggregate multiple repositories, IPs, and ports, so those fields can be default or empty
- D. Only agent repository findings can pre-populate remediation scan fields


## SC-Q094

A vulnerability found by an agent scan needs validation after patching. Which limitation must the team consider before using a Tenable Security Center remediation scan?

- A. Remediation scans must always scan every port on the target host
- B. Remediation scans can be performed only for active scan results, not for agent repository or OT Security scan results
- C. Remediation scans can run only against vulnerabilities with no dependent plugins
- D. Remediation scans require a scheduled scan policy before they can launch


## SC-Q095

An enterprise has overlapping scan zones for coverage redundancy. What scanner-routing behavior should they expect for a target that matches multiple zones?

- A. Tenable Security Center first attempts the scan using the narrowest, most specific matching scan zone
- B. Tenable Security Center randomly chooses any matching zone to spread load evenly
- C. Tenable Security Center refuses to run any scan that matches overlapping zones
- D. Tenable Security Center always chooses the oldest scan zone by creation date


## SC-Q096

A universal repository contains data from active Nessus scans, agents, and OT Security. Why does Tenable Security Center assign UUIDs to assets in asset repositories?

- A. Because UUIDs are required only for PDF report generation
- B. Because not all assets have stable IP addresses or Tenable UUIDs, and different data sources identify assets differently
- C. Because UUIDs replace the need to configure organization access to repositories
- D. Because UUIDs prevent passive vulnerability data from expiring


## SC-Q097

After a very large scan import, the next import is delayed while Security Center recalculates dynamic and combination asset lists. Which explanation matches the documented behavior?

- A. Dynamic and combination asset lists are recalculated only when a user manually refreshes a dashboard
- B. Asset list calculations are global across all repositories and always block every repository equally
- C. A scan import queues an asset calculation job per import repository, and the next scan import waits until that asset job completes
- D. Static asset lists trigger the same scan-import calculation delay because they depend on plugin output


## SC-Q098

A production scan policy has an entire plugin family enabled. Tenable later adds new plugins to that family through the feed. What is the expected behavior?

- A. The new plugins are automatically enabled if the entire plugin family is enabled in the policy template
- B. The new plugins are imported only after exporting and reimporting the policy
- C. The new plugins are enabled only for administrator-created scan policies
- D. The new plugins stay disabled until each plugin is selected individually


## SC-Q099

A custom organizational user can create policies but cannot update feeds. They attempt to create a role that includes Update Feeds. What should Tenable Security Center allow?

- A. It should silently create the role but remove all scanning permissions
- B. It should allow the role because custom roles can include any system permission
- C. It should allow the role only if the user also belongs to two groups
- D. It should prevent the user from creating a role with permissions greater than their own


## SC-Q100

A scan has Max scan duration set. It reaches that duration even though Scan Timeout Action is configured to Import Completed Results without rollover. What should the administrator expect?

- A. Tenable Security Center converts the scan to a remediation scan and launches it automatically
- B. Tenable Security Center discards all results because Max scan duration overrides import settings
- C. Tenable Security Center creates a rollover scan when Max scan duration is reached regardless of the Scan Timeout Action setting
- D. Tenable Security Center never creates a rollover scan unless Scan Timeout Action is set to Import Completed Results With Rollover


## SC-Q101

What is the primary purpose of an Assurance Report Card (ARC) in Tenable Security Center?

- A. Replace all PDF reports with a single executive spreadsheet export
- B. Provide a pass/fail overview of security posture using configurable policy statements evaluated against repository data
- C. Store Nessus plugin feed updates offline for air-gapped scanners
- D. Define which scan zones organizational users may select


## SC-Q102

Who can add a template-based or custom Assurance Report Card in Tenable Security Center?

- A. Organizational users with appropriate permissions
- B. Only Administrator users outside any organization
- C. Only Credential Manager users
- D. Only Auditor users with read-only access


## SC-Q103

How does an Assurance Report Card communicate results for each policy statement?

- A. Using repository IP license counts only
- B. Using a pass or fail methodology for each policy statement
- C. Using only CVSS numeric averages without pass/fail
- D. Using scanner Working/Unavailable status icons only


## SC-Q104

Where do organizational users manage existing Assurance Report Cards in the Tenable Security Center UI?

- A. Repositories > Offline Sync > Manage ARCs
- B. Resources > Scan Zones > Manage ARCs
- C. Dashboard > Assurance Report Cards, then Options > Manage ARCs
- D. System > Configuration > License > Manage ARCs


## SC-Q105

What can an organizational user do when sharing an Assurance Report Card with a group?

- A. Grant every group member Administrator privileges automatically
- B. Force all shared users to become Security Managers
- C. Give users in the group the ability to view the ARC, subject to each user's role and permissions for drill-down
- D. Disable repository access for anyone not in the sharing group


## SC-Q106

Which statement best distinguishes an Assurance Report Card from a standard dashboard component?

- A. An ARC replaces the need for repositories in multi-organization deployments
- B. An ARC evaluates named policy statements as pass/fail posture checks, while dashboard components visualize metrics, charts, and tables
- C. An ARC can only display mitigated vulnerabilities, while dashboards can only display cumulative vulnerabilities
- D. An ARC stores scan policies, while dashboards store credentials


## SC-Q107

A CISO wants a recurring executive view that answers: 'Are all Critical vulnerabilities remediated within 30 days?' Which Tenable Security Center feature is purpose-built for that style of policy statement?

- A. Nessus scanner Verify Hostname toggle
- B. Offline repository archive filename
- C. Assurance Report Card policy statement
- D. Scan zone Restricted Scan Ranges


## SC-Q108

When creating a custom Assurance Report Card, what must the user configure for the ARC to evaluate posture?

- A. Only the Tenable.io cloud connector token
- B. ARC options including policy statements (and schedule if automatic refresh is required)
- C. Only the PostgreSQL database connection string
- D. Only a linking key for each Nessus scanner


## SC-Q109

What can Tenable Security Center alerts be configured to do when vulnerability or event conditions occur?

- A. Automatically increase the IP license count
- B. Trigger actions such as email notifications, UI notifications, tickets, remediation scans, reports, or syslog alerting
- C. Convert IPv4 repositories into Universal repositories
- D. Disable all freeze windows organization-wide


## SC-Q110

Which role permission specifically allows a user to create alerts that trigger actions when specified vulnerability or event conditions occur?

- A. Create Alerts
- B. Create LDAP Query Assets
- C. Manage Images
- D. Update Feeds


## SC-Q111

Which statement about alert actions in Tenable Security Center is correct?

- A. Only one action is allowed per alert and it must be email
- B. Alerts replace the need for dashboards and reports
- C. Alerts can only notify Administrator users
- D. Multiple actions can be assigned for each alert


## SC-Q112

A team wants Security Center to open a ticket and email stakeholders when a new Critical vulnerability appears on PCI assets. Which feature should they configure?

- A. A scan zone with overlapping IP ranges only
- B. An offline repository with Generate Trend Data disabled
- C. An alert with ticket and email actions filtered to Critical severity and the PCI asset list
- D. A Credential Manager account with No Role


## SC-Q113

Where is the Tenable Security Center web address used when alerts and tickets generate notifications configured?

- A. Inside each scan policy under Advanced > Plugin Families
- B. Inside each repository under Restricted Scan Ranges
- C. Inside each Nessus scanner under Verify Hostname
- D. Configuration Settings under Notifications as Tenable Security Center Location


## SC-Q114

Which alert destination is explicitly supported alongside email and UI notifications in Tenable Security Center?

- A. Direct SMS to mobile carriers without a gateway
- B. Automatic creation of new organizations
- C. Automatic deletion of repositories
- D. Syslog alerting


## SC-Q115

Which permission allows a user to upload audit files used for configuration audit scans in Tenable Security Center?

- A. Manage Freeze Windows
- B. Update Feeds
- C. Manage Attribute Sets
- D. Create Audit Files


## SC-Q116

What content do Tenable .audit files primarily define for compliance scanning?

- A. The DHCP tracking order for changing IP addresses
- B. The Max scan duration rollover behavior
- C. Configuration checks with expected values and pass/fail logic for benchmarks such as CIS and DISA STIG
- D. The list of organizations allowed to use Universal repositories


## SC-Q117

After importing a scan policy from another Security Center, why might compliance checks be missing even though the policy imported successfully?

- A. Compliance checks are disabled until an Auditor role is assigned
- B. Exported scan policy files do not include audit files, so audit files must be configured separately after import
- C. Compliance checks require Universal repositories exclusively
- D. Compliance checks only run when the schedule is set to Now


## SC-Q118

Which result statuses are commonly associated with Tenable Security Center compliance audit checks?

- A. PASSED, FAILED, and WARNING (with ERROR/timeout conditions for unreachable or failed checks)
- B. Cumulative, Mitigated, and Recast only
- C. Working, Plugins Updating, and Unavailable only
- D. Static, Dynamic, and Combination only


## SC-Q119

A Security Analyst needs to run CIS Benchmark checks against Linux servers. What must be attached to the scan configuration in addition to credentials and targets?

- A. A Security Center Director license key
- B. An audit file (.audit) for the relevant CIS Benchmark
- C. A Tenable Lumin connector only
- D. An offline repository sync schedule


## SC-Q120

How do compliance assessment results relate to vulnerability assessment results in Tenable Security Center repositories?

- A. Compliance findings can only be stored in Agent repositories
- B. Compliance findings always overwrite vulnerability findings for the same IP
- C. Compliance findings and vulnerability findings are distinct result types that can be retained with separate data-lifetime settings
- D. Compliance findings are never stored in repositories and exist only in PDF reports


## SC-Q121

Which statement about DISA ASR/ARF or CyberScope specialized reporting in Tenable Security Center is correct?

- A. Specialized reports are available only when Max scan duration is unset
- B. Specialized DISA reports require converting every repository to Offline
- C. Any Auditor can enable CyberScope reporting without administrator involvement
- D. An administrator must enable the specialized report generation options before organizational users can generate those report types


## SC-Q122

What is the difference between a vulnerability assessment scan and a compliance assessment scan in Tenable Security Center?

- A. Vulnerability assessment only uses agents; compliance assessment only uses Network Monitor
- B. Vulnerability assessment stores data in dashboards; compliance assessment stores data only in ARCs
- C. Vulnerability assessment finds software/configuration weaknesses via plugins; compliance assessment evaluates hosts against audit-file benchmarks such as CIS/STIG
- D. There is no difference; Tenable uses the terms interchangeably


## SC-Q123

What is the default port for accessing the Tenable Security Center web interface?

- A. TCP 8835
- B. TCP 8834
- C. TCP 443
- D. TCP 22


## SC-Q124

Which port must Tenable Security Center use to communicate with Tenable Nessus scanners?

- A. TCP 8834
- B. TCP 443 only
- C. TCP 25
- D. UDP 161


## SC-Q125

Which port is used for remote repository synchronization between Tenable Security Center instances?

- A. TCP 3389
- B. UDP 53
- C. TCP 22
- D. TCP 8834


## SC-Q126

Which Tenable Security Center user role is required to add a Nessus scanner under Resources > Tenable Nessus Scanners?

- A. Auditor
- B. Administrator
- C. Executive
- D. Vulnerability Analyst


## SC-Q127

During initial Nessus setup, a scanner can be linked to Tenable Security Center by selecting which Managed by option?

- A. Tenable Vulnerability Management linking key only
- B. Tenable OT Security Director
- C. Tenable.sc (Tenable Security Center)
- D. Tenable Assurance Report Card Manager


## SC-Q128

Which component communication uses TCP 8835 in a Tenable Security Center deployment?

- A. Communication with Tenable Network Monitor
- B. SMTP email delivery for scheduled reports
- C. Remote repository synchronization
- D. Accessing the Security Center web UI


## SC-Q129

What should an administrator confirm before adding a Nessus Manager versus a standalone Nessus scanner to Security Center?

- A. Whether the repository type is Offline, because only Offline repos can receive agent data
- B. Whether the remote instance is a standalone scanner or a Nessus Manager that manages agents, because connection/credential options differ
- C. Whether Trend Days is set to 0 on all dashboards
- D. Whether all users have the No Role assignment


## SC-Q130

In Tenable Security Center vulnerability analysis, what does the Cumulative view show?

- A. Only Assurance Report Card pass/fail history
- B. Vulnerabilities currently present (active) on scanned assets
- C. Only vulnerabilities that were fixed in the last 24 hours
- D. Only scanner connectivity events


## SC-Q131

Which analysis permission allows a user to change the severity of vulnerabilities in Tenable Security Center?

- A. Create Audit Files
- B. Recast Risks
- C. Verify Hostname
- D. Manage Freeze Windows


## SC-Q132

What does the Accept Risk workflow do in vulnerability analysis?

- A. Formally accept risk for vulnerabilities so they are removed from the default view for analysis, dashboards, and reports
- B. Increase the vulnerability severity by one level
- C. Move the finding into an Offline repository permanently
- D. Automatically patch the accepted CVE on all hosts


## SC-Q133

An analyst needs to review only vulnerabilities from a specific Nessus plugin family and then a plugin ID range. Which filters should they apply?

- A. Scan Zone and Restricted Scan Ranges
- B. Plugin Family and Plugin ID
- C. Freeze Window and Bell Notifications
- D. User Role and Group Relationship


## SC-Q134

Which statement correctly describes Manage Risks when Accept Risks or Recast Risks is enabled?

- A. It allows the user to modify accept and recast risk rules created by other users
- B. It allows the user to delete all repositories in the organization
- C. It allows the user to create new Administrator accounts
- D. It allows the user to change the Security Center HTTPS port


## SC-Q135

A vulnerability no longer appears in cumulative results after remediation. Where should an analyst look to review the previously fixed finding?

- A. Mitigated vulnerability view
- B. Scan zone detail view only
- C. Credential Manager credential secret view
- D. Nessus scanner Verify Hostname log only


## SC-Q136

Which permission is required to create LDAP Query Assets that update host lists from directory queries?

- A. Create Alerts
- B. Manage Images
- C. Create LDAP Query Assets
- D. Update Feeds


## SC-Q137

What is an LDAP query asset list used for in Tenable Security Center?

- A. Authenticate Security Center to Nessus on port 8834
- B. Dynamically update a list of hosts based on a user-defined LDAP query
- C. Store .audit files for CIS Benchmarks
- D. Enable CyberScope report generation


## SC-Q138

Which set operation would a combination asset list use to include only hosts present in both List A and List B?

- A. Intersection
- B. Union
- C. Difference of A minus B only when A is empty
- D. DNS normalization


## SC-Q139

Why might a Security Manager create separate static asset lists for PCI CDE and corporate workstation ranges?

- A. To scope scans, dashboards, reports, alerts, and analysis filters to the correct business context
- B. Because dynamic asset lists cannot use IP addresses
- C. Because repositories can only store one asset list at a time
- D. Because Administrators cannot assign repositories without asset lists


## SC-Q140

Which asset list type requires existing repository/scan data before it typically shows members?

- A. An empty placeholder list with hard-coded addresses only
- B. Static asset list of manually entered CIDR ranges
- C. A newly typed IP list with no query conditions
- D. Dynamic asset list


## SC-Q141

Which built-in role is intended for users who mainly browse dashboards and reports and can assign tasks with tickets, but are not focused on managing scans or users?

- A. Administrator
- B. Executive
- C. Credential Manager
- D. No Role


## SC-Q142

Which built-in role can perform basic tasks such as viewing security data, performing scans, sharing objects, viewing logs, and working with tickets?

- A. Administrator
- B. SM-Linked
- C. No Role
- D. Vulnerability Analyst


## SC-Q143

What is unique about the initial Security Manager account created with a new organization?

- A. It cannot launch scans until an Auditor approves each scan
- B. It cannot be deleted without deleting the entire organization
- C. It automatically becomes an Administrator after first login
- D. It is the only account that can access TCP 8834


## SC-Q144

Why do Administrator users not see organizational vulnerability dashboards by default?

- A. Administrators must use the Auditor role simultaneously
- B. Administrators do not belong to an organization and do not have access to the data collected by Tenable Security Center
- C. Administrators can only use PDF reports, never dashboards
- D. Administrators are limited to Agent repositories only


## SC-Q145

What does the Manage Groups permission allow an organizational user to do?

- A. Enable CyberScope reporting system-wide
- B. Add, edit, and delete groups, including creating groups with access to vulnerability and event data available to the organization
- C. Register Nessus scanners on port 8834
- D. Change the Security Center license IP count


## SC-Q146

Which statement best describes Tenable Security Center relative to Tenable Vulnerability Management?

- A. Security Center is Tenable's on-premises vulnerability analysis platform; Vulnerability Management is the cloud platform
- B. Security Center is cloud-only; Vulnerability Management is on-premises only
- C. Both products store all customer scan data exclusively in Tenable's SaaS cloud
- D. Security Center cannot use Nessus scanners


## SC-Q147

What is Tenable Security Center Director used for?

- A. Replace Nessus scanners with agent-only scanning
- B. Provide a unified view and management across multiple distributed Security Center consoles
- C. Convert all repositories to Offline automatically
- D. Issue linking keys for Tenable Vulnerability Management


## SC-Q148

Which sensor provides passive vulnerability data that Security Center can analyze alongside active Nessus results?

- A. PDF report scheduler
- B. Credential Manager role
- C. Assurance Report Card template gallery
- D. Tenable Network Monitor


## SC-Q149

In Specialist certification terms, what must a candidate complete before taking the practical exam?

- A. Only the practical exam is required; the written exam is optional
- B. A Tenable Expert large-scale deployment exam must be completed first
- C. A GIAC certification must be completed first
- D. The written exam (60 questions, 2 hours, 80% pass) must be completed first


## SC-Q150

Which freeze window behavior is correct in Tenable Security Center?

- A. Freeze windows are system-wide only and cannot be organizational
- B. Freeze windows are organizational and prevent scans of affected targets during the configured time frame
- C. Freeze windows permanently delete mitigated vulnerabilities
- D. Freeze windows automatically upgrade all scanners to the latest Nessus version
