# Security Center Specialist — answer key and source explanations

The source key and explanation are retained without independent technical validation.


## SC-Q001 — B

Tenable.sc (formerly SecurityCenter) is an on-premises platform where all scan data, repositories, and reports reside within the customer's own infrastructure. Tenable.io is a cloud-delivered SaaS platform hosted by Tenable. Organizations in air-gapped, highly regulated, or data-sovereignty environments typically prefer Tenable.sc.


## SC-Q002 — D

Scan Zones in Tenable.sc are logical groupings that associate specific Nessus scanners with the IP ranges they are responsible for scanning. Scan zones can be shared across multiple organizations, allowing centralized scanner infrastructure to serve multiple business units while maintaining organizational separation in reporting.


## SC-Q003 — D

Repositories in Tenable.sc are databases that store vulnerability scan results. IPv4 repositories store data for IPv4-addressed assets, IPv6 repositories for IPv6 assets, Agent repositories for Nessus Agent scan data, and Universal repositories can store data from both agent and agentless sources in a single repository.


## SC-Q004 — B

A Universal Repository in Tenable.sc can ingest and store vulnerability data from both Nessus Agent scans and traditional network-based (agentless) scans. This consolidates data sources in environments using both scan types for the same asset group, simplifying dashboard and report queries.


## SC-Q005 — B

The Security Manager role in Tenable.sc has organization-level management authority: creating and managing users within their organization, configuring scans, managing asset lists, and administering repositories assigned to their organization. They cannot create new organizations or manage system-wide infrastructure — those are Administrator-only actions.


## SC-Q006 — C

Static Asset Lists are manually defined collections of specific IP addresses, ranges, or CIDR blocks that remain constant unless manually edited. Dynamic Asset Lists use query-based logic (severity, plugin output, OS, port, etc.) and automatically update to include or exclude assets meeting the defined criteria after each scan, keeping the list current without manual maintenance.


## SC-Q007 — B

Tenable Security Center manages remote Nessus scanners by connecting outbound to the scanner on TCP 8834. The administrator adds the scanner under Resources > Nessus Scanners and authenticates with a Nessus administrator account (password) or SSL certificate/API keys. Linking keys are used for Tenable Vulnerability Management and Nessus Manager agent linking, not for pairing scanners to Security Center.


## SC-Q008 — D

The Auditor role in Tenable.sc provides read-only access to vulnerability data, dashboards, and reports within the scope of their organization. Auditors cannot create scans, modify policies, or manage users — they exist specifically for compliance auditors, management stakeholders, or third-party reviewers who need data visibility without write access.


## SC-Q009 — A

Tenable.sc repositories have configurable data retention periods. When vulnerability scan data exceeds the retention window (e.g., 365 days), the oldest data records are purged from the repository. This manages database size and scan performance but means historical trend data older than the retention period is no longer available.


## SC-Q010 — C

Dynamic Asset Lists in Tenable.sc use query filters against repository data. Setting the Severity filter to 'Critical' in the dynamic asset list query returns all assets in the repository that currently have at least one Critical-severity vulnerability finding, automatically updating as new scan data is ingested.


## SC-Q011 — D

Organizations in Tenable.sc are multi-tenancy containers that partition a single Tenable.sc installation into separate management domains. Each organization has its own users (managed by Security Managers), repositories, and asset lists, enabling multiple business units, subsidiaries, or customer environments to share one Tenable.sc platform without access overlap.


## SC-Q012 — C

For network segments with restricted access, the correct approach is deploying a Nessus scanner within (or adjacent to) that segment, pairing it with Tenable.sc using a linking key, and creating a scan zone that maps the DMZ subnet to the new scanner. All scan coordination and result aggregation still flows through Tenable.sc.


## SC-Q013 — B

Tenable.sc dashboards support trend-enabled components that plot vulnerability metrics (total count by severity, new vs. remediated, etc.) as time-series charts directly within the console. This provides built-in trending without requiring external tools, showing how the vulnerability posture changes across scan cycles.


## SC-Q014 — A

Repositories are created and owned at the system level by Administrators. To make a repository available to an organization's users, the Administrator must explicitly grant the organization access to that repository in the repository's configuration settings. Organizations only see and use repositories to which they have been granted access.


## SC-Q015 — A

Combination Asset Lists in Tenable.sc allow administrators to define a new asset list using set operations: Union (all assets in List A OR List B), Intersection (only assets in BOTH List A AND List B), or Difference (assets in List A but NOT in List B). This enables complex asset targeting without manual list management.


## SC-Q016 — C

Tenable.sc's multi-tenancy is implemented through repository access control. Each organization is assigned access to one or more repositories, and scan results are stored in those repositories. Users within an organization can only query and view data from repositories accessible to their organization, providing logical data separation.


