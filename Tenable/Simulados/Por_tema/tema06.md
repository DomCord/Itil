# 06 Agents e cobertura móvel

20 questões autorais em inglês. Tempo: 40 minutos. Data: 09/10/2026. Uma resposta por item. Todos os itens valem um ponto. Não usar o gabarito durante a tentativa.

A/B são seleções sem itens em comum entre si, retiradas do banco temático. A distribuição por módulo é didática e não reproduz um blueprint detalhado oficial. A revisão de reserva não repete os itens A/B, mas seus itens estão nos simulados temáticos.

### 1. Where does a Tenable Agent perform its local vulnerability checks?

A. On the manager appliance for all local checks

B. On the host where the agent is installed

C. On the linked network scanner for all local checks

D. On the cloud scanner for all local checks

ID: T06-Q01. Tema 06.

### 2. An agent appears in the linked list. What still needs verification?

A. Installed service proves current platform communication

B. Linkage proves all relevant checks and uploads succeeded

C. Whether it communicated, executed relevant checks and uploaded results

D. Current tag membership proves a completed agent scan

ID: T06-Q02. Tema 06.

### 3. What is the role of an agent group in an agent scan configuration?

A. Change the severity metric on each host

B. Organize the agents intended to participate in the scan

C. Define a routed network for remote service scanning

D. Apply user permissions to every finding

ID: T06-Q03. Tema 06.

### 4. What does a scan window define for an agent group?

A. A timeframe in which the group must report for inclusion in the scan results

B. A vulnerability remediation deadline

C. A guarantee that linked agents stay online

D. The local operating-system uptime interval

ID: T06-Q04. Tema 06.

### 5. Which mechanism can launch a triggered agent scan?

A. Only a manually launched platform window scan

B. An interval, a trigger file or a documented nessuscli command

C. Only a scanner-group task assignment

D. Only a dashboard refresh

ID: T06-Q05. Tema 06.

### 6. A mobile workforce frequently misses fixed scan windows. Which approach deserves consideration?

A. Shorten the fixed window without reviewing participation

B. Use a cloud scanner with no route to the notebooks

C. Triggered scans matched to endpoint availability and workflow

D. Accept risks of hosts missing the window

ID: T06-Q06. Tema 06.

### 7. Which command helps observe linkage and communication status of an agent?

A. nessuscli agent status

B. nessuscli agent unlink

C. An ICMP check against another notebook

D. A cloud report export command

ID: T06-Q07. Tema 06.

### 8. What must still work for locally collected results to reach VM?

A. Inbound scanner connectivity to every laptop

B. Communication from the agent to the documented manager endpoint

C. Successful upload without any manager communication

D. A passive traffic feed to the agent

ID: T06-Q08. Tema 06.

### 9. Which need can remain after deploying agents to all laptops?

A. Every network scan becomes redundant

B. Assessment of how network services are exposed to remote scanners

C. Every remote service is guaranteed reachable

D. Remote exposure is fully proven by local checks

ID: T06-Q09. Tema 06.

### 10. According to the triggered scan guide, how are triggered-scan vulnerability data exported?

A. Individual exports identical to window scan results

B. Through the bulk vulnerability export API

C. Only export of agent group membership

D. A report card with no vulnerability data export

ID: T06-Q10. Tema 06.

### 11. Which status detail can help investigate an agent that reports unexpectedly limited checks?

A. Agent group name alone

B. Only the host business criticality score

C. The user role that opens the dashboard

D. The current plugin set and scan information

ID: T06-Q11. Tema 06.

### 12. A VM release dated October 6, 2026 describes an agent health change. What is the stated condition for Offline?

A. No check-in for 72 hours or more

B. No check-in for seven days

C. No scan findings after a completed upload

D. No check-in for 24 hours

ID: T06-Q12. Tema 06.

### 13. An agent is offline for the entire reporting window. What should be investigated?

A. The host has been technically remediated

B. The endpoint has Passed every audit

C. A participation gap in that window and options for future coverage

D. The platform guarantees results in the same window

ID: T06-Q13. Tema 06.

### 14. Which command pattern launches an existing triggered scan by UUID?

A. nessuscli agent unlink

B. nessuscli scan-triggers --start --UUID=<scan-uuid>

C. nessuscli agent link

D. nessuscli agent status

ID: T06-Q14. Tema 06.

### 15. An agent service runs but Last connect is old and results are missing. What is the next useful investigation?

A. Only the finding severity metric

B. Only the group display name

C. Only the local service running state

D. Endpoint reachability, proxy/TLS behavior and linkage status

ID: T06-Q15. Tema 06.

### 16. A newly documented agent feature is absent in the study environment. What should be checked?

A. Version, configuration and availability requirements in current documentation

B. Assume a release announcement changes all old installations

C. Assume every linked agent supports every new feature

D. Use successful linkage as proof of feature availability

ID: T06-Q16. Tema 06.

### 17. A scan window guarantees that every linked agent will report successfully.

A. True

B. False

ID: T06-Q17. Tema 06.

### 18. Triggered scans can be initiated by agent-side triggers without a separate window launch by a user.

A. True

B. False

ID: T06-Q18. Tema 06.

### 19. Agents and active network scanners always provide identical assessment perspectives.

A. True

B. False

ID: T06-Q19. Tema 06.

### 20. Installed, linked, scanned and uploaded are distinct checkpoints when investigating an agent.

A. True

B. False

ID: T06-Q20. Tema 06.
