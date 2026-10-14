# Simulado completo A

60 questões autorais em inglês. Tempo: 120 minutos. Data: 09/10/2026. Uma resposta por item. Todos os itens valem um ponto. Não usar o gabarito durante a tentativa.

A/B são seleções sem itens em comum entre si, retiradas do banco temático. A distribuição por módulo é didática e não reproduz um blueprint detalhado oficial. A revisão de reserva não repete os itens A/B, mas seus itens estão nos simulados temáticos.

### 1. Where does a Tenable Agent perform its local vulnerability checks?

A. On the manager appliance for all local checks

B. On the host where the agent is installed

C. On the linked network scanner for all local checks

D. On the cloud scanner for all local checks

ID: T06-Q01. Tema 06.

### 2. Which mechanism can launch a triggered agent scan?

A. Only a manually launched platform window scan

B. An interval, a trigger file or a documented nessuscli command

C. Only a scanner-group task assignment

D. Only a dashboard refresh

ID: T06-Q05. Tema 06.

### 3. An internal subnet cannot be reached from the internet. What is the most appropriate active scanning arrangement?

A. A linked scanner in an unrelated unreachable network

B. Host Discovery from a scanner with no route

C. A linked Nessus scanner with network access to that subnet

D. A cloud scanner with no route to the subnet

ID: T01-Q03. Tema 01.

### 4. Which sensor observes existing traffic rather than initiating active probes to each host?

A. Tenable Network Monitor

B. A network scan using SSH authentication

C. A cloud scanner using active service detection

D. A Nessus scanner using SYN probes

ID: T01-Q04. Tema 01.

### 5. An agent appears in the linked list. What still needs verification?

A. Installed service proves current platform communication

B. Linkage proves all relevant checks and uploads succeeded

C. Whether it communicated, executed relevant checks and uploaded results

D. Current tag membership proves a completed agent scan

ID: T06-Q02. Tema 06.

### 6. Plugin settings are locked in a scan based on a user-defined template. Where should those settings be changed?

A. In the asset network association

B. In an export filter after execution

C. In each locked scan field directly

D. In the related user-defined template

ID: T05-Q02. Tema 05.

### 7. Which example follows the documented tag format?

A. Production:443:Admin:Plugin

B. Environment:Production

C. Environment=Role=Scanner

D. Category/Value/PluginID

ID: T03-Q03. Tema 03.

### 8. How many networks can a scanner or scanner group belong to at one time?

A. One network per open service

B. One

C. One network per plugin family

D. Several simultaneous networks when IPs overlap

ID: T03-Q06. Tema 03.

### 9. Which discovery method most directly depends on local layer-2 visibility?

A. TCP discovery through a routed path

B. ICMP echo through a routed path

C. DNS name resolution alone

D. ARP

ID: T04-Q03. Tema 04.

### 10. The default Core and Nessus web interfaces use the same port.

A. True

B. False

ID: T02-Q17. Tema 02.

### 11. Successful SSH authentication alone always proves that complete credentialed checks ran.

A. True

B. False

ID: T05-Q17. Tema 05.

### 12. A target runs HTTPS on port 8443, but the scan excludes that port. What should be checked?

A. A report filter hiding the port after collection

B. The configured port range and service discovery coverage

C. A severity recast rule for the service

D. Risk acceptance filters for the asset

ID: T04-Q04. Tema 04.

### 13. A host that does not answer ICMP echo is necessarily offline.

A. True

B. False

ID: T04-Q17. Tema 04.

### 14. Which default port is used by sensors to communicate with the standard VM cloud endpoint?

A. TCP 22

B. TCP 443

C. TCP 8000

D. TCP 8835

ID: T02-Q02. Tema 02.

### 15. Before deploying additional scanners, which information most directly supports placement decisions?

A. License capacity alone, without target topology

B. Existing finding totals without reachability data

C. Target topology, reachability and expected asset coverage

D. The severity metric selected for reports

ID: T01-Q06. Tema 01.

### 16. A mobile laptop is rarely reachable by an internal network scanner. Which addition best improves local assessment coverage?

A. A passive monitor on a segment the laptop never uses

B. A cloud scanner with no route to the laptop

C. A Tenable Agent installed on the laptop

D. A longer network scan while the laptop remains unreachable

ID: T01-Q05. Tema 01.

### 17. After successful linking, how does the sensor connect to VM according to the guide?

A. The target SSH private key

B. Using unique credentials associated with the sensor

C. The original linking key for every future request

D. A VM user password shared by all sensors

ID: T02-Q06. Tema 02.

### 18. A vulnerability is detected once on a host. Which UI state describes that initial detection?

A. New

B. Fixed after reassessment

C. Active after multiple detections

D. Resurfaced after Fixed

ID: T07-Q02. Tema 07.

### 19. A scan uses a user-defined template and its compliance settings are inherited. Where is the configuration changed?

A. In the exported report only

B. In the related user-defined template

C. In the asset severity override

D. In each inherited scan setting directly

ID: T08-Q06. Tema 08.

### 20. An audit check reports Warning. What is the best next step?

A. Investigate the result and required review before declaring compliance