## SC-Q017 — B

A trending graph (time-series chart) component in Tenable.sc dashboards can be scoped to a specific asset list, filtered by Critical severity, and configured with a 30-day time range to show how Critical vulnerability counts have changed over time. This provides program velocity data rather than a static point-in-time count.


## SC-Q018 — A

Offsite repository synchronization allows Tenable.sc to export repository data to a separate remote Tenable.sc installation. This is used for disaster recovery (having a backup Tenable.sc with current data), consolidated reporting (merging data from multiple Tenable.sc instances into a central reporting server), or hierarchical deployments.


## SC-Q019 — D

Generated PDF, CSV, and HTML reports from Tenable Security Center are static outputs. Interactive filtering—changing severity, plugin, asset, or date criteria on live repository data—requires the vulnerability analysis Query interface or dashboard components inside the console.


## SC-Q020 — D

IP normalization in Tenable.sc repositories consolidates multiple asset identifiers (different hostnames, agent IDs, or MAC addresses) that map to the same IP address into a single asset record. Without normalization, the same physical machine could appear as multiple assets, inflating vulnerability counts and complicating remediation tracking.


## SC-Q021 — B

Per Tenable Security Center user-role documentation, the Security Analyst role can perform organizational-level actions including creating policies and scans, but cannot manage groups or users. Security Managers manage the organization including users; Administrators manage the system outside organizations; Auditors are read-only for dashboards, reports, and logs.


## SC-Q022 — A

Active scans (the primary Nessus scan type) actively send probe packets, authentication requests, and plugin checks to target systems to enumerate vulnerabilities. Passive scans (using Nessus Network Monitor/PVS) monitor network traffic flowing through a network tap or SPAN port without sending any packets, providing agentless, non-intrusive visibility.


## SC-Q023 — C

Windows credentialed scanning in Nessus/Tenable.sc requires Windows domain or local credentials with administrative privileges on the target system. The account needs local Administrator group membership (or equivalent) to access the registry, file system, and WMI for local check plugins. A dedicated scan account with minimal other access is a security best practice.


## SC-Q024 — D

To generate this targeted report, the administrator needs: an asset list defining CDE assets (static IP list or dynamic query), a report template configured to filter vulnerabilities with CVSS 7.0 or higher, and the user's account must have access to the repository containing CDE scan data. Report filters in Tenable.sc support CVSS score thresholds.


## SC-Q025 — B

Tenable.sc runs an embedded web server (based on Apache) on the Tenable.sc appliance that serves the management console UI on HTTPS (default port 443). The database (PostgreSQL) stores all data separately, and Nessus scanners are separate paired components — the web UI is native to the Tenable.sc appliance itself.


## SC-Q026 — A

Tenable compliance checks use proprietary .audit files — text-based files defining specific configuration checks with expected values and pass/fail logic. Tenable provides hundreds of pre-built .audit files for CIS Benchmarks and DISA STIGs on the Tenable Audit Files portal. Custom .audit files can also be created using Tenable's audit file syntax.


## SC-Q027 — A

Tenable.sc's web management console is accessible via HTTPS on the standard port 443. This is a key installation fact tested in certifications. Nessus scanner's own web UI uses port 8834. Port 443 on the Tenable.sc appliance serves the admin console for all users.


## SC-Q028 — C

Tenable.sc's access control for data scoping uses a combination of repository access (which repositories the organization/user can query) and asset list restrictions. By defining an asset list for 10.10.0.0/16 and ensuring the analyst's role and the organization's repository access are scoped appropriately, visibility can be restricted to that subnet.


## SC-Q029 — D

Tenable.sc reports are composed of chapters, and a Chart chapter using a vulnerability data source can be configured to display severity distribution as a bar, pie, or area chart. This provides visual representation of the vulnerability severity breakdown in formal PDF reports.


## SC-Q030 — A

The correct Tenable.sc onboarding sequence is: (1) Administrator creates the Organization, (2) Administrator assigns repositories and scan zones to the organization, (3) Administrator creates the Security Manager account for the organization, (4) Security Manager creates Security Analyst and Auditor users and configures scans within the organization.


## SC-Q031 — A

Queries in Tenable.sc are saved filter expressions used in vulnerability analysis views. They allow analysts to define specific criteria (severity, plugin, asset, date range, etc.) and save them for reuse in dashboards, reports, or ad-hoc analysis. Queries are the building blocks of Tenable.sc's data exploration capability.


## SC-Q032 — D

The Tenable.sc management console exclusively uses HTTPS (HTTP over TLS encryption) on port 443 for all browser-to-server communication. This ensures all management traffic, including credentials and vulnerability data, is encrypted in transit. HTTP is not supported for the management console.


