# Simulado completo B

60 questões autorais em inglês. Tempo: 120 minutos. Data: 09/10/2026. Uma resposta por item. Todos os itens valem um ponto. Não usar o gabarito durante a tentativa.

A/B são seleções sem itens em comum entre si, retiradas do banco temático. A distribuição por módulo é didática e não reproduz um blueprint detalhado oficial. A revisão de reserva não repete os itens A/B, mas seus itens estão nos simulados temáticos.

### 1. Which information best supports an operations team receiving a remediation report?

A. Only a trend without affected assets or owners

B. Only the percentage of visible low findings

C. Affected assets, evidence, proposed action, responsible owner and follow-up

D. Only the largest severity total

ID: T08-Q12. Tema 08.

### 2. After changing the severity metric, why might two findings of the same vulnerability temporarily show different severities?

A. Only future scans can display findings at all

B. One has been re-observed under the new metric and the other has not

C. The metric change deletes the older finding

D. Every existing finding changes immediately

ID: T03-Q13. Tema 03.

### 3. What is the purpose of Exposure Response Report Cards?

A. Override every benchmark result

B. Show initiative-related progress and responsible-owner context

C. Provide sensor linkage credentials

D. Replace the network assessment engine

ID: T08-Q13. Tema 08.

### 4. Why can complex credentialed scans require more resources than a small discovery pilot?

A. Credentialed scans require less processing in every workload

B. Hardware depends only on host count

C. Only passive monitors require local storage

D. The checks may consume additional processing, memory and storage

ID: T02-Q08. Tema 02.

### 5. An agent group exists as "Lab-Windows", but the linking command uses "lab-windows". What should be checked?

A. The network name overrides the agent group name

B. The group name is always case-insensitive

C. Exact case-sensitive matching of the existing agent group name

D. The scan window corrects the name automatically

ID: T02-Q11. Tema 02.

### 6. What explains why a passive monitor and an active discovery scan may produce different inventories?

A. Every difference proves an asset correlation failure

B. Active discovery and passive traffic share identical coverage

C. They obtain evidence through different observation methods and coverage

D. Passive discovery always has filesystem evidence

ID: T04-Q08. Tema 04.

### 7. Triggered scans can be initiated by agent-side triggers without a separate window launch by a user.

A. True

B. False

ID: T06-Q18. Tema 06.

### 8. Which need can remain after deploying agents to all laptops?

A. Every network scan becomes redundant

B. Assessment of how network services are exposed to remote scanners

C. Every remote service is guaranteed reachable

D. Remote exposure is fully proven by local checks

ID: T06-Q09. Tema 06.

### 9. According to the triggered scan guide, how are triggered-scan vulnerability data exported?

A. Individual exports identical to window scan results

B. Through the bulk vulnerability export API

C. Only export of agent group membership

D. A report card with no vulnerability data export

ID: T06-Q10. Tema 06.

### 10. Which VPR driver offers evidence about known exploitation context?

A. The number of hosts assigned to an agent group

B. The asset operating-system display name

C. The business owner of the asset

D. Whether the vulnerability is on CISA KEV

ID: T07-Q08. Tema 07.

### 11. Changing a finding severity through Recast installs the missing patch on the target.

A. True

B. False

ID: T07-Q18. Tema 07.

### 12. A successful pilot should compare observed assets with the expected assessment scope.

A. True

B. False

ID: T01-Q18. Tema 01.

### 13. Which format is appropriate for structured offline analysis of exported findings?

A. Only a total printed in a report card

B. Only a dashboard screenshot

C. Only a PDF cover without occurrence data

D. CSV or JSON as supported by the export feature

ID: T08-Q10. Tema 08.

### 14. Which plugin is relevant to investigating failed OS security patch assessment?

A. 19506 alone, without reviewing patch-failure evidence

B. 21745, OS Security Patch Assessment Failed

C. The asset linking status alone

D. The Host Discovery template selection alone

ID: T05-Q09. Tema 05.

### 15. VM scan distribution across a scanner group is primarily described as distribution of what?

