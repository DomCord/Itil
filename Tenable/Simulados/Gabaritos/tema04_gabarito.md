# 04 Host Discovery e inventário

All option rationales are in English. The existing answer key is retained.

## 1. T04-Q01

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

## 2. T04-Q02

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

## 3. T04-Q03

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

## 4. T04-Q04

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

## 5. T04-Q05

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

## 6. T04-Q06

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

## 7. T04-Q07

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

## 8. T04-Q08

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

## 9. T04-Q09

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

## 10. T04-Q10

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

## 11. T04-Q11

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

## 12. T04-Q12

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

## 13. T04-Q13

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

## 14. T04-Q14

Why is identifying a service useful beyond observing that a port is open?

**A. It helps determine what is actually running and which checks are relevant — Answer key**

Identifying the actual service helps choose relevant checks and interpret exposure beyond simply recording an open socket.

**B. The open port number proves the exact version — Not the keyed answer**

An open port number does not conclusively establish the software product or its exact version.

**C. Service identification proves full compliance — Not the keyed answer**

Service identification is not a full configuration comparison against a compliance benchmark.

**D. Service detection replaces all local checks — Not the keyed answer**

Remote service detection and local host checks collect different evidence and do not universally replace one another.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 15. T04-Q15

The next discovery run finds fewer hosts after adding exclusions. What is the strongest interpretation?

**A. All excluded findings must now be Fixed — Not the keyed answer**

Skipping an excluded host provides no evidence that its previously detected vulnerabilities were fixed.

**B. Coverage changed and the excluded scope must be accounted for — Answer key**

Exclusions changed the assessed scope, so the smaller discovery count must be interpreted against that changed coverage.

**C. The reduced count proves risk reduction — Not the keyed answer**

A lower count caused by removing targets does not prove any technical reduction in vulnerability risk.

**D. The removed hosts have been remediated — Not the keyed answer**

Being removed from assessment is not the same as being patched or otherwise remediated.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm), [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm)

## 16. T04-Q16

After creating an initial discovery inventory, what best supports vulnerability assessment?

**A. Assume discovery completed all patch checks — Not the keyed answer**

The discovery inventory does not demonstrate that all authenticated patch checks have already executed.

**B. Treat discovered hosts as compliant — Not the keyed answer**

A discovered host can still be vulnerable or noncompliant; discovery alone does not establish compliance.

**C. Select reachable targets and an appropriate assessment policy, then verify results — Answer key**

Use the inventory to define reachable targets and an appropriate assessment policy, then confirm usable vulnerability results.

**D. Accept findings without a vulnerability assessment — Not the keyed answer**

Risk acceptance presupposes a known finding and cannot substitute for assessing the discovered hosts.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 17. T04-Q17

A host that does not answer ICMP echo is necessarily offline.

**A. True — Not the keyed answer**

Firewalls or host policies can suppress ICMP echo replies while the host remains active and reachable through other protocols.

**B. False — Answer key**

The statement confuses one missing response type with proven host absence.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 18. T04-Q18

Host Discovery and a full vulnerability assessment have the same purpose and coverage.

**A. True — Not the keyed answer**

Discovery establishes host inventory, whereas vulnerability assessment runs relevant exposure checks; their purposes and coverage differ.

**B. False — Answer key**

The statement incorrectly equates inventory collection with vulnerability assessment.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 19. T04-Q19

An omitted port can create a gap in service assessment.

**A. True — Answer key**

If a relevant service port is outside the policy's probe range, that service may be omitted from assessment.

**B. False — Not the keyed answer**

Port coverage affects which services are observed, so omitting a relevant port can leave an explicit assessment gap.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 20. T04-Q20

Observed asset counts are easier to interpret when the expected scope is recorded.

**A. True — Answer key**

The expected scope supplies a denominator and identifies missing assets that an isolated observed count cannot explain.

**B. False — Not the keyed answer**

Without an expected inventory, a smaller observed count can conceal coverage gaps rather than demonstrate improvement.

Sources: [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm)