## SC-Q033 — D

A Dynamic Asset List configured with an OS-type query filter (e.g., 'OS contains Windows Server 2012') automatically includes all assets from the repository where the OS detection plugin found a match. As new systems are scanned and OS-detected, they are automatically added to the list without manual intervention.


## SC-Q034 — B

The Resources > Nessus Scanners section in the Tenable.sc Administration menu displays all registered Nessus scanners with their current status (enabled/disabled), connectivity status, last check-in time, plugin feed version, and the scan zones they are assigned to. This is the primary view for scanner health monitoring.


## SC-Q035 — C

In Tenable.sc, IP ranges can overlap between scan zones. When a scan targets an IP range covered by multiple scan zones, the system uses load balancing or priority rules to determine which scanner is used for a particular scan. This provides flexibility and scanner redundancy in distributed environments.


## SC-Q036 — D

The Trend Days setting in a Tenable.sc dashboard trend component defines the lookback window for the time-series chart — for example, setting Trend Days to 30 shows the last 30 days of vulnerability data as a line or bar trend chart. Longer trend windows require more historical data in the repository.


## SC-Q037 — D

Tenable.sc reports can be scheduled to run automatically at defined intervals and distributed via email (as PDF/CSV attachment) or exported to a configured network file path. This enables automated weekly/monthly reporting to compliance stakeholders without manual intervention.


## SC-Q038 — B

Tenable.sc supports web application scanning through scan policies with web application test plugins enabled (or the dedicated Web Application Tests scan template). These plugins test for OWASP-style vulnerabilities (SQL injection, XSS, etc.) on web applications, distinct from infrastructure-level network vulnerability scanning.


## SC-Q039 — C

IPv4 repositories cannot store IPv6 data. The correct approach is either creating a dedicated IPv6 repository for IPv6 scan results, or using a Universal repository that can store both IPv4 and IPv6 (and agent) data in a single repository. Existing IPv4 repository types cannot be changed after creation.


## SC-Q040 — B

Tenable.sc Director (formerly SecurityCenter Director) is a hierarchical management layer that provides a consolidated view and management capability across multiple distributed Tenable.sc child instances. It enables centralized reporting, policy management, and visibility across geographically distributed or multi-tenant Tenable.sc deployments.


## SC-Q041 — B

Before running an active scan in Tenable.sc, the minimum requirements are: a scan policy defining what to test, a scan zone with at least one paired/active Nessus scanner, and defined scan targets (either IP ranges or asset lists). Without all three, scan creation will fail or produce no results.


## SC-Q042 — A

Tenable.sc dashboard components can be configured to include data from multiple repositories by selecting more than one repository as a data source. This allows a single dashboard to present a comprehensive view of vulnerability data across different network segments or organizations without requiring data to be merged into one repository.


## SC-Q043 — B

Nessus Agent results in Tenable.sc must be directed to either an Agent repository (exclusively for agent data) or a Universal repository (which accepts both agent and network scan data). Traditional IPv4/IPv6 repositories do not accept Nessus Agent data, so deployments using agents require the appropriate repository type.


## SC-Q044 — A

Plugin 19506 is present in every Nessus scan result and contains a field explicitly stating whether credentials were provided and whether they were used successfully (e.g., 'Credentialed checks: yes'). Checking this plugin output per host is the standard method for confirming credentialed scan success in Tenable.sc.


## SC-Q045 — B

A Table component in Tenable.sc dashboards can be configured to display assets (rows) with their Critical vulnerability counts (columns), sorted in descending order and limited to the top 10 records. This provides a clear, ranked list of the most exposed servers for prioritizing investigation and remediation.


## SC-Q046 — B

Tenable.sc licenses are IP-based, specifying the maximum number of unique IP addresses that can be included in active scans. This is distinct from the number of discovered assets in dashboards; only actively scanned IPs count against the license. Exceeding the license limit may require a license upgrade.


## SC-Q047 — D

Nessus scan policies can be exported as .nessus XML files and imported into Tenable.sc. This enables administrators to reuse standardized scan configurations across multiple Tenable.sc instances, distribute approved scan policies to teams, or restore a previously configured policy, rather than manually recreating all settings.


## SC-Q048 — B

A WARNING result in Tenable.sc compliance scanning indicates the check produced a result that requires interpretation or is in a borderline state. This can occur when a configuration partially meets the benchmark requirement, when the check requires context that automated scanning cannot determine, or when the audit file logic produces an indeterminate outcome.


## SC-Q049 — D

