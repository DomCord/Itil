# Revisão mista: 40 itens de reserva A/B

All option rationales are in English. The existing answer key is retained.

## 1. T03-Q14

The primary severity metric has changed. How should the SLA Progress vulnerability age widget be handled?

**A. Its metric settings must be reviewed separately — Answer key**

SLA Progress has separate severity and age settings, so its calculation must be reviewed independently of general finding severity.

**B. All dashboard metrics inherit the same setting — Not the keyed answer**

The general Severity setting does not automatically override the SLA Progress widget's separately configured metric.

**C. SLA values are fixed by the linking key — Not the keyed answer**

A sensor linking key establishes association and does not define SLA calculation values.

**D. SLA widgets cannot have their own configuration — Not the keyed answer**

General Settings provides SLA-specific configuration, contradicting the claim that the widget cannot have its own settings.

Sources: [General Settings](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)

## 2. T05-Q19

A correct Windows password guarantees access to all required administrative shares and registry data.

**A. True — Not the keyed answer**

A valid password does not bypass account privileges, host security policies or access restrictions on shares and registry data.

**B. False — Answer key**

Authentication and authorization are separate prerequisites, so correct credentials alone cannot guarantee every required access path.

Sources: [Credentialed Checks on Windows](https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm)

## 3. T03-Q20

A broad role alone does not necessarily express the desired data scope for a branch analyst.

**A. True — Answer key**

Functional privileges and branch-specific data visibility are separate access-design requirements that must both be validated.

**B. False — Not the keyed answer**

A broad role can allow required actions without establishing the required branch-only resource scope.

Sources: [Roles](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm), [RBAC Get Started](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm)

## 4. T05-Q16

Findings drop sharply after a service-account change. Which check is most useful before declaring remediation success?

**A. Compare credentialed-check evidence and assessed scope before and after the change — Answer key**

Compare authenticated collection and target coverage because the new account may have reduced evidence instead of exposing genuine remediation.

**B. Accept remaining findings to confirm remediation — Not the keyed answer**

Accepting remaining findings changes their handling and cannot validate that the account change preserved collection quality.

**C. Ignore the previous credentialed-check evidence — Not the keyed answer**

Ignoring the previous collection evidence removes the baseline needed to detect the account-related coverage loss.

**D. Use the lower total as sufficient proof — Not the keyed answer**

A lower finding count after changing credentials may reflect failed checks and is not sufficient proof of remediation.

