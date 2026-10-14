# Complementary study bank — technical review

100 English questions with 400 English option rationales. Imported answer keys are preserved; explicit notes identify ambiguity or overbroad claims.

This is independent educational material for personal, noncommercial use. Original capture and provenance records remain in the private study archive. The source content belongs to Bayview Global LLC. No official certification endorsement is implied.

## BC-Q001

The wording conflates vulnerability priority with asset-specific exposure. The imported key is retained; AES and ACR should be distinguished from the global VPR calculation.

## BC-Q003

Plugin availability and successful authenticated inventory collection must be checked. Neither universal plugin presence nor complete collection follows from the opening sentence.

## BC-Q007

The imported snapshot-campaign model is product/workflow-specific. Do not assume current initiatives have identical membership and update behavior.

## BC-Q011

Local collection and delivery are separate. Agents still need a supported update/reporting path; permanently isolated operation is not established by this answer.

## BC-Q012

A critical VPR is not proof of exploitation in the wild. The strict requirement calls for explicit exploitation intelligence rather than a score-only filter.

## BC-Q021

Agent scans can follow roaming endpoints, but scheduled or triggered collection is not continuous real-time vulnerability streaming.

## BC-Q023

Managed asset status, licensing age and automatic deletion are distinct mechanisms. Current Asset Age Out can purge the asset and associated findings rather than always retaining an inactive historical record.

## BC-Q025

Reusable target collections and VM Networks are different concepts. Confirm the product/version before adopting the imported Network Objects terminology.

## BC-Q029

Agents avoid remote scan probes, but still generate communication for updates and uploads. Zero network traffic or zero IDS/IPS alerts is not guaranteed.

## BC-Q030

The stated score band applies to CVSS v3. General Settings also supports other severity metrics, so tenant configuration must be checked.

## BC-Q032

Verify current account entitlements and documented service limits. The imported wording is not evidence of unlimited sensor capacity.

## BC-Q037

The official plugin 10397 is Microsoft Windows SMB LanMan Pipe Server Listing Disclosure, not SMB file-share enumeration. None of the descriptions precisely names its behavior; the imported key is retained for scoring.

## BC-Q045

After rotation, verify local inventory and checks as well as accepted credentials; plugin 19506 alone does not prove full collection.

## BC-Q050

Both Standard and Scan Manager can meet the stated condition in current documentation. The question needs an own-scope versus broader management distinction to have one unique answer; the imported key is retained.

## BC-Q052

A port-scanner range controls discovery probing, but authenticated or plugin-specific connections can have additional ports. Do not interpret it as a universal traffic guarantee.

## BC-Q058

A stopped service alone does not establish a false positive. Investigate the original detection and applicable PCI validation/dispute requirements before approving a treatment.

## BC-Q065

Catch-up behavior depends on the configured agent scan method, timing and reporting rules; it is not an automatic guarantee for every missed window.

## BC-Q086

Pure ASCII is byte-compatible with UTF-8. Check actual target-file content, BOM and formatting rather than treating every UTF-8 label as automatically invalid.

## BC-Q096

The listed inventory-template coverage exclusions are version-dependent; check the current template guidance before using inventory collection as a full assessment replacement.

## Official documentation

- [Risk](https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm)
- [Scoring](https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm)
- [Checks](https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm)
- [Templates](https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm)
- [Networks](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm)
- [Aging](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-networks.htm)
- [Roles](https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/TenableRolePrivileges.htm)
- [Rbac](https://docs.tenable.com/vulnerability-management/best-practices/RBAC/Content/best-practices.htm)
- [Recast](https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm)
- [Cvss](https://www.first.org/cvss/v3.1/specification-document)
- [Plugin](https://www.tenable.com/plugins/nessus/10397)
- [General](https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm)
- [Snow](https://docs.tenable.com/integrations/ServiceNow/Content/snow6/config-tvm.htm)
- [Jira](https://docs.tenable.com/integrations/Atlassian/Jira/Content/configure_tio_addon.htm)
- [Views](https://docs.tenable.com/vulnerability-management/Content/Explore/Explore.htm)
- [Release](https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm)