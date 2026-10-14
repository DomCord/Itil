# 01 Arquitetura e fundamentos

All option rationales are in English. The existing answer key is retained.

## 1. T01-Q01

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

## 2. T01-Q02

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

## 5. T01-Q05

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

## 6. T01-Q06

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

## 7. T01-Q07

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

## 8. T01-Q08

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

## 9. T01-Q09

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

## 10. T01-Q10

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

## 11. T01-Q11

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

## 12. T01-Q12

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

## 13. T01-Q13

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

## 14. T01-Q14

Why might an organization use both agents and network scanners?

**A. Network scanners make local host evidence unnecessary — Not the keyed answer**

Network scans do not eliminate the value of local software, patch and configuration evidence.

**B. Agents always assess externally reachable services — Not the keyed answer**

An agent's local checks do not automatically establish how services appear from an external network vantage point.

**C. Agents duplicate the remote exposure perspective — Not the keyed answer**

Agents run on the host, so their evidence is not simply a duplicate of remote service exposure checks.

**D. Local host checks and remote service assessment provide complementary perspectives — Answer key**

Combining local host checks with network-based service assessment covers distinct and complementary aspects of an asset.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 15. T01-Q15

Which statement matches the documented Host Discovery template behavior?

**A. Every discovered host counts as fully assessed — Not the keyed answer**

Discovering a host does not establish that vulnerability assessment checks have been performed on it.

**B. Only public discovery targets are exempt — Not the keyed answer**

The documented discovery licensing treatment is not restricted to public IP targets.

**C. Assets identified by discovery scans do not count toward the license — Answer key**

Assets identified by discovery scans are excluded from the assessment license count; later assessment must be considered separately.

**D. Discovery exemptions apply to every later assessment — Not the keyed answer**

The discovery exemption does not grant a permanent exemption for subsequent vulnerability assessment of the asset.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 16. T01-Q16

A training note discusses Security Center repositories. How should it be used for this VM Written Exam preparation?

**A. Treat Security Center menus as VM equivalents — Not the keyed answer**

Security Center and VM have different deployment models and administration menus; the terms are not automatically interchangeable.

**B. Apply repository rules without product validation — Not the keyed answer**

Repository rules may be specific to Security Center. Applying them to VM without validation risks studying the wrong behavior.

**C. Use on-premise repository administration as the VM blueprint — Not the keyed answer**

On-premises repository administration is not a substitute for the VM course and written-exam scope.

**D. Verify applicability against VM documentation before adopting product-specific rules — Answer key**

Checking VM documentation separates shared vulnerability-management concepts from product-specific repository rules.

Sources: [Exame Specialist: datasheet oficial](https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 17. T01-Q17

An agent assessment automatically proves how every service appears to a remote network scanner.

**A. True — Not the keyed answer**

Local agent evidence does not automatically reproduce remote routing, firewall exposure or the scanner's view of services.

**B. False — Answer key**

The statement overclaims agent coverage. Remote exposure and local host assessment require different observation perspectives.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 18. T01-Q18

A successful pilot should compare observed assets with the expected assessment scope.

**A. True — Answer key**

Comparing observed assets with the expected scope exposes missing targets and tests whether the pilot achieved the planned coverage.

**B. False — Not the keyed answer**

Without the expected denominator, a pilot can appear successful even though required assets were never assessed.

Sources: [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm), [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm)

## 19. T01-Q19

Passing only the written exam is sufficient to earn the full Specialist certification.

**A. True — Not the keyed answer**

The full Specialist certification requires the written and practical stages; passing the written stage alone is insufficient.

**B. False — Answer key**

The statement omits the practical requirement documented for the complete certification.

Sources: [Exame Specialist: datasheet oficial](https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf)

## 20. T01-Q20

Passive asset discovery depends on the traffic visible to the monitor.

**A. True — Answer key**

A passive monitor can only infer asset information from the traffic available at its observation point.

**B. False — Not the keyed answer**

Passive discovery is constrained by traffic visibility; powered-on hosts outside that view may not appear in its inventory.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)