Sources: [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm), [Plugin 19506: Nessus Scan Information](https://www.tenable.com/plugins/nessus/19506)

## 5. T06-Q15

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

## 6. T07-Q15

The same plugin affects multiple hosts. Why can a plugin count be misleading for operations?

**A. The plugin count always equals affected host count — Not the keyed answer**

One plugin can affect many hosts, so plugin count and affected-host count are not inherently equal.

**B. One plugin represents only one occurrence in every report — Not the keyed answer**

The same plugin can produce multiple asset, port or protocol occurrences rather than exactly one occurrence in every report.

**C. A plugin count proves the inventory was fully assessed — Not the keyed answer**

A plugin count describes collected results and does not prove that every expected asset was assessed.

**D. It does not by itself express all affected assets and occurrences — Answer key**

Counting unique plugins alone omits how broadly each issue affects assets and individual occurrences.

Sources: [Findings](https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm), [My Findings: Vulnerability Intelligence](https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/my-findings-tab.htm)

## 7. T05-Q14

Remote Registry is set to Manual. What should be checked before declaring credentialed scanning impossible?

**A. The service setting alone proves complete authentication — Not the keyed answer**

A service startup setting alone cannot prove successful authentication or registry evidence collection.

**B. Manual always means Nessus can never start the service — Not the keyed answer**

Manual startup does not necessarily prevent Nessus from starting the service when the supported option and privileges are available.

**C. Whether the documented scan option and sufficient privileges can start it during the scan — Answer key**

Verify the documented Remote Registry startup option and required account privileges before assuming Manual makes assessment impossible.

**D. Changing severity enables the registry service — Not the keyed answer**

Changing finding severity does not start a Windows service or grant registry access.

Sources: [Credentialed Checks on Windows](https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm)

## 8. T05-Q15

What is the benefit of reviewing the credential source used by a scan?

**A. Credentials in an export file override scan credentials — Not the keyed answer**

An export contains results; it does not override the credentials used by the original scan.

**B. It clarifies whether template, scan-specific or managed credentials control access — Answer key**

Understanding inheritance and scan-specific or managed credentials identifies which identity actually controls target access.

**C. Any successful credential source guarantees full checks — Not the keyed answer**

A credential source may authenticate successfully but still lack permissions needed for complete collection.

**D. The source removes all privilege requirements — Not the keyed answer**

Credential provenance does not remove the target's privilege and access requirements.

Sources: [Credentials](https://docs.tenable.com/vulnerability-management/Content/Scans/Credentials.htm), [VM Scan Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/VMScanSettings.htm)

## 9. T01-Q19

Passing only the written exam is sufficient to earn the full Specialist certification.

**A. True — Not the keyed answer**

The full Specialist certification requires the written and practical stages; passing the written stage alone is insufficient.

**B. False — Answer key**

The statement omits the practical requirement documented for the complete certification.

Sources: [Exame Specialist: datasheet oficial](https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf)

## 10. T01-Q16

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

## 11. T07-Q19

Resurfaced describes a vulnerability detected again after a Fixed state.

**A. True — Answer key**

The lifecycle state Resurfaced records a vulnerability detected again after previously being Fixed.

**B. False — Not the keyed answer**

The previous Fixed state and renewed detection are precisely the conditions that define Resurfaced.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 12. T03-Q15

Which check best validates a proposed least-access configuration?

**A. Sign in as a test user and verify both allowed actions and accessible scope — Answer key**

Testing with the intended user's identity verifies both permitted actions and the actual data scope enforced by authorization.

**B. A report filtered to the branch under an admin account — Not the keyed answer**

An administrator's filtered report does not test what the branch analyst is authorized to access elsewhere.

**C. A scan run by an administrator only — Not the keyed answer**

A scan under an administrator account exercises broader privileges and cannot validate the proposed restricted user's access.

**D. A tag name matching the user name without a permission test — Not the keyed answer**

Naming a tag after a user does not prove that the tag's resource permissions have been applied correctly.

Sources: [RBAC Get Started](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm)

## 13. T02-Q16

A scanner VM has sufficient nominal memory but is heavily CPU oversubscribed. What is the best response?

**A. Review actual resource availability and scan performance under the planned workload — Answer key**

Checking effective CPU availability and observed performance under the planned workload addresses the stated oversubscription problem.

**B. Nominal CPU allocation guarantees performance — Not the keyed answer**

Nominal vCPU allocation does not guarantee physical scheduling capacity on an oversubscribed virtualization host.

**C. Suppress slow findings instead of reviewing resources — Not the keyed answer**

Suppressing findings hides assessment output; it does not repair scanner resource contention.

**D. Memory allocation alone proves adequate capacity — Not the keyed answer**

Adequate memory cannot establish adequate CPU capacity when the virtualization host is heavily oversubscribed.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

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

## 15. T04-Q16

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

## 16. T08-Q19

Warning must always be treated as a confirmed Passed result.

**A. True — Not the keyed answer**

Warning can require further investigation or manual confirmation, so it is not a universally confirmed Passed result.

**B. False — Answer key**

The statement incorrectly treats an uncertain or review-required outcome as conclusive compliance evidence.

Sources: [System Hardening](https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm)

## 17. T06-Q14

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

## 18. T08-Q14

A monthly report shows fewer findings, but authenticated coverage dropped substantially. What is the appropriate conclusion?

**A. The lower total proves technical remediation — Not the keyed answer**

Lost authenticated coverage can remove detected issues from the visible results without any patch being applied.

**B. The loss of authenticated checks cannot affect findings — Not the keyed answer**

Failed authenticated checks can directly reduce the vulnerabilities detected from local host evidence.

**C. Every absent finding must be Fixed — Not the keyed answer**

An absent observation after coverage loss is not sufficient evidence to mark a finding Fixed.

**D. The trend requires coverage context before being treated as remediation progress — Answer key**

Interpret the lower count against changed authenticated coverage before presenting it as verified remediation progress.

Sources: [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm), [Exports](https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm)

## 19. T06-Q16

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

## 20. T05-Q20

A focused tactical scan and a comprehensive network scan may have different assessment coverage.

**A. True — Answer key**

A tactical policy is focused on a particular objective, whereas a comprehensive policy assesses a broader set of exposures.

**B. False — Not the keyed answer**

Different objectives and plugin selections can produce different coverage, so their assessment perspectives cannot be assumed equivalent.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)

## 21. T06-Q19

Agents and active network scanners always provide identical assessment perspectives.

**A. True — Not the keyed answer**

Host-local evidence and remote network exposure checks have different observation points and cannot always produce identical perspectives.

**B. False — Answer key**

The statement incorrectly treats complementary collection methods as universally identical.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 22. T07-Q20

Threat information and asset business criticality can both support remediation prioritization.

**A. True — Answer key**

Threat likelihood and asset business importance inform different parts of the remediation decision and can be considered together.

**B. False — Not the keyed answer**

Using only one dimension can overlook either active exploitation urgency or organization-specific impact.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm), [Tenable Scoring Explained: VM](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)