A. Whole scans only, assigned to the oldest scanner

B. Scan tasks according to available capacity

C. Credentials only, with no task distribution

D. One permanent asset allocation per scanner

ID: T03-Q08. Tema 03.

### 16. Which record best supports investigating a missing host?

A. Expected identity, segment, chosen sensor and discovery evidence

B. The final finding count without expected identities

C. A report severity summary without discovery evidence

D. A hostname alone without segment context

ID: T04-Q13. Tema 04.

### 17. A VM release dated October 6, 2026 describes an agent health change. What is the stated condition for Offline?

A. No check-in for 72 hours or more

B. No check-in for seven days

C. No scan findings after a completed upload

D. No check-in for 24 hours

ID: T06-Q12. Tema 06.

### 18. A scan takes too long. Which tuning approach best supports a reliable comparison?

A. Change all tuning settings in one run

B. Change one relevant parameter, measure impact and verify coverage

C. Increase concurrency without checking target impact

D. Remove slow plugins before measuring coverage

ID: T05-Q12. Tema 05.

### 19. A scan status is Completed. Which conclusion is still unsupported without additional evidence?

A. All targeted hosts completed credentialed local checks successfully

B. Execution information should be inspected

C. Results may be available for review

D. The scan reached a final execution state

ID: T05-Q10. Tema 05.

### 20. Which command helps observe linkage and communication status of an agent?

A. nessuscli agent status

B. nessuscli agent unlink

C. An ICMP check against another notebook

D. A cloud report export command

ID: T06-Q07. Tema 06.

### 21. Host Discovery and a full vulnerability assessment have the same purpose and coverage.

A. True

B. False

ID: T04-Q18. Tema 04.

### 22. A rule intended for one application matches an entire subnet. What is the main review priority?

A. Treat the broad match as technical remediation

B. Narrow the criteria and confirm the exact matching assets and findings

C. Extend expiration before inspecting the match scope

D. Keep the broad scope because the rule has a name

ID: T07-Q13. Tema 07.

### 23. Which distinction is essential when selecting Host Discovery rather than a vulnerability assessment?

A. Discovery identifies hosts and available inventory information

B. Discovery verifies benchmark compliance

C. Discovery performs all authenticated patch checks

D. Discovery confirms technical remediation

ID: T01-Q12. Tema 01.

### 24. What is the documented effect of an Accept rule on matching vulnerability findings?

A. Mark the technical flaw resolved without reassessment

B. Accept the risk and hide matching findings from the Findings table

C. Install a patch and hide the remediated finding

D. Exclude the host from every future assessment

ID: T07-Q12. Tema 07.

### 25. Reports should record scope and collection timing so that their totals can be interpreted.

A. True

B. False

ID: T08-Q18. Tema 08.

### 26. A scheduled exclusion window begins after a network scan has already started. What does the guide state?

A. The scheduled exclusion does not interrupt that already running scan

B. It accepts findings already generated by that scan

C. It deletes earlier results from the excluded hosts

D. It immediately interrupts every running task

ID: T03-Q11. Tema 03.

### 27. A sensor installation completes, but linking fails behind a proxy. What should be investigated first?

A. Target patch levels before linking

B. Endpoint resolution, proxy behavior and HTTPS/TLS connectivity

C. The scope of an Accept rule

D. Finding severity configuration

ID: T02-Q07. Tema 02.

### 28. A question asks about severity but does not state the configured metric. What is the best analytical habit?

A. Assume recast rules define the base metric

B. Identify the metric and relevant version before applying its severity rules

C. Assume CVSSv2 in every version and tenant

D. Use ACR as the severity of every vulnerability

ID: T07-Q10. Tema 07.

### 29. Which plugin is useful for reviewing scan execution information?

A. An asset criticality score alone

B. A vulnerability state filter alone

C. 21745, OS Security Patch Assessment Failed

D. 19506, Nessus Scan Information

ID: T05-Q08. Tema 05.

### 30. The agent linking key and a user API key pair serve the same purpose.

