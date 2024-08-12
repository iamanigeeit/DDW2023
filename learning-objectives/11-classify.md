---
sidebar_position: 10
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 11: Classifying Categorical Data



<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    W((Week 10 Logistic<br>Regression)) --> |creates| HYP((hypothesis))
    W --> |uses| CF((cost function))
    W --> |learns| METR((metrics))
    HYP --> |uses| PROB((probability))
    PROB --> |uses| LF((logistic function))
    LINF((linear function)) --> |maps to| LF
    LINF --> |has| COEFF((coefficients))
    PROB --> |determines| CAT((category))
    CAT --> |can be| MC((multi-class))
    CAT --> |can be| BIN((binary))
    MC --> |uses| ONEVALL((one-vs-all))
    ONEVALL --> |transforms to| BIN
    CF --> |uses| HYP
    MN((matrix notation)) --> |for| HYP
    MN --> |for| CF
    MN --> |for| UF((update function))
    CF --> |determines| UF
    GD((gradient descent)) --> |uses| CF
    GD --> |derives| UF
    UF --> |determines| COEFF
    METR --> |uses| CONFM((confusion matrix))
    CONFM --> |has| CAS((Cases))
    CAS --> |has| POS((Positives))
    CAS --> |has| NEG((Negatives))
    CONFM --> |calculates| SPEC((specificity))
    CONFM --> |calculates| SENS((sensitivity))
    CONFM --> |calculates| PREC((precision))
    CONFM --> |calculates| ACCR((accuracy))
    POS --> |can be| True
    POS --> |can be| False
    NEG --> |can be| True
    NEG --> |can be| False
```

See below if you need to zoom in.

![](https://www.dropbox.com/scl/fi/gt26374kwrt4k1lyfrcfz/DDW-Concept-Map-Week-10.drawio.png?rlkey=slg8113sew3hw7sfkclhi6p80&raw=1)