B. Use risk acceptance as evidence that the control passed

C. Treat every Warning as a confirmed configuration failure

D. Treat it as Passed without review

ID: T08-Q03. Tema 08.

### 21. A vulnerability previously marked Fixed is detected again. Which state applies?

A. Accepted automatically after recurrence

B. New regardless of prior state

C. Active with no resurfacing distinction

D. Resurfaced

ID: T07-Q03. Tema 07.

### 22. New plugins arrive in a family that is fully enabled in the policy. What is the documented behavior?

A. Only the previously selected plugins remain enabled

B. They stay disabled despite the fully enabled family

C. The family becomes partially enabled automatically

D. The new plugins in that family are automatically enabled

ID: T05-Q03. Tema 05.

### 23. A user can configure scans but should view only branch assets. What additional design is needed?

A. Appropriate resource scope and permissions, commonly organized using tags

B. Administrator access to all resources

C. A shared user account for both branches

D. A dashboard filter with no permission changes

ID: T03-Q02. Tema 03.

### 24. Which statement best distinguishes roles from permissions in VM?

A. A role alone always establishes asset scope

B. Roles only restrict data and permissions only grant actions

C. Roles and permissions describe severity configuration

D. Roles govern actions while permissions govern accessible data and resources

ID: T03-Q01. Tema 03.

### 25. How are new and active UI vulnerability states represented in the API?

A. Both are labeled reopened

B. Both are labeled fixed

C. Both are labeled open

D. New is open and active is closed

ID: T07-Q05. Tema 07.

### 26. A powered-on host blocks ICMP echo. What is the best conclusion from missing echo replies?

A. The host is offline despite the stated power condition

B. Its open TCP services are necessarily absent

C. Its DNS record must have been deleted

D. Other discovery methods or evidence are needed before declaring it absent

ID: T04-Q02. Tema 04.

### 27. A hostname target resolves to an unexpected address. Which investigation is most relevant?

A. An agent reporting window

B. DNS resolution and whether the resolved address belongs to the intended scope

C. Dashboard ownership and report permissions

D. Finding severity recast criteria

ID: T04-Q06. Tema 04.

### 28. What causes an automatic tag to apply to relevant assets?

A. Manual assignment on every new asset

B. Assets matching the configured tag rules

C. The role of the user viewing the tag

D. Membership in any scanner group

ID: T03-Q04. Tema 03.

### 29. What is the purpose of using CIDR notation in a scan target definition?

A. Define a benchmark version

B. Define a severity threshold

C. Express an IP address block as part of the target scope

D. Define a plugin family selection

ID: T04-Q05. Tema 04.

### 30. Automatic tags can change membership when matching asset attributes change.

A. True

B. False

ID: T03-Q17. Tema 03.

### 31. An agent assessment automatically proves how every service appears to a remote network scanner.

A. True

B. False

ID: T01-Q17. Tema 01.

### 32. What does Tenable Core provide in a Core + Nessus deployment?

A. A replacement for the Nessus application

B. An operating system and appliance administration environment for Nessus

C. The vulnerability assessment engine itself

D. The complete SaaS VM control plane

ID: T02-Q01. Tema 02.

### 33. Which default port identifies the Nessus scanner web interface?

A. TCP 8835

B. TCP 445

C. TCP 8000

D. TCP 8834

ID: T02-Q03. Tema 02.

### 34. Which protocols does the Windows credentialed checks guide explicitly discuss?

A. SMB and WMI

B. SNMP and ICMP only

C. SSH and SCP

D. HTTPS to the Core administration interface

ID: T05-Q05. Tema 05.

### 35. Why must an audit file match the target system and intended benchmark version?

A. A benchmark version has no effect on requirements

B. Otherwise the checks may not represent the applicable configuration requirements

C. Any audit applies equally to every target platform

D. The audit filename alone configures the target

ID: T08-Q02. Tema 08.

### 36. Which template is a suitable starting point for a standard full system network assessment?

A. A tactical single-CVE scan

B. Basic Network Scan

C. Host Discovery

D. Credentialed Patch Audit when a full assessment is required

ID: T05-Q01. Tema 05.

### 37. A Windows credentialed scan has a correct password but cannot access required files or registry data. What should be investigated?

A. The finding acceptance criteria

B. Account privileges, host policies and required access paths

C. Report permission scope only

D. The selected severity metric

ID: T05-Q04. Tema 05.

### 38. What must be validated before grouping scanners to assess a target subnet?

A. Every scanner that may receive tasks can reach the intended targets

B. All scanners belong to different network contexts

C. The group name matches the target subnet

D. At least one scanner can reach every target

ID: T03-Q07. Tema 03.

### 39. Which component centrally manages vulnerability data in the cloud-based VM deployment?

A. A standalone Nessus Professional console

B. The local Agent CLI

C. Tenable One Vulnerability Management

D. Tenable Core alone

ID: T01-Q01. Tema 01.

### 40. An administrator opens the appliance administration interface on port 8000. Which component is being accessed?

A. The Nessus scanner interface

B. The Windows SMB interface

C. Tenable Core

D. The Network Monitor interface

ID: T02-Q04. Tema 02.