A. True

B. False

ID: T02-Q18. Tema 02.

### 31. Which pilot outcome provides the strongest evidence that a deployment plan works?

A. The linking key was accepted once

B. The installer completed and the service is running

C. The expected sample assets were reached and produced usable assessment evidence

D. A scan finished without checking sample coverage

ID: T01-Q08. Tema 01.

### 32. Why can a wider port range increase scan duration?

A. A wider range always bypasses filtered ports

B. It disables the need for service identification

C. More candidate services and network checks may need assessment

D. It reduces the candidate service surface

ID: T04-Q11. Tema 04.

### 33. Which standard endpoint and port match a modern agent linked directly to VM?

A. The scanner interface on TCP 8834

B. Tenable Core on TCP 8000

C. sensor.cloud.tenable.com:443

D. The target host on TCP 445

ID: T02-Q13. Tema 02.

### 34. A target is explicitly included in a new network scan but is under an active exclusion. What happens?

A. The target is marked Fixed without assessment

B. The active exclusion takes precedence and the scanner skips the target

C. The target runs but findings are hidden afterward

D. The explicit target overrides every exclusion

ID: T03-Q09. Tema 03.

### 35. Which statement best describes Safe Checks?

A. It disables checks that may adversely affect the remote host, while overall scan impact still needs review

B. It replaces credential privilege validation

C. It makes all active probing passive

D. It guarantees zero impact on every target

ID: T04-Q09. Tema 04.

### 36. Which scan type is outside the documented scope of network scan exclusions?

A. Linked Nessus network scans

B. Network scans targeting an excluded IP

C. Cloud network scans

D. Local Tenable Agent scans

ID: T03-Q10. Tema 03.

### 37. Two reports disagree on vulnerability totals. Which factors should be compared first?

A. Assume report filters cannot affect totals

B. Compare only totals while ignoring units

C. Assume a different total always proves data corruption

D. Filters, dates, permissions and the unit being counted

ID: T08-Q09. Tema 08.

### 38. A passive monitor does not show a powered-on host that sends no observed traffic. What is the best interpretation?

A. The host has completed authenticated checks

B. The absence may reflect limited observed traffic rather than host absence

C. The host is absent from the environment

D. The host has no exposed services

ID: T01-Q11. Tema 01.

### 39. Why should an asset inventory use more context than an IPv4 address alone?

A. An open port uniquely identifies the asset

B. An IP is always a permanent asset identity

C. Network context is irrelevant if IPs match

D. Addresses may change or overlap across environments

ID: T01-Q10. Tema 01.

### 40. What limitation should be considered when using a tactical scan for a specific vulnerability?

A. It assesses all service ports regardless of policy

B. It replaces every later comprehensive scan

C. Its focused scope does not automatically provide comprehensive assessment

D. It includes every benchmark by definition

ID: T05-Q13. Tema 05.

### 41. What traffic feed is appropriate for a passive Network Monitor?

A. Only traffic to the monitor web interface

B. A SPAN port or network TAP with a bidirectional view

C. Only a unidirectional feed of requests

D. Only traffic generated by an active scanner

ID: T02-Q12. Tema 02.

### 42. An agent is offline for the entire reporting window. What should be investigated?

A. The host has been technically remediated

B. The endpoint has Passed every audit

C. A participation gap in that window and options for future coverage

D. The platform guarantees results in the same window

ID: T06-Q13. Tema 06.

### 43. Which command best supports checking an installed agent without resetting it?

A. Reinstall the agent before reviewing its state

B. nessuscli agent link without inspecting status

C. nessuscli agent status

D. nessuscli agent unlink

ID: T02-Q10. Tema 02.

### 44. Which capability helps move from an aggregate dashboard indicator to the underlying evidence?

A. Only exporting the aggregate total

B. Drill-down to the relevant assets or findings

C. Only changing the dashboard severity colors

D. Only hiding categories that are hard to explain

ID: T08-Q08. Tema 08.

### 45. What is essential when modifying conditional logic in a custom audit?