A Universal Repository can store both Nessus Agent scan results and traditional network scan results for the same asset. When combined with IP normalization, Tenable.sc can associate agent data and network data from the same IP address into a single unified asset view, providing the most comprehensive vulnerability picture.


## SC-Q050 — A

Nessus scanners communicate with the Tenable.sc server over TCP port 8834. The Tenable.sc server initiates connections to paired Nessus scanners on this port to control scans, retrieve results, and update plugin feeds. Firewalls between Tenable.sc and its scanners must allow outbound connections from Tenable.sc to port 8834 on each scanner.


## SC-Q051 — D

In Tenable.sc, the Cumulative view shows vulnerabilities currently present on scanned assets (active findings). The Mitigated view shows vulnerabilities that were detected in previous scans but were NOT found in the most recent scan of the same asset — indicating they have been remediated, patched, or the affected service removed.


## SC-Q052 — A

When Tenable.sc downloads updated plugin feeds from Tenable's servers, it automatically distributes the update to all paired Nessus scanners. Administrators do not need to log into each scanner individually; the centralized feed management in Tenable.sc handles plugin distribution as part of its scanner management role.


## SC-Q053 — D

For Linux/Unix credentialed scanning, Tenable.sc supports SSH authentication using either password or public key pairs. In enterprise environments with centralized SSH key management, the SSH public key is deployed to target servers and the corresponding private key is uploaded to Tenable.sc's credential store, eliminating the need to store passwords.


## SC-Q054 — A

The Accept Risk workflow in Tenable.sc allows teams to formally acknowledge that a specific vulnerability exists on a specific asset, that remediation is not currently possible or warranted, and that the risk is accepted. Accepted risks are excluded from active vulnerability counts while maintaining an audit trail with the accepting user, date, reason, and expiration date.


## SC-Q055 — D

Tenable.sc reports support a comprehensive range of filters including CVE identifier, plugin ID, plugin family, affected port, protocol, vulnerability text search, CVSS score range, severity level, asset list, and date range. This granularity allows precisely scoped reports for specific compliance requirements, penetration test validation, or executive summaries.


## SC-Q056 — A

When the Tenable.sc IP license limit is reached, attempts to import scan results for IPs beyond the licensed count may fail or generate license warnings. The system enforces the IP cap, so organizations must ensure their license covers the total number of unique IPs they intend to actively scan.


## SC-Q057 — B

Tenable.sc repositories can be shared across multiple organizations by granting multiple organizations access to the same repository. When analysts from different organizations query dashboards or reports using that repository, they can see the shared data. This is useful for central IT repositories viewed by business unit security teams.


## SC-Q058 — B

Nessus uses SMB (Server Message Block) protocol for Windows credentialed scanning to access the Windows registry, WMI (Windows Management Instrumentation), and file system. SMB access is what enables local check plugins to enumerate installed patches, software versions, and configuration settings on Windows hosts.


## SC-Q059 — C

The Summary (or 'Total' or 'Single Statistic') dashboard component type in Tenable.sc displays a single aggregated number prominently — ideal for KPI-style dashboards showing total vulnerability counts by severity. It can be configured with severity, asset, and repository filters to scope the count appropriately.


## SC-Q060 — C

Recast Risk in Tenable.sc allows Security Managers to override the default severity of a vulnerability for specific assets within their organization. For example, if a Critical vulnerability only affects an isolated test system, the manager can recast it to Medium to reflect reduced actual risk. The change is tracked with the user, date, and justification.


## SC-Q061 — D

Tenable certifications use a two-part process: a written qualification exam followed by a practical exam for the same product. The written exam must be completed before the practical exam can be taken. This sequence validates both product knowledge and hands-on platform ability.


## SC-Q062 — C

A scan zone defines an area of the network for active scanning by pairing IP addresses or ranges with scanners in the deployment. Tenable Security Center uses that mapping to choose scanners that can reach the requested targets. Without scan zones, active scanning cannot be routed correctly.


## SC-Q063 — C

Repositories are databases in Tenable Security Center that contain vulnerability data. They provide configurable storage and can be assigned to organizations so users can analyze the data they are allowed to access. Scan policies, authentication settings, and dashboard layouts are separate objects.


## SC-Q064 — A

The Credential Manager role is intended for users who handle reusable credential objects. This role can create and share credentials so other users can run credentialed scans without learning the secret values. That separation helps keep privileged scan accounts maintained without spreading passwords broadly.


## SC-Q065 — A

Filters can be applied across many Tenable Security Center pages, and saved filter logic is stored as a query. A query lets the analyst reuse the same filter components instead of rebuilding them each time. Scan zones, repositories, and linked accounts solve different problems.


## SC-Q066 — A

