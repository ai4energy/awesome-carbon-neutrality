var documenterSearchIndex = {"docs":
[{"location":"RenewableEnergy/1-SAM/#SAM（System-Advisor-Model）","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/#简介","page":"SAM（System Advisor Model）","title":"简介","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"SAM（System Advisor Model）是由美国国家可再生能源实验室（NREL）开发的一款强大的可再生能源系统建模和分析工具。SAM旨在支持工程师、研究人员和政策制定者进行可再生能源项目的设计、评估和优化。","category":"page"},{"location":"RenewableEnergy/1-SAM/#特点和功能","page":"SAM（System Advisor Model）","title":"特点和功能","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"以下是SAM的主要特点和功能：","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"多种能源技术支持：SAM支持太阳能光伏、太阳能热能、风能、生物质能源、地热能等多种可再生能源技术。用户可以使用SAM对这些技术进行建模和分析。\n系统模型：SAM提供了对整个能源系统的建模能力。用户可以构建完整的可再生能源系统，包括发电设备、储能系统、能量转换和输电设备等。\n大量的输入数据：SAM包含了广泛的气象数据、设备规格和经济参数，以支持准确的建模和分析。用户可以根据实际情况输入所需数据，SAM将基于这些数据生成详细的能源系统性能报告。\n经济性分析：SAM能够评估可再生能源项目的经济性。它提供了成本模型、财务模型和投资回报率等经济指标，帮助用户评估项目的盈利能力和可行性。\n可视化工具：SAM提供了丰富的图表和图形界面，使用户能够直观地查看和理解模型结果。用户可以通过图表分析系统的性能、能源输出、负载曲线等。\n系统优化：SAM允许用户通过对不同设计和配置方案进行比较和优化来改进能源系统的性能和经济性。","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"SAM是一个非常强大且广泛使用的工具，用于分析和优化可再生能源项目。它提供了丰富的功能和灵活的建模能力，使用户能够进行全面的技术、经济和环境评估。","category":"page"},{"location":"RenewableEnergy/1-SAM/#基础信息","page":"SAM（System Advisor Model）","title":"基础信息","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"以下是关于SAM（System Advisor Model）的基础信息：","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"项目网址：SAM的官方网站为 https://sam.nrel.gov/\n源码网址：SAM的源代码托管在GitHub上，可以在以下链接找到：https://github.com/NREL/SAM\n开发者：SAM是由美国国家可再生能源实验室（NREL）开发的项目。\n起始时间：SAM项目的起始时间可以追溯到2004年，最早的版本是为了支持光伏技术的建模和分析。\n最后更新时间：截止到我知识库的更新（2021年9月），SAM的最新版本是2021.1.17版，发布于2021年1月。请注意，SAM是一个活跃的开源项目，因此可能会有新的更新发布。\nLicense：SAM的源代码采用NREL BSD 3-Clause许可证。该许可证是一种开放源代码许可证，允许用户自由使用、修改和分发SAM的源代码。","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"请注意，以上信息可能会有更新和变动，建议在访问SAM官方网站和GitHub页面时查看最新信息。","category":"page"},{"location":"RenewableEnergy/1-SAM/#SAM的系统构成","page":"SAM（System Advisor Model）","title":"SAM的系统构成","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"SAM（System Advisor Model）由多个模块和组件组成，以支持可再生能源系统的建模和分析。以下是SAM的主要系统构成：","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"Graphical User Interface (GUI)：SAM的图形用户界面提供了直观的操作界面，允许用户进行系统配置、输入数据、运行模拟和分析结果等操作。\nCore Calculation Engine：核心计算引擎是SAM的计算核心，它执行系统模型的计算和分析。该引擎涵盖了多个模块和组件，用于处理不同的可再生能源技术和系统配置。\nMeteorological Data：SAM使用气象数据来模拟可再生能源系统的性能。用户可以导入实测或合成的气象数据，如太阳辐射、风速等，用于系统建模和分析。\nResource Assessment：资源评估模块用于评估可再生能源资源的可利用程度。它包括太阳能资源评估和风能资源评估等子模块，用于确定系统在特定地点和时间的能源产量。\nPerformance Model：性能模型是SAM的关键组件，用于模拟和计算可再生能源系统的发电能力和效率。它包括光伏性能模型、风力发电机性能模型等，根据设备规格和环境条件估计系统的发电产量。\nFinancial Model：金融模型用于评估可再生能源项目的经济性。它包括成本模型、财务模型和投资回报模型等，计算项目的成本、收益和盈利能力。\nSystem Optimization：系统优化模块允许用户对可再生能源系统进行优化。它提供了参数扫描、灵敏度分析和最优配置搜索等功能，以帮助用户找到最佳的系统设计和配置方案。\nResults and Reporting：SAM提供了丰富的结果和报告功能，用于展示模拟结果和分析数据。用户可以查看和导出能源产量、经济性指标、图表等，以支持决策和沟通。","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"这些组件和模块共同构成了SAM的系统架构，为用户提供了一个综合的可再生能源系统建模和分析平台。不同的模块和组件可以根据用户的需求进行配置和使用。","category":"page"},{"location":"RenewableEnergy/1-SAM/#核心库和模块","page":"SAM（System Advisor Model）","title":"核心库和模块","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"SAM（System Advisor Model）包括多个核心库和模块，用于支持可再生能源系统的建模和分析。以下是SAM的一些核心库和模块：","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"SSC（SAM Simulation Core）：SSC是SAM的核心库，提供了模拟和计算可再生能源系统性能的基础功能。它包含了各种函数和模型，用于建模光伏发电、风能发电、热能系统等技术。\nLK（Layout and Optimization Kernel）：LK是SAM的布局和优化核心模块，用于系统布局和优化分析。它支持用户对可再生能源系统的组件进行排列和配置，并进行灵活的布局和参数优化。\nTCS（Thermal Conversion Systems）：TCS是SAM的热能转换系统模块，用于建模和分析太阳能热能系统的性能。它包括太阳能热发电、太阳能热水等热能转换技术的模型和计算功能。\nPV（Photovoltaic）：PV模块用于建模和分析光伏发电系统的性能。它包括光伏组件的性能模型、阵列布局和阴影分析等功能。\nWind Power：风能模块用于建模和分析风能发电系统的性能。它包括风力涡轮机性能模型、风速分布分析和风电场布局等功能。\nBio Power：生物能模块用于建模和分析生物质能源系统的性能。它包括生物质燃烧发电、生物质气化等生物能技术的模型和计算功能。\nGeothermal Power：地热能模块用于建模和分析地热能发电系统的性能。它包括地热蒸汽发电、地热热泵等地热能技术的模型和计算功能。","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"除了上述核心库和模块，SAM还包括其他辅助模块和工具，例如气象数据处理、经济性分析、系统优化等。这些核心库和模块共同构成了SAM的功能和特性，为用户提供了一个综合的可再生能源系统建模和分析平台。","category":"page"},{"location":"RenewableEnergy/1-SAM/#使用方法极简介绍","page":"SAM（System Advisor Model）","title":"使用方法极简介绍","text":"","category":"section"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"使用SAM可以进行复杂的可再生能源系统建模和分析，以下是一个简单的使用方法介绍：","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"下载和安装：首先，您需要从SAM的官方网站（https://sam.nrel.gov/）下载适合您操作系统的安装程序，并按照说明进行安装。\n创建项目：启动SAM后，您可以创建一个新项目或打开现有项目。选择创建新项目并为其命名。\n选择技术：SAM支持多种可再生能源技术，例如太阳能光伏、风能等。在项目中选择您要建模和分析的技术。\n输入数据：SAM需要输入数据来进行建模和分析。这些数据包括气象数据、设备规格、经济参数等。您可以手动输入数据，也可以导入外部数据文件。\n配置系统：在SAM中配置您的能源系统。根据您选择的技术和项目要求，添加发电设备、储能系统、输电线路等组件，并设置其参数和规格。\n运行模拟：完成配置后，您可以运行模拟来评估系统的性能。SAM将基于输入数据和系统配置生成详细的模拟结果。\n分析结果：SAM提供了丰富的分析工具和图表，以帮助您理解和解释模拟结果。您可以查看能源产量、经济性指标、负载曲线等数据，并进行比较和优化。\n导出报告：在完成分析后，您可以导出报告，其中包括模拟结果、图表和其他相关信息。报告可以用于进一步的研究、决策和沟通。","category":"page"},{"location":"RenewableEnergy/1-SAM/","page":"SAM（System Advisor Model）","title":"SAM（System Advisor Model）","text":"请注意，SAM是一个功能强大而复杂的工具，这里只是提供了一个简要的使用方法概述。对于详细的操作步骤和特定技术的建模细节，建议参考SAM的官方文档和用户指南，其中包含了更详细的说明和示例。","category":"page"},{"location":"#碳中和开源软件汇编","page":"Home","title":"碳中和开源软件汇编","text":"","category":"section"},{"location":"#可再生能源","page":"Home","title":"可再生能源","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = map(file -> joinpath(\"RenewableEnergy\", file), readdir(\"RenewableEnergy\"))","category":"page"}]
}
