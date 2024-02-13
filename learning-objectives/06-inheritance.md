---
sidebar_position: 6
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 6: Inheritance and Object-Oriented Design


<ChatBaseBubble/>

### Concept Map

![](https://www.dropbox.com/scl/fi/93ixr3fbfym1f1jmsgs9u/DDW-Concept-Map-Week-6.drawio.png?rlkey=5gspzdgwrhnz8pcuue7jnsj6v&raw=1)

```mermaid
flowchart TD
    W((Week 6<br>Inheritance and<br>Abstract Base Class)) --> |learns| OO((Object Oriented<br>Programming))
    style OO color:red
    W((Week 6<br>Inheritance and<br>Abstract Base Class)) --> |learns| DS((Data Structure))
    style DS color:red
    OO --> |learns| INH((Inheritance))
    OO --> |learns| UML((UML<br>Diagram))
    style INH color:blue
    OO --> |learns| ABC((Abstract Base<br>Class))
    style ABC color:blue
    INH --> |requires| PK((Prior Knowledge))
    INH --> |defines| CC((Child Class))
    PK --> |defines| CLA((Class))
    PK --> |instantiates| OBJ(Object)
    CLA --> |defines| PRO((Property))
    PRO --> |encapsulates| ATTR
    CLA --> |defines| ATTR((Attribute))
    CLA --> |defines| METH((Methods))
    OBJ --> CLA
    OBJ --> |access| ATTR
    OBJ --> |calls| METH
    ABC --> |uses| PABC((Python's<br>Abstract Base<br>Class))
    ABC --> |enforces implementation in| CC
    CC --> |inherits from| PABC
    CC --> |inherits from| PC
    CC --> |has| METH
    CC --> |has| ATTR
    CC --> |can use| SUP((super))
    CC --> |can| OVE((override))
    SUP --> |to access| PC((parent class))
    SUP --> |to access| METH
    OVE --> METH
    UML --> |for| ISAR((is-a<br>relationship))
    ISAR --> |has| CC
    ISAR --> |has| PC
    INH --> |is| ISAR
    ABCI((abc.Iterable)) --> |is| PABC
    ABCI --> |is| ABC
    MyAbstractList --> |inherits from| ABCI
    MAL --> |is| ABC
    DS --> |learns| DEQ((Deque))
    DEQ --> |inherits from| QUE(Queue)
    QUE --> |is| PC
    DS --> |learns| ADT((Abstract Data<br>Type))
    ADT --> |implements| LIST((List))
    ADT --> |implements| BO((Basic Operations))
    LIST --> |implements| MyArrayList
    LIST --> |implements| MyLinkedList
    MyArrayList --> |inherits from| MyAbstractList
    MyArrayList --> |implemented using| FSA((Fixed Size Array))
    MyLinkedList --> |inherits from| MyAbstractList
    MyLinkedList --> |implemented using| LL((Linked List))
    LL --> |implements| BO
    FSA --> |implements| BO
    BO --> |has| INS((insert))
    BO --> |has| REM((remove))
    BO --> |has| ADD((add))
    BO --> |for| ELE((elements))
    LIST --> |has| ELE
    LIST --> |has| BO
    INS --> ELE
    REM --> ELE
    ADD --> ELE

```

