---
sidebar_position: 5
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 5: Searching Data


<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    PK((Prior Knowledge)) --> |how to| CE((check element))
    style PK color:red
    PK --> |how to| A((Access))
    PK --> |how to| T((Traverse))
    PK --> |how to| CT((Create))
    PK --> |on| DT((Dictionary))
    style DT color:dodgerblue
    A -->  K((key))
    A -->  V((value))
    CE --> |in a| L((List))
    style L color:dodgerblue
    T --> K
    T --> L
    CT --> DT
    DT --> |has| V
    DT --> K
    L --> |as| V
    W((Week 5<br>Graph and Graph Search)) --> |requires| PK
    W --> |learns| DS((Data Structure))
    style DS color:red
    DS --> |learns| G((Graph))
    G --> |represented using| AM((Adjacency Matrix))
    G --> |represented using| AL((Adjacency List))
    AL --> |implemented using| DT
    AL --> |uses| L
    AL --> |implemented using| OO((Object Oriented))
    G --> |creates| VX((Vertex))
    G --> |can have| D((direction))
    G --> |has| VS((Vertices))
    VS --> |is a| DT
    W --> |learns| ALGO((Algorithm))
    style ALGO color:red
    ALGO --> |implements| S2D((Search2D))
    S2D --> |has a| GS((Graph Search))
    GS --> |is a child of| G
    VS --> |collection of| V
    VX  --> |has| ID((id_))
    VX --> |has| N((neighbours))
    N --> |collection of| VX
    OO --> |defines| CL((Class))
    CL --> |for| VX
    N --> |is a| DT
    N --> |for key| DV((destination Vertex))
    N --> |for value| WEIGHT((weight))
    D --> |has| EDGE((Edge))
    EDGE --> |has| WEIGHT
    N --> |describes| EDGE
    EDGE --> |connects two| VX
    GS --> |creates| VSH((Vertex Search))
    VSH --> |is a child of| VX
    VSH --> |has| CDFP((color,d,f,parent))
    UGS((UGraphSearch)) --> |is a child of| GS
    UGS --> |for| UG((Undirected Graph))
    UG --> |has| BD((bidirectional))
    BD --> EDGE
    SBFS((SearchBFS)) --> |uses| GS
    SBFS --> |is a child of| S2D
    SBFS --> |implements| BFS((Breadth-First Search))
    SBFS --> |uses| CDFP
    SBFS --> |uses| UGS
    SBFS --> |uses| CDFP
    SDFS((SearchDFS)) --> |implements| DFS((Depth-First Search))
    SDFS --> |uses| CDFP
    SDFS --> |is a child of| S2D
    TS((Topological Search)) --> |uses| SDFS
    DFS --> |application| TS
```

See below if you need to zoom in.

![](https://www.dropbox.com/scl/fi/kxkl5112qw81pmruroc2w/DDW-Concept-Map-Week-5.drawio.png?rlkey=wu4ctxusyxkof1z75bkhiz8jp&raw=1)
