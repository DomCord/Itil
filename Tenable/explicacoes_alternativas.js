const TenableOptionExplanations = {
  "T01-Q01": [
    "Nessus Professional manages its own standalone scans; it is not the central cloud control plane for this deployment.",
    "The Agent CLI administers an individual sensor. It does not aggregate the organization's vulnerability data.",
    "Tenable Vulnerability Management centrally stores findings and coordinates the cloud-based assessment workflow.",
    "Tenable Core supplies the appliance operating environment. It does not replace the VM cloud management service."
  ],
  "T01-Q02": [
    "Local agent checks inspect the laptop itself; they do not reproduce an external observer's view of public services.",
    "A scanner without an external route cannot test the publicly reachable attack surface from that perspective.",
    "A reachable cloud scanner can probe the public targets from outside the organization's network, matching the assessment objective.",
    "Internal passive traffic provides a different observation point and cannot establish how services appear to an external scanner."
  ],
  "T01-Q03": [
    "Linking does not create a network route. This scanner still cannot contact the intended internal targets.",
    "Host Discovery also requires connectivity to its targets; choosing the template cannot overcome the missing route.",
    "A linked Nessus scanner with subnet connectivity can perform active probes against the otherwise internet-inaccessible targets.",
    "A cloud scanner without a route remains unable to reach this private subnet, regardless of its scanning capabilities."
  ],
  "T01-Q04": [
    "Network Monitor derives observations from existing network traffic instead of initiating a full active probe sequence against each host.",
    "SSH-authenticated scanning actively connects to target hosts to run checks; authentication does not make it passive.",
    "Active service detection sends probes to identify services, unlike observing traffic already present on the network.",
    "SYN probes initiate network interactions with targets, so this describes active scanning rather than passive monitoring."
  ],
  "T01-Q05": [
    "A monitor on an unused segment sees no relevant laptop traffic and therefore does not solve this coverage gap.",
    "A cloud scanner still needs connectivity to the laptop. Without a route, its placement adds no local assessment evidence.",
    "An installed agent can run checks locally when the mobile laptop is unreachable by the internal scanner; linkage and reporting must also work.",
    "Extending scan duration cannot compensate for an unreachable host. A different collection method is needed."
  ],
  "T01-Q06": [
    "License capacity limits assessment scale but does not reveal where scanners can reach the intended targets.",
    "Finding counts describe existing results, not the routing and segmentation needed to place new scanners effectively.",
    "Topology, reachability and expected coverage identify the observation points needed to assess each target segment.",
    "Report severity configuration changes how findings are classified; it does not determine scanner network access."
  ],
  "T01-Q07": [
    "Fewer findings alone may indicate fewer assets or checks were assessed. Comparable collection coverage must be established first.",
    "An asset disappearing from collection is not proof that its vulnerabilities were corrected.",
    "A VPR average over the remaining visible findings omits potentially unassessed assets and cannot establish equal coverage.",
    "Confirming the same expected assets and checks were assessed distinguishes a collection gap from a genuine reduction in detected risk."
  ],
  "T01-Q08": [
    "Accepting a linking key proves an association step, not successful assessment of the expected assets.",
    "A running service confirms local installation but not target reachability, check execution or usable results.",
    "Reaching the sample assets and obtaining usable evidence directly tests whether the planned assessment workflow delivers its intended outcome.",
    "A completed scan can still have missed targets or failed checks. Completion without a coverage review is weaker evidence."
  ],
  "T01-Q09": [
    "A shared network context would leave identical private IPs ambiguous instead of separating the two environments.",
    "Tags support organization and filtering, but they do not replace the sensor network context used to disambiguate overlapping addresses.",
    "Separate Networks supply environment context for assets that reuse an IP address, preventing IP-only correlation across branches.",
    "Risk acceptance concerns existing findings; it is not an asset identity or network correlation mechanism."
  ],
  "T01-Q10": [
    "Many hosts expose the same port, so an open port is not a unique asset identifier.",
    "DHCP reassignment, address changes and reused private ranges make an IP address an unreliable permanent identity by itself.",
    "Matching addresses can belong to different environments; removing network context increases the risk of incorrect correlation.",
    "Changing or overlapping addresses require additional identity and environment context to track the correct asset."
  ],
  "T01-Q11": [
    "A lack of observed traffic says nothing about whether local authenticated checks completed successfully.",
    "Passive discovery depends on traffic reaching the monitor. A powered-on but silent host can therefore remain unobserved.",
    "The question states that the host is powered on; the monitor's absence of evidence cannot establish physical absence.",
    "A silent host may still expose services. Passive non-observation does not demonstrate that its service surface is empty."
  ],
  "T01-Q12": [
    "Host Discovery locates hosts and collects available inventory details to guide later assessment planning.",
    "Benchmark compliance requires relevant audit checks and evidence, which discovery alone does not provide.",
    "Discovering a host is not equivalent to collecting its authenticated patch inventory and running all patch checks.",
    "Technical remediation requires assessment evidence showing that a previously detected issue is no longer present."
  ],
  "T01-Q13": [
    "Reports cannot create missing assessment data; first verify that scans collect usable evidence.",
    "Running appropriate scans and comparing their results with expected coverage tests whether the installed sensors actually assess the intended environment.",
    "Risk acceptance changes how known findings are handled; it cannot generate scan evidence that was never collected.",
    "Linkage confirms association with VM but does not prove that an assessment was configured, executed and reported successfully."
  ],
  "T01-Q14": [
    "Network scans do not eliminate the value of local software, patch and configuration evidence.",
    "An agent's local checks do not automatically establish how services appear from an external network vantage point.",
    "Agents run on the host, so their evidence is not simply a duplicate of remote service exposure checks.",
    "Combining local host checks with network-based service assessment covers distinct and complementary aspects of an asset."
  ],
  "T01-Q15": [
    "Discovering a host does not establish that vulnerability assessment checks have been performed on it.",
    "The documented discovery licensing treatment is not restricted to public IP targets.",
    "Assets identified by discovery scans are excluded from the assessment license count; later assessment must be considered separately.",
    "The discovery exemption does not grant a permanent exemption for subsequent vulnerability assessment of the asset."
  ],
  "T01-Q16": [
    "Security Center and VM have different deployment models and administration menus; the terms are not automatically interchangeable.",
    "Repository rules may be specific to Security Center. Applying them to VM without validation risks studying the wrong behavior.",
    "On-premises repository administration is not a substitute for the VM course and written-exam scope.",
    "Checking VM documentation separates shared vulnerability-management concepts from product-specific repository rules."
  ],
  "T01-Q17": [
    "Local agent evidence does not automatically reproduce remote routing, firewall exposure or the scanner's view of services.",
    "The statement overclaims agent coverage. Remote exposure and local host assessment require different observation perspectives."
  ],
  "T01-Q18": [
    "Comparing observed assets with the expected scope exposes missing targets and tests whether the pilot achieved the planned coverage.",
    "Without the expected denominator, a pilot can appear successful even though required assets were never assessed."
  ],
  "T01-Q19": [
    "The full Specialist certification requires the written and practical stages; passing the written stage alone is insufficient.",
    "The statement omits the practical requirement documented for the complete certification."
  ],
  "T01-Q20": [
    "A passive monitor can only infer asset information from the traffic available at its observation point.",
    "Passive discovery is constrained by traffic visibility; powered-on hosts outside that view may not appear in its inventory."
  ],
  "T02-Q01": [
    "Core hosts and administers the appliance environment; Nessus remains the application that performs assessments.",
    "Tenable Core supplies the operating system and appliance administration layer on which Nessus runs.",
    "The Nessus application performs vulnerability checks. Core itself is not the assessment engine.",
    "A local Core appliance is distinct from the VM SaaS control plane and does not provide that entire cloud service."
  ],
  "T02-Q02": [
    "TCP 22 normally serves SSH administration or target authentication, not standard sensor-to-cloud HTTPS communication.",
    "The standard VM cloud connection uses HTTPS over TCP 443 for sensor communication.",
    "TCP 8000 is associated with the default Core administration interface, not the standard cloud sensor endpoint.",
    "TCP 8835 is the default Network Monitor interface port, not the standard VM cloud communication port."
  ],
  "T02-Q03": [
    "TCP 8835 belongs to the default Network Monitor interface, so it identifies a different component.",
    "TCP 445 is associated with SMB on Windows targets and is not the Nessus web console port.",
    "TCP 8000 is the default Core appliance administration port, not the Nessus application interface.",
    "The default Nessus scanner web interface listens on TCP 8834; customized deployments may change that setting."
  ],
  "T02-Q04": [
    "The default Nessus web interface uses TCP 8834 rather than the Core administration port in the question.",
    "Windows SMB normally uses TCP 445; it is unrelated to this appliance administration interface.",
    "TCP 8000 identifies the default Tenable Core administration interface used to manage the appliance environment.",
    "The default Network Monitor interface is on TCP 8835, not TCP 8000."
  ],
  "T02-Q05": [
    "Windows target credentials authorize checks on a host; they do not associate a sensor with VM.",
    "A sensor linking key establishes the initial association between the sensor and its VM environment.",
    "Report encryption with a user password is a separate concern and is not the linking key's function.",
    "User API requests use user API credentials, which are distinct from a sensor linking key."
  ],
  "T02-Q06": [
    "An SSH key for a target authorizes host access; it is not the sensor's post-link cloud communication identity.",
    "After linking, the sensor uses its own unique communication credentials rather than repeatedly sharing the initial linking key.",
    "The linking key bootstraps association; it is not the credential used for every subsequent sensor request.",
    "Sharing a user's password across sensors is not the documented sensor-specific credential model."
  ],
  "T02-Q07": [
    "Target patch levels matter after collection starts; they cannot explain failure to establish the cloud link through a proxy.",
    "DNS resolution, proxy configuration and HTTPS/TLS reachability directly affect whether the sensor can contact the correct VM endpoint.",
    "An Accept rule handles existing findings and does not control sensor registration through a proxy.",
    "Severity configuration classifies findings; it does not establish network connectivity or TLS communication for linking."
  ],
  "T02-Q08": [
    "Authenticated checks can add processing and inventory work; they are not universally cheaper than discovery.",
    "Host count alone ignores the complexity, concurrency and evidence volume of the configured checks.",
    "Active scanners also retain results, logs and plugin data, so storage requirements are not exclusive to passive monitors.",
    "More complex checks can require extra CPU, memory and storage compared with a small discovery-only workload."
  ],
  "T02-Q09": [
    "Logs, retained scan results and plugin-related data can grow over time even when the target count remains unchanged.",
    "User role count is not the primary explanation for expanding local scanner result and log storage.",
    "License usage measures licensed assessment scope; it does not account for all data consuming the scanner's disk.",
    "Changing a severity metric is not the relevant explanation for accumulating local logs, results and plugin data."
  ],
  "T02-Q10": [
    "Reinstallation changes the environment before collecting diagnostic evidence and can obscure the original failure.",
    "A link command attempts association; it is not the appropriate first observation of an already installed agent's state.",
    "The agent status command reports operational and linking information without deliberately resetting or unlinking the agent.",
    "Unlinking removes the association and changes the state being investigated instead of simply inspecting it."
  ],
  "T02-Q11": [
    "Network context and agent group membership are different settings; a network name does not correct a misspelled group name.",
    "The documented CLI group name matching is case-sensitive, so assuming case-insensitive matching can cause an error.",
    "Using the existing group's exact spelling and case avoids mismatching Lab-Windows with lab-windows.",
    "A reporting window controls scan timing; it does not repair an incorrect group name in a linking command."
  ],
  "T02-Q12": [
    "Management-interface traffic is not a feed of the monitored network conversations needed for passive analysis.",
    "A properly configured SPAN or TAP feed supplies both directions of relevant network conversations for passive analysis.",
    "A request-only feed omits responses and can prevent complete interpretation of the communication.",
    "Scanner-generated traffic is only a subset of network activity and is not a substitute for the required monitoring feed."
  ],
  "T02-Q13": [
    "TCP 8834 accesses a Nessus scanner interface; it is not the documented standard direct-to-VM cloud endpoint.",
    "Core on TCP 8000 is an appliance management interface, not the agent's VM cloud destination.",
    "The standard modern direct-to-VM agent endpoint is sensor.cloud.tenable.com over TCP 443; environment-specific exceptions must be checked.",
    "TCP 445 addresses SMB services on a target and does not link an agent to the VM management service."
  ],
  "T02-Q14": [
    "Documented regional and FedRAMP variations mean a single endpoint cannot be assumed for every deployment.",
    "A vulnerability's CVSS score does not select the agent's management endpoint.",
    "A target's IP address identifies an assessed host, not the regional cloud manager used for linking.",
    "The linking destination and options must match the documented deployment environment, including regional or FedRAMP differences."
  ],
  "T02-Q15": [
    "Reaching an unrelated HTTPS service does not prove access to the required VM endpoint or successful scanner linkage.",
    "A linked sensor that communicates and completes an authorized test assessment provides evidence of integration beyond installation.",
    "A valid installer checksum verifies the installation package, not the deployed sensor's cloud communication and assessment workflow.",
    "A running local service may still have a failed link or blocked communication, so it is insufficient on its own."
  ],
  "T02-Q16": [
    "Checking effective CPU availability and observed performance under the planned workload addresses the stated oversubscription problem.",
    "Nominal vCPU allocation does not guarantee physical scheduling capacity on an oversubscribed virtualization host.",
    "Suppressing findings hides assessment output; it does not repair scanner resource contention.",
    "Adequate memory cannot establish adequate CPU capacity when the virtualization host is heavily oversubscribed."
  ],
  "T02-Q17": [
    "The standard ports differ: Core uses TCP 8000 and Nessus uses TCP 8834 for their web interfaces.",
    "The statement conflates two separate administration interfaces with distinct default listening ports."
  ],
  "T02-Q18": [
    "A linking key bootstraps sensor association, whereas a user's access/secret API key pair authenticates API operations.",
    "These credential types serve different identities and operations and should not be treated as interchangeable."
  ],
  "T02-Q19": [
    "Passive attributes are inferred from observed conversations, so some details require relevant traffic and observation time.",
    "The monitor does not instantly obtain every host attribute independently of the traffic it can see."
  ],
  "T02-Q20": [
    "Check complexity, concurrency and evidence volume affect resource consumption, so sizing must reflect the actual workload.",
    "A fixed hardware assumption that ignores policy and workload can leave a deployment under-resourced."
  ],
  "T03-Q01": [
    "A role's allowed actions do not, by themselves, establish the intended branch-specific resource scope.",
    "This reverses the distinction: roles govern privileges, while permissions and resource scope determine accessible data.",
    "Severity classification is a separate setting; it does not define the roles-versus-permissions access model.",
    "Roles specify permitted actions, while resource permissions constrain the data and resources on which those actions can operate."
  ],
  "T03-Q02": [
    "Branch-specific resource permissions, often organized through asset tags, constrain the user's data scope while retaining needed scan privileges.",
    "Administrator access expands privileges and resource visibility rather than enforcing branch-only access.",
    "A shared account prevents individual responsibility and does not independently enforce each user's branch scope.",
    "A dashboard filter changes a view; it is not an authorization boundary preventing access to other assets."
  ],
  "T03-Q03": [
    "This mixes environment, port and unrelated concepts into a four-part string rather than a tag category/value pair.",
    "Environment is the category and Production is its value, matching the Category:Value representation.",
    "Role and scanner assignment are different concepts; this string is not the documented category/value tag representation.",
    "A plugin identifier is not a third component of the Category:Value asset tag format."
  ],
  "T03-Q04": [
    "Manual assignment describes a manual tag, not rule-driven automatic membership.",
    "An automatic tag applies when an asset satisfies its configured matching rules.",
    "The viewer's user role controls access; it does not determine whether an asset satisfies tag criteria.",
    "Scanner group membership alone is not the universal rule for automatic tags; the configured asset criteria control matching."
  ],
  "T03-Q05": [
    "Exclusion rules restrict scanning; they do not provide the missing network identity context for overlapping IPs.",
    "An agent group organizes agents and does not substitute for a scanner's Network association.",
    "An address can refer to different hosts in different environments, so IP-only correlation is not guaranteed.",
    "Without the correct Network context, overlapping addresses can be correlated incorrectly or produce inconsistent asset records."
  ],
  "T03-Q06": [
    "The Network association is assigned to the scanner or group, not separately to each open service.",
    "A scanner or scanner group can belong to one Network at a time, as documented for VM Networks.",
    "Plugin family selection configures checks; it does not create per-family Network memberships.",
    "Overlapping ranges motivate separate Networks, but they do not allow one scanner group to have multiple simultaneous Network memberships."
  ],
  "T03-Q07": [
    "Any scanner receiving distributed tasks must have the required connectivity; otherwise part of the assigned scope can go unassessed.",
    "Different Network contexts are not a substitute for checking target reachability and can conflict with the intended environment separation.",
    "A descriptive group name does not establish routing, firewall access or connectivity to the subnet.",
    "One reachable scanner is insufficient if tasks can also be sent to other group members that cannot reach the targets."
  ],
  "T03-Q08": [
    "The documented model distributes scan tasks according to capacity rather than always assigning complete scans to the oldest sensor.",
    "Task distribution uses available scanner capacity and workload to spread assessment work across a group.",
    "Credentials support target access, but the group also distributes assessment tasks rather than only credentials.",
    "A permanent one-asset/one-scanner allocation is not the capacity-based task distribution described in the question."
  ],
  "T03-Q09": [
    "A skipped target has not supplied remediation evidence; exclusion does not justify marking its findings Fixed.",
    "An active network scan exclusion takes precedence for an excluded target even when the target is explicitly listed in a new scan.",
    "An exclusion prevents the relevant assessment; hiding already collected findings describes a different operation.",
    "Explicitly listing an IP does not override the active exclusion protecting that target from the new network scan."
  ],
  "T03-Q10": [
    "Linked Nessus network scans are within the network-assessment context covered by scan exclusions.",
    "An excluded IP in a network scan is exactly the kind of target affected by an active network exclusion.",
    "Cloud scanners still perform network assessments, so they are not the local-agent exception requested here.",
    "Tenable Agent scans run locally and are outside the documented scope of network scan exclusions."
  ],
  "T03-Q11": [
    "The documented scheduled exclusion applies to scans beginning during its effective window; it does not interrupt a scan already running.",
    "Risk acceptance handles existing findings and is unrelated to the start-time behavior of a scheduled scan exclusion.",
    "Opening an exclusion window does not delete historical results from previous or current assessment activity.",
    "The guide does not describe the new scheduled window as an immediate cancellation mechanism for every running task."
  ],
  "T03-Q12": [
    "General Settings currently documents VPR as the default instance severity metric; verify the actual tenant setting before relying on that default.",
    "ACR rates an asset's business criticality, not an individual vulnerability's severity.",
    "CVSSv2 is configurable but is not the stated current default, and the setting offers alternative metrics.",
    "CVSSv3 is an available choice, but the assertion that it is the only option contradicts the documented metric selection."
  ],
  "T03-Q13": [
    "Older findings can remain visible; visibility is not limited to findings collected by scans after the setting change.",
    "New or re-observed findings adopt the new metric, while findings not re-detected retain their previous severity until updated.",
    "Changing severity calculation does not delete the older finding or its historical evidence.",
    "The documentation explicitly allows previously observed findings to retain old severity until re-observation, so the update is not universal and immediate."
  ],
  "T03-Q14": [
    "SLA Progress has separate severity and age settings, so its calculation must be reviewed independently of general finding severity.",
    "The general Severity setting does not automatically override the SLA Progress widget's separately configured metric.",
    "A sensor linking key establishes association and does not define SLA calculation values.",
    "General Settings provides SLA-specific configuration, contradicting the claim that the widget cannot have its own settings."
  ],
  "T03-Q15": [
    "Testing with the intended user's identity verifies both permitted actions and the actual data scope enforced by authorization.",
    "An administrator's filtered report does not test what the branch analyst is authorized to access elsewhere.",
    "A scan under an administrator account exercises broader privileges and cannot validate the proposed restricted user's access.",
    "Naming a tag after a user does not prove that the tag's resource permissions have been applied correctly."
  ],
  "T03-Q16": [
    "An asset tag groups resources; it does not grant missing functional privileges by itself.",
    "Scanner groups organize assessment sensors and do not supply a user's missing application privileges.",
    "Custom roles let administrators select the privilege combination required for the user's operational responsibilities.",
    "VM documents custom roles, so claiming that custom privilege combinations are unsupported is incorrect."
  ],
  "T03-Q17": [
    "Rule-driven membership can change when an asset begins or ceases to match the relevant criteria.",
    "Automatic membership is not inherently frozen after initial assignment; changes in matching attributes can alter the resulting set."
  ],
  "T03-Q18": [
    "The documented Network membership limit is one Network at a time for a scanner group.",
    "The statement conflicts with the single-Network membership limit; overlapping environments require an appropriate separate sensor arrangement."
  ],
  "T03-Q19": [
    "An exclusion changes whether targets are assessed; accepting risk changes the handling of already detected findings.",
    "The two operations have different purposes and effects, so excluding a target is not equivalent to accepting a finding's risk."
  ],
  "T03-Q20": [
    "Functional privileges and branch-specific data visibility are separate access-design requirements that must both be validated.",
    "A broad role can allow required actions without establishing the required branch-only resource scope."
  ],
  "T04-Q01": [
    "Compliance auditing compares configurations with benchmark requirements rather than serving as the initial host inventory template.",
    "A tactical scan investigates a particular vulnerability and is not the general host discovery workflow.",
    "Host Discovery identifies live hosts and available inventory attributes to support subsequent assessment planning.",
    "Credentialed Patch Audit focuses on missing patches using host access rather than initial host discovery."
  ],
  "T04-Q02": [
    "A blocked echo response can occur on a powered-on host, so it does not establish that the host is offline.",
    "ICMP filtering does not prove that the host lacks reachable TCP services.",
    "A missing ICMP reply says nothing conclusive about whether a DNS record was deleted.",
    "Use other discovery methods or corroborating evidence because an active host can block ICMP echo replies."
  ],
  "T04-Q03": [
    "TCP probes can traverse routers when permitted and do not inherently depend on local layer-2 adjacency.",
    "ICMP echo can also follow routed paths, so it is not the specifically local layer-2 discovery method.",
    "DNS resolves names to addresses; it does not provide the local Ethernet neighbor evidence requested here.",
    "ARP resolves local layer-2 neighbors and is normally constrained to the scanner's relevant broadcast domain."
  ],
  "T04-Q04": [
    "A report filter cannot recover a service that was never probed because its port was outside the assessment scope.",
    "Including TCP 8443 in the relevant port and service-discovery configuration is necessary to assess the HTTPS service described.",
    "Recasting changes a finding's displayed severity; it does not add omitted ports to discovery.",
    "Risk acceptance handles collected findings and cannot restore missing service-assessment coverage."
  ],
  "T04-Q05": [
    "A benchmark version belongs to compliance configuration and is not specified by an IP prefix.",
    "A severity threshold filters or classifies risk and is unrelated to address block notation.",
    "CIDR expresses an IP prefix and therefore identifies the address block included in the assessment scope.",
    "Plugin families select checks; CIDR selects address scope rather than which checks execute."
  ],
  "T04-Q06": [
    "An agent window controls local assessment timing and does not explain a hostname resolving to the wrong target IP.",
    "Name resolution determines the address actually contacted, so verify DNS and whether the resolved address is inside the intended scope.",
    "Report access and dashboard ownership do not control the scanner's DNS resolution for a hostname target.",
    "Recast criteria alter finding severity and cannot redirect the scan to the intended host."
  ],
  "T04-Q07": [
    "Twelve unobserved hosts represent 30% of the expected scope, but non-observation does not prove those hosts were offline.",
    "Discovery evidence for 28 hosts cannot establish full credentialed assessment coverage for all 40.",
    "The ratio measures observed host coverage, not the percentage of vulnerabilities remediated.",
    "Dividing 28 observed hosts by 40 expected hosts gives 70% observed coverage of the planned inventory."
  ],
  "T04-Q08": [
    "Different collection perspectives can legitimately produce different inventories; not every discrepancy proves correlation failure.",
    "Active probing and passive traffic observation do not have identical reachability and visibility constraints.",
    "Active discovery sends probes, while passive monitoring relies on visible traffic; those different evidence paths explain inventory differences.",
    "Passive monitoring does not inherently obtain local filesystem evidence, so this is not a general explanation for the difference."
  ],
  "T04-Q09": [
    "Safe Checks avoids checks that may harm the remote host, while policy load, concurrency and target sensitivity still require review.",
    "Safe Checks is not a substitute for sufficient privileges and successful authenticated evidence collection.",
    "Disabling potentially harmful checks does not turn the remaining active probes into passive traffic observation.",
    "Safe Checks does not guarantee zero impact under every workload or on every fragile target."
  ],
  "T04-Q10": [
    "Leaving the same destabilizing policy unchanged neither addresses the observed impact nor validates safe coverage.",
    "Review the probing policy and any necessary exclusions, then identify alternative evidence so the device's coverage gap remains explicit.",
    "A severity recast changes the treatment of a finding, not the network probes that caused the instability.",
    "Increasing concurrency can add pressure to a fragile device before the underlying assessment policy has been reviewed."
  ],
  "T04-Q11": [
    "Adding ports does not bypass firewalls or guarantee responses from filtered services.",
    "More probed ports can require more service identification work, not eliminate it.",
    "A larger candidate port surface can require additional probes and checks, increasing work and response waiting time.",
    "Widening the range expands the candidate surface rather than reducing it."
  ],
  "T04-Q12": [
    "Severity settings cannot explain why the scanner cannot reach a targeted subnet.",
    "Risk acceptance concerns findings rather than the routing and scan-scope prerequisites for host observation.",
    "Audit overrides change result interpretation and do not establish network visibility of the missing subnet.",
    "Routing, filtering, exclusions and target definitions directly affect whether hosts in the subnet are contacted and observed."
  ],
  "T04-Q13": [
    "Expected identity, segment, sensor and collected discovery evidence provide the context needed to investigate why a specific host is missing.",
    "An aggregate finding count cannot identify which expected host or collection path was absent.",
    "A severity summary describes collected findings but omits the host-specific discovery evidence needed for this investigation.",
    "A hostname without environment and sensor context can remain ambiguous and does not explain the missing observation."
  ],
  "T04-Q14": [
    "Identifying the actual service helps choose relevant checks and interpret exposure beyond simply recording an open socket.",
    "An open port number does not conclusively establish the software product or its exact version.",
    "Service identification is not a full configuration comparison against a compliance benchmark.",
    "Remote service detection and local host checks collect different evidence and do not universally replace one another."
  ],
  "T04-Q15": [
    "Skipping an excluded host provides no evidence that its previously detected vulnerabilities were fixed.",
    "Exclusions changed the assessed scope, so the smaller discovery count must be interpreted against that changed coverage.",
    "A lower count caused by removing targets does not prove any technical reduction in vulnerability risk.",
    "Being removed from assessment is not the same as being patched or otherwise remediated."
  ],
  "T04-Q16": [
    "The discovery inventory does not demonstrate that all authenticated patch checks have already executed.",
    "A discovered host can still be vulnerable or noncompliant; discovery alone does not establish compliance.",
    "Use the inventory to define reachable targets and an appropriate assessment policy, then confirm usable vulnerability results.",
    "Risk acceptance presupposes a known finding and cannot substitute for assessing the discovered hosts."
  ],
  "T04-Q17": [
    "Firewalls or host policies can suppress ICMP echo replies while the host remains active and reachable through other protocols.",
    "The statement confuses one missing response type with proven host absence."
  ],
  "T04-Q18": [
    "Discovery establishes host inventory, whereas vulnerability assessment runs relevant exposure checks; their purposes and coverage differ.",
    "The statement incorrectly equates inventory collection with vulnerability assessment."
  ],
  "T04-Q19": [
    "If a relevant service port is outside the policy's probe range, that service may be omitted from assessment.",
    "Port coverage affects which services are observed, so omitting a relevant port can leave an explicit assessment gap."
  ],
  "T04-Q20": [
    "The expected scope supplies a denominator and identifies missing assets that an isolated observed count cannot explain.",
    "Without an expected inventory, a smaller observed count can conceal coverage gaps rather than demonstrate improvement."
  ],
  "T05-Q01": [
    "A tactical single-CVE scan deliberately narrows the checks and is not the standard starting point for full system coverage.",
    "Basic Network Scan provides a standard vulnerability assessment starting point; target scope and collection quality still need validation.",
    "Host Discovery primarily establishes inventory rather than comprehensive vulnerability assessment.",
    "Credentialed Patch Audit focuses on missing updates and is narrower than the full assessment requested."
  ],
  "T05-Q02": [
    "Network association disambiguates environments but does not edit inherited plugin settings.",
    "Export filters affect extracted results, not the checks configured in the source policy.",
    "Locked inherited settings cannot be edited directly in each derived scan field.",
    "Change the plugin selection in the related user-defined template because the derived scan inherits those locked settings."
  ],
  "T05-Q03": [
    "An enabled family is not restricted to its original plugin snapshot; newly received plugins are incorporated.",
    "Keeping every new plugin disabled is inconsistent with a fully enabled family.",
    "A feed update does not inherently force a fully enabled family into a partially enabled state.",
    "A fully enabled family automatically enables newly received plugins in that family; mixed-family lock settings need separate consideration."
  ],
  "T05-Q04": [
    "Risk acceptance affects existing findings and cannot fix blocked access to Windows files or registry data.",
    "Authentication can succeed while permissions, administrative shares, registry access or host policies still block required collection.",
    "Permissions for viewing reports are distinct from the service account's access to the assessed Windows host.",
    "Severity selection classifies findings; it cannot grant the scanner host-level access privileges."
  ],
  "T05-Q05": [
    "The Windows credentialed-checks guidance discusses SMB and WMI access for collecting local host evidence.",
    "ICMP and SNMP alone do not describe the SMB/WMI Windows authenticated collection methods requested.",
    "SSH and SCP describe a different host-access approach and are not the Windows protocols emphasized here.",
    "The Core administration interface manages an appliance rather than authenticating local checks on a Windows target."
  ],
  "T05-Q06": [
    "Unauthenticated service probing does not supply the local package and configuration evidence required for host-based checks.",
    "SSH authentication with sufficient privileges enables collection and execution of supported local Linux security checks.",
    "Windows SMB credentials are not the documented general Linux SSH access method in this scenario.",
    "Checking an agent on the scanner does not authenticate the scanner to the Linux target."
  ],
  "T05-Q07": [
    "A successful login is only one prerequisite; failure to retrieve native inventory can leave credentialed assessment incomplete.",
    "Successful SSH authentication does not prove that every required local check or package query succeeded.",
    "TCP reachability alone cannot authorize package and patch inventory collection from the target.",
    "Missing inventory is missing evidence, not evidence that the host has no missing patches."
  ],
  "T05-Q08": [
    "Asset criticality describes business importance and does not report scan execution details.",
    "A state filter selects findings by lifecycle state; it is not the scan-information plugin.",
    "Plugin 21745 concerns failed OS patch assessment rather than being the general scan execution information plugin.",
    "Plugin 19506 provides Nessus Scan Information that can help review execution and collection context when present."
  ],
  "T05-Q09": [
    "General scan information is useful context, but ignoring the explicit patch-assessment failure evidence weakens this diagnosis.",
    "Plugin 21745 specifically reports OS Security Patch Assessment Failed and helps investigate missing patch-assessment evidence.",
    "Sensor linkage does not establish whether target OS patch inventory and checks succeeded.",
    "Selecting Host Discovery does not provide a diagnosis of a failed authenticated patch assessment."
  ],
  "T05-Q10": [
    "Completed is an execution state, not proof that all targeted hosts passed authenticated collection and local checks.",
    "Inspecting execution information remains appropriate; the question asks for the unsupported success conclusion, not a recommended investigation.",
    "Results can be available despite partial failures, so this possibility is compatible with a completed execution.",
    "Completed does indicate a final execution state; it does not by itself guarantee assessment quality."
  ],
  "T05-Q11": [
    "Compliance checks often inspect local configuration and file permissions, so dismissing local evidence is incorrect.",
    "Some checks require protected configuration or filesystem access that a non-privileged account cannot obtain.",
    "Non-root accounts can authenticate through SSH; the issue is insufficient access for particular checks, not universal login impossibility.",
    "Successful login does not automatically grant unrestricted access to protected system configuration."
  ],
  "T05-Q12": [
    "Changing several parameters together makes it difficult to attribute performance or coverage changes to a specific cause.",
    "Changing one relevant parameter and measuring both duration and coverage supports a meaningful tuning comparison.",
    "More concurrency can overload targets or sensors, so its impact must be measured rather than assumed beneficial.",
    "Removing checks may shorten runtime by reducing coverage; measure that tradeoff before treating it as improvement."
  ],
  "T05-Q13": [
    "A focused template does not guarantee that every port is assessed regardless of the configured scope.",
    "A specific-vulnerability assessment does not eliminate the need for broader assessments of other exposures.",
    "A tactical scan targets a limited objective, so a successful tactical result is not proof of comprehensive assessment coverage.",
    "Benchmarks belong to compliance assessment and are not automatically included in every tactical vulnerability scan."
  ],
  "T05-Q14": [
    "A service startup setting alone cannot prove successful authentication or registry evidence collection.",
    "Manual startup does not necessarily prevent Nessus from starting the service when the supported option and privileges are available.",
    "Verify the documented Remote Registry startup option and required account privileges before assuming Manual makes assessment impossible.",
    "Changing finding severity does not start a Windows service or grant registry access."
  ],
  "T05-Q15": [
    "An export contains results; it does not override the credentials used by the original scan.",
    "Understanding inheritance and scan-specific or managed credentials identifies which identity actually controls target access.",
    "A credential source may authenticate successfully but still lack permissions needed for complete collection.",
    "Credential provenance does not remove the target's privilege and access requirements."
  ],
  "T05-Q16": [
    "Compare authenticated collection and target coverage because the new account may have reduced evidence instead of exposing genuine remediation.",
    "Accepting remaining findings changes their handling and cannot validate that the account change preserved collection quality.",
    "Ignoring the previous collection evidence removes the baseline needed to detect the account-related coverage loss.",
    "A lower finding count after changing credentials may reflect failed checks and is not sufficient proof of remediation."
  ],
  "T05-Q17": [
    "SSH login can succeed while package inventory retrieval or privileged checks fail, leaving assessment incomplete.",
    "The statement incorrectly treats authentication as sufficient evidence for all required local checks."
  ],
  "T05-Q18": [
    "A fully enabled plugin family incorporates newly received family plugins automatically under the documented selection behavior.",
    "New plugins are not inherently excluded from a fully enabled family; partial-family settings are a separate case."
  ],
  "T05-Q19": [
    "A valid password does not bypass account privileges, host security policies or access restrictions on shares and registry data.",
    "Authentication and authorization are separate prerequisites, so correct credentials alone cannot guarantee every required access path."
  ],
  "T05-Q20": [
    "A tactical policy is focused on a particular objective, whereas a comprehensive policy assesses a broader set of exposures.",
    "Different objectives and plugin selections can produce different coverage, so their assessment perspectives cannot be assumed equivalent."
  ],
  "T06-Q01": [
    "The manager coordinates and receives results; the installed agent performs its host checks on the endpoint itself.",
    "An agent runs local vulnerability checks using the host on which it is installed.",
    "A linked network scanner performs network-based assessment; it does not execute every installed agent's local checks.",
    "A cloud scanner is a remote assessment sensor, not the execution location of host-installed agent checks."
  ],
  "T06-Q02": [
    "A running local service can still have an outdated connection or failed result upload.",
    "Linkage establishes association but does not prove execution and delivery of all relevant checks.",
    "Verify communication, actual assessment execution and result upload because these are distinct steps beyond initial linkage.",
    "A tag groups assets and does not constitute execution evidence for an agent scan."
  ],
  "T06-Q03": [
    "An agent group selects participants; it does not directly change each host's finding severity metric.",
    "Agent groups organize the agents included in a particular agent assessment configuration.",
    "An agent group is not a routing configuration for remote service probes.",
    "User resource permissions and agent assessment membership serve different purposes."
  ],
  "T06-Q04": [
    "The scan window defines the timeframe in which selected agents must participate and report for inclusion in that scan's results.",
    "A remediation deadline concerns fixing findings, not the reporting interval of an agent assessment.",
    "A window cannot guarantee endpoint availability or successful communication.",
    "Operating-system uptime is independent of the platform's configured agent reporting window."
  ],
  "T06-Q05": [
    "Triggered scans can launch through configured agent-side triggers, so a separate manual window launch is not always required.",
    "Supported triggers include intervals, trigger files and documented nessuscli operations for the configured agent scan.",
    "Network scanner-group task assignment is not the agent-side triggering mechanism requested.",
    "Refreshing a dashboard displays information and is not a configured local scan trigger."
  ],
  "T06-Q06": [
    "Shortening the window without investigating missed participation can further reduce coverage of intermittently available endpoints.",
    "A cloud scanner without a route to the notebooks still cannot perform the missing local collection.",
    "Agent-side triggered scans can align collection with endpoint availability, while communication and result delivery still require verification.",
    "Accepting risk does not restore missing assessment data or solve endpoint participation gaps."
  ],
  "T06-Q07": [
    "The agent status command exposes useful linkage and communication state without deliberately breaking the association.",
    "Unlink removes the agent's association and changes its state instead of simply inspecting it.",
    "An ICMP response from another notebook does not show this agent's linkage or manager communication.",
    "A cloud report export retrieves results but is not the agent CLI status operation."
  ],
  "T06-Q08": [
    "Host-local collection does not require the network scanner to establish inbound access to every mobile laptop.",
    "The agent must communicate with its documented manager endpoint to deliver locally collected assessment results.",
    "Uploading results inherently requires a functioning communication path to the receiving service.",
    "An agent is not a passive network monitor and does not need a SPAN/TAP feed to upload host assessment data."
  ],
  "T06-Q09": [
    "Installing agents does not make every remote exposure assessment redundant.",
    "Network scanners can still assess the service exposure visible from their network vantage point, complementing local agent checks.",
    "Agent deployment does not guarantee routing or firewall access to every remote service.",
    "Local checks do not automatically prove how services appear to a remote observer."
  ],
  "T06-Q10": [
    "The documented triggered-scan export workflow differs from the individual result exports used for window scans.",
    "Triggered vulnerability results are retrieved through the bulk vulnerability export API, according to the triggered-scan guidance.",
    "Group membership describes participants rather than exporting the collected vulnerability records.",
    "A report card presents remediation progress and is not the vulnerability data export method for triggered scans."
  ],
  "T06-Q11": [
    "The group name identifies membership but does not reveal the plugin set or checks that actually executed.",
    "Business criticality affects prioritization, not whether the agent has current checks and assessment capability.",
    "A dashboard viewer's role does not explain which plugins the agent had available during collection.",
    "The current plugin set and scan information help determine whether the agent had and executed the expected checks."
  ],
  "T06-Q12": [
    "The referenced October 6, 2026 release change defines Offline as no check-in for at least 72 hours; verify the applicable product version.",
    "Seven days is not the threshold specified by the particular release note referenced in this question.",
    "A successful upload with no detected findings is not equivalent to missing agent check-ins for the documented offline interval.",
    "A 24-hour threshold does not match the 72-hour condition stated in the referenced release change."
  ],
  "T06-Q13": [
    "Being offline during assessment does not supply evidence that the endpoint's vulnerabilities were fixed.",
    "An unavailable endpoint cannot be assumed to have passed audit checks that were not collected in the window.",
    "Treat the missing participation as a coverage gap and investigate endpoint availability and an appropriate future collection method.",
    "A reporting window cannot guarantee delivery from an agent that remains offline for its entire duration."
  ],
  "T06-Q14": [
    "Unlink disconnects the agent from its manager; it does not launch an existing triggered scan.",
    "The scan-triggers start operation identifies the existing configured scan by UUID and requests its execution.",
    "Agent link establishes association with a manager rather than starting a triggered scan by its scan UUID.",
    "Agent status observes state and does not request triggered scan execution."
  ],
  "T06-Q15": [
    "Finding severity controls classification and does not explain an outdated Last connect value.",
    "A display name alone does not establish whether the agent can communicate or deliver results.",
    "The running service is already known; repeating that observation does not investigate the broken communication path.",
    "Check the documented endpoint, routing, proxy/TLS path and linkage because local service operation does not guarantee manager connectivity."
  ],
  "T06-Q16": [
    "Feature availability can depend on version, configuration and deployment conditions, so check those documented prerequisites.",
    "A release announcement does not automatically upgrade or reconfigure every older installation.",
    "Successful linkage does not imply support for features introduced in newer agent or manager versions.",
    "Linkage proves association, not that all prerequisites for a particular newly documented feature are met."
  ],
  "T06-Q17": [
    "A configured window cannot force offline agents to communicate, execute and upload successfully.",
    "The statement overstates the window's effect; endpoint availability and communication still determine participation."
  ],
  "T06-Q18": [
    "Configured agent-side triggers can launch a triggered assessment without a user separately starting a platform window scan.",
    "Triggered scans are not restricted to the manual window-launch model described by this alternative."
  ],
  "T06-Q19": [
    "Host-local evidence and remote network exposure checks have different observation points and cannot always produce identical perspectives.",
    "The statement incorrectly treats complementary collection methods as universally identical."
  ],
  "T06-Q20": [
    "Installation, association, execution and upload each require their own evidence when diagnosing a missing or incomplete agent result.",
    "Conflating these checkpoints can hide a later failure even when an earlier installation or linking step succeeded."
  ],
  "T07-Q01": [
    "A hostname identifies an asset, while a dashboard title identifies a view; neither distinguishes service-specific vulnerability instances.",
    "The same CVE can affect multiple services or assets, so its name alone lacks the required instance context.",
    "Severity and report timing do not uniquely identify the plugin/service occurrence on the asset.",
    "VM distinguishes an instance on an asset by plugin ID, port and protocol, allowing separate occurrences to be tracked."
  ],
  "T07-Q02": [
    "New represents the initial single detection of the vulnerability on the host.",
    "Fixed requires later assessment evidence that the vulnerability is no longer detected, not an initial positive detection.",
    "Active after repeated detections is different from the first-detection state requested.",
    "Resurfaced requires detection after a prior Fixed state, which the scenario does not include."
  ],
  "T07-Q03": [
    "Recurrence does not automatically create a risk-acceptance decision or rule.",
    "The previous Fixed history matters, so this is not treated simply as a first-ever New detection.",
    "The UI preserves the resurfacing distinction when a previously Fixed vulnerability is detected again.",
    "Resurfaced explicitly identifies a new detection following a previously Fixed state."
  ],
  "T07-Q04": [
    "An Accept rule concerns risk treatment and is not what defines the Active lifecycle filter.",
    "The documented Active filter includes New findings, so it does not always exclude them.",
    "Previously Fixed findings detected again are Resurfaced; that is not the exclusive content of the Active filter.",
    "New findings are included when filtering for Active vulnerabilities, so the filter is broader than repeated detections alone."
  ],
  "T07-Q05": [
    "Reopened corresponds to resurfaced findings rather than the combined New/Active representation requested.",
    "Fixed represents vulnerabilities no longer detected, not current New or Active findings.",
    "The API represents both New and Active UI vulnerabilities with the open state.",
    "An Active vulnerability is still open; labeling it closed incorrectly implies resolution."
  ],
  "T07-Q06": [
    "Asset business criticality is represented by ACR, a separate metric from vulnerability threat priority.",
    "VPR incorporates changing vulnerability and threat intelligence, adding prioritization context beyond a static technical severity score.",
    "Scan runtime is an operational duration and is not a vulnerability risk-priority metric.",
    "Treating VPR as only a static vector omits its dynamic threat inputs and regular recalculation."
  ],
  "T07-Q07": [
    "Technical CVE severity belongs to vulnerability scoring such as CVSS, not the asset's business-criticality rating.",
    "Global vulnerability threat activity informs VPR rather than defining an organization's asset criticality.",
    "ACR expresses an asset's importance to the organization and is available under the applicable additional licensing.",
    "Exploit maturity is vulnerability threat evidence; it is not the asset business context captured by ACR."
  ],
  "T07-Q08": [
    "Agent group size concerns assessment organization and does not demonstrate exploitation of the particular vulnerability.",
    "An operating-system display name does not establish known exploitation of a CVE.",
    "Business ownership provides local organizational context, not the CISA exploitation evidence requested.",
    "CISA KEV membership identifies known exploitation context and is a documented VPR-related driver."
  ],
  "T07-Q09": [
    "An asset's internal business role and a vulnerability's global threat landscape are distinct dimensions.",
    "VPR does not automatically model every organization-specific service dependency or asset business role.",
    "Users cannot directly rewrite the calculated VPR for individual business units.",
    "VPR drivers describe the global vulnerability threat landscape; organization-specific asset criticality must be considered separately."
  ],
  "T07-Q10": [
    "Recast rules adjust matching findings and do not identify the underlying severity metric chosen in General Settings.",
    "Identify the metric and applicable version because CVSS-based and VPR-based configurations can classify the same finding differently.",
    "VM supports configurable metrics, so assuming CVSSv2 universally can produce the wrong interpretation.",
    "ACR measures asset business criticality and is not the severity score of every vulnerability."
  ],
  "T07-Q11": [
    "A recast changes finding classification, not the installed software version on the target.",
    "A rule does not reconfigure network exposure or service access on the host.",
    "Recasting does not install a missing patch or otherwise remove the technical vulnerability.",
    "Recast changes the severity applied to findings matching its defined criteria and scope."
  ],
  "T07-Q12": [
    "Accept records a risk decision; it does not establish that the technical vulnerability has been resolved.",
    "An Accept rule accepts the risk and hides matching findings from the Findings table within its configured scope.",
    "An Accept rule does not deploy patches, so hidden findings cannot be assumed technically remediated.",
    "Accept handles matching findings rather than creating a universal exclusion from future host assessments."
  ],
  "T07-Q13": [
    "An overly broad rule match does not remediate the affected software or services.",
    "Review the matched assets and findings and narrow criteria to the intended application so unrelated findings are not affected.",
    "Extending the rule lifetime before inspecting scope perpetuates the potentially unintended treatment.",
    "A descriptive rule name does not constrain its actual matching criteria or justify a subnet-wide effect."
  ],
  "T07-Q14": [
    "A reduced count can result from lost collection coverage; it does not alone validate technical closure.",
    "An accepted finding can be hidden while the underlying vulnerability remains present.",
    "A comparable, suitable reassessment that no longer detects the specific issue supports technical remediation of that issue.",
    "Changing severity only reclassifies the finding and does not demonstrate that the vulnerability was removed."
  ],
  "T07-Q15": [
    "One plugin can affect many hosts, so plugin count and affected-host count are not inherently equal.",
    "The same plugin can produce multiple asset, port or protocol occurrences rather than exactly one occurrence in every report.",
    "A plugin count describes collected results and does not prove that every expected asset was assessed.",
    "Counting unique plugins alone omits how broadly each issue affects assets and individual occurrences."
  ],
  "T07-Q16": [
    "Scanner installation status concerns sensor deployment rather than relating tenant findings to vulnerability intelligence.",
    "A global CVE list without tenant context cannot show which relevant findings exist in this organization's environment.",
    "Agent linkage inventory does not provide the requested vulnerability-intelligence view of organizational findings.",
    "My Findings relates vulnerability intelligence to vulnerabilities observed in the organization's environment."
  ],
  "T07-Q17": [
    "Calculated VPR is not directly user-editable; configurable risk treatment and asset context are separate functions.",
    "The statement conflicts with the documented restriction on directly editing VPR values."
  ],
  "T07-Q18": [
    "Recasting modifies displayed severity but does not execute a software update on the host.",
    "Technical remediation requires a target-side corrective action and suitable validation, not merely a finding severity override."
  ],
  "T07-Q19": [
    "The lifecycle state Resurfaced records a vulnerability detected again after previously being Fixed.",
    "The previous Fixed state and renewed detection are precisely the conditions that define Resurfaced."
  ],
  "T07-Q20": [
    "Threat likelihood and asset business importance inform different parts of the remediation decision and can be considered together.",
    "Using only one dimension can overlook either active exploitation urgency or organization-specific impact."
  ],
  "T08-Q01": [
    "CVE and exploit analysis concerns vulnerability risk; it does not evaluate every benchmark configuration requirement.",
    "Observed services provide exposure evidence but are not the entire configuration-versus-benchmark comparison.",
    "Execution duration and reporting deadlines are operational measurements rather than compliance criteria.",
    "Compliance auditing compares collected configuration evidence with the selected benchmark or audit requirements."
  ],
  "T08-Q02": [
    "Benchmark versions can change control requirements and expected values, so version selection matters.",
    "An incompatible platform or benchmark version can test the wrong settings and fail to represent the applicable requirements.",
    "Audit checks are platform- and requirement-specific; one audit does not apply equally to every system.",
    "An audit filename selects assessment logic but does not itself configure the target system."
  ],
  "T08-Q03": [
    "Investigate the Warning's evidence and any manual review requirements before drawing a compliance conclusion.",
    "Accepting risk does not establish that the configuration met the benchmark's technical requirement.",
    "A Warning may require review or reflect inconclusive evidence; it is not always a confirmed failure.",
    "A Warning cannot be silently converted into Passed without the required evidence or review."
  ],
  "T08-Q04": [
    "Passed supports that the particular tested requirement was satisfied in the evidence collected for that check.",
    "A result from one assessment cannot guarantee indefinite future compliance after configuration changes.",
    "Untested controls lack assessment evidence and cannot inherit Passed from a different check.",
    "Configuration compliance for one parameter does not establish the absence of all vulnerabilities on the host."
  ],
  "T08-Q05": [
    "Recasting finding severity does not retrieve the protected configuration evidence needed for an audit conclusion.",
    "Unavailable evidence cannot establish that the inaccessible setting satisfies the requirement.",
    "Check the account's privileges and collection path before interpreting a result based on inaccessible configuration data.",
    "Changing the benchmark without diagnosing the access problem can still leave required evidence unavailable."
  ],
  "T08-Q06": [
    "A report changes presentation of collected results; it does not edit inherited compliance check configuration.",
    "The associated user-defined template controls the inherited compliance settings of its derived scans.",
    "A severity override affects finding classification rather than the source template's audit configuration.",
    "Inherited settings must be changed at their template source rather than edited independently in locked scan fields."
  ],
  "T08-Q07": [
    "A filename cannot demonstrate whether conditional branches evaluate the intended requirements correctly.",
    "Syntactically valid audit logic can still implement incorrect conditions or expected values.",
    "Test relevant conditional paths against known expected evidence to verify the custom audit's behavior and interpretation.",
    "Testing only one branch leaves the alternative path unvalidated and can conceal incorrect conditional results."
  ],
  "T08-Q08": [
    "Exporting only the total omits the underlying assets and occurrences needed to investigate the aggregate.",
    "Drill-down exposes the assets or findings contributing to the indicator so their underlying evidence can be reviewed.",
    "Changing display colors does not expose the records or evidence behind an aggregate value.",
    "Hiding categories reduces visibility rather than explaining which observations produced the total."
  ],
  "T08-Q09": [
    "Filters can legitimately include different finding sets and therefore change totals.",
    "Comparing totals without their units can confuse unique plugins, affected assets and individual occurrences.",
    "Different scope or dates can explain different totals without any corruption of the underlying data.",
    "Compare filters, collection timing, permissions and counting units before concluding that apparently different totals are inconsistent."
  ],
  "T08-Q10": [
    "A single report-card total lacks the individual records and fields needed for structured analysis.",
    "A screenshot is an image of a view, not a structured dataset of finding records.",
    "A PDF cover without occurrence data cannot support record-level analysis of exported findings.",
    "Supported CSV or JSON exports retain structured fields suitable for offline filtering, aggregation and analysis."
  ],
  "T08-Q11": [
    "Report creation generates an output document rather than a script that changes target configuration.",
    "A reporting endpoint does not manufacture or deploy patches for detected vulnerabilities.",
    "The report creation API generates a PDF based on the chosen template and filters.",
    "Creating a report does not define and execute a new scan policy on every host."
  ],
  "T08-Q12": [
    "A trend without affected assets or responsibility leaves the operations team unable to target and own corrective actions.",
    "The low-severity percentage alone omits the specific evidence and actions needed for remediation.",
    "Asset identity, evidence, proposed remediation, ownership and follow-up make the report actionable for the receiving team.",
    "An aggregate maximum severity total does not identify which systems need which corrective work."
  ],
  "T08-Q13": [
    "Report Cards summarize remediation initiative progress rather than overriding benchmark check results.",
    "Exposure Response Report Cards present initiative progress with owner or responsibility context for follow-up.",
    "Sensor linking credentials belong to deployment management, not initiative reporting.",
    "A progress presentation does not replace the sensors and checks that collect assessment evidence."
  ],
  "T08-Q14": [
    "Lost authenticated coverage can remove detected issues from the visible results without any patch being applied.",
    "Failed authenticated checks can directly reduce the vulnerabilities detected from local host evidence.",
    "An absent observation after coverage loss is not sufficient evidence to mark a finding Fixed.",
    "Interpret the lower count against changed authenticated coverage before presenting it as verified remediation progress."
  ],
  "T08-Q15": [
    "Scheduling data delivery does not guarantee that the underlying assessment reached every expected host.",
    "Exports remain subject to the relevant scope and access rules; scheduling is not a permission bypass.",
    "A risk-acceptance decision remains different from technical remediation even when its records are exported repeatedly.",
    "Recurring exports automate structured data delivery at a configured cadence, supporting repeatable reporting workflows."
  ],
  "T08-Q16": [
    "An Exclusion changes target assessment participation rather than overriding the result of an existing host audit check.",
    "Change Result overrides host audit results matching its defined scope; it does not itself change the target configuration.",
    "Recast modifies vulnerability severity and is not the host-audit result override requested.",
    "Accept handles vulnerability risk acceptance rather than being the specific host-audit result override type."
  ],
  "T08-Q17": [
    "The absence of detected CVEs does not test every benchmark configuration requirement.",
    "Compliance requires relevant audit evidence for the specified controls, not merely a vulnerability scan with no CVE findings."
  ],
  "T08-Q18": [
    "Scope and collection timing establish what population and evidence period a report actually represents.",
    "Without scope and timing, totals can be misinterpreted or compared across unlike assessment populations."
  ],
  "T08-Q19": [
    "Warning can require further investigation or manual confirmation, so it is not a universally confirmed Passed result.",
    "The statement incorrectly treats an uncertain or review-required outcome as conclusive compliance evidence."
  ],
  "T08-Q20": [
    "Risk acceptance documents a decision to tolerate exposure, while technical remediation removes or mitigates the underlying issue and needs verification.",
    "An accepted finding may remain technically present, so acceptance cannot be equated with a verified fix."
  ]
};
for (const sim of SIMULADOS.filter(s=>s.course==='tenable')) for (const q of sim.questions) {
  if(TenableOptionExplanations[q.id]) { q.x=TenableOptionExplanations[q.id].slice(); q.explanationLanguage='en'; }
}