## 23. T04-Q20

Observed asset counts are easier to interpret when the expected scope is recorded.

**A. True — Answer key**

The expected scope supplies a denominator and identifies missing assets that an isolated observed count cannot explain.

**B. False — Not the keyed answer**

Without an expected inventory, a smaller observed count can conceal coverage gaps rather than demonstrate improvement.

Sources: [Asset Inventory: Key Attributes](https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm)

## 24. T08-Q16

Which rule type can override a host audit result within its defined scope?

**A. Exclusion — Not the keyed answer**

An Exclusion changes target assessment participation rather than overriding the result of an existing host audit check.

**B. Change Result — Answer key**

Change Result overrides host audit results matching its defined scope; it does not itself change the target configuration.

**C. Recast — Not the keyed answer**

Recast modifies vulnerability severity and is not the host-audit result override requested.

**D. Accept — Not the keyed answer**

Accept handles vulnerability risk acceptance rather than being the specific host-audit result override type.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 25. T01-Q14

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

## 26. T02-Q20

Hardware requirements should be interpreted in the context of workload and scan configuration.

**A. True — Answer key**

Check complexity, concurrency and evidence volume affect resource consumption, so sizing must reflect the actual workload.

**B. False — Not the keyed answer**

A fixed hardware assumption that ignores policy and workload can leave a deployment under-resourced.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

## 27. T03-Q16

An existing role does not match the required combination of actions. What option does current VM documentation provide?

**A. An asset tag alone grants the missing actions — Not the keyed answer**

An asset tag groups resources; it does not grant missing functional privileges by itself.

**B. A scanner group supplies the missing user privileges — Not the keyed answer**

Scanner groups organize assessment sensors and do not supply a user's missing application privileges.

**C. A custom role with appropriate privileges — Answer key**

Custom roles let administrators select the privilege combination required for the user's operational responsibilities.

**D. No custom privilege combinations are supported — Not the keyed answer**

VM documents custom roles, so claiming that custom privilege combinations are unsupported is incorrect.

Sources: [Roles](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm), [RBAC Get Started](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm)

## 28. T07-Q14

Which evidence best supports closing a remediation action?

**A. The total decreased without checking assessment coverage — Not the keyed answer**

A reduced count can result from lost collection coverage; it does not alone validate technical closure.

**B. The matching row is hidden by Accept — Not the keyed answer**

An accepted finding can be hidden while the underlying vulnerability remains present.

**C. A suitable reassessment no longer detects the relevant vulnerability under comparable coverage — Answer key**

A comparable, suitable reassessment that no longer detects the specific issue supports technical remediation of that issue.

**D. The finding severity changed through Recast — Not the keyed answer**

Changing severity only reclassifies the finding and does not demonstrate that the vulnerability was removed.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm), [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 29. T02-Q19

A passive monitor may need time and observed traffic to identify some host attributes.

**A. True — Answer key**

Passive attributes are inferred from observed conversations, so some details require relevant traffic and observation time.

**B. False — Not the keyed answer**

The monitor does not instantly obtain every host attribute independently of the traffic it can see.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 30. T08-Q15

Why can recurring exports be useful for a reporting workflow?

**A. They guarantee that every host was assessed — Not the keyed answer**

Scheduling data delivery does not guarantee that the underlying assessment reached every expected host.

**B. They bypass permissions and all resource scopes — Not the keyed answer**

Exports remain subject to the relevant scope and access rules; scheduling is not a permission bypass.

**C. They convert accepted risk into remediation evidence — Not the keyed answer**

A risk-acceptance decision remains different from technical remediation even when its records are exported repeatedly.

**D. They provide structured data delivery on a defined schedule — Answer key**

Recurring exports automate structured data delivery at a configured cadence, supporting repeatable reporting workflows.

Sources: [Exports](https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm)

## 31. T06-Q20

Installed, linked, scanned and uploaded are distinct checkpoints when investigating an agent.

**A. True — Answer key**

Installation, association, execution and upload each require their own evidence when diagnosing a missing or incomplete agent result.

**B. False — Not the keyed answer**

Conflating these checkpoints can hide a later failure even when an earlier installation or linking step succeeded.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm), [Agents](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm)

