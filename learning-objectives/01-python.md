---
sidebar_position: 1
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 1: Python
<ChatBaseBubble/>

### Concept Map

<ImageCard path={require("./images/DDW Concept Map-Week 1.drawio.png").default} widthPercentage="100%"/>

```mermaid
flowchart TD
    A((Week 1 Sorting Algorithm)) --> |requires| B((Identifying<br>input and output))
    A --> |work with| PDS((Primitive Data Structure))
    PDS --> |work with| PDS1((int))
    PDS --> |work with| PDS2((float))
    PDS --> |work with| PDS3((str))
    A --> |write| C((user-defined<br> function))
    A --> |learns| D((Bubble sort))
    A --> |learns| H((Insertion Sort))
    A --> |write| K((if-statement))
    A --> |traversing| PY((Python's list))
    C --> |write| C1((function defintion))
    C --> |write| C2((function call))
    C1 --> |uses| C11((local variables))
    C1 --> |specify| C12((return values))
    C1 --> |defining| C13((input parameters))
    C13 --> |aliasing| PY
    C2 --> |pass| C21((arguments))
    D --> |requires| E((Counting))
    D --> |swap| G((Elements))
    E --> |using| F((Compound Operator))
    H --> |swap| G
    ALG((algorithm)) --> |describes| D
    ALG((algorithm)) --> |describes| H
    OPT((optimise)) --> D
    OPT((optimise)) --> H
    K --> |compare| G
    K --> |uses| K1((relational<br> operators))
    K --> |uses| K2((boolean<br> operators))
    SRT((Sorting)) --> |uses| CMP((Comparing))
    SRT --> |implements| D
    SRT --> |implements| H
    SRT --> |uses| TV((Traversing))
    TV --> |over| PY
    CMP --> |uses| K
    PY --> |determine| PY1((length))
    PY --> |access| G
    PY --> |write| PY2((for-loop))
    PY --> |write| PY3((while-loop))
    PY2 --> |using| PY21((range))
    PY2 --> |write| PY22((nested))
    PY22 --> |determines which to use| PY221((index))
    PY3 --> |uses| PY31((boolean values))
    L((generating<br>random integer)) --> |requires| L1((import))
    L --> |uses| PY21
    L --> |calls| L2((built-in<br>function))
    L --> |uses| C
    L --> |returns| PY
    L --> |uses| C1


```