Static asset lists are manually defined lists of IP addresses, CIDR blocks, or ranges. Because membership is explicitly supplied, the asset list can be used immediately after it is saved without waiting for scan data to calculate membership.


## SC-Q067 — B

A remediation scan is a follow-up active scan against targets where a vulnerability was previously found. It evaluates the selected plugin to determine whether remediation actions were successful. If the vulnerability is no longer detected where it was previously present, Tenable Security Center can mark it mitigated.


## SC-Q068 — B

Dashboards in Tenable Security Center are designed to display current vulnerability, event, ticket, user, and alert data. Tenable documents an automatic daily dashboard refresh, and organizational users can refresh all dashboard components on demand. This keeps dashboards useful without requiring service restarts.


## SC-Q069 — C

Tenable Security Center supports report templates and customizable report formats, including PDF and CSV. Those formats let teams share human-readable summaries and structured tabular data. Office document, media, and virtual machine formats are not the standard reporting outputs described for Tenable Security Center reports.


## SC-Q070 — C

The Now schedule option launches the scan immediately without saving the scan configuration for later use. Tenable documents that scans configured to run Now do not appear on the Active Scans page. Use On Demand or another saved schedule when the scan needs to be launched again later.


## SC-Q071 — B

Administrator users have the system-provided administrator role and do not belong to organizations. They manage the Tenable Security Center deployment as a whole, including components such as scanners and organizations. Organizational users, by contrast, belong to an organization and operate within role and group permissions.


## SC-Q072 — B

Scan policies contain plugin settings and advanced scan directives used by active scans. Users with the appropriate permissions can reference those policies when configuring scans. Reporting distribution, repository encryption, and web login authentication are managed elsewhere.


## SC-Q073 — B

For multiple credentials of the same type, Tenable Security Center attempts credentials according to their stored object order and uses the first one that successfully logs in. After successful login, it does not continue trying other credentials, even if another credential has greater privileges. This makes credential object order important when troubleshooting shallow credentialed results.


## SC-Q074 — C

Dynamic asset lists are calculated from conditions matched against scan data. Until Security Center has performed an initial scan that populates the repository, a newly created dynamic asset list typically has no members.


## SC-Q075 — B

When a single available scan zone is selected for an active scan, Tenable Security Center uses that zone for scanner selection but scans the targets specified in the scan configuration. The documented behavior is that it ignores the scan zone ranges as a target list in this case. The zone still matters because it determines scanner reachability.


## SC-Q076 — B

Automatic Distribution Only causes Tenable Security Center to choose scan zones for organizational scans automatically. In that mode, organizational users do not manually choose a scan zone in the scan configuration. This is useful when the organization wants consistent zone routing for complex or overlapping address spaces.


## SC-Q077 — D

Generate Trend Data causes Tenable Security Center to take periodic cumulative-database snapshots for trending displays in dashboards and reports. Days Trending then controls how much historical trend data can be displayed. If trend data is not generated, current results can exist while trend components lack history.


## SC-Q078 — B

The documented default passive vulnerability data lifetime is 7 days, while active, compliance, and mitigated data lifetimes default to 365 days. This matters when teams expect passive findings from Tenable Network Monitor to remain available for the same period as active scan data. Repository retention should be tuned to match reporting and investigation needs.


## SC-Q079 — A

Offline repositories allow repository data from another Tenable Security Center deployment to be shared through manual export and import of archive files. Remote repositories use an SSH session to access data from another deployment. Universal and agent repositories are local data storage types, not manual external repository transfer methods.


## SC-Q080 — B

Tenable Security Center includes specialized report types such as CyberScope and DISA ASR/ARF reports, but an administrator must enable the related report generation options before organizational users can generate them. Ordinary reporting access alone does not necessarily enable those specialized formats. This is a platform configuration issue rather than a scan schedule issue.


## SC-Q081 — B

The vulnerability analysis filters include Plugin Family and Plugin ID components. Plugin Family limits results to vulnerabilities from a selected Nessus or Tenable Network Monitor plugin family, while Plugin ID can match a specific ID or range. The other choices are administrative scoping concepts rather than vulnerability plugin filters.


## SC-Q082 — C

The Vulnerabilities page can display data from either the cumulative or mitigated vulnerability database. The mitigated view is used for vulnerabilities that are no longer currently observed but are retained as mitigation history. Cumulative view focuses on currently known vulnerability data.


## SC-Q083 — A

Import Completed Results With Rollover imports the results gathered so far and creates a rollover scan that can be launched to complete the scan. Import Completed Results preserves current results but discards information for unscanned hosts. Discard Results throws away the scan data, and Scan Virtual Hosts is unrelated to timeout handling.


## SC-Q084 — D

