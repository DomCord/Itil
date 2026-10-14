# 06 Agents e cobertura móvel

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

## 2. T06-Q02

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

## 3. T06-Q03

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

## 4. T06-Q04

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

## 5. T06-Q05

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

## 6. T06-Q06

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

## 7. T06-Q07

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

## 8. T06-Q08

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

## 9. T06-Q09

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

## 10. T06-Q10

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

## 11. T06-Q11

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

## 12. T06-Q12

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

## 13. T06-Q13

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

## 14. T06-Q14

Which command pattern launches an existing triggered scan by UUID?

**A. nessuscli agent unlink — Not the keyed answer**

Unlink disconnects the agent from its manager; it does not launch an existing triggered scan.

**B. nessuscli scan-triggers --start --UUID=<scan-uuid> — Answer key**

The scan-triggers start operation identifies the existing configured scan by UUID and requests its execution.

**C. nessuscli agent link — Not the keyed answer**

Agent link establishes association with a manager rather than starting a triggered scan by its scan UUID.

**D. nessuscli agent status — Not the keyed answer**

Agent status observes state and does not request triggered scan execution.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm), [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 15. T06-Q15

An agent service runs but Last connect is old and results are missing. What is the next useful investigation?

**A. Only the finding severity metric — Not the keyed answer**

Finding severity controls classification and does not explain an outdated Last connect value.

**B. Only the group display name — Not the keyed answer**

A display name alone does not establish whether the agent can communicate or deliver results.

**C. Only the local service running state — Not the keyed answer**

The running service is already known; repeating that observation does not investigate the broken communication path.

**D. Endpoint reachability, proxy/TLS behavior and linkage status — Answer key**

Check the documented endpoint, routing, proxy/TLS path and linkage because local service operation does not guarantee manager connectivity.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm), [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 16. T06-Q16

A newly documented agent feature is absent in the study environment. What should be checked?

**A. Version, configuration and availability requirements in current documentation — Answer key**

Feature availability can depend on version, configuration and deployment conditions, so check those documented prerequisites.

**B. Assume a release announcement changes all old installations — Not the keyed answer**

A release announcement does not automatically upgrade or reconfigure every older installation.

**C. Assume every linked agent supports every new feature — Not the keyed answer**

Successful linkage does not imply support for features introduced in newer agent or manager versions.

**D. Use successful linkage as proof of feature availability — Not the keyed answer**

Linkage proves association, not that all prerequisites for a particular newly documented feature are met.

Sources: [VM 2026 Release Notes](https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm), [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 17. T06-Q17

A scan window guarantees that every linked agent will report successfully.

**A. True — Not the keyed answer**

A configured window cannot force offline agents to communicate, execute and upload successfully.

**B. False — Answer key**

The statement overstates the window's effect; endpoint availability and communication still determine participation.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 18. T06-Q18

Triggered scans can be initiated by agent-side triggers without a separate window launch by a user.

**A. True — Answer key**

Configured agent-side triggers can launch a triggered assessment without a user separately starting a platform window scan.

**B. False — Not the keyed answer**

Triggered scans are not restricted to the manual window-launch model described by this alternative.

Sources: [Triggered Agent Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm)

## 19. T06-Q19

Agents and active network scanners always provide identical assessment perspectives.

**A. True — Not the keyed answer**

Host-local evidence and remote network exposure checks have different observation points and cannot always produce identical perspectives.

**B. False — Answer key**

The statement incorrectly treats complementary collection methods as universally identical.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 20. T06-Q20

Installed, linked, scanned and uploaded are distinct checkpoints when investigating an agent.

**A. True — Answer key**

Installation, association, execution and upload each require their own evidence when diagnosing a missing or incomplete agent result.

**B. False — Not the keyed answer**

Conflating these checkpoints can hide a later failure even when an earlier installation or linking step succeeded.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)
