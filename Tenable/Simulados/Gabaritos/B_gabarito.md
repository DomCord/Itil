# Simulado completo B

All option rationales are in English. The existing answer key is retained.

## 1. T08-Q12

Which information best supports an operations team receiving a remediation report?

**A. Only a trend without affected assets or owners — Not the keyed answer**

A trend without affected assets or responsibility leaves the operations team unable to target and own corrective actions.

**B. Only the percentage of visible low findings — Not the keyed answer**

The low-severity percentage alone omits the specific evidence and actions needed for remediation.

**C. Affected assets, evidence, proposed action, responsible owner and follow-up — Answer key**

Asset identity, evidence, proposed remediation, ownership and follow-up make the report actionable for the receiving team.

**D. Only the largest severity total — Not the keyed answer**

An aggregate maximum severity total does not identify which systems need which corrective work.

Sources: [Create Report API](https://developer.tenable.com/reference/vm-reports-create), [Use Report Cards](https://docs.tenable.com/vulnerability-management/Content/exposure-response/use-report-cards.htm)

## 2. T03-Q13

After changing the severity metric, why might two findings of the same vulnerability temporarily show different severities?

**A. Only future scans can display findings at all — Not the keyed answer**

Older findings can remain visible; visibility is not limited to findings collected by scans after the setting change.

**B. One has been re-observed under the new metric and the other has not — Answer key**

New or re-observed findings adopt the new metric, while findings not re-detected retain their previous severity until updated.

**C. The metric change deletes the older finding — Not the keyed answer**

Changing severity calculation does not delete the older finding or its historical evidence.

**D. Every existing finding changes immediately — Not the keyed answer**

The documentation explicitly allows previously observed findings to retain old severity until re-observation, so the update is not universal and immediate.

Sources: [General Settings](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 3. T08-Q13

What is the purpose of Exposure Response Report Cards?

**A. Override every benchmark result — Not the keyed answer**

Report Cards summarize remediation initiative progress rather than overriding benchmark check results.

**B. Show initiative-related progress and responsible-owner context — Answer key**

Exposure Response Report Cards present initiative progress with owner or responsibility context for follow-up.

**C. Provide sensor linkage credentials — Not the keyed answer**

Sensor linking credentials belong to deployment management, not initiative reporting.

**D. Replace the network assessment engine — Not the keyed answer**

A progress presentation does not replace the sensors and checks that collect assessment evidence.

Sources: [Use Report Cards](https://docs.tenable.com/vulnerability-management/Content/exposure-response/use-report-cards.htm)

## 4. T02-Q08

Why can complex credentialed scans require more resources than a small discovery pilot?

**A. Credentialed scans require less processing in every workload — Not the keyed answer**

Authenticated checks can add processing and inventory work; they are not universally cheaper than discovery.

**B. Hardware depends only on host count — Not the keyed answer**

Host count alone ignores the complexity, concurrency and evidence volume of the configured checks.

**C. Only passive monitors require local storage — Not the keyed answer**

Active scanners also retain results, logs and plugin data, so storage requirements are not exclusive to passive monitors.

**D. The checks may consume additional processing, memory and storage — Answer key**

More complex checks can require extra CPU, memory and storage compared with a small discovery-only workload.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

## 5. T02-Q11

An agent group exists as "Lab-Windows", but the linking command uses "lab-windows". What should be checked?

**A. The network name overrides the agent group name — Not the keyed answer**

Network context and agent group membership are different settings; a network name does not correct a misspelled group name.

**B. The group name is always case-insensitive — Not the keyed answer**

The documented CLI group name matching is case-sensitive, so assuming case-insensitive matching can cause an error.

**C. Exact case-sensitive matching of the existing agent group name — Answer key**

Using the existing group's exact spelling and case avoids mismatching Lab-Windows with lab-windows.

**D. The scan window corrects the name automatically — Not the keyed answer**

A reporting window controls scan timing; it does not repair an incorrect group name in a linking command.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 6. T04-Q08

What explains why a passive monitor and an active discovery scan may produce different inventories?

**A. Every difference proves an asset correlation failure — Not the keyed answer**

Different collection perspectives can legitimately produce different inventories; not every discrepancy proves correlation failure.

**B. Active discovery and passive traffic share identical coverage — Not the keyed answer**

Active probing and passive traffic observation do not have identical reachability and visibility constraints.

**C. They obtain evidence through different observation methods and coverage — Answer key**

Active discovery sends probes, while passive monitoring relies on visible traffic; those different evidence paths explain inventory differences.

**D. Passive discovery always has filesystem evidence — Not the keyed answer**

Passive monitoring does not inherently obtain local filesystem evidence, so this is not a general explanation for the difference.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 7. T06-Q18

Triggered scans can be initiated by agent-side triggers without a separate window launch by a user.

**A. True — Answer key**

Configured agent-side triggers can launch a triggered assessment without a user separately starting a platform window scan.

**B. False — Not the keyed answer**

Triggered scans are not restricted to the manual window-launch model described by this alternative.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 8. T06-Q09

Which need can remain after deploying agents to all laptops?

**A. Every network scan becomes redundant — Not the keyed answer**

Installing agents does not make every remote exposure assessment redundant.

**B. Assessment of how network services are exposed to remote scanners — Answer key**

Network scanners can still assess the service exposure visible from their network vantage point, complementing local agent checks.

**C. Every remote service is guaranteed reachable — Not the keyed answer**

Agent deployment does not guarantee routing or firewall access to every remote service.

**D. Remote exposure is fully proven by local checks — Not the keyed answer**

Local checks do not automatically prove how services appear to a remote observer.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 9. T06-Q10

According to the triggered scan guide, how are triggered-scan vulnerability data exported?

**A. Individual exports identical to window scan results — Not the keyed answer**

The documented triggered-scan export workflow differs from the individual result exports used for window scans.

**B. Through the bulk vulnerability export API — Answer key**

Triggered vulnerability results are retrieved through the bulk vulnerability export API, according to the triggered-scan guidance.

**C. Only export of agent group membership — Not the keyed answer**

Group membership describes participants rather than exporting the collected vulnerability records.

**D. A report card with no vulnerability data export — Not the keyed answer**

A report card presents remediation progress and is not the vulnerability data export method for triggered scans.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 10. T07-Q08

Which VPR driver offers evidence about known exploitation context?

**A. The number of hosts assigned to an agent group — Not the keyed answer**

Agent group size concerns assessment organization and does not demonstrate exploitation of the particular vulnerability.

**B. The asset operating-system display name — Not the keyed answer**

An operating-system display name does not establish known exploitation of a CVE.

**C. The business owner of the asset — Not the keyed answer**

Business ownership provides local organizational context, not the CISA exploitation evidence requested.

**D. Whether the vulnerability is on CISA KEV — Answer key**

CISA KEV membership identifies known exploitation context and is a documented VPR-related driver.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 11. T07-Q18

Changing a finding severity through Recast installs the missing patch on the target.

**A. True — Not the keyed answer**

Recasting modifies displayed severity but does not execute a software update on the host.

**B. False — Answer key**

Technical remediation requires a target-side corrective action and suitable validation, not merely a finding severity override.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 12. T01-Q18

A successful pilot should compare observed assets with the expected assessment scope.

**A. True — Answer key**

Comparing observed assets with the expected scope exposes missing targets and tests whether the pilot achieved the planned coverage.

**B. False — Not the keyed answer**

Without the expected denominator, a pilot can appear successful even though required assets were never assessed.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm), [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm)

## 13. T08-Q10

Which format is appropriate for structured offline analysis of exported findings?

**A. Only a total printed in a report card — Not the keyed answer**

A single report-card total lacks the individual records and fields needed for structured analysis.

**B. Only a dashboard screenshot — Not the keyed answer**

A screenshot is an image of a view, not a structured dataset of finding records.

**C. Only a PDF cover without occurrence data — Not the keyed answer**

A PDF cover without occurrence data cannot support record-level analysis of exported findings.

**D. CSV or JSON as supported by the export feature — Answer key**

Supported CSV or JSON exports retain structured fields suitable for offline filtering, aggregation and analysis.

Sources: [Exports](https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm)

## 14. T05-Q09

Which plugin is relevant to investigating failed OS security patch assessment?

**A. 19506 alone, without reviewing patch-failure evidence — Not the keyed answer**

General scan information is useful context, but ignoring the explicit patch-assessment failure evidence weakens this diagnosis.

**B. 21745, OS Security Patch Assessment Failed — Answer key**

Plugin 21745 specifically reports OS Security Patch Assessment Failed and helps investigate missing patch-assessment evidence.

**C. The asset linking status alone — Not the keyed answer**

Sensor linkage does not establish whether target OS patch inventory and checks succeeded.

**D. The Host Discovery template selection alone — Not the keyed answer**

Selecting Host Discovery does not provide a diagnosis of a failed authenticated patch assessment.

Sources: [Plugin 21745: OS Security Patch Assessment Failed](https://www.tenable.com/plugins/nessus/21745)

## 15. T03-Q08

VM scan distribution across a scanner group is primarily described as distribution of what?

**A. Whole scans only, assigned to the oldest scanner — Not the keyed answer**

The documented model distributes scan tasks according to capacity rather than always assigning complete scans to the oldest sensor.

**B. Scan tasks according to available capacity — Answer key**

Task distribution uses available scanner capacity and workload to spread assessment work across a group.

**C. Credentials only, with no task distribution — Not the keyed answer**

Credentials support target access, but the group also distributes assessment tasks rather than only credentials.

**D. One permanent asset allocation per scanner — Not the keyed answer**

A permanent one-asset/one-scanner allocation is not the capacity-based task distribution described in the question.

Sources: [Scan Distribution](https://docs.tenable.com/vulnerability-management/Content/Scans/scan-distribution.htm)

## 16. T04-Q13

Which record best supports investigating a missing host?

**A. Expected identity, segment, chosen sensor and discovery evidence — Answer key**

Expected identity, segment, sensor and collected discovery evidence provide the context needed to investigate why a specific host is missing.

**B. The final finding count without expected identities — Not the keyed answer**

An aggregate finding count cannot identify which expected host or collection path was absent.

**C. A report severity summary without discovery evidence — Not the keyed answer**

A severity summary describes collected findings but omits the host-specific discovery evidence needed for this investigation.

**D. A hostname alone without segment context — Not the keyed answer**

A hostname without environment and sensor context can remain ambiguous and does not explain the missing observation.

Sources: [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 17. T06-Q12

A VM release dated October 6, 2026 describes an agent health change. What is the stated condition for Offline?

**A. No check-in for 72 hours or more — Answer key**

The referenced October 6, 2026 release change defines Offline as no check-in for at least 72 hours; verify the applicable product version.

**B. No check-in for seven days — Not the keyed answer**

Seven days is not the threshold specified by the particular release note referenced in this question.

**C. No scan findings after a completed upload — Not the keyed answer**

A successful upload with no detected findings is not equivalent to missing agent check-ins for the documented offline interval.

**D. No check-in for 24 hours — Not the keyed answer**

A 24-hour threshold does not match the 72-hour condition stated in the referenced release change.

Sources: [VM 2026 Release Notes](https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm)

## 18. T05-Q12

A scan takes too long. Which tuning approach best supports a reliable comparison?

**A. Change all tuning settings in one run — Not the keyed answer**

Changing several parameters together makes it difficult to attribute performance or coverage changes to a specific cause.

**B. Change one relevant parameter, measure impact and verify coverage — Answer key**

Changing one relevant parameter and measuring both duration and coverage supports a meaningful tuning comparison.

**C. Increase concurrency without checking target impact — Not the keyed answer**

More concurrency can overload targets or sensors, so its impact must be measured rather than assumed beneficial.

**D. Remove slow plugins before measuring coverage — Not the keyed answer**

Removing checks may shorten runtime by reducing coverage; measure that tradeoff before treating it as improvement.

Sources: [Scan Tuning: Settings Configuration](https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm)

## 19. T05-Q10

A scan status is Completed. Which conclusion is still unsupported without additional evidence?

**A. All targeted hosts completed credentialed local checks successfully — Answer key**

Completed is an execution state, not proof that all targeted hosts passed authenticated collection and local checks.

**B. Execution information should be inspected — Not the keyed answer**

Inspecting execution information remains appropriate; the question asks for the unsupported success conclusion, not a recommended investigation.

**C. Results may be available for review — Not the keyed answer**

Results can be available despite partial failures, so this possibility is compatible with a completed execution.

**D. The scan reached a final execution state — Not the keyed answer**

Completed does indicate a final execution state; it does not by itself guarantee assessment quality.

Sources: [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm), [Plugin 19506: Nessus Scan Information](https://www.tenable.com/plugins/nessus/19506)

## 20. T06-Q07

Which command helps observe linkage and communication status of an agent?

**A. nessuscli agent status — Answer key**

The agent status command exposes useful linkage and communication state without deliberately breaking the association.

**B. nessuscli agent unlink — Not the keyed answer**

Unlink removes the agent's association and changes its state instead of simply inspecting it.

**C. An ICMP check against another notebook — Not the keyed answer**

An ICMP response from another notebook does not show this agent's linkage or manager communication.

**D. A cloud report export command — Not the keyed answer**

A cloud report export retrieves results but is not the agent CLI status operation.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 21. T04-Q18

Host Discovery and a full vulnerability assessment have the same purpose and coverage.

**A. True — Not the keyed answer**

Discovery establishes host inventory, whereas vulnerability assessment runs relevant exposure checks; their purposes and coverage differ.

**B. False — Answer key**

The statement incorrectly equates inventory collection with vulnerability assessment.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 22. T07-Q13

A rule intended for one application matches an entire subnet. What is the main review priority?

**A. Treat the broad match as technical remediation — Not the keyed answer**

An overly broad rule match does not remediate the affected software or services.

**B. Narrow the criteria and confirm the exact matching assets and findings — Answer key**

Review the matched assets and findings and narrow criteria to the intended application so unrelated findings are not affected.

**C. Extend expiration before inspecting the match scope — Not the keyed answer**

Extending the rule lifetime before inspecting scope perpetuates the potentially unintended treatment.

**D. Keep the broad scope because the rule has a name — Not the keyed answer**

A descriptive rule name does not constrain its actual matching criteria or justify a subnet-wide effect.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 23. T01-Q12

Which distinction is essential when selecting Host Discovery rather than a vulnerability assessment?

**A. Discovery identifies hosts and available inventory information — Answer key**

Host Discovery locates hosts and collects available inventory details to guide later assessment planning.

**B. Discovery verifies benchmark compliance — Not the keyed answer**

Benchmark compliance requires relevant audit checks and evidence, which discovery alone does not provide.

**C. Discovery performs all authenticated patch checks — Not the keyed answer**

Discovering a host is not equivalent to collecting its authenticated patch inventory and running all patch checks.

**D. Discovery confirms technical remediation — Not the keyed answer**

Technical remediation requires assessment evidence showing that a previously detected issue is no longer present.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 24. T07-Q12

What is the documented effect of an Accept rule on matching vulnerability findings?

**A. Mark the technical flaw resolved without reassessment — Not the keyed answer**

Accept records a risk decision; it does not establish that the technical vulnerability has been resolved.

**B. Accept the risk and hide matching findings from the Findings table — Answer key**

An Accept rule accepts the risk and hides matching findings from the Findings table within its configured scope.

**C. Install a patch and hide the remediated finding — Not the keyed answer**

An Accept rule does not deploy patches, so hidden findings cannot be assumed technically remediated.

**D. Exclude the host from every future assessment — Not the keyed answer**

Accept handles matching findings rather than creating a universal exclusion from future host assessments.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 25. T08-Q18

Reports should record scope and collection timing so that their totals can be interpreted.

**A. True — Answer key**

Scope and collection timing establish what population and evidence period a report actually represents.

**B. False — Not the keyed answer**

Without scope and timing, totals can be misinterpreted or compared across unlike assessment populations.

Sources: [Exports](https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm), [Create Report API](https://developer.tenable.com/reference/vm-reports-create)

## 26. T03-Q11

A scheduled exclusion window begins after a network scan has already started. What does the guide state?

**A. The scheduled exclusion does not interrupt that already running scan — Answer key**

The documented scheduled exclusion applies to scans beginning during its effective window; it does not interrupt a scan already running.

**B. It accepts findings already generated by that scan — Not the keyed answer**

Risk acceptance handles existing findings and is unrelated to the start-time behavior of a scheduled scan exclusion.

**C. It deletes earlier results from the excluded hosts — Not the keyed answer**

Opening an exclusion window does not delete historical results from previous or current assessment activity.

**D. It immediately interrupts every running task — Not the keyed answer**

The guide does not describe the new scheduled window as an immediate cancellation mechanism for every running task.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm)

## 27. T02-Q07

A sensor installation completes, but linking fails behind a proxy. What should be investigated first?

**A. Target patch levels before linking — Not the keyed answer**

Target patch levels matter after collection starts; they cannot explain failure to establish the cloud link through a proxy.

**B. Endpoint resolution, proxy behavior and HTTPS/TLS connectivity — Answer key**

DNS resolution, proxy configuration and HTTPS/TLS reachability directly affect whether the sensor can contact the correct VM endpoint.

**C. The scope of an Accept rule — Not the keyed answer**

An Accept rule handles existing findings and does not control sensor registration through a proxy.

**D. Finding severity configuration — Not the keyed answer**

Severity configuration classifies findings; it does not establish network connectivity or TLS communication for linking.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 28. T07-Q10

A question asks about severity but does not state the configured metric. What is the best analytical habit?

**A. Assume recast rules define the base metric — Not the keyed answer**

Recast rules adjust matching findings and do not identify the underlying severity metric chosen in General Settings.

**B. Identify the metric and relevant version before applying its severity rules — Answer key**

Identify the metric and applicable version because CVSS-based and VPR-based configurations can classify the same finding differently.

**C. Assume CVSSv2 in every version and tenant — Not the keyed answer**

VM supports configurable metrics, so assuming CVSSv2 universally can produce the wrong interpretation.

**D. Use ACR as the severity of every vulnerability — Not the keyed answer**

ACR measures asset business criticality and is not the severity score of every vulnerability.

Sources: [General Settings](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm), [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 29. T05-Q08

Which plugin is useful for reviewing scan execution information?

**A. An asset criticality score alone — Not the keyed answer**

Asset criticality describes business importance and does not report scan execution details.

**B. A vulnerability state filter alone — Not the keyed answer**

A state filter selects findings by lifecycle state; it is not the scan-information plugin.

**C. 21745, OS Security Patch Assessment Failed — Not the keyed answer**

Plugin 21745 concerns failed OS patch assessment rather than being the general scan execution information plugin.

**D. 19506, Nessus Scan Information — Answer key**

Plugin 19506 provides Nessus Scan Information that can help review execution and collection context when present.

Sources: [Plugin 19506: Nessus Scan Information](https://www.tenable.com/plugins/nessus/19506)

## 30. T02-Q18

The agent linking key and a user API key pair serve the same purpose.

**A. True — Not the keyed answer**

A linking key bootstraps sensor association, whereas a user's access/secret API key pair authenticates API operations.

**B. False — Answer key**

These credential types serve different identities and operations and should not be treated as interchangeable.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 31. T01-Q08

Which pilot outcome provides the strongest evidence that a deployment plan works?

**A. The linking key was accepted once — Not the keyed answer**

Accepting a linking key proves an association step, not successful assessment of the expected assets.

**B. The installer completed and the service is running — Not the keyed answer**

A running service confirms local installation but not target reachability, check execution or usable results.

**C. The expected sample assets were reached and produced usable assessment evidence — Answer key**

Reaching the sample assets and obtaining usable evidence directly tests whether the planned assessment workflow delivers its intended outcome.

**D. A scan finished without checking sample coverage — Not the keyed answer**

A completed scan can still have missed targets or failed checks. Completion without a coverage review is weaker evidence.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 32. T04-Q11

Why can a wider port range increase scan duration?

**A. A wider range always bypasses filtered ports — Not the keyed answer**

Adding ports does not bypass firewalls or guarantee responses from filtered services.

**B. It disables the need for service identification — Not the keyed answer**

More probed ports can require more service identification work, not eliminate it.

**C. More candidate services and network checks may need assessment — Answer key**

A larger candidate port surface can require additional probes and checks, increasing work and response waiting time.

**D. It reduces the candidate service surface — Not the keyed answer**

Widening the range expands the candidate surface rather than reducing it.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm), [Scan Tuning: Settings Configuration](https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm)

## 33. T02-Q13

Which standard endpoint and port match a modern agent linked directly to VM?

**A. The scanner interface on TCP 8834 — Not the keyed answer**

TCP 8834 accesses a Nessus scanner interface; it is not the documented standard direct-to-VM cloud endpoint.

**B. Tenable Core on TCP 8000 — Not the keyed answer**

Core on TCP 8000 is an appliance management interface, not the agent's VM cloud destination.

**C. sensor.cloud.tenable.com:443 — Answer key**

The standard modern direct-to-VM agent endpoint is sensor.cloud.tenable.com over TCP 443; environment-specific exceptions must be checked.

**D. The target host on TCP 445 — Not the keyed answer**

TCP 445 addresses SMB services on a target and does not link an agent to the VM management service.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 34. T03-Q09

A target is explicitly included in a new network scan but is under an active exclusion. What happens?

**A. The target is marked Fixed without assessment — Not the keyed answer**

A skipped target has not supplied remediation evidence; exclusion does not justify marking its findings Fixed.

**B. The active exclusion takes precedence and the scanner skips the target — Answer key**

An active network scan exclusion takes precedence for an excluded target even when the target is explicitly listed in a new scan.

**C. The target runs but findings are hidden afterward — Not the keyed answer**

An exclusion prevents the relevant assessment; hiding already collected findings describes a different operation.

**D. The explicit target overrides every exclusion — Not the keyed answer**

Explicitly listing an IP does not override the active exclusion protecting that target from the new network scan.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm)

## 35. T04-Q09

Which statement best describes Safe Checks?

**A. It disables checks that may adversely affect the remote host, while overall scan impact still needs review — Answer key**

Safe Checks avoids checks that may harm the remote host, while policy load, concurrency and target sensitivity still require review.

**B. It replaces credential privilege validation — Not the keyed answer**

Safe Checks is not a substitute for sufficient privileges and successful authenticated evidence collection.

**C. It makes all active probing passive — Not the keyed answer**

Disabling potentially harmful checks does not turn the remaining active probes into passive traffic observation.

**D. It guarantees zero impact on every target — Not the keyed answer**

Safe Checks does not guarantee zero impact under every workload or on every fragile target.

Sources: [Scan Tuning: Settings Configuration](https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm)

## 36. T03-Q10

Which scan type is outside the documented scope of network scan exclusions?

**A. Linked Nessus network scans — Not the keyed answer**

Linked Nessus network scans are within the network-assessment context covered by scan exclusions.

**B. Network scans targeting an excluded IP — Not the keyed answer**

An excluded IP in a network scan is exactly the kind of target affected by an active network exclusion.

**C. Cloud network scans — Not the keyed answer**

Cloud scanners still perform network assessments, so they are not the local-agent exception requested here.

**D. Local Tenable Agent scans — Answer key**

Tenable Agent scans run locally and are outside the documented scope of network scan exclusions.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm)

## 37. T08-Q09

Two reports disagree on vulnerability totals. Which factors should be compared first?

**A. Assume report filters cannot affect totals — Not the keyed answer**

Filters can legitimately include different finding sets and therefore change totals.

**B. Compare only totals while ignoring units — Not the keyed answer**

Comparing totals without their units can confuse unique plugins, affected assets and individual occurrences.

**C. Assume a different total always proves data corruption — Not the keyed answer**

Different scope or dates can explain different totals without any corruption of the underlying data.

**D. Filters, dates, permissions and the unit being counted — Answer key**

Compare filters, collection timing, permissions and counting units before concluding that apparently different totals are inconsistent.

Sources: [Exports](https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm), [Findings](https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm)

## 38. T01-Q11

A passive monitor does not show a powered-on host that sends no observed traffic. What is the best interpretation?

**A. The host has completed authenticated checks — Not the keyed answer**

A lack of observed traffic says nothing about whether local authenticated checks completed successfully.

**B. The absence may reflect limited observed traffic rather than host absence — Answer key**

Passive discovery depends on traffic reaching the monitor. A powered-on but silent host can therefore remain unobserved.

**C. The host is absent from the environment — Not the keyed answer**

The question states that the host is powered on; the monitor's absence of evidence cannot establish physical absence.

**D. The host has no exposed services — Not the keyed answer**

A silent host may still expose services. Passive non-observation does not demonstrate that its service surface is empty.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 39. T01-Q10

Why should an asset inventory use more context than an IPv4 address alone?

**A. An open port uniquely identifies the asset — Not the keyed answer**

Many hosts expose the same port, so an open port is not a unique asset identifier.

**B. An IP is always a permanent asset identity — Not the keyed answer**

DHCP reassignment, address changes and reused private ranges make an IP address an unreliable permanent identity by itself.

**C. Network context is irrelevant if IPs match — Not the keyed answer**

Matching addresses can belong to different environments; removing network context increases the risk of incorrect correlation.

**D. Addresses may change or overlap across environments — Answer key**

Changing or overlapping addresses require additional identity and environment context to track the correct asset.

Sources: [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm), [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 40. T05-Q13

What limitation should be considered when using a tactical scan for a specific vulnerability?

**A. It assesses all service ports regardless of policy — Not the keyed answer**

A focused template does not guarantee that every port is assessed regardless of the configured scope.

**B. It replaces every later comprehensive scan — Not the keyed answer**

A specific-vulnerability assessment does not eliminate the need for broader assessments of other exposures.

**C. Its focused scope does not automatically provide comprehensive assessment — Answer key**

A tactical scan targets a limited objective, so a successful tactical result is not proof of comprehensive assessment coverage.

**D. It includes every benchmark by definition — Not the keyed answer**

Benchmarks belong to compliance assessment and are not automatically included in every tactical vulnerability scan.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 41. T02-Q12

What traffic feed is appropriate for a passive Network Monitor?

**A. Only traffic to the monitor web interface — Not the keyed answer**

Management-interface traffic is not a feed of the monitored network conversations needed for passive analysis.

**B. A SPAN port or network TAP with a bidirectional view — Answer key**

A properly configured SPAN or TAP feed supplies both directions of relevant network conversations for passive analysis.

**C. Only a unidirectional feed of requests — Not the keyed answer**

A request-only feed omits responses and can prevent complete interpretation of the communication.

**D. Only traffic generated by an active scanner — Not the keyed answer**

Scanner-generated traffic is only a subset of network activity and is not a substitute for the required monitoring feed.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 42. T06-Q13

An agent is offline for the entire reporting window. What should be investigated?

**A. The host has been technically remediated — Not the keyed answer**

Being offline during assessment does not supply evidence that the endpoint's vulnerabilities were fixed.

**B. The endpoint has Passed every audit — Not the keyed answer**

An unavailable endpoint cannot be assumed to have passed audit checks that were not collected in the window.

**C. A participation gap in that window and options for future coverage — Answer key**

Treat the missing participation as a coverage gap and investigate endpoint availability and an appropriate future collection method.

**D. The platform guarantees results in the same window — Not the keyed answer**

A reporting window cannot guarantee delivery from an agent that remains offline for its entire duration.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 43. T02-Q10

Which command best supports checking an installed agent without resetting it?

**A. Reinstall the agent before reviewing its state — Not the keyed answer**

Reinstallation changes the environment before collecting diagnostic evidence and can obscure the original failure.

**B. nessuscli agent link without inspecting status — Not the keyed answer**

A link command attempts association; it is not the appropriate first observation of an already installed agent's state.

**C. nessuscli agent status — Answer key**

The agent status command reports operational and linking information without deliberately resetting or unlinking the agent.

**D. nessuscli agent unlink — Not the keyed answer**

Unlinking removes the association and changes the state being investigated instead of simply inspecting it.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 44. T08-Q08

Which capability helps move from an aggregate dashboard indicator to the underlying evidence?

**A. Only exporting the aggregate total — Not the keyed answer**

Exporting only the total omits the underlying assets and occurrences needed to investigate the aggregate.

**B. Drill-down to the relevant assets or findings — Answer key**

Drill-down exposes the assets or findings contributing to the indicator so their underlying evidence can be reviewed.

**C. Only changing the dashboard severity colors — Not the keyed answer**

Changing display colors does not expose the records or evidence behind an aggregate value.

**D. Only hiding categories that are hard to explain — Not the keyed answer**

Hiding categories reduces visibility rather than explaining which observations produced the total.

Sources: [Create a Dashboard](https://docs.tenable.com/vulnerability-management/Content/Dashboards/CreateADashboard.htm)

## 45. T08-Q07

What is essential when modifying conditional logic in a custom audit?

**A. Infer results only from the audit filename — Not the keyed answer**

A filename cannot demonstrate whether conditional branches evaluate the intended requirements correctly.

**B. Assume syntax validity proves policy correctness — Not the keyed answer**

Syntactically valid audit logic can still implement incorrect conditions or expected values.

**C. Validate applicable and alternative paths against expected evidence — Answer key**

Test relevant conditional paths against known expected evidence to verify the custom audit's behavior and interpretation.

**D. Test only one branch and assume the other is valid — Not the keyed answer**

Testing only one branch leaves the alternative path unvalidated and can conceal incorrect conditional results.

Sources: [Compliance Checks Reference: Conditions](https://docs.tenable.com/nessus/compliance-checks-reference/Content/Conditions.htm)

## 46. T05-Q11

Why can a non-privileged Linux account yield incomplete compliance coverage?

**A. No local configuration is used by compliance checks — Not the keyed answer**

Compliance checks often inspect local configuration and file permissions, so dismissing local evidence is incorrect.

**B. Some system configuration and file-permission checks require elevated access — Answer key**

Some checks require protected configuration or filesystem access that a non-privileged account cannot obtain.

**C. SSH access is impossible for every non-root account — Not the keyed answer**

Non-root accounts can authenticate through SSH; the issue is insufficient access for particular checks, not universal login impossibility.

**D. Successful login gives unrestricted configuration access — Not the keyed answer**

Successful login does not automatically grant unrestricted access to protected system configuration.

Sources: [Credentialed Checks on Linux](https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm)

## 47. T05-Q18

A fully enabled plugin family can automatically include newly received plugins.

**A. True — Answer key**

A fully enabled plugin family incorporates newly received family plugins automatically under the documented selection behavior.

**B. False — Not the keyed answer**

New plugins are not inherently excluded from a fully enabled family; partial-family settings are a separate case.

Sources: [Configure Plugins](https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm)

## 48. T04-Q12

A scanner sees one subnet but not another in its targets. Which evidence should be reviewed first?

**A. Severity settings only — Not the keyed answer**

Severity settings cannot explain why the scanner cannot reach a targeted subnet.

**B. Risk acceptance criteria only — Not the keyed answer**

Risk acceptance concerns findings rather than the routing and scan-scope prerequisites for host observation.

**C. Audit result overrides only — Not the keyed answer**

Audit overrides change result interpretation and do not establish network visibility of the missing subnet.

**D. Routing, firewall behavior, exclusions and actual target scope — Answer key**

Routing, filtering, exclusions and target definitions directly affect whether hosts in the subnet are contacted and observed.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm), [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm)

## 49. T03-Q18

A scanner group can belong to multiple networks at the same time.

**A. True — Not the keyed answer**

The documented Network membership limit is one Network at a time for a scanner group.

**B. False — Answer key**

The statement conflicts with the single-Network membership limit; overlapping environments require an appropriate separate sensor arrangement.

Sources: [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 50. T07-Q11

What does a vulnerability Recast rule change?

**A. The underlying installed software version — Not the keyed answer**

A recast changes finding classification, not the installed software version on the target.

**B. The target service exposure configuration — Not the keyed answer**

A rule does not reconfigure network exposure or service access on the host.

**C. The missing patch on the target — Not the keyed answer**

Recasting does not install a missing patch or otherwise remove the technical vulnerability.

**D. The severity of matching findings — Answer key**

Recast changes the severity applied to findings matching its defined criteria and scope.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 51. T08-Q11

What does the documented report creation API produce from templates and filters?

**A. A configuration remediation script — Not the keyed answer**

Report creation generates an output document rather than a script that changes target configuration.

**B. A patch package for each finding — Not the keyed answer**

A reporting endpoint does not manufacture or deploy patches for detected vulnerabilities.

**C. A PDF report — Answer key**

The report creation API generates a PDF based on the chosen template and filters.

**D. A new local scan policy executed on all hosts — Not the keyed answer**

Creating a report does not define and execute a new scan policy on every host.

Sources: [Create Report API](https://developer.tenable.com/reference/vm-reports-create)

## 52. T03-Q12

General Settings currently documents which default severity metric for individual vulnerability instances?

**A. VPR — Answer key**

General Settings currently documents VPR as the default instance severity metric; verify the actual tenant setting before relying on that default.

**B. ACR used as the vulnerability severity metric — Not the keyed answer**

ACR rates an asset's business criticality, not an individual vulnerability's severity.

**C. CVSSv2 with no alternative — Not the keyed answer**

CVSSv2 is configurable but is not the stated current default, and the setting offers alternative metrics.

**D. CVSSv3 with no alternative — Not the keyed answer**

CVSSv3 is an available choice, but the assertion that it is the only option contradicts the documented metric selection.

Sources: [General Settings](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 53. T06-Q08

What must still work for locally collected results to reach VM?

**A. Inbound scanner connectivity to every laptop — Not the keyed answer**

Host-local collection does not require the network scanner to establish inbound access to every mobile laptop.

**B. Communication from the agent to the documented manager endpoint — Answer key**

The agent must communicate with its documented manager endpoint to deliver locally collected assessment results.

**C. Successful upload without any manager communication — Not the keyed answer**

Uploading results inherently requires a functioning communication path to the receiving service.

**D. A passive traffic feed to the agent — Not the keyed answer**

An agent is not a passive network monitor and does not need a SPAN/TAP feed to upload host assessment data.

Sources: [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm), [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 54. T01-Q13

A deployment has installed sensors but has no usable findings. Which next step best validates operation?

**A. Create reports before validating data collection — Not the keyed answer**

Reports cannot create missing assessment data; first verify that scans collect usable evidence.

**B. Configure and run appropriate scans, then review results against expected coverage — Answer key**

Running appropriate scans and comparing their results with expected coverage tests whether the installed sensors actually assess the intended environment.

**C. Accept risks to generate the missing scan evidence — Not the keyed answer**

Risk acceptance changes how known findings are handled; it cannot generate scan evidence that was never collected.

**D. Treat linkage as proof of completed assessment — Not the keyed answer**

Linkage confirms association with VM but does not prove that an assessment was configured, executed and reported successfully.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 55. T01-Q09

Two branches use the same private IPv4 address for different hosts. Which VM concept helps distinguish these environments?

**A. One shared network for identical IPs — Not the keyed answer**

A shared network context would leave identical private IPs ambiguous instead of separating the two environments.

**B. Tag categories alone, with no network context — Not the keyed answer**

Tags support organization and filtering, but they do not replace the sensor network context used to disambiguate overlapping addresses.

**C. Networks — Answer key**

Separate Networks supply environment context for assets that reuse an IP address, preventing IP-only correlation across branches.

**D. A risk acceptance rule per branch — Not the keyed answer**

Risk acceptance concerns existing findings; it is not an asset identity or network correlation mechanism.

Sources: [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 56. T02-Q09

A scanner gradually runs out of disk space although the target count is stable. Which factor deserves review?

**A. Growth of logs, scan results and plugin-related data — Answer key**

Logs, retained scan results and plugin-related data can grow over time even when the target count remains unchanged.

**B. The number of configured user roles — Not the keyed answer**

User role count is not the primary explanation for expanding local scanner result and log storage.

**C. License usage alone — Not the keyed answer**

License usage measures licensed assessment scope; it does not account for all data consuming the scanner's disk.

**D. The selected severity metric — Not the keyed answer**

Changing a severity metric is not the relevant explanation for accumulating local logs, results and plugin data.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

## 57. T04-Q10

A legacy device becomes unstable during probing. Which approach best supports safe coverage planning?

**A. Keep the policy and treat missing results as safe — Not the keyed answer**

Leaving the same destabilizing policy unchanged neither addresses the observed impact nor validates safe coverage.

**B. Review policy, exclusions and alternative evidence for that device — Answer key**

Review the probing policy and any necessary exclusions, then identify alternative evidence so the device's coverage gap remains explicit.

**C. Use severity recast to prevent network probes — Not the keyed answer**

A severity recast changes the treatment of a finding, not the network probes that caused the instability.

**D. Increase concurrency before reviewing the device — Not the keyed answer**

Increasing concurrency can add pressure to a fragile device before the underlying assessment policy has been reviewed.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm), [Scan Tuning: Settings Configuration](https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm)

## 58. T06-Q11

Which status detail can help investigate an agent that reports unexpectedly limited checks?

**A. Agent group name alone — Not the keyed answer**

The group name identifies membership but does not reveal the plugin set or checks that actually executed.

**B. Only the host business criticality score — Not the keyed answer**

Business criticality affects prioritization, not whether the agent has current checks and assessment capability.

**C. The user role that opens the dashboard — Not the keyed answer**

A dashboard viewer's role does not explain which plugins the agent had available during collection.

**D. The current plugin set and scan information — Answer key**

The current plugin set and scan information help determine whether the agent had and executed the expected checks.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 59. T07-Q09

Why should a team consider business context separately from VPR drivers?

**A. Asset role is the same as global vulnerability threat — Not the keyed answer**

An asset's internal business role and a vulnerability's global threat landscape are distinct dimensions.

**B. VPR automatically captures every internal dependency — Not the keyed answer**

VPR does not automatically model every organization-specific service dependency or asset business role.

**C. A user directly rewrites VPR for each business unit — Not the keyed answer**

Users cannot directly rewrite the calculated VPR for individual business units.

**D. VPR drivers reflect the vulnerability threat landscape rather than a customized asset business role — Answer key**

VPR drivers describe the global vulnerability threat landscape; organization-specific asset criticality must be considered separately.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm), [Tenable Scoring Explained: VM](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)

## 60. T04-Q07

A discovery run observes 28 of 40 expected hosts. What is the defensible observed coverage rate?

**A. 30% of hosts proven offline — Not the keyed answer**

Twelve unobserved hosts represent 30% of the expected scope, but non-observation does not prove those hosts were offline.

**B. 100% of reachable hosts assessed with credentials — Not the keyed answer**

Discovery evidence for 28 hosts cannot establish full credentialed assessment coverage for all 40.

**C. 70% of vulnerabilities remediated — Not the keyed answer**

The ratio measures observed host coverage, not the percentage of vulnerabilities remediated.

**D. 70% of the expected hosts — Answer key**

Dividing 28 observed hosts by 40 expected hosts gives 70% observed coverage of the planned inventory.

Sources: [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)
