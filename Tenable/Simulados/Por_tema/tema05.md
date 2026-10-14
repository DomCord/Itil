# 05 Scans de rede e credenciais

20 questões autorais em inglês. Tempo: 40 minutos. Data: 09/10/2026. Uma resposta por item. Todos os itens valem um ponto. Não usar o gabarito durante a tentativa.

A/B são seleções sem itens em comum entre si, retiradas do banco temático. A distribuição por módulo é didática e não reproduz um blueprint detalhado oficial. A revisão de reserva não repete os itens A/B, mas seus itens estão nos simulados temáticos.

### 1. Which template is a suitable starting point for a standard full system network assessment?

A. A tactical single-CVE scan

B. Basic Network Scan

C. Host Discovery

D. Credentialed Patch Audit when a full assessment is required

ID: T05-Q01. Tema 05.

### 2. Plugin settings are locked in a scan based on a user-defined template. Where should those settings be changed?

A. In the asset network association

B. In an export filter after execution

C. In each locked scan field directly

D. In the related user-defined template

ID: T05-Q02. Tema 05.

### 3. New plugins arrive in a family that is fully enabled in the policy. What is the documented behavior?

A. Only the previously selected plugins remain enabled

B. They stay disabled despite the fully enabled family

C. The family becomes partially enabled automatically

D. The new plugins in that family are automatically enabled

ID: T05-Q03. Tema 05.

### 4. A Windows credentialed scan has a correct password but cannot access required files or registry data. What should be investigated?

A. The finding acceptance criteria

B. Account privileges, host policies and required access paths

C. Report permission scope only

D. The selected severity metric

ID: T05-Q04. Tema 05.

### 5. Which protocols does the Windows credentialed checks guide explicitly discuss?

A. SMB and WMI

B. SNMP and ICMP only

C. SSH and SCP

D. HTTPS to the Core administration interface

ID: T05-Q05. Tema 05.

### 6. Which access method supports local security checks on Linux targets?

A. Unauthenticated TCP service detection only

B. SSH with appropriate credentials or keys and needed privileges

C. SMB with Windows credentials only

D. An agent status check on the scanner

ID: T05-Q06. Tema 05.

### 7. A Linux login succeeds, but package inventory cannot be retrieved. What is the best interpretation?

A. Authentication success alone does not confirm complete credentialed checks

B. All local checks succeeded because login succeeded

C. Credentials are irrelevant after TCP access succeeds

D. The absent inventory proves no missing patches

ID: T05-Q07. Tema 05.

### 8. Which plugin is useful for reviewing scan execution information?

A. An asset criticality score alone

B. A vulnerability state filter alone

C. 21745, OS Security Patch Assessment Failed

D. 19506, Nessus Scan Information

ID: T05-Q08. Tema 05.

### 9. Which plugin is relevant to investigating failed OS security patch assessment?

A. 19506 alone, without reviewing patch-failure evidence

B. 21745, OS Security Patch Assessment Failed

C. The asset linking status alone

D. The Host Discovery template selection alone

ID: T05-Q09. Tema 05.

### 10. A scan status is Completed. Which conclusion is still unsupported without additional evidence?

A. All targeted hosts completed credentialed local checks successfully

B. Execution information should be inspected

C. Results may be available for review

D. The scan reached a final execution state

ID: T05-Q10. Tema 05.

### 11. Why can a non-privileged Linux account yield incomplete compliance coverage?

A. No local configuration is used by compliance checks

B. Some system configuration and file-permission checks require elevated access

C. SSH access is impossible for every non-root account

D. Successful login gives unrestricted configuration access

ID: T05-Q11. Tema 05.

### 12. A scan takes too long. Which tuning approach best supports a reliable comparison?

A. Change all tuning settings in one run

B. Change one relevant parameter, measure impact and verify coverage

C. Increase concurrency without checking target impact

D. Remove slow plugins before measuring coverage

ID: T05-Q12. Tema 05.

### 13. What limitation should be considered when using a tactical scan for a specific vulnerability?

A. It assesses all service ports regardless of policy

B. It replaces every later comprehensive scan

C. Its focused scope does not automatically provide comprehensive assessment

D. It includes every benchmark by definition

ID: T05-Q13. Tema 05.

### 14. Remote Registry is set to Manual. What should be checked before declaring credentialed scanning impossible?

A. The service setting alone proves complete authentication

B. Manual always means Nessus can never start the service

C. Whether the documented scan option and sufficient privileges can start it during the scan

D. Changing severity enables the registry service

ID: T05-Q14. Tema 05.

### 15. What is the benefit of reviewing the credential source used by a scan?

A. Credentials in an export file override scan credentials

B. It clarifies whether template, scan-specific or managed credentials control access

C. Any successful credential source guarantees full checks

D. The source removes all privilege requirements

ID: T05-Q15. Tema 05.

### 16. Findings drop sharply after a service-account change. Which check is most useful before declaring remediation success?

A. Compare credentialed-check evidence and assessed scope before and after the change

B. Accept remaining findings to confirm remediation

C. Ignore the previous credentialed-check evidence

D. Use the lower total as sufficient proof

ID: T05-Q16. Tema 05.

### 17. Successful SSH authentication alone always proves that complete credentialed checks ran.

A. True

B. False

ID: T05-Q17. Tema 05.

### 18. A fully enabled plugin family can automatically include newly received plugins.

A. True

B. False

ID: T05-Q18. Tema 05.

### 19. A correct Windows password guarantees access to all required administrative shares and registry data.

A. True

B. False

ID: T05-Q19. Tema 05.

### 20. A focused tactical scan and a comprehensive network scan may have different assessment coverage.

A. True

B. False

ID: T05-Q20. Tema 05.