The DHCP tracking option uses DNS name, NetBIOS name, Agent ID, and MAC address if known, in that order, to match a host whose IP address changes. Once a match is found, Tenable Security Center stops searching for additional matches. This helps prevent DHCP address churn from fragmenting host history.


## SC-Q085 — D

Scan Virtual Hosts tells Tenable Security Center to treat a new DNS entry for the same IP address as a virtual host. With the option enabled, vulnerability data for different DNS names can appear as separate entries with the same IP address. With it disabled, that data merges into a single IP address entry.


## SC-Q086 — A

The Security Analyst role is intended for advanced organizational users and can perform organizational-level actions except managing groups and users. That fits a trusted operator who needs scanning and policy-related abilities without user administration. Auditor, Executive, and No Role are much more limited for operational scanning work.


## SC-Q087 — A

Tenable documents that exported scan policy files do not include audit files or credentials. After importing a policy, administrators or organizational users must configure the needed audit files and credentials in the destination environment. This prevents assuming that sensitive credential material travels with policy exports.


## SC-Q088 — B

Tenable recommends organizing similar dashboard components to streamline analysis rather than placing many unrelated components in one dashboard. Separate dashboards for active scanning and passive data make the view easier to interpret. Users can still drill into underlying vulnerability or event data when needed.


## SC-Q089 — B

For agent scans, the Scan Window is the time allowed from scheduled start for agents to receive the job, run it, and upload results before Security Center fetches the data. If the window expires before agent-side scanning finishes, Security Center displays the results available at that time. Tenable recommends setting a window that allows agent scans to complete before results are fetched.


## SC-Q090 — D

The Web App Scanning vulnerability analysis filter is documented with an additional Tenable Web App Scanning license requirement and a supported Tenable Nessus version requirement. It can be used to exclude, include, or show only web app scan results. It is not limited to host-based port 0 checks.


## SC-Q091 — D

Tenable distinguishes discovery scans, which find assets, from assessment scans, which find vulnerabilities. Assets identified by discovery scans do not count toward the license, while assets assessed by assessment scans generally do. This distinction is important when planning discovery coverage before vulnerability assessment.


## SC-Q092 — A

Restricted Scan Ranges define IP address ranges that users in the organization are not allowed to scan. This control helps administrators enforce boundaries even when organizational users have scan creation permissions. Accessible Repositories control analysis data access, not prohibited scan targets.


## SC-Q093 — C

Tenable documents different remediation scan behavior depending on the analysis view. Launching from Vulnerability List or Vulnerability Detail List can pre-populate repository, target IP, and port from the specific finding. Launching from Vulnerability Summary may leave those fields default or empty because the summary row can represent multiple repositories, IPs, and ports.


## SC-Q094 — B

Tenable Security Center remediation scans are follow-up active scans and are documented as available only for active scan results. They cannot be performed for agent repository scan results or Tenable OT Security scan results. If a selected plugin has dependent plugins, the system includes them automatically, but the remediation scan still evaluates the specified plugin and port context.


## SC-Q095 — A

When redundant scan zones target the same network area, Tenable Security Center attempts scanning with the narrowest and most specific matching scan zone first. Overlapping zones can support coverage or redundancy, but Tenable warns not to configure them without planning the scan zone and distribution strategy. Poorly planned overlaps can route scans through the wrong scanners or links.


## SC-Q096 — B

Asset repositories can include IP data, agent data, and OT Security data, and those sources do not all identify assets the same way. Tenable Security Center assigns UUIDs to uniquely identify vulnerability data where IP addresses or Tenable UUIDs may not be available or stable. This is especially important for agent-tracked laptops and OT assets without traditional IP assumptions.


## SC-Q097 — C

When a scan import completes, Tenable Security Center queues a job to calculate dynamic and combination asset lists for the import repository. The next scan import for that repository waits until the asset calculation job finishes.


## SC-Q098 — A

When an entire plugin family is enabled in a scan policy template, Tenable Security Center automatically enables newly added plugins that belong to that family. Plugin family configuration therefore has future impact as plugin feeds change. This is one reason production policies should be reviewed carefully, especially for higher-risk plugin families.


## SC-Q099 — D

Tenable Security Center role management is constrained by the permissions of the user creating or editing roles. Any roles added must have permissions equal to or lesser than the user's own role. A user who lacks Update Feeds cannot create a role that grants Update Feeds to others.


## SC-Q100 — C

The Max scan duration setting specifies the maximum hours a scan can run. When a scan reaches that threshold, Tenable Security Center creates a rollover scan that can be launched manually to complete the scan, regardless of the configured Scan Timeout Action. Tenable also notes that Max scan duration must be longer than any scan window to allow time to generate results.


