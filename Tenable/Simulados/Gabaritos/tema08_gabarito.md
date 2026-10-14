# 08 Compliance, relatórios e resposta

All option rationales are in English. The existing answer key is retained.

## 1. T08-Q01

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

## 2. T08-Q02

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

## 3. T08-Q03

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

## 4. T08-Q04

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

## 5. T08-Q05

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

## 6. T08-Q06

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

## 7. T08-Q07

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

## 8. T08-Q08

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

## 9. T08-Q09

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

## 10. T08-Q10

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

## 11. T08-Q11

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

## 12. T08-Q12

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

## 13. T08-Q13

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

## 14. T08-Q14

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

## 15. T08-Q15

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

## 16. T08-Q16

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

## 17. T08-Q17

A vulnerability scan with no detected CVEs proves that every benchmark requirement is satisfied.

**A. True — Not the keyed answer**

The absence of detected CVEs does not test every benchmark configuration requirement.

**B. False — Answer key**

Compliance requires relevant audit evidence for the specified controls, not merely a vulnerability scan with no CVE findings.

Sources: [Compliance in Scans](https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm)

## 18. T08-Q18

Reports should record scope and collection timing so that their totals can be interpreted.

**A. True — Answer key**

Scope and collection timing establish what population and evidence period a report actually represents.

**B. False — Not the keyed answer**

Without scope and timing, totals can be misinterpreted or compared across unlike assessment populations.

Sources: [Exports](https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm), [Create Report API](https://developer.tenable.com/reference/vm-reports-create)

## 19. T08-Q19

Warning must always be treated as a confirmed Passed result.

**A. True — Not the keyed answer**

Warning can require further investigation or manual confirmation, so it is not a universally confirmed Passed result.

**B. False — Answer key**

The statement incorrectly treats an uncertain or review-required outcome as conclusive compliance evidence.

Sources: [System Hardening](https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm)

## 20. T08-Q20

Accepting a risk and verifying technical remediation represent different outcomes.

**A. True — Answer key**

Risk acceptance documents a decision to tolerate exposure, while technical remediation removes or mitigates the underlying issue and needs verification.

**B. False — Not the keyed answer**

An accepted finding may remain technically present, so acceptance cannot be equated with a verified fix.

Sources: [Add Recast, Change Result and Accept Rules](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm), [Vulnerability States](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm)
