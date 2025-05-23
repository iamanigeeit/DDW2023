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

<ImageCard path={require("./images/DDW Concept Map-Week 2.drawio.png").default} widthPercentage="100%"/>

```mermaid
flowchart TD
    A((Week 2<br>Heap and Complexity)) --> |learns| DS((Data Structure))
    DS --> |learns| BINH((Binary Heap))
    style BINH color:dodgerblue
    BINH --> |specific case of| BT((Binary Tree))
    BINH --> |uses| L((Python's<br>List))
    BINH --> |access| N((Node))
    BINH --> |maintains| HPROP((Heap Property))
    BINH --> |is used in| HS((Heapsort))
    BINH --> |process| BH((Build Heap))
    BT --> |specific case of| TR((Tree))
    BT --> |has two| CHLD((Children))
    TR --> |has| LF((Leaf))
    TR --> |has| RT((Root))
    TR --> |has| N
    LF --> |is-a| N
    LF --> |has no| CHLD
    RT --> |is-a| N
    N --> |access| PR((Parent))
    N --> |access| CHLD
    CHLD --> |access| LTCD((Left Child))
    CHLD --> |access| RTCD((Right Child))
    CHLD --> |can be| MAXC((Max-Child))
    CHLD --> |can be| MINC((Min-Child))
    HPROP --> |uses| H((Heapify))
    HPROP --> |can be| MAXHP((Max-Heap))
    HPROP --> |can be| MINHP((Min-Heap))
    MAXHP --> |finds| MAXC
    MINHP --> |finds| MINC
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
    BH --> |uses| H
    AL --> |implements| H
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
    CT --> |for| INST
    INST --> |runs| QC
    CT --> |can be| QUBIC((Qubic))
    QC --> |faster than| QUBIC
    QUBIC --> |faster than| EXP((Exponential))
    CT --> |can be | EXP
```

