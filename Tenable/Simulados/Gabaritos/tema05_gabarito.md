# 05 Scans de rede e credenciais

All option rationales are in English. The existing answer key is retained.

## 1. T05-Q01

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

## 2. T05-Q02

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

## 3. T05-Q03

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

## 4. T05-Q04

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

## 5. T05-Q05

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

## 6. T05-Q06

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

## 7. T05-Q07

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

## 8. T05-Q08

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

## 9. T05-Q09

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

## 10. T05-Q10

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

## 11. T05-Q11

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

## 12. T05-Q12

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

## 13. T05-Q13

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

## 14. T05-Q14

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

## 15. T05-Q15

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

## 16. T05-Q16

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

## 17. T05-Q17

Successful SSH authentication alone always proves that complete credentialed checks ran.

**A. True — Not the keyed answer**

SSH login can succeed while package inventory retrieval or privileged checks fail, leaving assessment incomplete.

**B. False — Answer key**

The statement incorrectly treats authentication as sufficient evidence for all required local checks.

Sources: [Nessus Credentialed Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)

## 18. T05-Q18

A fully enabled plugin family can automatically include newly received plugins.

**A. True — Answer key**

A fully enabled plugin family incorporates newly received family plugins automatically under the documented selection behavior.

**B. False — Not the keyed answer**

New plugins are not inherently excluded from a fully enabled family; partial-family settings are a separate case.

Sources: [Configure Plugins](https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm)

## 19. T05-Q19

A correct Windows password guarantees access to all required administrative shares and registry data.

**A. True — Not the keyed answer**

A valid password does not bypass account privileges, host security policies or access restrictions on shares and registry data.

**B. False — Answer key**

Authentication and authorization are separate prerequisites, so correct credentials alone cannot guarantee every required access path.

Sources: [Credentialed Checks on Windows](https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm)

## 20. T05-Q20

A focused tactical scan and a comprehensive network scan may have different assessment coverage.

**A. True — Answer key**

A tactical policy is focused on a particular objective, whereas a comprehensive policy assesses a broader set of exposures.

**B. False — Not the keyed answer**

Different objectives and plugin selections can produce different coverage, so their assessment perspectives cannot be assumed equivalent.

Sources: [Scan Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)
