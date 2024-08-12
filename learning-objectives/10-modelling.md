---
sidebar_position: 9
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 10: Modelling Continuous Data



<ChatBaseBubble/>

### Concept Map

![](https://www.dropbox.com/scl/fi/4kusbrn45cvrzykreooy8/DDW-Concept-Map-Week-9.drawio.png?rlkey=27oljt84tuases7x5651kz4vd&raw=1)

```mermaid
flowchart TD
    W((Week 9 Linear<br>Regression)) --> |creates| HYP((hypothesis))    
    W --> |has| DATSET((dataset))
    W --> |computes| COST((cost))
    W --> |evaluates| METR((metrics))
    HYP --> |can be| LIN((linear))
    LIN --> |is| SL((straight line))
    HYP --> |can be| MLR((multiple linear<br>regression))
    MLR --> |can be| POLY((polynomial))
    COEFF((coefficients)) --> |of| SL
    COEFF --> |of| POLY
    HYP --> |computes| COST
    DATSET --> |has| TAR((target))
    TAR --> |computes| COST
    CF((cost function)) --> |computes| COST
    OPT((optimization)) --> |minimize| COST
    OPT --> |calculating| CF
    OPT --> |using| GD((gradient descent))
    GD --> |derives| UF((update function))
    UF --> |computes| COEFF
    MF((matrix form)) --> |of| UF
    MF --> |of| HYP
    MF --> |of| CF
    METR --> |can be| MSE((mean squared error))
    METR --> |can be| R2((r^2))
```
