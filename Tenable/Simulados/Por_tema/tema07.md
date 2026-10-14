# 07 Findings, risco e exceções

20 questões autorais em inglês. Tempo: 40 minutos. Data: 09/10/2026. Uma resposta por item. Todos os itens valem um ponto. Não usar o gabarito durante a tentativa.

A/B são seleções sem itens em comum entre si, retiradas do banco temático. A distribuição por módulo é didática e não reproduz um blueprint detalhado oficial. A revisão de reserva não repete os itens A/B, mas seus itens estão nos simulados temáticos.

### 1. Which information distinguishes vulnerability instances on an asset according to VM documentation?

A. Asset hostname and dashboard title

B. CVE name alone without instance context

C. CVSS score and report date alone

D. Plugin ID, port and protocol

ID: T07-Q01. Tema 07.

### 2. A vulnerability is detected once on a host. Which UI state describes that initial detection?

A. New

B. Fixed after reassessment

C. Active after multiple detections

D. Resurfaced after Fixed

ID: T07-Q02. Tema 07.

### 3. A vulnerability previously marked Fixed is detected again. Which state applies?

A. Accepted automatically after recurrence

B. New regardless of prior state

C. Active with no resurfacing distinction

D. Resurfaced

ID: T07-Q03. Tema 07.

### 4. What should a user know when filtering Active vulnerabilities in the UI?

A. It contains only findings with Accept rules

B. It always excludes New

C. It contains only previously Fixed findings

D. The filter also includes New vulnerabilities

ID: T07-Q04. Tema 07.

### 5. How are new and active UI vulnerability states represented in the API?

A. Both are labeled reopened

B. Both are labeled fixed

C. Both are labeled open

D. New is open and active is closed

ID: T07-Q05. Tema 07.

### 6. What distinguishes VPR from a technical severity score alone?

A. It is the asset business-criticality rating

B. It incorporates dynamic vulnerability and threat information

C. It is the elapsed scan execution time

D. It is only a static technical severity vector

ID: T07-Q06. Tema 07.

### 7. What does ACR describe when available under the required licensing?

A. Technical severity of a CVE

B. Global threat activity for a vulnerability

C. The business criticality of an asset

D. The maturity of an exploit without asset context

ID: T07-Q07. Tema 07.

### 8. Which VPR driver offers evidence about known exploitation context?

A. The number of hosts assigned to an agent group

B. The asset operating-system display name

C. The business owner of the asset

D. Whether the vulnerability is on CISA KEV

ID: T07-Q08. Tema 07.

### 9. Why should a team consider business context separately from VPR drivers?

A. Asset role is the same as global vulnerability threat

B. VPR automatically captures every internal dependency

C. A user directly rewrites VPR for each business unit

D. VPR drivers reflect the vulnerability threat landscape rather than a customized asset business role

ID: T07-Q09. Tema 07.

### 10. A question asks about severity but does not state the configured metric. What is the best analytical habit?

A. Assume recast rules define the base metric

B. Identify the metric and relevant version before applying its severity rules

C. Assume CVSSv2 in every version and tenant

D. Use ACR as the severity of every vulnerability

ID: T07-Q10. Tema 07.

### 11. What does a vulnerability Recast rule change?

A. The underlying installed software version

B. The target service exposure configuration

C. The missing patch on the target

D. The severity of matching findings

ID: T07-Q11. Tema 07.

### 12. What is the documented effect of an Accept rule on matching vulnerability findings?

A. Mark the technical flaw resolved without reassessment

B. Accept the risk and hide matching findings from the Findings table

C. Install a patch and hide the remediated finding

D. Exclude the host from every future assessment

ID: T07-Q12. Tema 07.

### 13. A rule intended for one application matches an entire subnet. What is the main review priority?

A. Treat the broad match as technical remediation

B. Narrow the criteria and confirm the exact matching assets and findings

C. Extend expiration before inspecting the match scope

D. Keep the broad scope because the rule has a name

ID: T07-Q13. Tema 07.

### 14. Which evidence best supports closing a remediation action?

A. The total decreased without checking assessment coverage

B. The matching row is hidden by Accept

C. A suitable reassessment no longer detects the relevant vulnerability under comparable coverage

D. The finding severity changed through Recast

ID: T07-Q14. Tema 07.

### 15. The same plugin affects multiple hosts. Why can a plugin count be misleading for operations?

A. The plugin count always equals affected host count

B. One plugin represents only one occurrence in every report

C. A plugin count proves the inventory was fully assessed

D. It does not by itself express all affected assets and occurrences

ID: T07-Q15. Tema 07.

### 16. Which view specifically relates vulnerability intelligence to findings in the organization environment?

A. The scanner installation-status view only

B. The global CVE list with no tenant findings context

C. The agent linkage inventory only

D. My Findings

ID: T07-Q16. Tema 07.

### 17. A user can directly edit the calculated VPR value.

A. True

B. False

ID: T07-Q17. Tema 07.

### 18. Changing a finding severity through Recast installs the missing patch on the target.

A. True

B. False

ID: T07-Q18. Tema 07.

### 19. Resurfaced describes a vulnerability detected again after a Fixed state.

A. True

B. False

ID: T07-Q19. Tema 07.

### 20. Threat information and asset business criticality can both support remediation prioritization.

A. True

B. False

ID: T07-Q20. Tema 07.