## 32. T04-Q19

An omitted port can create a gap in service assessment.

**A. True — Answer key**

If a relevant service port is outside the policy's probe range, that service may be omitted from assessment.

**B. False — Not the keyed answer**

Port coverage affects which services are observed, so omitting a relevant port can leave an explicit assessment gap.

Sources: [Discovery Settings](https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm)

## 33. T02-Q15

Which evidence best confirms that an installed scanner has been integrated?

**A. The host can reach an unrelated HTTPS site — Not the keyed answer**

Reaching an unrelated HTTPS service does not prove access to the required VM endpoint or successful scanner linkage.

**B. The expected sensor appears linked and can communicate and run an authorized test scan — Answer key**

A linked sensor that communicates and completes an authorized test assessment provides evidence of integration beyond installation.

**C. The installer exists and its checksum is valid — Not the keyed answer**

A valid installer checksum verifies the installation package, not the deployed sensor's cloud communication and assessment workflow.

**D. The local service is running without communication evidence — Not the keyed answer**

A running local service may still have a failed link or blocked communication, so it is insufficient on its own.

Sources: [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 34. T08-Q20

Accepting a risk and verifying technical remediation represent different outcomes.

**A. True — Answer key**

Risk acceptance documents a decision to tolerate exposure, while technical remediation removes or mitigates the underlying issue and needs verification.

**B. False — Not the keyed answer**

An accepted finding may remain technically present, so acceptance cannot be equated with a verified fix.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm), [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 35. T07-Q16

Which view specifically relates vulnerability intelligence to findings in the organization environment?

**A. The scanner installation-status view only — Not the keyed answer**

Scanner installation status concerns sensor deployment rather than relating tenant findings to vulnerability intelligence.

**B. The global CVE list with no tenant findings context — Not the keyed answer**

A global CVE list without tenant context cannot show which relevant findings exist in this organization's environment.

**C. The agent linkage inventory only — Not the keyed answer**

Agent linkage inventory does not provide the requested vulnerability-intelligence view of organizational findings.

**D. My Findings — Answer key**

My Findings relates vulnerability intelligence to vulnerabilities observed in the organization's environment.

Sources: [My Findings: Vulnerability Intelligence](https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/my-findings-tab.htm), [Identify Your Exposure](https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/identify-your-exposure.htm)

## 36. T01-Q20

Passive asset discovery depends on the traffic visible to the monitor.

**A. True — Answer key**

A passive monitor can only infer asset information from the traffic available at its observation point.

**B. False — Not the keyed answer**

Passive discovery is constrained by traffic visibility; powered-on hosts outside that view may not appear in its inventory.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 37. T02-Q14

Why should a linking procedure explicitly identify its deployment environment?

**A. All deployments use one endpoint without exceptions — Not the keyed answer**

Documented regional and FedRAMP variations mean a single endpoint cannot be assumed for every deployment.

**B. The endpoint is determined by host CVSS — Not the keyed answer**

A vulnerability's CVSS score does not select the agent's management endpoint.

**C. A regional deployment uses the target IP as manager — Not the keyed answer**

A target's IP address identifies an assessed host, not the regional cloud manager used for linking.

**D. FedRAMP and regional deployments can require different documented endpoints — Answer key**

The linking destination and options must match the documented deployment environment, including regional or FedRAMP differences.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm), [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 38. T04-Q15

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

## 39. T03-Q19

An exclusion is equivalent to accepting the risk of an already detected vulnerability.

**A. True — Not the keyed answer**

An exclusion changes whether targets are assessed; accepting risk changes the handling of already detected findings.

**B. False — Answer key**

The two operations have different purposes and effects, so excluding a target is not equivalent to accepting a finding's risk.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm), [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 40. T01-Q15

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
