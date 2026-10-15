/* Material autoral Tenable, integrado ao motor Study. */
const TenableStudy = (() => {
  const questions = [
  {
    "id": "T01-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Which component centrally manages vulnerability data in the cloud-based VM deployment?",
    "o": [
      "A standalone Nessus Professional console",
      "The local Agent CLI",
      "Tenable One Vulnerability Management",
      "Tenable Core alone"
    ],
    "a": "C",
    "e": "Tenable Vulnerability Management centrally stores findings and coordinates the cloud-based assessment workflow.",
    "origin": "autoral",
    "sourceId": "T01-Q01",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      },
      {
        "title": "Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
      }
    ]
  },
  {
    "id": "T01-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A team must assess services reachable from outside its network. Which sensor placement best represents that perspective?",
    "o": [
      "An agent performing local checks only",
      "A scanner behind the firewall with no external route",
      "A cloud scanner with access to the public targets",
      "A passive monitor seeing only internal traffic"
    ],
    "a": "C",
    "e": "A reachable cloud scanner can probe the public targets from outside the organization's network, matching the assessment objective.",
    "origin": "autoral",
    "sourceId": "T01-Q02",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      },
      {
        "title": "Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
      }
    ]
  },
  {
    "id": "T01-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "An internal subnet cannot be reached from the internet. What is the most appropriate active scanning arrangement?",
    "o": [
      "A linked scanner in an unrelated unreachable network",
      "Host Discovery from a scanner with no route",
      "A linked Nessus scanner with network access to that subnet",
      "A cloud scanner with no route to the subnet"
    ],
    "a": "C",
    "e": "A linked Nessus scanner with subnet connectivity can perform active probes against the otherwise internet-inaccessible targets.",
    "origin": "autoral",
    "sourceId": "T01-Q03",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T01-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Which sensor observes existing traffic rather than initiating active probes to each host?",
    "o": [
      "Tenable Network Monitor",
      "A network scan using SSH authentication",
      "A cloud scanner using active service detection",
      "A Nessus scanner using SYN probes"
    ],
    "a": "A",
    "e": "Network Monitor derives observations from existing network traffic instead of initiating a full active probe sequence against each host.",
    "origin": "autoral",
    "sourceId": "T01-Q04",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      }
    ]
  },
  {
    "id": "T01-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A mobile laptop is rarely reachable by an internal network scanner. Which addition best improves local assessment coverage?",
    "o": [
      "A passive monitor on a segment the laptop never uses",
      "A cloud scanner with no route to the laptop",
      "A Tenable Agent installed on the laptop",
      "A longer network scan while the laptop remains unreachable"
    ],
    "a": "C",
    "e": "An installed agent can run checks locally when the mobile laptop is unreachable by the internal scanner; linkage and reporting must also work.",
    "origin": "autoral",
    "sourceId": "T01-Q05",
    "references": [
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T01-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Before deploying additional scanners, which information most directly supports placement decisions?",
    "o": [
      "License capacity alone, without target topology",
      "Existing finding totals without reachability data",
      "Target topology, reachability and expected asset coverage",
      "The severity metric selected for reports"
    ],
    "a": "C",
    "e": "Topology, reachability and expected coverage identify the observation points needed to assess each target segment.",
    "origin": "autoral",
    "sourceId": "T01-Q06",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T01-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A dashboard shows fewer vulnerabilities after a network change. What should be checked before interpreting this as reduced risk?",
    "o": [
      "Treat the lower finding total as sufficient evidence",
      "Assume missing assets have been remediated",
      "Use only the average VPR of visible findings",
      "Whether the same expected assets and checks were still assessed"
    ],
    "a": "D",
    "e": "Confirming the same expected assets and checks were assessed distinguishes a collection gap from a genuine reduction in detected risk.",
    "origin": "autoral",
    "sourceId": "T01-Q07",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      },
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      }
    ]
  },
  {
    "id": "T01-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Which pilot outcome provides the strongest evidence that a deployment plan works?",
    "o": [
      "The linking key was accepted once",
      "The installer completed and the service is running",
      "The expected sample assets were reached and produced usable assessment evidence",
      "A scan finished without checking sample coverage"
    ],
    "a": "C",
    "e": "Reaching the sample assets and obtaining usable evidence directly tests whether the planned assessment workflow delivers its intended outcome.",
    "origin": "autoral",
    "sourceId": "T01-Q08",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T01-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Two branches use the same private IPv4 address for different hosts. Which VM concept helps distinguish these environments?",
    "o": [
      "One shared network for identical IPs",
      "Tag categories alone, with no network context",
      "Networks",
      "A risk acceptance rule per branch"
    ],
    "a": "C",
    "e": "Separate Networks supply environment context for assets that reuse an IP address, preventing IP-only correlation across branches.",
    "origin": "autoral",
    "sourceId": "T01-Q09",
    "references": [
      {
        "title": "Networks",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
      }
    ]
  },
  {
    "id": "T01-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Why should an asset inventory use more context than an IPv4 address alone?",
    "o": [
      "An open port uniquely identifies the asset",
      "An IP is always a permanent asset identity",
      "Network context is irrelevant if IPs match",
      "Addresses may change or overlap across environments"
    ],
    "a": "D",
    "e": "Changing or overlapping addresses require additional identity and environment context to track the correct asset.",
    "origin": "autoral",
    "sourceId": "T01-Q10",
    "references": [
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      },
      {
        "title": "Networks",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
      }
    ]
  },
  {
    "id": "T01-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A passive monitor does not show a powered-on host that sends no observed traffic. What is the best interpretation?",
    "o": [
      "The host has completed authenticated checks",
      "The absence may reflect limited observed traffic rather than host absence",
      "The host is absent from the environment",
      "The host has no exposed services"
    ],
    "a": "B",
    "e": "Passive discovery depends on traffic reaching the monitor. A powered-on but silent host can therefore remain unobserved.",
    "origin": "autoral",
    "sourceId": "T01-Q11",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      }
    ]
  },
  {
    "id": "T01-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Which distinction is essential when selecting Host Discovery rather than a vulnerability assessment?",
    "o": [
      "Discovery identifies hosts and available inventory information",
      "Discovery verifies benchmark compliance",
      "Discovery performs all authenticated patch checks",
      "Discovery confirms technical remediation"
    ],
    "a": "A",
    "e": "Host Discovery locates hosts and collects available inventory details to guide later assessment planning.",
    "origin": "autoral",
    "sourceId": "T01-Q12",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T01-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A deployment has installed sensors but has no usable findings. Which next step best validates operation?",
    "o": [
      "Create reports before validating data collection",
      "Configure and run appropriate scans, then review results against expected coverage",
      "Accept risks to generate the missing scan evidence",
      "Treat linkage as proof of completed assessment"
    ],
    "a": "B",
    "e": "Running appropriate scans and comparing their results with expected coverage tests whether the installed sensors actually assess the intended environment.",
    "origin": "autoral",
    "sourceId": "T01-Q13",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T01-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Why might an organization use both agents and network scanners?",
    "o": [
      "Network scanners make local host evidence unnecessary",
      "Agents always assess externally reachable services",
      "Agents duplicate the remote exposure perspective",
      "Local host checks and remote service assessment provide complementary perspectives"
    ],
    "a": "D",
    "e": "Combining local host checks with network-based service assessment covers distinct and complementary aspects of an asset.",
    "origin": "autoral",
    "sourceId": "T01-Q14",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      },
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T01-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Which statement matches the documented Host Discovery template behavior?",
    "o": [
      "Every discovered host counts as fully assessed",
      "Only public discovery targets are exempt",
      "Assets identified by discovery scans do not count toward the license",
      "Discovery exemptions apply to every later assessment"
    ],
    "a": "C",
    "e": "Assets identified by discovery scans are excluded from the assessment license count; later assessment must be considered separately.",
    "origin": "autoral",
    "sourceId": "T01-Q15",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T01-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A training note discusses Security Center repositories. How should it be used for this VM Written Exam preparation?",
    "o": [
      "Treat Security Center menus as VM equivalents",
      "Apply repository rules without product validation",
      "Use on-premise repository administration as the VM blueprint",
      "Verify applicability against VM documentation before adopting product-specific rules"
    ],
    "a": "D",
    "e": "Checking VM documentation separates shared vulnerability-management concepts from product-specific repository rules.",
    "origin": "autoral",
    "sourceId": "T01-Q16",
    "references": [
      {
        "title": "Exame Specialist: datasheet oficial",
        "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
      },
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T01-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "An agent assessment automatically proves how every service appears to a remote network scanner.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement overclaims agent coverage. Remote exposure and local host assessment require different observation perspectives.",
    "origin": "autoral",
    "sourceId": "T01-Q17",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      },
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T01-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "A successful pilot should compare observed assets with the expected assessment scope.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Comparing observed assets with the expected scope exposes missing targets and tests whether the pilot achieved the planned coverage.",
    "origin": "autoral",
    "sourceId": "T01-Q18",
    "references": [
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      },
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      }
    ]
  },
  {
    "id": "T01-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Passing only the written exam is sufficient to earn the full Specialist certification.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement omits the practical requirement documented for the complete certification.",
    "origin": "autoral",
    "sourceId": "T01-Q19",
    "references": [
      {
        "title": "Exame Specialist: datasheet oficial",
        "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
      }
    ]
  },
  {
    "id": "T01-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Arquitetura e fundamentos",
    "q": "Passive asset discovery depends on the traffic visible to the monitor.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "A passive monitor can only infer asset information from the traffic available at its observation point.",
    "origin": "autoral",
    "sourceId": "T01-Q20",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      }
    ]
  },
  {
    "id": "T02-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "What does Tenable Core provide in a Core + Nessus deployment?",
    "o": [
      "A replacement for the Nessus application",
      "An operating system and appliance administration environment for Nessus",
      "The vulnerability assessment engine itself",
      "The complete SaaS VM control plane"
    ],
    "a": "B",
    "e": "Tenable Core supplies the operating system and appliance administration layer on which Nessus runs.",
    "origin": "autoral",
    "sourceId": "T02-Q01",
    "references": [
      {
        "title": "Tenable Core + Nessus",
        "url": "https://docs.tenable.com/tenable-core/Nessus/Content/Introduction_Nessus.htm"
      }
    ]
  },
  {
    "id": "T02-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Which default port is used by sensors to communicate with the standard VM cloud endpoint?",
    "o": [
      "TCP 22",
      "TCP 443",
      "TCP 8000",
      "TCP 8835"
    ],
    "a": "B",
    "e": "The standard VM cloud connection uses HTTPS over TCP 443 for sensor communication.",
    "origin": "autoral",
    "sourceId": "T02-Q02",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T02-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Which default port identifies the Nessus scanner web interface?",
    "o": [
      "TCP 8835",
      "TCP 445",
      "TCP 8000",
      "TCP 8834"
    ],
    "a": "D",
    "e": "The default Nessus scanner web interface listens on TCP 8834; customized deployments may change that setting.",
    "origin": "autoral",
    "sourceId": "T02-Q03",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T02-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "An administrator opens the appliance administration interface on port 8000. Which component is being accessed?",
    "o": [
      "The Nessus scanner interface",
      "The Windows SMB interface",
      "Tenable Core",
      "The Network Monitor interface"
    ],
    "a": "C",
    "e": "TCP 8000 identifies the default Tenable Core administration interface used to manage the appliance environment.",
    "origin": "autoral",
    "sourceId": "T02-Q04",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T02-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "What is the primary purpose of a sensor linking key?",
    "o": [
      "Provide Windows target credentials",
      "Establish the initial association between a sensor and VM",
      "Encrypt each report with a user password",
      "Authenticate user API requests"
    ],
    "a": "B",
    "e": "A sensor linking key establishes the initial association between the sensor and its VM environment.",
    "origin": "autoral",
    "sourceId": "T02-Q05",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      },
      {
        "title": "Manage Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
      }
    ]
  },
  {
    "id": "T02-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "After successful linking, how does the sensor connect to VM according to the guide?",
    "o": [
      "The target SSH private key",
      "Using unique credentials associated with the sensor",
      "The original linking key for every future request",
      "A VM user password shared by all sensors"
    ],
    "a": "B",
    "e": "After linking, the sensor uses its own unique communication credentials rather than repeatedly sharing the initial linking key.",
    "origin": "autoral",
    "sourceId": "T02-Q06",
    "references": [
      {
        "title": "Manage Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
      }
    ]
  },
  {
    "id": "T02-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "A sensor installation completes, but linking fails behind a proxy. What should be investigated first?",
    "o": [
      "Target patch levels before linking",
      "Endpoint resolution, proxy behavior and HTTPS/TLS connectivity",
      "The scope of an Accept rule",
      "Finding severity configuration"
    ],
    "a": "B",
    "e": "DNS resolution, proxy configuration and HTTPS/TLS reachability directly affect whether the sensor can contact the correct VM endpoint.",
    "origin": "autoral",
    "sourceId": "T02-Q07",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      },
      {
        "title": "Manage Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
      }
    ]
  },
  {
    "id": "T02-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Why can complex credentialed scans require more resources than a small discovery pilot?",
    "o": [
      "Credentialed scans require less processing in every workload",
      "Hardware depends only on host count",
      "Only passive monitors require local storage",
      "The checks may consume additional processing, memory and storage"
    ],
    "a": "D",
    "e": "More complex checks can require extra CPU, memory and storage compared with a small discovery-only workload.",
    "origin": "autoral",
    "sourceId": "T02-Q08",
    "references": [
      {
        "title": "Hardware Requirements",
        "url": "https://docs.tenable.com/nessus/Content/HardwareRequirements.htm"
      }
    ]
  },
  {
    "id": "T02-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "A scanner gradually runs out of disk space although the target count is stable. Which factor deserves review?",
    "o": [
      "Growth of logs, scan results and plugin-related data",
      "The number of configured user roles",
      "License usage alone",
      "The selected severity metric"
    ],
    "a": "A",
    "e": "Logs, retained scan results and plugin-related data can grow over time even when the target count remains unchanged.",
    "origin": "autoral",
    "sourceId": "T02-Q09",
    "references": [
      {
        "title": "Hardware Requirements",
        "url": "https://docs.tenable.com/nessus/Content/HardwareRequirements.htm"
      }
    ]
  },
  {
    "id": "T02-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Which command best supports checking an installed agent without resetting it?",
    "o": [
      "Reinstall the agent before reviewing its state",
      "nessuscli agent link without inspecting status",
      "nessuscli agent status",
      "nessuscli agent unlink"
    ],
    "a": "C",
    "e": "The agent status command reports operational and linking information without deliberately resetting or unlinking the agent.",
    "origin": "autoral",
    "sourceId": "T02-Q10",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T02-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "An agent group exists as \"Lab-Windows\", but the linking command uses \"lab-windows\". What should be checked?",
    "o": [
      "The network name overrides the agent group name",
      "The group name is always case-insensitive",
      "Exact case-sensitive matching of the existing agent group name",
      "The scan window corrects the name automatically"
    ],
    "a": "C",
    "e": "Using the existing group's exact spelling and case avoids mismatching Lab-Windows with lab-windows.",
    "origin": "autoral",
    "sourceId": "T02-Q11",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T02-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "What traffic feed is appropriate for a passive Network Monitor?",
    "o": [
      "Only traffic to the monitor web interface",
      "A SPAN port or network TAP with a bidirectional view",
      "Only a unidirectional feed of requests",
      "Only traffic generated by an active scanner"
    ],
    "a": "B",
    "e": "A properly configured SPAN or TAP feed supplies both directions of relevant network conversations for passive analysis.",
    "origin": "autoral",
    "sourceId": "T02-Q12",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      }
    ]
  },
  {
    "id": "T02-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Which standard endpoint and port match a modern agent linked directly to VM?",
    "o": [
      "The scanner interface on TCP 8834",
      "Tenable Core on TCP 8000",
      "sensor.cloud.tenable.com:443",
      "The target host on TCP 445"
    ],
    "a": "C",
    "e": "The standard modern direct-to-VM agent endpoint is sensor.cloud.tenable.com over TCP 443; environment-specific exceptions must be checked.",
    "origin": "autoral",
    "sourceId": "T02-Q13",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T02-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Why should a linking procedure explicitly identify its deployment environment?",
    "o": [
      "All deployments use one endpoint without exceptions",
      "The endpoint is determined by host CVSS",
      "A regional deployment uses the target IP as manager",
      "FedRAMP and regional deployments can require different documented endpoints"
    ],
    "a": "D",
    "e": "The linking destination and options must match the documented deployment environment, including regional or FedRAMP differences.",
    "origin": "autoral",
    "sourceId": "T02-Q14",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      },
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T02-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Which evidence best confirms that an installed scanner has been integrated?",
    "o": [
      "The host can reach an unrelated HTTPS site",
      "The expected sensor appears linked and can communicate and run an authorized test scan",
      "The installer exists and its checksum is valid",
      "The local service is running without communication evidence"
    ],
    "a": "B",
    "e": "A linked sensor that communicates and completes an authorized test assessment provides evidence of integration beyond installation.",
    "origin": "autoral",
    "sourceId": "T02-Q15",
    "references": [
      {
        "title": "Manage Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
      },
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T02-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "A scanner VM has sufficient nominal memory but is heavily CPU oversubscribed. What is the best response?",
    "o": [
      "Review actual resource availability and scan performance under the planned workload",
      "Nominal CPU allocation guarantees performance",
      "Suppress slow findings instead of reviewing resources",
      "Memory allocation alone proves adequate capacity"
    ],
    "a": "A",
    "e": "Checking effective CPU availability and observed performance under the planned workload addresses the stated oversubscription problem.",
    "origin": "autoral",
    "sourceId": "T02-Q16",
    "references": [
      {
        "title": "Hardware Requirements",
        "url": "https://docs.tenable.com/nessus/Content/HardwareRequirements.htm"
      }
    ]
  },
  {
    "id": "T02-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "The default Core and Nessus web interfaces use the same port.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement conflates two separate administration interfaces with distinct default listening ports.",
    "origin": "autoral",
    "sourceId": "T02-Q17",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T02-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "The agent linking key and a user API key pair serve the same purpose.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "These credential types serve different identities and operations and should not be treated as interchangeable.",
    "origin": "autoral",
    "sourceId": "T02-Q18",
    "references": [
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      },
      {
        "title": "Manage Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
      }
    ]
  },
  {
    "id": "T02-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "A passive monitor may need time and observed traffic to identify some host attributes.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Passive attributes are inferred from observed conversations, so some details require relevant traffic and observation time.",
    "origin": "autoral",
    "sourceId": "T02-Q19",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      }
    ]
  },
  {
    "id": "T02-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Instalação e sensores",
    "q": "Hardware requirements should be interpreted in the context of workload and scan configuration.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Check complexity, concurrency and evidence volume affect resource consumption, so sizing must reflect the actual workload.",
    "origin": "autoral",
    "sourceId": "T02-Q20",
    "references": [
      {
        "title": "Hardware Requirements",
        "url": "https://docs.tenable.com/nessus/Content/HardwareRequirements.htm"
      }
    ]
  },
  {
    "id": "T03-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "Which statement best distinguishes roles from permissions in VM?",
    "o": [
      "A role alone always establishes asset scope",
      "Roles only restrict data and permissions only grant actions",
      "Roles and permissions describe severity configuration",
      "Roles govern actions while permissions govern accessible data and resources"
    ],
    "a": "D",
    "e": "Roles specify permitted actions, while resource permissions constrain the data and resources on which those actions can operate.",
    "origin": "autoral",
    "sourceId": "T03-Q01",
    "references": [
      {
        "title": "Roles",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm"
      }
    ]
  },
  {
    "id": "T03-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "A user can configure scans but should view only branch assets. What additional design is needed?",
    "o": [
      "Appropriate resource scope and permissions, commonly organized using tags",
      "Administrator access to all resources",
      "A shared user account for both branches",
      "A dashboard filter with no permission changes"
    ],
    "a": "A",
    "e": "Branch-specific resource permissions, often organized through asset tags, constrain the user's data scope while retaining needed scan privileges.",
    "origin": "autoral",
    "sourceId": "T03-Q02",
    "references": [
      {
        "title": "RBAC Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm"
      }
    ]
  },
  {
    "id": "T03-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "Which example follows the documented tag format?",
    "o": [
      "Production:443:Admin:Plugin",
      "Environment:Production",
      "Environment=Role=Scanner",
      "Category/Value/PluginID"
    ],
    "a": "B",
    "e": "Environment is the category and Production is its value, matching the Category:Value representation.",
    "origin": "autoral",
    "sourceId": "T03-Q03",
    "references": [
      {
        "title": "Tag Format and Application",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm"
      }
    ]
  },
  {
    "id": "T03-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "What causes an automatic tag to apply to relevant assets?",
    "o": [
      "Manual assignment on every new asset",
      "Assets matching the configured tag rules",
      "The role of the user viewing the tag",
      "Membership in any scanner group"
    ],
    "a": "B",
    "e": "An automatic tag applies when an asset satisfies its configured matching rules.",
    "origin": "autoral",
    "sourceId": "T03-Q04",
    "references": [
      {
        "title": "Tag Format and Application",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm"
      }
    ]
  },
  {
    "id": "T03-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "A linked scanner scans two environments that reuse IPs without the correct network context. What risk should be investigated?",
    "o": [
      "An exclusion rule automatically separates identities",
      "The agent group name replaces network context",
      "Correct correlation is guaranteed by IP alone",
      "Incorrect asset association or duplicate records"
    ],
    "a": "D",
    "e": "Without the correct Network context, overlapping addresses can be correlated incorrectly or produce inconsistent asset records.",
    "origin": "autoral",
    "sourceId": "T03-Q05",
    "references": [
      {
        "title": "Networks",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
      }
    ]
  },
  {
    "id": "T03-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "How many networks can a scanner or scanner group belong to at one time?",
    "o": [
      "One network per open service",
      "One",
      "One network per plugin family",
      "Several simultaneous networks when IPs overlap"
    ],
    "a": "B",
    "e": "A scanner or scanner group can belong to one Network at a time, as documented for VM Networks.",
    "origin": "autoral",
    "sourceId": "T03-Q06",
    "references": [
      {
        "title": "Networks",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
      }
    ]
  },
  {
    "id": "T03-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "What must be validated before grouping scanners to assess a target subnet?",
    "o": [
      "Every scanner that may receive tasks can reach the intended targets",
      "All scanners belong to different network contexts",
      "The group name matches the target subnet",
      "At least one scanner can reach every target"
    ],
    "a": "A",
    "e": "Any scanner receiving distributed tasks must have the required connectivity; otherwise part of the assigned scope can go unassessed.",
    "origin": "autoral",
    "sourceId": "T03-Q07",
    "references": [
      {
        "title": "Scan Distribution",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/scan-distribution.htm"
      }
    ]
  },
  {
    "id": "T03-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "VM scan distribution across a scanner group is primarily described as distribution of what?",
    "o": [
      "Whole scans only, assigned to the oldest scanner",
      "Scan tasks according to available capacity",
      "Credentials only, with no task distribution",
      "One permanent asset allocation per scanner"
    ],
    "a": "B",
    "e": "Task distribution uses available scanner capacity and workload to spread assessment work across a group.",
    "origin": "autoral",
    "sourceId": "T03-Q08",
    "references": [
      {
        "title": "Scan Distribution",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/scan-distribution.htm"
      }
    ]
  },
  {
    "id": "T03-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "A target is explicitly included in a new network scan but is under an active exclusion. What happens?",
    "o": [
      "The target is marked Fixed without assessment",
      "The active exclusion takes precedence and the scanner skips the target",
      "The target runs but findings are hidden afterward",
      "The explicit target overrides every exclusion"
    ],
    "a": "B",
    "e": "An active network scan exclusion takes precedence for an excluded target even when the target is explicitly listed in a new scan.",
    "origin": "autoral",
    "sourceId": "T03-Q09",
    "references": [
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      }
    ]
  },
  {
    "id": "T03-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "Which scan type is outside the documented scope of network scan exclusions?",
    "o": [
      "Linked Nessus network scans",
      "Network scans targeting an excluded IP",
      "Cloud network scans",
      "Local Tenable Agent scans"
    ],
    "a": "D",
    "e": "Tenable Agent scans run locally and are outside the documented scope of network scan exclusions.",
    "origin": "autoral",
    "sourceId": "T03-Q10",
    "references": [
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      }
    ]
  },
  {
    "id": "T03-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "A scheduled exclusion window begins after a network scan has already started. What does the guide state?",
    "o": [
      "The scheduled exclusion does not interrupt that already running scan",
      "It accepts findings already generated by that scan",
      "It deletes earlier results from the excluded hosts",
      "It immediately interrupts every running task"
    ],
    "a": "A",
    "e": "The documented scheduled exclusion applies to scans beginning during its effective window; it does not interrupt a scan already running.",
    "origin": "autoral",
    "sourceId": "T03-Q11",
    "references": [
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      }
    ]
  },
  {
    "id": "T03-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "General Settings currently documents which default severity metric for individual vulnerability instances?",
    "o": [
      "VPR",
      "ACR used as the vulnerability severity metric",
      "CVSSv2 with no alternative",
      "CVSSv3 with no alternative"
    ],
    "a": "A",
    "e": "General Settings currently documents VPR as the default instance severity metric; verify the actual tenant setting before relying on that default.",
    "origin": "autoral",
    "sourceId": "T03-Q12",
    "references": [
      {
        "title": "General Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
      }
    ]
  },
  {
    "id": "T03-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "After changing the severity metric, why might two findings of the same vulnerability temporarily show different severities?",
    "o": [
      "Only future scans can display findings at all",
      "One has been re-observed under the new metric and the other has not",
      "The metric change deletes the older finding",
      "Every existing finding changes immediately"
    ],
    "a": "B",
    "e": "New or re-observed findings adopt the new metric, while findings not re-detected retain their previous severity until updated.",
    "origin": "autoral",
    "sourceId": "T03-Q13",
    "references": [
      {
        "title": "General Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
      }
    ]
  },
  {
    "id": "T03-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "The primary severity metric has changed. How should the SLA Progress vulnerability age widget be handled?",
    "o": [
      "Its metric settings must be reviewed separately",
      "All dashboard metrics inherit the same setting",
      "SLA values are fixed by the linking key",
      "SLA widgets cannot have their own configuration"
    ],
    "a": "A",
    "e": "SLA Progress has separate severity and age settings, so its calculation must be reviewed independently of general finding severity.",
    "origin": "autoral",
    "sourceId": "T03-Q14",
    "references": [
      {
        "title": "General Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
      }
    ]
  },
  {
    "id": "T03-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "Which check best validates a proposed least-access configuration?",
    "o": [
      "Sign in as a test user and verify both allowed actions and accessible scope",
      "A report filtered to the branch under an admin account",
      "A scan run by an administrator only",
      "A tag name matching the user name without a permission test"
    ],
    "a": "A",
    "e": "Testing with the intended user's identity verifies both permitted actions and the actual data scope enforced by authorization.",
    "origin": "autoral",
    "sourceId": "T03-Q15",
    "references": [
      {
        "title": "RBAC Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm"
      }
    ]
  },
  {
    "id": "T03-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "An existing role does not match the required combination of actions. What option does current VM documentation provide?",
    "o": [
      "An asset tag alone grants the missing actions",
      "A scanner group supplies the missing user privileges",
      "A custom role with appropriate privileges",
      "No custom privilege combinations are supported"
    ],
    "a": "C",
    "e": "Custom roles let administrators select the privilege combination required for the user's operational responsibilities.",
    "origin": "autoral",
    "sourceId": "T03-Q16",
    "references": [
      {
        "title": "Roles",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm"
      },
      {
        "title": "RBAC Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm"
      }
    ]
  },
  {
    "id": "T03-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "Automatic tags can change membership when matching asset attributes change.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Rule-driven membership can change when an asset begins or ceases to match the relevant criteria.",
    "origin": "autoral",
    "sourceId": "T03-Q17",
    "references": [
      {
        "title": "Tag Format and Application",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm"
      }
    ]
  },
  {
    "id": "T03-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "A scanner group can belong to multiple networks at the same time.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement conflicts with the single-Network membership limit; overlapping environments require an appropriate separate sensor arrangement.",
    "origin": "autoral",
    "sourceId": "T03-Q18",
    "references": [
      {
        "title": "Networks",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
      }
    ]
  },
  {
    "id": "T03-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "An exclusion is equivalent to accepting the risk of an already detected vulnerability.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The two operations have different purposes and effects, so excluding a target is not equivalent to accepting a finding's risk.",
    "origin": "autoral",
    "sourceId": "T03-Q19",
    "references": [
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      },
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T03-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Configuração e acesso",
    "q": "A broad role alone does not necessarily express the desired data scope for a branch analyst.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Functional privileges and branch-specific data visibility are separate access-design requirements that must both be validated.",
    "origin": "autoral",
    "sourceId": "T03-Q20",
    "references": [
      {
        "title": "Roles",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm"
      },
      {
        "title": "RBAC Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm"
      }
    ]
  },
  {
    "id": "T04-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Which scan template is designed for discovering live hosts and available inventory information?",
    "o": [
      "Policy Compliance Auditing",
      "A tactical single-vulnerability scan",
      "Host Discovery",
      "Credentialed Patch Audit"
    ],
    "a": "C",
    "e": "Host Discovery identifies live hosts and available inventory attributes to support subsequent assessment planning.",
    "origin": "autoral",
    "sourceId": "T04-Q01",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T04-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A powered-on host blocks ICMP echo. What is the best conclusion from missing echo replies?",
    "o": [
      "The host is offline despite the stated power condition",
      "Its open TCP services are necessarily absent",
      "Its DNS record must have been deleted",
      "Other discovery methods or evidence are needed before declaring it absent"
    ],
    "a": "D",
    "e": "Use other discovery methods or corroborating evidence because an active host can block ICMP echo replies.",
    "origin": "autoral",
    "sourceId": "T04-Q02",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Which discovery method most directly depends on local layer-2 visibility?",
    "o": [
      "TCP discovery through a routed path",
      "ICMP echo through a routed path",
      "DNS name resolution alone",
      "ARP"
    ],
    "a": "D",
    "e": "ARP resolves local layer-2 neighbors and is normally constrained to the scanner's relevant broadcast domain.",
    "origin": "autoral",
    "sourceId": "T04-Q03",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A target runs HTTPS on port 8443, but the scan excludes that port. What should be checked?",
    "o": [
      "A report filter hiding the port after collection",
      "The configured port range and service discovery coverage",
      "A severity recast rule for the service",
      "Risk acceptance filters for the asset"
    ],
    "a": "B",
    "e": "Including TCP 8443 in the relevant port and service-discovery configuration is necessary to assess the HTTPS service described.",
    "origin": "autoral",
    "sourceId": "T04-Q04",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "What is the purpose of using CIDR notation in a scan target definition?",
    "o": [
      "Define a benchmark version",
      "Define a severity threshold",
      "Express an IP address block as part of the target scope",
      "Define a plugin family selection"
    ],
    "a": "C",
    "e": "CIDR expresses an IP prefix and therefore identifies the address block included in the assessment scope.",
    "origin": "autoral",
    "sourceId": "T04-Q05",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A hostname target resolves to an unexpected address. Which investigation is most relevant?",
    "o": [
      "An agent reporting window",
      "DNS resolution and whether the resolved address belongs to the intended scope",
      "Dashboard ownership and report permissions",
      "Finding severity recast criteria"
    ],
    "a": "B",
    "e": "Name resolution determines the address actually contacted, so verify DNS and whether the resolved address is inside the intended scope.",
    "origin": "autoral",
    "sourceId": "T04-Q06",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      },
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T04-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A discovery run observes 28 of 40 expected hosts. What is the defensible observed coverage rate?",
    "o": [
      "30% of hosts proven offline",
      "100% of reachable hosts assessed with credentials",
      "70% of vulnerabilities remediated",
      "70% of the expected hosts"
    ],
    "a": "D",
    "e": "Dividing 28 observed hosts by 40 expected hosts gives 70% observed coverage of the planned inventory.",
    "origin": "autoral",
    "sourceId": "T04-Q07",
    "references": [
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      },
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T04-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "What explains why a passive monitor and an active discovery scan may produce different inventories?",
    "o": [
      "Every difference proves an asset correlation failure",
      "Active discovery and passive traffic share identical coverage",
      "They obtain evidence through different observation methods and coverage",
      "Passive discovery always has filesystem evidence"
    ],
    "a": "C",
    "e": "Active discovery sends probes, while passive monitoring relies on visible traffic; those different evidence paths explain inventory differences.",
    "origin": "autoral",
    "sourceId": "T04-Q08",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      }
    ]
  },
  {
    "id": "T04-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Which statement best describes Safe Checks?",
    "o": [
      "It disables checks that may adversely affect the remote host, while overall scan impact still needs review",
      "It replaces credential privilege validation",
      "It makes all active probing passive",
      "It guarantees zero impact on every target"
    ],
    "a": "A",
    "e": "Safe Checks avoids checks that may harm the remote host, while policy load, concurrency and target sensitivity still require review.",
    "origin": "autoral",
    "sourceId": "T04-Q09",
    "references": [
      {
        "title": "Scan Tuning: Settings Configuration",
        "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
      }
    ]
  },
  {
    "id": "T04-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A legacy device becomes unstable during probing. Which approach best supports safe coverage planning?",
    "o": [
      "Keep the policy and treat missing results as safe",
      "Review policy, exclusions and alternative evidence for that device",
      "Use severity recast to prevent network probes",
      "Increase concurrency before reviewing the device"
    ],
    "a": "B",
    "e": "Review the probing policy and any necessary exclusions, then identify alternative evidence so the device's coverage gap remains explicit.",
    "origin": "autoral",
    "sourceId": "T04-Q10",
    "references": [
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      },
      {
        "title": "Scan Tuning: Settings Configuration",
        "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
      }
    ]
  },
  {
    "id": "T04-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Why can a wider port range increase scan duration?",
    "o": [
      "A wider range always bypasses filtered ports",
      "It disables the need for service identification",
      "More candidate services and network checks may need assessment",
      "It reduces the candidate service surface"
    ],
    "a": "C",
    "e": "A larger candidate port surface can require additional probes and checks, increasing work and response waiting time.",
    "origin": "autoral",
    "sourceId": "T04-Q11",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      },
      {
        "title": "Scan Tuning: Settings Configuration",
        "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
      }
    ]
  },
  {
    "id": "T04-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A scanner sees one subnet but not another in its targets. Which evidence should be reviewed first?",
    "o": [
      "Severity settings only",
      "Risk acceptance criteria only",
      "Audit result overrides only",
      "Routing, firewall behavior, exclusions and actual target scope"
    ],
    "a": "D",
    "e": "Routing, filtering, exclusions and target definitions directly affect whether hosts in the subnet are contacted and observed.",
    "origin": "autoral",
    "sourceId": "T04-Q12",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      },
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      }
    ]
  },
  {
    "id": "T04-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Which record best supports investigating a missing host?",
    "o": [
      "Expected identity, segment, chosen sensor and discovery evidence",
      "The final finding count without expected identities",
      "A report severity summary without discovery evidence",
      "A hostname alone without segment context"
    ],
    "a": "A",
    "e": "Expected identity, segment, sensor and collected discovery evidence provide the context needed to investigate why a specific host is missing.",
    "origin": "autoral",
    "sourceId": "T04-Q13",
    "references": [
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      },
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T04-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Why is identifying a service useful beyond observing that a port is open?",
    "o": [
      "It helps determine what is actually running and which checks are relevant",
      "The open port number proves the exact version",
      "Service identification proves full compliance",
      "Service detection replaces all local checks"
    ],
    "a": "A",
    "e": "Identifying the actual service helps choose relevant checks and interpret exposure beyond simply recording an open socket.",
    "origin": "autoral",
    "sourceId": "T04-Q14",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "The next discovery run finds fewer hosts after adding exclusions. What is the strongest interpretation?",
    "o": [
      "All excluded findings must now be Fixed",
      "Coverage changed and the excluded scope must be accounted for",
      "The reduced count proves risk reduction",
      "The removed hosts have been remediated"
    ],
    "a": "B",
    "e": "Exclusions changed the assessed scope, so the smaller discovery count must be interpreted against that changed coverage.",
    "origin": "autoral",
    "sourceId": "T04-Q15",
    "references": [
      {
        "title": "Exclusions",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
      },
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      }
    ]
  },
  {
    "id": "T04-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "After creating an initial discovery inventory, what best supports vulnerability assessment?",
    "o": [
      "Assume discovery completed all patch checks",
      "Treat discovered hosts as compliant",
      "Select reachable targets and an appropriate assessment policy, then verify results",
      "Accept findings without a vulnerability assessment"
    ],
    "a": "C",
    "e": "Use the inventory to define reachable targets and an appropriate assessment policy, then confirm usable vulnerability results.",
    "origin": "autoral",
    "sourceId": "T04-Q16",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      },
      {
        "title": "Get Started",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
      }
    ]
  },
  {
    "id": "T04-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "A host that does not answer ICMP echo is necessarily offline.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement confuses one missing response type with proven host absence.",
    "origin": "autoral",
    "sourceId": "T04-Q17",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Host Discovery and a full vulnerability assessment have the same purpose and coverage.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement incorrectly equates inventory collection with vulnerability assessment.",
    "origin": "autoral",
    "sourceId": "T04-Q18",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T04-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "An omitted port can create a gap in service assessment.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "If a relevant service port is outside the policy's probe range, that service may be omitted from assessment.",
    "origin": "autoral",
    "sourceId": "T04-Q19",
    "references": [
      {
        "title": "Discovery Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
      }
    ]
  },
  {
    "id": "T04-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Host Discovery e inventário",
    "q": "Observed asset counts are easier to interpret when the expected scope is recorded.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "The expected scope supplies a denominator and identifies missing assets that an isolated observed count cannot explain.",
    "origin": "autoral",
    "sourceId": "T04-Q20",
    "references": [
      {
        "title": "Asset Inventory: Key Attributes",
        "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
      }
    ]
  },
  {
    "id": "T05-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Which template is a suitable starting point for a standard full system network assessment?",
    "o": [
      "A tactical single-CVE scan",
      "Basic Network Scan",
      "Host Discovery",
      "Credentialed Patch Audit when a full assessment is required"
    ],
    "a": "B",
    "e": "Basic Network Scan provides a standard vulnerability assessment starting point; target scope and collection quality still need validation.",
    "origin": "autoral",
    "sourceId": "T05-Q01",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T05-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Plugin settings are locked in a scan based on a user-defined template. Where should those settings be changed?",
    "o": [
      "In the asset network association",
      "In an export filter after execution",
      "In each locked scan field directly",
      "In the related user-defined template"
    ],
    "a": "D",
    "e": "Change the plugin selection in the related user-defined template because the derived scan inherits those locked settings.",
    "origin": "autoral",
    "sourceId": "T05-Q02",
    "references": [
      {
        "title": "Configure Plugins",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm"
      },
      {
        "title": "VM Scan Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/VMScanSettings.htm"
      }
    ]
  },
  {
    "id": "T05-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "New plugins arrive in a family that is fully enabled in the policy. What is the documented behavior?",
    "o": [
      "Only the previously selected plugins remain enabled",
      "They stay disabled despite the fully enabled family",
      "The family becomes partially enabled automatically",
      "The new plugins in that family are automatically enabled"
    ],
    "a": "D",
    "e": "A fully enabled family automatically enables newly received plugins in that family; mixed-family lock settings need separate consideration.",
    "origin": "autoral",
    "sourceId": "T05-Q03",
    "references": [
      {
        "title": "Configure Plugins",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm"
      }
    ]
  },
  {
    "id": "T05-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A Windows credentialed scan has a correct password but cannot access required files or registry data. What should be investigated?",
    "o": [
      "The finding acceptance criteria",
      "Account privileges, host policies and required access paths",
      "Report permission scope only",
      "The selected severity metric"
    ],
    "a": "B",
    "e": "Authentication can succeed while permissions, administrative shares, registry access or host policies still block required collection.",
    "origin": "autoral",
    "sourceId": "T05-Q04",
    "references": [
      {
        "title": "Credentialed Checks on Windows",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm"
      }
    ]
  },
  {
    "id": "T05-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Which protocols does the Windows credentialed checks guide explicitly discuss?",
    "o": [
      "SMB and WMI",
      "SNMP and ICMP only",
      "SSH and SCP",
      "HTTPS to the Core administration interface"
    ],
    "a": "A",
    "e": "The Windows credentialed-checks guidance discusses SMB and WMI access for collecting local host evidence.",
    "origin": "autoral",
    "sourceId": "T05-Q05",
    "references": [
      {
        "title": "Credentialed Checks on Windows",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm"
      }
    ]
  },
  {
    "id": "T05-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Which access method supports local security checks on Linux targets?",
    "o": [
      "Unauthenticated TCP service detection only",
      "SSH with appropriate credentials or keys and needed privileges",
      "SMB with Windows credentials only",
      "An agent status check on the scanner"
    ],
    "a": "B",
    "e": "SSH authentication with sufficient privileges enables collection and execution of supported local Linux security checks.",
    "origin": "autoral",
    "sourceId": "T05-Q06",
    "references": [
      {
        "title": "Credentialed Checks on Linux",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm"
      }
    ]
  },
  {
    "id": "T05-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A Linux login succeeds, but package inventory cannot be retrieved. What is the best interpretation?",
    "o": [
      "Authentication success alone does not confirm complete credentialed checks",
      "All local checks succeeded because login succeeded",
      "Credentials are irrelevant after TCP access succeeds",
      "The absent inventory proves no missing patches"
    ],
    "a": "A",
    "e": "A successful login is only one prerequisite; failure to retrieve native inventory can leave credentialed assessment incomplete.",
    "origin": "autoral",
    "sourceId": "T05-Q07",
    "references": [
      {
        "title": "Nessus Credentialed Checks",
        "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
      }
    ]
  },
  {
    "id": "T05-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Which plugin is useful for reviewing scan execution information?",
    "o": [
      "An asset criticality score alone",
      "A vulnerability state filter alone",
      "21745, OS Security Patch Assessment Failed",
      "19506, Nessus Scan Information"
    ],
    "a": "D",
    "e": "Plugin 19506 provides Nessus Scan Information that can help review execution and collection context when present.",
    "origin": "autoral",
    "sourceId": "T05-Q08",
    "references": [
      {
        "title": "Plugin 19506: Nessus Scan Information",
        "url": "https://www.tenable.com/plugins/nessus/19506"
      }
    ]
  },
  {
    "id": "T05-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Which plugin is relevant to investigating failed OS security patch assessment?",
    "o": [
      "19506 alone, without reviewing patch-failure evidence",
      "21745, OS Security Patch Assessment Failed",
      "The asset linking status alone",
      "The Host Discovery template selection alone"
    ],
    "a": "B",
    "e": "Plugin 21745 specifically reports OS Security Patch Assessment Failed and helps investigate missing patch-assessment evidence.",
    "origin": "autoral",
    "sourceId": "T05-Q09",
    "references": [
      {
        "title": "Plugin 21745: OS Security Patch Assessment Failed",
        "url": "https://www.tenable.com/plugins/nessus/21745"
      }
    ]
  },
  {
    "id": "T05-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A scan status is Completed. Which conclusion is still unsupported without additional evidence?",
    "o": [
      "All targeted hosts completed credentialed local checks successfully",
      "Execution information should be inspected",
      "Results may be available for review",
      "The scan reached a final execution state"
    ],
    "a": "A",
    "e": "Completed is an execution state, not proof that all targeted hosts passed authenticated collection and local checks.",
    "origin": "autoral",
    "sourceId": "T05-Q10",
    "references": [
      {
        "title": "Nessus Credentialed Checks",
        "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
      },
      {
        "title": "Plugin 19506: Nessus Scan Information",
        "url": "https://www.tenable.com/plugins/nessus/19506"
      }
    ]
  },
  {
    "id": "T05-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Why can a non-privileged Linux account yield incomplete compliance coverage?",
    "o": [
      "No local configuration is used by compliance checks",
      "Some system configuration and file-permission checks require elevated access",
      "SSH access is impossible for every non-root account",
      "Successful login gives unrestricted configuration access"
    ],
    "a": "B",
    "e": "Some checks require protected configuration or filesystem access that a non-privileged account cannot obtain.",
    "origin": "autoral",
    "sourceId": "T05-Q11",
    "references": [
      {
        "title": "Credentialed Checks on Linux",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm"
      }
    ]
  },
  {
    "id": "T05-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A scan takes too long. Which tuning approach best supports a reliable comparison?",
    "o": [
      "Change all tuning settings in one run",
      "Change one relevant parameter, measure impact and verify coverage",
      "Increase concurrency without checking target impact",
      "Remove slow plugins before measuring coverage"
    ],
    "a": "B",
    "e": "Changing one relevant parameter and measuring both duration and coverage supports a meaningful tuning comparison.",
    "origin": "autoral",
    "sourceId": "T05-Q12",
    "references": [
      {
        "title": "Scan Tuning: Settings Configuration",
        "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
      }
    ]
  },
  {
    "id": "T05-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "What limitation should be considered when using a tactical scan for a specific vulnerability?",
    "o": [
      "It assesses all service ports regardless of policy",
      "It replaces every later comprehensive scan",
      "Its focused scope does not automatically provide comprehensive assessment",
      "It includes every benchmark by definition"
    ],
    "a": "C",
    "e": "A tactical scan targets a limited objective, so a successful tactical result is not proof of comprehensive assessment coverage.",
    "origin": "autoral",
    "sourceId": "T05-Q13",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T05-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Remote Registry is set to Manual. What should be checked before declaring credentialed scanning impossible?",
    "o": [
      "The service setting alone proves complete authentication",
      "Manual always means Nessus can never start the service",
      "Whether the documented scan option and sufficient privileges can start it during the scan",
      "Changing severity enables the registry service"
    ],
    "a": "C",
    "e": "Verify the documented Remote Registry startup option and required account privileges before assuming Manual makes assessment impossible.",
    "origin": "autoral",
    "sourceId": "T05-Q14",
    "references": [
      {
        "title": "Credentialed Checks on Windows",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm"
      }
    ]
  },
  {
    "id": "T05-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "What is the benefit of reviewing the credential source used by a scan?",
    "o": [
      "Credentials in an export file override scan credentials",
      "It clarifies whether template, scan-specific or managed credentials control access",
      "Any successful credential source guarantees full checks",
      "The source removes all privilege requirements"
    ],
    "a": "B",
    "e": "Understanding inheritance and scan-specific or managed credentials identifies which identity actually controls target access.",
    "origin": "autoral",
    "sourceId": "T05-Q15",
    "references": [
      {
        "title": "Credentials",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Credentials.htm"
      },
      {
        "title": "VM Scan Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/VMScanSettings.htm"
      }
    ]
  },
  {
    "id": "T05-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Findings drop sharply after a service-account change. Which check is most useful before declaring remediation success?",
    "o": [
      "Compare credentialed-check evidence and assessed scope before and after the change",
      "Accept remaining findings to confirm remediation",
      "Ignore the previous credentialed-check evidence",
      "Use the lower total as sufficient proof"
    ],
    "a": "A",
    "e": "Compare authenticated collection and target coverage because the new account may have reduced evidence instead of exposing genuine remediation.",
    "origin": "autoral",
    "sourceId": "T05-Q16",
    "references": [
      {
        "title": "Nessus Credentialed Checks",
        "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
      },
      {
        "title": "Plugin 19506: Nessus Scan Information",
        "url": "https://www.tenable.com/plugins/nessus/19506"
      }
    ]
  },
  {
    "id": "T05-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "Successful SSH authentication alone always proves that complete credentialed checks ran.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement incorrectly treats authentication as sufficient evidence for all required local checks.",
    "origin": "autoral",
    "sourceId": "T05-Q17",
    "references": [
      {
        "title": "Nessus Credentialed Checks",
        "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
      }
    ]
  },
  {
    "id": "T05-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A fully enabled plugin family can automatically include newly received plugins.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "A fully enabled plugin family incorporates newly received family plugins automatically under the documented selection behavior.",
    "origin": "autoral",
    "sourceId": "T05-Q18",
    "references": [
      {
        "title": "Configure Plugins",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm"
      }
    ]
  },
  {
    "id": "T05-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A correct Windows password guarantees access to all required administrative shares and registry data.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "Authentication and authorization are separate prerequisites, so correct credentials alone cannot guarantee every required access path.",
    "origin": "autoral",
    "sourceId": "T05-Q19",
    "references": [
      {
        "title": "Credentialed Checks on Windows",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm"
      }
    ]
  },
  {
    "id": "T05-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Scans de rede e credenciais",
    "q": "A focused tactical scan and a comprehensive network scan may have different assessment coverage.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "A tactical policy is focused on a particular objective, whereas a comprehensive policy assesses a broader set of exposures.",
    "origin": "autoral",
    "sourceId": "T05-Q20",
    "references": [
      {
        "title": "Scan Templates",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
      }
    ]
  },
  {
    "id": "T06-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Where does a Tenable Agent perform its local vulnerability checks?",
    "o": [
      "On the manager appliance for all local checks",
      "On the host where the agent is installed",
      "On the linked network scanner for all local checks",
      "On the cloud scanner for all local checks"
    ],
    "a": "B",
    "e": "An agent runs local vulnerability checks using the host on which it is installed.",
    "origin": "autoral",
    "sourceId": "T06-Q01",
    "references": [
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T06-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "An agent appears in the linked list. What still needs verification?",
    "o": [
      "Installed service proves current platform communication",
      "Linkage proves all relevant checks and uploads succeeded",
      "Whether it communicated, executed relevant checks and uploaded results",
      "Current tag membership proves a completed agent scan"
    ],
    "a": "C",
    "e": "Verify communication, actual assessment execution and result upload because these are distinct steps beyond initial linkage.",
    "origin": "autoral",
    "sourceId": "T06-Q02",
    "references": [
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      },
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T06-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "What is the role of an agent group in an agent scan configuration?",
    "o": [
      "Change the severity metric on each host",
      "Organize the agents intended to participate in the scan",
      "Define a routed network for remote service scanning",
      "Apply user permissions to every finding"
    ],
    "a": "B",
    "e": "Agent groups organize the agents included in a particular agent assessment configuration.",
    "origin": "autoral",
    "sourceId": "T06-Q03",
    "references": [
      {
        "title": "Sensors",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
      },
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "What does a scan window define for an agent group?",
    "o": [
      "A timeframe in which the group must report for inclusion in the scan results",
      "A vulnerability remediation deadline",
      "A guarantee that linked agents stay online",
      "The local operating-system uptime interval"
    ],
    "a": "A",
    "e": "The scan window defines the timeframe in which selected agents must participate and report for inclusion in that scan's results.",
    "origin": "autoral",
    "sourceId": "T06-Q04",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Which mechanism can launch a triggered agent scan?",
    "o": [
      "Only a manually launched platform window scan",
      "An interval, a trigger file or a documented nessuscli command",
      "Only a scanner-group task assignment",
      "Only a dashboard refresh"
    ],
    "a": "B",
    "e": "Supported triggers include intervals, trigger files and documented nessuscli operations for the configured agent scan.",
    "origin": "autoral",
    "sourceId": "T06-Q05",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "A mobile workforce frequently misses fixed scan windows. Which approach deserves consideration?",
    "o": [
      "Shorten the fixed window without reviewing participation",
      "Use a cloud scanner with no route to the notebooks",
      "Triggered scans matched to endpoint availability and workflow",
      "Accept risks of hosts missing the window"
    ],
    "a": "C",
    "e": "Agent-side triggered scans can align collection with endpoint availability, while communication and result delivery still require verification.",
    "origin": "autoral",
    "sourceId": "T06-Q06",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Which command helps observe linkage and communication status of an agent?",
    "o": [
      "nessuscli agent status",
      "nessuscli agent unlink",
      "An ICMP check against another notebook",
      "A cloud report export command"
    ],
    "a": "A",
    "e": "The agent status command exposes useful linkage and communication state without deliberately breaking the association.",
    "origin": "autoral",
    "sourceId": "T06-Q07",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T06-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "What must still work for locally collected results to reach VM?",
    "o": [
      "Inbound scanner connectivity to every laptop",
      "Communication from the agent to the documented manager endpoint",
      "Successful upload without any manager communication",
      "A passive traffic feed to the agent"
    ],
    "a": "B",
    "e": "The agent must communicate with its documented manager endpoint to deliver locally collected assessment results.",
    "origin": "autoral",
    "sourceId": "T06-Q08",
    "references": [
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      },
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T06-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Which need can remain after deploying agents to all laptops?",
    "o": [
      "Every network scan becomes redundant",
      "Assessment of how network services are exposed to remote scanners",
      "Every remote service is guaranteed reachable",
      "Remote exposure is fully proven by local checks"
    ],
    "a": "B",
    "e": "Network scanners can still assess the service exposure visible from their network vantage point, complementing local agent checks.",
    "origin": "autoral",
    "sourceId": "T06-Q09",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      },
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T06-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "According to the triggered scan guide, how are triggered-scan vulnerability data exported?",
    "o": [
      "Individual exports identical to window scan results",
      "Through the bulk vulnerability export API",
      "Only export of agent group membership",
      "A report card with no vulnerability data export"
    ],
    "a": "B",
    "e": "Triggered vulnerability results are retrieved through the bulk vulnerability export API, according to the triggered-scan guidance.",
    "origin": "autoral",
    "sourceId": "T06-Q10",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Which status detail can help investigate an agent that reports unexpectedly limited checks?",
    "o": [
      "Agent group name alone",
      "Only the host business criticality score",
      "The user role that opens the dashboard",
      "The current plugin set and scan information"
    ],
    "a": "D",
    "e": "The current plugin set and scan information help determine whether the agent had and executed the expected checks.",
    "origin": "autoral",
    "sourceId": "T06-Q11",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T06-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "A VM release dated October 6, 2026 describes an agent health change. What is the stated condition for Offline?",
    "o": [
      "No check-in for 72 hours or more",
      "No check-in for seven days",
      "No scan findings after a completed upload",
      "No check-in for 24 hours"
    ],
    "a": "A",
    "e": "The referenced October 6, 2026 release change defines Offline as no check-in for at least 72 hours; verify the applicable product version.",
    "origin": "autoral",
    "sourceId": "T06-Q12",
    "references": [
      {
        "title": "VM 2026 Release Notes",
        "url": "https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm"
      }
    ]
  },
  {
    "id": "T06-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "An agent is offline for the entire reporting window. What should be investigated?",
    "o": [
      "The host has been technically remediated",
      "The endpoint has Passed every audit",
      "A participation gap in that window and options for future coverage",
      "The platform guarantees results in the same window"
    ],
    "a": "C",
    "e": "Treat the missing participation as a coverage gap and investigate endpoint availability and an appropriate future collection method.",
    "origin": "autoral",
    "sourceId": "T06-Q13",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Which command pattern launches an existing triggered scan by UUID?",
    "o": [
      "nessuscli agent unlink",
      "nessuscli scan-triggers --start --UUID=<scan-uuid>",
      "nessuscli agent link",
      "nessuscli agent status"
    ],
    "a": "B",
    "e": "The scan-triggers start operation identifies the existing configured scan by UUID and requests its execution.",
    "origin": "autoral",
    "sourceId": "T06-Q14",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      },
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "An agent service runs but Last connect is old and results are missing. What is the next useful investigation?",
    "o": [
      "Only the finding severity metric",
      "Only the group display name",
      "Only the local service running state",
      "Endpoint reachability, proxy/TLS behavior and linkage status"
    ],
    "a": "D",
    "e": "Check the documented endpoint, routing, proxy/TLS path and linkage because local service operation does not guarantee manager connectivity.",
    "origin": "autoral",
    "sourceId": "T06-Q15",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      },
      {
        "title": "Sensor Security",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
      }
    ]
  },
  {
    "id": "T06-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "A newly documented agent feature is absent in the study environment. What should be checked?",
    "o": [
      "Version, configuration and availability requirements in current documentation",
      "Assume a release announcement changes all old installations",
      "Assume every linked agent supports every new feature",
      "Use successful linkage as proof of feature availability"
    ],
    "a": "A",
    "e": "Feature availability can depend on version, configuration and deployment conditions, so check those documented prerequisites.",
    "origin": "autoral",
    "sourceId": "T06-Q16",
    "references": [
      {
        "title": "VM 2026 Release Notes",
        "url": "https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm"
      },
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      }
    ]
  },
  {
    "id": "T06-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "A scan window guarantees that every linked agent will report successfully.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement overstates the window's effect; endpoint availability and communication still determine participation.",
    "origin": "autoral",
    "sourceId": "T06-Q17",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Triggered scans can be initiated by agent-side triggers without a separate window launch by a user.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Configured agent-side triggers can launch a triggered assessment without a user separately starting a platform window scan.",
    "origin": "autoral",
    "sourceId": "T06-Q18",
    "references": [
      {
        "title": "Triggered Agent Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
      }
    ]
  },
  {
    "id": "T06-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Agents and active network scanners always provide identical assessment perspectives.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement incorrectly treats complementary collection methods as universally identical.",
    "origin": "autoral",
    "sourceId": "T06-Q19",
    "references": [
      {
        "title": "Tenable Network Monitor",
        "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
      },
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T06-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Agents e cobertura móvel",
    "q": "Installed, linked, scanned and uploaded are distinct checkpoints when investigating an agent.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Installation, association, execution and upload each require their own evidence when diagnosing a missing or incomplete agent result.",
    "origin": "autoral",
    "sourceId": "T06-Q20",
    "references": [
      {
        "title": "Agent CLI",
        "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
      },
      {
        "title": "Agents",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
      }
    ]
  },
  {
    "id": "T07-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Which information distinguishes vulnerability instances on an asset according to VM documentation?",
    "o": [
      "Asset hostname and dashboard title",
      "CVE name alone without instance context",
      "CVSS score and report date alone",
      "Plugin ID, port and protocol"
    ],
    "a": "D",
    "e": "VM distinguishes an instance on an asset by plugin ID, port and protocol, allowing separate occurrences to be tracked.",
    "origin": "autoral",
    "sourceId": "T07-Q01",
    "references": [
      {
        "title": "Findings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm"
      }
    ]
  },
  {
    "id": "T07-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "A vulnerability is detected once on a host. Which UI state describes that initial detection?",
    "o": [
      "New",
      "Fixed after reassessment",
      "Active after multiple detections",
      "Resurfaced after Fixed"
    ],
    "a": "A",
    "e": "New represents the initial single detection of the vulnerability on the host.",
    "origin": "autoral",
    "sourceId": "T07-Q02",
    "references": [
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      }
    ]
  },
  {
    "id": "T07-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "A vulnerability previously marked Fixed is detected again. Which state applies?",
    "o": [
      "Accepted automatically after recurrence",
      "New regardless of prior state",
      "Active with no resurfacing distinction",
      "Resurfaced"
    ],
    "a": "D",
    "e": "Resurfaced explicitly identifies a new detection following a previously Fixed state.",
    "origin": "autoral",
    "sourceId": "T07-Q03",
    "references": [
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      }
    ]
  },
  {
    "id": "T07-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "What should a user know when filtering Active vulnerabilities in the UI?",
    "o": [
      "It contains only findings with Accept rules",
      "It always excludes New",
      "It contains only previously Fixed findings",
      "The filter also includes New vulnerabilities"
    ],
    "a": "D",
    "e": "New findings are included when filtering for Active vulnerabilities, so the filter is broader than repeated detections alone.",
    "origin": "autoral",
    "sourceId": "T07-Q04",
    "references": [
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      }
    ]
  },
  {
    "id": "T07-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "How are new and active UI vulnerability states represented in the API?",
    "o": [
      "Both are labeled reopened",
      "Both are labeled fixed",
      "Both are labeled open",
      "New is open and active is closed"
    ],
    "a": "C",
    "e": "The API represents both New and Active UI vulnerabilities with the open state.",
    "origin": "autoral",
    "sourceId": "T07-Q05",
    "references": [
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      }
    ]
  },
  {
    "id": "T07-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "What distinguishes VPR from a technical severity score alone?",
    "o": [
      "It is the asset business-criticality rating",
      "It incorporates dynamic vulnerability and threat information",
      "It is the elapsed scan execution time",
      "It is only a static technical severity vector"
    ],
    "a": "B",
    "e": "VPR incorporates changing vulnerability and threat intelligence, adding prioritization context beyond a static technical severity score.",
    "origin": "autoral",
    "sourceId": "T07-Q06",
    "references": [
      {
        "title": "CVSS vs. VPR",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
      }
    ]
  },
  {
    "id": "T07-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "What does ACR describe when available under the required licensing?",
    "o": [
      "Technical severity of a CVE",
      "Global threat activity for a vulnerability",
      "The business criticality of an asset",
      "The maturity of an exploit without asset context"
    ],
    "a": "C",
    "e": "ACR expresses an asset's importance to the organization and is available under the applicable additional licensing.",
    "origin": "autoral",
    "sourceId": "T07-Q07",
    "references": [
      {
        "title": "Tenable Scoring Explained: VM",
        "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
      }
    ]
  },
  {
    "id": "T07-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Which VPR driver offers evidence about known exploitation context?",
    "o": [
      "The number of hosts assigned to an agent group",
      "The asset operating-system display name",
      "The business owner of the asset",
      "Whether the vulnerability is on CISA KEV"
    ],
    "a": "D",
    "e": "CISA KEV membership identifies known exploitation context and is a documented VPR-related driver.",
    "origin": "autoral",
    "sourceId": "T07-Q08",
    "references": [
      {
        "title": "CVSS vs. VPR",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
      }
    ]
  },
  {
    "id": "T07-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Why should a team consider business context separately from VPR drivers?",
    "o": [
      "Asset role is the same as global vulnerability threat",
      "VPR automatically captures every internal dependency",
      "A user directly rewrites VPR for each business unit",
      "VPR drivers reflect the vulnerability threat landscape rather than a customized asset business role"
    ],
    "a": "D",
    "e": "VPR drivers describe the global vulnerability threat landscape; organization-specific asset criticality must be considered separately.",
    "origin": "autoral",
    "sourceId": "T07-Q09",
    "references": [
      {
        "title": "CVSS vs. VPR",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
      },
      {
        "title": "Tenable Scoring Explained: VM",
        "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
      }
    ]
  },
  {
    "id": "T07-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "A question asks about severity but does not state the configured metric. What is the best analytical habit?",
    "o": [
      "Assume recast rules define the base metric",
      "Identify the metric and relevant version before applying its severity rules",
      "Assume CVSSv2 in every version and tenant",
      "Use ACR as the severity of every vulnerability"
    ],
    "a": "B",
    "e": "Identify the metric and applicable version because CVSS-based and VPR-based configurations can classify the same finding differently.",
    "origin": "autoral",
    "sourceId": "T07-Q10",
    "references": [
      {
        "title": "General Settings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
      },
      {
        "title": "CVSS vs. VPR",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
      }
    ]
  },
  {
    "id": "T07-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "What does a vulnerability Recast rule change?",
    "o": [
      "The underlying installed software version",
      "The target service exposure configuration",
      "The missing patch on the target",
      "The severity of matching findings"
    ],
    "a": "D",
    "e": "Recast changes the severity applied to findings matching its defined criteria and scope.",
    "origin": "autoral",
    "sourceId": "T07-Q11",
    "references": [
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T07-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "What is the documented effect of an Accept rule on matching vulnerability findings?",
    "o": [
      "Mark the technical flaw resolved without reassessment",
      "Accept the risk and hide matching findings from the Findings table",
      "Install a patch and hide the remediated finding",
      "Exclude the host from every future assessment"
    ],
    "a": "B",
    "e": "An Accept rule accepts the risk and hides matching findings from the Findings table within its configured scope.",
    "origin": "autoral",
    "sourceId": "T07-Q12",
    "references": [
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T07-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "A rule intended for one application matches an entire subnet. What is the main review priority?",
    "o": [
      "Treat the broad match as technical remediation",
      "Narrow the criteria and confirm the exact matching assets and findings",
      "Extend expiration before inspecting the match scope",
      "Keep the broad scope because the rule has a name"
    ],
    "a": "B",
    "e": "Review the matched assets and findings and narrow criteria to the intended application so unrelated findings are not affected.",
    "origin": "autoral",
    "sourceId": "T07-Q13",
    "references": [
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T07-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Which evidence best supports closing a remediation action?",
    "o": [
      "The total decreased without checking assessment coverage",
      "The matching row is hidden by Accept",
      "A suitable reassessment no longer detects the relevant vulnerability under comparable coverage",
      "The finding severity changed through Recast"
    ],
    "a": "C",
    "e": "A comparable, suitable reassessment that no longer detects the specific issue supports technical remediation of that issue.",
    "origin": "autoral",
    "sourceId": "T07-Q14",
    "references": [
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      },
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T07-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "The same plugin affects multiple hosts. Why can a plugin count be misleading for operations?",
    "o": [
      "The plugin count always equals affected host count",
      "One plugin represents only one occurrence in every report",
      "A plugin count proves the inventory was fully assessed",
      "It does not by itself express all affected assets and occurrences"
    ],
    "a": "D",
    "e": "Counting unique plugins alone omits how broadly each issue affects assets and individual occurrences.",
    "origin": "autoral",
    "sourceId": "T07-Q15",
    "references": [
      {
        "title": "Findings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm"
      },
      {
        "title": "My Findings: Vulnerability Intelligence",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/my-findings-tab.htm"
      }
    ]
  },
  {
    "id": "T07-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Which view specifically relates vulnerability intelligence to findings in the organization environment?",
    "o": [
      "The scanner installation-status view only",
      "The global CVE list with no tenant findings context",
      "The agent linkage inventory only",
      "My Findings"
    ],
    "a": "D",
    "e": "My Findings relates vulnerability intelligence to vulnerabilities observed in the organization's environment.",
    "origin": "autoral",
    "sourceId": "T07-Q16",
    "references": [
      {
        "title": "My Findings: Vulnerability Intelligence",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/my-findings-tab.htm"
      },
      {
        "title": "Identify Your Exposure",
        "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/identify-your-exposure.htm"
      }
    ]
  },
  {
    "id": "T07-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "A user can directly edit the calculated VPR value.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement conflicts with the documented restriction on directly editing VPR values.",
    "origin": "autoral",
    "sourceId": "T07-Q17",
    "references": [
      {
        "title": "CVSS vs. VPR",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
      }
    ]
  },
  {
    "id": "T07-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Changing a finding severity through Recast installs the missing patch on the target.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "Technical remediation requires a target-side corrective action and suitable validation, not merely a finding severity override.",
    "origin": "autoral",
    "sourceId": "T07-Q18",
    "references": [
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T07-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Resurfaced describes a vulnerability detected again after a Fixed state.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "The lifecycle state Resurfaced records a vulnerability detected again after previously being Fixed.",
    "origin": "autoral",
    "sourceId": "T07-Q19",
    "references": [
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      }
    ]
  },
  {
    "id": "T07-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Findings, risco e exceções",
    "q": "Threat information and asset business criticality can both support remediation prioritization.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Threat likelihood and asset business importance inform different parts of the remediation decision and can be considered together.",
    "origin": "autoral",
    "sourceId": "T07-Q20",
    "references": [
      {
        "title": "CVSS vs. VPR",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
      },
      {
        "title": "Tenable Scoring Explained: VM",
        "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
      }
    ]
  },
  {
    "id": "T08-Q01",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "What does a compliance audit primarily compare?",
    "o": [
      "Only known CVEs against exploit activity",
      "Only observed services against port numbers",
      "Only scan duration against a reporting deadline",
      "Observed configuration against specified benchmark requirements"
    ],
    "a": "D",
    "e": "Compliance auditing compares collected configuration evidence with the selected benchmark or audit requirements.",
    "origin": "autoral",
    "sourceId": "T08-Q01",
    "references": [
      {
        "title": "Compliance in Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
      }
    ]
  },
  {
    "id": "T08-Q02",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Why must an audit file match the target system and intended benchmark version?",
    "o": [
      "A benchmark version has no effect on requirements",
      "Otherwise the checks may not represent the applicable configuration requirements",
      "Any audit applies equally to every target platform",
      "The audit filename alone configures the target"
    ],
    "a": "B",
    "e": "An incompatible platform or benchmark version can test the wrong settings and fail to represent the applicable requirements.",
    "origin": "autoral",
    "sourceId": "T08-Q02",
    "references": [
      {
        "title": "Compliance in Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
      },
      {
        "title": "System Hardening",
        "url": "https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm"
      }
    ]
  },
  {
    "id": "T08-Q03",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "An audit check reports Warning. What is the best next step?",
    "o": [
      "Investigate the result and required review before declaring compliance",
      "Use risk acceptance as evidence that the control passed",
      "Treat every Warning as a confirmed configuration failure",
      "Treat it as Passed without review"
    ],
    "a": "A",
    "e": "Investigate the Warning's evidence and any manual review requirements before drawing a compliance conclusion.",
    "origin": "autoral",
    "sourceId": "T08-Q03",
    "references": [
      {
        "title": "System Hardening",
        "url": "https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm"
      }
    ]
  },
  {
    "id": "T08-Q04",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "A check reports Passed. What does that support?",
    "o": [
      "The tested parameter met the applicable check requirements in the collected evidence",
      "Every control remains compliant indefinitely",
      "Untested requirements also passed",
      "The host has no vulnerabilities"
    ],
    "a": "A",
    "e": "Passed supports that the particular tested requirement was satisfied in the evidence collected for that check.",
    "origin": "autoral",
    "sourceId": "T08-Q04",
    "references": [
      {
        "title": "System Hardening",
        "url": "https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm"
      }
    ]
  },
  {
    "id": "T08-Q05",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "A configuration check cannot read the required setting due to insufficient access. What should be reviewed?",
    "o": [
      "Use a severity recast rule instead of collecting data",
      "Assume the missing evidence proves Passed",
      "Credential privileges and evidence collection before interpreting compliance",
      "Replace the benchmark without inspecting access"
    ],
    "a": "C",
    "e": "Check the account's privileges and collection path before interpreting a result based on inaccessible configuration data.",
    "origin": "autoral",
    "sourceId": "T08-Q05",
    "references": [
      {
        "title": "Compliance in Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
      },
      {
        "title": "Credentialed Checks on Linux",
        "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm"
      }
    ]
  },
  {
    "id": "T08-Q06",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "A scan uses a user-defined template and its compliance settings are inherited. Where is the configuration changed?",
    "o": [
      "In the exported report only",
      "In the related user-defined template",
      "In the asset severity override",
      "In each inherited scan setting directly"
    ],
    "a": "B",
    "e": "The associated user-defined template controls the inherited compliance settings of its derived scans.",
    "origin": "autoral",
    "sourceId": "T08-Q06",
    "references": [
      {
        "title": "Compliance in Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
      }
    ]
  },
  {
    "id": "T08-Q07",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "What is essential when modifying conditional logic in a custom audit?",
    "o": [
      "Infer results only from the audit filename",
      "Assume syntax validity proves policy correctness",
      "Validate applicable and alternative paths against expected evidence",
      "Test only one branch and assume the other is valid"
    ],
    "a": "C",
    "e": "Test relevant conditional paths against known expected evidence to verify the custom audit's behavior and interpretation.",
    "origin": "autoral",
    "sourceId": "T08-Q07",
    "references": [
      {
        "title": "Compliance Checks Reference: Conditions",
        "url": "https://docs.tenable.com/nessus/compliance-checks-reference/Content/Conditions.htm"
      }
    ]
  },
  {
    "id": "T08-Q08",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Which capability helps move from an aggregate dashboard indicator to the underlying evidence?",
    "o": [
      "Only exporting the aggregate total",
      "Drill-down to the relevant assets or findings",
      "Only changing the dashboard severity colors",
      "Only hiding categories that are hard to explain"
    ],
    "a": "B",
    "e": "Drill-down exposes the assets or findings contributing to the indicator so their underlying evidence can be reviewed.",
    "origin": "autoral",
    "sourceId": "T08-Q08",
    "references": [
      {
        "title": "Create a Dashboard",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Dashboards/CreateADashboard.htm"
      }
    ]
  },
  {
    "id": "T08-Q09",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Two reports disagree on vulnerability totals. Which factors should be compared first?",
    "o": [
      "Assume report filters cannot affect totals",
      "Compare only totals while ignoring units",
      "Assume a different total always proves data corruption",
      "Filters, dates, permissions and the unit being counted"
    ],
    "a": "D",
    "e": "Compare filters, collection timing, permissions and counting units before concluding that apparently different totals are inconsistent.",
    "origin": "autoral",
    "sourceId": "T08-Q09",
    "references": [
      {
        "title": "Exports",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
      },
      {
        "title": "Findings",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm"
      }
    ]
  },
  {
    "id": "T08-Q10",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Which format is appropriate for structured offline analysis of exported findings?",
    "o": [
      "Only a total printed in a report card",
      "Only a dashboard screenshot",
      "Only a PDF cover without occurrence data",
      "CSV or JSON as supported by the export feature"
    ],
    "a": "D",
    "e": "Supported CSV or JSON exports retain structured fields suitable for offline filtering, aggregation and analysis.",
    "origin": "autoral",
    "sourceId": "T08-Q10",
    "references": [
      {
        "title": "Exports",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
      }
    ]
  },
  {
    "id": "T08-Q11",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "What does the documented report creation API produce from templates and filters?",
    "o": [
      "A configuration remediation script",
      "A patch package for each finding",
      "A PDF report",
      "A new local scan policy executed on all hosts"
    ],
    "a": "C",
    "e": "The report creation API generates a PDF based on the chosen template and filters.",
    "origin": "autoral",
    "sourceId": "T08-Q11",
    "references": [
      {
        "title": "Create Report API",
        "url": "https://developer.tenable.com/reference/vm-reports-create"
      }
    ]
  },
  {
    "id": "T08-Q12",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Which information best supports an operations team receiving a remediation report?",
    "o": [
      "Only a trend without affected assets or owners",
      "Only the percentage of visible low findings",
      "Affected assets, evidence, proposed action, responsible owner and follow-up",
      "Only the largest severity total"
    ],
    "a": "C",
    "e": "Asset identity, evidence, proposed remediation, ownership and follow-up make the report actionable for the receiving team.",
    "origin": "autoral",
    "sourceId": "T08-Q12",
    "references": [
      {
        "title": "Create Report API",
        "url": "https://developer.tenable.com/reference/vm-reports-create"
      },
      {
        "title": "Use Report Cards",
        "url": "https://docs.tenable.com/vulnerability-management/Content/exposure-response/use-report-cards.htm"
      }
    ]
  },
  {
    "id": "T08-Q13",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "What is the purpose of Exposure Response Report Cards?",
    "o": [
      "Override every benchmark result",
      "Show initiative-related progress and responsible-owner context",
      "Provide sensor linkage credentials",
      "Replace the network assessment engine"
    ],
    "a": "B",
    "e": "Exposure Response Report Cards present initiative progress with owner or responsibility context for follow-up.",
    "origin": "autoral",
    "sourceId": "T08-Q13",
    "references": [
      {
        "title": "Use Report Cards",
        "url": "https://docs.tenable.com/vulnerability-management/Content/exposure-response/use-report-cards.htm"
      }
    ]
  },
  {
    "id": "T08-Q14",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "A monthly report shows fewer findings, but authenticated coverage dropped substantially. What is the appropriate conclusion?",
    "o": [
      "The lower total proves technical remediation",
      "The loss of authenticated checks cannot affect findings",
      "Every absent finding must be Fixed",
      "The trend requires coverage context before being treated as remediation progress"
    ],
    "a": "D",
    "e": "Interpret the lower count against changed authenticated coverage before presenting it as verified remediation progress.",
    "origin": "autoral",
    "sourceId": "T08-Q14",
    "references": [
      {
        "title": "Nessus Credentialed Checks",
        "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
      },
      {
        "title": "Exports",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
      }
    ]
  },
  {
    "id": "T08-Q15",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Why can recurring exports be useful for a reporting workflow?",
    "o": [
      "They guarantee that every host was assessed",
      "They bypass permissions and all resource scopes",
      "They convert accepted risk into remediation evidence",
      "They provide structured data delivery on a defined schedule"
    ],
    "a": "D",
    "e": "Recurring exports automate structured data delivery at a configured cadence, supporting repeatable reporting workflows.",
    "origin": "autoral",
    "sourceId": "T08-Q15",
    "references": [
      {
        "title": "Exports",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
      }
    ]
  },
  {
    "id": "T08-Q16",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Which rule type can override a host audit result within its defined scope?",
    "o": [
      "Exclusion",
      "Change Result",
      "Recast",
      "Accept"
    ],
    "a": "B",
    "e": "Change Result overrides host audit results matching its defined scope; it does not itself change the target configuration.",
    "origin": "autoral",
    "sourceId": "T08-Q16",
    "references": [
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      }
    ]
  },
  {
    "id": "T08-Q17",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "A vulnerability scan with no detected CVEs proves that every benchmark requirement is satisfied.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "Compliance requires relevant audit evidence for the specified controls, not merely a vulnerability scan with no CVE findings.",
    "origin": "autoral",
    "sourceId": "T08-Q17",
    "references": [
      {
        "title": "Compliance in Scans",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
      }
    ]
  },
  {
    "id": "T08-Q18",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Reports should record scope and collection timing so that their totals can be interpreted.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Scope and collection timing establish what population and evidence period a report actually represents.",
    "origin": "autoral",
    "sourceId": "T08-Q18",
    "references": [
      {
        "title": "Exports",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
      },
      {
        "title": "Create Report API",
        "url": "https://developer.tenable.com/reference/vm-reports-create"
      }
    ]
  },
  {
    "id": "T08-Q19",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Warning must always be treated as a confirmed Passed result.",
    "o": [
      "True",
      "False"
    ],
    "a": "B",
    "e": "The statement incorrectly treats an uncertain or review-required outcome as conclusive compliance evidence.",
    "origin": "autoral",
    "sourceId": "T08-Q19",
    "references": [
      {
        "title": "System Hardening",
        "url": "https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm"
      }
    ]
  },
  {
    "id": "T08-Q20",
    "course": "tenable",
    "type": "single",
    "topic": "Compliance, relatórios e resposta",
    "q": "Accepting a risk and verifying technical remediation represent different outcomes.",
    "o": [
      "True",
      "False"
    ],
    "a": "A",
    "e": "Risk acceptance documents a decision to tolerate exposure, while technical remediation removes or mitigates the underlying issue and needs verification.",
    "origin": "autoral",
    "sourceId": "T08-Q20",
    "references": [
      {
        "title": "Add Recast, Change Result and Accept Rules",
        "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
      },
      {
        "title": "Vulnerability States",
        "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
      }
    ]
  }
];
  const exams = [
  {
    "id": "tema01",
    "title": "01 Arquitetura e fundamentos",
    "minutes": 40,
    "ids": [
      "T01-Q01",
      "T01-Q02",
      "T01-Q03",
      "T01-Q04",
      "T01-Q05",
      "T01-Q06",
      "T01-Q07",
      "T01-Q08",
      "T01-Q09",
      "T01-Q10",
      "T01-Q11",
      "T01-Q12",
      "T01-Q13",
      "T01-Q14",
      "T01-Q15",
      "T01-Q16",
      "T01-Q17",
      "T01-Q18",
      "T01-Q19",
      "T01-Q20"
    ]
  },
  {
    "id": "tema02",
    "title": "02 Instalação e sensores",
    "minutes": 40,
    "ids": [
      "T02-Q01",
      "T02-Q02",
      "T02-Q03",
      "T02-Q04",
      "T02-Q05",
      "T02-Q06",
      "T02-Q07",
      "T02-Q08",
      "T02-Q09",
      "T02-Q10",
      "T02-Q11",
      "T02-Q12",
      "T02-Q13",
      "T02-Q14",
      "T02-Q15",
      "T02-Q16",
      "T02-Q17",
      "T02-Q18",
      "T02-Q19",
      "T02-Q20"
    ]
  },
  {
    "id": "tema03",
    "title": "03 Configuração e acesso",
    "minutes": 40,
    "ids": [
      "T03-Q01",
      "T03-Q02",
      "T03-Q03",
      "T03-Q04",
      "T03-Q05",
      "T03-Q06",
      "T03-Q07",
      "T03-Q08",
      "T03-Q09",
      "T03-Q10",
      "T03-Q11",
      "T03-Q12",
      "T03-Q13",
      "T03-Q14",
      "T03-Q15",
      "T03-Q16",
      "T03-Q17",
      "T03-Q18",
      "T03-Q19",
      "T03-Q20"
    ]
  },
  {
    "id": "tema04",
    "title": "04 Host Discovery e inventário",
    "minutes": 40,
    "ids": [
      "T04-Q01",
      "T04-Q02",
      "T04-Q03",
      "T04-Q04",
      "T04-Q05",
      "T04-Q06",
      "T04-Q07",
      "T04-Q08",
      "T04-Q09",
      "T04-Q10",
      "T04-Q11",
      "T04-Q12",
      "T04-Q13",
      "T04-Q14",
      "T04-Q15",
      "T04-Q16",
      "T04-Q17",
      "T04-Q18",
      "T04-Q19",
      "T04-Q20"
    ]
  },
  {
    "id": "tema05",
    "title": "05 Scans de rede e credenciais",
    "minutes": 40,
    "ids": [
      "T05-Q01",
      "T05-Q02",
      "T05-Q03",
      "T05-Q04",
      "T05-Q05",
      "T05-Q06",
      "T05-Q07",
      "T05-Q08",
      "T05-Q09",
      "T05-Q10",
      "T05-Q11",
      "T05-Q12",
      "T05-Q13",
      "T05-Q14",
      "T05-Q15",
      "T05-Q16",
      "T05-Q17",
      "T05-Q18",
      "T05-Q19",
      "T05-Q20"
    ]
  },
  {
    "id": "tema06",
    "title": "06 Agents e cobertura móvel",
    "minutes": 40,
    "ids": [
      "T06-Q01",
      "T06-Q02",
      "T06-Q03",
      "T06-Q04",
      "T06-Q05",
      "T06-Q06",
      "T06-Q07",
      "T06-Q08",
      "T06-Q09",
      "T06-Q10",
      "T06-Q11",
      "T06-Q12",
      "T06-Q13",
      "T06-Q14",
      "T06-Q15",
      "T06-Q16",
      "T06-Q17",
      "T06-Q18",
      "T06-Q19",
      "T06-Q20"
    ]
  },
  {
    "id": "tema07",
    "title": "07 Findings, risco e exceções",
    "minutes": 40,
    "ids": [
      "T07-Q01",
      "T07-Q02",
      "T07-Q03",
      "T07-Q04",
      "T07-Q05",
      "T07-Q06",
      "T07-Q07",
      "T07-Q08",
      "T07-Q09",
      "T07-Q10",
      "T07-Q11",
      "T07-Q12",
      "T07-Q13",
      "T07-Q14",
      "T07-Q15",
      "T07-Q16",
      "T07-Q17",
      "T07-Q18",
      "T07-Q19",
      "T07-Q20"
    ]
  },
  {
    "id": "tema08",
    "title": "08 Compliance, relatórios e resposta",
    "minutes": 40,
    "ids": [
      "T08-Q01",
      "T08-Q02",
      "T08-Q03",
      "T08-Q04",
      "T08-Q05",
      "T08-Q06",
      "T08-Q07",
      "T08-Q08",
      "T08-Q09",
      "T08-Q10",
      "T08-Q11",
      "T08-Q12",
      "T08-Q13",
      "T08-Q14",
      "T08-Q15",
      "T08-Q16",
      "T08-Q17",
      "T08-Q18",
      "T08-Q19",
      "T08-Q20"
    ]
  },
  {
    "id": "A",
    "title": "Simulado completo A",
    "minutes": 120,
    "ids": [
      "T06-Q01",
      "T06-Q05",
      "T01-Q03",
      "T01-Q04",
      "T06-Q02",
      "T05-Q02",
      "T03-Q03",
      "T03-Q06",
      "T04-Q03",
      "T02-Q17",
      "T05-Q17",
      "T04-Q04",
      "T04-Q17",
      "T02-Q02",
      "T01-Q06",
      "T01-Q05",
      "T02-Q06",
      "T07-Q02",
      "T08-Q06",
      "T08-Q03",
      "T07-Q03",
      "T05-Q03",
      "T03-Q02",
      "T03-Q01",
      "T07-Q05",
      "T04-Q02",
      "T04-Q06",
      "T03-Q04",
      "T04-Q05",
      "T03-Q17",
      "T01-Q17",
      "T02-Q01",
      "T02-Q03",
      "T05-Q05",
      "T08-Q02",
      "T05-Q01",
      "T05-Q04",
      "T03-Q07",
      "T01-Q01",
      "T02-Q04",
      "T06-Q06",
      "T08-Q05",
      "T03-Q05",
      "T06-Q17",
      "T08-Q01",
      "T06-Q03",
      "T07-Q06",
      "T01-Q02",
      "T05-Q07",
      "T08-Q17",
      "T06-Q04",
      "T07-Q17",
      "T01-Q07",
      "T07-Q04",
      "T07-Q07",
      "T02-Q05",
      "T04-Q01",
      "T05-Q06",
      "T07-Q01",
      "T08-Q04"
    ]
  },
  {
    "id": "B",
    "title": "Simulado completo B",
    "minutes": 120,
    "ids": [
      "T08-Q12",
      "T03-Q13",
      "T08-Q13",
      "T02-Q08",
      "T02-Q11",
      "T04-Q08",
      "T06-Q18",
      "T06-Q09",
      "T06-Q10",
      "T07-Q08",
      "T07-Q18",
      "T01-Q18",
      "T08-Q10",
      "T05-Q09",
      "T03-Q08",
      "T04-Q13",
      "T06-Q12",
      "T05-Q12",
      "T05-Q10",
      "T06-Q07",
      "T04-Q18",
      "T07-Q13",
      "T01-Q12",
      "T07-Q12",
      "T08-Q18",
      "T03-Q11",
      "T02-Q07",
      "T07-Q10",
      "T05-Q08",
      "T02-Q18",
      "T01-Q08",
      "T04-Q11",
      "T02-Q13",
      "T03-Q09",
      "T04-Q09",
      "T03-Q10",
      "T08-Q09",
      "T01-Q11",
      "T01-Q10",
      "T05-Q13",
      "T02-Q12",
      "T06-Q13",
      "T02-Q10",
      "T08-Q08",
      "T08-Q07",
      "T05-Q11",
      "T05-Q18",
      "T04-Q12",
      "T03-Q18",
      "T07-Q11",
      "T08-Q11",
      "T03-Q12",
      "T06-Q08",
      "T01-Q13",
      "T01-Q09",
      "T02-Q09",
      "T04-Q10",
      "T06-Q11",
      "T07-Q09",
      "T04-Q07"
    ]
  },
  {
    "id": "reserva",
    "title": "Revisão mista: 40 itens de reserva A/B",
    "minutes": 80,
    "ids": [
      "T03-Q14",
      "T05-Q19",
      "T03-Q20",
      "T05-Q16",
      "T06-Q15",
      "T07-Q15",
      "T05-Q14",
      "T05-Q15",
      "T01-Q19",
      "T01-Q16",
      "T07-Q19",
      "T03-Q15",
      "T02-Q16",
      "T04-Q14",
      "T04-Q16",
      "T08-Q19",
      "T06-Q14",
      "T08-Q14",
      "T06-Q16",
      "T05-Q20",
      "T06-Q19",
      "T07-Q20",
      "T04-Q20",
      "T08-Q16",
      "T01-Q14",
      "T02-Q20",
      "T03-Q16",
      "T07-Q14",
      "T02-Q19",
      "T08-Q15",
      "T06-Q20",
      "T04-Q19",
      "T02-Q15",
      "T08-Q20",
      "T07-Q16",
      "T01-Q20",
      "T02-Q14",
      "T04-Q15",
      "T03-Q19",
      "T01-Q15"
    ]
  }
];
  const decks = [
  {
    "id": "00",
    "title": "Planejamento",
    "count": 9,
    "path": "Tenable/Slides/00",
    "extension": "png",
    "pptx": "Tenable/Slides/00_Planejamento_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Preparação para o Written Exam",
        "text": "Plano personalizado para duas horas diárias, de segunda a sexta. A data exata do exame permanece a definir.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          }
        ]
      },
      {
        "title": "Formato e objetivo",
        "text": "Metas pedagógicas propostas, sem garantia de aprovação. O PDF permite ferramentas de tradução sem extensão por idioma. Confirmar como utilizá-las nas instruções do agendamento.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "FAQ de certificação e treinamento",
            "url": "https://www.tenable.com/education?view=cert"
          }
        ]
      },
      {
        "title": "Mapa dos temas",
        "text": "Agrupamento didático com base na ementa. Não é um blueprint oficial detalhado.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Rotina de duas horas",
        "text": "Distribuição editorial. Nos dias de simulado completo, reservar os 120 minutos somente para responder. A correção ocorre na sessão seguinte.",
        "references": []
      },
      {
        "title": "Etapas e entregas",
        "text": "A/B usam questões do banco temático. Repetir itens ajuda a revisar, mas não mede prontidão independente. Explicar respostas e resolver laboratórios reduz o efeito de memorização.",
        "references": []
      },
      {
        "title": "Revisão e caderno de erros",
        "text": "Método de revisão proposto. Reservar os itens finais do banco para a revisão mista. Se acertar por memória, explicar o mecanismo sem consultar o gabarito.",
        "references": []
      },
      {
        "title": "Pesquisa e atualização",
        "text": "Revalidar fontes nas semanas 9 e 13. Não presumir que toda novidade do produto foi incorporada ao banco oficial do exame.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "VM 2026 Release Notes",
            "url": "https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm"
          }
        ]
      },
      {
        "title": "Critérios de prontidão",
        "text": "Critérios pedagógicos. Um único acerto a mais ou a menos não determina habilidade. Se houver lacunas, priorizar evidência e conceitos antes de agendar. A certificação completa exige também a prática.",
        "references": [
          {
            "title": "FAQ de certificação e treinamento",
            "url": "https://www.tenable.com/education?view=cert"
          }
        ]
      },
      {
        "title": "Material local e confronto de versões",
        "text": "O guia local fundamenta leituras por páginas. Os bancos locais não têm autenticidade como exame comprovada. As gravações têm apenas inventário e metadados revisados, sem transcrição integral. As regras atuais de severidade e acesso precisam ser lidas na documentação viva.",
        "references": [
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "General Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
          }
        ]
      }
    ]
  },
  {
    "id": "01",
    "title": "01 Arquitetura e fundamentos",
    "count": 8,
    "path": "Tenable/Slides/01",
    "extension": "png",
    "pptx": "Tenable/Slides/01_Arquitetura_e_fundamentos_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Arquitetura e fundamentos",
        "text": "Objetivo do módulo: Escolher os sensores e planejar uma implantação com cobertura verificável. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Escopo da etapa escrita",
        "text": "Os simulados deste pacote são autorais. A certificação completa exige escrita e prática. O número 48/60 é referência para simulados com itens de mesmo peso, sem presumir a metodologia interna de pontuação.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          }
        ]
      },
      {
        "title": "Produtos e responsabilidades",
        "text": "O Security Center é um produto diferente. Não transportar regras de repositórios e scan zones para VM sem conferir a documentação do produto.",
        "references": [
          {
            "title": "Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
          },
          {
            "title": "Sensors",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
          },
          {
            "title": "Tenable Network Monitor",
            "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
          }
        ]
      },
      {
        "title": "Comparação de sensores",
        "text": "A cobertura depende da posição e da conectividade de cada sensor. Um agente não reproduz automaticamente a visão de um scanner remoto.",
        "references": [
          {
            "title": "Sensors",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
          },
          {
            "title": "Tenable Network Monitor",
            "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
          },
          {
            "title": "Agents",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
          }
        ]
      },
      {
        "title": "Planejamento de implantação",
        "text": "Exercício: descreva uma matriz segmento, quantidade esperada, sensor, janela, credencial e responsável. Compare esperado versus observado antes de expandir.",
        "references": [
          {
            "title": "Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
          },
          {
            "title": "Networks",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
          },
          {
            "title": "Scan Distribution",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/scan-distribution.htm"
          }
        ]
      },
      {
        "title": "Descoberta e identidade do ativo",
        "text": "A documentação do template Host Discovery informa que ativos identificados por discovery scans não contam para a licença. Não generalizar essa regra para todo ativo importado ou avaliado.",
        "references": [
          {
            "title": "Networks",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
          },
          {
            "title": "Scan Templates",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
          },
          {
            "title": "Asset Inventory: Key Attributes",
            "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
          }
        ]
      },
      {
        "title": "Caso: matriz de cobertura",
        "text": "Cenário autoral. Complementar com Network Monitor onde o tráfego observado agregue inventário. Relacionar escolhas à evidência coletada, não ao nome comercial do sensor.",
        "references": [
          {
            "title": "Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
          },
          {
            "title": "Tenable Network Monitor",
            "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
          },
          {
            "title": "Agents",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
          }
        ]
      },
      {
        "title": "Laboratório e revisão do tema",
        "text": "Laboratório L01. Trabalhar somente no ambiente de estudo autorizado. Ao revisar, explicar por que cada sensor atende seu caso de uso. Questões e gabarito ficam separados na pasta Simulados.\nMaterial local de apoio: L02 páginas PDF 32, 34, 37, 287, 288. L03 itens 1, 2, 6, 7, 20, 23, 25. L01 itens 3, 5, 6, 7, 8, 34, 35, 39. Arquitetura SaaS e cobertura, sem transportar regras específicas de Security Center. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
          },
          {
            "title": "Sensors",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "title": "02 Instalação e sensores",
    "count": 8,
    "path": "Tenable/Slides/02",
    "extension": "png",
    "pptx": "Tenable/Slides/02_Instalação_e_sensores_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Instalação e sensores",
        "text": "Objetivo do módulo: Vincular sensores, distinguir interfaces e diagnosticar falhas de comunicação. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Tenable Core e Nessus",
        "text": "O curso inclui Tenable Core. Revisar instalação e administração sem presumir que Core substitui o console SaaS.",
        "references": [
          {
            "title": "Tenable Core + Nessus",
            "url": "https://docs.tenable.com/tenable-core/Nessus/Content/Introduction_Nessus.htm"
          },
          {
            "title": "Sensor Security",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
          }
        ]
      },
      {
        "title": "Portas e interfaces",
        "text": "Portas padrão no guia Sensor Security. Regras de acesso aos alvos variam conforme o serviço avaliado. Conferir exceções regionais e de ambiente.",
        "references": [
          {
            "title": "Sensor Security",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
          }
        ]
      },
      {
        "title": "Dimensionamento",
        "text": "Revisar a tabela atual de hardware, evitando memorizar um número universal. O guia alerta para efeitos de NAT em operações de rede de baixo nível.",
        "references": [
          {
            "title": "Hardware Requirements",
            "url": "https://docs.tenable.com/nessus/Content/HardwareRequirements.htm"
          }
        ]
      },
      {
        "title": "Vinculação do sensor",
        "text": "Uma linking key não equivale a access key e secret key de API. Manter segredos fora do caderno de estudo.",
        "references": [
          {
            "title": "Sensor Security",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
          },
          {
            "title": "Manage Sensors",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
          }
        ]
      },
      {
        "title": "Instalação do Agent",
        "text": "Exemplo didático: nessuscli agent link --key=<LINKING_KEY> --host=sensor.cloud.tenable.com --port=443 --groups=\"Lab\". Não executar com dados fictícios em ambiente produtivo. No FedRAMP, usar o endpoint documentado.",
        "references": [
          {
            "title": "Agent CLI",
            "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
          }
        ]
      },
      {
        "title": "Instalação do monitor passivo",
        "text": "O guia atualizado em 27/08/2026 ressalta que atributos de identidade podem demorar ou não ser observáveis no tráfego.",
        "references": [
          {
            "title": "Tenable Network Monitor",
            "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
          }
        ]
      },
      {
        "title": "Laboratório de conectividade",
        "text": "Laboratório L02. No modo sem console, ordenar hipóteses e evidências. Com console, consultar status e logs sem expor tokens. Não executar comandos de reset para tentar corrigir uma falha não diagnosticada.\nMaterial local de apoio: L02 páginas PDF 41, 42, 1354, 1355, 1357. L03 itens 6, 7, 14. L01 itens 5, 7, 33. Interfaces, linking keys e comunicação HTTPS. Corrigir a confusão entre protocolo de aplicação e transporte. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Sensor Security",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/SensorSecurity.htm"
          },
          {
            "title": "Manage Sensors",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/manage-sensors.htm"
          },
          {
            "title": "Agent CLI",
            "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "03",
    "title": "03 Configuração e acesso",
    "count": 8,
    "path": "Tenable/Slides/03",
    "extension": "png",
    "pptx": "Tenable/Slides/03_Configuração_e_acesso_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Configuração e acesso",
        "text": "Objetivo do módulo: Organizar ativos, aplicar acesso adequado e controlar o escopo dos scans. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Roles e permissões",
        "text": "A documentação atual contempla custom roles. Diferenciar capacidade de criar scans de acesso aos dados da equipe.",
        "references": [
          {
            "title": "Roles",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/UserRoles.htm"
          },
          {
            "title": "RBAC Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm"
          }
        ]
      },
      {
        "title": "Tags manuais e automáticas",
        "text": "Exemplos autorais: Ambiente:Lab, Local:Filial, Equipe:Infra. Reavaliar as regras quando o ativo muda de função ou endereço.",
        "references": [
          {
            "title": "Tag Format and Application",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm"
          }
        ]
      },
      {
        "title": "Networks e IPs sobrepostos",
        "text": "Caso autoral: filial A e B utilizam 10.0.0.10. Criar contextos separados. Evitar mover sensores entre networks sem conferir o efeito nos ativos existentes.",
        "references": [
          {
            "title": "Networks",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
          }
        ]
      },
      {
        "title": "Scanner groups e distribuição",
        "text": "O guia descreve round robin por tasks. Não pressupor que todo o scan é atribuído integralmente a um único scanner do grupo.",
        "references": [
          {
            "title": "Scan Distribution",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/scan-distribution.htm"
          }
        ]
      },
      {
        "title": "Exclusions",
        "text": "Exercício: distinguir exclusão preventiva de aceitação de risco. Registrar quem aprova, alvo, duração e alternativa de cobertura como prática de gestão.",
        "references": [
          {
            "title": "Exclusions",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
          }
        ]
      },
      {
        "title": "Severidade e SLA",
        "text": "Existe uma nota antiga em CVSS vs. VPR afirmando severidade baseada em CVSS. General Settings e a release de 27/04/2026 documentam VPR. Conferir a configuração real do tenant e manter explícita a métrica do cenário.",
        "references": [
          {
            "title": "General Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
          }
        ]
      },
      {
        "title": "Laboratório de organização",
        "text": "Laboratório L03. Sem console, montar uma tabela usuário, role, tag e permissão. Com console de estudo, validar com usuário de teste. Descrever o efeito de uma exclusão sobre a cobertura.\nMaterial local de apoio: L02 páginas PDF 1105, 1193, 1202, 1300. L03 itens 12, 19, 25. L01 itens 36, 40. Roles, permissões, tags e networks. Diferenciar objetos de produtos distintos. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "RBAC Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/access-control/rbac-get-started.htm"
          },
          {
            "title": "Tag Format and Application",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Tagging/TagFormatAndApplication.htm"
          },
          {
            "title": "Networks",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Networks.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "04",
    "title": "04 Host Discovery e inventário",
    "count": 8,
    "path": "Tenable/Slides/04",
    "extension": "png",
    "pptx": "Tenable/Slides/04_Host_Discovery_e_inventário_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Host Discovery e inventário",
        "text": "Objetivo do módulo: Encontrar hosts, verificar a cobertura e interpretar as limitações da descoberta. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Host Discovery",
        "text": "Um scan de discovery não equivale a uma avaliação completa de vulnerabilidades. Estabelecer quantos hosts eram esperados, como foram detectados e quais ficaram sem evidência.",
        "references": [
          {
            "title": "Scan Templates",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
          },
          {
            "title": "Asset Inventory: Key Attributes",
            "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
          }
        ]
      },
      {
        "title": "Alvos e escopo",
        "text": "Exemplo autoral em laboratório: 192.0.2.0/28 como notação didática. Conferir targets antes de lançar. O bloco de documentação não é um alvo real de laboratório.",
        "references": [
          {
            "title": "Discovery Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
          },
          {
            "title": "Exclusions",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
          },
          {
            "title": "Get Started",
            "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-management/GetStarted.htm"
          }
        ]
      },
      {
        "title": "Métodos de descoberta",
        "text": "A escolha depende do segmento, filtros e objetivos. ARP utiliza a vizinhança de camada 2. Ausência de resposta a ICMP isoladamente não prova que o host esteja desligado.",
        "references": [
          {
            "title": "Discovery Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
          },
          {
            "title": "Tenable Network Monitor",
            "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
          }
        ]
      },
      {
        "title": "Portas e serviços",
        "text": "Cenário autoral: serviço HTTPS na porta 8443 não aparece em um intervalo que a exclui. Ajustar uma política de teste e comparar o resultado.",
        "references": [
          {
            "title": "Discovery Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
          },
          {
            "title": "Scan Tuning: Settings Configuration",
            "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
          }
        ]
      },
      {
        "title": "Ativos frágeis e impacto",
        "text": "Safe Checks não garante ausência de impacto. O guia de tuning recomenda acompanhar desempenho dos alvos ao ajustar concorrência e timeouts.",
        "references": [
          {
            "title": "Scan Tuning: Settings Configuration",
            "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
          },
          {
            "title": "Exclusions",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exclusions/Exclusions.htm"
          }
        ]
      },
      {
        "title": "Caso: hosts ausentes",
        "text": "Cenário e números autorais. 28/40 corresponde a 70% de cobertura observada, não a 70% de segurança. A evidência disponível não permite declarar os 12 hosts seguros.",
        "references": [
          {
            "title": "Discovery Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
          },
          {
            "title": "Asset Inventory: Key Attributes",
            "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
          }
        ]
      },
      {
        "title": "Laboratório de descoberta",
        "text": "Laboratório L04. Registrar a posição do sensor, método, escopo e horário. Separar alcance do host, identificação do serviço e presença de vulnerabilidades.\nMaterial local de apoio: L02 páginas PDF 287, 288, 293, 294. L03 itens 23, 24, 26, 30, 31, 32. L01 itens 11, 31, 39. Escopo, discovery e inventário. Resolução DNS sozinha não comprova host ativo. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Scan Templates",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
          },
          {
            "title": "Discovery Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/DiscoverySettings.htm"
          },
          {
            "title": "Asset Inventory: Key Attributes",
            "url": "https://docs.tenable.com/cyber-exposure-studies/asset-inventory/Content/KeyAssetAttributes.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "05",
    "title": "05 Scans de rede e credenciais",
    "count": 8,
    "path": "Tenable/Slides/05",
    "extension": "png",
    "pptx": "Tenable/Slides/05_Scans_de_rede_e_credenciais_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Scans de rede e credenciais",
        "text": "Objetivo do módulo: Configurar avaliação de rede e comprovar a execução das verificações autenticadas. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Templates e políticas",
        "text": "A documentação descreve herança de settings do user-defined template. Localizar o objeto que controla a configuração antes de alterá-la.",
        "references": [
          {
            "title": "Scan Templates",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Templates.htm"
          },
          {
            "title": "VM Scan Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/VMScanSettings.htm"
          }
        ]
      },
      {
        "title": "Plugins e atualizações",
        "text": "A seleção de plugins deve acompanhar o objetivo da avaliação. Um tactical scan direcionado a uma CVE não cobre automaticamente todas as vulnerabilidades do host.",
        "references": [
          {
            "title": "Configure Plugins",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Plugins.htm"
          }
        ]
      },
      {
        "title": "Credenciais Windows",
        "text": "No laboratório, restringir acesso ao scanner de estudo e registrar a configuração. Evitar seguir instruções antigas de desativação ampla de controles sem avaliar sua aplicação.",
        "references": [
          {
            "title": "Credentialed Checks on Windows",
            "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm"
          },
          {
            "title": "Credentials",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Credentials.htm"
          }
        ]
      },
      {
        "title": "Credenciais Linux",
        "text": "Distinguir login SSH bem-sucedido de checks completos. Um usuário sem elevação pode permitir algumas verificações, mas não todos os controles de configuração.",
        "references": [
          {
            "title": "Credentialed Checks on Linux",
            "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm"
          },
          {
            "title": "Nessus Credentialed Checks",
            "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
          }
        ]
      },
      {
        "title": "Evidência de scan autenticado",
        "text": "A regra atual de Credentialed checks: yes requer autenticação e inventário nativo de pacotes/patches. No Windows, acesso ao registro e shares ou privilégios SMB adequados também importam. Não concluir sucesso apenas pela ausência de um erro.",
        "references": [
          {
            "title": "Nessus Credentialed Checks",
            "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
          },
          {
            "title": "Plugin 19506: Nessus Scan Information",
            "url": "https://www.tenable.com/plugins/nessus/19506"
          },
          {
            "title": "Plugin 21745: OS Security Patch Assessment Failed",
            "url": "https://www.tenable.com/plugins/nessus/21745"
          }
        ]
      },
      {
        "title": "Tuning e diagnóstico",
        "text": "Prática de diagnóstico: manter alvo e política comparáveis entre execuções. Antes de interpretar melhora, confirmar credenciais, portas e plugins.",
        "references": [
          {
            "title": "Scan Tuning: Settings Configuration",
            "url": "https://docs.tenable.com/quick-reference/vulnerability-management-scan-tuning/Content/SettingsConfiguration.htm"
          },
          {
            "title": "Hardware Requirements",
            "url": "https://docs.tenable.com/nessus/Content/HardwareRequirements.htm"
          }
        ]
      },
      {
        "title": "Laboratório de credenciais",
        "text": "Laboratório L05. Sem console, analisar uma evidência textual fictícia. Com console de estudo, usar um Windows e um Linux autorizados. Registrar os resultados do plugin 19506 quando disponíveis.\nMaterial local de apoio: L02 páginas PDF 287, 288, 293, 294. L03 itens 4, 15, 16, 18, 19. L01 itens 9, 29, 30, 32. Plugins, credenciais e qualidade da coleta. Evitar a ideia de precisão perfeita ou política como lista universal de alvos. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Credentialed Checks on Windows",
            "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnWindows.htm"
          },
          {
            "title": "Credentialed Checks on Linux",
            "url": "https://docs.tenable.com/nessus/Content/CredentialedChecksOnLinux.htm"
          },
          {
            "title": "Nessus Credentialed Checks",
            "url": "https://docs.tenable.com/nessus/Content/NessusCredentialedChecks.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "06",
    "title": "06 Agents e cobertura móvel",
    "count": 8,
    "path": "Tenable/Slides/06",
    "extension": "png",
    "pptx": "Tenable/Slides/06_Agents_e_cobertura_móvel_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Agents e cobertura móvel",
        "text": "Objetivo do módulo: Escolher a modalidade de scan de agents e interpretar vínculo, execução e envio. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Avaliação local do host",
        "text": "Um notebook fora da rede corporativa pode executar checks locais conforme a modalidade configurada. O envio depende da comunicação posterior com o gerenciador.",
        "references": [
          {
            "title": "Agents",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
          },
          {
            "title": "Tenable Network Monitor",
            "url": "https://docs.tenable.com/network-monitor/Content/Welcome.htm"
          }
        ]
      },
      {
        "title": "Link, grupos e status",
        "text": "Distinguir instalado, vinculado, comunicado, executado e enviado. Esses estados não são equivalentes.",
        "references": [
          {
            "title": "Agent CLI",
            "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
          },
          {
            "title": "Sensors",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/ViewSensors.htm"
          }
        ]
      },
      {
        "title": "Scan Window",
        "text": "Não confundir a duração da janela com a garantia de participação de todos os agents. Validar quais hosts efetivamente forneceram dados.",
        "references": [
          {
            "title": "Triggered Agent Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
          }
        ]
      },
      {
        "title": "Triggered Scan",
        "text": "Triggered scans oferecem independência em relação ao lançamento de uma janela pela plataforma. O guia limita a aceitação de dados antigos. Conferir o valor atual antes de memorizar limites.",
        "references": [
          {
            "title": "Triggered Agent Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
          }
        ]
      },
      {
        "title": "Comparação de modalidades",
        "text": "A documentação recomenda window scans quando é necessário exportar resultados individuais. Para triggered scans, a exportação de vulnerabilidades utiliza a API de bulk export.",
        "references": [
          {
            "title": "Triggered Agent Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
          }
        ]
      },
      {
        "title": "Saúde e evolução do produto",
        "text": "Atualização datada de 06/10/2026: health Offline para agents sem check-in por 72 horas. Estudar como atualização de produto. A publicação não comprova que o assunto será cobrado no exame.",
        "references": [
          {
            "title": "VM 2026 Release Notes",
            "url": "https://docs.tenable.com/release-notes/Content/vulnerability-management/2026.htm"
          },
          {
            "title": "Agent CLI",
            "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
          }
        ]
      },
      {
        "title": "Laboratório de agents",
        "text": "Laboratório L06. Sem console, escolher modalidade para três perfis de disponibilidade. Com console, conferir um agent do laboratório e seu histórico. Nunca usar reset como primeiro passo sem diagnóstico.\nMaterial local de apoio: L02 páginas PDF 339, 340, 1300. L03 itens 3. L01 itens 33, 41. Triggered versus window e execução local. Offline exige condições documentadas e envio posterior. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Agent CLI",
            "url": "https://docs.tenable.com/agent/10_8/Content/NessusCLIAgent.htm"
          },
          {
            "title": "Agents",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Sensors/Agents.htm"
          },
          {
            "title": "Triggered Agent Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/TriggeredAgentScans.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "07",
    "title": "07 Findings, risco e exceções",
    "count": 8,
    "path": "Tenable/Slides/07",
    "extension": "png",
    "pptx": "Tenable/Slides/07_Findings_risco_e_exceções_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Findings, risco e exceções",
        "text": "Objetivo do módulo: Interpretar achados e justificar prioridades e exceções com evidências. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Granularidade e filtros",
        "text": "Exemplo autoral: a mesma falha em dois hosts não equivale a um único host exposto. Diferenciar contagem de ativos, plugins e ocorrências.\n\nInterface de referência: dados de demonstração Tenable. Captura oficial consultada em 14/10/2026.",
        "references": [
          {
            "title": "Findings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm"
          },
          {
            "title": "My Findings: Vulnerability Intelligence",
            "url": "https://docs.tenable.com/vulnerability-management/Content/vulnerability-intelligence/my-findings-tab.htm"
          },
          {
            "title": "Interface oficial Tenable Vulnerability Management",
            "url": "https://www.tenable.com/products/vulnerability-management"
          }
        ]
      },
      {
        "title": "Estados das vulnerabilidades",
        "text": "A UI filtra New junto com Active. Na API, new e active aparecem como open, e resurfaced aparece como reopened.",
        "references": [
          {
            "title": "Vulnerability States",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
          }
        ]
      },
      {
        "title": "CVSS, VPR e contexto",
        "text": "A documentação de General Settings prevalece para configuração de severidade. Especificar a métrica adotada quando comparar severidades de findings.",
        "references": [
          {
            "title": "CVSS vs. VPR",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
          },
          {
            "title": "Tenable Scoring Explained: VM",
            "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
          }
        ]
      },
      {
        "title": "Drivers de VPR",
        "text": "Drivers refletem o panorama global da vulnerabilidade. A criticidade de um servidor específico precisa de contexto separado.",
        "references": [
          {
            "title": "CVSS vs. VPR",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/RiskMetrics.htm"
          }
        ]
      },
      {
        "title": "Severidade e decisão de correção",
        "text": "Caso autoral: comparar falha com exploração ativa num servidor crítico e falha técnica grave num host de laboratório. Não criar uma fórmula universal sem política de risco.",
        "references": [
          {
            "title": "General Settings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/General/General.htm"
          },
          {
            "title": "Tenable Scoring Explained: VM",
            "url": "https://docs.tenable.com/quick-reference/scoring-explained/Content/VM.htm"
          },
          {
            "title": "Vulnerability States",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
          }
        ]
      },
      {
        "title": "Recast, Accept e Change Result",
        "text": "Essas ações não aplicam patches. A regra pode levar tempo para refletir nas views. Usar evidências e escopo estreito em exercícios de governança.",
        "references": [
          {
            "title": "Add Recast, Change Result and Accept Rules",
            "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
          }
        ]
      },
      {
        "title": "Laboratório de risco",
        "text": "Laboratório L07. Sem console, criar uma decisão de risco para três achados fictícios. Com console, apenas visualizar regras reais ou criar uma regra em tenant de estudo autorizado.\nMaterial local de apoio: L02 páginas PDF 43, 44, 45, 46, 49, 50, 1010. L03 itens 5, 8, 20, 21, 22, 28. L01 itens 16, 17, 18, 19, 20, 21, 28. CVSS, VPR, contexto e estados. Atualizar severidade com General Settings de 2026. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Findings",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/findings-intro.htm"
          },
          {
            "title": "Vulnerability States",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
          },
          {
            "title": "Add Recast, Change Result and Accept Rules",
            "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "08",
    "title": "08 Compliance, relatórios e resposta",
    "count": 8,
    "path": "Tenable/Slides/08",
    "extension": "png",
    "pptx": "Tenable/Slides/08_Compliance_relatórios_e_resposta_Tenable_v3.pptx",
    "notes": [
      {
        "title": "Compliance, relatórios e resposta",
        "text": "Objetivo do módulo: Interpretar audits e comunicar correção com dados rastreáveis. Ler as notas dos slides e as fontes oficiais. O roteiro local orienta as páginas do guia fornecido e aponta ambiguidades das questões antigas.",
        "references": [
          {
            "title": "Exame Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Cert.pdf"
          },
          {
            "title": "Curso Specialist: datasheet oficial",
            "url": "https://static.tenable.com/ps/DS_VM_Specialist_Course.pdf"
          }
        ]
      },
      {
        "title": "Vulnerabilidades e compliance",
        "text": "Escolher benchmark compatível com sistema, versão e perfil. Revisar controles não aplicáveis antes de interpretar percentuais.",
        "references": [
          {
            "title": "Compliance in Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
          },
          {
            "title": "System Hardening",
            "url": "https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm"
          }
        ]
      },
      {
        "title": "Audit files e customização",
        "text": "Exercício autoral: comparar um requisito de serviço com a evidência retornada. Testar caminhos then e else em um exemplo textual. Não fornecer um audit de produção não validado.",
        "references": [
          {
            "title": "Compliance in Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
          },
          {
            "title": "Compliance Checks Reference: Conditions",
            "url": "https://docs.tenable.com/nessus/compliance-checks-reference/Content/Conditions.htm"
          }
        ]
      },
      {
        "title": "Resultados de audits",
        "text": "Distinguir falha comprovada de resultado inconclusivo. Falta de privilégio ou coleta insuficiente requer investigação antes de classificar conformidade.",
        "references": [
          {
            "title": "System Hardening",
            "url": "https://docs.tenable.com/cyber-exposure-studies/system-hardening/Content/system-hardening.htm"
          }
        ]
      },
      {
        "title": "Dashboards e relatórios",
        "text": "Para a gestão, apresentar tendência, ativos afetados e responsáveis. Para operação, apresentar ativo, plugin, evidência e solução. Manter a mesma definição ao comparar períodos.\n\nInterface de referência: dados de demonstração Tenable. Captura oficial consultada em 14/10/2026.",
        "references": [
          {
            "title": "Create a Dashboard",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Dashboards/CreateADashboard.htm"
          },
          {
            "title": "Create Report API",
            "url": "https://developer.tenable.com/reference/vm-reports-create"
          },
          {
            "title": "Interface oficial Tenable Vulnerability Management",
            "url": "https://www.tenable.com/products/vulnerability-management"
          }
        ]
      },
      {
        "title": "Exports e evidência",
        "text": "Um total de relatório só pode ser reconciliado com outra view usando unidade de contagem, filtros, datas e permissões comparáveis.",
        "references": [
          {
            "title": "Exports",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
          },
          {
            "title": "Create Report API",
            "url": "https://developer.tenable.com/reference/vm-reports-create"
          }
        ]
      },
      {
        "title": "Exposure Response e acompanhamento",
        "text": "O curso oficial inclui Exposure Response. Estudar conceitos e fluxo do produto. Recursos e nomes podem mudar. Evitar ampliar a preparação para automação avançada fora do escopo Specialist.\n\nInterface de referência: dados de demonstração Tenable. Captura oficial consultada em 14/10/2026.",
        "references": [
          {
            "title": "Use Report Cards",
            "url": "https://docs.tenable.com/vulnerability-management/Content/exposure-response/use-report-cards.htm"
          },
          {
            "title": "Vulnerability States",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Explore/Findings/VulnerabilityStates.htm"
          },
          {
            "title": "Add Recast, Change Result and Accept Rules",
            "url": "https://docs.tenable.com/vulnerability-management/Content/recast/add-recast-rules.htm"
          },
          {
            "title": "Interface oficial Tenable Vulnerability Management",
            "url": "https://www.tenable.com/products/vulnerability-management"
          }
        ]
      },
      {
        "title": "Laboratório de comunicação",
        "text": "Laboratório L08. Dados fictícios: 40 ativos esperados, 28 observados e 20 com coleta autenticada confirmada. O relatório deve separar os denominadores e explicar a lacuna.\nMaterial local de apoio: L02 páginas PDF 98, 293, 294, 340. L03 itens 11, 17, 28, 33. L01 itens 13, 14, 22, 23, 26, 37. Audits e relatórios, com formatos e regras conferidos no produto VM. Consultar Fontes/revisao_material_local.md.",
        "references": [
          {
            "title": "Compliance in Scans",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Scans/Compliance.htm"
          },
          {
            "title": "Exports",
            "url": "https://docs.tenable.com/vulnerability-management/Content/Settings/Exports/Exports.htm"
          },
          {
            "title": "Use Report Cards",
            "url": "https://docs.tenable.com/vulnerability-management/Content/exposure-response/use-report-cards.htm"
          },
          {
            "title": "Guia oficial local de VM, 1.478 páginas",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/User Guide - Tenable Vulnerability Management.pdf"
          },
          {
            "title": "QUESTÕES: documento local com 33 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/QUESTÕES.docx"
          },
          {
            "title": "Compilado local de questões, 13 páginas e 41 itens",
            "url": "C:/Users/rafael.cordeiro/OneDrive - Subsecretaria de Tecnologia da Informação/SGG/Tenable/Doc/tenable_vulnerability_management_specialist_v3.pdf"
          }
        ]
      }
    ]
  }
];
  const byId = new Map(questions.map(q => [q.id,q]));
  const randomKey = 'tenable-random-pool-v1';
  const userRandomKey = () => typeof AuthGate !== 'undefined' ? (AuthGate.progressKey?.(randomKey) ?? randomKey) : randomKey;
  let randomSimulation;
  function sample() {
    const pool = questions.slice();
    for(let i=pool.length-1;i>0;i--) {
      const buffer=new Uint32Array(1); crypto.getRandomValues(buffer);
      const j=buffer[0]%(i+1); [pool[i],pool[j]]=[pool[j],pool[i]];
    }
    return pool.slice(0,60);
  }
  function storedPool() {
    try {
      const ids=JSON.parse(localStorage.getItem(userRandomKey()));
      if(Array.isArray(ids)&&ids.length===60&&new Set(ids).size===60&&ids.every(id=>byId.has(id))) return ids.map(id=>byId.get(id));
    } catch {}
    return questions.slice(0,60);
  }
  exams.forEach(exam => SIMULADOS.push({id:'tenable-'+exam.id,title:'Tenable · '+exam.title,course:'tenable',minutes:exam.minutes,questions:exam.ids.map(id=>byId.get(id))}));
  randomSimulation={id:'tenable-random60',title:'Tenable · Aleatório — 60 questões autorais',course:'tenable',minutes:120,random:true,questions:storedPool()};
  SIMULADOS.push(randomSimulation);
  function prepareAttempt(i) {
    if(SIMULADOS[i]!==randomSimulation) return;
    randomSimulation.questions=sample();
    try {localStorage.setItem(userRandomKey(),JSON.stringify(randomSimulation.questions.map(q=>q.id)));} catch {}
  }
  function restoreAttempt(i) {
    if (SIMULADOS[i] === randomSimulation) randomSimulation.questions = storedPool();
  }
  return {decks,slideCount:decks.reduce((n,d)=>n+d.count,0),uniqueCount:()=>260-(SIMULADOS.some(s=>s.id==='tenable-complementar100')?0:100),prepareAttempt,restoreAttempt};
})();
