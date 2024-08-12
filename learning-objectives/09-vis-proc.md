---
sidebar_position: 8
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 9: Visualizing and Processing Data


<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    W((Week 8<br>Working with Data and<br>Visualizing Data)) --> |is about| DAT((Data))
    DAT --> |read as| DF((Data Frame))
    DAT --> |can be| SER((Series))
    DF --> |can be extracted as| SER
    DF --> |has| COL((columns))
    DF --> |has| IDX((index))
    DF --> |has| OPE((Operations))
    DF --> |is| D2((two-dimensional))
    OPE --> |includes| TRA((Transforming))
    TRA --> TRAP((Transpose))
    TRA --> VO((vectorized operation))
    VO --> |uses| APPL((apply))
    OPE --> |includes| STAT((Statistical))
    OPE --> |includes| COPY((Copying))
    OPE --> |includes| CREA((Creating))
    OPE --> |includes| ACCESS((Accessing))
    ACCESS --> DF
    ACCESS --> SER
    ACCESS --> ILOC(("df.iloc[pos,pos]"))
    ACCESS --> LOC(("df.loc[index,column]"))
    ACCESS --> DFNAME(("df[name]"))
    SER --> |is| D1((one-dimensional))
    SER --> |is| DAT
    DAT --> |creates| VIZ((Visualization))
    VIZ --> |describes| REL((relationships))
    REL --> |can use| LINE((line))
    REL --> |can use| SCAT((scatter))
    REL --> |can use| PAIR((pair))
    VIZ --> |describes| CAT((category))
    CAT --> |can use| BAR((bar))
    CAT--> |can use| BOX((box))
    VIZ --> |describes| DIST((distribution))
    DIST --> |can use| BOX
    DIST --> |can use| PAIR
    DIST --> |can use| HIST((histogram))
    DAT --> |apply| NORM((Normalization))
    DAT --> |creates| DATSET((Dataset))
    NORM --> |can be| ZNORM((Z Norm))
    NORM --> |can be| MINMAX((min-max))
    DATSET --> |split into| TEST((Test))
    DATSET --> |split into| VAL((Validation))
    DATSET --> |split into| TRAIN((Training))

```

See below if you need to zoom in.

![](https://www.dropbox.com/scl/fi/zwlnkasl3uv5gkvojvbih/DDW-Concept-Map-Week-8.drawio.png?rlkey=xz5s31ah1whlwlpsn8p3sqm8w&raw=1)
