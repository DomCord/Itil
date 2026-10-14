# 02 Instalação e sensores

All option rationales are in English. The existing answer key is retained.

## 1. T02-Q01

What does Tenable Core provide in a Core + Nessus deployment?

**A. A replacement for the Nessus application — Not the keyed answer**

Core hosts and administers the appliance environment; Nessus remains the application that performs assessments.

**B. An operating system and appliance administration environment for Nessus — Answer key**

Tenable Core supplies the operating system and appliance administration layer on which Nessus runs.

**C. The vulnerability assessment engine itself — Not the keyed answer**

The Nessus application performs vulnerability checks. Core itself is not the assessment engine.

**D. The complete SaaS VM control plane — Not the keyed answer**

A local Core appliance is distinct from the VM SaaS control plane and does not provide that entire cloud service.

Sources: [Tenable Core + Nessus](https://docs.tenable.com/tenable-core/Nessus/Content/Introduction_Nessus.htm)

## 2. T02-Q02

Which default port is used by sensors to communicate with the standard VM cloud endpoint?

**A. TCP 22 — Not the keyed answer**

TCP 22 normally serves SSH administration or target authentication, not standard sensor-to-cloud HTTPS communication.

**B. TCP 443 — Answer key**

The standard VM cloud connection uses HTTPS over TCP 443 for sensor communication.

**C. TCP 8000 — Not the keyed answer**

TCP 8000 is associated with the default Core administration interface, not the standard cloud sensor endpoint.

**D. TCP 8835 — Not the keyed answer**

TCP 8835 is the default Network Monitor interface port, not the standard VM cloud communication port.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 3. T02-Q03

Which default port identifies the Nessus scanner web interface?

**A. TCP 8835 — Not the keyed answer**

TCP 8835 belongs to the default Network Monitor interface, so it identifies a different component.

**B. TCP 445 — Not the keyed answer**

TCP 445 is associated with SMB on Windows targets and is not the Nessus web console port.

**C. TCP 8000 — Not the keyed answer**

TCP 8000 is the default Core appliance administration port, not the Nessus application interface.

**D. TCP 8834 — Answer key**

The default Nessus scanner web interface listens on TCP 8834; customized deployments may change that setting.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 4. T02-Q04

An administrator opens the appliance administration interface on port 8000. Which component is being accessed?

**A. The Nessus scanner interface — Not the keyed answer**

The default Nessus web interface uses TCP 8834 rather than the Core administration port in the question.

**B. The Windows SMB interface — Not the keyed answer**

Windows SMB normally uses TCP 445; it is unrelated to this appliance administration interface.

**C. Tenable Core — Answer key**

TCP 8000 identifies the default Tenable Core administration interface used to manage the appliance environment.

**D. The Network Monitor interface — Not the keyed answer**

The default Network Monitor interface is on TCP 8835, not TCP 8000.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 5. T02-Q05

What is the primary purpose of a sensor linking key?

**A. Provide Windows target credentials — Not the keyed answer**

Windows target credentials authorize checks on a host; they do not associate a sensor with VM.

**B. Establish the initial association between a sensor and VM — Answer key**

A sensor linking key establishes the initial association between the sensor and its VM environment.

**C. Encrypt each report with a user password — Not the keyed answer**

Report encryption with a user password is a separate concern and is not the linking key's function.

**D. Authenticate user API requests — Not the keyed answer**

User API requests use user API credentials, which are distinct from a sensor linking key.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 6. T02-Q06

After successful linking, how does the sensor connect to VM according to the guide?

**A. The target SSH private key — Not the keyed answer**

An SSH key for a target authorizes host access; it is not the sensor's post-link cloud communication identity.

**B. Using unique credentials associated with the sensor — Answer key**

After linking, the sensor uses its own unique communication credentials rather than repeatedly sharing the initial linking key.

**C. The original linking key for every future request — Not the keyed answer**

The linking key bootstraps association; it is not the credential used for every subsequent sensor request.

**D. A VM user password shared by all sensors — Not the keyed answer**

Sharing a user's password across sensors is not the documented sensor-specific credential model.

Sources: [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 7. T02-Q07

A sensor installation completes, but linking fails behind a proxy. What should be investigated first?

**A. Target patch levels before linking — Not the keyed answer**

Target patch levels matter after collection starts; they cannot explain failure to establish the cloud link through a proxy.

**B. Endpoint resolution, proxy behavior and HTTPS/TLS connectivity — Answer key**

DNS resolution, proxy configuration and HTTPS/TLS reachability directly affect whether the sensor can contact the correct VM endpoint.

**C. The scope of an Accept rule — Not the keyed answer**

An Accept rule handles existing findings and does not control sensor registration through a proxy.

**D. Finding severity configuration — Not the keyed answer**

Severity configuration classifies findings; it does not establish network connectivity or TLS communication for linking.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 8. T02-Q08

Why can complex credentialed scans require more resources than a small discovery pilot?

**A. Credentialed scans require less processing in every workload — Not the keyed answer**

Authenticated checks can add processing and inventory work; they are not universally cheaper than discovery.

**B. Hardware depends only on host count — Not the keyed answer**

Host count alone ignores the complexity, concurrency and evidence volume of the configured checks.

**C. Only passive monitors require local storage — Not the keyed answer**

Active scanners also retain results, logs and plugin data, so storage requirements are not exclusive to passive monitors.

**D. The checks may consume additional processing, memory and storage — Answer key**

More complex checks can require extra CPU, memory and storage compared with a small discovery-only workload.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

## 9. T02-Q09

A scanner gradually runs out of disk space although the target count is stable. Which factor deserves review?

**A. Growth of logs, scan results and plugin-related data — Answer key**

Logs, retained scan results and plugin-related data can grow over time even when the target count remains unchanged.

**B. The number of configured user roles — Not the keyed answer**

User role count is not the primary explanation for expanding local scanner result and log storage.

**C. License usage alone — Not the keyed answer**

License usage measures licensed assessment scope; it does not account for all data consuming the scanner's disk.

**D. The selected severity metric — Not the keyed answer**

Changing a severity metric is not the relevant explanation for accumulating local logs, results and plugin data.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

## 10. T02-Q10

Which command best supports checking an installed agent without resetting it?

**A. Reinstall the agent before reviewing its state — Not the keyed answer**

Reinstallation changes the environment before collecting diagnostic evidence and can obscure the original failure.

**B. nessuscli agent link without inspecting status — Not the keyed answer**

A link command attempts association; it is not the appropriate first observation of an already installed agent's state.

**C. nessuscli agent status — Answer key**

The agent status command reports operational and linking information without deliberately resetting or unlinking the agent.

**D. nessuscli agent unlink — Not the keyed answer**

Unlinking removes the association and changes the state being investigated instead of simply inspecting it.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 11. T02-Q11

An agent group exists as "Lab-Windows", but the linking command uses "lab-windows". What should be checked?

**A. The network name overrides the agent group name — Not the keyed answer**

Network context and agent group membership are different settings; a network name does not correct a misspelled group name.

**B. The group name is always case-insensitive — Not the keyed answer**

The documented CLI group name matching is case-sensitive, so assuming case-insensitive matching can cause an error.

**C. Exact case-sensitive matching of the existing agent group name — Answer key**

Using the existing group's exact spelling and case avoids mismatching Lab-Windows with lab-windows.

**D. The scan window corrects the name automatically — Not the keyed answer**

A reporting window controls scan timing; it does not repair an incorrect group name in a linking command.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 12. T02-Q12

What traffic feed is appropriate for a passive Network Monitor?

**A. Only traffic to the monitor web interface — Not the keyed answer**

Management-interface traffic is not a feed of the monitored network conversations needed for passive analysis.

**B. A SPAN port or network TAP with a bidirectional view — Answer key**

A properly configured SPAN or TAP feed supplies both directions of relevant network conversations for passive analysis.

**C. Only a unidirectional feed of requests — Not the keyed answer**

A request-only feed omits responses and can prevent complete interpretation of the communication.

**D. Only traffic generated by an active scanner — Not the keyed answer**

Scanner-generated traffic is only a subset of network activity and is not a substitute for the required monitoring feed.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 13. T02-Q13

Which standard endpoint and port match a modern agent linked directly to VM?

**A. The scanner interface on TCP 8834 — Not the keyed answer**

TCP 8834 accesses a Nessus scanner interface; it is not the documented standard direct-to-VM cloud endpoint.

**B. Tenable Core on TCP 8000 — Not the keyed answer**

Core on TCP 8000 is an appliance management interface, not the agent's VM cloud destination.

**C. sensor.cloud.tenable.com:443 — Answer key**

The standard modern direct-to-VM agent endpoint is sensor.cloud.tenable.com over TCP 443; environment-specific exceptions must be checked.

**D. The target host on TCP 445 — Not the keyed answer**

TCP 445 addresses SMB services on a target and does not link an agent to the VM management service.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm)

## 14. T02-Q14

Why should a linking procedure explicitly identify its deployment environment?

**A. All deployments use one endpoint without exceptions — Not the keyed answer**

Documented regional and FedRAMP variations mean a single endpoint cannot be assumed for every deployment.

**B. The endpoint is determined by host CVSS — Not the keyed answer**

A vulnerability's CVSS score does not select the agent's management endpoint.

**C. A regional deployment uses the target IP as manager — Not the keyed answer**

A target's IP address identifies an assessed host, not the regional cloud manager used for linking.

**D. FedRAMP and regional deployments can require different documented endpoints — Answer key**

The linking destination and options must match the documented deployment environment, including regional or FedRAMP differences.

Sources: [Agent CLI](https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm), [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 15. T02-Q15

Which evidence best confirms that an installed scanner has been integrated?

**A. The host can reach an unrelated HTTPS site — Not the keyed answer**

Reaching an unrelated HTTPS service does not prove access to the required VM endpoint or successful scanner linkage.

**B. The expected sensor appears linked and can communicate and run an authorized test scan — Answer key**

A linked sensor that communicates and completes an authorized test assessment provides evidence of integration beyond installation.

**C. The installer exists and its checksum is valid — Not the keyed answer**

A valid installer checksum verifies the installation package, not the deployed sensor's cloud communication and assessment workflow.

**D. The local service is running without communication evidence — Not the keyed answer**

A running local service may still have a failed link or blocked communication, so it is insufficient on its own.

Sources: [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm), [Get Started](https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm)

## 16. T02-Q16

A scanner VM has sufficient nominal memory but is heavily CPU oversubscribed. What is the best response?

**A. Review actual resource availability and scan performance under the planned workload — Answer key**

Checking effective CPU availability and observed performance under the planned workload addresses the stated oversubscription problem.

**B. Nominal CPU allocation guarantees performance — Not the keyed answer**

Nominal vCPU allocation does not guarantee physical scheduling capacity on an oversubscribed virtualization host.

**C. Suppress slow findings instead of reviewing resources — Not the keyed answer**

Suppressing findings hides assessment output; it does not repair scanner resource contention.

**D. Memory allocation alone proves adequate capacity — Not the keyed answer**

Adequate memory cannot establish adequate CPU capacity when the virtualization host is heavily oversubscribed.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)

## 17. T02-Q17

The default Core and Nessus web interfaces use the same port.

**A. True — Not the keyed answer**

The standard ports differ: Core uses TCP 8000 and Nessus uses TCP 8834 for their web interfaces.

**B. False — Answer key**

The statement conflates two separate administration interfaces with distinct default listening ports.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm)

## 18. T02-Q18

The agent linking key and a user API key pair serve the same purpose.

**A. True — Not the keyed answer**

A linking key bootstraps sensor association, whereas a user's access/secret API key pair authenticates API operations.

**B. False — Answer key**

These credential types serve different identities and operations and should not be treated as interchangeable.

Sources: [Sensor Security](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm), [Manage Sensors](https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm)

## 19. T02-Q19

A passive monitor may need time and observed traffic to identify some host attributes.

**A. True — Answer key**

Passive attributes are inferred from observed conversations, so some details require relevant traffic and observation time.

**B. False — Not the keyed answer**

The monitor does not instantly obtain every host attribute independently of the traffic it can see.

Sources: [Tenable Network Monitor](https://docs.tenable.com/network-monitor/Content/Welcome.htm)

## 20. T02-Q20

Hardware requirements should be interpreted in the context of workload and scan configuration.

**A. True — Answer key**

Check complexity, concurrency and evidence volume affect resource consumption, so sizing must reflect the actual workload.

**B. False — Not the keyed answer**

A fixed hardware assumption that ignores policy and workload can leave a deployment under-resourced.

Sources: [Hardware Requirements](https://docs.tenable.com/nessus/Content/HardwareRequirements.htm)
