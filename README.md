# 碳中和相关开源软件汇编

## 可再生能源

- [System Advisor Model](https://github.com/NREL/SAM)

 由美国能源部委托美国国家可再生能源实验室（NREL）开发的可再生能源项目评估模型软件。

 SAM软件可针对光伏、光热、风力、地热、生物质等几种可再生能源的发电成本及系统发电特性进行计算。通过导入所需测算地点的天气参数、系统类型、系统规模、系统盈利模式、及系统投资等参数既可得到系统均化发电成本，从而完成对可再生能源项目收益的初步测算。

 SAM软件主要包含两个仿真模型，即性能模型和融资模型。可再生能源混合能源系统项目设计人员可以通过SAM模拟计算进行项目技术性分析及经济性分析，对于项目前期开发有一定帮助。

- [SSC](https://github.com/NREL/ssc)

 [SAM](https://github.com/NREL/SAM)模型的性能模型和融资模型计算内核源代码。

 在[SAM的github版本库](https://github.com/NREL/SAM)中提供了ssc及sam的详细编译安装过程(https://github.com/NREL/SAM/wiki)。ssc编译之后以动态链接库（Windows平台是ssc.dll，Linux平台是ssc.so, Mac平台是ssc.dylib）的形式支撑sam，sam是基于wxWidgets编写的GUI壳。


