# 03 Configuração e acesso

All option rationales are in English. The existing answer key is retained.

## 1. T03-Q01

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

## 2. T03-Q02

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

## 3. T03-Q03

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

## 4. T03-Q04

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

## 5. T03-Q05

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

## 6. T03-Q06

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

## 7. T03-Q07

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

## 8. T03-Q08

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

## 9. T03-Q09

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

## 10. T03-Q10

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

## 11. T03-Q11

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

## 12. T03-Q12

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

## 13. T03-Q13

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

## 14. T03-Q14

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

## 15. T03-Q15

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

## 16. T03-Q16

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

## 17. T03-Q17

Automatic tags can change membership when matching asset attributes change.

**A. True — Answer key**

Rule-driven membership can change when an asset begins or ceases to match the relevant criteria.

**B. False — Not the keyed answer**

Automatic membership is not inherently frozen after initial assignment; changes in matching attributes can alter the resulting set.

Sources: [Tag Format and Application](https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm)

## 18. T03-Q18

A scanner group can belong to multiple networks at the same time.

**A. True — Not the keyed answer**

The documented Network membership limit is one Network at a time for a scanner group.

**B. False — Answer key**

The statement conflicts with the single-Network membership limit; overlapping environments require an appropriate separate sensor arrangement.

Sources: [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)

## 19. T03-Q19

An exclusion is equivalent to accepting the risk of an already detected vulnerability.

**A. True — Not the keyed answer**

An exclusion changes whether targets are assessed; accepting risk changes the handling of already detected findings.

**B. False — Answer key**

The two operations have different purposes and effects, so excluding a target is not equivalent to accepting a finding's risk.

Sources: [Exclusions](https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm), [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 20. T03-Q20

A broad role alone does not necessarily express the desired data scope for a branch analyst.

**A. True — Answer key**

Functional privileges and branch-specific data visibility are separate access-design requirements that must both be validated.

**B. False — Not the keyed answer**

A broad role can allow required actions without establishing the required branch-only resource scope.

Sources: [Roles](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm), [RBAC Get Started](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm)
