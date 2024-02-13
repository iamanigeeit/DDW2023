---
sidebar_position: 3
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 3: Divide and Conquer



<ChatBaseBubble/>

### Concept Map

![](https://www.dropbox.com/scl/fi/b3khm2mmgpbs6uf04ua03/DDW-Concept-Map-Week-3.drawio.png?rlkey=bv1zxg85e94ccpqa925bjupyg&raw=1)

```mermaid
flowchart TD
    A((Week 3<br>Recursion and Mergesort)) --> |learns| ALGO((Algorithm))
    ALGO --> |learns| C((Complexity))
    ALGO --> |learns| R((Recursion))
    ALGO --> |learns| S((Sorting))
    C  --> |computes| CT((Computational Time))
    R --> |as compared to| ITER((Iteration))
    R --> |may use| HF((Helper Function))
    R --> |has| CS((cases))
    S --> |learns| MS((Mergesort))
    CT --> |draw| RT((Recursive Tree))
    CT --> |can be| EXP((exponential))
    EXP --> |for| TOH
    CT --> |can be| LL((Log Linear))
    MS --> |uses| R
    CS --> |uses| IE((if-else))
    CS --> |has| BASE((base))
    CS --> |has| REC((recursive))
    RT --> |for| TOH((Tower of Hanoi))
    RT --> |for| MS
    LL --> |for| MS
    TOH --> |uses| R
    CT --> |for| R
```