### 41. A mobile workforce frequently misses fixed scan windows. Which approach deserves consideration?

A. Shorten the fixed window without reviewing participation

B. Use a cloud scanner with no route to the notebooks

C. Triggered scans matched to endpoint availability and workflow

D. Accept risks of hosts missing the window

ID: T06-Q06. Tema 06.

### 42. A configuration check cannot read the required setting due to insufficient access. What should be reviewed?

A. Use a severity recast rule instead of collecting data

B. Assume the missing evidence proves Passed

C. Credential privileges and evidence collection before interpreting compliance

D. Replace the benchmark without inspecting access

ID: T08-Q05. Tema 08.

### 43. A linked scanner scans two environments that reuse IPs without the correct network context. What risk should be investigated?

A. An exclusion rule automatically separates identities

B. The agent group name replaces network context

C. Correct correlation is guaranteed by IP alone

D. Incorrect asset association or duplicate records

ID: T03-Q05. Tema 03.

### 44. A scan window guarantees that every linked agent will report successfully.

A. True

B. False

ID: T06-Q17. Tema 06.

### 45. What does a compliance audit primarily compare?

A. Only known CVEs against exploit activity

B. Only observed services against port numbers

C. Only scan duration against a reporting deadline

D. Observed configuration against specified benchmark requirements

ID: T08-Q01. Tema 08.

### 46. What is the role of an agent group in an agent scan configuration?

A. Change the severity metric on each host

B. Organize the agents intended to participate in the scan

C. Define a routed network for remote service scanning

D. Apply user permissions to every finding

ID: T06-Q03. Tema 06.

### 47. What distinguishes VPR from a technical severity score alone?

A. It is the asset business-criticality rating

B. It incorporates dynamic vulnerability and threat information

C. It is the elapsed scan execution time

D. It is only a static technical severity vector

ID: T07-Q06. Tema 07.

### 48. A team must assess services reachable from outside its network. Which sensor placement best represents that perspective?

A. An agent performing local checks only

B. A scanner behind the firewall with no external route

C. A cloud scanner with access to the public targets

D. A passive monitor seeing only internal traffic

ID: T01-Q02. Tema 01.

### 49. A Linux login succeeds, but package inventory cannot be retrieved. What is the best interpretation?

A. Authentication success alone does not confirm complete credentialed checks

B. All local checks succeeded because login succeeded

C. Credentials are irrelevant after TCP access succeeds

D. The absent inventory proves no missing patches

ID: T05-Q07. Tema 05.

### 50. A vulnerability scan with no detected CVEs proves that every benchmark requirement is satisfied.

A. True

B. False

ID: T08-Q17. Tema 08.

### 51. What does a scan window define for an agent group?

A. A timeframe in which the group must report for inclusion in the scan results

B. A vulnerability remediation deadline

C. A guarantee that linked agents stay online

D. The local operating-system uptime interval

ID: T06-Q04. Tema 06.

### 52. A user can directly edit the calculated VPR value.

A. True

B. False

ID: T07-Q17. Tema 07.

### 53. A dashboard shows fewer vulnerabilities after a network change. What should be checked before interpreting this as reduced risk?

A. Treat the lower finding total as sufficient evidence

B. Assume missing assets have been remediated

C. Use only the average VPR of visible findings

D. Whether the same expected assets and checks were still assessed

ID: T01-Q07. Tema 01.

### 54. What should a user know when filtering Active vulnerabilities in the UI?

A. It contains only findings with Accept rules

B. It always excludes New

C. It contains only previously Fixed findings

D. The filter also includes New vulnerabilities

ID: T07-Q04. Tema 07.

### 55. What does ACR describe when available under the required licensing?

A. Technical severity of a CVE

B. Global threat activity for a vulnerability

C. The business criticality of an asset

D. The maturity of an exploit without asset context

ID: T07-Q07. Tema 07.

### 56. What is the primary purpose of a sensor linking key?

A. Provide Windows target credentials

B. Establish the initial association between a sensor and VM

C. Encrypt each report with a user password

D. Authenticate user API requests

ID: T02-Q05. Tema 02.

### 57. Which scan template is designed for discovering live hosts and available inventory information?

A. Policy Compliance Auditing

B. A tactical single-vulnerability scan

C. Host Discovery

D. Credentialed Patch Audit

ID: T04-Q01. Tema 04.

### 58. Which access method supports local security checks on Linux targets?

A. Unauthenticated TCP service detection only

B. SSH with appropriate credentials or keys and needed privileges

C. SMB with Windows credentials only

D. An agent status check on the scanner

ID: T05-Q06. Tema 05.

### 59. Which information distinguishes vulnerability instances on an asset according to VM documentation?

A. Asset hostname and dashboard title

B. CVE name alone without instance context

C. CVSS score and report date alone

D. Plugin ID, port and protocol

ID: T07-Q01. Tema 07.

### 60. A check reports Passed. What does that support?

A. The tested parameter met the applicable check requirements in the collected evidence

B. Every control remains compliant indefinitely

C. Untested requirements also passed

D. The host has no vulnerabilities

ID: T08-Q04. Tema 08.
