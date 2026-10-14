# 04 Host Discovery e inventário

20 questões autorais em inglês. Tempo: 40 minutos. Data: 09/10/2026. Uma resposta por item. Todos os itens valem um ponto. Não usar o gabarito durante a tentativa.

A/B são seleções sem itens em comum entre si, retiradas do banco temático. A distribuição por módulo é didática e não reproduz um blueprint detalhado oficial. A revisão de reserva não repete os itens A/B, mas seus itens estão nos simulados temáticos.

### 1. Which scan template is designed for discovering live hosts and available inventory information?

A. Policy Compliance Auditing

B. A tactical single-vulnerability scan

C. Host Discovery

D. Credentialed Patch Audit

ID: T04-Q01. Tema 04.

### 2. A powered-on host blocks ICMP echo. What is the best conclusion from missing echo replies?

A. The host is offline despite the stated power condition

B. Its open TCP services are necessarily absent

C. Its DNS record must have been deleted

D. Other discovery methods or evidence are needed before declaring it absent

ID: T04-Q02. Tema 04.

### 3. Which discovery method most directly depends on local layer-2 visibility?

A. TCP discovery through a routed path

B. ICMP echo through a routed path

C. DNS name resolution alone

D. ARP

ID: T04-Q03. Tema 04.

### 4. A target runs HTTPS on port 8443, but the scan excludes that port. What should be checked?

A. A report filter hiding the port after collection

B. The configured port range and service discovery coverage

C. A severity recast rule for the service

D. Risk acceptance filters for the asset

ID: T04-Q04. Tema 04.

### 5. What is the purpose of using CIDR notation in a scan target definition?

A. Define a benchmark version

B. Define a severity threshold

C. Express an IP address block as part of the target scope

D. Define a plugin family selection

ID: T04-Q05. Tema 04.

### 6. A hostname target resolves to an unexpected address. Which investigation is most relevant?

A. An agent reporting window

B. DNS resolution and whether the resolved address belongs to the intended scope

C. Dashboard ownership and report permissions

D. Finding severity recast criteria

ID: T04-Q06. Tema 04.

### 7. A discovery run observes 28 of 40 expected hosts. What is the defensible observed coverage rate?

A. 30% of hosts proven offline

B. 100% of reachable hosts assessed with credentials

C. 70% of vulnerabilities remediated

D. 70% of the expected hosts

ID: T04-Q07. Tema 04.

### 8. What explains why a passive monitor and an active discovery scan may produce different inventories?

A. Every difference proves an asset correlation failure

B. Active discovery and passive traffic share identical coverage

C. They obtain evidence through different observation methods and coverage

D. Passive discovery always has filesystem evidence

ID: T04-Q08. Tema 04.

### 9. Which statement best describes Safe Checks?

A. It disables checks that may adversely affect the remote host, while overall scan impact still needs review

B. It replaces credential privilege validation

C. It makes all active probing passive

D. It guarantees zero impact on every target

ID: T04-Q09. Tema 04.

### 10. A legacy device becomes unstable during probing. Which approach best supports safe coverage planning?

A. Keep the policy and treat missing results as safe

B. Review policy, exclusions and alternative evidence for that device

C. Use severity recast to prevent network probes

D. Increase concurrency before reviewing the device

ID: T04-Q10. Tema 04.

### 11. Why can a wider port range increase scan duration?

A. A wider range always bypasses filtered ports

B. It disables the need for service identification

C. More candidate services and network checks may need assessment

D. It reduces the candidate service surface

ID: T04-Q11. Tema 04.

### 12. A scanner sees one subnet but not another in its targets. Which evidence should be reviewed first?

A. Severity settings only

B. Risk acceptance criteria only

C. Audit result overrides only

D. Routing, firewall behavior, exclusions and actual target scope

ID: T04-Q12. Tema 04.

### 13. Which record best supports investigating a missing host?

A. Expected identity, segment, chosen sensor and discovery evidence

B. The final finding count without expected identities

C. A report severity summary without discovery evidence

D. A hostname alone without segment context

ID: T04-Q13. Tema 04.

### 14. Why is identifying a service useful beyond observing that a port is open?

A. It helps determine what is actually running and which checks are relevant

B. The open port number proves the exact version

C. Service identification proves full compliance

D. Service detection replaces all local checks

ID: T04-Q14. Tema 04.

### 15. The next discovery run finds fewer hosts after adding exclusions. What is the strongest interpretation?

A. All excluded findings must now be Fixed

B. Coverage changed and the excluded scope must be accounted for

C. The reduced count proves risk reduction

D. The removed hosts have been remediated

ID: T04-Q15. Tema 04.

### 16. After creating an initial discovery inventory, what best supports vulnerability assessment?

A. Assume discovery completed all patch checks

B. Treat discovered hosts as compliant

C. Select reachable targets and an appropriate assessment policy, then verify results

D. Accept findings without a vulnerability assessment

ID: T04-Q16. Tema 04.

### 17. A host that does not answer ICMP echo is necessarily offline.

A. True

B. False

ID: T04-Q17. Tema 04.

### 18. Host Discovery and a full vulnerability assessment have the same purpose and coverage.

A. True

B. False

ID: T04-Q18. Tema 04.

### 19. An omitted port can create a gap in service assessment.

A. True

B. False

ID: T04-Q19. Tema 04.

### 20. Observed asset counts are easier to interpret when the expected scope is recorded.

A. True

B. False

ID: T04-Q20. Tema 04.
