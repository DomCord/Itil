# Simulado completo A

All option rationales are in English. The existing answer key is retained.

## 1. T06-Q01

Where does a Tenable Agent perform its local vulnerability checks?

**A. On the manager appliance for all local checks — Not the keyed answer**

The manager coordinates and receives results; the installed agent performs its host checks on the endpoint itself.

**B. On the host where the agent is installed — Answer key**

An agent runs local vulnerability checks using the host on which it is installed.

**C. On the linked network scanner for all local checks — Not the keyed answer**

A linked network scanner performs network-based assessment; it does not execute every installed agent's local checks.

**D. On the cloud scanner for all local checks — Not the keyed answer**

A cloud scanner is a remote assessment sensor, not the execution location of host-installed agent checks.

Sources: [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 2. T06-Q05

Which mechanism can launch a triggered agent scan?

**A. Only a manually launched platform window scan — Not the keyed answer**

Triggered scans can launch through configured agent-side triggers, so a separate manual window launch is not always required.

**B. An interval, a trigger file or a documented nessuscli command — Answer key**

Supported triggers include intervals, trigger files and documented nessuscli operations for the configured agent scan.

**C. Only a scanner-group task assignment — Not the keyed answer**

Network scanner-group task assignment is not the agent-side triggering mechanism requested.

**D. Only a dashboard refresh — Not the keyed answer**

Refreshing a dashboard displays information and is not a configured local scan trigger.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 3. T01-Q03

An internal subnet cannot be reached from the internet. What is the most appropriate active scanning arrangement?

**A. A linked scanner in an unrelated unreachable network — Not the keyed answer**

Linking does not create a network route. This scanner still cannot contact the intended internal targets.

**B. Host Discovery from a scanner with no route — Not the keyed answer**

Host Discovery also requires connectivity to its targets; choosing the template cannot overcome the missing route.

**C. A linked Nessus scanner with network access to that subnet — Answer key**

A linked Nessus scanner with subnet connectivity can perform active probes against the otherwise internet-inaccessible targets.

**D. A cloud scanner with no route to the subnet — Not the keyed answer**

A cloud scanner without a route remains unable to reach this private subnet, regardless of its scanning capabilities.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 4. T01-Q04

Which sensor observes existing traffic rather than initiating active probes to each host?

**A. Tenable Network Monitor — Answer key**

Network Monitor derives observations from existing network traffic instead of initiating a full active probe sequence against each host.

**B. A network scan using SSH authentication — Not the keyed answer**

SSH-authenticated scanning actively connects to target hosts to run checks; authentication does not make it passive.

**C. A cloud scanner using active service detection — Not the keyed answer**

Active service detection sends probes to identify services, unlike observing traffic already present on the network.

**D. A Nessus scanner using SYN probes — Not the keyed answer**

SYN probes initiate network interactions with targets, so this describes active scanning rather than passive monitoring.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 5. T06-Q02

An agent appears in the linked list. What still needs verification?

**A. Installed service proves current platform communication — Not the keyed answer**

A running local service can still have an outdated connection or failed result upload.

**B. Linkage proves all relevant checks and uploads succeeded — Not the keyed answer**

Linkage establishes association but does not prove execution and delivery of all relevant checks.

**C. Whether it communicated, executed relevant checks and uploaded results — Answer key**

Verify communication, actual assessment execution and result upload because these are distinct steps beyond initial linkage.

**D. Current tag membership proves a completed agent scan — Not the keyed answer**

A tag groups assets and does not constitute execution evidence for an agent scan.

Sources: [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm), [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 6. T05-Q02

Plugin settings are locked in a scan based on a user-defined template. Where should those settings be changed?

**A. In the asset network association — Not the keyed answer**

Network association disambiguates environments but does not edit inherited plugin settings.

**B. In an export filter after execution — Not the keyed answer**

Export filters affect extracted results, not the checks configured in the source policy.

**C. In each locked scan field directly — Not the keyed answer**

Locked inherited settings cannot be edited directly in each derived scan field.

**D. In the related user-defined template — Answer key**

Change the plugin selection in the related user-defined template because the derived scan inherits those locked settings.

Sources: [Configure Plugins](https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm), [VM Scan Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/VMScanSettings.htm)

## 7. T03-Q03

Which example follows the documented tag format?

**A. Production:443:Admin:Plugin — Not the keyed answer**

This mixes environment, port and unrelated concepts into a four-part string rather than a tag category/value pair.

**B. Environment:Production — Answer key**

Environment is the category and Production is its value, matching the Category:Value representation.

**C. Environment=Role=Scanner — Not the keyed answer**

Role and scanner assignment are different concepts; this string is not the documented category/value tag representation.

**D. Category/Value/PluginID — Not the keyed answer**

A plugin identifier is not a third component of the Category:Value asset tag format.

Sources: [Tag Format and Application](https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm)

## 8. T03-Q06

How many networks can a scanner or scanner group belong to at one time?

**A. One network per open service — Not the keyed answer**

The Network association is assigned to the scanner or group, not separately to each open service.

**B. One — Answer key**

A scanner or scanner group can belong to one Network at a time, as documented for VM Networks.

**C. One network per plugin family — Not the keyed answer**

Plugin family selection configures checks; it does not create per-family Network memberships.

**D. Several simultaneous networks when IPs overlap — Not the keyed answer**

Overlapping ranges motivate separate Networks, but they do not allow one scanner group to have multiple simultaneous Network memberships.

Sources: [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 9. T04-Q03

Which discovery method most directly depends on local layer-2 visibility?

**A. TCP discovery through a routed path — Not the keyed answer**

TCP probes can traverse routers when permitted and do not inherently depend on local layer-2 adjacency.

**B. ICMP echo through a routed path — Not the keyed answer**

ICMP echo can also follow routed paths, so it is not the specifically local layer-2 discovery method.

**C. DNS name resolution alone — Not the keyed answer**

DNS resolves names to addresses; it does not provide the local Ethernet neighbor evidence requested here.

**D. ARP — Answer key**

ARP resolves local layer-2 neighbors and is normally constrained to the scanner's relevant broadcast domain.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 10. T02-Q17

The default Core and Nessus web interfaces use the same port.

**A. True — Not the keyed answer**

The standard ports differ: Core uses TCP 8000 and Nessus uses TCP 8834 for their web interfaces.

**B. False — Answer key**

The statement conflates two separate administration interfaces with distinct default listening ports.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 11. T05-Q17

Successful SSH authentication alone always proves that complete credentialed checks ran.

**A. True — Not the keyed answer**

SSH login can succeed while package inventory retrieval or privileged checks fail, leaving assessment incomplete.

**B. False — Answer key**

The statement incorrectly treats authentication as sufficient evidence for all required local checks.

Sources: [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)

## 12. T04-Q04

A target runs HTTPS on port 8443, but the scan excludes that port. What should be checked?

**A. A report filter hiding the port after collection — Not the keyed answer**

A report filter cannot recover a service that was never probed because its port was outside the assessment scope.

**B. The configured port range and service discovery coverage — Answer key**

Including TCP 8443 in the relevant port and service-discovery configuration is necessary to assess the HTTPS service described.

**C. A severity recast rule for the service — Not the keyed answer**

Recasting changes a finding's displayed severity; it does not add omitted ports to discovery.

**D. Risk acceptance filters for the asset — Not the keyed answer**

Risk acceptance handles collected findings and cannot restore missing service-assessment coverage.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 13. T04-Q17

A host that does not answer ICMP echo is necessarily offline.

**A. True — Not the keyed answer**

Firewalls or host policies can suppress ICMP echo replies while the host remains active and reachable through other protocols.

**B. False — Answer key**

The statement confuses one missing response type with proven host absence.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 14. T02-Q02

Which default port is used by sensors to communicate with the standard VM cloud endpoint?

**A. TCP 22 — Not the keyed answer**

TCP 22 normally serves SSH administration or target authentication, not standard sensor-to-cloud HTTPS communication.

**B. TCP 443 — Answer key**

The standard VM cloud connection uses HTTPS over TCP 443 for sensor communication.

**C. TCP 8000 — Not the keyed answer**

TCP 8000 is associated with the default Core administration interface, not the standard cloud sensor endpoint.

**D. TCP 8835 — Not the keyed answer**

TCP 8835 is the default Network Monitor interface port, not the standard VM cloud communication port.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 15. T01-Q06

Before deploying additional scanners, which information most directly supports placement decisions?

**A. License capacity alone, without target topology — Not the keyed answer**

License capacity limits assessment scale but does not reveal where scanners can reach the intended targets.

**B. Existing finding totals without reachability data — Not the keyed answer**

Finding counts describe existing results, not the routing and segmentation needed to place new scanners effectively.

**C. Target topology, reachability and expected asset coverage — Answer key**

Topology, reachability and expected coverage identify the observation points needed to assess each target segment.

**D. The severity metric selected for reports — Not the keyed answer**

Report severity configuration changes how findings are classified; it does not determine scanner network access.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 16. T01-Q05

A mobile laptop is rarely reachable by an internal network scanner. Which addition best improves local assessment coverage?

**A. A passive monitor on a segment the laptop never uses — Not the keyed answer**

A monitor on an unused segment sees no relevant laptop traffic and therefore does not solve this coverage gap.

**B. A cloud scanner with no route to the laptop — Not the keyed answer**

A cloud scanner still needs connectivity to the laptop. Without a route, its placement adds no local assessment evidence.

**C. A Tenable Agent installed on the laptop — Answer key**

An installed agent can run checks locally when the mobile laptop is unreachable by the internal scanner; linkage and reporting must also work.

**D. A longer network scan while the laptop remains unreachable — Not the keyed answer**

Extending scan duration cannot compensate for an unreachable host. A different collection method is needed.

Sources: [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 17. T02-Q06

After successful linking, how does the sensor connect to VM according to the guide?

**A. The target SSH private key — Not the keyed answer**

An SSH key for a target authorizes host access; it is not the sensor's post-link cloud communication identity.

**B. Using unique credentials associated with the sensor — Answer key**

After linking, the sensor uses its own unique communication credentials rather than repeatedly sharing the initial linking key.

**C. The original linking key for every future request — Not the keyed answer**

The linking key bootstraps association; it is not the credential used for every subsequent sensor request.

**D. A VM user password shared by all sensors — Not the keyed answer**

Sharing a user's password across sensors is not the documented sensor-specific credential model.

Sources: [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 18. T07-Q02

A vulnerability is detected once on a host. Which UI state describes that initial detection?

**A. New — Answer key**

New represents the initial single detection of the vulnerability on the host.

**B. Fixed after reassessment — Not the keyed answer**

Fixed requires later assessment evidence that the vulnerability is no longer detected, not an initial positive detection.

**C. Active after multiple detections — Not the keyed answer**

Active after repeated detections is different from the first-detection state requested.

**D. Resurfaced after Fixed — Not the keyed answer**

Resurfaced requires detection after a prior Fixed state, which the scenario does not include.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 19. T08-Q06

A scan uses a user-defined template and its compliance settings are inherited. Where is the configuration changed?

**A. In the exported report only — Not the keyed answer**

A report changes presentation of collected results; it does not edit inherited compliance check configuration.

**B. In the related user-defined template — Answer key**

The associated user-defined template controls the inherited compliance settings of its derived scans.

**C. In the asset severity override — Not the keyed answer**

A severity override affects finding classification rather than the source template's audit configuration.

**D. In each inherited scan setting directly — Not the keyed answer**

Inherited settings must be changed at their template source rather than edited independently in locked scan fields.

Sources: [Compliance in Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm)

## 20. T08-Q03

An audit check reports Warning. What is the best next step?

**A. Investigate the result and required review before declaring compliance — Answer key**

Investigate the Warning's evidence and any manual review requirements before drawing a compliance conclusion.

**B. Use risk acceptance as evidence that the control passed — Not the keyed answer**

Accepting risk does not establish that the configuration met the benchmark's technical requirement.

**C. Treat every Warning as a confirmed configuration failure — Not the keyed answer**

A Warning may require review or reflect inconclusive evidence; it is not always a confirmed failure.

**D. Treat it as Passed without review — Not the keyed answer**

A Warning cannot be silently converted into Passed without the required evidence or review.

Sources: [System Hardening](https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm)

## 21. T07-Q03

A vulnerability previously marked Fixed is detected again. Which state applies?

**A. Accepted automatically after recurrence — Not the keyed answer**

Recurrence does not automatically create a risk-acceptance decision or rule.

**B. New regardless of prior state — Not the keyed answer**

The previous Fixed history matters, so this is not treated simply as a first-ever New detection.

**C. Active with no resurfacing distinction — Not the keyed answer**

The UI preserves the resurfacing distinction when a previously Fixed vulnerability is detected again.

**D. Resurfaced — Answer key**

Resurfaced explicitly identifies a new detection following a previously Fixed state.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 22. T05-Q03

New plugins arrive in a family that is fully enabled in the policy. What is the documented behavior?

**A. Only the previously selected plugins remain enabled — Not the keyed answer**

An enabled family is not restricted to its original plugin snapshot; newly received plugins are incorporated.

**B. They stay disabled despite the fully enabled family — Not the keyed answer**

Keeping every new plugin disabled is inconsistent with a fully enabled family.

**C. The family becomes partially enabled automatically — Not the keyed answer**

A feed update does not inherently force a fully enabled family into a partially enabled state.

**D. The new plugins in that family are automatically enabled — Answer key**

A fully enabled family automatically enables newly received plugins in that family; mixed-family lock settings need separate consideration.

Sources: [Configure Plugins](https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm)

## 23. T03-Q02

A user can configure scans but should view only branch assets. What additional design is needed?

**A. Appropriate resource scope and permissions, commonly organized using tags — Answer key**

Branch-specific resource permissions, often organized through asset tags, constrain the user's data scope while retaining needed scan privileges.

**B. Administrator access to all resources — Not the keyed answer**

Administrator access expands privileges and resource visibility rather than enforcing branch-only access.

**C. A shared user account for both branches — Not the keyed answer**

A shared account prevents individual responsibility and does not independently enforce each user's branch scope.

**D. A dashboard filter with no permission changes — Not the keyed answer**

A dashboard filter changes a view; it is not an authorization boundary preventing access to other assets.

Sources: [RBAC Get Started](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm)

## 24. T03-Q01

Which statement best distinguishes roles from permissions in VM?

**A. A role alone always establishes asset scope — Not the keyed answer**

A role's allowed actions do not, by themselves, establish the intended branch-specific resource scope.

**B. Roles only restrict data and permissions only grant actions — Not the keyed answer**

This reverses the distinction: roles govern privileges, while permissions and resource scope determine accessible data.

**C. Roles and permissions describe severity configuration — Not the keyed answer**

Severity classification is a separate setting; it does not define the roles-versus-permissions access model.

**D. Roles govern actions while permissions govern accessible data and resources — Answer key**

Roles specify permitted actions, while resource permissions constrain the data and resources on which those actions can operate.

Sources: [Roles](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm)

## 25. T07-Q05

How are new and active UI vulnerability states represented in the API?

**A. Both are labeled reopened — Not the keyed answer**

Reopened corresponds to resurfaced findings rather than the combined New/Active representation requested.

**B. Both are labeled fixed — Not the keyed answer**

Fixed represents vulnerabilities no longer detected, not current New or Active findings.

**C. Both are labeled open — Answer key**

The API represents both New and Active UI vulnerabilities with the open state.

**D. New is open and active is closed — Not the keyed answer**

An Active vulnerability is still open; labeling it closed incorrectly implies resolution.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 26. T04-Q02

A powered-on host blocks ICMP echo. What is the best conclusion from missing echo replies?

**A. The host is offline despite the stated power condition — Not the keyed answer**

A blocked echo response can occur on a powered-on host, so it does not establish that the host is offline.

**B. Its open TCP services are necessarily absent — Not the keyed answer**

ICMP filtering does not prove that the host lacks reachable TCP services.

**C. Its DNS record must have been deleted — Not the keyed answer**

A missing ICMP reply says nothing conclusive about whether a DNS record was deleted.

**D. Other discovery methods or evidence are needed before declaring it absent — Answer key**

Use other discovery methods or corroborating evidence because an active host can block ICMP echo replies.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 27. T04-Q06

A hostname target resolves to an unexpected address. Which investigation is most relevant?

**A. An agent reporting window — Not the keyed answer**

An agent window controls local assessment timing and does not explain a hostname resolving to the wrong target IP.

**B. DNS resolution and whether the resolved address belongs to the intended scope — Answer key**

Name resolution determines the address actually contacted, so verify DNS and whether the resolved address is inside the intended scope.

**C. Dashboard ownership and report permissions — Not the keyed answer**

Report access and dashboard ownership do not control the scanner's DNS resolution for a hostname target.

**D. Finding severity recast criteria — Not the keyed answer**

Recast criteria alter finding severity and cannot redirect the scan to the intended host.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 28. T03-Q04

What causes an automatic tag to apply to relevant assets?

**A. Manual assignment on every new asset — Not the keyed answer**

Manual assignment describes a manual tag, not rule-driven automatic membership.

**B. Assets matching the configured tag rules — Answer key**

An automatic tag applies when an asset satisfies its configured matching rules.

**C. The role of the user viewing the tag — Not the keyed answer**

The viewer's user role controls access; it does not determine whether an asset satisfies tag criteria.

**D. Membership in any scanner group — Not the keyed answer**

Scanner group membership alone is not the universal rule for automatic tags; the configured asset criteria control matching.

Sources: [Tag Format and Application](https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm)

## 29. T04-Q05

What is the purpose of using CIDR notation in a scan target definition?

**A. Define a benchmark version — Not the keyed answer**

A benchmark version belongs to compliance configuration and is not specified by an IP prefix.

**B. Define a severity threshold — Not the keyed answer**

A severity threshold filters or classifies risk and is unrelated to address block notation.

**C. Express an IP address block as part of the target scope — Answer key**

CIDR expresses an IP prefix and therefore identifies the address block included in the assessment scope.

**D. Define a plugin family selection — Not the keyed answer**

Plugin families select checks; CIDR selects address scope rather than which checks execute.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 30. T03-Q17

Automatic tags can change membership when matching asset attributes change.

**A. True — Answer key**

Rule-driven membership can change when an asset begins or ceases to match the relevant criteria.

**B. False — Not the keyed answer**

Automatic membership is not inherently frozen after initial assignment; changes in matching attributes can alter the resulting set.

Sources: [Tag Format and Application](https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm)

## 31. T01-Q17

An agent assessment automatically proves how every service appears to a remote network scanner.

**A. True — Not the keyed answer**

Local agent evidence does not automatically reproduce remote routing, firewall exposure or the scanner's view of services.

**B. False — Answer key**

The statement overclaims agent coverage. Remote exposure and local host assessment require different observation perspectives.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 32. T02-Q01

What does Tenable Core provide in a Core + Nessus deployment?

**A. A replacement for the Nessus application — Not the keyed answer**

Core hosts and administers the appliance environment; Nessus remains the application that performs assessments.

**B. An operating system and appliance administration environment for Nessus — Answer key**

Tenable Core supplies the operating system and appliance administration layer on which Nessus runs.

**C. The vulnerability assessment engine itself — Not the keyed answer**

The Nessus application performs vulnerability checks. Core itself is not the assessment engine.

**D. The complete SaaS VM control plane — Not the keyed answer**

A local Core appliance is distinct from the VM SaaS control plane and does not provide that entire cloud service.

Sources: [Tenable Core + Nessus](https://docs.tenable.com/tenable-core/Nessus/Content/Introduction_Nessus.htm)

## 33. T02-Q03

Which default port identifies the Nessus scanner web interface?

**A. TCP 8835 — Not the keyed answer**

TCP 8835 belongs to the default Network Monitor interface, so it identifies a different component.

**B. TCP 445 — Not the keyed answer**

TCP 445 is associated with SMB on Windows targets and is not the Nessus web console port.

**C. TCP 8000 — Not the keyed answer**

TCP 8000 is the default Core appliance administration port, not the Nessus application interface.

**D. TCP 8834 — Answer key**

The default Nessus scanner web interface listens on TCP 8834; customized deployments may change that setting.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 34. T05-Q05

Which protocols does the Windows credentialed checks guide explicitly discuss?

**A. SMB and WMI — Answer key**

The Windows credentialed-checks guidance discusses SMB and WMI access for collecting local host evidence.

**B. SNMP and ICMP only — Not the keyed answer**

ICMP and SNMP alone do not describe the SMB/WMI Windows authenticated collection methods requested.

**C. SSH and SCP — Not the keyed answer**

SSH and SCP describe a different host-access approach and are not the Windows protocols emphasized here.

**D. HTTPS to the Core administration interface — Not the keyed answer**

The Core administration interface manages an appliance rather than authenticating local checks on a Windows target.

Sources: [Credentialed Checks on Windows](https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm)

## 35. T08-Q02

Why must an audit file match the target system and intended benchmark version?

**A. A benchmark version has no effect on requirements — Not the keyed answer**

Benchmark versions can change control requirements and expected values, so version selection matters.

**B. Otherwise the checks may not represent the applicable configuration requirements — Answer key**

An incompatible platform or benchmark version can test the wrong settings and fail to represent the applicable requirements.

**C. Any audit applies equally to every target platform — Not the keyed answer**

Audit checks are platform- and requirement-specific; one audit does not apply equally to every system.

**D. The audit filename alone configures the target — Not the keyed answer**

An audit filename selects assessment logic but does not itself configure the target system.

Sources: [Compliance in Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm), [System Hardening](https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm)

## 36. T05-Q01

Which template is a suitable starting point for a standard full system network assessment?

**A. A tactical single-CVE scan — Not the keyed answer**

A tactical single-CVE scan deliberately narrows the checks and is not the standard starting point for full system coverage.

**B. Basic Network Scan — Answer key**

Basic Network Scan provides a standard vulnerability assessment starting point; target scope and collection quality still need validation.

**C. Host Discovery — Not the keyed answer**

Host Discovery primarily establishes inventory rather than comprehensive vulnerability assessment.

**D. Credentialed Patch Audit when a full assessment is required — Not the keyed answer**

Credentialed Patch Audit focuses on missing updates and is narrower than the full assessment requested.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 37. T05-Q04

A Windows credentialed scan has a correct password but cannot access required files or registry data. What should be investigated?

**A. The finding acceptance criteria — Not the keyed answer**

Risk acceptance affects existing findings and cannot fix blocked access to Windows files or registry data.

**B. Account privileges, host policies and required access paths — Answer key**

Authentication can succeed while permissions, administrative shares, registry access or host policies still block required collection.

**C. Report permission scope only — Not the keyed answer**

Permissions for viewing reports are distinct from the service account's access to the assessed Windows host.

**D. The selected severity metric — Not the keyed answer**

Severity selection classifies findings; it cannot grant the scanner host-level access privileges.

Sources: [Credentialed Checks on Windows](https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm)

## 38. T03-Q07

What must be validated before grouping scanners to assess a target subnet?

**A. Every scanner that may receive tasks can reach the intended targets — Answer key**

Any scanner receiving distributed tasks must have the required connectivity; otherwise part of the assigned scope can go unassessed.

**B. All scanners belong to different network contexts — Not the keyed answer**

Different Network contexts are not a substitute for checking target reachability and can conflict with the intended environment separation.

**C. The group name matches the target subnet — Not the keyed answer**

A descriptive group name does not establish routing, firewall access or connectivity to the subnet.

**D. At least one scanner can reach every target — Not the keyed answer**

One reachable scanner is insufficient if tasks can also be sent to other group members that cannot reach the targets.

Sources: [Scan Distribution](https://docs.tenable.com/vulnerability-management/Content/Scans/scan-distribution.htm)

## 39. T01-Q01

Which component centrally manages vulnerability data in the cloud-based VM deployment?

**A. A standalone Nessus Professional console — Not the keyed answer**

Nessus Professional manages its own standalone scans; it is not the central cloud control plane for this deployment.

**B. The local Agent CLI — Not the keyed answer**

The Agent CLI administers an individual sensor. It does not aggregate the organization's vulnerability data.

**C. Tenable One Vulnerability Management — Answer key**

Tenable Vulnerability Management centrally stores findings and coordinates the cloud-based assessment workflow.

**D. Tenable Core alone — Not the keyed answer**

Tenable Core supplies the appliance operating environment. It does not replace the VM cloud management service.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm), [Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm)

## 40. T02-Q04

An administrator opens the appliance administration interface on port 8000. Which component is being accessed?

**A. The Nessus scanner interface — Not the keyed answer**

The default Nessus web interface uses TCP 8834 rather than the Core administration port in the question.

**B. The Windows SMB interface — Not the keyed answer**

Windows SMB normally uses TCP 445; it is unrelated to this appliance administration interface.

**C. Tenable Core — Answer key**

TCP 8000 identifies the default Tenable Core administration interface used to manage the appliance environment.

**D. The Network Monitor interface — Not the keyed answer**

The default Network Monitor interface is on TCP 8835, not TCP 8000.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 41. T06-Q06

A mobile workforce frequently misses fixed scan windows. Which approach deserves consideration?

**A. Shorten the fixed window without reviewing participation — Not the keyed answer**

Shortening the window without investigating missed participation can further reduce coverage of intermittently available endpoints.

**B. Use a cloud scanner with no route to the notebooks — Not the keyed answer**

A cloud scanner without a route to the notebooks still cannot perform the missing local collection.

**C. Triggered scans matched to endpoint availability and workflow — Answer key**

Agent-side triggered scans can align collection with endpoint availability, while communication and result delivery still require verification.

**D. Accept risks of hosts missing the window — Not the keyed answer**

Accepting risk does not restore missing assessment data or solve endpoint participation gaps.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 42. T08-Q05

A configuration check cannot read the required setting due to insufficient access. What should be reviewed?

**A. Use a severity recast rule instead of collecting data — Not the keyed answer**

Recasting finding severity does not retrieve the protected configuration evidence needed for an audit conclusion.

**B. Assume the missing evidence proves Passed — Not the keyed answer**

Unavailable evidence cannot establish that the inaccessible setting satisfies the requirement.

**C. Credential privileges and evidence collection before interpreting compliance — Answer key**

Check the account's privileges and collection path before interpreting a result based on inaccessible configuration data.

**D. Replace the benchmark without inspecting access — Not the keyed answer**

Changing the benchmark without diagnosing the access problem can still leave required evidence unavailable.

Sources: [Compliance in Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm), [Credentialed Checks on Linux](https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm)

## 43. T03-Q05

A linked scanner scans two environments that reuse IPs without the correct network context. What risk should be investigated?

**A. An exclusion rule automatically separates identities — Not the keyed answer**

Exclusion rules restrict scanning; they do not provide the missing network identity context for overlapping IPs.

**B. The agent group name replaces network context — Not the keyed answer**

An agent group organizes agents and does not substitute for a scanner's Network association.

**C. Correct correlation is guaranteed by IP alone — Not the keyed answer**

An address can refer to different hosts in different environments, so IP-only correlation is not guaranteed.

**D. Incorrect asset association or duplicate records — Answer key**

Without the correct Network context, overlapping addresses can be correlated incorrectly or produce inconsistent asset records.

Sources: [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 44. T06-Q17

A scan window guarantees that every linked agent will report successfully.

**A. True — Not the keyed answer**

A configured window cannot force offline agents to communicate, execute and upload successfully.

**B. False — Answer key**

The statement overstates the window's effect; endpoint availability and communication still determine participation.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 45. T08-Q01

What does a compliance audit primarily compare?

**A. Only known CVEs against exploit activity — Not the keyed answer**

CVE and exploit analysis concerns vulnerability risk; it does not evaluate every benchmark configuration requirement.

**B. Only observed services against port numbers — Not the keyed answer**

Observed services provide exposure evidence but are not the entire configuration-versus-benchmark comparison.

**C. Only scan duration against a reporting deadline — Not the keyed answer**

Execution duration and reporting deadlines are operational measurements rather than compliance criteria.

**D. Observed configuration against specified benchmark requirements — Answer key**

Compliance auditing compares collected configuration evidence with the selected benchmark or audit requirements.

Sources: [Compliance in Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm)

## 46. T06-Q03

What is the role of an agent group in an agent scan configuration?

**A. Change the severity metric on each host — Not the keyed answer**

An agent group selects participants; it does not directly change each host's finding severity metric.

**B. Organize the agents intended to participate in the scan — Answer key**

Agent groups organize the agents included in a particular agent assessment configuration.

**C. Define a routed network for remote service scanning — Not the keyed answer**

An agent group is not a routing configuration for remote service probes.

**D. Apply user permissions to every finding — Not the keyed answer**

User resource permissions and agent assessment membership serve different purposes.

Sources: [Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm), [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 47. T07-Q06

What distinguishes VPR from a technical severity score alone?

**A. It is the asset business-criticality rating — Not the keyed answer**

Asset business criticality is represented by ACR, a separate metric from vulnerability threat priority.

**B. It incorporates dynamic vulnerability and threat information — Answer key**

VPR incorporates changing vulnerability and threat intelligence, adding prioritization context beyond a static technical severity score.

**C. It is the elapsed scan execution time — Not the keyed answer**

Scan runtime is an operational duration and is not a vulnerability risk-priority metric.

**D. It is only a static technical severity vector — Not the keyed answer**

Treating VPR as only a static vector omits its dynamic threat inputs and regular recalculation.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 48. T01-Q02

A team must assess services reachable from outside its network. Which sensor placement best represents that perspective?

**A. An agent performing local checks only — Not the keyed answer**

Local agent checks inspect the laptop itself; they do not reproduce an external observer's view of public services.

**B. A scanner behind the firewall with no external route — Not the keyed answer**

A scanner without an external route cannot test the publicly reachable attack surface from that perspective.

**C. A cloud scanner with access to the public targets — Answer key**

A reachable cloud scanner can probe the public targets from outside the organization's network, matching the assessment objective.

**D. A passive monitor seeing only internal traffic — Not the keyed answer**

Internal passive traffic provides a different observation point and cannot establish how services appear to an external scanner.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm), [Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm)

## 49. T05-Q07

A Linux login succeeds, but package inventory cannot be retrieved. What is the best interpretation?

**A. Authentication success alone does not confirm complete credentialed checks — Answer key**

A successful login is only one prerequisite; failure to retrieve native inventory can leave credentialed assessment incomplete.

**B. All local checks succeeded because login succeeded — Not the keyed answer**

Successful SSH authentication does not prove that every required local check or package query succeeded.

**C. Credentials are irrelevant after TCP access succeeds — Not the keyed answer**

TCP reachability alone cannot authorize package and patch inventory collection from the target.

**D. The absent inventory proves no missing patches — Not the keyed answer**

Missing inventory is missing evidence, not evidence that the host has no missing patches.

Sources: [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)

## 50. T08-Q17

A vulnerability scan with no detected CVEs proves that every benchmark requirement is satisfied.

**A. True — Not the keyed answer**

The absence of detected CVEs does not test every benchmark configuration requirement.

**B. False — Answer key**

Compliance requires relevant audit evidence for the specified controls, not merely a vulnerability scan with no CVE findings.

Sources: [Compliance in Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm)

## 51. T06-Q04

What does a scan window define for an agent group?

**A. A timeframe in which the group must report for inclusion in the scan results — Answer key**

The scan window defines the timeframe in which selected agents must participate and report for inclusion in that scan's results.

**B. A vulnerability remediation deadline — Not the keyed answer**

A remediation deadline concerns fixing findings, not the reporting interval of an agent assessment.

**C. A guarantee that linked agents stay online — Not the keyed answer**

A window cannot guarantee endpoint availability or successful communication.

**D. The local operating-system uptime interval — Not the keyed answer**

Operating-system uptime is independent of the platform's configured agent reporting window.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 52. T07-Q17

A user can directly edit the calculated VPR value.

**A. True — Not the keyed answer**

Calculated VPR is not directly user-editable; configurable risk treatment and asset context are separate functions.

**B. False — Answer key**

The statement conflicts with the documented restriction on directly editing VPR values.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 53. T01-Q07

A dashboard shows fewer vulnerabilities after a network change. What should be checked before interpreting this as reduced risk?

**A. Treat the lower finding total as sufficient evidence — Not the keyed answer**

Fewer findings alone may indicate fewer assets or checks were assessed. Comparable collection coverage must be established first.

**B. Assume missing assets have been remediated — Not the keyed answer**

An asset disappearing from collection is not proof that its vulnerabilities were corrected.

**C. Use only the average VPR of visible findings — Not the keyed answer**

A VPR average over the remaining visible findings omits potentially unassessed assets and cannot establish equal coverage.

**D. Whether the same expected assets and checks were still assessed — Answer key**

Confirming the same expected assets and checks were assessed distinguishes a collection gap from a genuine reduction in detected risk.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm), [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm)

## 54. T07-Q04

What should a user know when filtering Active vulnerabilities in the UI?

**A. It contains only findings with Accept rules — Not the keyed answer**

An Accept rule concerns risk treatment and is not what defines the Active lifecycle filter.

**B. It always excludes New — Not the keyed answer**

The documented Active filter includes New findings, so it does not always exclude them.

**C. It contains only previously Fixed findings — Not the keyed answer**

Previously Fixed findings detected again are Resurfaced; that is not the exclusive content of the Active filter.

**D. The filter also includes New vulnerabilities — Answer key**

New findings are included when filtering for Active vulnerabilities, so the filter is broader than repeated detections alone.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 55. T07-Q07

What does ACR describe when available under the required licensing?

**A. Technical severity of a CVE — Not the keyed answer**

Technical CVE severity belongs to vulnerability scoring such as CVSS, not the asset's business-criticality rating.

**B. Global threat activity for a vulnerability — Not the keyed answer**

Global vulnerability threat activity informs VPR rather than defining an organization's asset criticality.

**C. The business criticality of an asset — Answer key**

ACR expresses an asset's importance to the organization and is available under the applicable additional licensing.

**D. The maturity of an exploit without asset context — Not the keyed answer**

Exploit maturity is vulnerability threat evidence; it is not the asset business context captured by ACR.

Sources: [Tenable Scoring Explained: VM](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)

## 56. T02-Q05

What is the primary purpose of a sensor linking key?

**A. Provide Windows target credentials — Not the keyed answer**

Windows target credentials authorize checks on a host; they do not associate a sensor with VM.

**B. Establish the initial association between a sensor and VM — Answer key**

A sensor linking key establishes the initial association between the sensor and its VM environment.

**C. Encrypt each report with a user password — Not the keyed answer**

Report encryption with a user password is a separate concern and is not the linking key's function.

**D. Authenticate user API requests — Not the keyed answer**

User API requests use user API credentials, which are distinct from a sensor linking key.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 57. T04-Q01

Which scan template is designed for discovering live hosts and available inventory information?

**A. Policy Compliance Auditing — Not the keyed answer**

Compliance auditing compares configurations with benchmark requirements rather than serving as the initial host inventory template.

**B. A tactical single-vulnerability scan — Not the keyed answer**

A tactical scan investigates a particular vulnerability and is not the general host discovery workflow.

**C. Host Discovery — Answer key**

Host Discovery identifies live hosts and available inventory attributes to support subsequent assessment planning.

**D. Credentialed Patch Audit — Not the keyed answer**

Credentialed Patch Audit focuses on missing patches using host access rather than initial host discovery.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 58. T05-Q06

Which access method supports local security checks on Linux targets?

**A. Unauthenticated TCP service detection only — Not the keyed answer**

Unauthenticated service probing does not supply the local package and configuration evidence required for host-based checks.

**B. SSH with appropriate credentials or keys and needed privileges — Answer key**

SSH authentication with sufficient privileges enables collection and execution of supported local Linux security checks.

**C. SMB with Windows credentials only — Not the keyed answer**

Windows SMB credentials are not the documented general Linux SSH access method in this scenario.

**D. An agent status check on the scanner — Not the keyed answer**

Checking an agent on the scanner does not authenticate the scanner to the Linux target.

Sources: [Credentialed Checks on Linux](https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm)

## 59. T07-Q01

Which information distinguishes vulnerability instances on an asset according to VM documentation?

**A. Asset hostname and dashboard title — Not the keyed answer**

A hostname identifies an asset, while a dashboard title identifies a view; neither distinguishes service-specific vulnerability instances.

**B. CVE name alone without instance context — Not the keyed answer**

The same CVE can affect multiple services or assets, so its name alone lacks the required instance context.

**C. CVSS score and report date alone — Not the keyed answer**

Severity and report timing do not uniquely identify the plugin/service occurrence on the asset.

**D. Plugin ID, port and protocol — Answer key**

VM distinguishes an instance on an asset by plugin ID, port and protocol, allowing separate occurrences to be tracked.

Sources: [Findings](https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm)

## 60. T08-Q04

A check reports Passed. What does that support?

**A. The tested parameter met the applicable check requirements in the collected evidence — Answer key**

Passed supports that the particular tested requirement was satisfied in the evidence collected for that check.

**B. Every control remains compliant indefinitely — Not the keyed answer**

A result from one assessment cannot guarantee indefinite future compliance after configuration changes.

**C. Untested requirements also passed — Not the keyed answer**

Untested controls lack assessment evidence and cannot inherit Passed from a different check.

**D. The host has no vulnerabilities — Not the keyed answer**

Configuration compliance for one parameter does not establish the absence of all vulnerabilities on the host.

Sources: [System Hardening](https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm)
