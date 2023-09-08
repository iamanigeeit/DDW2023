---
sidebar_position: 2
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 2: Analysing Programs



<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    A((Week 2<br>Heap and Complexity)) --> |learns| DS((Data Structure))
    A --> |learns| AL((Algorithm))
    A --> |learns| C((Complexity))
    style DS color:red
    style AL color:red
    style C color:red
    C --> |learns| AN((Asymptotic<br>Notation))
    C --> |analyze| HS((Heapsort))
    style HS color:dodgerblue
    C --> |describes| CT((Computation<br>Time))
    style CT color:dodgerblue
    C --> |uses| CM((Computational<br>Model))
    AL --> |learns| HS
    AL --> |implements| BH((Build Heap))
    AL --> |implements| H((Heapify))
    DS --> |learns| BINH((Binary Heap))
    style BINH color:dodgerblue
    BINH --> |specific case of| BT((Binary Tree))
    BINH --> |uses| L((List))
    BINH --> |access| N((Node))
    BINH --> |maintains| HPROP((Heap Property))
    BINH --> |is used in| HS
    BINH --> |process| BH
    BT --> |specific case of| TR((Tree))
    BT --> |has two| CHLD((Children))
    N --> |access| PR((Parent))
    N --> |access| CHLD
    TR --> |has| LF((Leaf))
    TR --> |has| RT((Root))
    TR --> |has| N
    RT --> |is-a| N
    LF --> |is-a| N
    LF --> |has no| CHLD
    CHLD --> |access| LTCD((Left Child))
    CHLD --> |access| RTCD((Right Child))
    HPROP --> |uses| HY((Heapify))
    BH --> |uses| HY
    AL --> |implements| HY
    AN --> |defines| BGONN((Big-O Notation))
    BGONN --> |derive for| HS
    BGONN --> |derive for| BEST((Bubble Sort))
    BGONN --> |derive for| INST((Insertion Sort))
    HS --> |runs| LL((log linear))
    CT --> |for| HS
    CM --> |derive| CT
    CT --> |can be| LL
    CT --> |can be| LC((Logarithmic))
    CT --> |can be| LR((Linear))
    LC --> |faster than| LR
    LR --> |faster than| LL
    LL --> |faster than| QC((Quadratic))
    BEST --> |runs| QC
    CT --> |for| BEST
    INST --> |runs| QC
    CT --> |can be| QUBIC((Qubic))
    QC --> |faster than| QUBIC
    QUBIC --> |faster than| EXP((Exponential))
    CT --> |can be | EXP
```


See below if you need to zoom in.

![](https://www.dropbox.com/scl/fi/7gtdb13f6o1z8y3t1fqgz/DDW-Concept-Map-Week-2.drawio.png?rlkey=qtdx21r22gfume6gh4yrx0pdk&raw=1)
