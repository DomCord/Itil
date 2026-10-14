# 07 Findings, risco e exceções

All option rationales are in English. The existing answer key is retained.

## 1. T07-Q01

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

## 2. T07-Q02

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

## 3. T07-Q03

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

## 4. T07-Q04

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

## 5. T07-Q05

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

## 6. T07-Q06

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

## 7. T07-Q07

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

## 8. T07-Q08

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

## 9. T07-Q09

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

## 10. T07-Q10

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

## 11. T07-Q11

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

## 12. T07-Q12

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

## 13. T07-Q13

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

## 14. T07-Q14

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

## 15. T07-Q15

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

## 16. T07-Q16

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

## 17. T07-Q17

A user can directly edit the calculated VPR value.

**A. True — Not the keyed answer**

Calculated VPR is not directly user-editable; configurable risk treatment and asset context are separate functions.

**B. False — Answer key**

The statement conflicts with the documented restriction on directly editing VPR values.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)

## 18. T07-Q18

Changing a finding severity through Recast installs the missing patch on the target.

**A. True — Not the keyed answer**

Recasting modifies displayed severity but does not execute a software update on the host.

**B. False — Answer key**

Technical remediation requires a target-side corrective action and suitable validation, not merely a finding severity override.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)

## 19. T07-Q19

Resurfaced describes a vulnerability detected again after a Fixed state.

**A. True — Answer key**

The lifecycle state Resurfaced records a vulnerability detected again after previously being Fixed.

**B. False — Not the keyed answer**

The previous Fixed state and renewed detection are precisely the conditions that define Resurfaced.

Sources: [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)

## 20. T07-Q20

Threat information and asset business criticality can both support remediation prioritization.

**A. True — Answer key**

Threat likelihood and asset business importance inform different parts of the remediation decision and can be considered together.

**B. False — Not the keyed answer**

Using only one dimension can overlook either active exploitation urgency or organization-specific impact.

Sources: [CVSS vs. VPR](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm), [Tenable Scoring Explained: VM](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)