A. Infer results only from the audit filename

B. Assume syntax validity proves policy correctness

C. Validate applicable and alternative paths against expected evidence

D. Test only one branch and assume the other is valid

ID: T08-Q07. Tema 08.

### 46. Why can a non-privileged Linux account yield incomplete compliance coverage?

A. No local configuration is used by compliance checks

B. Some system configuration and file-permission checks require elevated access

C. SSH access is impossible for every non-root account

D. Successful login gives unrestricted configuration access

ID: T05-Q11. Tema 05.

### 47. A fully enabled plugin family can automatically include newly received plugins.

A. True

B. False

ID: T05-Q18. Tema 05.

### 48. A scanner sees one subnet but not another in its targets. Which evidence should be reviewed first?

A. Severity settings only

B. Risk acceptance criteria only

C. Audit result overrides only

D. Routing, firewall behavior, exclusions and actual target scope

ID: T04-Q12. Tema 04.

### 49. A scanner group can belong to multiple networks at the same time.

A. True

B. False

ID: T03-Q18. Tema 03.

### 50. What does a vulnerability Recast rule change?

A. The underlying installed software version

B. The target service exposure configuration

C. The missing patch on the target

D. The severity of matching findings

ID: T07-Q11. Tema 07.

### 51. What does the documented report creation API produce from templates and filters?

A. A configuration remediation script

B. A patch package for each finding

C. A PDF report

D. A new local scan policy executed on all hosts

ID: T08-Q11. Tema 08.

### 52. General Settings currently documents which default severity metric for individual vulnerability instances?

A. VPR

B. ACR used as the vulnerability severity metric

C. CVSSv2 with no alternative

D. CVSSv3 with no alternative

ID: T03-Q12. Tema 03.

### 53. What must still work for locally collected results to reach VM?

A. Inbound scanner connectivity to every laptop

B. Communication from the agent to the documented manager endpoint

C. Successful upload without any manager communication

D. A passive traffic feed to the agent

ID: T06-Q08. Tema 06.

### 54. A deployment has installed sensors but has no usable findings. Which next step best validates operation?

A. Create reports before validating data collection

B. Configure and run appropriate scans, then review results against expected coverage

C. Accept risks to generate the missing scan evidence

D. Treat linkage as proof of completed assessment

ID: T01-Q13. Tema 01.

### 55. Two branches use the same private IPv4 address for different hosts. Which VM concept helps distinguish these environments?

A. One shared network for identical IPs

B. Tag categories alone, with no network context

C. Networks

D. A risk acceptance rule per branch

ID: T01-Q09. Tema 01.

### 56. A scanner gradually runs out of disk space although the target count is stable. Which factor deserves review?

A. Growth of logs, scan results and plugin-related data

B. The number of configured user roles

C. License usage alone

D. The selected severity metric

ID: T02-Q09. Tema 02.

### 57. A legacy device becomes unstable during probing. Which approach best supports safe coverage planning?

A. Keep the policy and treat missing results as safe

B. Review policy, exclusions and alternative evidence for that device

C. Use severity recast to prevent network probes

D. Increase concurrency before reviewing the device

ID: T04-Q10. Tema 04.

### 58. Which status detail can help investigate an agent that reports unexpectedly limited checks?

A. Agent group name alone

B. Only the host business criticality score

C. The user role that opens the dashboard

D. The current plugin set and scan information

ID: T06-Q11. Tema 06.

### 59. Why should a team consider business context separately from VPR drivers?

A. Asset role is the same as global vulnerability threat

B. VPR automatically captures every internal dependency

C. A user directly rewrites VPR for each business unit

D. VPR drivers reflect the vulnerability threat landscape rather than a customized asset business role

ID: T07-Q09. Tema 07.

### 60. A discovery run observes 28 of 40 expected hosts. What is the defensible observed coverage rate?

A. 30% of hosts proven offline

B. 100% of reachable hosts assessed with credentials

C. 70% of vulnerabilities remediated

D. 70% of the expected hosts

ID: T04-Q07. Tema 04.