## SC-Q101 — B

Assurance Report Cards (ARCs) give an overview of network security posture. Each policy statement in an ARC returns a visible pass or fail based on live repository data, which is why ARCs are a distinct Specialist exam topic separate from ordinary dashboards and PDF reports.


## SC-Q102 — A

Tenable documents that organizational users with appropriate permissions can add template-based ARCs from Tenable-provided templates or create custom ARCs. Administrators do not belong to organizations and do not analyze organizational vulnerability data the same way.


## SC-Q103 — B

ARCs are designed around quick visible feedback with a pass/fail methodology for each policy statement. That executive-style posture view is distinct from raw vulnerability tables or scanner health status.


## SC-Q104 — C

Tenable's Manage Assurance Report Cards workflow is accessed from Dashboard > Assurance Report Cards, then Options > Manage ARCs. From there users can view, edit, schedule, share, or otherwise manage ARC objects.


## SC-Q105 — C

Sharing an ARC gives users in a group the ability to view it. Whether they can drill down into more detailed pages still depends on each user's role and custom permissions.


## SC-Q106 — B

Dashboards visualize vulnerability and operational data with components such as charts and tables. ARCs specifically present configurable policy statements with pass/fail feedback for security posture communication.


## SC-Q107 — C

ARCs are built around policy statements that return pass/fail based on repository data—exactly the executive posture questions CISOs ask. Scan zones, scanner hostname verification, and offline archive names do not answer remediation SLA policy statements.


## SC-Q108 — B

Custom ARCs are created via Advanced Add under Assurance Report Cards. Users configure ARC options—including the policy statements that define pass/fail checks—and may set a schedule for how often the ARC polls data sources.


## SC-Q109 — B

Alerts can perform actions for selected vulnerability or alert occurrences, including UI notifications, creating/assigning tickets, remediation scans, launching reports, email notifications, and syslog alerting. Multiple actions can be assigned.


## SC-Q110 — A

Under Workflow Permissions, Create Alerts allows the user to create alerts used to trigger actions (launch scans, run reports, send emails, etc.) when specified vulnerability or event conditions occur.


## SC-Q111 — D

Tenable documents that multiple actions can be assigned for each alert/ticket workflow, enabling combinations such as email plus ticket creation plus a remediation scan.


## SC-Q112 — C

Alerts evaluate vulnerability/event conditions and can create tickets and send emails. Scoping by severity and asset list matches the PCI Critical use case.


## SC-Q113 — D

In Configuration Settings > Notifications, Tenable Security Center Location is the web address used when alerts and tickets generate notifications. Bell Notifications can also enable top-navigation notifications.


## SC-Q114 — D

Documented alert actions include syslog alerting in addition to email, UI notifications, tickets, remediation scans, and report launches.


## SC-Q115 — D

Create Audit Files allows the user to upload audit files used for configuration audit (compliance) scans. This is a Scanning permission distinct from feed updates or freeze windows.


## SC-Q116 — C

Compliance checks use .audit files that define configuration checks, expected values, and pass/fail logic. Tenable provides audit content for CIS Benchmarks and DISA STIGs, among others.


## SC-Q117 — B

Tenable documents that exported/imported scan policy files do not include credentials or audit files. After import, users must attach the needed audit files (and credentials) separately.


## SC-Q118 — A

Compliance audit checks evaluate configuration state and commonly return PASSED, FAILED, or WARNING. Unreachable hosts or failed check execution produce error/timeout-style outcomes rather than a clean pass/fail. Working/Unavailable are scanner statuses; Cumulative/Mitigated are vulnerability views; Static/Dynamic/Combination are asset list types.


## SC-Q119 — B

Configuration compliance scanning requires uploading/selecting the appropriate .audit file for the benchmark. Credentials enable local checks; the audit file defines what is evaluated.


## SC-Q120 — C

Repositories store active, passive, compliance, and mitigated data with configurable lifetimes. Defaults commonly use 365 days for active, compliance, and mitigated data (passive often shorter). Compliance does not simply overwrite vulnerability data.


## SC-Q121 — D

If an organization requires specialized formats such as DISA or CyberScope, an administrator enables Report Generation options. Organizational users cannot generate those specialized reports until the options are enabled.


## SC-Q122 — C

Vulnerability assessment uses Nessus plugins to find vulnerabilities and misconfigurations. Compliance assessment uses .audit content to measure configuration against benchmarks. Both are separate Specialist exam domains.


## SC-Q123 — C

Port requirements document TCP 443 for accessing the Tenable Security Center interface (and Director communication). TCP 8834 is for Nessus communication; 8835 for Network Monitor; 22 for remote repository synchronization.


## SC-Q124 — A

Official port requirements list TCP 8834 for communicating with Tenable Nessus. Security Center reaches scanners on that port to manage scans and retrieve results.


## SC-Q125 — C

Port requirements list TCP 22 for performing remote repository synchronization with another Tenable Security Center.


## SC-Q126 — B

Adding a Nessus scanner is an Administrator task. Organizational roles such as Auditor, Executive, and Vulnerability Analyst do not manage system-level scanner resources.


## SC-Q127 — C

Nessus can be installed/linked as a remote scanner managed by Tenable.sc / Tenable Security Center. After creating the local Nessus admin user, the Security Center administrator adds the scanner by host/port/credentials.


## SC-Q128 — A

Port requirements list TCP 8835 for communicating with Tenable Network Monitor. The UI uses 443; remote repository sync uses 22; email uses mail infrastructure, not 8835.


## SC-Q129 — B

Tenable notes you must confirm whether you are connecting to standalone Nessus or Nessus Manager. Manager deployments that provide agent results use additional options such as Agent Capable and possibly API keys.


## SC-Q130 — B

The Cumulative view shows currently active vulnerabilities present on assets. The Mitigated view is used for vulnerabilities that are no longer currently present but were previously detected.


## SC-Q131 — B

Recast Risks allows the user to change the severity for vulnerabilities. Accept Risks removes accepted items from default analysis/dashboard/report views.


## SC-Q132 — A

Accept Risks allows users to accept risks for vulnerabilities, removing them from the default view for analysis, dashboards, and reports. It does not patch systems or raise severity (raising/changing severity is Recast Risk).


## SC-Q133 — B

Vulnerability analysis filters include Plugin Family and Plugin ID. Those components narrow results to a family and then to specific plugin identifiers.


## SC-Q134 — A

Manage Risks appears when Accept Risks or Recast Risks is enabled and allows modifying accept/recast risk rules created by other users.


## SC-Q135 — A

The Vulnerabilities page can display cumulative or mitigated databases. Mitigated is intended for vulnerabilities that are no longer currently present.


## SC-Q136 — C

Create LDAP Query Assets allows users to create LDAP query assets that update a list of hosts based on a user-defined LDAP query.


## SC-Q137 — B

LDAP query assets maintain host membership from LDAP query results, useful when asset inventory is driven by directory attributes rather than static IP lists alone.


## SC-Q138 — A

Combination asset lists support set operations. Intersection returns only assets present in both source lists. Union returns assets in either list.


## SC-Q139 — A

Asset lists are reusable scoping objects across scanning and analysis workflows. Separating PCI CDE from workstations enables precise targeting and reporting without mixing environments.


## SC-Q140 — D

Dynamic asset lists calculate membership from scan/repository data matching query conditions. Static lists with manually entered addresses are usable immediately after save.


## SC-Q141 — B

The Executive role is intended for high-level overview users who browse dashboards and review reports and can assign tasks via tickets, without focusing on running scans or managing users.


## SC-Q142 — D

Vulnerability Analyst is documented as a basic organizational role allowed to view security data, perform scans, share objects, view logs, and work with tickets.


## SC-Q143 — B

Tenable documents that the initial Security Manager created with a new organization cannot be deleted without deleting the entire organization. That account has broad organizational access to the organization's data.


## SC-Q144 — B

Official role documentation states administrators do not belong to an organization and therefore do not have access to the vulnerability data collected by Security Center. Their job is system/organization configuration.


## SC-Q145 — B

Manage Groups allows adding/editing/deleting groups. Users with this permission can create groups with access to vulnerability and event data available to the organization.


## SC-Q146 — A

Tenable Security Center (formerly Tenable.sc) is the on-premises vulnerability analysis solution. Tenable Vulnerability Management (formerly Tenable.io) is cloud-based. Security Center stores data under customer control and manages Nessus scanners.


## SC-Q147 — B

Security Center Director is an add-on that gives enterprise customers a unified view across multiple Security Center consoles spanning dispersed networks.


## SC-Q148 — D

Tenable Network Monitor (NNM) provides passive monitoring data. Security Center communicates with NNM (TCP 8835) and can retain passive findings with a typically shorter default lifetime than active scan data.


## SC-Q149 — D

The official Tenable Security Center Specialist Certification data sheet states the written exam must be completed before the practical exam. Written: 60 questions, 2 hours, 80% minimum. Practical: up to 30 tasks, 4 hours, 80% minimum.


## SC-Q150 — B

Freeze windows specify time frames when Security Center should not scan specific targets, preventing remediation/ad-hoc scans during undesired periods such as production hours. They are organizational and affect scans in the creating user's organization. Manage Freeze Windows permission is required to administer them.
